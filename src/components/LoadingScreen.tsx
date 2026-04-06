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
      {/* Logo with orbit ring */}
      <div className="relative w-24 h-24 flex items-center justify-center z-10">
        <div className="absolute inset-0 rounded-full border-2 loading-orbit border-primary/20" />
        <div className="absolute inset-0 loading-orbit">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full shadow-md bg-primary shadow-primary/30" />
        </div>
        <div className="absolute inset-[-6px] rounded-full border loading-orbit-reverse border-accent/15" />
        <div className="absolute inset-[-6px] loading-orbit-reverse">
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-accent/60" />
        </div>
        <img
          src={uehLogo}
          alt="ETT"
          className="w-12 h-12 object-contain loading-logo-pulse"
        />
      </div>

      <div className="flex items-center gap-1.5 z-10">
        <span className="loading-dot w-1.5 h-1.5 rounded-full bg-primary" style={{ animationDelay: '0s' }} />
        <span className="loading-dot w-1.5 h-1.5 rounded-full bg-primary" style={{ animationDelay: '0.15s' }} />
        <span className="loading-dot w-1.5 h-1.5 rounded-full bg-primary" style={{ animationDelay: '0.3s' }} />
      </div>

      <p className="text-sm font-medium loading-text z-10 text-muted-foreground">{message}</p>

      {showTip && (
        <div className="max-w-xs text-center loading-tip z-10">
          <p className="text-xs leading-relaxed text-muted-foreground/70">{tip}</p>
        </div>
      )}
    </div>
  );
}
