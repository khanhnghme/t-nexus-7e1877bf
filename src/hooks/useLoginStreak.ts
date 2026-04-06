import { useEffect, useState, useRef, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastLoginDate: string | null;
  isActiveToday: boolean;
  isWarning: boolean;
  streakIncreased: boolean;
  loading: boolean;
  recoveryCount: number;
  canRecover: boolean;
}

export function useLoginStreak(userId: string | undefined) {
  const [streak, setStreak] = useState<StreakData>({
    currentStreak: 0,
    longestStreak: 0,
    lastLoginDate: null,
    isActiveToday: false,
    isWarning: false,
    streakIncreased: false,
    loading: true,
    recoveryCount: 0,
    canRecover: false,
  });
  const processedRef = useRef(false);

  const getTodayStr = () => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  };

  const recoverStreak = useCallback(async () => {
    if (!userId) return;

    const { data: existing } = await supabase
      .from('user_streaks')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle();

    if (!existing) return;

    const todayStr = getTodayStr();
    const lastDate = existing.last_login_date;
    if (!lastDate || lastDate === todayStr) return;

    const lastDateObj = new Date(lastDate + 'T00:00:00');
    const todayObj = new Date(todayStr + 'T00:00:00');
    const diffDays = Math.floor((todayObj.getTime() - lastDateObj.getTime()) / (1000 * 60 * 60 * 24));

    // Only allow recovery if streak was broken (diffDays > 2)
    if (diffDays <= 2) return;

    const currentRecovery = existing.recovery_count ?? 0;
    if (currentRecovery >= 3) return;

    // Recover: restore the streak and mark today
    const restoredStreak = existing.current_streak + 1;
    const newLongest = Math.max(existing.longest_streak, restoredStreak);

    await supabase
      .from('user_streaks')
      .update({
        current_streak: restoredStreak,
        longest_streak: newLongest,
        last_login_date: todayStr,
        recovery_count: currentRecovery + 1,
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', userId);

    setStreak({
      currentStreak: restoredStreak,
      longestStreak: newLongest,
      lastLoginDate: todayStr,
      isActiveToday: true,
      isWarning: false,
      streakIncreased: true,
      loading: false,
      recoveryCount: currentRecovery + 1,
      canRecover: false,
    });
  }, [userId]);

  useEffect(() => {
    if (!userId || processedRef.current) return;

    const sessionKey = `streak_processed_${userId}`;
    if (sessionStorage.getItem(sessionKey)) {
      const fetchOnly = async () => {
        const { data: existing } = await supabase
          .from('user_streaks')
          .select('*')
          .eq('user_id', userId)
          .maybeSingle();
        if (existing) {
          const todayStr = getTodayStr();
          const lastDate = existing.last_login_date;
          let canRecover = false;

          if (lastDate && lastDate !== todayStr) {
            const lastDateObj = new Date(lastDate + 'T00:00:00');
            const todayObj = new Date(todayStr + 'T00:00:00');
            const diffDays = Math.floor((todayObj.getTime() - lastDateObj.getTime()) / (1000 * 60 * 60 * 24));
            canRecover = diffDays > 2 && (existing.recovery_count ?? 0) < 3 && existing.current_streak > 0;
          }

          setStreak({
            currentStreak: existing.current_streak,
            longestStreak: existing.longest_streak,
            lastLoginDate: existing.last_login_date,
            isActiveToday: existing.last_login_date === todayStr,
            isWarning: false,
            streakIncreased: false,
            loading: false,
            recoveryCount: existing.recovery_count ?? 0,
            canRecover,
          });
        } else {
          setStreak(s => ({ ...s, loading: false }));
        }
      };
      fetchOnly();
      processedRef.current = true;
      return;
    }

    processedRef.current = true;
    sessionStorage.setItem(sessionKey, 'true');

    const processLogin = async () => {
      const todayStr = getTodayStr();
      const todayStart = new Date(todayStr + 'T00:00:00Z').toISOString();

      // Only insert login log if not already logged today
      const { count } = await supabase
        .from('user_login_logs')
        .select('id', { count: 'exact', head: true })
        .eq('user_id', userId)
        .gte('logged_in_at', todayStart);

      if (!count || count === 0) {
        await supabase.from('user_login_logs').insert({ user_id: userId });
      }

      const { data: existing } = await supabase
        .from('user_streaks')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      if (!existing) {
        const { data: newStreak } = await supabase
          .from('user_streaks')
          .insert({
            user_id: userId,
            current_streak: 1,
            longest_streak: 1,
            last_login_date: todayStr,
            recovery_count: 0,
          })
          .select()
          .single();

        if (newStreak) {
          setStreak({
            currentStreak: 1,
            longestStreak: 1,
            lastLoginDate: todayStr,
            isActiveToday: true,
            isWarning: false,
            streakIncreased: true,
            loading: false,
            recoveryCount: 0,
            canRecover: false,
          });
        }
        return;
      }

      const lastDate = existing.last_login_date;

      if (lastDate === todayStr) {
        setStreak({
          currentStreak: existing.current_streak,
          longestStreak: existing.longest_streak,
          lastLoginDate: lastDate,
          isActiveToday: true,
          isWarning: false,
          streakIncreased: false,
          loading: false,
          recoveryCount: existing.recovery_count ?? 0,
          canRecover: false,
        });
        return;
      }

      const lastDateObj = new Date(lastDate + 'T00:00:00');
      const todayObj = new Date(todayStr + 'T00:00:00');
      const diffDays = Math.floor((todayObj.getTime() - lastDateObj.getTime()) / (1000 * 60 * 60 * 24));

      let newStreak = existing.current_streak;
      let newRecoveryCount = existing.recovery_count ?? 0;

      if (diffDays === 1 || diffDays === 2) {
        newStreak = existing.current_streak + 1;
      } else {
        // Streak broken - check if user can recover
        if (newRecoveryCount < 3 && existing.current_streak > 0) {
          // Don't reset yet, let user choose to recover
          setStreak({
            currentStreak: existing.current_streak,
            longestStreak: existing.longest_streak,
            lastLoginDate: lastDate,
            isActiveToday: false,
            isWarning: true,
            streakIncreased: false,
            loading: false,
            recoveryCount: newRecoveryCount,
            canRecover: true,
          });
          return;
        }
        // No recovery left or streak was 0 - reset
        newStreak = 1;
        newRecoveryCount = 0; // Reset recovery count when streak drops to 0
      }

      const newLongest = Math.max(existing.longest_streak, newStreak);

      await supabase
        .from('user_streaks')
        .update({
          current_streak: newStreak,
          longest_streak: newLongest,
          last_login_date: todayStr,
          recovery_count: newRecoveryCount,
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', userId);

      setStreak({
        currentStreak: newStreak,
        longestStreak: newLongest,
        lastLoginDate: todayStr,
        isActiveToday: true,
        isWarning: false,
        streakIncreased: true,
        loading: false,
        recoveryCount: newRecoveryCount,
        canRecover: false,
      });
    };

    processLogin();
  }, [userId]);

  return { ...streak, recoverStreak };
}
