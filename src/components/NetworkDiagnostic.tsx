import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type NetStatus = 'good' | 'medium' | 'poor' | 'offline';

function getStatus(ping: number | null, online: boolean): NetStatus {
  if (!online || ping === null) return 'offline';
  if (ping < 100) return 'good';
  if (ping < 300) return 'medium';
  return 'poor';
}

const STATUS_CONFIG: Record<NetStatus, { label: string; advice: string; color: string; activeBars: number }> = {
  good:    { label: 'Mạng tốt',       advice: 'Mạng ổn định, tiếp tục làm việc.',        color: '#22c55e', activeBars: 3 },
  medium:  { label: 'Mạng trung bình', advice: 'Hạn chế tải file lớn.',                   color: '#eab308', activeBars: 2 },
  poor:    { label: 'Mạng yếu',       advice: 'Kiểm tra kết nối WiFi của bạn.',           color: '#ef4444', activeBars: 1 },
  offline: { label: 'Mất kết nối',    advice: 'Không có kết nối mạng.',                   color: '#9ca3af', activeBars: 0 },
};

function WifiIcon({ activeBars, color }: { activeBars: number; color: string }) {
  const dim = 'currentColor'; // We'll inherit color and set opacity
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground/30">
      {/* Arc 3 — outermost */}
      <path
        d="M2.05 8.82C5.14 5.73 8.29 4 12 4s6.86 1.73 9.95 4.82"
        stroke={activeBars >= 3 ? color : dim}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arc 2 — middle */}
      <path
        d="M5.64 12.46C7.57 10.53 9.61 9.5 12 9.5s4.43 1.03 6.36 2.96"
        stroke={activeBars >= 2 ? color : dim}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arc 1 — innermost */}
      <path
        d="M8.83 15.9C9.79 14.94 10.82 14.5 12 14.5s2.21.44 3.17 1.4"
        stroke={activeBars >= 1 ? color : dim}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Dot */}
      <circle cx="12" cy="20" r="1.5" fill={activeBars >= 1 ? color : dim} />
    </svg>
  );
}

export default function NetworkDiagnostic() {
  const [ping, setPing] = useState<number | null>(null);
  const [online, setOnline] = useState(navigator.onLine);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const measurePing = useCallback(async () => {
    if (!navigator.onLine) {
      setOnline(false);
      setPing(null);
      return;
    }
    setOnline(true);
    try {
      const start = performance.now();
      await fetch('/favicon.ico', { cache: 'no-store', mode: 'no-cors' });
      setPing(Math.round(performance.now() - start));
    } catch {
      setPing(null);
    }
  }, []);

  useEffect(() => {
    measurePing();
    intervalRef.current = setInterval(measurePing, 15000);

    const goOnline = () => { setOnline(true); measurePing(); };
    const goOffline = () => { setOnline(false); setPing(null); };
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, [measurePing]);

  const status = getStatus(ping, online);
  const cfg = STATUS_CONFIG[status];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-1.5 px-1.5 py-1 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer">
          <WifiIcon activeBars={cfg.activeBars} color={cfg.color} />
          <span className="text-[11px] text-[var(--_sb-muted)] font-semibold tabular-nums">
            {ping !== null ? `${ping}ms` : '—'}
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-3" side="bottom" align="start" sideOffset={8}>
        <div className="flex items-center gap-2 mb-2">
          <WifiIcon activeBars={cfg.activeBars} color={cfg.color} />
          <span className="font-semibold text-sm" style={{ color: cfg.color }}>{cfg.label}</span>
        </div>
        <div className="text-xs text-muted-foreground space-y-1">
          <p>Ping: <span className="font-medium text-foreground">{ping !== null ? `${ping}ms` : 'N/A'}</span></p>
          <p className="flex items-start gap-1">
            <span>💡</span>
            <span>{cfg.advice}</span>
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
