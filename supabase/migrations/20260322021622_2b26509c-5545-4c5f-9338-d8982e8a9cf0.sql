
-- Allow invited users to accept invitation and join group (bypasses member limit)
CREATE POLICY "Invited users can join via accepted invitation"
ON public.group_members
FOR INSERT
TO authenticated
WITH CHECK (
  user_id = auth.uid()
  AND EXISTS (
    SELECT 1 FROM public.project_invitations
    WHERE project_invitations.group_id = group_members.group_id
      AND project_invitations.invited_user_id = auth.uid()
      AND project_invitations.status = 'accepted'
  )
);
