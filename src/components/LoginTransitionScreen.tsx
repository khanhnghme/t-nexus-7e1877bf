import { useState, useEffect, useMemo, useRef } from 'react';
import tNexusLogo from '@/assets/t-nexus-logo.png';
import { supabase } from '@/integrations/supabase/client';

function removeVietnameseTones(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

interface LoginTransitionScreenProps {
  userName?: string;
  userAvatarUrl?: string | null;
  onComplete: () => void;
  duration?: number;
}

const motivationalQuotes = [
  'Mỗi ngày là một cơ hội mới để tiến xa hơn!',
  'Thành công bắt đầu từ việc không bỏ cuộc!',
  'Hãy biến ước mơ thành hành động!',
  'Học hỏi không ngừng, phát triển không giới hạn!',
  'Tập trung vào mục tiêu, thành công sẽ đến!',
  'Sự kiên trì là chìa khóa của thành công!',
  'Đừng sợ thất bại, hãy sợ không dám thử!',
  'Bạn mạnh mẽ hơn bạn nghĩ!',
  'Hành trình vạn dặm bắt đầu từ bước chân đầu tiên!',
  'Sáng tạo là sức mạnh, đoàn kết là thành công!',
  'Kiến thức là tài sản quý giá nhất!',
];

const loadingSteps = [
  'Đang kết nối hệ thống...',
  'Đang tải dữ liệu...',
  'Đang chuẩn bị giao diện...',
  'Đang xác thực tài khoản...',
];

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 11) return 'Chào buổi sáng';
  if (hour >= 11 && hour < 13) return 'Chào buổi trưa';
  if (hour >= 13 && hour < 18) return 'Chào buổi chiều';
  return 'Chào buổi tối';
}

