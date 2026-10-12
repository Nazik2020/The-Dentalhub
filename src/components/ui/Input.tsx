import React from 'react'
import { cn } from '@/utils/cn'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined)
    const errorId = error && inputId ? `${inputId}-error` : undefined
    const helperId = helperText && inputId ? `${inputId}-helper` : undefined

    return (
      <div className="w-full text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-heading font-bold text-obsidian uppercase tracking-wider mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId || helperId}
          className={cn(
            'w-full h-[50px] px-4 rounded-input bg-white border border-border-medium text-obsidian placeholder:text-bodyText-muted/65 text-sm md:text-base transition-all duration-200 outline-none',
            'hover:border-border-strong',
            'focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none shadow-2xs',
            error && 'border-red-500 hover:border-red-600 focus:border-red-500 focus:ring-red-500/20',
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} className="mt-1.5 text-xs text-red-600 font-medium">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={helperId} className="mt-1.5 text-xs text-bodyText-muted">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
