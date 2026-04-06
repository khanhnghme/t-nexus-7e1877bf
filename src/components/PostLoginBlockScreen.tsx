import { useState, useEffect, useMemo, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { LogOut, Mail, Timer, AlertTriangle, CalendarClock, ShieldX, Construction, GraduationCap, Hash } from 'lucide-react';
import tNexusLogo from '@/assets/t-nexus-logo.png';
import { getAdminContactEmail } from '@/lib/adminContact';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

function removeVietnameseTones(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

type BlockMode = 'suspended' | 'maintenance';

interface PostLoginBlockScreenProps {
  mode: BlockMode;
  userName?: string;
  userAvatarUrl?: string | null;
  userEmail?: string;
  userInstitution?: string | null;
  userStudentId?: string;
  onSignOut: () => void;
  suspendedUntil?: string;
  suspensionReason?: string | null;
  onUnlocked?: () => void;
  maintenanceMessage?: string;
  maintenanceEndAt?: string | null;
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

/* ═══════════════════════════════════════════════════════ */
/*  Shared Background                                     */
/* ═══════════════════════════════════════════════════════ */
function CinematicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(272 64% 69% / 0.5), transparent 70%)' }} />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(228 63% 43% / 0.4), transparent 70%)' }} />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      {[...Array(6)].map((_, i) => (
        <div key={i} className="absolute rounded-full" style={{
          width: `${4 + i * 2}px`, height: `${4 + i * 2}px`,
          background: i % 2 === 0 ? 'hsl(272 64% 69% / 0.3)' : 'hsl(228 63% 55% / 0.25)',
          left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%`,
          animation: `login-float ${3 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.4}s`,
        }} />
      ))}
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
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  Countdown Block                                       */
/* ═══════════════════════════════════════════════════════ */
function CountdownBlock({ value, label, accent }: { value: number; label: string; accent: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center relative overflow-hidden"
        style={{
          background: 'hsl(0 0% 100% / 0.07)',
          border: '1px solid hsl(0 0% 100% / 0.12)',
        }}
      >
        <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(135deg, ${accent}, transparent 60%)` }} />
        <span className="text-lg font-bold font-mono text-white tabular-nums relative">{String(value).padStart(2, '0')}</span>
      </div>
      <span className="text-[8px] uppercase tracking-wider text-white/40 mt-1 font-semibold">{label}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  Left Panel — User Identity (compact)                  */
/* ═══════════════════════════════════════════════════════ */
function LeftPanel({
  userName, userAvatarUrl, userEmail, userInstitution, userStudentId, accent, icon: Icon, badgeLabel,
}: {
  userName?: string;
  userAvatarUrl?: string | null;
  userEmail?: string;
  userInstitution?: string | null;
  userStudentId?: string;
  accent: string;
  icon: React.ElementType;
  badgeLabel: string;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center p-4 sm:p-5 relative overflow-hidden"
      style={{
        background: 'hsl(0 0% 0% / 0.15)',
        borderRight: '1px solid hsl(0 0% 100% / 0.08)',
      }}
    >
      <div className="absolute inset-0 opacity-30" style={{
        background: `radial-gradient(ellipse at center, ${accent.replace(')', ' / 0.15)')}, transparent 70%)`,
      }} />

      <div className="relative flex flex-col items-center gap-2">
        {/* Logo */}
                  <div className="flex items-center gap-2 mb-1">
            <img src={tNexusLogo} alt="T-Nexus" className="h-8 w-auto" />
            <div className="h-5 w-px bg-white/15" />
            <span className="text-xs font-bold tracking-wide" style={{
              background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.8), hsl(228 63% 65%))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>T-Nexus</span>
          </div>

        {/* Avatar */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-lg opacity-20 animate-pulse" style={{ background: accent, transform: 'scale(1.4)' }} />
          <div className="relative w-16 h-16 rounded-full overflow-hidden" style={{
            border: '2px solid ' + accent.replace(')', ' / 0.5)'),
            boxShadow: '0 6px 24px hsl(0 0% 0% / 0.4)',
          }}>
            {userAvatarUrl ? (
              <img src={userAvatarUrl} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, hsl(228 50% 25%), hsl(228 45% 32%))' }}>
                <span className="text-2xl font-bold text-white/80">{userName?.charAt(0)?.toUpperCase() || '?'}</span>
              </div>
            )}
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-7 h-7 rounded-full flex items-center justify-center" style={{
            background: 'linear-gradient(135deg, hsl(0 0% 15%), hsl(0 0% 10%))',
            border: '2px solid ' + accent.replace(')', ' / 0.5)'),
          }}>
            <Icon className="w-3.5 h-3.5" style={{ color: accent }} />
          </div>
        </div>

        {/* Name */}
        {userName && (
          <h2 className="text-base font-bold text-center" style={{
            background: 'linear-gradient(135deg, hsl(0 0% 100%), hsl(0 0% 80%))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>{userName}</h2>
        )}

        {/* User details - institution, student ID, email */}
        <div className="space-y-1.5 w-full max-w-[200px]">
          {userInstitution && (
            <div className="flex items-center gap-1.5 justify-center">
              <GraduationCap className="w-3 h-3 shrink-0" style={{ color: 'hsl(228 63% 65%)' }} />
              <span className="text-[10px] text-white/50 truncate">{userInstitution}</span>
            </div>
          )}
          {userStudentId && (
            <div className="flex items-center gap-1.5 justify-center">
              <Hash className="w-3 h-3 shrink-0" style={{ color: 'hsl(228 63% 65%)' }} />
              <span className="text-[10px] text-white/50 font-mono">{userStudentId}</span>
            </div>
          )}
          {userEmail && (
            <div className="flex items-center gap-1.5 justify-center">
              <Mail className="w-3 h-3 shrink-0" style={{ color: 'hsl(228 63% 65%)' }} />
              <span className="text-[10px] text-white/35 font-mono truncate">{userEmail}</span>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2 w-32">
          <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, transparent, ${accent.replace(')', ' / 0.3)')})` }} />
          <div className="w-1 h-1 rounded-full" style={{ background: accent }} />
          <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${accent.replace(')', ' / 0.3)')}, transparent)` }} />
        </div>

        {/* Badge */}
        <span className="text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-0.5 rounded-full" style={{
          color: accent,
          background: accent.replace(')', ' / 0.1)'),
          border: '1px solid ' + accent.replace(')', ' / 0.2)'),
        }}>{badgeLabel}</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  Suspended — Right Panel (compact)                     */
/* ═══════════════════════════════════════════════════════ */
function SuspendedRightPanel({
  suspendedUntil, suspensionReason, isPermanent, timeLeft, adminEmail, onSignOut,
}: {
  suspendedUntil?: string;
  suspensionReason?: string | null;
  isPermanent: boolean;
  timeLeft: { days: number; hours: number; minutes: number; seconds: number };
  adminEmail: string;
  onSignOut: () => void;
}) {
  const accent = 'hsl(0 72% 55%)';
  return (
    <div className="flex flex-col justify-center p-5 sm:p-6 overflow-y-auto">
      <div className="space-y-3">
        <div>
          <h1 className="text-lg sm:text-xl font-extrabold tracking-tight" style={{
            background: 'linear-gradient(135deg, hsl(0 0% 100%), hsl(0 80% 70%))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Account Suspended</h1>
          <p className="text-[11px] text-white/50 mt-0.5 leading-relaxed">
            Tài khoản của bạn đã bị tạm khóa bởi quản trị viên hệ thống.
          </p>
        </div>

        {/* Reason */}
        {suspensionReason && (
          <div className="rounded-lg p-3" style={{
            background: 'hsl(0 72% 55% / 0.08)', border: '1px solid hsl(0 72% 55% / 0.2)',
          }}>
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: 'hsl(0 80% 65%)' }} />
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest mb-0.5" style={{ color: 'hsl(0 80% 65%)' }}>Lý do</p>
                <p className="text-xs text-white/75 leading-relaxed">{suspensionReason}</p>
              </div>
            </div>
          </div>
        )}

        {/* Countdown */}
        <div className="rounded-lg p-3 space-y-2.5" style={{
          background: 'hsl(0 0% 100% / 0.04)', border: '1px solid hsl(0 0% 100% / 0.08)',
        }}>
          <div className="flex items-center justify-center gap-1.5">
            <Timer className="w-3 h-3 text-white/50" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/50">
              {isPermanent ? 'Trạng thái' : 'Thời gian còn lại'}
            </span>
          </div>

          {isPermanent ? (
            <div className="text-center">
              <p className="text-xl font-extrabold" style={{
                background: 'linear-gradient(135deg, hsl(0 80% 65%), hsl(0 60% 50%))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Khóa vĩnh viễn</p>
              <p className="text-[10px] text-white/35 mt-1">Liên hệ Admin để được hỗ trợ mở khóa</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center gap-1.5">
                <CountdownBlock value={timeLeft.days} label="Ngày" accent={accent} />
                <span className="text-base font-bold text-white/20 mt-[-14px]">:</span>
                <CountdownBlock value={timeLeft.hours} label="Giờ" accent={accent} />
                <span className="text-base font-bold text-white/20 mt-[-14px]">:</span>
                <CountdownBlock value={timeLeft.minutes} label="Phút" accent={accent} />
                <span className="text-base font-bold text-white/20 mt-[-14px]">:</span>
                <CountdownBlock value={timeLeft.seconds} label="Giây" accent={accent} />
              </div>
              {suspendedUntil && (
                <p className="text-[10px] text-center text-white/35">
                  Mở khóa: <span className="font-medium text-white/60">{new Date(suspendedUntil).toLocaleString('vi-VN')}</span>
                </p>
              )}
            </>
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

      <div className="flex items-center justify-between mt-3 pt-2" style={{ borderTop: '1px solid hsl(0 0% 100% / 0.06)' }}>
        <p className="text-[9px] text-white/25">© 2025 T-Nexus</p>
        <Button variant="ghost" size="sm" onClick={onSignOut} className="text-white/40 hover:text-white hover:bg-white/10 gap-1 h-6 text-[10px] px-2">
          <LogOut className="w-3 h-3" />Đăng xuất
        </Button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  Maintenance — Right Panel (compact)                   */
/* ═══════════════════════════════════════════════════════ */
function MaintenanceRightPanel({
  maintenanceMessage, maintenanceEndAt, maintenanceTimeLeft, adminEmail, onSignOut,
}: {
  maintenanceMessage?: string;
  maintenanceEndAt?: string | null;
  maintenanceTimeLeft: string;
  adminEmail: string;
  onSignOut: () => void;
}) {
  const accent = 'hsl(45 93% 50%)';
  return (
    <div className="flex flex-col justify-center p-5 sm:p-6 overflow-y-auto">
      <div className="space-y-3">
        <div>
          <h1 className="text-lg sm:text-xl font-extrabold tracking-tight" style={{
            background: 'linear-gradient(135deg, hsl(0 0% 100%), hsl(45 90% 65%))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>System Maintenance</h1>
          <p className="text-[11px] text-white/50 mt-0.5 leading-relaxed">
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
              <p className="text-xs text-white/75 leading-relaxed">{maintenanceMessage || 'Hệ thống đang bảo trì, vui lòng quay lại sau.'}</p>
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

          {maintenanceEndAt && maintenanceTimeLeft && (
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-white/40">
                <CalendarClock className="w-3 h-3" />
                <span>Dự kiến: <span className="font-medium text-white/65">{format(new Date(maintenanceEndAt), "HH:mm dd/MM/yyyy", { locale: vi })}</span></span>
              </div>
              {maintenanceTimeLeft.includes(':') ? (
                <div className="flex items-center justify-center gap-1.5">
                  {maintenanceTimeLeft.split(':').map((unit, i) => (
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
                <p className="text-xs font-semibold text-center animate-pulse" style={{ color: accent }}>{maintenanceTimeLeft}</p>
              )}
            </div>
          )}

          {!maintenanceEndAt && (
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

      <div className="flex items-center justify-between mt-3 pt-2" style={{ borderTop: '1px solid hsl(0 0% 100% / 0.06)' }}>
        <p className="text-[9px] text-white/25">© 2025 T-Nexus</p>
        <Button variant="ghost" size="sm" onClick={onSignOut} className="text-white/40 hover:text-white hover:bg-white/10 gap-1 h-6 text-[10px] px-2">
          <LogOut className="w-3 h-3" />Đăng xuất
        </Button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════ */
/*  Main Component                                        */
/* ═══════════════════════════════════════════════════════ */
export default function PostLoginBlockScreen({
  mode, userName, userAvatarUrl, userEmail, userInstitution, userStudentId, onSignOut,
  suspendedUntil, suspensionReason, onUnlocked,
  maintenanceMessage, maintenanceEndAt,
}: PostLoginBlockScreenProps) {
  const [phase, setPhase] = useState<'loading' | 'transition' | 'reveal'>('loading');
  const [percent, setPercent] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [adminEmail, setAdminEmail] = useState('');
  const [suspendTimeLeft, setSuspendTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [maintenanceTimeLeft, setMaintenanceTimeLeft] = useState('');
  const quote = useMemo(() => motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)], []);
  const greeting = useMemo(() => getGreeting(), []);
  const startRef = useRef(Date.now());

  const isPermanent = mode === 'suspended' && suspendedUntil
    ? new Date(suspendedUntil).getFullYear() >= 2099 : false;
  const isSuspended = mode === 'suspended';

  useEffect(() => { getAdminContactEmail().then(setAdminEmail); }, []);

  const duration = 5000;
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
      if (p < 25) setStepIndex(0);
      else if (p < 55) setStepIndex(1);
      else if (p < 85) setStepIndex(2);
      else setStepIndex(3);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('transition'), duration);
    const t2 = setTimeout(() => setPhase('reveal'), duration + 700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (mode !== 'suspended' || !suspendedUntil || isPermanent) return;
    const update = () => {
      const diff = new Date(suspendedUntil).getTime() - Date.now();
      if (diff <= 0) { onUnlocked?.(); return; }
      setSuspendTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [mode, suspendedUntil, isPermanent, onUnlocked]);

  useEffect(() => {
    if (mode !== 'suspended') return;
    const check = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;
      const { data } = await supabase.from('profiles').select('suspended_until').eq('id', session.user.id).maybeSingle();
      if (!data?.suspended_until || new Date(data.suspended_until).getTime() <= Date.now()) onUnlocked?.();
    };
    const interval = setInterval(check, 30000);
    return () => clearInterval(interval);
  }, [mode, onUnlocked]);

  useEffect(() => {
    if (mode !== 'maintenance' || !maintenanceEndAt) return;
    const tick = () => {
      const diff = new Date(maintenanceEndAt).getTime() - Date.now();
      if (diff <= 0) { setMaintenanceTimeLeft('Sắp mở lại...'); return; }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setMaintenanceTimeLeft(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [mode, maintenanceEndAt]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, hsl(228 27% 8%) 0%, hsl(228 22% 12%) 35%, hsl(230 25% 16%) 65%, hsl(228 27% 10%) 100%)',
      }}
    >
      <CinematicBackground />

      {/* ═══ Loading content ═══ */}
      <div
        className={`relative flex flex-col items-center gap-5 px-8 text-center transition-all duration-700 ease-out ${
          phase === 'loading' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-105 pointer-events-none'
        }`}
        style={{ position: phase !== 'loading' ? 'absolute' : 'relative' }}
      >
        <div className="relative mb-4 animate-[logo-bob_2.5s_ease-in-out_infinite]">
          <div className="absolute inset-0 rounded-full blur-2xl opacity-30 animate-pulse" style={{ background: 'hsl(228 63% 50% / 0.4)', transform: 'scale(1.6)' }} />
          <div className="relative w-32 h-32 rounded-full overflow-hidden" style={{ border: '3px solid hsl(0 0% 100% / 0.25)', boxShadow: '0 12px 40px hsl(0 0% 0% / 0.4)' }}>
            {userAvatarUrl ? (
              <img src={userAvatarUrl} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, hsl(228 50% 25%), hsl(228 45% 32%))' }}>
                <span className="text-4xl font-bold text-white/90">{userName?.charAt(0)?.toUpperCase() || '?'}</span>
              </div>
            )}
          </div>
          <div className="absolute -bottom-1 -right-1 w-11 h-11 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, hsl(228 27% 12%), hsl(228 25% 18%))', border: '2.5px solid hsl(0 0% 100% / 0.3)' }}>
            <img src={tNexusLogo} alt="T-Nexus" className="w-7 h-7 object-contain" />
          </div>
        </div>

        <p className="text-xl text-white/90 font-medium tracking-wide">{greeting}</p>
        {userName && (
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight" style={{ background: 'linear-gradient(135deg, hsl(0 0% 100%), hsl(272 64% 75%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {removeVietnameseTones(userName)}
          </h1>
        )}

        <div className="flex items-center gap-3 w-56">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.3))' }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(228 63% 55%)' }} />
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, hsl(0 0% 100% / 0.3), transparent)' }} />
        </div>

        <p className="text-base text-white/75 max-w-xs leading-relaxed italic">"{quote}"</p>

        <div className="flex flex-col items-center gap-3 mt-4 w-72">
          <p className="text-sm text-white/70 font-medium h-5 transition-all duration-300">{loadingSteps[stepIndex]}</p>
          <div className="w-full h-2.5 rounded-full overflow-hidden" style={{ background: 'hsl(0 0% 100% / 0.15)' }}>
            <div className="h-full rounded-full transition-[width] duration-100 ease-linear" style={{
              width: `${percent}%`,
              background: 'linear-gradient(90deg, hsl(228 63% 43%), hsl(272 64% 69%))',
              boxShadow: '0 0 12px hsl(228 63% 50% / 0.4)',
            }} />
          </div>
          <span className="text-sm text-white/60 font-mono tabular-nums tracking-wider font-medium">{percent}%</span>
        </div>

        <p className="text-[11px] text-white/40 tracking-[0.25em] uppercase mt-4 font-medium">
          {'T-Nexus'}
        </p>
      </div>

      {/* ═══ Block card — compact 16:9 split ═══ */}
      <div
        className={`relative transition-all duration-700 ease-out ${
          phase === 'reveal' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8 pointer-events-none'
        }`}
        style={{ position: phase !== 'reveal' ? 'absolute' : 'relative' }}
      >
        <div
          className="w-[85vw] max-w-[720px] rounded-2xl overflow-hidden"
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
          <div className="h-1" style={{
            background: isSuspended
              ? 'linear-gradient(90deg, hsl(0 72% 55%), hsl(0 60% 40%), hsl(0 72% 55%))'
              : 'linear-gradient(90deg, hsl(45 93% 47%), hsl(25 85% 50%), hsl(45 93% 47%))',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s ease-in-out infinite',
          }} />

          <div className="grid grid-cols-1 sm:grid-cols-[2fr_3fr] h-[calc(100%-4px)]">
            <LeftPanel
              userName={userName}
              userAvatarUrl={userAvatarUrl}
              userEmail={userEmail}
              userInstitution={userInstitution}
              userStudentId={userStudentId}
              accent={isSuspended ? 'hsl(0 72% 55%)' : 'hsl(45 93% 50%)'}
              icon={isSuspended ? ShieldX : Construction}
              badgeLabel={isSuspended ? 'Tài khoản bị khóa' : 'Đang bảo trì'}
            />

            {isSuspended ? (
              <SuspendedRightPanel
                suspendedUntil={suspendedUntil}
                suspensionReason={suspensionReason}
                isPermanent={isPermanent}
                timeLeft={suspendTimeLeft}
                adminEmail={adminEmail}
                onSignOut={onSignOut}
              />
            ) : (
              <MaintenanceRightPanel
                maintenanceMessage={maintenanceMessage}
                maintenanceEndAt={maintenanceEndAt}
                maintenanceTimeLeft={maintenanceTimeLeft}
                adminEmail={adminEmail}
                onSignOut={onSignOut}
              />
            )}
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
