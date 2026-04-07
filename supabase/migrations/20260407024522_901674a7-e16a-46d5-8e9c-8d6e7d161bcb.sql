
CREATE TABLE public.email_verification_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  email text NOT NULL,
  code text NOT NULL,
  expires_at timestamp with time zone NOT NULL,
  used boolean NOT NULL DEFAULT false,
  attempts integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.email_verification_codes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role only" ON public.email_verification_codes
  FOR ALL USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');
