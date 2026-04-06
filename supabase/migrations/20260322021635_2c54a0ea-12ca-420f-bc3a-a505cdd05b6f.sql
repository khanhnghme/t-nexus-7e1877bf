
-- Update the member limit trigger to bypass for invited users
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
