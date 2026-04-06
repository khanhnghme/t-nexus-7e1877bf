import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, Key } from 'lucide-react';

interface UserChangePasswordDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function UserChangePasswordDialog({ open, onOpenChange }: UserChangePasswordDialogProps) {
  const { toast } = useToast();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentPassword) {
      toast({
        title: 'Thiếu mật khẩu hiện tại',
        description: 'Vui lòng nhập mật khẩu hiện tại để xác nhận',
        variant: 'destructive',
      });
      return;
    }

    if (newPassword.length < 6) {
      toast({
        title: 'Mật khẩu quá ngắn',
        description: 'Mật khẩu mới phải có ít nhất 6 ký tự',
        variant: 'destructive',
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: 'Mật khẩu không khớp',
        description: 'Vui lòng nhập lại mật khẩu xác nhận',
        variant: 'destructive',
      });
      return;
    }

    if (currentPassword === newPassword) {
      toast({
        title: 'Mật khẩu trùng',
        description: 'Mật khẩu mới phải khác mật khẩu hiện tại',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    // Verify current password by re-signing in
    const { data: { user: currentUser } } = await supabase.auth.getUser();
    if (!currentUser?.email) {
      setIsLoading(false);
      toast({ title: 'Lỗi', description: 'Không tìm thấy thông tin tài khoản', variant: 'destructive' });
      return;
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: currentUser.email,
      password: currentPassword,
    });

    if (signInError) {
      setIsLoading(false);
      toast({
        title: 'Mật khẩu hiện tại không đúng',
        description: 'Vui lòng kiểm tra lại mật khẩu hiện tại của bạn',
        variant: 'destructive',
      });
      return;
    }

    // Update to new password
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    setIsLoading(false);

    if (error) {
      toast({
        title: 'Đổi mật khẩu thất bại',
        description: error.message || 'Có lỗi xảy ra',
        variant: 'destructive',
      });
      return;
    }

    // Save plain password for demo via edge function (bypasses RLS)
    if (currentUser) {
      supabase.functions.invoke('manage-users', {
        body: { action: 'save_demo_password', user_id: currentUser.id, password: newPassword },
      }).catch(err => console.warn('demo_passwords save failed:', err));
    }

    toast({
      title: 'Đổi mật khẩu thành công',
      description: 'Mật khẩu của bạn đã được cập nhật',
    });

    resetForm();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={(value) => {
      if (!value) resetForm();
      onOpenChange(value);
    }}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Key className="w-5 h-5" />
            Đổi mật khẩu
          </DialogTitle>
          <DialogDescription>
            Nhập mật khẩu hiện tại và mật khẩu mới để cập nhật tài khoản
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Mật khẩu hiện tại</Label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="currentPassword"
                type="password"
                placeholder="Nhập mật khẩu hiện tại"
                className="pl-10"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">Mật khẩu mới</Label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="newPassword"
                type="password"
                placeholder="Tối thiểu 6 ký tự"
                className="pl-10"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Xác nhận mật khẩu mới</Label>
            <div className="relative">
              <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Nhập lại mật khẩu mới"
                className="pl-10"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Hủy
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
              Đổi mật khẩu
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
