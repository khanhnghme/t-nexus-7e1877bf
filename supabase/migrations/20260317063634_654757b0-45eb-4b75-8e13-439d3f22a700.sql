
CREATE TABLE public.demo_passwords (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE,
  plain_password text NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.demo_passwords ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only admins can view demo passwords"
  ON public.demo_passwords FOR SELECT
  TO authenticated
  USING (public.is_admin(auth.uid()));

CREATE POLICY "Authenticated can upsert own password"
  ON public.demo_passwords FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated can update own password"
  ON public.demo_passwords FOR UPDATE
  TO authenticated
  USING (true);
