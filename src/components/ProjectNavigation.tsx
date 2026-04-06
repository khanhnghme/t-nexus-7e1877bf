import { LayoutDashboard, Layers, Users, Activity, Settings, Award, FolderOpen, Video } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface ProjectNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isLeaderInGroup: boolean;
  isGroupCreator: boolean;
  membersCount: number;
  hasActiveMeeting?: boolean;
  isScoreFinalized?: boolean;
}

interface NavTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  showAlways?: boolean;
}

const tabs: NavTab[] = [
  { id: 'overview', label: 'Tổng quan', icon: LayoutDashboard, showAlways: true },
  { id: 'tasks', label: 'Task', icon: Layers, showAlways: true },
  { id: 'meetings', label: 'Họp nhóm', icon: Video, showAlways: true },
  { id: 'resources', label: 'Tài nguyên', icon: FolderOpen, showAlways: true },
  { id: 'members', label: 'Thành viên', icon: Users, showAlways: true },
  { id: 'scores', label: 'Điểm', icon: Award, showAlways: true },
  { id: 'logs', label: 'Nhật ký', icon: Activity, showAlways: false },
  { id: 'settings', label: 'Cài đặt', icon: Settings, showAlways: false },
];

export default function ProjectNavigation({
  activeTab,
  onTabChange,
  isLeaderInGroup,
  isGroupCreator,
  membersCount,
  hasActiveMeeting,
  isScoreFinalized,
}: ProjectNavigationProps) {
  const showSettings = isLeaderInGroup && isGroupCreator;
  const showLogs = isLeaderInGroup && isGroupCreator;
  const visibleTabs = tabs.filter(tab =>
    tab.showAlways || (tab.id === 'settings' && showSettings) || (tab.id === 'logs' && showLogs)
  );

  return (
    <div className="flex justify-center w-full mb-6">
      <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-background/60 backdrop-blur-md border border-border/40 rounded-2xl shadow-sm">
        {visibleTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          const isSettingsTab = tab.id === 'settings';

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                "whitespace-nowrap",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-transparent text-muted-foreground hover:bg-muted/80 hover:text-foreground",
                isSettingsTab && !isActive && "text-muted-foreground/70"
              )}
            >
              <div className="relative">
                <Icon className="w-4 h-4 shrink-0" />
                {/* Active meeting indicator */}
                {tab.id === 'meetings' && hasActiveMeeting && (
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-destructive" />
                  </span>
                )}
                {/* Score finalized indicator */}
                {tab.id === 'scores' && isScoreFinalized && !isActive && (
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
                  </span>
                )}
              </div>

              <span>{tab.label}</span>

              {/* Member count badge */}
              {tab.id === 'members' && (
                <span className={cn(
                  "px-1.5 py-0 text-[11px] font-semibold rounded-full min-w-[20px] text-center",
                  isActive
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-muted-foreground/15 text-muted-foreground"
                )}>
                  {membersCount}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}