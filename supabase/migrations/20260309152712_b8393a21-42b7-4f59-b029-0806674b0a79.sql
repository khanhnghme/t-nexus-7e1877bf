
-- Create system_notifications table for mandatory letter/mail notifications
CREATE TABLE public.system_notifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  display_mode TEXT NOT NULL DEFAULT 'pre_login', -- 'pre_login' or 'post_login'
  is_active BOOLEAN NOT NULL DEFAULT true,
  min_view_seconds INTEGER NOT NULL DEFAULT 15,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID NOT NULL
);

ALTER TABLE public.system_notifications ENABLE ROW LEVEL SECURITY;

-- Anyone can read active notifications
CREATE POLICY "Anyone can read active notifications"
  ON public.system_notifications
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Only admin can manage notifications
CREATE POLICY "Admin can manage notifications"
  ON public.system_notifications
  FOR ALL
  TO authenticated
  USING (public.is_admin(auth.uid()))
  WITH CHECK (public.is_admin(auth.uid()));

-- Track which users have dismissed which notifications
CREATE TABLE public.notification_dismissals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  notification_id UUID NOT NULL REFERENCES public.system_notifications(id) ON DELETE CASCADE,
  user_id UUID,
  session_id TEXT,
  dismissed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(notification_id, user_id),
  UNIQUE(notification_id, session_id)
);

ALTER TABLE public.notification_dismissals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert dismissals"
  ON public.notification_dismissals
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can view own dismissals"
  ON public.notification_dismissals
  FOR SELECT
  TO anon, authenticated
  USING (true);
