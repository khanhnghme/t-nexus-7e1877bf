
CREATE TABLE public.user_music_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  track_id text NOT NULL,
  position_seconds numeric NOT NULL DEFAULT 0,
  duration_seconds numeric DEFAULT NULL,
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE (user_id, track_id)
);

ALTER TABLE public.user_music_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own music progress"
  ON public.user_music_progress
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());
