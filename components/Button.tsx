'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  className,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'relative px-8 py-4 rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-white/10 text-white border border-white/10 hover:bg-white/20 hover:border-white/20 hover:shadow-lg hover:shadow-white/5',
    secondary: 'bg-transparent text-white/80 border border-white/20 hover:bg-white/5 hover:text-white hover:border-white/30',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  )
}
