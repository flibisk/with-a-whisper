import { Resend } from 'resend'
import { ContactFormData } from './validation'

const resend = new Resend(process.env.RESEND_API_KEY)

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
    const result = await resend.emails.send({
      from,
      to,
      subject: `New Contact Form Submission from ${data.name}`,
      text: plainText,
      html: htmlText,
    })

    return { success: true, id: result.data?.id }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { success: false, error: 'Failed to send email' }
  }
}
