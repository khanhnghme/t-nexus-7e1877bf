
-- Add join_require_approval column to groups table (default true)
ALTER TABLE public.groups ADD COLUMN IF NOT EXISTS join_require_approval boolean NOT NULL DEFAULT true;

-- Update check_join_member_limit to also bypass for pending approval users
CREATE OR REPLACE FUNCTION public.check_join_member_limit()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  _limit integer;
  _current_count integer;
  _has_invitation boolean;
  _has_approval boolean;
BEGIN
  -- Check if user has an accepted invitation (bypass limit)
  SELECT EXISTS (
    SELECT 1 FROM public.project_invitations
    WHERE group_id = NEW.group_id
      AND invited_user_id = NEW.user_id
      AND status = 'accepted'
  ) INTO _has_invitation;

  IF _has_invitation THEN
    RETURN NEW;
  END IF;

  -- Check if user has an approved pending_approval (bypass limit)
  SELECT EXISTS (
    SELECT 1 FROM public.pending_approvals
    WHERE group_id = NEW.group_id
      AND user_id = NEW.user_id
      AND status = 'approved'
  ) INTO _has_approval;

  IF _has_approval THEN
    RETURN NEW;
  END IF;

  SELECT join_member_limit INTO _limit FROM public.groups WHERE id = NEW.group_id;
  
  IF _limit IS NOT NULL THEN
    SELECT COUNT(*) INTO _current_count FROM public.group_members WHERE group_id = NEW.group_id;
    
    IF _current_count >= _limit THEN
      RAISE EXCEPTION 'Đã đạt giới hạn % thành viên cho project này', _limit;
    END IF;
  END IF;
  
  RETURN NEW;
END;
$function$;

-- RLS policy: approved users can join via pending_approvals
CREATE POLICY "Approved users can join via pending_approval"
ON public.group_members
FOR INSERT
TO authenticated
WITH CHECK (
  user_id = auth.uid()
  AND EXISTS (
    SELECT 1 FROM public.pending_approvals
    WHERE pending_approvals.group_id = group_members.group_id
      AND pending_approvals.user_id = auth.uid()
      AND pending_approvals.status = 'approved'
  )
);
