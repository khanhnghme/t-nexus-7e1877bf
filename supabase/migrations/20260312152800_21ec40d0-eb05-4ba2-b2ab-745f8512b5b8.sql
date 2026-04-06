-- Update check_admin_user() to read admin email from system_settings dynamically
CREATE OR REPLACE FUNCTION public.check_admin_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  _admin_email text;
BEGIN
  SELECT (value->>'email') INTO _admin_email
  FROM public.system_settings
  WHERE key = 'admin_contact';

  IF _admin_email IS NULL OR _admin_email = '' THEN
    RETURN NEW;
  END IF;

  IF NEW.email = _admin_email THEN
    UPDATE public.profiles
    SET
      is_approved = true,
      email = NEW.email
    WHERE id = NEW.id;

    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin')
    ON CONFLICT DO NOTHING;
  END IF;
  RETURN NEW;
END;
$function$;