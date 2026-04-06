import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Loader2, FileText, Image, File, Download, ExternalLink, CheckCircle, XCircle, Plus, X, ChevronLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { r2Storage } from '@/lib/r2Storage';
import type { ScoreAppeal, AppealAttachment } from '@/types/processScores';

interface AppealReviewDialogProps {
  isOpen: boolean;
  onClose: () => void;
  appeal: ScoreAppeal | null;
  onApprove: (response: string, pointsToAdd: number) => Promise<void>;
  onReject: (response: string) => Promise<void>;
  isLoading?: boolean;
}

export default function AppealReviewDialog({
  isOpen,
  onClose,
  appeal,
  onApprove,
  onReject,
  isLoading = false,
}: AppealReviewDialogProps) {
  const [response, setResponse] = useState('');
  const [pointsToAdd, setPointsToAdd] = useState<number>(0);
  const [previewState, setPreviewState] = useState<{ url: string; name: string; type: string } | null>(null);

  if (!appeal) return null;

  const getFileIcon = (type: string | null) => {
    if (type?.startsWith('image/')) return <Image className="w-4 h-4" />;
    if (type?.includes('pdf') || type?.includes('document')) return <FileText className="w-4 h-4" />;
    return <File className="w-4 h-4" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handlePreview = async (attachment: AppealAttachment) => {
    const { data } = r2Storage
      .from('appeal-attachments')
      .getPublicUrl(attachment.file_path);
    
    if (data?.publicUrl) {
      const fileType = attachment.file_name.toLowerCase();
      const isImage = fileType.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg)$/);
      const isPdf = fileType.match(/\.pdf$/);
      
      if (isImage || isPdf) {
        setPreviewState({ 
          url: data.publicUrl, 
          name: attachment.file_name, 
          type: isImage ? 'image' : 'pdf' 
        });
      } else {
        handleDownload(attachment);
      }
    }
  };

  const handleDownload = async (attachment: AppealAttachment) => {
    const { data } = await r2Storage
      .from('appeal-attachments')
      .download(attachment.file_path);
    
    if (data) {
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = attachment.file_name;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const getStatusBadge = () => {
    switch (appeal.status) {
      case 'pending':
        return <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800">Chờ xử lý</Badge>;
      case 'approved':
        return <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-800">Đã chấp nhận</Badge>;
      case 'rejected':
        return <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/30 dark:text-rose-300 dark:border-rose-800">Đã từ chối</Badge>;
    }
  };

  const getAppealType = () => {
    if (appeal.task_score_id) return 'Task';
    if (appeal.stage_score_id) return 'Giai đoạn';
    return 'Điểm tổng';
  };

  // If previewing a file inline, show preview view
  if (previewState) {
    return (
      <Dialog open={isOpen} onOpenChange={(open) => { if (!open) { setPreviewState(null); onClose(); } }}>
        <DialogContent className="w-[1280px] max-w-[95vw]" style={{ aspectRatio: '16/9', maxHeight: '90vh' }}>
          <div className="flex flex-col h-full overflow-hidden">
            <DialogHeader className="shrink-0">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-7 px-2" onClick={() => setPreviewState(null)}>
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Quay lại
                </Button>
                <DialogTitle className="text-sm truncate flex-1">{previewState.name}</DialogTitle>
                <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0" onClick={() => setPreviewState(null)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </DialogHeader>
            <div className="flex-1 overflow-hidden flex items-center justify-center bg-muted/30 rounded-lg mt-2">
              {previewState.type === 'pdf' ? (
                <iframe src={previewState.url} className="w-full h-full rounded-lg" title="PDF Preview" />
              ) : (
                <img src={previewState.url} alt="Preview" className="max-w-full max-h-full object-contain" />
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[1280px] max-w-[95vw]" style={{ aspectRatio: '16/9', maxHeight: '90vh' }}>
        <div className="flex flex-col h-full overflow-hidden">
          <DialogHeader className="shrink-0">
            <DialogTitle className="flex items-center gap-2">
              <span>📋</span>
              Xem xét phúc khảo
            </DialogTitle>
            <DialogDescription>
              Phúc khảo điểm {getAppealType()} từ {appeal.profiles?.full_name || 'Thành viên'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto space-y-4 py-4">
            {/* Status & Info */}
            <div className="flex items-center gap-4 flex-wrap">
              {getStatusBadge()}
              <Badge variant="outline" className="text-xs">{getAppealType()}</Badge>
              <span className="text-sm text-muted-foreground">
                Gửi lúc: {new Date(appeal.created_at).toLocaleString('vi-VN')}
              </span>
            </div>

            {/* Appeal Content */}
            <div className="p-4 rounded-lg bg-muted/50">
              <Label className="text-sm font-medium mb-2 block">Nội dung phúc khảo:</Label>
              <p className="text-sm whitespace-pre-wrap">{appeal.reason}</p>
            </div>

            {/* Attachments */}
            {appeal.attachments && appeal.attachments.length > 0 && (
              <div className="space-y-2">
                <Label className="text-sm font-medium">Minh chứng đính kèm:</Label>
                <div className="grid gap-2">
                  {appeal.attachments.map((attachment) => (
                    <div 
                      key={attachment.id} 
                      className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      {getFileIcon(attachment.file_type)}
                      <span className="flex-1 truncate text-sm">{attachment.file_name}</span>
                      <span className="text-muted-foreground text-xs">
                        {formatFileSize(attachment.file_size)}
                      </span>
                      <Button type="button" variant="ghost" size="sm" onClick={() => handlePreview(attachment)} title="Xem trước">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button type="button" variant="ghost" size="sm" onClick={() => handleDownload(attachment)} title="Tải xuống">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Previous Response */}
            {appeal.reviewer_response && (
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                <Label className="text-sm font-medium mb-2 block">Phản hồi từ Leader:</Label>
                <p className="text-sm whitespace-pre-wrap">{appeal.reviewer_response}</p>
                {appeal.updated_at && appeal.status !== 'pending' && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Phản hồi lúc: {new Date(appeal.updated_at).toLocaleString('vi-VN')}
                  </p>
                )}
              </div>
            )}

            {/* Response Input (only for pending) */}
            {appeal.status === 'pending' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="flex items-center gap-1">
                    Phản hồi của bạn <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    placeholder="Nhập phản hồi cho phúc khảo này..."
                    rows={3}
                  />
                </div>
                
                <div className="p-4 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-2">
                  <Label className="flex items-center gap-2 text-sm font-medium">
                    <Plus className="w-4 h-4 text-emerald-600" />
                    Số điểm cộng lại (nếu chấp nhận)
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Nhập số điểm muốn cộng lại cho thành viên khi chấp nhận phúc khảo
                  </p>
                  <Input
                    type="number"
                    min={0}
                    max={100}
                    step={1}
                    value={pointsToAdd}
                    onChange={(e) => setPointsToAdd(Math.max(0, Math.min(100, Number(e.target.value))))}
                    placeholder="VD: 5"
                    className="max-w-[200px]"
                  />
                </div>
              </div>
            )}
          </div>

          {appeal.status === 'pending' && (
            <DialogFooter className="flex-col sm:flex-row gap-2 shrink-0 pt-4 border-t">
              <Button variant="outline" onClick={onClose} disabled={isLoading}>Đóng</Button>
              <Button 
                variant="destructive"
                onClick={() => onReject(response)} 
                disabled={isLoading || !response.trim()}
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <XCircle className="w-4 h-4 mr-2" />}
                Từ chối
              </Button>
              <Button 
                onClick={() => onApprove(response, pointsToAdd)} 
                disabled={isLoading || !response.trim()}
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <CheckCircle className="w-4 h-4 mr-2" />}
                Chấp nhận {pointsToAdd > 0 ? `(+${pointsToAdd} điểm)` : ''}
              </Button>
            </DialogFooter>
          )}
          
          {appeal.status !== 'pending' && (
            <DialogFooter className="shrink-0 pt-4 border-t">
              <Button onClick={onClose}>Đóng</Button>
            </DialogFooter>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
