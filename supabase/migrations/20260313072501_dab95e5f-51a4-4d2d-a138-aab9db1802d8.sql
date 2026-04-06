
-- Fix orphaned auth users by creating their profiles
INSERT INTO public.profiles (id, student_id, full_name, email, is_approved)
VALUES 
  ('0c403655-aa85-40a4-95da-6cf59060b420', 'testuser999', 'Test User', 'testuser999@test.com', false),
  ('9812317c-54b4-44df-b9eb-2718232ae9b9', '3', 'test3', 'test3@gmail.com', false)
ON CONFLICT (id) DO NOTHING;

-- Update handle_new_user with better error handling
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
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

  INSERT INTO public.profiles (id, student_id, full_name, email, is_approved, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'student_id', ''),
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
    NEW.email,
    _auto_approve,
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture', NULL)
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
    END;
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  RAISE LOG 'handle_new_user error for user %: % %', NEW.id, SQLERRM, SQLSTATE;
  RETURN NEW;
END;
$$;
