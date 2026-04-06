import { Flame, RotateCcw } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

interface StreakBadgeProps {
  currentStreak: number;
  longestStreak: number;
  isActiveToday: boolean;
  isWarning: boolean;
  variant?: 'compact' | 'full';
  showCelebration?: boolean;
  recoveryCount?: number;
  canRecover?: boolean;
  onRecover?: () => void;
}

// Get streak tier based on milestones
function getStreakTier(streak: number) {
  if (streak >= 100) return { level: 5, label: 'Huyền thoại', particles: 16 };
  if (streak >= 50) return { level: 4, label: 'Bậc thầy', particles: 14 };
  if (streak >= 25) return { level: 3, label: 'Chiến binh', particles: 12 };
  if (streak >= 10) return { level: 2, label: 'Kiên trì', particles: 10 };
  return { level: 1, label: 'Khởi đầu', particles: 8 };
}

// Get gradient colors based on tier level — Notion-minimal: no glows, no shadows
function getTierColors(level: number) {
  switch (level) {
    case 5: return { from: '#a19e99', to: '#7d7a75', glow: 'transparent', bg: 'from-accent/80 to-accent/60', border: 'border-border', shadow: '' };
    case 4: return { from: '#a19e99', to: '#7d7a75', glow: 'transparent', bg: 'from-accent/80 to-accent/60', border: 'border-border', shadow: '' };
    case 3: return { from: '#a19e99', to: '#7d7a75', glow: 'transparent', bg: 'from-accent/80 to-accent/60', border: 'border-border', shadow: '' };
    case 2: return { from: '#a19e99', to: '#7d7a75', glow: 'transparent', bg: 'from-accent/70 to-accent/50', border: 'border-border', shadow: '' };
    default: return { from: '#a19e99', to: '#7d7a75', glow: 'transparent', bg: 'from-accent/60 to-accent/40', border: 'border-border', shadow: '' };
  }
}

