import { Users, UserCheck, Lock, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface MemberNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  counts: {
    all: number;
    active: number;
    pending: number;
    suspended: number;
  };
}

interface NavTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  countKey: keyof MemberNavigationProps['counts'];
  showBadge?: boolean;
}

const tabs: NavTab[] = [
  { id: 'all', label: 'Tất cả', icon: Users, countKey: 'all' },
  { id: 'active', label: 'Hoạt động', icon: Activity, countKey: 'active' },
  { id: 'pending', label: 'Chờ duyệt', icon: UserCheck, countKey: 'pending', showBadge: true },
  { id: 'suspended', label: 'Bị khóa', icon: Lock, countKey: 'suspended' },
];

export default function MemberNavigation({ activeTab, onTabChange, counts }: MemberNavigationProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
            "whitespace-nowrap border",
            activeTab === tab.id
              ? "border-primary text-primary bg-primary/5"
              : "border-transparent bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          <tab.icon className="w-4 h-4 shrink-0" />
          <span>{tab.label}</span>
          <span className={cn(
            "px-1.5 py-0 text-[11px] font-semibold rounded-full min-w-[20px] text-center",
            activeTab === tab.id
              ? "bg-primary/15 text-primary"
              : tab.showBadge && counts[tab.countKey] > 0
                ? "bg-destructive text-destructive-foreground"
                : "bg-muted-foreground/15 text-muted-foreground"
          )}>
            {counts[tab.countKey]}
          </span>
        </button>
      ))}
    </div>
  );
}
