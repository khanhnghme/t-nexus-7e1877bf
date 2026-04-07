const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type, x-lovable-signature, x-lovable-timestamp, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
}

// This function is intentionally a no-op.
// All auth emails (signup verification, password reset) are handled by
// custom OTP edge functions (signup-email-otp, password-reset-otp) via Resend.
// This hook exists only because Supabase routes auth events here — it must
// return success to avoid errors, but it does NOT send any email.

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  // Consume the request body to avoid connection errors
  try {
    await req.text()
  } catch {
    // ignore
  }

  return new Response(
    JSON.stringify({ success: true }),
    { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  )
})
