import React from 'react'
import { cn } from '@/utils/cn'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'active' | 'inactive' | 'verified' | 'popular' | 'emergency' | 'gold'
  hasDot?: boolean
}

/**
 * Pill-shaped chip and badge component (rounded-pill).
 * Provides clear visual state differentiation and high-contrast typography.
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'inactive',
  hasDot = false,
  ...props
}) => {
  const variantStyles = {
    // Active chip: #0891B2 with crisp white text
    active: 'bg-primary text-white font-bold shadow-sm',
    // Inactive chip: white/subtle with border-medium and slate text
    inactive:
      'bg-white border border-border-medium text-bodyText hover:bg-canvas-subtle hover:text-obsidian hover:border-border-strong font-medium shadow-2xs',
    // Verified accreditation badge:
    verified:
      'bg-oceanic-light border border-oceanic/20 text-oceanic-dark font-semibold text-xs',
    // Popular service flag:
    popular:
      'bg-primary text-white font-bold text-xs uppercase tracking-wider shadow-sm',
    // Emergency status badge:
    emergency:
      'bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold',
    // Star rating / Gold badge:
    gold:
      'bg-amber-50 border border-amber-200 text-amber-900 font-bold',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-pill text-xs md:text-[13px] transition-all select-none font-heading',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {hasDot && (
        <span
          className={cn(
            'w-2 h-2 rounded-full inline-block shrink-0',
            variant === 'emergency'
              ? 'bg-emerald-500 animate-pulse'
              : variant === 'active'
              ? 'bg-white'
              : 'bg-primary'
          )}
        />
      )}
      {children}
    </span>
  )
}
