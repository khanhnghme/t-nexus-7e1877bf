/**
 * Shared branded email HTML builder for T-Nexus
 * Used by signup-email-otp, password-reset-otp, and email-digest edge functions
 *
 * Design: Premium, modern email templates with T-Nexus branding
 * - Separated OTP digit boxes
 * - Gradient header with logo
 * - Professional footer
 * - Responsive layout (mobile-first)
 */

// ─── Brand Tokens ────────────────────────────────────────────────────────
const BRAND = {
  primary:    "#2b4acb",
  primaryDk:  "#1e3a9f",
  teal:       "#006b6b",
  tealLight:  "#008f8f",
  tealSoft:   "#e6f5f5",
  bg:         "#f4f6f9",
  card:       "#ffffff",
  text:       "#1a1f2e",
  textSoft:   "#37415b",
  muted:      "#6b7280",
  subtle:     "#9ca3af",
  border:     "#e5e7eb",
  borderSoft: "#f0f1f3",
  danger:     "#dc2626",
  dangerBg:   "#fef2f2",
  dangerBorder: "#fecaca",
  warningBg:  "#fffbeb",
  warningBorder: "#fde68a",
  warningText:"#92400e",
  successBg:  "#f0fdf4",
  successBorder: "#bbf7d0",
  successText:"#166534",
} as const;

const LOGO_URL = "https://t-nexus.io.vn/lovable-uploads/f2f37fb6-e870-4731-8f1b-75fc2da9d498.png";
const SITE_URL = "https://t-nexus.io.vn";

// ─── Shared Layout Parts ─────────────────────────────────────────────────

function emailDoctype(): string {
  return `<!DOCTYPE html>
<html lang="vi" dir="ltr" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    * { box-sizing: border-box; }
    body, table, td, p, a, li { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    @media only screen and (max-width: 600px) {
      .email-container { width: 100% !important; max-width: 100% !important; }
      .email-padding { padding-left: 20px !important; padding-right: 20px !important; }
      .otp-digit { width: 42px !important; height: 52px !important; font-size: 24px !important; }
    }
  </style>`;
}

function emailHeader(subtitle: string): string {
  return `
  <!-- Header -->
  <tr>
    <td style="background:linear-gradient(135deg, ${BRAND.teal} 0%, ${BRAND.tealLight} 40%, ${BRAND.primary} 100%);padding:36px 40px 30px;text-align:center;">
      <table cellpadding="0" cellspacing="0" role="presentation" style="margin:0 auto;">
        <tr>
          <td style="padding-right:14px;vertical-align:middle;">
            <img src="${LOGO_URL}" alt="T-Nexus" width="40" height="40" style="display:block;border:0;border-radius:10px;" />
          </td>
          <td style="vertical-align:middle;">
            <span style="color:#ffffff;font-size:26px;font-weight:800;letter-spacing:-0.5px;font-family:'Segoe UI','Helvetica Neue',Arial,sans-serif;">T-Nexus</span>
          </td>
        </tr>
      </table>
      <p style="margin:10px 0 0;color:rgba(255,255,255,0.7);font-size:13px;font-weight:400;letter-spacing:0.3px;">
        ${subtitle}
      </p>
    </td>
  </tr>`;
}

