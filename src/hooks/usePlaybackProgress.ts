import { useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

// Debounced save of playback position to DB
// track_id format: "system:{track.id}" or "personal:{link.id}"

let saveTimer: ReturnType<typeof setTimeout> | null = null;
const SAVE_INTERVAL_MS = 5000; // save every 5s max

export function usePlaybackProgress(userId: string | undefined) {
  const lastSaved = useRef<{ trackId: string; position: number; ts: number }>({ trackId: '', position: 0, ts: 0 });

  const saveProgress = useCallback((trackId: string, positionSeconds: number, durationSeconds?: number) => {
    if (!userId || !trackId) return;
    
    const now = Date.now();
    // Skip if same track and saved recently
    if (lastSaved.current.trackId === trackId && 
        Math.abs(lastSaved.current.position - positionSeconds) < 3 &&
        now - lastSaved.current.ts < SAVE_INTERVAL_MS) {
      return;
    }

    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(async () => {
      lastSaved.current = { trackId, position: positionSeconds, ts: Date.now() };
      await supabase
        .from('user_music_progress')
        .upsert({
          user_id: userId,
          track_id: trackId,
          position_seconds: positionSeconds,
          duration_seconds: durationSeconds || null,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'user_id,track_id' });
    }, 2000);
  }, [userId]);

  const loadProgress = useCallback(async (trackId: string): Promise<number> => {
    if (!userId || !trackId) return 0;
    const { data } = await supabase
      .from('user_music_progress')
      .select('position_seconds')
      .eq('user_id', userId)
      .eq('track_id', trackId)
      .maybeSingle();
    return data ? Number(data.position_seconds) : 0;
  }, [userId]);

  // Force save immediately (e.g. on pause/track change)
  const saveProgressNow = useCallback(async (trackId: string, positionSeconds: number, durationSeconds?: number) => {
    if (!userId || !trackId) return;
    if (saveTimer) clearTimeout(saveTimer);
    lastSaved.current = { trackId, position: positionSeconds, ts: Date.now() };
    await supabase
      .from('user_music_progress')
      .upsert({
        user_id: userId,
        track_id: trackId,
        position_seconds: positionSeconds,
        duration_seconds: durationSeconds || null,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id,track_id' });
  }, [userId]);

  return { saveProgress, loadProgress, saveProgressNow };
}
