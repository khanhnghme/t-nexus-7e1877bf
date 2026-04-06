import { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';

interface StreakFullScreenCelebrationProps {
  currentStreak: number;
  visible: boolean;
  onComplete: () => void;
}

const StreakFullScreenCelebration = ({ currentStreak, visible, onComplete }: StreakFullScreenCelebrationProps) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!visible) { setExiting(false); return; }
    const exitTimer = setTimeout(() => setExiting(true), 3000);
    const completeTimer = setTimeout(() => onComplete(), 3500);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [visible, onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center cursor-pointer ${
        exiting ? 'animate-streak-overlay-exit' : 'animate-streak-overlay-enter'
      }`}
      style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)' }}
      onClick={onComplete}
    >
      {/* ── SVG Gradient Defs ── */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="fireGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="35%" stopColor="#f97316" />
            <stop offset="70%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#fde68a" />
          </linearGradient>
          <filter id="fireGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* ── Main fire container ── */}
      <div className="relative animate-streak-fire-pop">
        {/* Outer ambient glow — large, soft */}
        <div
          className="absolute inset-0 rounded-full animate-streak-glow-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.5) 0%, rgba(249,115,22,0.3) 40%, transparent 70%)',
            transform: 'scale(3.5)',
            filter: 'blur(30px)',
          }}
        />

        {/* Inner ring glow — sharper, closer */}
        <div
          className="absolute inset-0 rounded-full animate-streak-ring-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(249,115,22,0.6) 0%, rgba(239,68,68,0.2) 50%, transparent 70%)',
            transform: 'scale(2)',
            filter: 'blur(12px)',
          }}
        />

        {/* Orbiting ember particles */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{
              animation: `streak-orbit ${2.5 + i * 0.3}s linear infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: `${6 + (i % 3) * 2}px`,
                height: `${6 + (i % 3) * 2}px`,
                background: i % 2 === 0
                  ? 'radial-gradient(circle, #fbbf24, #f97316)'
                  : 'radial-gradient(circle, #fde68a, #fbbf24)',
                boxShadow: `0 0 ${8 + i * 2}px rgba(251,191,36,0.8)`,
                transform: `translateX(${55 + i * 8}px) translateY(-50%)`,
                animation: `streak-ember-flicker ${0.6 + i * 0.15}s ease-in-out infinite alternate`,
              }}
            />
          </div>
        ))}

        {/* Rising sparks */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={`spark-${i}`}
            className="absolute left-1/2 bottom-0"
            style={{
              animation: `streak-spark-rise ${1.8 + i * 0.4}s ease-out infinite`,
              animationDelay: `${0.5 + i * 0.5}s`,
              marginLeft: `${-15 + i * 10}px`,
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: '4px',
                height: '4px',
                background: i % 2 === 0 ? '#fde68a' : '#fbbf24',
                boxShadow: '0 0 6px rgba(253,230,138,0.9)',
              }}
            />
          </div>
        ))}

        {/* Main Flame Icon */}
        <Flame
          className="relative w-28 h-28 animate-streak-flame-dance"
          style={{
            fill: 'url(#fireGrad)',
            stroke: '#fbbf24',
            filter: 'url(#fireGlow) drop-shadow(0 0 25px rgba(249,115,22,0.8))',
          }}
          strokeWidth={1}
        />
      </div>

      {/* ── Text ── */}
      <h2
        className="mt-5 text-5xl font-black text-white animate-streak-fire-pop"
        style={{
          animationDelay: '0.15s',
          textShadow: '0 0 30px rgba(249,115,22,0.6), 0 0 60px rgba(249,115,22,0.3)',
        }}
      >
        {currentStreak} ngày
      </h2>
      <p
        className="mt-2 text-xl font-bold animate-streak-fire-pop"
        style={{
          animationDelay: '0.3s',
          background: 'linear-gradient(90deg, #fbbf24, #f97316, #fbbf24)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'streak-fire-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.3s both, streak-text-shimmer 2s linear infinite',
          filter: 'drop-shadow(0 0 10px rgba(249,115,22,0.5))',
        }}
      >
        🔥 Streak +1!
      </p>
    </div>
  );
};

export default StreakFullScreenCelebration;
