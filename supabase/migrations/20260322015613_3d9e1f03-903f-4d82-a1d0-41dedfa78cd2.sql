
-- Create project_invitations table
CREATE TABLE public.project_invitations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id uuid NOT NULL REFERENCES public.groups(id) ON DELETE CASCADE,
  invited_user_id uuid NOT NULL,
  invited_by uuid NOT NULL,
  role public.app_role NOT NULL DEFAULT 'member',
  status text NOT NULL DEFAULT 'pending',
  expires_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Partial unique index: only one pending invitation per user per group
CREATE UNIQUE INDEX idx_unique_pending_invitation 
  ON public.project_invitations (group_id, invited_user_id) 
  WHERE status = 'pending';

-- Enable RLS
ALTER TABLE public.project_invitations ENABLE ROW LEVEL SECURITY;

-- RLS: Invited users can view their own invitations
CREATE POLICY "Users can view own invitations"
  ON public.project_invitations
  FOR SELECT
  TO authenticated
  USING (invited_user_id = auth.uid() OR is_group_leader(auth.uid(), group_id) OR is_admin(auth.uid()));

-- RLS: Group leaders can insert invitations
CREATE POLICY "Leaders can insert invitations"
  ON public.project_invitations
  FOR INSERT
  TO authenticated
  WITH CHECK (is_group_leader(auth.uid(), group_id));

-- RLS: Group leaders can update (cancel) invitations; invited user can accept/reject
CREATE POLICY "Leaders and invited users can update invitations"
  ON public.project_invitations
  FOR UPDATE
  TO authenticated
  USING (invited_user_id = auth.uid() OR is_group_leader(auth.uid(), group_id));

-- RLS: Group leaders can delete invitations
CREATE POLICY "Leaders can delete invitations"
  ON public.project_invitations
  FOR DELETE
  TO authenticated
  USING (is_group_leader(auth.uid(), group_id));

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.project_invitations;

-- Updated_at trigger
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.project_invitations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