function emailFooter(year: number): string {
  return `
  <!-- Footer -->
  <tr>
    <td style="padding:0;">
      <!-- Gradient divider -->
      <div style="height:3px;background:linear-gradient(90deg, ${BRAND.teal}, ${BRAND.tealLight}, ${BRAND.primary});"></div>
    </td>
  </tr>
  <tr>
    <td style="padding:24px 40px 20px;background-color:#fafbfc;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
          <td style="text-align:center;">
            <!-- Logo small -->
            <table cellpadding="0" cellspacing="0" role="presentation" style="margin:0 auto 12px;">
              <tr>
                <td style="padding-right:8px;vertical-align:middle;">
                  <img src="${LOGO_URL}" alt="" width="20" height="20" style="display:block;border:0;border-radius:5px;opacity:0.7;" />
                </td>
                <td style="vertical-align:middle;">
                  <span style="color:${BRAND.muted};font-size:13px;font-weight:700;letter-spacing:-0.3px;">T-Nexus</span>
                </td>
              </tr>
            </table>
            <p style="margin:0 0 4px;color:${BRAND.subtle};font-size:11px;line-height:1.6;">
              The night shift for your teamwork
            </p>
            <p style="margin:0 0 12px;color:${BRAND.subtle};font-size:10px;">
              &copy; ${year} T-Nexus. All rights reserved.
            </p>
            <!-- Website link -->
            <a href="${SITE_URL}" style="display:inline-block;color:${BRAND.teal};font-size:11px;font-weight:500;text-decoration:none;border:1px solid ${BRAND.border};border-radius:6px;padding:5px 14px;">
              t-nexus.io.vn
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>`;
}

function emailSubFooter(): string {
  return `
  <!-- Sub-footer -->
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:520px;margin-top:16px;">
    <tr>
      <td style="text-align:center;padding:0 20px;">
        <p style="margin:0;color:${BRAND.subtle};font-size:10px;line-height:1.6;">
          Email này được gửi tự động từ hệ thống T-Nexus.<br/>
          Vui lòng không trả lời email này.
        </p>
      </td>
    </tr>
  </table>`;
}

// ─── OTP Email Builder ───────────────────────────────────────────────────

interface EmailOptions {
  title: string;
  subtitle: string;
  otpCode: string;
  expiryText: string;
  warningText: string;
  ignoreText: string;
}

