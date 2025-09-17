import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validation'
import { sendContactEmail } from '@/lib/email'

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5 // 5 requests per window

  const record = rateLimitMap.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Debug environment variables
    console.log('Environment variables check:', {
      hasResendKey: !!process.env.RESEND_API_KEY,
      resendKeyPrefix: process.env.RESEND_API_KEY?.substring(0, 10) + '...',
      contactTo: process.env.CONTACT_TO,
      contactFrom: process.env.CONTACT_FROM,
      nodeEnv: process.env.NODE_ENV
    })

    // Rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    
    // Validate the form data
    const validatedData = contactFormSchema.parse(body)
    
    // Sanitize inputs (basic HTML stripping)
    const sanitizedData = {
      name: validatedData.name.replace(/<[^>]*>/g, '').trim(),
      email: validatedData.email.replace(/<[^>]*>/g, '').trim(),
      company: validatedData.company.replace(/<[^>]*>/g, '').trim(),
      phone: validatedData.phone.replace(/<[^>]*>/g, '').trim(),
      budget: validatedData.budget,
    }

    // Get user agent for email
    const userAgent = request.headers.get('user-agent') || undefined

    // Send email
    const result = await sendContactEmail(sanitizedData, userAgent)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid form data' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
