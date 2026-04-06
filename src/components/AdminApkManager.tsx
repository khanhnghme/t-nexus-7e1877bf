import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { supabase } from '@/integrations/supabase/client';
import { r2Storage } from '@/lib/r2Storage';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Upload, Trash2, Smartphone, Plus, Loader2, FileDown, Edit, CheckCircle2, XCircle } from 'lucide-react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

interface AppRelease {
  id: string;
  platform: string;
  version: string;
  file_path: string | null;
  file_name: string | null;
  file_size: number;
  storage_name: string | null;
  download_url: string | null;
  release_notes: string | null;
  is_active: boolean;
  created_by: string;
  created_at: string;
}

function formatFileSize(bytes: number): string {
  if (!bytes) return '0 B';
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

export default function AdminApkManager() {
  const { user } = useAuth();
  const [releases, setReleases] = useState<AppRelease[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingRelease, setEditingRelease] = useState<AppRelease | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  // Form state
  const [version, setVersion] = useState('');
  const [releaseNotes, setReleaseNotes] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [apkFile, setApkFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchReleases();
  }, []);

  const fetchReleases = async () => {
    try {
      const { data, error } = await supabase
        .from('app_releases')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      setReleases((data || []) as AppRelease[]);
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const openCreate = () => {
    setEditingRelease(null);
    setVersion('');
    setReleaseNotes('');
    setDownloadUrl('');
    setApkFile(null);
    setDialogOpen(true);
  };

  const openEdit = (release: AppRelease) => {
    setEditingRelease(release);
    setVersion(release.version);
    setReleaseNotes(release.release_notes || '');
    setDownloadUrl(release.download_url || '');
    setApkFile(null);
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!version.trim()) {
      toast.error('Vui lòng nhập số phiên bản');
      return;
    }
    if (!downloadUrl.trim() && !apkFile && !editingRelease?.download_url) {
      toast.error('Vui lòng nhập URL tải xuống hoặc upload file APK');
      return;
    }

    setSaving(true);
    try {
      let filePath = editingRelease?.file_path || null;
      let fileName = editingRelease?.file_name || null;
      let fileSize = editingRelease?.file_size || 0;
      let storageName = editingRelease?.storage_name || null;
      let finalUrl = downloadUrl.trim() || editingRelease?.download_url || '';

      // Upload APK file if provided
      if (apkFile) {
        const timestamp = Date.now();
        const safeName = apkFile.name.replace(/[^a-zA-Z0-9._-]/g, '_');
        const path = `apk/${timestamp}_${safeName}`;

        // Delete old file if exists
        if (editingRelease?.file_path && editingRelease?.storage_name) {
          await r2Storage.from('system-assets').remove([editingRelease.file_path]);
        }

        const { data: uploadData, error: uploadError } = await r2Storage
          .from('system-assets')
          .upload(path, apkFile, { contentType: 'application/vnd.android.package-archive' });

        if (uploadError) throw new Error(uploadError.message);

        filePath = path;
        fileName = apkFile.name;
        fileSize = apkFile.size;
        storageName = 'system-assets';

        // Get public URL
        const result = r2Storage.from('system-assets').getPublicUrl(path);
        finalUrl = result.data.publicUrl;
      }

      const payload = {
        platform: 'android',
        version: version.trim(),
        file_path: filePath,
        file_name: fileName,
        file_size: fileSize,
        storage_name: storageName,
        download_url: finalUrl,
        release_notes: releaseNotes.trim() || null,
        is_active: true,
        created_by: user?.id || '',
        updated_at: new Date().toISOString(),
      };

      if (editingRelease) {
        const { error } = await supabase
          .from('app_releases')
          .update(payload)
          .eq('id', editingRelease.id);
        if (error) throw error;
        toast.success('Đã cập nhật bản phát hành');
      } else {
        const { error } = await supabase
          .from('app_releases')
          .insert(payload);
        if (error) throw error;
        toast.success('Đã tạo bản phát hành mới');
      }

      setDialogOpen(false);
      fetchReleases();
    } catch (err: any) {
      toast.error('Lỗi: ' + (err.message || 'Không thể lưu'));
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const release = releases.find(r => r.id === id);
      if (release?.file_path && release?.storage_name) {
        await r2Storage.from(release.storage_name).remove([release.file_path]);
      }
      const { error } = await supabase.from('app_releases').delete().eq('id', id);
      if (error) throw error;
      toast.success('Đã xóa bản phát hành');
      fetchReleases();
    } catch (err: any) {
      toast.error('Lỗi: ' + (err.message || 'Không thể xóa'));
    } finally {
      setDeleteConfirm(null);
    }
  };

  const toggleActive = async (release: AppRelease) => {
    try {
      const { error } = await supabase
        .from('app_releases')
        .update({ is_active: !release.is_active, updated_at: new Date().toISOString() })
        .eq('id', release.id);
      if (error) throw error;
      toast.success(release.is_active ? 'Đã ẩn bản phát hành' : 'Đã hiện bản phát hành');
      fetchReleases();
    } catch (err: any) {
      toast.error('Lỗi: ' + (err.message || ''));
    }
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-muted-foreground">Đang tải...</CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Quản lý APK</CardTitle>
                <CardDescription>Upload và quản lý file APK cho trang tải xuống</CardDescription>
              </div>
            </div>
            <Button onClick={openCreate} size="sm" className="gap-2">
              <Plus className="w-4 h-4" /> Thêm phiên bản
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {releases.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Smartphone className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p>Chưa có bản phát hành nào</p>
              <Button onClick={openCreate} variant="outline" size="sm" className="mt-3 gap-2">
                <Plus className="w-4 h-4" /> Tạo bản phát hành đầu tiên
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {releases.map((release) => (
                <div
                  key={release.id}
                  className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:bg-muted/30 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-muted">
                    <FileDown className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm">v{release.version}</span>
                      <Badge variant={release.is_active ? 'default' : 'secondary'} className="text-[10px]">
                        {release.is_active ? 'Đang hoạt động' : 'Đã ẩn'}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      {release.file_name && <span>{release.file_name}</span>}
                      {release.file_size > 0 && <span>{formatFileSize(release.file_size)}</span>}
                      <span>{format(new Date(release.created_at), 'dd/MM/yyyy HH:mm', { locale: vi })}</span>
                    </div>
                    {release.release_notes && (
                      <p className="text-xs text-muted-foreground/70 mt-1 line-clamp-1">{release.release_notes}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleActive(release)} title={release.is_active ? 'Ẩn' : 'Hiện'}>
                      {release.is_active ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-muted-foreground" />}
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(release)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => setDeleteConfirm(release.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Create/Edit Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editingRelease ? 'Chỉnh sửa phiên bản' : 'Thêm phiên bản mới'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Số phiên bản *</Label>
              <Input value={version} onChange={(e) => setVersion(e.target.value)} placeholder="1.0.0" />
            </div>
            <div>
              <Label>URL tải xuống</Label>
              <Input value={downloadUrl} onChange={(e) => setDownloadUrl(e.target.value)} placeholder="https://..." />
              <p className="text-xs text-muted-foreground mt-1">Hoặc upload file APK bên dưới</p>
            </div>
            <div>
              <Label>Upload file APK</Label>
              <div className="mt-1">
                <label className="flex items-center gap-2 px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary/50 hover:bg-muted/30 transition-colors">
                  <Upload className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {apkFile ? apkFile.name : 'Chọn file APK...'}
                  </span>
                  <input
                    type="file"
                    accept=".apk"
                    className="hidden"
                    onChange={(e) => setApkFile(e.target.files?.[0] || null)}
                  />
                </label>
                {apkFile && (
                  <p className="text-xs text-muted-foreground mt-1">{formatFileSize(apkFile.size)}</p>
                )}
              </div>
            </div>
            <div>
              <Label>Ghi chú phát hành</Label>
              <Textarea value={releaseNotes} onChange={(e) => setReleaseNotes(e.target.value)} placeholder="Các thay đổi trong phiên bản này..." rows={3} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Hủy</Button>
            <Button onClick={handleSave} disabled={saving} className="gap-2">
              {saving && <Loader2 className="w-4 h-4 animate-spin" />}
              {editingRelease ? 'Cập nhật' : 'Tạo mới'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete confirm */}
      <AlertDialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xóa bản phát hành?</AlertDialogTitle>
            <AlertDialogDescription>
              File APK và thông tin phiên bản sẽ bị xóa vĩnh viễn.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Hủy</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteConfirm && handleDelete(deleteConfirm)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Xóa
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
