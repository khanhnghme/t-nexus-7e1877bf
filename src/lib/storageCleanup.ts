import { supabase } from '@/integrations/supabase/client';
import { r2Storage } from '@/lib/r2Storage';

/**
 * Parse file paths from a submission_link JSON string
 */
export function parseSubmissionFiles(submissionLink: string | null): string[] {
  if (!submissionLink) return [];
  try {
    const items = JSON.parse(submissionLink);
    if (!Array.isArray(items)) return [];
    return items
      .filter((item: any) => item.file_path)
      .map((item: any) => item.file_path as string);
  } catch {
    return [];
  }
}

/**
 * Delete all R2 files associated with a task (submission_link + submission_history)
 */
export async function deleteTaskFiles(taskId: string): Promise<void> {
  const filePaths = new Set<string>();

  // 1. Get files from task.submission_link
  const { data: task } = await supabase
    .from('tasks')
    .select('submission_link')
    .eq('id', taskId)
    .maybeSingle();

  if (task?.submission_link) {
    parseSubmissionFiles(task.submission_link).forEach(p => filePaths.add(p));
  }

  // 2. Get files from submission_history
  const { data: history } = await supabase
    .from('submission_history')
    .select('submission_link, file_path')
    .eq('task_id', taskId);

  if (history) {
    for (const entry of history) {
      if (entry.file_path) filePaths.add(entry.file_path);
      parseSubmissionFiles(entry.submission_link).forEach(p => filePaths.add(p));
    }
  }

  // 3. Get files from task_notes attachments
  const { data: notes } = await supabase
    .from('task_notes')
    .select('id')
    .eq('task_id', taskId);

  if (notes && notes.length > 0) {
    const noteIds = notes.map(n => n.id);
    const { data: attachments } = await supabase
      .from('task_note_attachments')
      .select('file_path')
      .in('note_id', noteIds);

    if (attachments) {
      // Note attachments use different bucket
      const notePaths = attachments.map(a => a.file_path);
      if (notePaths.length > 0) {
        await r2Storage.from('task-note-attachments').remove(notePaths);
      }
    }
  }

  // 4. Delete task submission files from R2
  const paths = Array.from(filePaths);
  if (paths.length > 0) {
    await r2Storage.from('task-submissions').remove(paths);
  }
}

/**
 * Delete old submission files when re-submitting
 */
export async function deleteOldSubmissionFiles(submissionLink: string | null): Promise<void> {
  const paths = parseSubmissionFiles(submissionLink);
  if (paths.length > 0) {
    await r2Storage.from('task-submissions').remove(paths);
  }
}
