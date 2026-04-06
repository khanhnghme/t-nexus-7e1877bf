ALTER TABLE public.groups ADD COLUMN IF NOT EXISTS show_tasks_public boolean DEFAULT true;
ALTER TABLE public.groups ADD COLUMN IF NOT EXISTS show_scores_public boolean DEFAULT false;