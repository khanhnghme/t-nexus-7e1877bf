import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export function useFullLockdown() {
  const [isLocked, setIsLocked] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [message, setMessage] = useState('');
  const [endAt, setEndAt] = useState<string | null>(null);

  useEffect(() => {
    const check = async () => {
      try {
        const { data } = await supabase
          .from('system_settings')
          .select('value')
          .eq('key', 'maintenance_mode')
          .maybeSingle();

        if (data?.value) {
          const val = data.value as { enabled?: boolean; scope?: string; message?: string; end_at?: string };
          if (val.enabled && val.scope === 'full') {
            // Auto-disable if end_at has passed
            if (val.end_at && new Date(val.end_at).getTime() <= Date.now()) {
              setIsLocked(false);
              return;
            }
            setIsLocked(true);
            setMessage(val.message || 'Hệ thống đang bảo trì, vui lòng quay lại sau.');
            setEndAt(val.end_at || null);
            return;
          }
        }
        setIsLocked(false);
      } catch {
        // ignore
      } finally {
        setIsChecking(false);
      }
    };

    check();
    const interval = setInterval(check, 30000);
    return () => clearInterval(interval);
  }, []);

  return { isLocked, isChecking, message, endAt };
}
