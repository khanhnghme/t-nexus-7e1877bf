

## Kế hoạch: Chuyển toàn bộ xác thực Email sang OTP 6 số (Đăng ký + Quên mật khẩu)

### Hiện trạng

1. **Đăng ký**: Dùng Supabase confirmation link → `EmailVerifyScreen` polling `check-email-verified`
2. **Quên mật khẩu**: Dùng `supabase.auth.resetPasswordForEmail()` → gửi link → redirect `/reset-password` → đổi mật khẩu qua Supabase session
3. **Edge function `password-reset-otp`** đã tồn tại nhưng CHƯA được dùng trong UI (forgot flow vẫn dùng link)
4. **Bảng `password_reset_codes`** đã tồn tại trong DB

### Thay đổi

#### 1. Database Migration: Tạo bảng `email_verification_codes`
- Cấu trúc: `id`, `user_id`, `email`, `code` (6 số), `expires_at` (5 phút), `used`, `attempts` (max 5), `created_at`
- RLS: service role only (edge function truy cập)

#### 2. Edge Function mới: `signup-email-otp`
- **`send_code`**: Tạo OTP 6 số → lưu DB → gửi email qua Resend (đã có `RESEND_API_KEY`) từ `T-Nexus <noreply@t-nexus.io.vn>`
- **`verify_code`**: Kiểm tra OTP đúng + chưa hết hạn + chưa dùng + attempts < 5. Đúng → `admin.updateUserById(user_id, { email_confirm: true })`
- **`resend_code`**: Rate limit 60s, invalidate code cũ, tạo + gửi mã mới
- Email HTML chuyên nghiệp: logo T-Nexus, mã OTP nổi bật, cảnh báo 5 phút, không chia sẻ

#### 3. Cập nhật `password-reset-otp` Edge Function
- Thay đổi cách gửi email: dùng Resend API trực tiếp thay vì `enqueue_email` (đang lỗi vì dùng domain sai)
- From: `T-Nexus <noreply@t-nexus.io.vn>`
- Giữ nguyên logic 3 action: `send_code`, `verify_code`, `reset_password`

#### 4. Frontend: `OtpVerifyScreen.tsx` (thay thế `EmailVerifyScreen`)
- Dùng component `InputOTP` có sẵn (6 slot)
- Countdown 5 phút, số lần nhập sai còn lại (max 5)
- Nút "Gửi lại mã" với countdown 60s
- Verify thành công → hiển thị thông báo + nút đăng nhập

#### 5. Cập nhật `MemberAuthForm.tsx`
- **Đăng ký**: Sau signUp → gọi `signup-email-otp` send_code → hiện `OtpVerifyScreen` thay vì `EmailVerifyScreen`
- **Quên mật khẩu**: Thay `resetPasswordForEmail` bằng flow OTP 4 bước:
  - `input` → nhập MSSV + email
  - `otp` → nhập OTP 6 số (gọi `password-reset-otp` verify_code)
  - `newpass` → nhập mật khẩu mới (gọi `password-reset-otp` reset_password)
  - `done` → thành công
- Xóa thông báo "thao tác 100% trên máy tính" (không cần link nữa)

#### 6. Cập nhật `App.tsx`
- Xóa/giảm logic redirect `type=signup` confirmation link

#### 7. Config
- Thêm `[functions.signup-email-otp]` verify_jwt = false vào `supabase/config.toml`
- Thêm `[functions.password-reset-otp]` verify_jwt = false (nếu chưa có)

### Giữ nguyên
- Toàn bộ flow đăng nhập, auth context, roles, approval
- `ResetPassword.tsx` page (vẫn dùng cho recovery link nếu ai đó còn link cũ)
- `auto-confirm-user` edge function (dùng khi `requireVerification = false`)

### File thay đổi
1. **Migration SQL** — tạo bảng `email_verification_codes`
2. `supabase/functions/signup-email-otp/index.ts` — mới
3. `supabase/functions/password-reset-otp/index.ts` — sửa gửi email qua Resend
4. `supabase/config.toml` — thêm function configs
5. `src/components/OtpVerifyScreen.tsx` — mới
6. `src/components/MemberAuthForm.tsx` — cập nhật cả đăng ký + quên mật khẩu
7. `src/App.tsx` — cleanup confirmation link logic

