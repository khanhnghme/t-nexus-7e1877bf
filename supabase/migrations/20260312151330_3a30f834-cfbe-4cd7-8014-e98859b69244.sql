-- Drop and recreate resource INSERT policy to allow all group members
DROP POLICY IF EXISTS "Leaders can insert resources" ON public.project_resources;
CREATE POLICY "Group members can insert resources"
ON public.project_resources FOR INSERT TO authenticated
WITH CHECK (is_group_member(auth.uid(), group_id) AND uploaded_by = auth.uid());

-- Also update DELETE and UPDATE to allow group leaders (which includes sub-leaders with leader role)
DROP POLICY IF EXISTS "Leaders can delete resources" ON public.project_resources;
CREATE POLICY "Leaders can delete resources"
ON public.project_resources FOR DELETE TO authenticated
USING (is_group_leader(auth.uid(), group_id) OR (uploaded_by = auth.uid()));

DROP POLICY IF EXISTS "Leaders can update resources" ON public.project_resources;
CREATE POLICY "Leaders can update resources"
ON public.project_resources FOR UPDATE TO authenticated
USING (is_group_leader(auth.uid(), group_id) OR (uploaded_by = auth.uid()));