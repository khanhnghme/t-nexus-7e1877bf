import { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Loader2, Upload, X, FileText, Image, File, Clock, AlertTriangle, Trophy, BarChart3, CheckSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AppealDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (content: string, files: File[]) => Promise<void>;
  title: string;
  description: string;
  currentScore: number;
  adjustment: number;
  adjustmentReason: string | null;
  isLoading?: boolean;
  // New detailed context
  appealType?: 'task' | 'stage' | 'final';
  targetName?: string;
  targetSubtitle?: string;
  baseScore?: number;
  scoreBreakdown?: Array<{ label: string; value: string | number; highlight?: boolean }>;
}

export default function AppealDialog({
  isOpen,
  onClose,
  onSubmit,
  title,
  description,
  currentScore,
  adjustment,
  adjustmentReason,
  isLoading = false,
  appealType,
  targetName,
  targetSubtitle,
  baseScore,
  scoreBreakdown,
}: AppealDialogProps) {
  const [content, setContent] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const MAX_FILE_SIZE = 10 * 1024 * 1024;

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    for (const file of selectedFiles) {
      if (file.size > MAX_FILE_SIZE) {
        toast({ title: 'File quá lớn', description: `File "${file.name}" vượt quá 10MB`, variant: 'destructive' });
        return;
      }
    }
    setFiles(prev => [...prev, ...selectedFiles]);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeFile = (index: number) => setFiles(prev => prev.filter((_, i) => i !== index));

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return <Image className="w-4 h-4" />;
    if (type.includes('pdf') || type.includes('document')) return <FileText className="w-4 h-4" />;
    return <File className="w-4 h-4" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handleSubmit = async () => {
    if (!content.trim()) return;
    await onSubmit(content.trim(), files);
    setContent('');
    setFiles([]);
  };

  const typeIcon = appealType === 'final' ? <Trophy className="w-4 h-4 text-primary" /> 
    : appealType === 'stage' ? <BarChart3 className="w-4 h-4 text-sky-500" /> 
    : <CheckSquare className="w-4 h-4 text-amber-500" />;

  const typeLabel = appealType === 'final' ? 'Điểm tổng quá trình' 
    : appealType === 'stage' ? 'Điểm giai đoạn' 
    : 'Điểm task';

  const effectiveBaseScore = baseScore ?? 100;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[1280px] max-w-[95vw]" style={{ aspectRatio: '16/9', maxHeight: '90vh' }}>
        <div className="flex flex-col h-full overflow-hidden">
        <DialogHeader className="shrink-0">
          <DialogTitle className="flex items-center gap-2 text-base">
            📝 {title}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto space-y-4 py-2">
          {/* Target info card */}
          <div className="rounded-lg border bg-muted/30 overflow-hidden">
            <div className="flex items-center gap-3 p-3 border-b bg-muted/50">
              {typeIcon}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">{targetName || typeLabel}</p>
                {targetSubtitle && <p className="text-[10px] text-muted-foreground">{targetSubtitle}</p>}
              </div>
              <Badge variant="outline" className="text-[10px] shrink-0">{typeLabel}</Badge>
            </div>

            {/* Score breakdown */}
            <div className="p-3 space-y-1.5">
              {scoreBreakdown && scoreBreakdown.length > 0 ? (
                scoreBreakdown.map((item, i) => (
                  <div key={i} className={`flex items-center justify-between text-sm ${item.highlight ? 'pt-1.5 border-t font-bold' : ''}`}>
                    <span className="text-muted-foreground text-xs">{item.label}</span>
                    <span className={`tabular-nums ${item.highlight ? 'text-base' : 'font-medium'}`}>{item.value}</span>
                  </div>
                ))
              ) : (
                <>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground text-xs">Điểm gốc:</span>
                    <span className="font-medium tabular-nums">{effectiveBaseScore}</span>
                  </div>
                  {adjustment !== 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground text-xs">Điều chỉnh:</span>
                      <Badge variant={adjustment < 0 ? 'destructive' : 'default'} className="text-xs">
                        {adjustment > 0 ? '+' : ''}{adjustment}
                      </Badge>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm pt-1.5 border-t">
                    <span className="text-muted-foreground text-xs font-semibold">Điểm hiện tại:</span>
                    <span className="font-bold text-base tabular-nums">{currentScore}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Adjustment reason from leader */}
          {adjustmentReason && (
            <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/20">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-destructive mb-0.5">Lý do điều chỉnh từ Leader:</p>
                  <p className="text-sm">{adjustmentReason}</p>
                </div>
              </div>
            </div>
          )}

          {/* 48h notice */}
          <div className="flex items-center gap-2 p-2.5 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
            <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <p className="text-xs text-amber-700 dark:text-amber-300">
              Phúc khảo sẽ được xét duyệt trong khoảng <strong>48 giờ</strong>.
            </p>
          </div>

          {/* Appeal content */}
          <div className="space-y-2">
            <Label className="flex items-center gap-1 text-xs">
              Nội dung phúc khảo <span className="text-destructive">*</span>
            </Label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Trình bày lý do phúc khảo của bạn..."
              rows={3}
            />
          </div>

          {/* File Attachments */}
          <div className="space-y-2">
            <Label className="text-xs">Minh chứng đính kèm (tối đa 10MB/file)</Label>
            <input ref={fileInputRef} type="file" multiple onChange={handleFileSelect} className="hidden" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx" />
            <Button type="button" variant="outline" size="sm" onClick={() => fileInputRef.current?.click()} className="w-full">
              <Upload className="w-4 h-4 mr-2" />
              Chọn file minh chứng
            </Button>
            {files.length > 0 && (
              <div className="space-y-1.5 mt-2">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 text-sm">
                    {getFileIcon(file.type)}
                    <span className="flex-1 truncate text-xs">{file.name}</span>
                    <span className="text-muted-foreground text-[10px]">{formatFileSize(file.size)}</span>
                    <Button type="button" variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => removeFile(index)}>
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <DialogFooter className="shrink-0 pt-4 border-t">
          <Button variant="outline" onClick={onClose} disabled={isLoading}>Hủy</Button>
          <Button onClick={handleSubmit} disabled={isLoading || !content.trim()}>
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
            Gửi phúc khảo
          </Button>
        </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
