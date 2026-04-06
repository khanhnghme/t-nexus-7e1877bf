import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Construction, LogOut, Mail, CalendarClock, ShieldCheck, AlertTriangle } from 'lucide-react';
import tNexusLogo from '@/assets/t-nexus-logo.png';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { getAdminContactEmail } from '@/lib/adminContact';
import { supabase } from '@/integrations/supabase/client';

interface MaintenanceScreenProps {
  message?: string;
  endAt?: string | null;
  onSignOut?: () => void;
  onAdminLogin?: () => void;
}

export default function MaintenanceScreen({ message, endAt, onSignOut, onAdminLogin }: MaintenanceScreenProps) {
  const formattedEnd = endAt ? format(new Date(endAt), "HH:mm dd/MM/yyyy", { locale: vi }) : null;
  const [adminEmail, setAdminEmail] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [videoOpacity, setVideoOpacity] = useState(0.15);
  const accent = 'hsl(45 93% 50%)';

  useEffect(() => {
    getAdminContactEmail().then(setAdminEmail);
    supabase
      .from('system_settings')
      .select('value')
      .eq('key', 'dashboard_video_bg')
      .maybeSingle()
      .then(({ data }) => {
        if (data?.value) {
          const val = data.value as { enabled?: boolean; landing_opacity?: number; opacity?: number; url?: string };
          if (val.enabled && val.url) {
            setVideoUrl(val.url);
            setVideoOpacity(val.landing_opacity ?? val.opacity ?? 0.15);
          }
        }
      });
  }, []);

  const [timeLeft, setTimeLeft] = useState('');
  useEffect(() => {
    if (!endAt) return;
    const tick = () => {
      const diff = new Date(endAt).getTime() - Date.now();
      if (diff <= 0) { setTimeLeft('Sắp mở lại...'); return; }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [endAt]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, hsl(228 27% 8%) 0%, hsl(228 22% 12%) 35%, hsl(230 25% 16%) 65%, hsl(228 27% 10%) 100%)',
      }}
    >
      {/* Video overlay */}
      {videoUrl && (
        <>
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ opacity: videoOpacity * 0.6 }} src={videoUrl} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(160deg, hsl(228 27% 8% / 0.42) 0%, hsl(228 22% 12% / 0.35) 35%, hsl(230 25% 16% / 0.4) 65%, hsl(228 27% 10% / 0.45) 100%)' }} />
        </>
      )}

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(45 93% 50% / 0.5), transparent 70%)' }} />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(228 63% 43% / 0.4), transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute rounded-full" style={{
            width: `${4 + i * 2}px`, height: `${4 + i * 2}px`,
            background: i % 2 === 0 ? 'hsl(45 93% 50% / 0.3)' : 'hsl(228 63% 55% / 0.25)',
            left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%`,
            animation: `login-float ${3 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.4}s`,
          }} />
        ))}
        {/* Tech circuit lines falling from top */}
        {[...Array(12)].map((_, i) => {
          const left = 3 + i * 8.5;
          const height = 100 + Math.random() * 250;
          const delay = i * 0.25;
          const dur = 8 + Math.random() * 6;
          const opacity = 0.06 + Math.random() * 0.1;
          const isAccent = i % 2 === 1;
          const pulseColor = isAccent ? 'hsl(272 64% 69%' : 'hsl(228 63% 55%';
          return (
            <div key={`line-${i}`} className="absolute" style={{ left: `${left}%`, top: 0, width: '1px', height: '100%' }}>
              <div className="absolute top-0 w-px h-full" style={{ background: `linear-gradient(180deg, ${pulseColor} / ${opacity}), transparent 80%)` }} />
              <div className="absolute" style={{
                width: '1px', height: `${height}px`,
                background: isAccent
                  ? `linear-gradient(180deg, transparent, hsl(272 64% 75% / 0.5), hsl(272 50% 60% / 0.35), transparent)`
                  : `linear-gradient(180deg, transparent, hsl(0 0% 100% / 0.45), hsl(228 63% 65% / 0.3), transparent)`,
                animation: `circuit-fall ${dur}s linear infinite`, animationDelay: `${delay}s`,
              }} />
            </div>
          );
        })}
      </div>

      {/* Main card — 16:9 split */}
      <div className="relative w-[85vw] max-w-[720px] mx-4 animate-fade-in">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            aspectRatio: '16 / 9',
            maxHeight: '65vh',
            background: 'hsl(0 0% 100% / 0.12)',
            backdropFilter: 'blur(32px)',
            border: '1px solid hsl(0 0% 100% / 0.18)',
            boxShadow: '0 20px 60px hsl(0 0% 0% / 0.35), 0 0 0 1px hsl(0 0% 100% / 0.05)',
          }}
        >
          {/* Accent top bar */}
          <div className="h-1" style={{ background: 'linear-gradient(90deg, hsl(45 93% 47%), hsl(25 85% 50%), hsl(45 93% 47%))', backgroundSize: '200% 100%', animation: 'shimmer 3s ease-in-out infinite' }} />

          <div className="grid grid-cols-1 sm:grid-cols-[2fr_3fr] h-[calc(100%-4px)]">
            {/* Left — Branding + Icon */}
            <div
              className="hidden sm:flex flex-col items-center justify-center p-6 relative overflow-hidden"
              style={{ background: 'hsl(0 0% 0% / 0.2)', borderRight: '1px solid hsl(0 0% 100% / 0.06)' }}
            >
              <div className="absolute inset-0 opacity-30" style={{
                background: 'radial-gradient(ellipse at center, hsl(45 93% 50% / 0.15), transparent 70%)',
              }} />

              <div className="relative flex flex-col items-center gap-4">
                                  <div className="flex items-center gap-2 mb-2">
                    <img src={tNexusLogo} alt="T-Nexus" className="h-8 w-auto" />
                    <div className="h-5 w-px bg-white/15" />
                    <span className="text-sm font-bold tracking-wide" style={{
                      background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.8), hsl(228 63% 65%))',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>T-Nexus</span>
                  </div>

                {/* Construction icon */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-lg opacity-20 animate-pulse" style={{ background: accent, transform: 'scale(1.5)' }} />
                  <div className="relative w-24 h-24 rounded-full flex items-center justify-center" style={{
                    background: 'linear-gradient(135deg, hsl(40 50% 18%), hsl(35 40% 13%))',
                    border: '2.5px solid hsl(45 93% 50% / 0.35)',
                  }}>
                    <Construction className="w-11 h-11" style={{ color: 'hsl(45 90% 60%)' }} />
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-2 w-32">
                  <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(45 93% 50% / 0.25))' }} />
                  <div className="w-1 h-1 rounded-full" style={{ background: accent }} />
                  <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, hsl(45 93% 50% / 0.25), transparent)' }} />
                </div>

                {/* Badge */}
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-0.5 rounded-full" style={{
                  color: accent,
                  background: 'hsl(45 93% 50% / 0.1)',
                  border: '1px solid hsl(45 93% 50% / 0.2)',
                }}>Đang bảo trì</span>
              </div>
            </div>

            {/* Right — Content */}
            <div className="flex flex-col justify-center p-5 sm:p-6 overflow-y-auto">
              <div className="space-y-3">
                <div>
                  <h1 className="text-lg sm:text-xl font-extrabold tracking-tight" style={{
                    background: 'linear-gradient(135deg, hsl(0 0% 100%), hsl(45 90% 65%))',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>System Maintenance</h1>
                  <p className="text-xs text-white/50 mt-1 leading-relaxed">
                    Xin lỗi vì sự bất tiện. Hệ thống đang được nâng cấp.
                  </p>
                </div>

                {/* Message */}
                <div className="rounded-lg p-3" style={{
                  background: 'hsl(45 93% 50% / 0.06)', border: '1px solid hsl(45 93% 50% / 0.18)',
                }}>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: 'hsl(45 90% 60%)' }} />
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest mb-0.5" style={{ color: 'hsl(45 90% 60%)' }}>Thông báo</p>
                      <p className="text-xs text-white/75 leading-relaxed">{message || 'Hệ thống đang bảo trì, vui lòng quay lại sau.'}</p>
                    </div>
                  </div>
                </div>

                {/* Status + Countdown */}
                <div className="rounded-lg p-3 space-y-2.5" style={{
                  background: 'hsl(0 0% 100% / 0.04)', border: '1px solid hsl(0 0% 100% / 0.08)',
                }}>
                  <div className="flex items-center justify-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: accent }} />
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: accent }} />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Đang bảo trì</span>
                  </div>

                  {endAt && timeLeft && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-1.5 text-[10px] text-white/40">
                        <CalendarClock className="w-3 h-3" />
                        <span>Dự kiến: <span className="font-medium text-white/65">{formattedEnd}</span></span>
                      </div>
                      {timeLeft.includes(':') ? (
                        <div className="flex items-center justify-center gap-1.5">
                          {timeLeft.split(':').map((unit, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                              {i > 0 && <span className="text-base font-bold text-white/20">:</span>}
                              <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center relative overflow-hidden" style={{
                                  background: 'hsl(0 0% 100% / 0.07)', border: '1px solid hsl(0 0% 100% / 0.12)',
                                }}>
                                  <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(135deg, ${accent}, transparent 60%)` }} />
                                  <span className="text-lg font-bold font-mono text-white tabular-nums relative">{unit}</span>
                                </div>
                                <span className="text-[8px] uppercase tracking-wider text-white/40 mt-1 font-semibold">{['Giờ', 'Phút', 'Giây'][i]}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs font-semibold text-center animate-pulse" style={{ color: accent }}>{timeLeft}</p>
                      )}
                    </div>
                  )}

                  {!endAt && (
                    <p className="text-[10px] text-center text-white/35">Hệ thống sẽ tự động hoạt động trở lại khi hoàn tất.</p>
                  )}
                </div>

                {/* Contact */}
                {adminEmail && (
                  <div className="rounded-lg p-2.5 flex items-center gap-2.5" style={{ background: 'hsl(0 0% 100% / 0.04)', border: '1px solid hsl(0 0% 100% / 0.08)' }}>
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'hsl(228 63% 43% / 0.12)' }}>
                      <Mail className="w-3.5 h-3.5" style={{ color: 'hsl(228 63% 65%)' }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold text-white/80">Cần hỗ trợ?</p>
                      <a href={`mailto:${adminEmail}`} className="text-[10px] hover:underline truncate block" style={{ color: 'hsl(228 63% 65%)' }}>{adminEmail}</a>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-3 pt-2" style={{ borderTop: '1px solid hsl(0 0% 100% / 0.06)' }}>
                <p className="text-[9px] text-white/25">© 2025 T-Nexus</p>
                <div className="flex items-center gap-1">
                  {onAdminLogin && (
                    <Button variant="ghost" size="sm" onClick={onAdminLogin} className="text-white/30 hover:text-white hover:bg-white/10 gap-1 h-6 text-[10px] px-2">
                      <ShieldCheck className="w-3 h-3" />
                      <span className="hidden sm:inline">Admin</span>
                    </Button>
                  )}
                  {onSignOut && (
                    <Button variant="ghost" size="sm" onClick={onSignOut} className="text-white/40 hover:text-white hover:bg-white/10 gap-1 h-6 text-[10px] px-2">
                      <LogOut className="w-3 h-3" />Đăng xuất
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}
