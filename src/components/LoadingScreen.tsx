import { useState, useEffect } from 'react';
import uehLogo from '@/assets/t-nexus-logo-dark.png';

const tips = [
  '💡 Bạn có thể dùng phím tắt để điều hướng nhanh hơn',
  '📋 Kéo thả task trên Kanban để thay đổi trạng thái',
  '🔔 Bật thông báo email để không bỏ lỡ deadline',
  '📎 Đính kèm file trực tiếp vào ghi chú task',
  '👥 Nhắc tên @thành viên trong bình luận để thông báo',
  '📊 Xem bảng điểm quá trình trong tab Điểm số',
  '🔗 Chia sẻ project qua link public để mọi người xem',
  '⏰ Deadline sắp hết sẽ hiển thị đếm ngược',
  '📁 Sắp xếp tài liệu vào thư mục để dễ tìm',
  '🎯 Giao task cho thành viên cụ thể để rõ trách nhiệm',
];

interface LoadingScreenProps {
  message?: string;
}

export default function LoadingScreen({ message = 'Đang tải...' }: LoadingScreenProps) {
  const [tip] = useState(() => tips[Math.floor(Math.random() * tips.length)]);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowTip(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 relative overflow-hidden">
      {/* ── Nebula glow layers ── */}
      <div className="ls-nebula ls-nebula--primary" />
      <div className="ls-nebula ls-nebula--accent" />

      {/* ── Universe orbit system ── */}
      <div className="ls-universe">
        {/* Outer orbit ring */}
        <div className="ls-orbit ls-orbit--outer" />
        {/* Inner orbit ring */}
        <div className="ls-orbit ls-orbit--inner" />

        {/* Outer traveling dot */}
        <div className="ls-planet ls-planet--outer">
          <span className="ls-planet__dot ls-planet__dot--blue" />
        </div>

        {/* Inner traveling dot */}
        <div className="ls-planet ls-planet--inner">
          <span className="ls-planet__dot ls-planet__dot--purple" />
        </div>

        {/* Centre glow */}
        <div className="ls-center-glow" />

        {/* Logo at center */}
        <img
          src={uehLogo}
          alt="T-Nexus"
          className="ls-logo"
        />
      </div>

      {/* ── Loading dots ── */}
      <div className="flex items-center gap-1.5 z-10">
        <span className="loading-dot w-1.5 h-1.5 rounded-full bg-primary" style={{ animationDelay: '0s' }} />
        <span className="loading-dot w-1.5 h-1.5 rounded-full bg-primary" style={{ animationDelay: '0.15s' }} />
        <span className="loading-dot w-1.5 h-1.5 rounded-full bg-primary" style={{ animationDelay: '0.3s' }} />
      </div>

      {/* ── Message ── */}
      <p className="text-sm font-medium loading-text z-10 text-muted-foreground">{message}</p>

      {/* ── Tip ── */}
      {showTip && (
        <div className="max-w-xs text-center loading-tip z-10">
          <p className="text-xs leading-relaxed text-muted-foreground/70">{tip}</p>
        </div>
      )}

      {/* ── Scoped styles ── */}
      <style>{`
        /* ====== Nebula background glows ====== */
        .ls-nebula {
          position: absolute;
          border-radius: 9999px;
          pointer-events: none;
          filter: blur(70px);
          z-index: 0;
        }
        .ls-nebula--primary {
          width: 260px; height: 260px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, hsl(var(--primary) / 0.03) 0%, transparent 70%);
          animation: ls-nebula-breathe 6s ease-in-out infinite;
        }
        .ls-nebula--accent {
          width: 200px; height: 200px;
          top: 48%; left: 45%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, hsl(272 64% 69% / 0.02) 0%, transparent 70%);
          animation: ls-nebula-breathe 8s ease-in-out 1s infinite;
        }
        @keyframes ls-nebula-breathe {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 0.5;   transform: translate(-50%, -50%) scale(1.12); }
        }

        /* ====== Universe container (compact) ====== */
        .ls-universe {
          position: relative;
          width: 140px; height: 140px;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ====== Orbit rings ====== */
        .ls-orbit {
          position: absolute;
          border-radius: 9999px;
          border: 1px solid;
        }
        .ls-orbit--outer {
          inset: 0;
          border-color: hsl(var(--primary) / 0.18);
          animation: ls-orbit-pulse 5s ease-in-out infinite;
        }
        .ls-orbit--inner {
          inset: 12px;
          border-color: hsl(272 64% 69% / 0.15);
          animation: ls-orbit-pulse-inner 7s ease-in-out infinite;
        }

        @keyframes ls-orbit-pulse {
          0%, 100% {
            opacity: 0.7;
            box-shadow: 0 0 24px 3px hsl(var(--primary) / 0.08),
                        inset 0 0 24px 3px hsl(var(--primary) / 0.04);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 40px 6px hsl(var(--primary) / 0.16),
                        inset 0 0 40px 6px hsl(var(--primary) / 0.08);
          }
        }
        @keyframes ls-orbit-pulse-inner {
          0%, 100% {
            opacity: 0.6;
            box-shadow: 0 0 30px 3px hsl(272 64% 69% / 0.06),
                        inset 0 0 30px 3px hsl(272 64% 69% / 0.03);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 50px 6px hsl(272 64% 69% / 0.14),
                        inset 0 0 50px 6px hsl(272 64% 69% / 0.07);
          }
        }

        /* ====== Planet dots ====== */
        .ls-planet {
          position: absolute;
          top: 50%; left: 50%;
          width: 0; height: 0;
        }
        .ls-planet--outer {
          animation: ls-travel-outer 12s linear infinite;
        }
        .ls-planet--inner {
          animation: ls-travel-inner 16s linear infinite reverse;
        }

        .ls-planet__dot {
          display: block;
          border-radius: 9999px;
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .ls-planet__dot--blue {
          width: 7px; height: 7px;
          background: hsl(var(--primary));
          box-shadow: 0 0 10px 3px hsl(var(--primary) / 0.4);
        }
        .ls-planet__dot--purple {
          width: 5px; height: 5px;
          background: hsl(272 64% 69%);
          box-shadow: 0 0 8px 3px hsl(272 64% 69% / 0.35);
        }

        /* Outer dot: radius = 70px (half of 140px) */
        @keyframes ls-travel-outer {
          from { transform: rotate(0deg)   translateX(70px) rotate(0deg);   }
          to   { transform: rotate(360deg) translateX(70px) rotate(-360deg); }
        }
        /* Inner dot: radius = 58px (70 - 12) */
        @keyframes ls-travel-inner {
          from { transform: rotate(0deg)   translateX(58px) rotate(0deg);   }
          to   { transform: rotate(360deg) translateX(58px) rotate(-360deg); }
        }

        /* ====== Centre glow ====== */
        .ls-center-glow {
          position: absolute;
          width: 64px; height: 64px;
          border-radius: 9999px;
          background: radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 70%);
          animation: ls-center-breathe 3s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes ls-center-breathe {
          0%, 100% { transform: scale(1);   opacity: 0.4; }
          50%      { transform: scale(1.2); opacity: 0.7; }
        }

        /* ====== Logo ====== */
        .ls-logo {
          position: relative;
          width: 44px; height: 44px;
          object-fit: contain;
          z-index: 2;
          animation: ls-logo-pulse 2.5s ease-in-out infinite;
        }
        @keyframes ls-logo-pulse {
          0%, 100% { transform: scale(1);    opacity: 0.9; }
          50%      { transform: scale(1.08); opacity: 1;   }
        }

        /* ====== Reduced motion ====== */
        @media (prefers-reduced-motion: reduce) {
          .ls-nebula,
          .ls-orbit,
          .ls-planet,
          .ls-center-glow,
          .ls-logo {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
