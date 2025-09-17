import { Resend } from 'resend'
import { ContactFormData } from './validation'

const resend = new Resend(process.env.RESEND_API_KEY || 'dev-key')

export async function sendContactEmail(data: ContactFormData, userAgent?: string) {
  const to = process.env.CONTACT_TO || 'peter@shinystudio.co.uk'
  const from = process.env.CONTACT_FROM || 'site@withawhisper.com'
  
  const timestamp = new Date().toISOString()
  
  const plainText = `
New contact form submission from With a Whisper website:

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Phone: ${data.phone}
Budget: $${data.budget}

Submitted at: ${timestamp}
User Agent: ${userAgent || 'Unknown'}
  `.trim()

  const htmlText = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Company:</strong> ${data.company}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Budget:</strong> $${data.budget}</p>
    <p><strong>Submitted at:</strong> ${timestamp}</p>
    <p><strong>User Agent:</strong> ${userAgent || 'Unknown'}</p>
  `

  try {
    // In development mode without a real API key, just log and return success
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dev-key' || !process.env.RESEND_API_KEY.startsWith('re_')) {
      console.log('Development mode - Contact form submission:', {
        name: data.name,
        email: data.email,
        company: data.company,
        phone: data.phone,
        budget: data.budget,
        timestamp: new Date().toISOString(),
        hasApiKey: !!process.env.RESEND_API_KEY,
        apiKeyPrefix: process.env.RESEND_API_KEY?.substring(0, 10) + '...'
      })
      return { success: true, id: 'dev-mode' }
    }

    console.log('Attempting to send email with Resend API...', {
      from,
      to,
      subject: `New Contact Form Submission from ${data.name}`,
      hasApiKey: !!process.env.RESEND_API_KEY,
      apiKeyPrefix: process.env.RESEND_API_KEY?.substring(0, 10) + '...'
    })

    const result = await resend.emails.send({
      from,
      to,
      subject: `New Contact Form Submission from ${data.name}`,
      text: plainText,
      html: htmlText,
    })

    console.log('Email sent successfully:', {
      success: true,
      id: result.data?.id,
      result: result
    })

    return { success: true, id: result.data?.id }
  } catch (error) {
    console.error('Failed to send email:', error)
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      hasApiKey: !!process.env.RESEND_API_KEY,
      apiKeyPrefix: process.env.RESEND_API_KEY?.substring(0, 10) + '...'
    })
    return { success: false, error: 'Failed to send email' }
  }
}
