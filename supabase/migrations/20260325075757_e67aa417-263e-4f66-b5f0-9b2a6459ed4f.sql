
-- Add institution column to profiles
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS institution text DEFAULT NULL;

-- Update handle_new_user to extract institution from metadata
CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  _auto_approve boolean := false;
BEGIN
  -- Check if auto-approve is enabled
  BEGIN
    SELECT COALESCE((value->>'enabled')::boolean, false) INTO _auto_approve
    FROM public.system_settings
    WHERE key = 'auto_approve_accounts';
  EXCEPTION WHEN OTHERS THEN
    _auto_approve := false;
  END;

  INSERT INTO public.profiles (id, student_id, full_name, email, is_approved, avatar_url, institution)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'student_id', ''),
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
    NEW.email,
    _auto_approve,
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture', NULL),
    NEW.raw_user_meta_data->>'institution'
  )
  ON CONFLICT (id) DO UPDATE SET
    avatar_url = COALESCE(
      EXCLUDED.avatar_url,
      profiles.avatar_url
    ),
    full_name = CASE
      WHEN profiles.full_name = '' OR profiles.full_name IS NULL
      THEN COALESCE(EXCLUDED.full_name, profiles.full_name)
      ELSE profiles.full_name
    END,
    institution = COALESCE(EXCLUDED.institution, profiles.institution);
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  RAISE LOG 'handle_new_user error for user %: % %', NEW.id, SQLERRM, SQLSTATE;
  RETURN NEW;
END;
$function$;
