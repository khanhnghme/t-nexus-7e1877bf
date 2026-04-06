import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const url = new URL(req.url)
    const projectSlug = url.searchParams.get('projectSlug')
    const taskSlug = url.searchParams.get('taskSlug')

    if (!projectSlug || !taskSlug) {
      return new Response(
        JSON.stringify({ error: 'Missing projectSlug or taskSlug' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

    const supabase = createClient(supabaseUrl, serviceRoleKey)

    // Find project by slug
    const { data: group, error: groupError } = await supabase
      .from('groups')
      .select('id, name, slug')
      .eq('slug', projectSlug)
      .single()

    if (groupError || !group) {
      return new Response(
        JSON.stringify({ error: 'Project not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Find task by slug within project
    const { data: task, error: taskError } = await supabase
      .from('tasks')
      .select('id, title, submission_link, slug')
      .eq('group_id', group.id)
      .eq('slug', taskSlug)
      .single()

    if (taskError || !task) {
      return new Response(
        JSON.stringify({ error: 'Task not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Parse files from submission_link (current files only)
    let files: any[] = []
    const taskSubmissionsUrl = Deno.env.get('R2_URL_TASK_SUBMISSIONS') || ''
    const noteAttachmentsUrl = Deno.env.get('R2_URL_TASK_NOTE_ATTACHMENTS') || ''
    
    if (task.submission_link) {
      try {
        const parsed = JSON.parse(task.submission_link)
        if (Array.isArray(parsed)) {
          files = parsed
            .filter((item: any) => item.file_path)
            .map((item: any) => {
              let publicUrl: string
              if (taskSubmissionsUrl) {
                publicUrl = `${taskSubmissionsUrl}/${item.file_path}`
              } else {
                const { data } = supabase.storage
                  .from('task-submissions')
                  .getPublicUrl(item.file_path)
                publicUrl = data.publicUrl
              }

              return {
                file_path: item.file_path,
                file_name: item.file_name || 'file',
                file_size: item.file_size || 0,
                storage_name: item.storage_name || '',
                public_url: publicUrl,
              }
            })
        }
      } catch (e) {
        // Not valid JSON or not an array
      }
    }

    // Fetch task notes (read-only, public)
    const { data: notes } = await supabase
      .from('task_notes')
      .select('id, version_name, content, created_at, updated_at')
      .eq('task_id', task.id)
      .order('created_at', { ascending: false })

    // Fetch note attachments
    const noteIds = (notes || []).map((n: any) => n.id)
    let noteAttachments: any[] = []
    if (noteIds.length > 0) {
      const { data: attachments } = await supabase
        .from('task_note_attachments')
        .select('id, note_id, file_name, file_path, file_size, storage_name, created_at')
        .in('note_id', noteIds)
        .order('created_at', { ascending: true })

      noteAttachments = (attachments || []).map((a: any) => {
        let publicUrl: string
        if (noteAttachmentsUrl) {
          publicUrl = `${noteAttachmentsUrl}/${a.file_path}`
        } else {
          const { data } = supabase.storage
            .from('task-note-attachments')
            .getPublicUrl(a.file_path)
          publicUrl = data.publicUrl
        }
        return { ...a, public_url: publicUrl }
      })
    }

    return new Response(
      JSON.stringify({
        project: { name: group.name, slug: group.slug },
        task: { id: task.id, title: task.title, slug: task.slug },
        files,
        notes: notes || [],
        noteAttachments,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})