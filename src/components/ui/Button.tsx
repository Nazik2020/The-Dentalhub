import React from 'react'
import { cn } from '@/utils/cn'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'outline' | 'ghost' | 'oceanic'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

/**
 * Clinical Sanctuary 2.0 Button Component
 * Follows strict design system rules:
 * - Primary button uses #0891B2 (Cyan 600) with crisp white text (4.54:1 WCAG AA contrast).
 * - Full keyboard accessibility with visible focus rings (ring-offset-2).
 * - Smooth micro-interaction transitions and active feedback.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'lg',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-heading font-bold rounded-pill transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white'

    const sizeStyles = {
      sm: 'h-9 px-4 text-xs tracking-tight',
      md: 'h-11 px-6 text-sm tracking-tight',
      lg: 'min-h-[50px] px-7 text-[15px] tracking-tight leading-5',
    }

    const variantStyles = {
      // Primary: Crisp clinical cyan #0891B2 with white bold text
      primary:
        'bg-primary text-white hover:bg-primary-hover hover:-translate-y-[1px] shadow-sm hover:shadow-cyan-glow',
      // Secondary Dark: Near-black obsidian slate with white text
      secondary:
        'bg-obsidian text-white hover:bg-obsidian-card hover:-translate-y-[1px] shadow-sm',
      // WhatsApp Direct Connect: Dedicated #16A34A with white bold text
      whatsapp:
        'bg-whatsapp text-white hover:bg-whatsapp-hover hover:-translate-y-[1px] shadow-sm',
      // Outline: 1.5px solid slate with hover inversion
      outline:
        'border-[1.5px] border-obsidian text-obsidian bg-transparent hover:bg-obsidian hover:text-white',
      // Ghost: Transparent with subtle canvas hover
      ghost:
        'text-bodyText bg-transparent hover:bg-canvas-subtle hover:text-obsidian',
      // Oceanic: Sky 600 #0284C7 for secondary high-contrast actions
      oceanic:
        'bg-oceanic text-white hover:bg-oceanic-dark hover:-translate-y-[1px] shadow-sm',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : (
          leftIcon && <span className="mr-2 inline-flex items-center">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="ml-2 inline-flex items-center">{rightIcon}</span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
