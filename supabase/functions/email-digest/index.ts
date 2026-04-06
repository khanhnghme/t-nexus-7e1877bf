import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceKey);

    // Parse body for force flag
    let force = false;
    try {
      const body = await req.json();
      force = body?.force === true;
    } catch { /* no body or invalid json */ }

    // 1. Check system setting
    const { data: setting } = await supabase
      .from("system_settings")
      .select("value")
      .eq("key", "email_daily_digest")
      .single();

    if (!setting?.value?.enabled) {
      return new Response(
        JSON.stringify({ message: "Email digest is disabled", sent: 0 }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 2. Schedule check - skip if not the right time (unless forced)
    if (!force) {
      const scheduledHour = setting.value.scheduled_hour ?? 8;
      const scheduledMinute = setting.value.scheduled_minute ?? 0;
      const now = new Date();
      // Use UTC+7 for Vietnam timezone
      const vnHour = (now.getUTCHours() + 7) % 24;
      const vnMinute = now.getUTCMinutes();

      // Allow a 15-minute window from the scheduled time
      const scheduledTotalMin = scheduledHour * 60 + scheduledMinute;
      const currentTotalMin = vnHour * 60 + vnMinute;
      const diff = currentTotalMin - scheduledTotalMin;

      if (diff < 0 || diff >= 15) {
        return new Response(
          JSON.stringify({ message: "Not scheduled time", sent: 0 }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    const deadlineHours = setting.value.deadline_hours || 24;
    const now = new Date();
    const deadlineCutoff = new Date(
      now.getTime() + deadlineHours * 60 * 60 * 1000
    ).toISOString();
    const newTaskCutoff = new Date(
      now.getTime() - 24 * 60 * 60 * 1000
    ).toISOString();
    const todayStart = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    ).toISOString();

    // 3. Query tasks with upcoming deadlines
    const { data: deadlineTasks } = await supabase
      .from("task_assignments")
      .select(
        "user_id, tasks!inner(id, title, deadline, group_id, groups!inner(name))"
      )
      .not("tasks.deadline", "is", null)
      .gte("tasks.deadline", now.toISOString())
      .lte("tasks.deadline", deadlineCutoff)
      .neq("tasks.status", "DONE")
      .neq("tasks.status", "VERIFIED");

    // 4. Query new tasks created in last 24h
    const { data: newTasks } = await supabase
      .from("task_assignments")
      .select(
        "user_id, tasks!inner(id, title, deadline, created_at, group_id, groups!inner(name))"
      )
      .gte("tasks.created_at", newTaskCutoff);

    // 5. Group by user
    const userDigests: Record<
      string,
      {
        deadlines: Array<{ title: string; deadline: string; project: string }>;
        newTasks: Array<{ title: string; deadline: string | null; project: string }>;
      }
    > = {};

    deadlineTasks?.forEach((row: any) => {
      const uid = row.user_id;
      if (!userDigests[uid]) userDigests[uid] = { deadlines: [], newTasks: [] };
      userDigests[uid].deadlines.push({
        title: row.tasks.title,
        deadline: row.tasks.deadline,
        project: row.tasks.groups.name,
      });
    });

    newTasks?.forEach((row: any) => {
      const uid = row.user_id;
      if (!userDigests[uid]) userDigests[uid] = { deadlines: [], newTasks: [] };
      const exists = userDigests[uid].newTasks.some(
        (t) => t.title === row.tasks.title && t.project === row.tasks.groups.name
      );
      if (!exists) {
        userDigests[uid].newTasks.push({
          title: row.tasks.title,
          deadline: row.tasks.deadline,
          project: row.tasks.groups.name,
        });
      }
    });

    const userIds = Object.keys(userDigests).filter(
      (uid) =>
        userDigests[uid].deadlines.length > 0 ||
        userDigests[uid].newTasks.length > 0
    );

    if (userIds.length === 0) {
      return new Response(
        JSON.stringify({ message: "No users with relevant tasks", sent: 0, skipped: 0 }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // 6. Get profiles
    const { data: profiles } = await supabase
      .from("profiles")
      .select("id, full_name, email, email_notifications")
      .in("id", userIds);

    // 7. Check already sent today
    const { data: sentToday } = await supabase
      .from("email_logs")
      .select("user_id")
      .eq("email_type", "daily_digest")
      .gte("sent_at", todayStart);

    const alreadySent = new Set(sentToday?.map((r: any) => r.user_id) || []);

    let sent = 0;
    let skipped = 0;

    for (const profile of profiles || []) {
      if (profile.email_notifications === false) { skipped++; continue; }
      if (alreadySent.has(profile.id)) { skipped++; continue; }

      const digest = userDigests[profile.id];
      if (!digest) continue;

      const totalTasks = digest.deadlines.length + digest.newTasks.length;

      const subject = `📊 Cập nhật hàng ngày${
        digest.deadlines.length > 0 ? ` - ${digest.deadlines.length} deadline sắp hết` : ""
      }${digest.newTasks.length > 0 ? ` + ${digest.newTasks.length} task mới` : ""}`;

      let html = `
        <div style="font-family: 'Be Vietnam Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
          <div style="background: hsl(183, 100%, 21%); padding: 24px 32px; color: white;">
            <h1 style="margin: 0; font-size: 20px;">📊 Cập nhật hàng ngày</h1>
            <p style="margin: 8px 0 0; opacity: 0.9; font-size: 14px;">Xin chào ${profile.full_name},</p>
          </div>
          <div style="padding: 24px 32px;">
      `;

      if (digest.deadlines.length > 0) {
        html += `<h2 style="color: #dc2626; font-size: 16px; margin: 0 0 12px;">⏰ Deadline sắp hết (${digest.deadlines.length} task)</h2><div style="margin-bottom: 20px;">`;
        for (const task of digest.deadlines) {
          const deadline = new Date(task.deadline);
          const hoursLeft = Math.round((deadline.getTime() - now.getTime()) / (1000 * 60 * 60));
          html += `<div style="padding: 10px 14px; margin-bottom: 8px; background: #fef2f2; border-radius: 8px; border-left: 3px solid #dc2626;">
            <strong style="color: hsl(220, 20%, 10%);">${task.title}</strong>
            <div style="font-size: 13px; color: hsl(220, 9%, 46%); margin-top: 4px;">📁 ${task.project} · còn ${hoursLeft}h</div>
          </div>`;
        }
        html += `</div>`;
      }

      if (digest.newTasks.length > 0) {
        html += `<h2 style="color: hsl(183, 100%, 21%); font-size: 16px; margin: 0 0 12px;">📋 Task mới được giao (${digest.newTasks.length} task)</h2><div style="margin-bottom: 20px;">`;
        for (const task of digest.newTasks) {
          const deadlineStr = task.deadline ? new Date(task.deadline).toLocaleDateString("vi-VN") : "Chưa có";
          html += `<div style="padding: 10px 14px; margin-bottom: 8px; background: hsl(183, 40%, 93%); border-radius: 8px; border-left: 3px solid hsl(183, 100%, 21%);">
            <strong style="color: hsl(220, 20%, 10%);">${task.title}</strong>
            <div style="font-size: 13px; color: hsl(220, 9%, 46%); margin-top: 4px;">📁 ${task.project} · ⏰ Deadline: ${deadlineStr}</div>
          </div>`;
        }
        html += `</div>`;
      }

      html += `
            <div style="text-align: center; margin-top: 24px;">
              <p style="color: hsl(220, 9%, 46%); font-size: 13px;">Truy cập hệ thống để xem chi tiết.</p>
            </div>
          </div>
          <div style="background: #f9fafb; padding: 16px 32px; text-align: center; font-size: 12px; color: #9ca3af;">
            Email tự động từ T-Nexus · Bạn có thể tắt trong Thông tin cá nhân
          </div>
        </div>
      `;

      const messageId = crypto.randomUUID();

      await supabase.from('email_send_log').insert({
        message_id: messageId,
        template_name: 'daily_digest',
        recipient_email: profile.email,
        status: 'pending',
      });

      const senderEmail = Deno.env.get('SENDER_EMAIL') || 'noreply@lovable.app';
      const { error: enqueueError } = await supabase.rpc('enqueue_email', {
        queue_name: 'transactional_emails',
        payload: {
          message_id: messageId,
          to: profile.email,
          from: senderEmail,
          subject,
          html,
          text: `Cập nhật hàng ngày: ${digest.deadlines.length} deadline sắp hết, ${digest.newTasks.length} task mới.`,
          purpose: 'transactional',
          label: 'daily_digest',
          idempotency_key: `daily-digest-${messageId}`,
          queued_at: new Date().toISOString(),
        },
      });

      if (!enqueueError) {
        await supabase.from("email_logs").insert({
          user_id: profile.id,
          email_type: "daily_digest",
          recipient_email: profile.email,
          tasks_count: totalTasks,
          digest_data: {
            deadlines_count: digest.deadlines.length,
            new_tasks_count: digest.newTasks.length,
          },
        });
        sent++;
      } else {
        console.error(`Failed to enqueue digest for ${profile.email}:`, enqueueError);
        skipped++;
      }
    }

    return new Response(
      JSON.stringify({ sent, skipped, total_users: userIds.length }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Email digest error:", error);
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
