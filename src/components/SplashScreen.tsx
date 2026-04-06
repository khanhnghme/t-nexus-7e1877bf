import { useState, useEffect } from 'react';
import tNexusTextWhite from '@/assets/t-nexus-text-white.png';

const FADE_IN = 2000;
const HOLD = 600;
const FADE_OUT = 1000;

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'in' | 'out' | 'done'>('in');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('out'), FADE_IN + HOLD);
    const t2 = setTimeout(() => { setPhase('done'); onComplete(); }, FADE_IN + HOLD + FADE_OUT + 50);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: 'linear-gradient(180deg, hsl(200, 15%, 8%) 0%, hsl(200, 10%, 5%) 100%)',
        opacity: phase === 'out' ? 0 : 1,
        transition: `opacity ${FADE_OUT}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
    >
      <div
        className="relative w-[70vw] max-w-[600px] md:w-[50vw] md:max-w-[700px]"
        style={{ animation: `splashReveal ${FADE_IN}ms ease-out forwards` }}
      >
        <img
          src={tNexusTextWhite}
          alt="T-Nexus"
          className="w-full h-auto object-contain"
          style={{ opacity: 0.15 }}
        />
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
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 45%, rgba(200,255,255,1) 50%, rgba(255,255,255,0.9) 55%, rgba(255,255,255,0) 100%)`,
              animation: `sweepLight ${FADE_IN}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
            }}
          />
          <div
            className="absolute inset-0 bg-white"
            style={{
              animation: `fillIn ${FADE_IN}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
            }}
          />
        </div>
      </div>
      <style>{`
        @keyframes sweepLight {
          0% { transform: translateX(-150%); }
          70% { transform: translateX(150%); }
          100% { transform: translateX(150%); }
        }
        @keyframes fillIn {
          0% { opacity: 0; }
          40% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes splashReveal {
          0% { transform: scale(0.96); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