function FireParticles({ active, count }: { active: boolean; count: number }) {
  if (!active) return null;
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <span
          key={i}
          className="fire-particle absolute rounded-full"
          style={{
            width: `${3 + Math.random() * 4}px`,
            height: `${3 + Math.random() * 4}px`,
            left: `${20 + Math.random() * 60}%`,
            bottom: '30%',
            animationDelay: `${i * 0.18}s`,
            animationDuration: `${0.7 + Math.random() * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
}

function CelebrationBurst() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible z-20">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="streak-ring absolute w-full h-full rounded-xl border-2 border-orange-400/80" />
      </div>
      {[...Array(14)].map((_, i) => {
        const angle = (i / 14) * 360;
        const rad = (angle * Math.PI) / 180;
        const dist = 30 + Math.random() * 25;
        return (
          <span
            key={i}
            className="streak-burst-particle absolute rounded-full"
            style={{
              width: `${3 + Math.random() * 4}px`,
              height: `${3 + Math.random() * 4}px`,
              left: '50%',
              top: '50%',
              '--burst-x': `${Math.cos(rad) * dist}px`,
              '--burst-y': `${Math.sin(rad) * dist}px`,
              animationDelay: `${Math.random() * 0.3}s`,
              background: ['#f97316', '#fbbf24', '#ef4444', '#f59e0b'][i % 4],
            } as React.CSSProperties}
          />
        );
      })}
      <div className="streak-up-text absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold text-orange-400 drop-shadow-[0_0_6px_rgba(249,115,22,0.8)]">
        🔥 Streak +1!
      </div>
    </div>
  );
}

export default function StreakBadge({
  currentStreak, longestStreak, isActiveToday, isWarning,
  variant = 'compact', showCelebration = false,
  recoveryCount = 0, canRecover = false, onRecover,
}: StreakBadgeProps) {
  const [celebrating, setCelebrating] = useState(false);
  const [recovering, setRecovering] = useState(false);

  const tier = useMemo(() => getStreakTier(currentStreak), [currentStreak]);
  const colors = useMemo(() => getTierColors(tier.level), [tier.level]);

  useEffect(() => {
    if (!showCelebration || currentStreak <= 0) return;
    const showTimer = setTimeout(() => setCelebrating(true), 5000);
    const hideTimer = setTimeout(() => setCelebrating(false), 8000);
    return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
  }, [showCelebration, currentStreak]);

  const handleRecover = async () => {
    if (!onRecover || recovering) return;
    setRecovering(true);
    await onRecover();
    setRecovering(false);
  };

  if (currentStreak <= 0 && variant === 'compact' && !canRecover) return null;

  const isActive = isActiveToday && !isWarning;
  const gradientId = `fireGradient-${tier.level}`;

  if (variant === 'full') {
    return (
      <div className={`relative flex flex-col items-center justify-center rounded-[3px] px-3 py-2 border transition-all min-w-[90px] ${
        isActive || celebrating
          ? `bg-accent ${colors.border}`
          : canRecover
          ? 'bg-accent/60 border-border'
          : isWarning
          ? 'bg-muted/60 border-border'
          : 'bg-muted/40 border-border'
      }`}>
        {celebrating && <CelebrationBurst />}

        {/* Fire icon + number row */}
        <div className="flex items-center gap-1.5">
          <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
            <FireParticles active={isActive || celebrating} count={Math.min(tier.particles, 5)} />
            <Flame
              className={`w-5 h-5 relative z-10 transition-all ${
                celebrating
                  ? `drop-shadow-[0_0_8px_${colors.glow}] animate-bounce`
                  : isActive
                  ? `drop-shadow-[0_0_6px_${colors.glow}]`
                  : canRecover ? 'text-red-400/60' : 'text-muted-foreground/40'
              }`}
              style={isActive || celebrating ? { color: colors.from } : undefined}
              fill={isActive || celebrating ? `url(#${gradientId})` : 'none'}
            />
            {(isActive || celebrating) && (
              <svg width="0" height="0" className="absolute">
                <defs>
                  <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor={colors.from} />
                    <stop offset="50%" stopColor={colors.to} />
                    <stop offset="100%" stopColor={colors.from} stopOpacity="0.7" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </div>
          <span className="text-xl font-bold tabular-nums leading-none text-foreground">
            {currentStreak}
          </span>
          <span className="text-[10px] text-muted-foreground">ngày</span>
        </div>

        {/* Label row */}
        <div className="flex items-center gap-1 mt-0.5">
          {tier.level >= 2 && (
            <span className="text-[8px] font-medium px-1.5 py-px rounded-[3px] bg-secondary text-muted-foreground">
              {tier.label}
            </span>
          )}
          {longestStreak > 0 && !canRecover && (
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-[9px] text-muted-foreground/60 cursor-default">KL: {longestStreak}</span>
                </TooltipTrigger>
                <TooltipContent><p>Kỷ lục chuỗi đăng nhập dài nhất</p></TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>

        {/* Recovery */}
        {canRecover && onRecover && (
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-5 px-1.5 text-[9px] font-medium border-border text-muted-foreground hover:bg-accent mt-1 shrink-0"
                  onClick={handleRecover}
                  disabled={recovering}
                >
                  <RotateCcw className={`w-2.5 h-2.5 mr-0.5 ${recovering ? 'animate-spin' : ''}`} />
                  Khôi phục ({3 - recoveryCount})
                </Button>
              </TooltipTrigger>
              <TooltipContent><p>Còn {3 - recoveryCount} lần khôi phục</p></TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    );
  }

  // Compact variant
  const compactColor = 'text-muted-foreground';

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-1 cursor-default select-none">
            <div className="relative">
              <Flame
                className={`w-5 h-5 transition-all ${
                  isActive ? compactColor : canRecover ? 'text-red-400/60' : 'text-muted-foreground/50'
                }`}
                fill={isActive ? 'currentColor' : 'none'}
              />
              {isActive && (
                <div className="absolute inset-0 animate-pulse">
                  <Flame className="w-5 h-5 opacity-40" style={{ color: colors.from }} fill="currentColor" />
                </div>
              )}
            </div>
            <span className={`text-sm font-bold tabular-nums ${
              isActive
                ? 'text-muted-foreground'
                : canRecover ? 'text-muted-foreground/60' : 'text-muted-foreground/60'
            }`}>
              {currentStreak}
            </span>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-center">
          <p className="font-semibold">🔥 Chuỗi đăng nhập: {currentStreak} ngày</p>
          <p className="text-xs text-muted-foreground">Kỷ lục: {longestStreak} ngày · {tier.label}</p>
          {canRecover && (
            <p className="text-xs text-red-400 mt-1">💔 Chuỗi bị gián đoạn! Bấm khôi phục ở Dashboard</p>
          )}
          {isWarning && !canRecover && (
            <p className="text-xs text-amber-500 mt-1">⚠️ Sắp mất chuỗi! Hãy đăng nhập mỗi ngày</p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
