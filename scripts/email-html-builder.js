"use strict";
/**
 * Shared branded email HTML builder for T-Nexus
 * Used by signup-email-otp, password-reset-otp, and email-digest edge functions
 *
 * Design: Minimalist, all white background, single blue accent color.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildBrandedOtpEmail = buildBrandedOtpEmail;
exports.buildBrandedDigestEmail = buildBrandedDigestEmail;
// ─── Brand Tokens ────────────────────────────────────────────────────────
const BRAND = {
    primary: "#2563eb", // A clean, modern light blue
    bg: "#ffffff",
    card: "#ffffff",
    text: "#111827",
    textSoft: "#4b5563",
    muted: "#6b7280",
    subtle: "#9ca3af",
    border: "#e5e7eb",
    borderSoft: "#f3f4f6",
};
const LOGO_URL = "https://t-nexus.io.vn/lovable-uploads/f2f37fb6-e870-4731-8f1b-75fc2da9d498.png";
const SITE_URL = "https://t-nexus.io.vn";
// ─── Shared Layout Parts ─────────────────────────────────────────────────
function emailDoctype() {
    return `<!DOCTYPE html>
<html lang="vi" dir="ltr" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <style>
    * { box-sizing: border-box; }
    body, table, td, p, a, li { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    @media only screen and (max-width: 600px) {
      .email-container { width: 100% !important; max-width: 100% !important; border-radius: 0 !important; border: none !important; }
      .email-padding { padding-left: 24px !important; padding-right: 24px !important; }
      .otp-digit { width: 44px !important; height: 56px !important; font-size: 24px !important; }
    }
  </style>`;
}
function emailHeader(subtitle) {
    return `
  <!-- Header -->
  <tr>
    <td style="padding:48px 40px 32px;text-align:center;">
      <table cellpadding="0" cellspacing="0" role="presentation" style="margin:0 auto;">
        <tr>
          <td style="padding-right:12px;vertical-align:middle;">
            <img src="${LOGO_URL}" alt="T-Nexus" width="32" height="32" style="display:block;border:0;border-radius:8px;" />
          </td>
          <td style="vertical-align:middle;">
            <span style="color:${BRAND.text};font-size:22px;font-weight:700;letter-spacing:-0.5px;font-family:system-ui,-apple-system,sans-serif;">T-Nexus</span>
          </td>
        </tr>
      </table>
      <p style="margin:16px 0 0;color:${BRAND.muted};font-size:15px;font-weight:400;font-family:system-ui,-apple-system,sans-serif;">
        ${subtitle}
      </p>
    </td>
  </tr>`;
}
function emailFooter(year) {
    return `
  <!-- Footer -->
  <tr>
    <td style="padding:0 40px;">
      <div style="height:1px;background-color:${BRAND.border};"></div>
    </td>
  </tr>
  <tr>
    <td style="padding:32px 40px;background-color:${BRAND.bg};">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td style="text-align:center;">
            <p style="margin:0 0 16px;color:${BRAND.subtle};font-size:13px;line-height:1.6;font-family:system-ui,-apple-system,sans-serif;">
              The night shift for your teamwork<br/>
              &copy; ${year} T-Nexus. All rights reserved.
            </p>
            <a href="${SITE_URL}" style="display:inline-block;color:${BRAND.primary};font-size:13px;font-weight:500;text-decoration:none;font-family:system-ui,-apple-system,sans-serif;">
              Truy cập t-nexus.io.vn &rarr;
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
}
function emailSubFooter() {
    return `
  <!-- Sub-footer -->
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:520px;margin:24px auto 0;">
    <tr>
      <td style="text-align:center;padding:0 24px;">
        <p style="margin:0;color:${BRAND.subtle};font-size:12px;line-height:1.6;font-family:system-ui,-apple-system,sans-serif;">
          Email này được gửi tự động từ hệ thống T-Nexus.<br/>
          Vui lòng không trả lời.
        </p>
      </td>
    </tr>
  </table>`;
}
function buildBrandedOtpEmail(options) {
    const { title, subtitle, otpCode, expiryText, warningText, ignoreText } = options;
    const year = new Date().getFullYear();
    const digits = otpCode.split("");
    const digitBoxes = digits
        .map((d) => `<td style="padding:0 4px;">
          <div class="otp-digit" style="width:48px;height:64px;background-color:${BRAND.card};border:1px solid ${BRAND.border};border-radius:8px;line-height:64px;text-align:center;font-size:28px;font-weight:600;color:${BRAND.primary};font-family:ui-monospace,monospace;">
            ${d}
          </div>
        </td>`)
        .join("");
    return `${emailDoctype()}
  <title>${title}</title>
</head>
<body style="margin:0;padding:24px 0;background-color:${BRAND.bg};font-family:system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:${BRAND.bg};">
    <tr><td align="center">

      <!-- Main Card -->
      <table class="email-container" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:520px;background-color:${BRAND.card};border:1px solid ${BRAND.border};border-radius:12px;margin:0 auto;">

        ${emailHeader(subtitle)}

        <!-- Body -->
        <tr>
          <td class="email-padding" style="padding:16px 40px 32px;">
            <!-- Title -->
            <h1 style="margin:0 0 12px;color:${BRAND.text};font-size:20px;font-weight:600;line-height:1.4;text-align:center;letter-spacing:-0.3px;">
              ${title}
            </h1>
            <p style="margin:0 0 32px;color:${BRAND.muted};font-size:15px;line-height:1.6;text-align:center;">
              ${expiryText}
            </p>

            <!-- OTP Code Digits -->
            <table cellpadding="0" cellspacing="0" role="presentation" style="margin:0 auto 24px;">
              <tr>
                ${digitBoxes}
              </tr>
            </table>

            <!-- Copy hint -->
            <p style="margin:0 0 32px;color:${BRAND.subtle};font-size:13px;text-align:center;">
              Nhập mã trên vào ứng dụng để tiếp tục
            </p>

            <!-- Warning Box Minimal -->
            <div style="padding:16px 0;border-top:1px solid ${BRAND.border};border-bottom:1px solid ${BRAND.border};margin-bottom:24px;">
              <p style="margin:0;color:${BRAND.textSoft};font-size:14px;line-height:1.6;text-align:center;">
                ${warningText}
              </p>
            </div>

            <!-- Ignore text -->
            <p style="margin:0;color:${BRAND.subtle};font-size:13px;text-align:center;line-height:1.6;">
              ${ignoreText}
            </p>
          </td>
        </tr>

        ${emailFooter(year)}

      </table>

      ${emailSubFooter()}

    </td></tr>
  </table>
</body>
</html>`;
}
function buildBrandedDigestEmail(options) {
    const { recipientName, deadlineTasks, newTasks } = options;
    const year = new Date().getFullYear();
    let sectionsHtml = "";
    // Deadline tasks section
    if (deadlineTasks.length > 0) {
        let taskRows = "";
        for (const task of deadlineTasks) {
            const hoursText = task.hoursLeft !== undefined ?  : ;
            `Còn \${task.hoursLeft}h\` : "";

      taskRows += \`
        <tr>
          <td style="padding:16px 0;border-bottom:1px solid \${BRAND.borderSoft};">
            <p style="margin:0 0 4px;color:\${BRAND.text};font-size:15px;font-weight:500;line-height:1.4;">\${task.title}</p>
            <p style="margin:0;color:\${BRAND.muted};font-size:13px;line-height:1.4;">
              \${task.project}
              <span style="color:\${BRAND.primary};margin-left:8px;">\${hoursText}</span>
            </p>
          </td>
        </tr>\`;
    }

    sectionsHtml += \`
      <!-- Deadline Section -->
      <div style="margin-bottom:32px;">
        <h2 style="margin:0 0 8px;color:\${BRAND.text};font-size:16px;font-weight:600;">Deadline sắp hết <span style="font-weight:400;color:\${BRAND.muted};">(\${deadlineTasks.length})</span></h2>
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          \${taskRows}
        </table>
      </div>\`;
  }

  // New tasks section
  if (newTasks.length > 0) {
    let taskRows = "";
    for (const task of newTasks) {
      const deadlineStr = task.deadlineDisplay || "Chưa có hạn";

      taskRows += \`
        <tr>
          <td style="padding:16px 0;border-bottom:1px solid \${BRAND.borderSoft};">
            <p style="margin:0 0 4px;color:\${BRAND.text};font-size:15px;font-weight:500;line-height:1.4;">\${task.title}</p>
            <p style="margin:0;color:\${BRAND.muted};font-size:13px;line-height:1.4;">
              \${task.project}
              <span style="color:\${BRAND.subtle};margin-left:8px;">Hạn: \${deadlineStr}</span>
            </p>
          </td>
        </tr>\`;
    }

    sectionsHtml += \`
      <!-- New Tasks Section -->
      <div style="margin-bottom:32px;">
        <h2 style="margin:0 0 8px;color:\${BRAND.text};font-size:16px;font-weight:600;">Task mới được giao <span style="font-weight:400;color:\${BRAND.muted};">(\${newTasks.length})</span></h2>
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          \${taskRows}
        </table>
      </div>\`;
  }

  return \`\${emailDoctype()}
  <title>Cập nhật hàng ngày - T-Nexus</title>
</head>
<body style="margin:0;padding:24px 0;background-color:\${BRAND.bg};font-family:system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:\${BRAND.bg};">
    <tr><td align="center">

      <!-- Main Card -->
      <table class="email-container" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;background-color:\${BRAND.card};border:1px solid \${BRAND.border};border-radius:12px;margin:0 auto;">

        \${emailHeader("Cập nhật hoạt động dự án")}

        <!-- Body -->
        <tr>
          <td class="email-padding" style="padding:16px 40px 32px;">
            <!-- Greeting -->
            <h1 style="margin:0 0 12px;color:\${BRAND.text};font-size:20px;font-weight:600;line-height:1.4;letter-spacing:-0.3px;">
              Xin chào \${recipientName},
            </h1>
            <p style="margin:0 0 32px;color:\${BRAND.muted};font-size:15px;line-height:1.6;">
              Đây là tóm tắt các hoạt động cần chú ý của bạn trong ngày hôm nay.
            </p>

            \${sectionsHtml}

            <!-- CTA Details -->
            <div style="text-align:center;margin-top:40px;">
              <a href="\${SITE_URL}/dashboard" style="display:inline-block;background-color:\${BRAND.primary};color:#ffffff;font-size:14px;font-weight:500;text-decoration:none;padding:12px 28px;border-radius:6px;font-family:system-ui,-apple-system,sans-serif;">
                Đến T-Nexus
              </a>
            </div>
          </td>
        </tr>

        \${emailFooter(year)}

      </table>

      <!-- Sub-footer with unsubscribe -->
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;margin:24px auto 0;">
        <tr>
          <td style="text-align:center;padding:0 24px;">
            <p style="margin:0;color:\${BRAND.subtle};font-size:12px;line-height:1.6;font-family:system-ui,-apple-system,sans-serif;">
              Email tự động từ T-Nexus. Bạn có thể tắt thông báo này trong phần Thông tin cá nhân.
            </p>
          </td>
        </tr>
      </table>

    </td></tr>
  </table>
</body>
</html>\`;
}
            ;
        }
    }
}
