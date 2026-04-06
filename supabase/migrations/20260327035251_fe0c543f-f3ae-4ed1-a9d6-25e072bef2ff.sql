
-- Folders for organizing admin music
CREATE TABLE public.background_music_folders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  display_order integer NOT NULL DEFAULT 0,
  created_by uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.background_music_folders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view music folders" ON public.background_music_folders
  FOR SELECT TO public USING (true);

CREATE POLICY "Admins can manage music folders" ON public.background_music_folders
  FOR ALL TO authenticated USING (is_admin(auth.uid()))
  WITH CHECK (is_admin(auth.uid()));

-- Tracks table (supports both file upload and link)
CREATE TABLE public.background_music_tracks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  folder_id uuid REFERENCES public.background_music_folders(id) ON DELETE SET NULL,
  title text NOT NULL,
  artist text,
  source_type text NOT NULL DEFAULT 'link',
  source_url text,
  file_path text,
  storage_name text,
  duration_seconds integer,
  display_order integer NOT NULL DEFAULT 0,
  is_default boolean NOT NULL DEFAULT false,
  created_by uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.background_music_tracks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view music tracks" ON public.background_music_tracks
  FOR SELECT TO public USING (true);

CREATE POLICY "Admins can manage music tracks" ON public.background_music_tracks
  FOR ALL TO authenticated USING (is_admin(auth.uid()))
  WITH CHECK (is_admin(auth.uid()));

-- RLS for background-music bucket
CREATE POLICY "Anyone can read background music" ON storage.objects
  FOR SELECT TO public USING (bucket_id = 'background-music');

CREATE POLICY "Admins can upload background music" ON storage.objects
  FOR INSERT TO authenticated WITH CHECK (bucket_id = 'background-music' AND is_admin(auth.uid()));

CREATE POLICY "Admins can delete background music" ON storage.objects
  FOR DELETE TO authenticated USING (bucket_id = 'background-music' AND is_admin(auth.uid()));
