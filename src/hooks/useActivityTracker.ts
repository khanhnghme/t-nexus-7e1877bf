import { useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

export function useActivityTracker(userId: string | undefined) {
  const sessionIdRef = useRef<string | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    if (!userId) return;

    const startSession = async () => {
      // Reuse existing session from sessionStorage to avoid creating duplicates on navigation
      const storageKey = `activity_session_${userId}`;
      const existingSessionId = sessionStorage.getItem(storageKey);
      if (existingSessionId) {
        sessionIdRef.current = existingSessionId;
        return;
      }
      const { data } = await supabase
        .from('user_activity_sessions')
        .insert({ user_id: userId })
        .select('id')
        .single();
      if (data) {
        sessionIdRef.current = data.id;
        sessionStorage.setItem(storageKey, data.id);
      }
    };

    const heartbeat = async () => {
      if (!sessionIdRef.current || !isVisibleRef.current) return;
      await supabase
        .from('user_activity_sessions')
        .update({ last_seen_at: new Date().toISOString() })
        .eq('id', sessionIdRef.current);
    };

    const handleVisibility = () => {
      isVisibleRef.current = document.visibilityState === 'visible';
      if (isVisibleRef.current) {
        heartbeat();
      }
    };

    startSession();
    intervalRef.current = setInterval(heartbeat, 60000);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.removeEventListener('visibilitychange', handleVisibility);
      // Final heartbeat on unmount
      if (sessionIdRef.current) {
        supabase
          .from('user_activity_sessions')
          .update({ last_seen_at: new Date().toISOString() })
          .eq('id', sessionIdRef.current)
          .then(() => {});
      }
    };
  }, [userId]);
}
