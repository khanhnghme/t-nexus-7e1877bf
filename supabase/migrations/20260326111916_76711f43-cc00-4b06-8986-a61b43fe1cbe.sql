
-- Create background-music storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('background-music', 'background-music', true)
ON CONFLICT (id) DO NOTHING;

-- RLS: Allow admins to upload/delete music
CREATE POLICY "Admins can manage background music"
ON storage.objects
FOR ALL
TO authenticated
USING (bucket_id = 'background-music' AND public.is_admin(auth.uid()))
WITH CHECK (bucket_id = 'background-music' AND public.is_admin(auth.uid()));

-- RLS: Allow public to read background music
CREATE POLICY "Public can read background music"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'background-music');
