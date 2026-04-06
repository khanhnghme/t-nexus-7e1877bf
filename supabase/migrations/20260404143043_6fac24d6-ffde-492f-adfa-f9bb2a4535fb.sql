
-- Table to store APK releases for the download page
CREATE TABLE public.app_releases (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  platform TEXT NOT NULL DEFAULT 'android',
  version TEXT NOT NULL,
  file_path TEXT,
  file_name TEXT,
  file_size BIGINT DEFAULT 0,
  storage_name TEXT,
  download_url TEXT,
  release_notes TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_by UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.app_releases ENABLE ROW LEVEL SECURITY;

-- Anyone can view active releases (public download page)
CREATE POLICY "Anyone can view active releases"
  ON public.app_releases FOR SELECT
  TO public
  USING (is_active = true);

-- Admins can manage all releases
CREATE POLICY "Admins can manage releases"
  ON public.app_releases FOR ALL
  TO authenticated
  USING (public.is_admin(auth.uid()))
  WITH CHECK (public.is_admin(auth.uid()));
