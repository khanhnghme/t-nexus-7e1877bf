import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Download, CheckCircle2, Share, Smartphone, Info } from 'lucide-react';
import tNexusLogo from '@/assets/t-nexus-logo.png';
import tNexusText from '@/assets/t-nexus-text.png';

export default function DownloadPage() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showManual, setShowManual] = useState(false);

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsStandalone(true);
      setIsInstalled(true);
    }

    const handler = (e: Event) => {
      e.preventDefault();
      (window as any).__pwaInstallPrompt = e;
    };
    window.addEventListener('beforeinstallprompt', handler);

    const installedHandler = () => {
      setIsInstalled(true);
      (window as any).__pwaInstallPrompt = null;
    };
    window.addEventListener('appinstalled', installedHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('appinstalled', installedHandler);
    };
  }, []);

  const handleInstall = async () => {
    const prompt = (window as any).__pwaInstallPrompt;
    if (prompt) {
      prompt.prompt();
      const { outcome } = await prompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
        (window as any).__pwaInstallPrompt = null;
      }
    } else {
      // No native prompt available → show manual instructions
      setShowManual(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Trang chủ</span>
          </Link>
          <div className="flex items-center gap-2.5">
            <img src={tNexusLogo} alt="T-Nexus" className="h-7 w-7" />
            <img src={tNexusText} alt="T-Nexus" className="h-4 w-auto hidden sm:block" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-20 max-w-lg">
        <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <img src={tNexusText} alt="T-Nexus" className="h-20 md:h-24 w-auto mx-auto mb-5" />
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Cài đặt ứng dụng trực tiếp từ trình duyệt
          </p>
        </div>

        {/* Main install card */}
        <div className="rounded-xl border border-border bg-card p-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
          {isStandalone ? (
            <div className="text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Bạn đang sử dụng ứng dụng</h2>
              <p className="text-sm text-muted-foreground">
                T-Nexus đã được cài đặt và đang chạy ở chế độ ứng dụng.
              </p>
            </div>
          ) : isInstalled ? (
            <div className="text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">Đã cài đặt thành công!</h2>
              <p className="text-sm text-muted-foreground">
                T-Nexus đã xuất hiện trên màn hình chính / desktop của bạn.
              </p>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Download className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-1">Cài đặt ứng dụng</h2>
                <p className="text-sm text-muted-foreground">
                  Cài T-Nexus như một ứng dụng trên thiết bị của bạn. Không cần tải file, không cần cửa hàng ứng dụng.
                </p>
              </div>

              {!showManual && (
                <Button onClick={handleInstall} size="lg" className="w-full gap-2 rounded-lg font-medium">
                  <Download className="w-4 h-4" /> Cài đặt ngay
                </Button>
              )}

              <div className="flex items-center gap-2 text-[11px] text-muted-foreground/60 justify-center">
                <Badge variant="secondary" className="text-[10px] gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Miễn phí
                </Badge>
                <span>•</span>
                <span>Nhẹ, không chiếm dung lượng</span>
              </div>

              {/* Manual instructions — only shown after clicking install when no native prompt */}
              {showManual && (
                <div className="mt-2 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-4 text-left space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="flex items-center gap-2 text-sm font-semibold text-amber-800 dark:text-amber-300">
                    <Info className="w-4 h-4 shrink-0" />
                    Cài đặt thủ công
                  </div>
                  <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                    Trình duyệt chưa hỗ trợ cài tự động. Vui lòng làm theo hướng dẫn:
                  </p>
                  {isIOS ? (
                    <ol className="text-xs text-amber-700 dark:text-amber-400 space-y-1.5 list-decimal list-inside leading-relaxed">
                      <li>Nhấn nút <Share className="w-3 h-3 inline -mt-0.5" /> <strong>Chia sẻ</strong> ở thanh dưới Safari</li>
                      <li>Chọn <strong>"Thêm vào Màn hình chính"</strong></li>
                      <li>Nhấn <strong>"Thêm"</strong> để xác nhận</li>
                    </ol>
                  ) : (
                    <ol className="text-xs text-amber-700 dark:text-amber-400 space-y-1.5 list-decimal list-inside leading-relaxed">
                      <li>Nhấn biểu tượng <strong>⋮</strong> (menu) góc phải trên Chrome/Edge</li>
                      <li>Chọn <strong>"Cài đặt ứng dụng"</strong> hoặc <strong>"Thêm vào Màn hình chính"</strong></li>
                      <li>Nhấn <strong>"Cài đặt"</strong> để hoàn tất</li>
                    </ol>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-14 text-xs text-muted-foreground/50">
          <p>© 2025 T-Nexus · Bạn cần hỗ trợ? Liên hệ quản trị viên.</p>
        </div>
      </main>
    </div>
  );
}
