/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface ReauthenticationEmailProps {
  token: string
}

export const ReauthenticationEmail = ({ token }: ReauthenticationEmailProps) => (
  <Html lang="vi" dir="ltr">
    <Head />
    <Preview>Mã xác minh của bạn</Preview>
    <Body style={main}>
      <Container style={container}>
        <div style={header}>
          <Heading style={headerTitle}>T-Nexus</Heading>
        </div>
        <div style={content}>
          <Heading style={h1}>Xác minh danh tính</Heading>
          <Text style={text}>Sử dụng mã bên dưới để xác nhận danh tính của bạn:</Text>
          <div style={codeWrapper}>
            <Text style={codeStyle}>{token}</Text>
          </div>
          <Text style={footer}>
            Mã này sẽ hết hạn sau một thời gian ngắn. Nếu bạn không yêu cầu mã này,
            bạn có thể bỏ qua email này.
          </Text>
        </div>
        <div style={footerBar}>
          <Text style={footerText}>© 2025 T-Nexus</Text>
        </div>
      </Container>
    </Body>
  </Html>
)

export default ReauthenticationEmail

const main = { backgroundColor: '#f4f4f5', fontFamily: "'Be Vietnam Pro', 'Segoe UI', Arial, sans-serif", padding: '40px 20px' }
const container = { maxWidth: '480px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden' as const, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }
const header = { backgroundColor: 'hsl(183, 100%, 21%)', padding: '24px 32px', textAlign: 'center' as const }
const headerTitle = { margin: '0', color: '#ffffff', fontSize: '20px', fontWeight: '700' as const }
const content = { padding: '32px' }
const h1 = { fontSize: '20px', fontWeight: 'bold' as const, color: 'hsl(220, 20%, 10%)', margin: '0 0 20px' }
const text = { fontSize: '14px', color: 'hsl(220, 9%, 46%)', lineHeight: '1.6', margin: '0 0 20px' }
const codeWrapper = { textAlign: 'center' as const, padding: '16px 0', margin: '0 0 20px' }
const codeStyle = { display: 'inline-block' as const, backgroundColor: '#f4f4f5', border: '2px dashed #d4d4d8', borderRadius: '12px', padding: '20px 40px', fontFamily: "'Courier New', monospace", fontSize: '36px', fontWeight: '800' as const, letterSpacing: '8px', color: 'hsl(220, 20%, 10%)', margin: '0' }
const footer = { fontSize: '12px', color: '#a1a1aa', margin: '24px 0 0' }
const footerBar = { padding: '16px 32px', backgroundColor: '#fafafa', borderTop: '1px solid #f4f4f5', textAlign: 'center' as const }
const footerText = { margin: '0', color: '#a1a1aa', fontSize: '11px' }
