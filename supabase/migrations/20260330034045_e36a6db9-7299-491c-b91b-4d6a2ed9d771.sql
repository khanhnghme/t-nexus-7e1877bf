
CREATE TABLE public.user_music_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE,
  master_enabled boolean NOT NULL DEFAULT true,
  system_music_enabled boolean NOT NULL DEFAULT true,
  personal_music_enabled boolean NOT NULL DEFAULT true,
  volume numeric NOT NULL DEFAULT 1,
  preferred_folder_id uuid REFERENCES public.background_music_folders(id) ON DELETE SET NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.user_music_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own music settings"
  ON public.user_music_settings FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own music settings"
  ON public.user_music_settings FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own music settings"
  ON public.user_music_settings FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());
