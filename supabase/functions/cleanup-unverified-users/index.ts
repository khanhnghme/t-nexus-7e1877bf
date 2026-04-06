import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    // Get cutoff time: 15 minutes ago
    const cutoff = new Date(Date.now() - 15 * 60 * 1000).toISOString();

    // List users who have NOT confirmed email and were created > 15 min ago
    // We need to paginate through users
    const deletedUsers: string[] = [];
    let page = 1;
    const perPage = 100;

    while (true) {
      const { data: { users }, error } = await supabase.auth.admin.listUsers({
        page,
        perPage,
      });

      if (error) {
        console.error("Error listing users:", error.message);
        break;
      }

      if (!users || users.length === 0) break;

      for (const user of users) {
        // Skip if email is confirmed
        if (user.email_confirmed_at) continue;

        // Skip if created less than 15 minutes ago
        const createdAt = new Date(user.created_at).getTime();
        const cutoffMs = Date.now() - 15 * 60 * 1000;
        if (createdAt > cutoffMs) continue;

        // Delete the user
        const { error: deleteError } = await supabase.auth.admin.deleteUser(
          user.id
        );

        if (deleteError) {
          console.error(
            `Failed to delete user ${user.id}: ${deleteError.message}`
          );
        } else {
          deletedUsers.push(user.id);
          console.log(
            `Deleted unverified user: ${user.id} (${user.email}), created at ${user.created_at}`
          );
        }
      }

      if (users.length < perPage) break;
      page++;
    }

    return new Response(
      JSON.stringify({
        success: true,
        deleted_count: deletedUsers.length,
        deleted_user_ids: deletedUsers,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (err) {
    console.error("Cleanup error:", err);
    return new Response(
      JSON.stringify({ error: err.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
