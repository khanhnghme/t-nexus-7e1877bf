import { supabase } from '@/integrations/supabase/client';

export async function getAdminContactEmail(): Promise<string> {
  return 'support@t-nexus.io.vn';
}
