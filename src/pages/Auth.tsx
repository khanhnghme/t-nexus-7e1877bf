import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, AlertTriangle, ShieldAlert, Wrench } from 'lucide-react';
import { AuthForm } from '@/components/AuthForm';
import RememberLoginScreen from '@/components/RememberLoginScreen';
import { useAuth } from '@/contexts/AuthContext';
import LoadingScreen from '@/components/LoadingScreen';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

interface AuthBlockInfo {
  type: 'suspended' | 'maintenance';
  message?: string;
  endAt?: string | null;
  until?: string | null;
  reason?: string | null;
}

export default function Auth() {
  const { user, profile, roles, isLoading: authLoading, signOut } = useAuth();
  const [blockInfo, setBlockInfo] = useState<AuthBlockInfo | null>(null);

  // Read block info from sessionStorage (set by AuthContext before sign-out)
  useEffect(() => {
    const raw = sessionStorage.getItem('t-nexus_auth_block');
    if (raw) {
      try {
        setBlockInfo(JSON.parse(raw));
      } catch {}
      sessionStorage.removeItem('t-nexus_auth_block');
    }
  }, []);

  if (authLoading) return <LoadingScreen message="Đang kiểm tra hệ thống..." />;

  const hasRememberFlag = localStorage.getItem('t-nexus_remember_login') === 'true';
  const isSignupOtpFlow = sessionStorage.getItem('t-nexus_signup_otp_flow') === 'true';
  if (user && profile && profile.is_approved && hasRememberFlag && !isSignupOtpFlow) {
    return (
      <RememberLoginScreen
        profile={profile}
        roles={roles}
        onLogout={async () => {
          await signOut();
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      {/* Header */}
      <header className="bg-card border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Trang chủ
            </Button>
          </Link>
          <span className="hidden sm:inline font-heading text-sm text-muted-foreground">
            T-Nexus
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 overflow-y-auto flex flex-col items-center justify-start sm:justify-center p-4 gap-4">
        {/* Block banner */}
        {blockInfo && (
          <div className="w-full max-w-md">
            <div className={`flex items-start gap-3 rounded-lg border p-4 text-sm ${
              blockInfo.type === 'maintenance'
                ? 'border-yellow-500/30 bg-yellow-500/10 text-yellow-200'
                : 'border-destructive/30 bg-destructive/10 text-destructive'
            }`}>
              {blockInfo.type === 'maintenance' ? (
                <Wrench className="w-5 h-5 mt-0.5 shrink-0" />
              ) : (
                <ShieldAlert className="w-5 h-5 mt-0.5 shrink-0" />
              )}
              <div className="space-y-1">
                {blockInfo.type === 'maintenance' ? (
                  <>
                    <p className="font-semibold">Hệ thống đang bảo trì</p>
                    <p className="text-xs opacity-80">{blockInfo.message || 'Vui lòng quay lại sau.'}</p>
                    {blockInfo.endAt && (
                      <p className="text-xs opacity-60">
                        Dự kiến hoàn tất: {format(new Date(blockInfo.endAt), 'HH:mm dd/MM/yyyy', { locale: vi })}
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <p className="font-semibold">Tài khoản đã bị tạm khóa</p>
                    {blockInfo.until && (
                      <p className="text-xs opacity-80">
                        Đến: {format(new Date(blockInfo.until), 'HH:mm dd/MM/yyyy', { locale: vi })}
                      </p>
                    )}
                    {blockInfo.reason && (
                      <p className="text-xs opacity-60">Lý do: {blockInfo.reason}</p>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        <AuthForm />
      </main>

      {/* Footer */}
      <footer className="border-t py-4 text-center text-sm text-muted-foreground bg-card">
        © 2025 T-Nexus
      </footer>
    </div>
  );
}