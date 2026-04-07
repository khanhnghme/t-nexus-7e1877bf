

## Xóa PostLoginBlockScreen + LoginTransitionScreen — hiển thị thông báo nhỏ trên trang Auth

### Thay đổi

**1. Xóa 3 file**
- `src/components/PostLoginBlockScreen.tsx` (675 dòng)
- `src/components/LoginTransitionScreen.tsx`
- `src/hooks/useDashboardPreloader.ts`

**2. Sửa `src/contexts/AuthContext.tsx`**
- Xóa import `PostLoginBlockScreen`
- Xóa 2 block render `PostLoginBlockScreen` (maintenance + suspended) ở cuối provider
- Thêm `isSuspended` và `maintenanceMode` + `maintenanceMessage` vào context value để các component con có thể đọc
- Khi user bị suspended hoặc maintenance → tự động `signOut()` và redirect về `/auth`

**3. Sửa `src/pages/Auth.tsx`**
- Đọc thêm `isSuspended`, `maintenanceMode`, `maintenanceMessage` từ context (hoặc từ sessionStorage flag set trước khi signOut)
- Hiển thị 1 dòng Alert nhỏ (banner cảnh báo) ngay trên form đăng nhập:
  - Suspended: "Tài khoản của bạn đang bị tạm khóa đến [ngày]. Lý do: ..."
  - Maintenance: "Hệ thống đang bảo trì. Vui lòng quay lại sau."

**4. Sửa `src/pages/Dashboard.tsx`**
- Xóa import `getDashboardPreloadCache` / `clearDashboardPreloadCache` và logic sử dụng

### Luồng mới
- User bị khóa/bảo trì → AuthContext tự sign out → redirect `/auth` → hiển thị banner thông báo nhỏ
- Không còn màn hình chặn toàn trang nào

