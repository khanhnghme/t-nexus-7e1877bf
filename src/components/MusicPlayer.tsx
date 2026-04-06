import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useMusic } from '@/contexts/MusicContext';
import { supabase } from '@/integrations/supabase/client';
import { X, Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Plus, Trash2, FolderOpen, Pencil, Save, Bookmark, Power, Music } from 'lucide-react';
import SoundCloudIcon from '@/components/SoundCloudIcon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

interface MusicPlayerProps {
  showDisc?: boolean;
}

// ── Equalizer animation bars ──
function EqBars({ color = 'bg-[#ff5500]' }: { color?: string }) {
  return (
    <div className="flex gap-[2px] items-end h-3.5">
      {[60, 100, 45, 80, 55].map((h, i) => (
        <div
          key={i}
          className={`w-[3px] ${color} rounded-full`}
          style={{
            height: `${h}%`,
            animation: `eqBounce 0.8s ease-in-out ${i * 0.12}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}

const eqStyleId = 'eq-bars-style';
if (typeof document !== 'undefined' && !document.getElementById(eqStyleId)) {
  const style = document.createElement('style');
  style.id = eqStyleId;
  style.textContent = `@keyframes eqBounce { 0% { transform: scaleY(0.3); } 100% { transform: scaleY(1); } }`;
  document.head.appendChild(style);
}

// ── Format time ──
function formatTime(seconds: number): string {
  if (!seconds || !isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ── Inline player controls ──
function InlinePlayerControls({
  title, artist, isPlaying, onTogglePlay, volume, onVolumeChange,
  currentTime, duration, onSeek
}: {
  title: string; artist?: string | null; isPlaying: boolean;
  onTogglePlay: () => void; volume: number; onVolumeChange: (v: number) => void;
  currentTime: number; duration: number; onSeek: (time: number) => void;
}) {
  return (
    <div className="p-3 bg-card border border-border rounded-xl space-y-2">
      <div className="flex items-center gap-2.5">
        <Button size="sm" variant="outline" className="h-8 w-8 p-0 rounded-full shrink-0" onClick={onTogglePlay}>
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </Button>
        <div className="min-w-0 flex-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="text-sm font-semibold text-foreground truncate cursor-default">{title}</p>
            </TooltipTrigger>
            <TooltipContent side="top" className="max-w-[300px]"><p className="break-words">{title}</p></TooltipContent>
          </Tooltip>
          {artist && (
            <Tooltip>
              <TooltipTrigger asChild>
                <p className="text-xs text-muted-foreground truncate cursor-default">{artist}</p>
              </TooltipTrigger>
              <TooltipContent side="top"><p>{artist}</p></TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>

      {/* Seek bar */}
      {duration > 0 && (
        <div className="space-y-0.5">
          <Slider
            value={[currentTime]}
            onValueChange={v => onSeek(v[0])}
            max={duration}
            step={0.5}
            className="flex-1 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] font-mono text-muted-foreground px-0.5">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MusicPlayer({ showDisc = false }: MusicPlayerProps) {
  const { user } = useAuth();
  const music = useMusic();
  const [isOpen, setIsOpen] = useState(false);

  // Add link form state (UI only)
  const [showAddForm, setShowAddForm] = useState(false);
  const [newLinkUrl, setNewLinkUrl] = useState('');
  const [newLinkTitle, setNewLinkTitle] = useState('');
  const [savingLink, setSavingLink] = useState(false);
  const [editingLinkId, setEditingLinkId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [activeTab, setActiveTab] = useState<string>('system');

  // Don't render on public pages or if not logged in
  if (!showDisc || !user || music.isPublicPage) return null;

  // ══════════ CRUD handlers ══════════
  const handleAddLink = async () => {
    if (!newLinkUrl.trim() || !user?.id) return;
    setSavingLink(true);
    try {
      const title = newLinkTitle.trim() || newLinkUrl.trim().split('/').pop() || 'Nhạc của tôi';
      const { error } = await supabase.from('user_music_links').insert({
        user_id: user.id, title, url: newLinkUrl.trim(), display_order: music.userLinks.length,
      });
      if (error) throw error;
      const { data } = await supabase.from('user_music_links').select('*').eq('user_id', user.id).order('display_order');
      const links = (data as any[]) || [];
      music.setUserLinks(links);
      if (music.activeUserLinkIdx === null && links.length > 0) music.setActiveUserLinkIdx(0);
      setNewLinkUrl(''); setNewLinkTitle(''); setShowAddForm(false);
      toast.success('Đã lưu link nhạc');
    } catch (err: any) { toast.error(err.message); }
    finally { setSavingLink(false); }
  };

  const handleDeleteLink = async (id: string) => {
    await supabase.from('user_music_links').delete().eq('id', id);
    const { data } = await supabase.from('user_music_links').select('*').eq('user_id', user!.id).order('display_order');
    const links = (data as any[]) || [];
    music.setUserLinks(links);
    if (links.length === 0) music.setActiveUserLinkIdx(null);
    else if (music.activeUserLinkIdx !== null && music.activeUserLinkIdx >= links.length) music.setActiveUserLinkIdx(links.length - 1);
    toast.success('Đã xóa');
  };

  const handleRenameLink = async (id: string) => {
    if (!editTitle.trim()) return;
    await supabase.from('user_music_links').update({ title: editTitle.trim() }).eq('id', id);
    music.setUserLinks(prev => prev.map(l => l.id === id ? { ...l, title: editTitle.trim() } : l));
    setEditingLinkId(null);
    toast.success('Đã đổi tên');
  };

  const selectFolder = (folderId: string | null) => {
    music.setUserPreferredFolderId(folderId);
    music.setCurrentTrackIndex(0);
    music.setActiveUserLinkIdx(null);
    toast.success(folderId ? 'Đã chọn folder nhạc' : 'Phát tất cả nhạc hệ thống');
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <Tooltip>
        <TooltipTrigger asChild>
          <SheetTrigger asChild>
            <button className="relative h-10 w-10 rounded-full flex items-center justify-center hover:bg-white/15 transition-all group">
              {music.hasActiveMusic ? (
                <div className="relative">
                  <SoundCloudIcon className="drop-shadow-lg transition-all" size={24} color="#FFD700" />
                  <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ boxShadow: '0 0 0 4px #FFD700' }} />
                </div>
              ) : (
                <SoundCloudIcon className="drop-shadow-lg transition-all opacity-60" size={24} color="#9ca3af" />
              )}
              {music.hasActiveMusic && (
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-background shadow-sm" style={{ backgroundColor: '#FFD700' }}>
                  <div className="w-full h-full rounded-full animate-ping opacity-50" style={{ backgroundColor: '#FFD700' }} />
                </div>
              )}
            </button>
          </SheetTrigger>
        </TooltipTrigger>
        <TooltipContent><p>{music.hasActiveMusic ? 'Đang phát nhạc' : 'Mở nhạc'}</p></TooltipContent>
      </Tooltip>
      <SheetContent
        side="right"
        className="w-full sm:max-w-2xl p-0 flex flex-col h-full border-l shadow-2xl bg-background"
      >
        {/* ═══ Header ═══ */}
        <SheetHeader className="px-5 py-4 border-b bg-gradient-to-r from-[#ff5500] to-[#ff7700] text-white relative overflow-hidden shrink-0">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
          <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-white/5 rounded-full" />
          <div className="relative flex items-center justify-between">
            <SheetTitle className="flex items-center gap-3 text-white">
              <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center ring-2 ring-white/30 shadow-lg backdrop-blur-sm">
                {music.hasActiveMusic ? <EqBars color="bg-white" /> : <SoundCloudIcon size={20} color="#fff" />}
              </div>
              <div>
                <span className="text-base font-bold">Nhạc nền</span>
                <p className="text-[11px] text-white/70 font-normal mt-0.5 max-w-[200px] truncate">
                  {music.nowPlayingTitle ? `♫ ${music.nowPlayingTitle}` : 'Chọn nhạc để phát'}
                </p>
              </div>
            </SheetTitle>
          </div>
          <SheetDescription className="sr-only">Trình phát nhạc nền</SheetDescription>
        </SheetHeader>

        {/* ═══ MASTER TOGGLE ═══ */}
        <div className="px-5 py-4 border-b border-border shrink-0">
          <div className={`flex items-center justify-between p-3.5 rounded-xl transition-colors ${
            music.masterEnabled ? 'bg-primary/5 ring-1 ring-primary/15' : 'bg-muted/50'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                music.masterEnabled ? 'bg-primary/15 text-primary' : 'bg-muted text-muted-foreground'
              }`}>
                <Power className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-sm font-semibold text-foreground">Phát nhạc nền</span>
                <p className="text-[11px] text-muted-foreground">{music.masterEnabled ? 'Đang bật' : 'Đã tắt — không phát nhạc'}</p>
              </div>
            </div>
            <Switch
              checked={music.masterEnabled}
              onCheckedChange={(checked) => {
                music.setMasterEnabled(checked);
                if (!checked) music.setIsPlaying(false);
              }}
            />
          </div>
        </div>

        {/* ═══ SUB SOURCE TOGGLES — separate tier ═══ */}
        {music.masterEnabled && (
          <div className="px-5 py-3 border-b border-border shrink-0 bg-muted/20">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2.5 px-0.5">Nguồn phát</p>
            <div className="space-y-1.5">
              {/* System music row */}
              <div className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg transition-colors ${
                music.systemMusicEnabled ? 'bg-card border border-[#ff5500]/20' : 'bg-transparent border border-transparent hover:bg-muted/40'
              }`}>
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-md flex items-center justify-center ${
                    music.systemMusicEnabled ? 'bg-[#ff5500]/10' : 'bg-muted'
                  }`}>
                    <SoundCloudIcon size={14} color={music.systemMusicEnabled ? '#ff5500' : '#9ca3af'} />
                  </div>
                  <div>
                    <p className={`text-xs font-medium ${music.systemMusicEnabled ? 'text-foreground' : 'text-muted-foreground'}`}>Nhạc hệ thống</p>
                    <p className="text-[10px] text-muted-foreground">Nhạc từ admin cung cấp</p>
                  </div>
                </div>
                <Switch checked={music.systemMusicEnabled} onCheckedChange={music.setSystemMusicEnabled} className="h-5 w-9" />
              </div>

              {/* Personal music row */}
              <div className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg transition-colors ${
                music.personalMusicEnabled ? 'bg-card border border-primary/20' : 'bg-transparent border border-transparent hover:bg-muted/40'
              }`}>
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-md flex items-center justify-center ${
                    music.personalMusicEnabled ? 'bg-primary/10' : 'bg-muted'
                  }`}>
                    <Bookmark className={`w-3.5 h-3.5 ${music.personalMusicEnabled ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <div>
                    <p className={`text-xs font-medium ${music.personalMusicEnabled ? 'text-foreground' : 'text-muted-foreground'}`}>Nhạc cá nhân</p>
                    <p className="text-[10px] text-muted-foreground">Link nhạc của bạn</p>
                  </div>
                </div>
                <Switch checked={music.personalMusicEnabled} onCheckedChange={music.setPersonalMusicEnabled} className="h-5 w-9" />
              </div>
            </div>

            {/* Priority hint */}
            {music.personalMusicEnabled && music.systemMusicEnabled && (
              <p className="text-[10px] text-muted-foreground bg-muted/50 rounded-md px-3 py-1.5 mt-2.5 text-center">
                ⚡ Ưu tiên <span className="font-semibold text-primary">nhạc cá nhân</span>. Không có sẽ phát nhạc hệ thống.
              </p>
            )}
          </div>
        )}

        {/* ═══ MUSIC OFF STATE ═══ */}
        {!music.masterEnabled ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-8">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
              <VolumeX className="w-10 h-10 text-muted-foreground/40" />
            </div>
            <p className="text-base font-semibold text-foreground">Nhạc đã tắt</p>
            <p className="text-sm text-muted-foreground text-center max-w-[280px]">
              Bật công tắc phía trên để nghe nhạc nền. Hệ thống sẽ không tự động bật nhạc khi bạn đã tắt.
            </p>
          </div>
        ) : (
          <div className="flex-1 flex overflow-hidden min-h-0">
            {/* Left: Now playing + Folders */}
            <div className="w-[300px] border-r border-border flex flex-col shrink-0 bg-muted/30">
              <div className="p-4 border-b border-border">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  {music.hasActiveMusic && <EqBars color="bg-[#ff5500]" />}
                  <span>Đang phát</span>
                </p>
                {music.activeSCUrl && isOpen ? (
                  <iframe
                    src={music.buildWidgetUrl(music.activeSCUrl)}
                    className="w-full border-none rounded-xl"
                    style={{ height: '200px' }}
                    allow="autoplay"
                    title="SoundCloud Player"
                    scrolling="no"
                    frameBorder="no"
                  />
                ) : music.activeAudioUrl ? (
                  <InlinePlayerControls
                    title={music.nowPlayingTitle || 'Đang phát'}
                    artist={music.isSystemActive ? music.currentTrack?.artist : null}
                    isPlaying={music.isPlaying}
                    onTogglePlay={() => music.setIsPlaying(!music.isPlaying)}
                    volume={music.volume}
                    onVolumeChange={music.setVolume}
                    currentTime={music.currentTime}
                    duration={music.duration}
                    onSeek={music.seek}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2 py-8 rounded-xl border border-dashed border-border bg-card">
                    <Music className="w-8 h-8 text-muted-foreground/30" />
                    <p className="text-xs text-muted-foreground text-center">Chọn bài để phát</p>
                  </div>
                )}
              </div>

              {music.isSystemActive && music.currentPlaylist.length > 1 && (
                <div className="flex items-center justify-center gap-4 py-3 border-b border-border bg-card/50">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full" onClick={music.playPrev}>
                    <SkipBack className="w-4 h-4" />
                  </Button>
                  <Badge variant="secondary" className="text-[10px] font-mono px-2">
                    {music.currentTrackIndex + 1} / {music.currentPlaylist.length}
                  </Badge>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full" onClick={music.playNext}>
                    <SkipForward className="w-4 h-4" />
                  </Button>
                </div>
              )}

              {music.systemMusicEnabled && music.adminFolders.length > 0 && (
                <div className="p-3 border-b border-border flex-1 overflow-auto">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Folder nhạc</p>
                  <div className="space-y-0.5">
                    <button
                      onClick={() => selectFolder(null)}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all ${
                        !music.effectiveFolderId
                          ? 'bg-[#ff5500]/10 text-[#ff5500] font-semibold ring-1 ring-[#ff5500]/20'
                          : 'hover:bg-muted text-foreground'
                      }`}
                    >
                      <Music className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">Tất cả</span>
                      <Badge variant="secondary" className="text-[9px] px-1.5 ml-auto shrink-0">{music.adminTracks.length}</Badge>
                    </button>
                    {music.adminFolders.map(f => {
                      const count = music.adminTracks.filter(t => t.folder_id === f.id).length;
                      return (
                        <button
                          key={f.id}
                          onClick={() => selectFolder(f.id)}
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all ${
                            music.effectiveFolderId === f.id
                              ? 'bg-[#ff5500]/10 text-[#ff5500] font-semibold ring-1 ring-[#ff5500]/20'
                              : 'hover:bg-muted text-foreground'
                          }`}
                        >
                          <FolderOpen className="w-3.5 h-3.5 shrink-0 text-amber-500" />
                          <span className="truncate flex-1 text-left">{f.name}</span>
                          <Badge variant="secondary" className="text-[9px] px-1.5 shrink-0">{count}</Badge>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="p-4 mt-auto border-t border-border bg-card/50">
                <div className="flex items-center gap-2">
                  <button onClick={() => music.setVolume(v => v > 0 ? 0 : 0.7)} className="shrink-0">
                    {music.volume === 0 ? <VolumeX className="w-4 h-4 text-muted-foreground" /> : <Volume2 className="w-4 h-4 text-muted-foreground" />}
                  </button>
                  <Slider value={[music.volume * 100]} onValueChange={v => music.setVolume(v[0] / 100)} max={100} step={1} className="flex-1" />
                  <span className="text-[10px] text-muted-foreground w-8 text-right font-mono shrink-0">{Math.round(music.volume * 100)}%</span>
                </div>
              </div>
            </div>

            {/* Right: Track lists */}
            <div className="flex-1 flex flex-col overflow-hidden bg-background">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col overflow-hidden">
                <TabsList className="mx-4 mt-4 grid grid-cols-2 shrink-0 bg-muted/50">
                  <TabsTrigger value="system" className="text-xs gap-1.5 data-[state=active]:bg-[#ff5500] data-[state=active]:text-white">
                    <SoundCloudIcon size={12} color="currentColor" /> Nhạc hệ thống
                    {music.adminTracks.length > 0 && <Badge variant="secondary" className="text-[9px] px-1 ml-1 bg-white/20">{music.currentPlaylist.length}</Badge>}
                  </TabsTrigger>
                  <TabsTrigger value="my" className="text-xs gap-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    <Bookmark className="w-3 h-3" /> Nhạc của tôi
                    {music.userLinks.length > 0 && <Badge variant="secondary" className="text-[9px] px-1 ml-1">{music.userLinks.length}</Badge>}
                  </TabsTrigger>
                </TabsList>

                {/* ═══ System music tab ═══ */}
                <TabsContent value="system" className="flex-1 flex flex-col overflow-hidden mt-0 data-[state=inactive]:hidden">
                  {!music.systemMusicEnabled ? (
                    <div className="flex-1 flex flex-col items-center justify-center gap-3 px-6">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        <Power className="w-8 h-8 text-muted-foreground/40" />
                      </div>
                      <p className="text-sm font-medium text-foreground">Nhạc hệ thống đã tắt</p>
                      <p className="text-xs text-muted-foreground text-center">Bật nhạc hệ thống để nghe nhạc nền từ admin</p>
                      <Button size="sm" variant="outline" className="text-xs mt-1" onClick={() => music.setSystemMusicEnabled(true)}>
                        <Power className="w-3 h-3 mr-1.5" /> Bật nhạc hệ thống
                      </Button>
                    </div>
                  ) : music.loadingAdmin ? (
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-[#ff5500] border-t-transparent rounded-full animate-spin" />
                    </div>
                  ) : music.currentPlaylist.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center gap-3 px-6">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        <SoundCloudIcon size={28} color="#ff5500" className="opacity-40" />
                      </div>
                      <p className="text-sm font-medium text-foreground">
                        {music.effectiveFolderId ? 'Folder này chưa có bài nhạc' : 'Chưa có nhạc hệ thống'}
                      </p>
                    </div>
                  ) : (
                    <ScrollArea className="flex-1">
                      <div className="p-3 space-y-1">
                        {music.currentPlaylist.map((t, idx) => {
                          const isActive = idx === music.currentTrackIndex && !music.isPersonalActive;
                          return (
                            <button
                              key={t.id}
                              onClick={() => { music.setCurrentTrackIndex(idx); music.setIsPlaying(true); music.setActiveUserLinkIdx(null); }}
                              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                                isActive
                                  ? 'bg-[#ff5500]/10 ring-1 ring-[#ff5500]/20'
                                  : 'hover:bg-muted/60'
                              }`}
                            >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                isActive ? 'bg-[#ff5500] text-white' : 'bg-muted'
                              }`}>
                                {isActive && music.isPlaying ? <EqBars color="bg-white" /> : <Play className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-muted-foreground'}`} />}
                              </div>
                              <div className="min-w-0 flex-1">
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <p className={`text-sm font-medium truncate ${isActive ? 'text-[#ff5500]' : 'text-foreground'}`}>{t.title}</p>
                                  </TooltipTrigger>
                                  <TooltipContent side="top" className="max-w-[300px]"><p className="break-words">{t.title}</p></TooltipContent>
                                </Tooltip>
                                {t.artist && (
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <p className="text-[11px] text-muted-foreground truncate">{t.artist}</p>
                                    </TooltipTrigger>
                                    <TooltipContent side="top"><p>{t.artist}</p></TooltipContent>
                                  </Tooltip>
                                )}
                              </div>
                              <Badge variant="outline" className="text-[9px] px-1.5 shrink-0 border-border text-muted-foreground">
                                {t.source_type === 'file' ? 'MP3' : 'SC'}
                              </Badge>
                            </button>
                          );
                        })}
                      </div>
                    </ScrollArea>
                  )}
                </TabsContent>

                {/* ═══ My music tab ═══ */}
                <TabsContent value="my" className="flex-1 flex flex-col overflow-hidden mt-0 data-[state=inactive]:hidden">
                  {!music.personalMusicEnabled ? (
                    <div className="flex-1 flex flex-col items-center justify-center gap-3 px-6">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        <Bookmark className="w-8 h-8 text-muted-foreground/40" />
                      </div>
                      <p className="text-sm font-medium text-foreground">Nhạc cá nhân đã tắt</p>
                      <p className="text-xs text-muted-foreground text-center">Bật để nghe nhạc từ danh sách của bạn</p>
                      <Button size="sm" variant="outline" className="text-xs mt-1" onClick={() => music.setPersonalMusicEnabled(true)}>
                        <Bookmark className="w-3 h-3 mr-1.5" /> Bật nhạc cá nhân
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="px-4 pt-4 pb-3 border-b border-border space-y-2 shrink-0">
                        {showAddForm ? (
                          <div className="space-y-2 p-3 bg-muted/30 rounded-xl border border-border">
                            <Input value={newLinkTitle} onChange={e => setNewLinkTitle(e.target.value)} placeholder="Tên bài nhạc (tùy chọn)" className="text-xs h-9" />
                            <div className="flex gap-2">
                              <Input value={newLinkUrl} onChange={e => setNewLinkUrl(e.target.value)} placeholder="Dán link SoundCloud hoặc MP3..." className="text-xs h-9 min-w-0" />
                              <Button size="sm" className="h-9 px-3 text-xs shrink-0 bg-[#ff5500] hover:bg-[#e64d00] text-white" onClick={handleAddLink} disabled={savingLink || !newLinkUrl.trim()}>
                                <Save className="w-3 h-3 mr-1" /> Lưu
                              </Button>
                              <Button size="sm" variant="ghost" className="h-9 w-9 p-0 shrink-0" onClick={() => { setShowAddForm(false); setNewLinkUrl(''); setNewLinkTitle(''); }}>
                                <X className="w-3.5 h-3.5" />
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <Button size="sm" variant="outline" className="w-full h-9 text-xs gap-1.5" onClick={() => setShowAddForm(true)}>
                            <Plus className="w-3.5 h-3.5" /> Thêm link nhạc
                          </Button>
                        )}
                      </div>

                      <ScrollArea className="flex-1">
                        <div className="p-3 space-y-1">
                          {music.loadingUserLinks ? (
                            <div className="flex items-center justify-center py-10">
                              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                            </div>
                          ) : music.userLinks.length === 0 ? (
                            <div className="flex flex-col items-center justify-center gap-3 py-10 px-6">
                              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                                <Bookmark className="w-8 h-8 text-muted-foreground/40" />
                              </div>
                              <p className="text-sm font-medium text-foreground">Chưa có link nhạc</p>
                              <p className="text-xs text-muted-foreground text-center">Thêm link SoundCloud để lưu lại và nghe bất cứ lúc nào</p>
                            </div>
                          ) : (
                            music.userLinks.map((link, idx) => (
                              <div
                                key={link.id}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group ${
                                  idx === music.activeUserLinkIdx
                                    ? 'bg-primary/10 ring-1 ring-primary/20'
                                    : 'hover:bg-muted/60'
                                }`}
                              >
                                <button
                                  onClick={() => music.setActiveUserLinkIdx(idx)}
                                  className="flex items-center gap-3 flex-1 min-w-0 text-left"
                                >
                                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                    idx === music.activeUserLinkIdx ? 'bg-primary text-primary-foreground' : 'bg-muted'
                                  }`}>
                                    {idx === music.activeUserLinkIdx ? <EqBars color="bg-primary-foreground" /> : <Play className="w-3.5 h-3.5 text-muted-foreground" />}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    {editingLinkId === link.id ? (
                                      <form onSubmit={e => { e.preventDefault(); handleRenameLink(link.id); }} className="flex gap-1.5">
                                        <Input value={editTitle} onChange={e => setEditTitle(e.target.value)} className="text-xs h-7 px-2 min-w-0" autoFocus />
                                        <Button type="submit" size="sm" variant="ghost" className="h-7 w-7 p-0 shrink-0"><Save className="w-3 h-3" /></Button>
                                      </form>
                                    ) : (
                                      <>
                                        <Tooltip>
                                          <TooltipTrigger asChild>
                                            <p className={`text-sm font-medium truncate ${idx === music.activeUserLinkIdx ? 'text-primary' : 'text-foreground'}`}>{link.title}</p>
                                          </TooltipTrigger>
                                          <TooltipContent side="top" className="max-w-[300px]"><p className="break-words">{link.title}</p></TooltipContent>
                                        </Tooltip>
                                        <p className="text-[10px] text-muted-foreground truncate max-w-[200px]">{link.url}</p>
                                      </>
                                    )}
                                  </div>
                                </button>
                                <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                                  <Button size="sm" variant="ghost" className="h-7 w-7 p-0" onClick={(e) => { e.stopPropagation(); setEditingLinkId(link.id); setEditTitle(link.title); }}>
                                    <Pencil className="w-3 h-3 text-muted-foreground" />
                                  </Button>
                                  <Button size="sm" variant="ghost" className="h-7 w-7 p-0" onClick={(e) => { e.stopPropagation(); handleDeleteLink(link.id); }}>
                                    <Trash2 className="w-3 h-3 text-destructive" />
                                  </Button>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </ScrollArea>
                    </>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
