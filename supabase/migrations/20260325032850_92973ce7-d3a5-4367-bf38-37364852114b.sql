CREATE POLICY "Invited users can view group members"
ON public.group_members
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.project_invitations
    WHERE project_invitations.group_id = group_members.group_id
      AND project_invitations.invited_user_id = auth.uid()
      AND project_invitations.status = 'pending'
  )
);