import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { r2Storage } from '@/lib/r2Storage';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import {
  Music, FolderPlus, Plus, Trash2, Loader2, Upload, Link, Save, Star, GripVertical, Pencil, FolderOpen
} from 'lucide-react';
import SoundCloudIcon from '@/components/SoundCloudIcon';

interface MusicFolder {
  id: string;
  name: string;
  description: string | null;
  display_order: number;
}

interface MusicTrack {
  id: string;
  folder_id: string | null;
  title: string;
  artist: string | null;
  source_type: string;
  source_url: string | null;
  file_path: string | null;
  storage_name: string | null;
  is_default: boolean;
  display_order: number;
}

export default function AdminMusicManager() {
  const { user } = useAuth();
  const { toast } = useToast();

  const [folders, setFolders] = useState<MusicFolder[]>([]);
  const [tracks, setTracks] = useState<MusicTrack[]>([]);
  const [loading, setLoading] = useState(true);

  // Add track dialog
  const [trackDialogOpen, setTrackDialogOpen] = useState(false);
  const [editingTrack, setEditingTrack] = useState<MusicTrack | null>(null);
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtist, setTrackArtist] = useState('');
  const [trackSourceType, setTrackSourceType] = useState<'link' | 'file'>('link');
  const [trackUrl, setTrackUrl] = useState('');
  const [trackFolderId, setTrackFolderId] = useState<string | null>(null);
  const [trackIsDefault, setTrackIsDefault] = useState(false);
  const [savingTrack, setSavingTrack] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);
  const [uploadedFilePath, setUploadedFilePath] = useState('');
  const [uploadedStorageName, setUploadedStorageName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Folder dialog
  const [folderDialogOpen, setFolderDialogOpen] = useState(false);
  const [folderName, setFolderName] = useState('');
  const [editingFolder, setEditingFolder] = useState<MusicFolder | null>(null);
  const [savingFolder, setSavingFolder] = useState(false);

  // Delete confirm
  const [deleteTarget, setDeleteTarget] = useState<{ type: 'track' | 'folder'; id: string; name: string } | null>(null);

  const fetchData = async () => {
    setLoading(true);
    const [fRes, tRes] = await Promise.all([
      supabase.from('background_music_folders').select('*').order('display_order'),
      supabase.from('background_music_tracks').select('*').order('display_order'),
    ]);
    setFolders((fRes.data as any[]) || []);
    setTracks((tRes.data as any[]) || []);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const handleUploadFile = async (file: File) => {
    setUploadingFile(true);
    try {
      const ext = file.name.split('.').pop();
      const storageName = `music-${Date.now()}.${ext}`;
      const { data: uploadData, error } = await r2Storage.from('background-music').upload(storageName, file);
      if (error) throw error;
      setUploadedFilePath(uploadData?.publicUrl || '');
      setUploadedStorageName(storageName);
      setUploadedStorageName(storageName);
      if (!trackTitle) setTrackTitle(file.name.replace(/\.[^/.]+$/, ''));
      toast({ title: 'Đã tải file lên' });
    } catch (err: any) {
      toast({ title: 'Lỗi upload', description: err.message, variant: 'destructive' });
    } finally {
      setUploadingFile(false);
    }
  };

  const handleSaveTrack = async () => {
    if (!trackTitle.trim()) return;
    setSavingTrack(true);
    try {
      const payload: any = {
        title: trackTitle.trim(),
        artist: trackArtist.trim() || null,
        source_type: trackSourceType,
        source_url: trackSourceType === 'link' ? trackUrl.trim() || null : null,
        file_path: trackSourceType === 'file' ? uploadedFilePath || null : null,
        storage_name: trackSourceType === 'file' ? uploadedStorageName || null : null,
        folder_id: trackFolderId || null,
        is_default: trackIsDefault,
        created_by: user!.id,
      };
      if (editingTrack) {
        await supabase.from('background_music_tracks').update(payload).eq('id', editingTrack.id);
      } else {
        payload.display_order = tracks.length;
        await supabase.from('background_music_tracks').insert(payload);
      }
      setTrackDialogOpen(false);
      await fetchData();
      toast({ title: editingTrack ? 'Đã cập nhật bài nhạc' : 'Đã thêm bài nhạc' });
    } catch (err: any) {
      toast({ title: 'Lỗi', description: err.message, variant: 'destructive' });
    } finally {
      setSavingTrack(false);
    }
  };

  const handleSaveFolder = async () => {
    if (!folderName.trim()) return;
    setSavingFolder(true);
    try {
      if (editingFolder) {
        await supabase.from('background_music_folders').update({ name: folderName.trim() }).eq('id', editingFolder.id);
      } else {
        await supabase.from('background_music_folders').insert({ name: folderName.trim(), display_order: folders.length, created_by: user!.id });
      }
      setFolderDialogOpen(false);
      await fetchData();
      toast({ title: editingFolder ? 'Đã cập nhật folder' : 'Đã tạo folder' });
    } catch (err: any) {
      toast({ title: 'Lỗi', description: err.message, variant: 'destructive' });
    } finally {
      setSavingFolder(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      if (deleteTarget.type === 'track') {
        const track = tracks.find(t => t.id === deleteTarget.id);
        if (track?.storage_name) {
          await r2Storage.from('background-music').remove([track.storage_name]);
        }
        await supabase.from('background_music_tracks').delete().eq('id', deleteTarget.id);
      } else {
        await supabase.from('background_music_folders').delete().eq('id', deleteTarget.id);
      }
      setDeleteTarget(null);
      await fetchData();
      toast({ title: 'Đã xóa' });
    } catch (err: any) {
      toast({ title: 'Lỗi', description: err.message, variant: 'destructive' });
    }
  };

  const openAddTrack = (folderId?: string | null) => {
    setEditingTrack(null);
    setTrackTitle('');
    setTrackArtist('');
    setTrackSourceType('link');
    setTrackUrl('');
    setTrackFolderId(folderId || null);
    setTrackIsDefault(false);
    setUploadedFilePath('');
    setUploadedStorageName('');
    setTrackDialogOpen(true);
  };

  const openEditTrack = (t: MusicTrack) => {
    setEditingTrack(t);
    setTrackTitle(t.title);
    setTrackArtist(t.artist || '');
    setTrackSourceType(t.source_type as 'link' | 'file');
    setTrackUrl(t.source_url || '');
    setTrackFolderId(t.folder_id);
    setTrackIsDefault(t.is_default);
    setUploadedFilePath(t.file_path || '');
    setUploadedStorageName(t.storage_name || '');
    setTrackDialogOpen(true);
  };

  const unfoldered = tracks.filter(t => !t.folder_id);

  if (loading) {
    return (
      <Card className="border border-border h-fit">
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card className="border border-border h-fit">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#ff5500]/10">
                <Music className="w-4 h-4 text-[#ff5500]" />
              </div>
              <CardTitle className="text-base">Nhạc nền hệ thống</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" className="gap-1.5 text-xs h-8" onClick={() => { setEditingFolder(null); setFolderName(''); setFolderDialogOpen(true); }}>
                <FolderPlus className="w-3 h-3" /> Tạo folder
              </Button>
              <Button size="sm" className="gap-1.5 text-xs h-8 bg-[#ff5500] hover:bg-[#e64d00] text-white" onClick={() => openAddTrack()}>
                <Plus className="w-3 h-3" /> Thêm nhạc
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <ScrollArea className="max-h-[500px]">
            <div className="space-y-4">
              {/* Unfoldered tracks */}
              {unfoldered.length > 0 && (
                <div className="space-y-1.5">
                  <p className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                    <Music className="w-3 h-3" /> Không thuộc folder ({unfoldered.length})
                  </p>
                  {unfoldered.map(t => (
                    <TrackRow key={t.id} track={t} onEdit={openEditTrack} onDelete={(t) => setDeleteTarget({ type: 'track', id: t.id, name: t.title })} />
                  ))}
                </div>
              )}

              {/* Folders */}
              {folders.map(folder => {
                const folderTracks = tracks.filter(t => t.folder_id === folder.id);
                return (
                  <div key={folder.id} className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium flex items-center gap-1.5">
                        <FolderOpen className="w-3 h-3 text-amber-500" /> {folder.name}
                        <Badge variant="secondary" className="text-[10px] px-1.5">{folderTracks.length}</Badge>
                      </p>
                      <div className="flex items-center gap-1">
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0" onClick={() => openAddTrack(folder.id)}>
                          <Plus className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0" onClick={() => { setEditingFolder(folder); setFolderName(folder.name); setFolderDialogOpen(true); }}>
                          <Pencil className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-destructive" onClick={() => setDeleteTarget({ type: 'folder', id: folder.id, name: folder.name })}>
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    {folderTracks.length === 0 && (
                      <p className="text-[11px] text-muted-foreground pl-5 italic">Chưa có bài nhạc</p>
                    )}
                    {folderTracks.map(t => (
                      <TrackRow key={t.id} track={t} onEdit={openEditTrack} onDelete={(t) => setDeleteTarget({ type: 'track', id: t.id, name: t.title })} />
                    ))}
                  </div>
                );
              })}

              {tracks.length === 0 && folders.length === 0 && (
                <div className="text-center py-8">
                  <SoundCloudIcon className="w-10 h-10 mx-auto mb-2 opacity-30" color="#ff5500" />
                  <p className="text-sm text-muted-foreground">Chưa có nhạc nền</p>
                  <p className="text-xs text-muted-foreground">Thêm bài nhạc bằng cách tải file hoặc dán link SoundCloud</p>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Track dialog */}
      <Dialog open={trackDialogOpen} onOpenChange={setTrackDialogOpen}>
        <DialogContent className="max-w-md overflow-hidden">
          <DialogHeader>
            <DialogTitle>{editingTrack ? 'Sửa bài nhạc' : 'Thêm bài nhạc'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div>
              <Label className="text-xs">Tên bài nhạc *</Label>
              <Input value={trackTitle} onChange={e => setTrackTitle(e.target.value)} placeholder="Tên bài nhạc..." className="mt-1" />
            </div>
            <div>
              <Label className="text-xs">Nghệ sĩ</Label>
              <Input value={trackArtist} onChange={e => setTrackArtist(e.target.value)} placeholder="Tên nghệ sĩ..." className="mt-1" />
            </div>
            <div>
              <Label className="text-xs">Folder</Label>
              <select
                className="w-full mt-1 text-sm border rounded-md px-3 py-2 bg-background"
                value={trackFolderId || ''}
                onChange={e => setTrackFolderId(e.target.value || null)}
              >
                <option value="">— Không thuộc folder —</option>
                {folders.map(f => <option key={f.id} value={f.id}>{f.name}</option>)}
              </select>
            </div>
            <Tabs value={trackSourceType} onValueChange={v => setTrackSourceType(v as 'link' | 'file')} className="w-full">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="link" className="gap-1.5 text-xs">
                  <Link className="w-3 h-3" /> Dán link
                </TabsTrigger>
                <TabsTrigger value="file" className="gap-1.5 text-xs">
                  <Upload className="w-3 h-3" /> Tải file
                </TabsTrigger>
              </TabsList>
              <TabsContent value="link" className="mt-2">
                <Input value={trackUrl} onChange={e => setTrackUrl(e.target.value)} placeholder="https://soundcloud.com/..." />
                <p className="text-[10px] text-muted-foreground mt-1">Hỗ trợ link SoundCloud hoặc link trực tiếp file nhạc</p>
              </TabsContent>
              <TabsContent value="file" className="mt-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="audio/*"
                  className="block w-full text-xs file:mr-2 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-xs file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
                  onChange={e => { const f = e.target.files?.[0]; if (f) handleUploadFile(f); }}
                  disabled={uploadingFile}
                />
                {uploadingFile && <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><Loader2 className="w-3 h-3 animate-spin" /> Đang tải...</p>}
                {uploadedFilePath && <p className="text-[10px] text-muted-foreground mt-1 truncate max-w-full overflow-hidden" title={uploadedFilePath}>✅ {uploadedFilePath.split('/').pop()}</p>}
              </TabsContent>
            </Tabs>
            <div className="flex items-center gap-2">
              <Switch checked={trackIsDefault} onCheckedChange={setTrackIsDefault} />
              <Label className="text-xs">Đặt làm nhạc mặc định</Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setTrackDialogOpen(false)}>Hủy</Button>
            <Button onClick={handleSaveTrack} disabled={savingTrack || !trackTitle.trim()}>
              {savingTrack ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span className="ml-1.5">{editingTrack ? 'Cập nhật' : 'Thêm'}</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Folder dialog */}
      <Dialog open={folderDialogOpen} onOpenChange={setFolderDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>{editingFolder ? 'Sửa folder' : 'Tạo folder nhạc'}</DialogTitle>
          </DialogHeader>
          <div>
            <Label className="text-xs">Tên folder</Label>
            <Input value={folderName} onChange={e => setFolderName(e.target.value)} placeholder="Ví dụ: Nhạc Lofi, Nhạc Classic..." className="mt-1" />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setFolderDialogOpen(false)}>Hủy</Button>
            <Button onClick={handleSaveFolder} disabled={savingFolder || !folderName.trim()}>
              {savingFolder ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span className="ml-1.5">{editingFolder ? 'Cập nhật' : 'Tạo'}</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete confirm */}
      <AlertDialog open={!!deleteTarget} onOpenChange={open => !open && setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xác nhận xóa</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn có chắc muốn xóa {deleteTarget?.type === 'folder' ? 'folder' : 'bài nhạc'} "{deleteTarget?.name}"?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Hủy</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">Xóa</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

function TrackRow({ track, onEdit, onDelete }: { track: MusicTrack; onEdit: (t: MusicTrack) => void; onDelete: (t: MusicTrack) => void }) {
  const isSoundCloud = track.source_url?.includes('soundcloud.com');
  return (
    <div className="flex items-center gap-2 pl-5 pr-1 py-1.5 rounded-md hover:bg-muted/50 group transition-colors">
      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0">
        {isSoundCloud ? <SoundCloudIcon size={12} color="#ff5500" /> : <Music className="w-3 h-3 text-muted-foreground" />}
      </div>
      <div className="flex-1 min-w-0 overflow-hidden">
        <p className="text-xs font-medium truncate flex items-center gap-1.5">
          <span className="truncate">{track.title}</span>
          {track.is_default && <Star className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0" />}
        </p>
        {track.artist && <p className="text-[10px] text-muted-foreground truncate">{track.artist}</p>}
      </div>
      <Badge variant="outline" className="text-[9px] px-1 shrink-0">
        {track.source_type === 'file' ? 'FILE' : 'LINK'}
      </Badge>
      <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button size="sm" variant="ghost" className="h-6 w-6 p-0" onClick={() => onEdit(track)}>
          <Pencil className="w-3 h-3" />
        </Button>
        <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-destructive" onClick={() => onDelete(track)}>
          <Trash2 className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
}
