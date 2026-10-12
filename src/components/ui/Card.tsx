import React from 'react'
import { cn } from '@/utils/cn'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'white' | 'subtle' | 'dark'
  interactive?: boolean
}

/**
 * Structural Content Card Component
 * Built per Clinical Sanctuary 2.0 specification:
 * - 20px border radius (rounded-card)
 * - 1px hairline border (border-border-light / border-border-medium)
 * - Layered elevation shadows with smooth hover elevation transition
 */
export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'white',
  interactive = false,
  ...props
}) => {
  const variantStyles = {
    white: 'bg-white border-border-light text-bodyText-dark shadow-elevation-1',
    subtle: 'bg-canvas-subtle border-border-light text-bodyText-dark shadow-elevation-1',
    dark: 'bg-obsidian-card border-obsidian-muted/60 text-white shadow-elevation-2',
  }

  return (
    <div
      className={cn(
        'rounded-card border p-6 sm:p-8 transition-all duration-300',
        variantStyles[variant],
        interactive &&
          'hover:shadow-elevation-2 hover:-translate-y-[2px] hover:border-border-medium cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
