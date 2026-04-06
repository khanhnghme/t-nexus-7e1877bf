CREATE TABLE public.hidden_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  group_id uuid NOT NULL REFERENCES public.groups(id) ON DELETE CASCADE,
  hidden_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id, group_id)
);

ALTER TABLE public.hidden_projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own hidden projects"
  ON public.hidden_projects FOR ALL
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());