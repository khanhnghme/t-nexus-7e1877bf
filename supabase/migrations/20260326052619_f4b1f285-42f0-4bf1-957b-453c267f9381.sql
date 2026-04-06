CREATE TABLE public.personal_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  title text NOT NULL,
  description text,
  start_time timestamptz NOT NULL,
  end_time timestamptz,
  color text DEFAULT '#3b82f6',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.personal_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own events"
  ON public.personal_events FOR ALL
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());