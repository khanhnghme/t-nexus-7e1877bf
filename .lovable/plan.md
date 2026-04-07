

## Plan: Remove Lovable Default Email System, Use Only Resend via Custom OTP

### Current State Analysis

The project has **two parallel email systems** running:

1. **Custom OTP system (Resend)** — `signup-email-otp` and `password-reset-otp` edge functions. These send emails directly via Resend API from `T-Nexus <noreply@t-nexus.io.vn>`. This is the system you configured and want to keep.

2. **Lovable managed email system** — `auth-email-hook` intercepts Supabase Auth events (signup, recovery, magic link, etc.) and enqueues emails through `process-email-queue` which sends via Lovable's `@lovable.dev/email-js`. This uses the domain `notify.uehers.teamworks` and Lovable's infrastructure. This is the system you want removed.

The problem: When Supabase Auth triggers events (signup confirmation, password recovery), the `auth-email-hook` catches them and sends **duplicate emails** through Lovable's system — even though your custom OTP functions already handle these.

### What Will Be Changed

#### 1. Neutralize `auth-email-hook` — make it a silent no-op
- Rewrite `auth-email-hook/index.ts` to simply return `{ success: true }` without sending any email
- This stops Lovable's email system from intercepting auth events
- We keep the function file (can't fully delete it as Lovable routes auth events to it) but it does nothing

#### 2. Remove `process-email-queue` edge function
- Delete `supabase/functions/process-email-queue/index.ts` — no longer needed since no emails go through the Lovable queue
- Remove its config from `supabase/config.toml`

#### 3. Remove `_shared/email-templates/` directory
- Delete all 6 template files (`signup.tsx`, `recovery.tsx`, `magic-link.tsx`, `invite.tsx`, `email-change.tsx`, `reauthentication.tsx`)
- These were only used by the old `auth-email-hook`

#### 4. Clean up `supabase/config.toml`
- Remove `[functions.process-email-queue]` entry

#### 5. Keep intact (no changes needed)
- `signup-email-otp/index.ts` — already uses Resend correctly
- `password-reset-otp/index.ts` — already uses Resend correctly
- `auto-confirm-user/index.ts` — used when `requireVerification = false`
- `MemberAuthForm.tsx` — already calls custom OTP functions
- `OtpVerifyScreen.tsx` — already uses custom OTP functions
- All frontend auth flow — already wired to custom OTP

### Email Flow After Fix

```text
Signup (verification ON):
  User registers → signup-email-otp send_code → Resend API → OTP email from noreply@t-nexus.io.vn

Signup (verification OFF):
  User registers → auto-confirm-user → no email sent

Forgot Password:
  User requests reset → password-reset-otp send_code → Resend API → OTP email from noreply@t-nexus.io.vn

Auth-email-hook (if Supabase triggers it):
  Receives event → returns success → does NOT send any email
```

### Files Changed
1. `supabase/functions/auth-email-hook/index.ts` — rewrite to no-op
2. `supabase/functions/process-email-queue/` — delete entirely
3. `supabase/functions/_shared/email-templates/` — delete all 6 files
4. `supabase/config.toml` — remove process-email-queue config

### Files Kept As-Is
- `signup-email-otp/index.ts` (Resend)
- `password-reset-otp/index.ts` (Resend)
- `auto-confirm-user/index.ts`
- `src/components/MemberAuthForm.tsx`
- `src/components/OtpVerifyScreen.tsx`

