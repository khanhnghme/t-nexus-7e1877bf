

## Kế hoạch: Tinh chỉnh Landing page sát Notion hơn

### Vấn đề phát hiện (từ screenshot so sánh)

1. **Chữ quá to**: Hero h1 đang `96px` — Notion chỉ khoảng `64-72px`. Section headings đang `52px` — Notion khoảng `40-44px`. Card titles đang `24px` — nên giảm còn `20px`.
2. **Chữ rớt hàng nhiều**: Do font-size quá lớn, chữ bị wrap xuống hàng. Notion giữ heading trên 1-2 dòng max. Cần giảm font-size + tăng max-width.
3. **"Get T-Nexus free" button quá tối**: Nút CTA trên header đang dùng trắng trên nền tối → khó nhìn. Notion dùng nút xanh dương nổi bật. Đổi sang `--landing-blue` background.
4. **Resources icon bay lỗi**: Đang ở `right-[14%] top-[3%]` → chồng lên header. Chuyển sang trái, đặt dưới "AI Assistant" (`left-[2%] top-[52%]`).
5. **Ảnh trong card quá to/thô**: Aspect ratio `5/3` quá lớn. Notion dùng ảnh nhỏ gọn hơn, khoảng `aspect-[16/9]` với max-height giới hạn. Giảm kích thước ảnh + thêm max-height.
6. **Product Workspace — ảnh chồng lên chữ**: Wide cards có `h-[17rem] md:h-[22rem]` nhưng ảnh absolute tràn lên text. Cần tăng spacing giữa text và ảnh area, hoặc dùng layout khác (ảnh bên phải thay vì chồng).

### Thay đổi cụ thể trong `src/pages/Landing.tsx`

**a) Hero h1**: `text-[96px]` → `text-[72px]`, `sm:text-[68px]` → `sm:text-[56px]`, `text-[50px]` → `text-[42px]`

**b) Section headings**: `md:text-[52px]` → `md:text-[42px]`, `text-[34px]` → `text-[28px]`

**c) Card titles**: `text-[24px]` → `text-[20px]`

**d) Subtitle text**: `text-[18px] md:text-[20px]` → `text-[16px] md:text-[18px]`

**e) CTA button (header + hero)**: Background color from `--landing-hero-foreground` (white) to `--landing-blue` (xanh dương sáng). Text color vẫn trắng.

**f) Resources signal**: Đổi `positionClass` từ `right-[14%] top-[3%]` sang `left-[2%] top-[52%]` (bên trái, dưới AI Assistant)

**g) Card images**: Thay `aspect-[5/3]` bằng `aspect-[16/9] max-h-[220px]` cho single cards. Wide cards: tăng container height hoặc chuyển sang layout flex row thay vì absolute positioning.

**h) Wide card layout fix**: Thay absolute images bằng flex layout `flex-row` với ảnh chiếm 60% width, tránh overlap text.

**i) Description text**: `text-[15px] leading-7` → `text-[14px] leading-6` cho gọn hơn.

### File thay đổi
- `src/pages/Landing.tsx` — tất cả typography, positioning, button color, card layout

