
DROP POLICY IF EXISTS "Members can leave within 48h" ON public.group_members;

CREATE POLICY "Members can leave project"
ON public.group_members
FOR DELETE
TO authenticated
USING (
  user_id = auth.uid()
  AND user_id <> (SELECT created_by FROM groups WHERE id = group_id)
  AND (
    NOT EXISTS (SELECT 1 FROM tasks WHERE group_id = group_members.group_id)
    OR
    joined_at > (now() - interval '48 hours')
  )
);
