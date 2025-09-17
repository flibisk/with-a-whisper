import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    hasResendKey: !!process.env.RESEND_API_KEY,
    resendKeyPrefix: process.env.RESEND_API_KEY?.substring(0, 10) + '...',
    contactTo: process.env.CONTACT_TO,
    contactFrom: process.env.CONTACT_FROM,
    nodeEnv: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  })
}
