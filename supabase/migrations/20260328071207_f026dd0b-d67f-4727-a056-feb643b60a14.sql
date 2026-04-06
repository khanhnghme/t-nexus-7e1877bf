
-- 1. user_login_logs
CREATE TABLE public.user_login_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  logged_in_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.user_login_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert own login logs" ON public.user_login_logs
  FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can view own login logs" ON public.user_login_logs
  FOR SELECT TO authenticated USING (user_id = auth.uid() OR is_admin(auth.uid()));

CREATE INDEX idx_login_logs_user_date ON public.user_login_logs (user_id, logged_in_at);

-- 2. user_activity_sessions
CREATE TABLE public.user_activity_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  started_at timestamptz NOT NULL DEFAULT now(),
  last_seen_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.user_activity_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert own activity sessions" ON public.user_activity_sessions
  FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own activity sessions" ON public.user_activity_sessions
  FOR UPDATE TO authenticated USING (user_id = auth.uid());

CREATE POLICY "Users and admins can view activity sessions" ON public.user_activity_sessions
  FOR SELECT TO authenticated USING (user_id = auth.uid() OR is_admin(auth.uid()));

CREATE INDEX idx_activity_sessions_user_date ON public.user_activity_sessions (user_id, started_at);

-- 3. user_streaks
CREATE TABLE public.user_streaks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE,
  current_streak integer NOT NULL DEFAULT 0,
  longest_streak integer NOT NULL DEFAULT 0,
  last_login_date date,
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.user_streaks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert own streak" ON public.user_streaks
  FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own streak" ON public.user_streaks
  FOR UPDATE TO authenticated USING (user_id = auth.uid());

CREATE POLICY "Users and admins can view streaks" ON public.user_streaks
  FOR SELECT TO authenticated USING (user_id = auth.uid() OR is_admin(auth.uid()));

CREATE INDEX idx_streaks_user ON public.user_streaks (user_id);
