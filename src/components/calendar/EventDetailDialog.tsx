import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarEvent } from '@/types/calendar';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { Clock, FileText, Pencil, Tag } from 'lucide-react';

interface EventDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  event: CalendarEvent | null;
  onEdit: (event: CalendarEvent) => void;
}

export default function EventDetailDialog({ open, onOpenChange, event, onEdit }: EventDetailDialogProps) {
  if (!event) return null;

  const handleEdit = () => {
    onOpenChange(false);
    setTimeout(() => onEdit(event), 150);
  };

  const eventColor = event.color || '#3b82f6';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 gap-0 overflow-hidden sm:max-w-[440px] max-w-[95vw] rounded-2xl border-0 shadow-xl">
        {/* Color accent bar */}
        <div className="h-2 w-full shrink-0" style={{ backgroundColor: eventColor }} />

        <div className="px-5 pt-5 pb-1">
          <DialogHeader className="space-y-1.5 text-left">
            <DialogTitle className="text-base font-bold leading-snug text-foreground pr-6 break-words overflow-hidden" style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>
              {event.title}
            </DialogTitle>
            <DialogDescription className="sr-only">Chi tiết sự kiện</DialogDescription>
          </DialogHeader>
        </div>

        {/* Content */}
        <div className="px-5 pb-5 space-y-3 overflow-y-auto max-h-[60vh]">
          {/* Time row */}
          <div className="flex items-center gap-3 rounded-xl bg-muted/50 px-3.5 py-3">
            <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center shrink-0 shadow-sm">
              <Clock className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {format(event.date, "EEEE, dd/MM/yyyy", { locale: vi })}
              </p>
              <p className="text-xs text-muted-foreground">
                {format(event.date, "HH:mm")}
                {event.endDate && ` — ${format(event.endDate, "HH:mm")}`}
              </p>
            </div>
          </div>

          {/* Description row */}
          {event.description && (
            <div className="flex items-start gap-3 rounded-xl bg-muted/50 px-3.5 py-3">
              <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <FileText className="w-4 h-4 text-muted-foreground" />
              </div>
              <div
                className="text-sm text-foreground/90 leading-relaxed min-w-0 max-h-[160px] overflow-y-auto overflow-x-hidden"
                style={{ wordBreak: 'break-all', overflowWrap: 'anywhere', whiteSpace: 'pre-wrap' }}
              >
                {event.description.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
                  /^https?:\/\//.test(part) ? (
                    <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 break-all">
                      {part.length > 60 ? part.slice(0, 57) + '...' : part}
                    </a>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </div>
            </div>
          )}

          {/* Type badge row */}
          <div className="flex items-center gap-3 rounded-xl bg-muted/50 px-3.5 py-3">
            <div className="w-8 h-8 rounded-lg bg-background flex items-center justify-center shrink-0 shadow-sm">
              <Tag className="w-4 h-4 text-muted-foreground" />
            </div>
            <Badge variant="secondary" className="text-xs font-medium">Sự kiện cá nhân</Badge>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 px-5 py-3.5 border-t border-border bg-muted/30">
          <Button variant="ghost" size="sm" className="text-xs h-9 px-4" onClick={() => onOpenChange(false)}>
            Đóng
          </Button>
          <Button size="sm" className="text-xs h-9 px-4 gap-1.5" onClick={handleEdit}>
            <Pencil className="w-3.5 h-3.5" />
            Chỉnh sửa
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
