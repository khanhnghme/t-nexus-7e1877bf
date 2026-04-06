import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { CalendarViewMode } from '@/types/calendar';
import { format, isSameMonth } from 'date-fns';
import { vi } from 'date-fns/locale';

interface CalendarHeaderProps {
  currentDate: Date;
  viewMode: CalendarViewMode;
  onViewModeChange: (mode: CalendarViewMode) => void;
  onPrevious: () => void;
  onNext: () => void;
  onToday: () => void;
  onAddEvent: () => void;
}

export default function CalendarHeader({
  currentDate,
  viewMode,
  onViewModeChange,
  onPrevious,
  onNext,
  onToday,
  onAddEvent,
}: CalendarHeaderProps) {
  const isCurrentMonth = isSameMonth(currentDate, new Date());

  const getTitle = () => {
    if (viewMode === 'month') {
      return format(currentDate, "MMMM, yyyy", { locale: vi });
    }
    if (viewMode === 'week') {
      return `Tuần ${format(currentDate, "w", { locale: vi })} - ${format(currentDate, "MMMM yyyy", { locale: vi })}`;
    }
    return format(currentDate, "EEEE, dd MMMM yyyy", { locale: vi });
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-2">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          <Button variant="outline" size="icon" onClick={onPrevious} className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={onNext} className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <h2 className="text-xl font-bold capitalize text-foreground tracking-tight">{getTitle()}</h2>
        <Button
          variant={isCurrentMonth ? "outline" : "default"}
          size="sm"
          onClick={onToday}
          className={`ml-1 h-7 text-xs ${!isCurrentMonth ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}`}
        >
          Hôm nay
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Button size="sm" onClick={onAddEvent} className="h-7 gap-1.5 text-xs bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm">
          <Plus className="h-3.5 w-3.5" />
          Tạo sự kiện
        </Button>
        <div className="flex rounded-md border border-input overflow-hidden">
          {(['month', 'week', 'day'] as CalendarViewMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => onViewModeChange(mode)}
              className={`px-3 py-1 text-xs font-medium transition-colors ${
                viewMode === mode
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-muted-foreground hover:bg-accent/20'
              }`}
            >
              {mode === 'month' ? 'Tháng' : mode === 'week' ? 'Tuần' : 'Ngày'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
