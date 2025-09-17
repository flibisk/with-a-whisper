import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company name is required').max(100, 'Company name is too long'),
  phone: z.string().min(1, 'Phone number is required').regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),
  budget: z.enum(['15k', '50k', '100k', '500k'], {
    required_error: 'Please select a budget range',
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