export default function LoginTransitionScreen({ userName, userAvatarUrl, onComplete, duration = 5000 }: LoginTransitionScreenProps) {
  const [phase, setPhase] = useState<'enter' | 'visible' | 'exit'>('enter');
  const [percent, setPercent] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const quote = useMemo(() => motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)], []);
  const greeting = useMemo(() => getGreeting(), []);
  const startRef = useRef(Date.now());
  const [videoUrl, setVideoUrl] = useState('');
  const [videoOpacity, setVideoOpacity] = useState(0);

  // Load video settings
  useEffect(() => {
    // Try cache first for instant display
    try {
      const raw = localStorage.getItem('dashboard_video_bg_cache');
      if (raw) {
        const cached = JSON.parse(raw);
        if (cached.enabled && cached.url) {
          setVideoUrl(cached.url);
          setVideoOpacity(cached.transition_opacity ?? cached.loading_opacity ?? cached.landing_opacity ?? 0.15);
        }
      }
    } catch { /* ignore */ }

    supabase
      .from('system_settings')
      .select('value')
      .eq('key', 'dashboard_video_bg')
      .maybeSingle()
      .then(({ data }) => {
        if (data?.value) {
          const val = data.value as { enabled?: boolean; transition_opacity?: number; loading_opacity?: number; landing_opacity?: number; opacity?: number; url?: string };
          if (val.enabled && val.url) {
            setVideoUrl(val.url);
            setVideoOpacity(val.transition_opacity ?? val.loading_opacity ?? val.landing_opacity ?? val.opacity ?? 0.15);
          }
        }
      });
  }, []);

  // Smooth percent counter
  useEffect(() => {
    const barDuration = duration - 200;
    let raf: number;
    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const progress = Math.min(elapsed / barDuration, 1);
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      const p = Math.round(eased * 100);
      setPercent(p);
      // Update loading step based on progress
      if (p < 25) setStepIndex(0);
      else if (p < 55) setStepIndex(1);
      else if (p < 85) setStepIndex(2);
      else setStepIndex(3);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration]);

  // Store onComplete in a ref so timer doesn't reset on parent re-renders
  const onCompleteRef = useRef(onComplete);
  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('visible'), 100);
    const t2 = setTimeout(() => setPhase('exit'), duration - 800);
    const t3 = setTimeout(() => onCompleteRef.current(), duration);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-700 ease-in-out"
      style={{
        opacity: phase === 'exit' ? 0 : 1,
        background: 'linear-gradient(160deg, hsl(228 27% 8%) 0%, hsl(228 22% 12%) 35%, hsl(230 25% 16%) 65%, hsl(228 27% 10%) 100%)',
      }}
    >
      {/* Video background overlay */}
      {videoUrl && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-1000"
            style={{ opacity: videoOpacity * 0.6 }}
            src={videoUrl}
          />
          {/* Linear overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'linear-gradient(160deg, hsl(228 27% 8% / 0.42) 0%, hsl(228 22% 12% / 0.35) 35%, hsl(230 25% 16% / 0.4) 65%, hsl(228 27% 10% / 0.45) 100%)',
          }} />
          {/* Radial vignette — stronger darkening at center to highlight content */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 55% 60% at 50% 48%, hsl(0 0% 0% / 0.55) 0%, hsl(0 0% 0% / 0.25) 50%, transparent 100%)',
          }} />
        </>
      )}
      {/* Decorative floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right glow */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(272 64% 69% / 0.5), transparent 70%)'
          }}
        />
        {/* Bottom-left glow */}
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(228 63% 43% / 0.4), transparent 70%)'
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${4 + i * 2}px`,
              height: `${4 + i * 2}px`,
              background: i % 2 === 0
                ? ('hsl(272 64% 69% / 0.3)')
                : ('hsl(228 63% 55% / 0.25)'),
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `login-float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}

        {/* Tech circuit lines falling from top */}
        {[...Array(12)].map((_, i) => {
          const left = 3 + i * 8.5;
          const height = 100 + Math.random() * 250;
          const delay = i * 0.25;
          const duration = 8 + Math.random() * 6;
          const opacity = 0.06 + Math.random() * 0.1;
          // Alternate: even=white/blue, odd=purple
          const isPurple = i % 2 === 1;
          const pulseColor = isPurple ? 'hsl(272 64% 69%' : 'hsl(228 63% 55%';
          return (
            <div key={`line-${i}`} className="absolute" style={{ left: `${left}%`, top: 0, width: '1px', height: '100%' }}>
              {/* Static faint vertical line */}
              <div
                className="absolute top-0 w-px h-full"
                style={{ background: `linear-gradient(180deg, ${pulseColor} / ${opacity}), transparent 80%)` }}
              />
              {/* Primary falling pulse */}
              <div
                className="absolute"
                style={{
                  width: '1px',
                  height: `${height}px`,
                  background: isPurple
                    ? `linear-gradient(180deg, transparent, hsl(272 64% 75% / 0.5), hsl(272 50% 60% / 0.35), transparent)`
                    : `linear-gradient(180deg, transparent, hsl(0 0% 100% / 0.45), hsl(228 63% 65% / 0.3), transparent)`,
                  animation: `circuit-fall ${duration}s linear infinite`,
                  animationDelay: `${delay}s`,
                }}
              />
              {/* Secondary smaller pulse offset */}
              <div
                className="absolute"
                style={{
                  width: '1px',
                  height: `${height * 0.4}px`,
                  background: isPurple
                    ? `linear-gradient(180deg, transparent, hsl(272 50% 65% / 0.3), transparent)`
                    : `linear-gradient(180deg, transparent, hsl(0 0% 100% / 0.25), transparent)`,
                  animation: `circuit-fall ${duration * 1.4}s linear infinite`,
                  animationDelay: `${delay + 1.5}s`,
                }}
              />
              {/* Sparkle node dots */}
              {[0, 1].map(j => (
                <div
                  key={j}
                  className="absolute rounded-full"
                  style={{
                    width: `${2 + j}px`,
                    height: `${2 + j}px`,
                    left: `-${0.5 + j * 0.5}px`,
                    top: `${20 + j * 30 + (i * 7) % 30}%`,
                    background: isPurple
                      ? `hsl(272 64% 69% / ${0.5 + j * 0.2})`
                      : `hsl(0 0% 100% / ${0.4 + j * 0.2})`,
                    animation: `circuit-sparkle ${2 + j * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2 + j * 0.7}s`,
                    boxShadow: isPurple
                      ? '0 0 5px hsl(272 64% 69% / 0.3)'
                      : '0 0 5px hsl(0 0% 100% / 0.25)',
                  }}
                />
              ))}
              {/* Horizontal branch */}
              {i % 3 === 0 && (
                <div
                  className="absolute"
                  style={{
                    top: `${35 + (i * 11) % 35}%`,
                    left: '0',
                    width: `${25 + Math.random() * 40}px`,
                    height: '1px',
                    background: isPurple
                      ? `linear-gradient(90deg, hsl(272 64% 69% / 0.35), transparent)`
                      : `linear-gradient(90deg, hsl(0 0% 100% / 0.25), transparent)`,
                  }}
                />
              )}
              {/* Glow dot at branch */}
              {i % 3 === 0 && (
                <div
                  className="absolute rounded-full"
                  style={{
                    width: '3px',
                    height: '3px',
                    left: '-1px',
                    top: `${35 + (i * 11) % 35}%`,
                    background: isPurple ? 'hsl(272 64% 69% / 0.6)' : 'hsl(0 0% 100% / 0.5)',
                    animation: `circuit-glow-pulse ${2.5 + i * 0.3}s ease-in-out infinite`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Main content */}
      <div
        className={`relative flex flex-col items-center gap-5 px-8 text-center transition-all duration-700 ease-out ${
          phase === 'enter'
            ? 'opacity-0 translate-y-8 scale-95'
            : phase === 'exit'
              ? 'opacity-0 -translate-y-4 scale-105'
              : 'opacity-100 translate-y-0 scale-100'
        }`}
      >
        {/* Avatar as main focal point, T-Nexus logo as badge */}
        <div className="relative mb-4 animate-[logo-bob_2.5s_ease-in-out_infinite]">
          {/* Glow behind avatar */}
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-30 animate-pulse"
            style={{ background: 'hsl(228 63% 50% / 0.4)', transform: 'scale(1.6)' }}
          />

          {/* Main circle — avatar or fallback */}
          <div
            className="relative w-32 h-32 rounded-full overflow-hidden"
            style={{
              border: '3px solid hsl(0 0% 100% / 0.25)',
              boxShadow: '0 12px 40px hsl(0 0% 0% / 0.4), 0 0 0 6px hsl(0 0% 100% / 0.05)',
            }}
          >
            {userAvatarUrl ? (
              <img src={userAvatarUrl} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, hsl(228 50% 25%), hsl(228 45% 32%))' }}
              >
                <span className="text-4xl font-bold text-white/90">
                  {userName?.charAt(0)?.toUpperCase() || '?'}
                </span>
              </div>
            )}
          </div>

          {/* T-Nexus logo badge — bottom-right corner */}
          <div
            className="absolute -bottom-1 -right-1 w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, hsl(228 27% 12%), hsl(228 25% 18%))',
              border: '2.5px solid hsl(0 0% 100% / 0.3)',
              boxShadow: '0 4px 12px hsl(0 0% 0% / 0.3)',
            }}
          >
            <img src={tNexusLogo} alt="T-Nexus" className="w-7 h-7 object-contain" />
          </div>
        </div>

        {/* Greeting line */}
        <p className="text-xl text-white/90 font-medium tracking-wide">
          {greeting}
        </p>

        {/* User name - hero text */}
        {userName && (
          <h1
            className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight"
            style={{
              background: 'linear-gradient(135deg, hsl(0 0% 100%), hsl(272 64% 75%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {removeVietnameseTones(userName)}
          </h1>
        )}

        {/* Divider */}
        <div className="flex items-center gap-3 w-56">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.3))' }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(228 63% 55%)' }} />
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, hsl(0 0% 100% / 0.3), transparent)' }} />
        </div>

        {/* Quote */}
        <p className="text-base text-white/75 max-w-xs leading-relaxed italic">
          "{quote}"
        </p>

        {/* Progress section — premium design */}
        <div className="flex flex-col items-center gap-4 mt-8 w-80 sm:w-[420px]">
          {/* Current step text — minimal, no numbers */}
          <div
            className="transition-all duration-500 ease-out"
            style={{
              opacity: percent >= 100 ? 0 : 0.6,
              transform: percent >= 100 ? 'translateY(-6px)' : 'translateY(0)',
            }}
          >
            <p className="text-[12px] text-white/60 font-medium tracking-wide text-center">
              {loadingSteps[stepIndex]}
            </p>
          </div>

          {/* Completed text — replaces step text */}
          {percent >= 100 && (
            <p
              className="text-[12px] font-medium tracking-wide text-center transition-all duration-500"
              style={{
                color: 'hsl(228 63% 70% / 0.8)',
                animation: 'completed-bar-pulse 2s ease-in-out infinite',
              }}
            >
              Hoàn tất — Đang chuyển hướng
            </p>
          )}

          {/* Main progress bar */}
          <div className="w-full relative">
            {/* Track */}
            <div
              className="w-full h-[10px] rounded-full overflow-hidden relative transition-all duration-500"
              style={{
                background: percent >= 100 ? 'hsl(0 0% 100% / 0.12)' : 'hsl(0 0% 100% / 0.06)',
                boxShadow: percent >= 100
                  ? ('0 0 20px hsl(228 63% 50% / 0.3)')
                  : 'inset 0 1px 2px hsl(0 0% 0% / 0.25)',
                border: '1px solid hsl(0 0% 100% / 0.06)',
              }}
            >
              {/* Filled bar */}
              <div
                className="h-full rounded-full transition-[width] duration-100 ease-linear relative overflow-hidden"
                style={{
                  width: `${percent}%`,
                  background: percent >= 100
                    ? ('linear-gradient(90deg, hsl(228 63% 43%), hsl(272 50% 55%), hsl(228 63% 43%))')
                    : ('linear-gradient(90deg, hsl(228 63% 33%), hsl(228 60% 45%), hsl(272 50% 55%), hsl(272 64% 69%))'),
                  boxShadow: percent >= 100
                    ? ('0 0 16px hsl(228 63% 50% / 0.5), 0 0 30px hsl(228 63% 50% / 0.2)')
                    : ('0 0 12px hsl(228 63% 50% / 0.3)'),
                  animation: percent >= 100 ? 'completed-bar-pulse 1.5s ease-in-out infinite' : 'none',
                }}
              >
                {/* Top highlight */}
                <div
                  className="absolute top-0 left-0 right-0 h-[40%] rounded-full"
                  style={{ background: 'linear-gradient(180deg, hsl(0 0% 100% / 0.2), transparent)' }}
                />
                {/* Shimmer */}
                <div className="absolute inset-0" style={{
                  background: percent >= 100
                    ? 'linear-gradient(90deg, transparent 0%, hsl(0 0% 100% / 0.2) 30%, hsl(0 0% 100% / 0.35) 50%, hsl(0 0% 100% / 0.2) 70%, transparent 100%)'
                    : 'linear-gradient(90deg, transparent 0%, hsl(0 0% 100% / 0.15) 40%, hsl(0 0% 100% / 0.25) 50%, hsl(0 0% 100% / 0.15) 60%, transparent 100%)',
                  animation: percent >= 100 ? 'shimmer-sweep 1.5s ease-in-out infinite' : 'shimmer-sweep 2.5s ease-in-out infinite',
                }} />
              </div>
            </div>

            {/* Glow dot at tip — hidden when complete */}
            {percent > 3 && percent < 100 && (
              <div
                className="absolute top-1/2 -translate-y-1/2 rounded-full"
                style={{
                  left: `calc(${percent}% - 5px)`,
                  width: '10px',
                  height: '10px',
                  background: 'radial-gradient(circle, hsl(0 0% 100% / 0.9) 20%, hsl(0 0% 100% / 0.2) 60%, transparent 100%)',
                  boxShadow: '0 0 8px hsl(228 63% 60% / 0.5)',
                }}
              />
            )}
          </div>

          {/* Bottom percent */}
          <div className="flex items-center justify-end w-full px-1">
            <span
              className="text-[11px] font-mono tabular-nums font-medium transition-all duration-300"
              style={{
                color: percent >= 100
                  ? ('hsl(228 63% 70% / 0.8)')
                  : 'hsl(0 0% 100% / 0.5)',
              }}
            >
              {percent}%
            </span>
          </div>
        </div>

        {/* Bottom branding */}
        <p className="text-[11px] text-white/40 tracking-[0.25em] uppercase mt-4 font-medium">
          {'T-Nexus'}
        </p>
      </div>
    </div>
  );
}
