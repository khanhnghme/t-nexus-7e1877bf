
CREATE TABLE public.user_music_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  title text NOT NULL DEFAULT '',
  url text NOT NULL,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.user_music_links ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own music links" ON public.user_music_links
  FOR ALL TO authenticated USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());
