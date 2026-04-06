import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useLocation } from 'react-router-dom';
import { usePlaybackProgress } from '@/hooks/usePlaybackProgress';

// ── Types ──
export interface MusicTrack {
  id: string;
  folder_id: string | null;
  title: string;
  artist: string | null;
  source_type: string;
  source_url: string | null;
  file_path: string | null;
  is_default: boolean;
  display_order: number;
}

export interface MusicFolder {
  id: string;
  name: string;
  display_order: number;
}

export interface UserMusicLink {
  id: string;
  title: string;
  url: string;
  display_order: number;
}

function isSoundCloudLink(url: string): boolean {
  return url.includes('soundcloud.com');
}

function buildWidgetUrl(trackUrl: string): string {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
}

// ── Context shape ──
interface MusicContextValue {
  // Toggles
  masterEnabled: boolean;
  setMasterEnabled: (v: boolean) => void;
  systemMusicEnabled: boolean;
  setSystemMusicEnabled: (v: boolean) => void;
  personalMusicEnabled: boolean;
  setPersonalMusicEnabled: (v: boolean) => void;

  // Playback
  isPlaying: boolean;
  setIsPlaying: (v: boolean) => void;
  volume: number;
  setVolume: (v: number | ((prev: number) => number)) => void;

  // Time / Seek
  currentTime: number;
  duration: number;
  seek: (time: number) => void;

  // System music
  adminFolders: MusicFolder[];
  adminTracks: MusicTrack[];
  currentPlaylist: MusicTrack[];
  currentTrackIndex: number;
  setCurrentTrackIndex: (v: number) => void;
  currentTrack: MusicTrack | undefined;
  userPreferredFolderId: string | null;
  setUserPreferredFolderId: (v: string | null) => void;
  loadingAdmin: boolean;
  playNext: () => void;
  playPrev: () => void;

  // Personal music
  userLinks: UserMusicLink[];
  setUserLinks: (v: UserMusicLink[] | ((prev: UserMusicLink[]) => UserMusicLink[])) => void;
  activeUserLinkIdx: number | null;
  setActiveUserLinkIdx: (v: number | null | ((prev: number | null) => number | null)) => void;
  loadingUserLinks: boolean;

  // Derived
  isPersonalActive: boolean;
  isSystemActive: boolean;
  activeUserLink: UserMusicLink | null;
  activeSCUrl: string | null;
  activeAudioUrl: string | null;
  hasActiveMusic: boolean;
  nowPlayingTitle: string | null;
  effectiveFolderId: string | null;
  isPublicPage: boolean;
  buildWidgetUrl: (url: string) => string;
  isSoundCloudLink: (url: string) => boolean;
  activeTrackId: string | null;
}

const MusicContext = createContext<MusicContextValue | null>(null);

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error('useMusic must be used within MusicProvider');
  return ctx;
}

