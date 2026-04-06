/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface EmailChangeEmailProps {
  siteName: string
  email: string
  newEmail: string
  confirmationUrl: string
}

export const EmailChangeEmail = ({
  siteName,
  email,
  newEmail,
  confirmationUrl,
}: EmailChangeEmailProps) => (
  <Html lang="vi" dir="ltr">
    <Head />
    <Preview>Xác nhận thay đổi email cho {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <div style={header}>
          <Heading style={headerTitle}>T-Nexus</Heading>
        </div>
        <div style={content}>
          <Heading style={h1}>Xác nhận thay đổi email</Heading>
          <Text style={text}>
            Bạn đã yêu cầu thay đổi email cho tài khoản {siteName} từ{' '}
            <Link href={`mailto:${email}`} style={link}>{email}</Link>{' '}
            sang{' '}
            <Link href={`mailto:${newEmail}`} style={link}>{newEmail}</Link>.
          </Text>
          <Text style={text}>
            Nhấn nút bên dưới để xác nhận thay đổi:
          </Text>
          <Button style={button} href={confirmationUrl}>
            Xác nhận thay đổi Email
          </Button>
          <Text style={footer}>
            Nếu bạn không yêu cầu thay đổi này, vui lòng bảo mật tài khoản ngay.
          </Text>
        </div>
        <div style={footerBar}>
          <Text style={footerText}>© 2025 T-Nexus</Text>
        </div>
      </Container>
    </Body>
  </Html>
)

export default EmailChangeEmail

const main = { backgroundColor: '#f4f4f5', fontFamily: "'Be Vietnam Pro', 'Segoe UI', Arial, sans-serif", padding: '40px 20px' }
const container = { maxWidth: '480px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden' as const, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }
const header = { backgroundColor: 'hsl(183, 100%, 21%)', padding: '24px 32px', textAlign: 'center' as const }
const headerTitle = { margin: '0', color: '#ffffff', fontSize: '20px', fontWeight: '700' as const }
const content = { padding: '32px' }
const h1 = { fontSize: '20px', fontWeight: 'bold' as const, color: 'hsl(220, 20%, 10%)', margin: '0 0 20px' }
const text = { fontSize: '14px', color: 'hsl(220, 9%, 46%)', lineHeight: '1.6', margin: '0 0 20px' }
const link = { color: 'hsl(183, 100%, 21%)', textDecoration: 'underline' }
const button = { backgroundColor: 'hsl(183, 100%, 21%)', color: '#ffffff', fontSize: '14px', borderRadius: '8px', padding: '12px 24px', textDecoration: 'none', fontWeight: '600' as const }
const footer = { fontSize: '12px', color: '#a1a1aa', margin: '24px 0 0' }
const footerBar = { padding: '16px 32px', backgroundColor: '#fafafa', borderTop: '1px solid #f4f4f5', textAlign: 'center' as const }
const footerText = { margin: '0', color: '#a1a1aa', fontSize: '11px' }