export function buildBrandedOtpEmail(options: EmailOptions): string {
  const { title, subtitle, otpCode, expiryText, warningText, ignoreText } = options;
  const year = new Date().getFullYear();
  const digits = otpCode.split("");

  const digitBoxes = digits
    .map(
      (d) =>
        `<td style="padding:0 3px;">
          <div style="width:48px;height:60px;background-color:${BRAND.card};border:2px solid ${BRAND.border};border-radius:12px;line-height:60px;text-align:center;font-size:28px;font-weight:800;color:${BRAND.teal};font-family:'Courier New',monospace;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
            ${d}
          </div>
        </td>`
    )
    .join("");

  return `${emailDoctype()}
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.bg};font-family:'Segoe UI','Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:${BRAND.bg};padding:32px 16px;">
    <tr><td align="center">

      <!-- Main Card -->
      <table class="email-container" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:520px;background-color:${BRAND.card};border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.08),0 1px 3px rgba(0,0,0,0.04);">

        ${emailHeader(subtitle)}

        <!-- Body -->
        <tr>
          <td class="email-padding" style="padding:36px 40px 12px;">
            <!-- Greeting icon -->
            <div style="text-align:center;margin-bottom:20px;">
              <div style="display:inline-block;width:56px;height:56px;line-height:56px;text-align:center;background:linear-gradient(135deg, ${BRAND.tealSoft} 0%, #e8edf5 100%);border-radius:16px;font-size:28px;">
                ${title.includes("Đặt lại") ? "🔑" : "✉️"}
              </div>
            </div>

            <!-- Title -->
            <h1 style="margin:0 0 8px;color:${BRAND.text};font-size:22px;font-weight:800;line-height:1.3;text-align:center;letter-spacing:-0.3px;">
              ${title}
            </h1>
            <p style="margin:0 0 28px;color:${BRAND.muted};font-size:14px;line-height:1.6;text-align:center;">
              ${expiryText}
            </p>

            <!-- OTP Code Digits -->
            <table cellpadding="0" cellspacing="0" role="presentation" style="margin:0 auto 8px;">
              <tr>
                ${digitBoxes}
              </tr>
            </table>

            <!-- Copy hint -->
            <p style="margin:0 0 28px;color:${BRAND.subtle};font-size:11px;text-align:center;letter-spacing:0.2px;">
              Nhập mã trên vào ứng dụng để tiếp tục
            </p>

            <!-- Divider -->
            <div style="height:1px;background:linear-gradient(to right, transparent, ${BRAND.border}, transparent);margin-bottom:20px;"></div>

            <!-- Warning Box -->
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:16px;">
              <tr>
                <td style="background-color:${BRAND.warningBg};border:1px solid ${BRAND.warningBorder};border-left:4px solid #f59e0b;border-radius:12px;padding:14px 18px;">
                  <table cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td style="vertical-align:top;padding-right:10px;width:24px;">
                        <div style="width:24px;height:24px;line-height:24px;text-align:center;background-color:#fef3c7;border-radius:6px;font-size:13px;">🔒</div>
                      </td>
                      <td>
                        <p style="margin:0;color:${BRAND.warningText};font-size:12px;line-height:1.6;font-weight:500;">
                          ${warningText}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Ignore text -->
            <p style="margin:0 0 8px;color:${BRAND.subtle};font-size:12px;text-align:center;line-height:1.5;">
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

// ─── Digest Email Builder ────────────────────────────────────────────────

interface DigestTask {
  title: string;
  project: string;
  deadline?: string;
  hoursLeft?: number;
  deadlineDisplay?: string;
}

interface DigestEmailOptions {
  recipientName: string;
  deadlineTasks: DigestTask[];
  newTasks: DigestTask[];
}

export function buildBrandedDigestEmail(options: DigestEmailOptions): string {
  const { recipientName, deadlineTasks, newTasks } = options;
  const year = new Date().getFullYear();

  let sectionsHtml = "";

  // Deadline tasks section
  if (deadlineTasks.length > 0) {
    let taskRows = "";
    for (const task of deadlineTasks) {
      const urgencyLabel = task.hoursLeft !== undefined
        ? (task.hoursLeft <= 6 ? "🔴" : task.hoursLeft <= 12 ? "🟠" : "🟡")
        : "⏰";
      const hoursText = task.hoursLeft !== undefined ? `còn ${task.hoursLeft}h` : "";

      taskRows += `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid ${BRAND.borderSoft};">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td style="vertical-align:top;width:28px;padding-right:10px;">
                  <div style="width:28px;height:28px;line-height:28px;text-align:center;background-color:${BRAND.dangerBg};border-radius:8px;font-size:13px;">${urgencyLabel}</div>
                </td>
                <td>
                  <p style="margin:0 0 2px;color:${BRAND.text};font-size:14px;font-weight:600;line-height:1.4;">${task.title}</p>
                  <p style="margin:0;color:${BRAND.muted};font-size:12px;line-height:1.4;">📁 ${task.project}${hoursText ? ` · ${hoursText}` : ""}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>`;
    }

    sectionsHtml += `
      <!-- Deadline Section -->
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:24px;">
        <tr>
          <td>
            <table cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:12px;">
              <tr>
                <td style="vertical-align:middle;padding-right:8px;">
                  <div style="width:28px;height:28px;line-height:28px;text-align:center;background-color:${BRAND.dangerBg};border-radius:8px;font-size:14px;">⏰</div>
                </td>
                <td style="vertical-align:middle;">
                  <span style="color:${BRAND.danger};font-size:15px;font-weight:700;">Deadline sắp hết</span>
                  <span style="color:${BRAND.muted};font-size:13px;font-weight:400;margin-left:6px;">(${deadlineTasks.length} task)</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background-color:${BRAND.card};border:1px solid ${BRAND.dangerBorder};border-left:4px solid ${BRAND.danger};border-radius:12px;overflow:hidden;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              ${taskRows}
            </table>
          </td>
        </tr>
      </table>`;
  }

  // New tasks section
  if (newTasks.length > 0) {
    let taskRows = "";
    for (const task of newTasks) {
      const deadlineStr = task.deadlineDisplay || "Chưa có";

      taskRows += `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid ${BRAND.borderSoft};">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td style="vertical-align:top;width:28px;padding-right:10px;">
                  <div style="width:28px;height:28px;line-height:28px;text-align:center;background-color:${BRAND.tealSoft};border-radius:8px;font-size:13px;">📋</div>
                </td>
                <td>
                  <p style="margin:0 0 2px;color:${BRAND.text};font-size:14px;font-weight:600;line-height:1.4;">${task.title}</p>
                  <p style="margin:0;color:${BRAND.muted};font-size:12px;line-height:1.4;">📁 ${task.project} · ⏰ ${deadlineStr}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>`;
    }

    sectionsHtml += `
      <!-- New Tasks Section -->
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:24px;">
        <tr>
          <td>
            <table cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:12px;">
              <tr>
                <td style="vertical-align:middle;padding-right:8px;">
                  <div style="width:28px;height:28px;line-height:28px;text-align:center;background-color:${BRAND.tealSoft};border-radius:8px;font-size:14px;">📋</div>
                </td>
                <td style="vertical-align:middle;">
                  <span style="color:${BRAND.teal};font-size:15px;font-weight:700;">Task mới được giao</span>
                  <span style="color:${BRAND.muted};font-size:13px;font-weight:400;margin-left:6px;">(${newTasks.length} task)</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background-color:${BRAND.card};border:1px solid ${BRAND.successBorder};border-left:4px solid ${BRAND.teal};border-radius:12px;overflow:hidden;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              ${taskRows}
            </table>
          </td>
        </tr>
      </table>`;
  }

  return `${emailDoctype()}
  <title>Cập nhật hàng ngày - T-Nexus</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.bg};font-family:'Segoe UI','Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:${BRAND.bg};padding:32px 16px;">
    <tr><td align="center">

      <!-- Main Card -->
      <table class="email-container" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;background-color:${BRAND.card};border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.08),0 1px 3px rgba(0,0,0,0.04);">

        ${emailHeader("Cập nhật hàng ngày từ dự án của bạn")}

        <!-- Body -->
        <tr>
          <td class="email-padding" style="padding:32px 40px 16px;">
            <!-- Greeting -->
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:24px;">
              <tr>
                <td>
                  <div style="display:inline-block;width:48px;height:48px;line-height:48px;text-align:center;background:linear-gradient(135deg, ${BRAND.tealSoft} 0%, #e8edf5 100%);border-radius:14px;font-size:24px;margin-bottom:14px;">📊</div>
                  <h1 style="margin:0 0 6px;color:${BRAND.text};font-size:20px;font-weight:800;line-height:1.3;letter-spacing:-0.3px;">
                    Xin chào ${recipientName},
                  </h1>
                  <p style="margin:0;color:${BRAND.muted};font-size:14px;line-height:1.5;">
                    Đây là tóm tắt hoạt động dự án hôm nay của bạn.
                  </p>
                </td>
              </tr>
            </table>

            <!-- Divider -->
            <div style="height:1px;background:linear-gradient(to right, transparent, ${BRAND.border}, transparent);margin-bottom:24px;"></div>

            ${sectionsHtml}

            <!-- Summary note -->
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td style="background-color:#f8fafc;border:1px solid ${BRAND.border};border-radius:12px;padding:14px 18px;text-align:center;">
                  <p style="margin:0;color:${BRAND.muted};font-size:13px;line-height:1.5;">
                    Truy cập hệ thống để xem chi tiết và cập nhật tiến độ.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        ${emailFooter(year)}

      </table>

      <!-- Sub-footer with unsubscribe -->
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;margin-top:16px;">
        <tr>
          <td style="text-align:center;padding:0 20px;">
            <p style="margin:0;color:${BRAND.subtle};font-size:10px;line-height:1.6;">
              Email tự động từ T-Nexus · Bạn có thể tắt trong phần Thông tin cá nhân.
            </p>
          </td>
        </tr>
      </table>

    </td></tr>
  </table>
</body>
</html>`;
}
