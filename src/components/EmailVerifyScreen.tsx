import { useState, useEffect, useCallback } from 'react';
import { Mail, Clock, AlertTriangle, ArrowRight, RotateCcw, CheckCircle2, Search, MousePointerClick, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

interface EmailVerifyScreenProps {
  regStudentId: string;
  regFullName: string;
  regEmail: string;
  userId: string;
  onRegisterAgain: () => void;
}

const VERIFY_TIMEOUT_SECONDS = 15 * 60; // 15 minutes

export function EmailVerifyScreen({ regStudentId, regFullName, regEmail, userId, onRegisterAgain }: EmailVerifyScreenProps) {
  const [countdown, setCountdown] = useState(VERIFY_TIMEOUT_SECONDS);
  const [isVerified, setIsVerified] = useState(false);

  // Poll edge function to detect verification (no session needed)
  useEffect(() => {
    if (!userId) return;
    const interval = setInterval(async () => {
      try {
        const { data, error } = await supabase.functions.invoke('check-email-verified', {
          body: { user_id: userId },
        });
        if (!error && data?.verified) {
          setIsVerified(true);
          clearInterval(interval);
        }
      } catch {}
    }, 5000);
    return () => clearInterval(interval);
  }, [userId]);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setInterval(() => setCountdown(prev => Math.max(0, prev - 1)), 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  const isExpired = countdown <= 0;
  const isUrgent = countdown > 0 && countdown < 5 * 60;
  const progress = ((VERIFY_TIMEOUT_SECONDS - countdown) / VERIFY_TIMEOUT_SECONDS) * 100;

  const steps = [
    { icon: Mail, text: 'Mở hộp thư email của bạn' },
    { icon: Search, text: 'Tìm thư xác thực từ T-Nexus' },
    { icon: MousePointerClick, text: 'Nhấp vào nút "Xác nhận Email"' },
  ];

  // Show verified success screen
  if (isVerified) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-8 space-y-6 text-center">
        <div className="w-24 h-24 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center ring-4 ring-emerald-200 dark:ring-emerald-800/40 animate-bounce" style={{ animationDuration: '2s' }}>
          <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-heading font-bold text-emerald-700 dark:text-emerald-400 flex items-center justify-center gap-2">
            <PartyPopper className="w-6 h-6" /> Xác thực thành công!
          </h2>
          <p className="text-sm text-muted-foreground">
            Email <strong className="text-foreground">{regEmail}</strong> đã được xác thực.
          </p>
        </div>
        <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 rounded-lg p-4 text-sm space-y-1.5 w-full max-w-xs">
          <div className="flex justify-between"><span className="text-muted-foreground">MSSV</span><span className="font-semibold">{regStudentId}</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Họ tên</span><span className="font-semibold truncate ml-2">{regFullName}</span></div>
        </div>
        <Button className="w-full max-w-xs" onClick={() => {
          onRegisterAgain();
        }}>
          → Đăng nhập ngay
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-[400px] md:aspect-video overflow-hidden rounded-xl">
      {/* Left Panel - Visual */}
      <div className={`w-full md:w-2/5 flex flex-col items-center justify-center p-8 relative transition-colors duration-500 ${
        isExpired
          ? 'bg-destructive/10'
          : isUrgent
            ? 'bg-gradient-to-br from-amber-50 to-red-50 dark:from-amber-950/30 dark:to-red-950/30'
            : 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30'
      }`}>
        {/* Mail Icon with pulse */}
        <div className={`relative mb-6 ${!isExpired ? 'animate-bounce' : ''}`} style={{ animationDuration: '3s' }}>
          <div className={`w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg ${
            isExpired
              ? 'bg-destructive/20'
              : 'bg-gradient-to-br from-blue-500 to-cyan-500'
          }`}>
            {isExpired ? (
              <AlertTriangle className="w-12 h-12 text-destructive" />
            ) : (
              <Mail className="w-12 h-12 text-white" />
            )}
          </div>
          {!isExpired && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
            </div>
          )}
        </div>

        {/* Countdown */}
        {isExpired ? (
          <div className="text-center space-y-2">
            <p className="text-lg font-bold text-destructive">Đã hết hạn!</p>
            <p className="text-xs text-muted-foreground">Link xác thực không còn hiệu lực</p>
          </div>
        ) : (
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2">
              <Clock className={`w-5 h-5 ${isUrgent ? 'text-destructive animate-pulse' : 'text-blue-600 dark:text-blue-400'}`} />
              <span className={`text-3xl font-mono font-bold tabular-nums tracking-wider ${
                isUrgent ? 'text-destructive' : 'text-blue-600 dark:text-blue-400'
              }`}>
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Thời gian còn lại để xác thực</p>
            {/* Progress bar */}
            <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden mx-auto">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${
                  isUrgent ? 'bg-destructive' : 'bg-blue-500'
                }`}
                style={{ width: `${100 - progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Account info compact */}
        <div className="mt-6 w-full max-w-[240px] bg-background/60 backdrop-blur rounded-lg p-3 text-xs space-y-1.5 border border-border/50">
          <div className="flex justify-between">
            <span className="text-muted-foreground">MSSV</span>
            <span className="font-semibold">{regStudentId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Họ tên</span>
            <span className="font-semibold truncate ml-2">{regFullName}</span>
          </div>
        </div>
      </div>

      {/* Right Panel - Content */}
      <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center space-y-5">
        <div>
          <h2 className="text-xl font-heading font-bold mb-1">Xác thực email của bạn</h2>
          <p className="text-sm text-muted-foreground">
            Link xác thực đã được gửi đến{' '}
            <strong className="text-foreground break-all">{regEmail}</strong>
          </p>
        </div>

        {/* Warning */}
        <div className="flex items-start gap-2.5 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 rounded-lg p-3">
          <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" />
          <p className="text-xs text-amber-800 dark:text-amber-300">
            Nếu không xác thực trong vòng <strong>15 phút</strong>, tài khoản sẽ bị xoá tự động. Vui lòng kiểm tra cả thư mục <strong>Spam / Junk</strong>.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-3">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Hướng dẫn xác thực</p>
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <s.icon className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-muted-foreground w-5">{i + 1}.</span>
                <span className="text-sm">{s.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          {!isExpired && (
            <Button
              className="flex-1"
              onClick={() => {
                const domain = regEmail.split('@')[1]?.toLowerCase();
                const webmailUrls: Record<string, string> = {
                  'gmail.com': 'https://mail.google.com',
                  'googlemail.com': 'https://mail.google.com',
                  'outlook.com': 'https://outlook.live.com',
                  'hotmail.com': 'https://outlook.live.com',
                  'yahoo.com': 'https://mail.yahoo.com',
                  'protonmail.com': 'https://mail.proton.me',
                  'proton.me': 'https://mail.proton.me',
                  'icloud.com': 'https://www.icloud.com/mail',
                };
                const url = webmailUrls[domain] || `https://${domain}`;
                window.open(url, '_blank');
              }}
            >
              <Mail className="w-4 h-4 mr-1.5" /> Mở hộp thư email <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          )}
          {isExpired && (
            <Button className="flex-1" onClick={onRegisterAgain}>
              <RotateCcw className="w-4 h-4 mr-1.5" /> Đăng ký lại
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
