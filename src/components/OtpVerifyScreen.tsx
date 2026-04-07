import { useState, useEffect, useCallback } from 'react';
import { Mail, Clock, RotateCcw, CheckCircle2, ShieldAlert, Loader2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface OtpVerifyScreenProps {
  email: string;
  userId: string;
  fullName: string;
  studentId: string;
  onVerified: () => void;
  onBack: () => void;
}

const OTP_EXPIRY_SECONDS = 5 * 60;
const RESEND_COOLDOWN = 60;

export function OtpVerifyScreen({ email, userId, fullName, studentId, onVerified, onBack }: OtpVerifyScreenProps) {
  const { toast } = useToast();
  const [otpValue, setOtpValue] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [countdown, setCountdown] = useState(OTP_EXPIRY_SECONDS);
  const [resendCooldown, setResendCooldown] = useState(RESEND_COOLDOWN);

  // Expiry countdown
  useEffect(() => {
    if (isVerified || countdown <= 0) return;
    const t = setInterval(() => setCountdown(c => c - 1), 1000);
    return () => clearInterval(t);
  }, [isVerified, countdown]);

  // Resend cooldown
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const t = setInterval(() => setResendCooldown(c => c - 1), 1000);
    return () => clearInterval(t);
  }, [resendCooldown]);

  const handleVerify = useCallback(async (code: string) => {
    if (code.length !== 6 || isVerifying) return;
    setIsVerifying(true);
    setErrorMsg('');

    try {
      const { data, error } = await supabase.functions.invoke('signup-email-otp', {
        body: { action: 'verify_code', email, user_id: userId, code },
      });

      if (error || !data?.success) {
        const msg = data?.error || error?.message || 'Xác minh thất bại';
        setErrorMsg(msg);
        if (data?.max_attempts) {
          setCountdown(0);
        }
        setOtpValue('');
      } else {
        setIsVerified(true);
        toast({ title: '🎉 Xác minh thành công!', description: 'Email của bạn đã được xác minh.' });
      }
    } catch {
      setErrorMsg('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setIsVerifying(false);
    }
  }, [email, userId, isVerifying, toast]);

  const handleResend = useCallback(async () => {
    if (resendCooldown > 0 || isResending) return;
    setIsResending(true);
    setErrorMsg('');

    try {
      const { data, error } = await supabase.functions.invoke('signup-email-otp', {
        body: { action: 'resend_code', email, user_id: userId },
      });

      if (error || !data?.success) {
        const msg = data?.error || 'Gửi lại mã thất bại';
        toast({ title: 'Lỗi', description: msg, variant: 'destructive' });
      } else {
        setResendCooldown(RESEND_COOLDOWN);
        setCountdown(OTP_EXPIRY_SECONDS);
        setOtpValue('');
        toast({ title: 'Đã gửi lại mã', description: 'Mã OTP mới đã được gửi đến email của bạn.' });
      }
    } catch {
      toast({ title: 'Lỗi', description: 'Có lỗi xảy ra.', variant: 'destructive' });
    } finally {
      setIsResending(false);
    }
  }, [email, userId, resendCooldown, isResending, toast]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  if (isVerified) {
    return (
      <div className="text-center space-y-4 p-6">
        <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto ring-4 ring-emerald-200 dark:ring-emerald-800/40">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-heading font-bold text-emerald-700 dark:text-emerald-400">
            🎉 Xác minh email thành công!
          </h2>
          <p className="text-sm text-muted-foreground">
            Tài khoản của bạn đã được xác minh. Vui lòng chờ Admin duyệt hoặc đăng nhập ngay.
          </p>
        </div>
        <div className="bg-muted/50 rounded-lg p-3 text-left text-sm space-y-1">
          <p><span className="text-muted-foreground">Họ tên:</span> <span className="font-medium">{fullName}</span></p>
          <p><span className="text-muted-foreground">MSSV:</span> <span className="font-medium">{studentId}</span></p>
          <p><span className="text-muted-foreground">Email:</span> <span className="font-medium">{email}</span></p>
        </div>
        <Button className="w-full" onClick={onVerified}>
          → Đăng nhập ngay
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-5 p-6">
      <div className="text-center space-y-2">
        <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto">
          <Mail className="w-7 h-7 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-lg font-heading font-semibold">Xác minh email</h2>
        <p className="text-sm text-muted-foreground">
          Nhập mã 6 số đã gửi đến <span className="font-medium text-foreground">{email}</span>
        </p>
      </div>

      {/* Timer */}
      <div className="flex items-center justify-center gap-2 text-sm">
        <Clock className="w-4 h-4 text-muted-foreground" />
        {countdown > 0 ? (
          <span className="text-muted-foreground">Mã hết hạn sau <span className="font-semibold text-foreground">{formatTime(countdown)}</span></span>
        ) : (
          <span className="text-destructive font-medium">Mã đã hết hạn</span>
        )}
      </div>

      {/* OTP Input */}
      <div className="flex justify-center">
        <InputOTP
          maxLength={6}
          value={otpValue}
          onChange={(val) => {
            setOtpValue(val);
            setErrorMsg('');
            if (val.length === 6) {
              handleVerify(val);
            }
          }}
          disabled={isVerifying || countdown <= 0}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      {/* Error */}
      {errorMsg && (
        <div className="flex items-center gap-2 justify-center text-sm text-destructive">
          <ShieldAlert className="w-4 h-4" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Verifying spinner */}
      {isVerifying && (
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Đang xác minh...</span>
        </div>
      )}

      {/* Resend */}
      <div className="text-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleResend}
          disabled={resendCooldown > 0 || isResending}
          className="text-sm"
        >
          {isResending ? (
            <Loader2 className="w-4 h-4 mr-1 animate-spin" />
          ) : (
            <RotateCcw className="w-4 h-4 mr-1" />
          )}
          {resendCooldown > 0 ? `Gửi lại mã (${resendCooldown}s)` : 'Gửi lại mã'}
        </Button>
      </div>

      {/* Back */}
      <div className="text-center">
        <button
          type="button"
          className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          onClick={onBack}
        >
          <ArrowLeft className="w-3 h-3" /> Quay lại đăng ký
        </button>
      </div>
    </div>
  );
}
