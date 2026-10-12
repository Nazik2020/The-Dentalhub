import React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/utils/cn'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: SelectOption[]
  placeholder?: string
  error?: string
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, options, placeholder, error, id, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined)
    const errorId = error && selectId ? `${selectId}-error` : undefined

    return (
      <div className="w-full text-left">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-xs font-heading font-bold text-obsidian uppercase tracking-wider mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            aria-invalid={Boolean(error)}
            aria-describedby={errorId}
            className={cn(
              'w-full h-[50px] px-4 pr-11 rounded-input bg-white border border-border-medium text-obsidian text-sm md:text-base appearance-none transition-all duration-200 outline-none cursor-pointer',
              'hover:border-border-strong',
              'focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none shadow-2xs',
              error && 'border-red-500 hover:border-red-600 focus:border-red-500 focus:ring-red-500/20',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled className="text-bodyText-muted">
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="text-obsidian py-1">
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={18}
            strokeWidth={1.5}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-bodyText-muted pointer-events-none"
          />
        </div>
        {error && (
          <p id={errorId} className="mt-1.5 text-xs text-red-600 font-medium">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
