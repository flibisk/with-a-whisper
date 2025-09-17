'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { contactFormSchema, type ContactFormData } from '@/lib/validation'
import { cn } from '@/lib/utils'
import Button from './Button'

interface FormProps {
  onSuccess: () => void
}

export default function Form({ onSuccess }: FormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    budget: '15k',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(formData)
      
      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }

      onSuccess()
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'ZodError') {
          // Handle validation errors
          const zodError = error as any
          const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {}
          zodError.errors?.forEach((err: any) => {
            if (err.path[0]) {
              fieldErrors[err.path[0] as keyof ContactFormData] = err.message
            }
          })
          setErrors(fieldErrors)
        } else {
          setErrors({ email: error.message })
        }
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="w-full max-w-lg mx-auto p-8 bg-black/70 rounded-2xl backdrop-blur-md border border-white/10 shadow-2xl"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={cn(
              'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all',
              errors.name && 'border-red-400 focus:ring-red-400/20 focus:border-red-400'
            )}
            placeholder="Your full name"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={cn(
              'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all',
              errors.email && 'border-red-400 focus:ring-red-400/20 focus:border-red-400'
            )}
            placeholder="your@email.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className={cn(
              'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all',
              errors.company && 'border-red-400 focus:ring-red-400/20 focus:border-red-400'
            )}
            placeholder="Your company name"
            disabled={isSubmitting}
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-400">{errors.company}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={cn(
              'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all',
              errors.phone && 'border-red-400 focus:ring-red-400/20 focus:border-red-400'
            )}
            placeholder="+1 (555) 123-4567"
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-white/80 mb-2">
            Budget *
          </label>
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) => handleInputChange('budget', e.target.value)}
            className={cn(
              'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all',
              errors.budget && 'border-red-400 focus:ring-red-400/20 focus:border-red-400'
            )}
            disabled={isSubmitting}
          >
            <option value="15k">$15k</option>
            <option value="50k">$50k</option>
            <option value="100k">$100k</option>
            <option value="500k">$500k</option>
          </select>
          {errors.budget && (
            <p className="mt-1 text-sm text-red-400">{errors.budget}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Sending...' : 'Start a conversation'}
        </Button>
      </form>
    </motion.div>
  )
}