// ── Persistent SoundCloud Widget ──
function PersistentSCWidget({ url }: { url: string }) {
  return (
    <div style={{ position: 'fixed', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
      <iframe
        src={buildWidgetUrl(url)}
        className="w-full border-none"
        style={{ height: '1px', width: '1px' }}
        allow="autoplay"
        title="SoundCloud Player"
        scrolling="no"
        frameBorder="no"
      />
    </div>
  );
}

// ── Helper: save settings to DB (debounced) ──
let saveTimeout: ReturnType<typeof setTimeout> | null = null;
function saveSettingsToDB(userId: string, settings: {
  master_enabled: boolean;
  system_music_enabled: boolean;
  personal_music_enabled: boolean;
  volume: number;
  preferred_folder_id: string | null;
}) {
  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(async () => {
    await supabase
      .from('user_music_settings')
      .upsert({
        user_id: userId,
        ...settings,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id' });
  }, 500);
}

export function MusicProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const location = useLocation();

  // ══════════ TOGGLES ══════════
  const [masterEnabled, setMasterEnabledRaw] = useState(true);
  const [systemMusicEnabled, setSystemMusicEnabledRaw] = useState(true);
  const [personalMusicEnabled, setPersonalMusicEnabledRaw] = useState(true);
  const [userPreferredFolderId, setUserPreferredFolderIdRaw] = useState<string | null>(null);
  const [volume, setVolumeRaw] = useState(1);

  const [settingsLoaded, setSettingsLoaded] = useState(false);
  const settingsLoadedForUser = useRef<string | null>(null);

  // ══════════ DATA ══════════
  const [userLinks, setUserLinks] = useState<UserMusicLink[]>([]);
  const [loadingUserLinks, setLoadingUserLinks] = useState(true);
  const [activeUserLinkIdx, setActiveUserLinkIdx] = useState<number | null>(null);

  const [adminFolders, setAdminFolders] = useState<MusicFolder[]>([]);
  const [adminTracks, setAdminTracks] = useState<MusicTrack[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlayingRaw] = useState(false);
  const [loadingAdmin, setLoadingAdmin] = useState(true);

  const [dataReady, setDataReady] = useState(false);

  // ══════════ AUDIO REF + TIME ══════════
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const pendingSeek = useRef<number | null>(null);

  // ══════════ PLAYBACK PROGRESS ══════════
  const { saveProgress, loadProgress, saveProgressNow } = usePlaybackProgress(user?.id);

  const sessionAutoPlayKey = `music_auto_played_${user?.id || 'anon'}`;
  const sessionUserPausedKey = `music_user_paused_${user?.id || 'anon'}`;

  const setIsPlaying = useCallback((v: boolean | ((prev: boolean) => boolean)) => {
    setIsPlayingRaw(prev => {
      const next = typeof v === 'function' ? v(prev) : v;
      if (!next && prev) {
        sessionStorage.setItem(sessionUserPausedKey, 'true');
      }
      return next;
    });
  }, [sessionUserPausedKey]);

  // ══════════ PERSIST TO DB ══════════
  const saveCurrentSettings = useCallback(() => {
    if (!user?.id || !settingsLoaded) return;
    saveSettingsToDB(user.id, {
      master_enabled: masterEnabled,
      system_music_enabled: systemMusicEnabled,
      personal_music_enabled: personalMusicEnabled,
      volume,
      preferred_folder_id: userPreferredFolderId,
    });
  }, [user?.id, settingsLoaded, masterEnabled, systemMusicEnabled, personalMusicEnabled, volume, userPreferredFolderId]);

  const setMasterEnabled = useCallback((v: boolean) => { setMasterEnabledRaw(v); }, []);
  const setSystemMusicEnabled = useCallback((v: boolean) => { setSystemMusicEnabledRaw(v); }, []);
  const setPersonalMusicEnabled = useCallback((v: boolean) => { setPersonalMusicEnabledRaw(v); }, []);
  const setVolume = useCallback((v: number | ((prev: number) => number)) => { setVolumeRaw(v); }, []);
  const setUserPreferredFolderId = useCallback((v: string | null) => { setUserPreferredFolderIdRaw(v); }, []);

  useEffect(() => { saveCurrentSettings(); }, [saveCurrentSettings]);

  // ══════════ DERIVED ══════════
  const musicAllowed = masterEnabled;

  const isPublicPage = ['/', '/auth', '/reset-password'].includes(location.pathname) ||
    location.pathname.startsWith('/project/') ||
    location.pathname.startsWith('/s/') ||
    location.pathname.startsWith('/u/') ||
    location.pathname.startsWith('/public/') ||
    location.pathname.startsWith('/file-preview');

  const isPersonalActive = musicAllowed && personalMusicEnabled && activeUserLinkIdx !== null && userLinks.length > 0;
  const activeUserLink = isPersonalActive ? userLinks[activeUserLinkIdx!] : null;

  const effectiveFolderId = userPreferredFolderId;
  const currentPlaylist = effectiveFolderId
    ? adminTracks.filter(t => t.folder_id === effectiveFolderId)
    : adminTracks;
  const currentTrack = currentPlaylist[currentTrackIndex];

  const isSystemActive = musicAllowed && systemMusicEnabled && !isPersonalActive && !!currentTrack;

  const activeSCUrl = isPersonalActive && activeUserLink && isSoundCloudLink(activeUserLink.url)
    ? activeUserLink.url
    : (isSystemActive && currentTrack?.source_type === 'link' && currentTrack?.source_url && isSoundCloudLink(currentTrack.source_url))
      ? currentTrack.source_url
      : null;

  const activeAudioUrl = isPersonalActive && activeUserLink && !isSoundCloudLink(activeUserLink.url)
    ? activeUserLink.url
    : (isSystemActive && currentTrack && !(currentTrack.source_type === 'link' && currentTrack.source_url && isSoundCloudLink(currentTrack.source_url || '')))
      ? ((currentTrack.source_type === 'file' ? currentTrack.file_path : currentTrack.source_url) || '')
      : null;

  const hasActiveMusic = activeSCUrl !== null || (activeAudioUrl !== null && isPlaying);

  const nowPlayingTitle = isPersonalActive
    ? activeUserLink!.title
    : (isSystemActive && currentTrack ? currentTrack.title : null);

  // Active track ID for progress tracking
  const activeTrackId = isPersonalActive && activeUserLink
    ? `personal:${activeUserLink.id}`
    : (isSystemActive && currentTrack ? `system:${currentTrack.id}` : null);

  // ══════════ SEEK ══════════
  const seek = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  // ══════════ MASTER OFF → stop ══════════
  useEffect(() => {
    if (!masterEnabled) setIsPlayingRaw(false);
  }, [masterEnabled]);

  // ══════════ FETCH DB SETTINGS ══════════
  useEffect(() => {
    if (!user?.id) {
      setSettingsLoaded(false);
      settingsLoadedForUser.current = null;
      return;
    }
    if (settingsLoadedForUser.current === user.id) return;

    const fetchSettings = async () => {
      const { data } = await supabase
        .from('user_music_settings')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (data) {
        setMasterEnabledRaw(data.master_enabled);
        setSystemMusicEnabledRaw(data.system_music_enabled);
        setPersonalMusicEnabledRaw(data.personal_music_enabled);
        setVolumeRaw(Number(data.volume));
        setUserPreferredFolderIdRaw(data.preferred_folder_id || null);
      }

      settingsLoadedForUser.current = user.id;
      setSettingsLoaded(true);
    };
    fetchSettings();
  }, [user?.id]);

  // ══════════ FETCH DATA ══════════
  useEffect(() => {
    if (!user?.id) { setLoadingUserLinks(false); return; }
    const fetchLinks = async () => {
      setLoadingUserLinks(true);
      const { data } = await supabase.from('user_music_links').select('*').eq('user_id', user.id).order('display_order');
      const links = (data as any[]) || [];
      setUserLinks(links);
      if (links.length > 0) setActiveUserLinkIdx(0);
      setLoadingUserLinks(false);
    };
    fetchLinks();
  }, [user?.id]);

  useEffect(() => {
    const fetchAdmin = async () => {
      setLoadingAdmin(true);
      const [fRes, tRes] = await Promise.all([
        supabase.from('background_music_folders').select('*').order('display_order'),
        supabase.from('background_music_tracks').select('*').order('display_order'),
      ]);
      setAdminFolders((fRes.data as any[]) || []);
      const tracks = (tRes.data as any[]) || [];
      setAdminTracks(tracks);
      const defaultIdx = tracks.findIndex(t => t.is_default);
      if (defaultIdx >= 0) setCurrentTrackIndex(defaultIdx);
      setLoadingAdmin(false);
    };
    fetchAdmin();
  }, []);

  useEffect(() => {
    if (!loadingAdmin && !loadingUserLinks && settingsLoaded) setDataReady(true);
  }, [loadingAdmin, loadingUserLinks, settingsLoaded]);

  useEffect(() => { setCurrentTrackIndex(0); }, [userPreferredFolderId]);

  // ══════════ LOAD PROGRESS ON TRACK CHANGE ══════════
  const prevTrackId = useRef<string | null>(null);
  useEffect(() => {
    if (!activeTrackId || activeTrackId === prevTrackId.current) return;
    // Save old track progress
    if (prevTrackId.current && audioRef.current) {
      saveProgressNow(prevTrackId.current, audioRef.current.currentTime, audioRef.current.duration || undefined);
    }
    prevTrackId.current = activeTrackId;
    // Load new track progress
    loadProgress(activeTrackId).then(pos => {
      if (pos > 0) pendingSeek.current = pos;
    });
  }, [activeTrackId, loadProgress, saveProgressNow]);

  // ══════════ PERIODIC PROGRESS SAVE ══════════
  useEffect(() => {
    if (!isPlaying || !activeTrackId || !activeAudioUrl) return;
    const interval = setInterval(() => {
      if (audioRef.current && !audioRef.current.paused) {
        saveProgress(activeTrackId, audioRef.current.currentTime, audioRef.current.duration || undefined);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, activeTrackId, activeAudioUrl, saveProgress]);

  // ══════════ AUTO-PLAY ══════════
  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem(sessionAutoPlayKey) === 'true';
    const userPaused = sessionStorage.getItem(sessionUserPausedKey) === 'true';
    if (!dataReady || !user || alreadyPlayed || userPaused || !musicAllowed || isPublicPage) return;

    const hasPersonal = personalMusicEnabled && userLinks.length > 0;
    const hasSystem = systemMusicEnabled && adminTracks.length > 0;
    if (!hasPersonal && !hasSystem) return;

    const timer = setTimeout(() => {
      if (sessionStorage.getItem(sessionAutoPlayKey) === 'true') return;
      sessionStorage.setItem(sessionAutoPlayKey, 'true');

      if (hasPersonal) {
        if (activeUserLinkIdx !== null && userLinks[activeUserLinkIdx] && !isSoundCloudLink(userLinks[activeUserLinkIdx].url)) {
          setIsPlayingRaw(true);
        }
      } else if (hasSystem) {
        setActiveUserLinkIdx(null);
        setIsPlayingRaw(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [dataReady, user, musicAllowed, isPublicPage, personalMusicEnabled, systemMusicEnabled, userLinks.length, adminTracks.length, sessionAutoPlayKey, sessionUserPausedKey]);

  // ══════════ CONTROLS ══════════
  const playNext = useCallback(() => {
    setCurrentTrackIndex(i => (i + 1) % currentPlaylist.length);
    setIsPlayingRaw(true);
  }, [currentPlaylist.length]);

  const playPrev = useCallback(() => {
    setCurrentTrackIndex(i => (i - 1 + currentPlaylist.length) % currentPlaylist.length);
    setIsPlayingRaw(true);
  }, [currentPlaylist.length]);

  // ══════════ AUDIO ELEMENT MANAGEMENT ══════════
  const prevAudioSrc = useRef<string | null>(null);

  useEffect(() => {
    if (!masterEnabled || !activeAudioUrl) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
        prevAudioSrc.current = null;
      }
      setCurrentTime(0);
      setDuration(0);
      return;
    }

    // Create or reuse audio element
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.preload = 'metadata';
    }

    const audio = audioRef.current;

    // Source changed
    if (prevAudioSrc.current !== activeAudioUrl) {
      prevAudioSrc.current = activeAudioUrl;
      audio.src = activeAudioUrl;
      audio.load();
      setCurrentTime(0);
      setDuration(0);
    }

    audio.volume = volume;

    // Event handlers
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onDurationChange = () => setDuration(audio.duration || 0);
    const onLoadedMetadata = () => {
      setDuration(audio.duration || 0);
      // Apply pending seek from saved progress
      if (pendingSeek.current !== null && pendingSeek.current < audio.duration) {
        audio.currentTime = pendingSeek.current;
        setCurrentTime(pendingSeek.current);
        pendingSeek.current = null;
      }
    };
    const onEnded = () => {
      if (isPersonalActive) {
        if (userLinks.length > 1) {
          setActiveUserLinkIdx(i => i !== null ? (i + 1) % userLinks.length : 0);
        } else {
          audio.currentTime = 0;
          audio.play().catch(() => {});
        }
      } else if (isSystemActive) {
        if (currentPlaylist.length > 1) {
          playNext();
        } else {
          audio.currentTime = 0;
          audio.play().catch(() => {});
        }
      }
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('durationchange', onDurationChange);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);

    // Play/pause
    if (isPlaying) {
      if (audio.readyState >= 2) {
        audio.play().catch(() => {});
      } else {
        const onCanPlay = () => { audio.play().catch(() => {}); audio.removeEventListener('canplay', onCanPlay); };
        audio.addEventListener('canplay', onCanPlay);
      }
    } else {
      audio.pause();
    }

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('durationchange', onDurationChange);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
    };
  }, [masterEnabled, activeAudioUrl, isPlaying, volume, isPersonalActive, isSystemActive, userLinks.length, currentPlaylist.length, playNext]);

  // Save progress on pause
  useEffect(() => {
    if (!isPlaying && activeTrackId && audioRef.current && audioRef.current.currentTime > 0) {
      saveProgressNow(activeTrackId, audioRef.current.currentTime, audioRef.current.duration || undefined);
    }
  }, [isPlaying, activeTrackId, saveProgressNow]);

  const value: MusicContextValue = {
    masterEnabled, setMasterEnabled,
    systemMusicEnabled, setSystemMusicEnabled,
    personalMusicEnabled, setPersonalMusicEnabled,
    isPlaying, setIsPlaying,
    volume, setVolume,
    currentTime, duration, seek,
    adminFolders, adminTracks, currentPlaylist, currentTrackIndex, setCurrentTrackIndex,
    currentTrack, userPreferredFolderId, setUserPreferredFolderId, loadingAdmin,
    playNext, playPrev,
    userLinks, setUserLinks, activeUserLinkIdx, setActiveUserLinkIdx, loadingUserLinks,
    isPersonalActive, isSystemActive, activeUserLink,
    activeSCUrl, activeAudioUrl, hasActiveMusic, nowPlayingTitle,
    effectiveFolderId, isPublicPage,
    buildWidgetUrl, isSoundCloudLink,
    activeTrackId,
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
      {/* SoundCloud widget — always mounted */}
      {masterEnabled && activeSCUrl && (
        <PersistentSCWidget url={activeSCUrl} />
      )}
    </MusicContext.Provider>
  );
}
