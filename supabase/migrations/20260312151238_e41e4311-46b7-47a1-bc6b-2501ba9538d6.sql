-- Fix 1: Add missing UPDATE policy for task-submissions (needed for upsert)
CREATE POLICY "Users can update own task submissions"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'task-submissions' AND (auth.uid())::text = (storage.foldername(name))[1]);

-- Fix 2: Add UPDATE and DELETE policies for group-images
CREATE POLICY "Authenticated users can update group images"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'group-images');

CREATE POLICY "Authenticated users can delete group images"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'group-images');

-- Fix 3: Add UPDATE policy for project-resources storage
CREATE POLICY "Leaders can update project resources files"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'project-resources');

-- Fix 4: Add DELETE policy for appeal-attachments
CREATE POLICY "Users can delete own appeal attachments"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'appeal-attachments');

-- Fix 5: Add UPDATE policy for appeal-attachments
CREATE POLICY "Users can update appeal attachments"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'appeal-attachments');