/**
 * useDashboardPreloader
 * 
 * Prefetch all Dashboard data in the background during the LoginTransitionScreen.
 * Results are stored in a global cache that Dashboard reads on mount.
 * This eliminates the loading spinner after the transition ends.
 */
import { useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

// ── Cache shape ──
export interface DashboardPreloadCache {
  groups: any[];
  ownedProjectCount: number;
  joinedProjectCount: number;
  hiddenProjectIds: string[];
  pendingInvitations: any[];
  pendingApprovalGroups: any[];
  videoSettings: {
    enabled: boolean;
    opacity: number;
    url: string;
  } | null;
  ready: boolean;
  timestamp: number;
}

// Global mutable cache — lives outside React lifecycle so it survives
// the ProtectedLayout re-render when loginTransition ends.
let _preloadCache: DashboardPreloadCache | null = null;

/** Read the cache. Returns null if not ready or expired (>30s). */
export function getDashboardPreloadCache(): DashboardPreloadCache | null {
  if (!_preloadCache || !_preloadCache.ready) return null;
  // Expire after 30s to avoid stale data on re-navigation
  if (Date.now() - _preloadCache.timestamp > 30_000) {
    _preloadCache = null;
    return null;
  }
  return _preloadCache;
}

/** Clear the cache after Dashboard consumes it. */
export function clearDashboardPreloadCache() {
  _preloadCache = null;
}

/**
 * Hook: call inside ProtectedLayout while loginTransition is active.
 * It kicks off all fetches in parallel as soon as the user id is known.
 */
export function useDashboardPreloader(userId: string | undefined) {
  const startedRef = useRef(false);

  useEffect(() => {
    if (!userId || startedRef.current) return;
    startedRef.current = true;

    const prefetch = async () => {
      try {
        // Fire all independent queries in parallel
        const [
          memberDataRes,
          ownedRes,
          joinedRes,
          hiddenRes,
          invitationsRes,
          pendingApprovalsRes,
          videoSettingsRes,
        ] = await Promise.all([
          // 1. Groups the user belongs to
          supabase.from('group_members').select('group_id').eq('user_id', userId),
          // 2. Owned project count
          supabase.from('groups').select('id').eq('created_by', userId),
          // 3. Joined project count
          supabase.from('group_members').select('id').eq('user_id', userId),
          // 4. Hidden projects
          supabase.from('hidden_projects').select('group_id').eq('user_id', userId),
          // 5. Pending invitations
          supabase.from('project_invitations')
            .select('id, group_id, invited_user_id, invited_by, role, status, created_at')
            .eq('invited_user_id', userId)
            .eq('status', 'pending')
            .order('created_at', { ascending: false }),
          // 6. Pending approvals
          supabase.from('pending_approvals')
            .select('group_id')
            .eq('user_id', userId)
            .eq('status', 'pending'),
          // 7. Video background settings
          supabase.from('system_settings')
            .select('value')
            .eq('key', 'dashboard_video_bg')
            .maybeSingle(),
        ]);

        // ── Resolve groups ──
        const groupIds = memberDataRes.data?.map(m => m.group_id) || [];
        let groups: any[] = [];
        if (groupIds.length > 0) {
          const { data: groupsData } = await supabase
            .from('groups')
            .select('*')
            .in('id', groupIds)
            .order('created_at', { ascending: false });
          groups = groupsData || [];
        }

        // ── Resolve invitations with enriched data ──
        let enrichedInvitations: any[] = [];
        const invData = invitationsRes.data;
        if (invData && invData.length > 0) {
          const inviterIds = [...new Set(invData.map(d => d.invited_by))];
          const invGroupIds = [...new Set(invData.map(d => d.group_id))];

          const [profilesRes, invGroupsRes, memberCountsRes] = await Promise.all([
            supabase.from('profiles').select('id, full_name').in('id', inviterIds),
            supabase.from('groups')
              .select('id, name, description, class_code, instructor_name, image_url, created_at, zalo_link')
              .in('id', invGroupIds),
            Promise.all(invGroupIds.map(async (gid) => {
              const { count } = await supabase
                .from('group_members')
                .select('id', { count: 'exact', head: true })
                .eq('group_id', gid);
              return { id: gid, count: count || 0 };
            })),
          ]);

          const profileMap = new Map((profilesRes.data || []).map(p => [p.id, p]));
          const groupMap = new Map((invGroupsRes.data || []).map(g => [g.id, g]));
          const countMap = new Map(memberCountsRes.map(c => [c.id, c.count]));

          enrichedInvitations = invData.map(d => ({
            ...d,
            inviter: profileMap.get(d.invited_by),
            groups: groupMap.get(d.group_id) || {
              name: 'Project', description: null, class_code: null,
              instructor_name: null, image_url: null, created_at: '', zalo_link: null,
            },
            memberCount: countMap.get(d.group_id) || 0,
          }));
        }

        // ── Resolve pending approval groups ──
        let pendingApprovalGroups: any[] = [];
        const paData = pendingApprovalsRes.data;
        if (paData && paData.length > 0) {
          const paGroupIds = paData.map(d => d.group_id);
          const { data: paGroups } = await supabase
            .from('groups')
            .select('*')
            .in('id', paGroupIds);
          pendingApprovalGroups = paGroups || [];
        }

        // ── Video settings ──
        let videoSettings: DashboardPreloadCache['videoSettings'] = null;
        if (videoSettingsRes.data?.value) {
          const val = videoSettingsRes.data.value as any;
          videoSettings = {
            enabled: val.enabled ?? false,
            opacity: val.dashboard_opacity ?? val.opacity ?? 0.2,
            url: val.url ?? '',
          };

          // Preload the video binary so it's in browser cache
          if (videoSettings.enabled && videoSettings.url) {
            try {
              const link = document.createElement('link');
              link.rel = 'preload';
              link.as = 'video';
              link.href = videoSettings.url;
              document.head.appendChild(link);
            } catch { /* ignore */ }
          }
        }

        // ── Write cache ──
        _preloadCache = {
          groups,
          ownedProjectCount: ownedRes.data?.length || 0,
          joinedProjectCount: joinedRes.data?.length || 0,
          hiddenProjectIds: hiddenRes.data?.map(d => d.group_id) || [],
          pendingInvitations: enrichedInvitations,
          pendingApprovalGroups,
          videoSettings,
          ready: true,
          timestamp: Date.now(),
        };
      } catch (err) {
        console.warn('[DashboardPreloader] prefetch failed:', err);
        // Don't set cache — Dashboard will fall back to normal fetch
      }
    };

    prefetch();
  }, [userId]);
}
