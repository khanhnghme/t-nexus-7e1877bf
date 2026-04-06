import { useState, useEffect, useRef, useCallback } from 'react';
import tNexusTextWhite from '@/assets/t-nexus-text-white.png';

// ── Timing constants (total ≈ 2.8s) ──
const SWEEP_DURATION = 1600;  // Shine sweep across text
const HOLD_DURATION = 400;    // Brief hold at full brightness
const FADE_OUT_DURATION = 800; // Fade out to landing page

const TOTAL_VISIBLE = SWEEP_DURATION + HOLD_DURATION;
const TOTAL_DURATION = TOTAL_VISIBLE + FADE_OUT_DURATION;

// Hard safety cap — if anything goes wrong, force-complete after this
const FALLBACK_TIMEOUT = 5000;

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'in' | 'out' | 'done'>('in');

  // Stable ref so the effect never re-fires when onComplete's reference changes
  const onCompleteRef = useRef(onComplete);
  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  // Memoised completion handler — guaranteed to fire exactly once
  const hasCompleted = useRef(false);
  const complete = useCallback(() => {
    if (hasCompleted.current) return;
    hasCompleted.current = true;
    setPhase('done');
    onCompleteRef.current();
  }, []);

  useEffect(() => {
    // Phase 1: sweep animation plays for TOTAL_VISIBLE ms, then start fade-out
    const t1 = setTimeout(() => setPhase('out'), TOTAL_VISIBLE);

    // Phase 2: after fade-out animation finishes, call onComplete
    const t2 = setTimeout(complete, TOTAL_DURATION);

    // Fallback: hard safety timeout in case timers somehow fail
    const fallback = setTimeout(complete, FALLBACK_TIMEOUT);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(fallback);
    };
  }, [complete]); // `complete` is stable (useCallback with no deps)

  if (phase === 'done') return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: 'linear-gradient(180deg, hsl(200, 15%, 8%) 0%, hsl(200, 10%, 5%) 100%)',
        opacity: phase === 'out' ? 0 : 1,
        transition: `opacity ${FADE_OUT_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        willChange: 'opacity',
      }}
    >
      <div
        className="relative w-[70vw] max-w-[600px] md:w-[50vw] md:max-w-[700px]"
        style={{ animation: `splashReveal ${SWEEP_DURATION}ms ease-out forwards` }}
      >
        {/* Base text — dim silhouette */}
        <img
          src={tNexusTextWhite}
          alt="T-Nexus"
          className="w-full h-auto object-contain"
          style={{ opacity: 0.15 }}
        />

        {/* Masked overlay — shine sweep + fill */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{
            maskImage: `url(${tNexusTextWhite})`,
            WebkitMaskImage: `url(${tNexusTextWhite})`,
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
          }}
        >
          {/* Shine beam sweeping left → right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 45%, rgba(200,255,255,1) 50%, rgba(255,255,255,0.9) 55%, rgba(255,255,255,0) 100%)',
              animation: `sweepLight ${SWEEP_DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
              willChange: 'transform',
            }}
          />
          {/* Solid fill that fades in after the sweep */}
          <div
            className="absolute inset-0 bg-white"
            style={{
              animation: `fillIn ${SWEEP_DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
              willChange: 'opacity',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes sweepLight {
          0%   { transform: translateX(-150%); }
          70%  { transform: translateX(150%); }
          100% { transform: translateX(150%); }
        }
        @keyframes fillIn {
          0%   { opacity: 0; }
          40%  { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes splashReveal {
          0%   { transform: scale(0.96); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
