/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface SignupEmailProps {
  siteName: string
  siteUrl: string
  recipient: string
  confirmationUrl: string
}

export const SignupEmail = ({
  siteName,
  siteUrl,
  recipient,
  confirmationUrl,
}: SignupEmailProps) => (
  <Html lang="vi" dir="ltr">
    <Head />
    <Preview>Xác nhận email — Bạn có 15 phút để hoàn tất</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header */}
        <Section style={header}>
          <Heading style={headerTitle}>T-Nexus</Heading>
        </Section>

        {/* Content */}
        <Section style={content}>
          <Heading style={h1}>Xác nhận email của bạn</Heading>

          <Text style={text}>
            Cảm ơn bạn đã đăng ký tài khoản tại{' '}
            <Link href={siteUrl} style={link}>
              <strong>{siteName}</strong>
            </Link>
            ! Vui lòng xác nhận địa chỉ email{' '}
            <Link href={`mailto:${recipient}`} style={link}>
              {recipient}
            </Link>{' '}
            để hoàn tất đăng ký.
          </Text>

          {/* Warning box */}
          <Section style={warningBox}>
            <Text style={warningTitle}>⏰ Thời hạn: 15 phút</Text>
            <Text style={warningText}>
              Link xác thực sẽ hết hạn sau <strong>15 phút</strong>. Nếu không xác thực kịp, tài khoản sẽ bị xoá tự động và bạn cần đăng ký lại.
            </Text>
          </Section>

          {/* CTA Button */}
          <Section style={buttonSection}>
            <Button style={button} href={confirmationUrl}>
              ✅ Xác nhận Email ngay
            </Button>
          </Section>

          <Hr style={hr} />

          {/* Steps */}
          <Text style={stepsTitle}>Hướng dẫn nhanh:</Text>
          <Text style={stepItem}>1️⃣ Nhấn nút <strong>"Xác nhận Email ngay"</strong> ở trên</Text>
          <Text style={stepItem}>2️⃣ Chờ hệ thống xác thực tài khoản</Text>
          <Text style={stepItem}>3️⃣ Đăng nhập bằng MSSV và mật khẩu đã tạo</Text>

          <Hr style={hr} />

          <Text style={smallText}>
            Nếu bạn không tạo tài khoản này, bạn có thể bỏ qua email này. Nếu nút không hoạt động, hãy sao chép và dán link sau vào trình duyệt:
          </Text>
          <Text style={urlText}>{confirmationUrl}</Text>
        </Section>

        {/* Footer */}
        <Section style={footerBar}>
          <Text style={footerText}>© 2025 T-Nexus — Hệ thống quản lý nhóm</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default SignupEmail

const brandColor = 'hsl(183, 100%, 21%)'
const main = { backgroundColor: '#f4f4f5', fontFamily: "'Be Vietnam Pro', 'Segoe UI', Arial, sans-serif", padding: '40px 20px' }
const container = { maxWidth: '520px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden' as const, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }
const header = { backgroundColor: brandColor, padding: '28px 32px', textAlign: 'center' as const }
const headerTitle = { margin: '0', color: '#ffffff', fontSize: '22px', fontWeight: '700' as const, letterSpacing: '0.5px' }
const content = { padding: '32px' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: 'hsl(220, 20%, 10%)', margin: '0 0 16px' }
const text = { fontSize: '14px', color: 'hsl(220, 9%, 46%)', lineHeight: '1.7', margin: '0 0 20px' }
const link = { color: brandColor, textDecoration: 'underline' }
const warningBox = { backgroundColor: '#FFF7ED', border: '1px solid #FDBA74', borderRadius: '8px', padding: '16px 20px', margin: '0 0 24px' }
const warningTitle = { fontSize: '15px', fontWeight: '700' as const, color: '#C2410C', margin: '0 0 6px' }
const warningText = { fontSize: '13px', color: '#9A3412', lineHeight: '1.6', margin: '0' }
const buttonSection = { textAlign: 'center' as const, margin: '0 0 24px' }
const button = { backgroundColor: brandColor, color: '#ffffff', fontSize: '15px', borderRadius: '10px', padding: '14px 32px', textDecoration: 'none', fontWeight: '700' as const, display: 'inline-block' as const }
const hr = { borderColor: '#E4E4E7', margin: '24px 0' }
const stepsTitle = { fontSize: '14px', fontWeight: '600' as const, color: 'hsl(220, 20%, 10%)', margin: '0 0 12px' }
const stepItem = { fontSize: '13px', color: 'hsl(220, 9%, 46%)', lineHeight: '1.6', margin: '0 0 8px', paddingLeft: '4px' }
const smallText = { fontSize: '11px', color: '#A1A1AA', lineHeight: '1.5', margin: '0 0 8px' }
const urlText = { fontSize: '11px', color: brandColor, wordBreak: 'break-all' as const, margin: '0 0 8px' }
const footerBar = { padding: '16px 32px', backgroundColor: '#FAFAFA', borderTop: '1px solid #F4F4F5', textAlign: 'center' as const }
const footerText = { margin: '0', color: '#A1A1AA', fontSize: '11px' }
