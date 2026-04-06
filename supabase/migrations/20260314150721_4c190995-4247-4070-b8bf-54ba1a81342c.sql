ALTER TABLE public.groups ADD COLUMN score_finalized_at timestamptz DEFAULT NULL;
ALTER TABLE public.groups ADD COLUMN appeal_deadline_hours integer DEFAULT 48;