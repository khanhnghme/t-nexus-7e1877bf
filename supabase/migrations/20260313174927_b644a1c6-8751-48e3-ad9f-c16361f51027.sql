ALTER TABLE public.system_notifications 
ADD COLUMN target_user_ids jsonb DEFAULT NULL;