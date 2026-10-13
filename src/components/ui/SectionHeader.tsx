import React from 'react'
import { cn } from '@/utils/cn'

export interface SectionHeaderProps {
  tag?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
  className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className,
}) => {
  const isCenter = align === 'center'
  const isDark = theme === 'dark'

  return (
    <div
      className={cn(
        'max-w-3xl mb-8 sm:mb-12 md:mb-14',
        isCenter ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {tag && (
        <div className={cn('mb-3', isCenter && 'flex justify-center')}>
          <span
            className={cn(
              'inline-flex items-center px-3 py-1 rounded-pill text-xs font-heading font-bold uppercase tracking-wider',
              isDark
                ? 'bg-primary/15 text-[#38BDF8] border border-primary/25'
                : 'bg-oceanic-light text-oceanic-dark border border-oceanic/20'
            )}
          >
            {tag}
          </span>
        </div>
      )}
      <h2
        className={cn(
          'text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-heading font-bold tracking-tight-head leading-[1.2] mb-3 sm:mb-4 text-balance',
          isDark ? 'text-white' : 'text-obsidian'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-sm sm:text-base md:text-lg leading-body-relaxed text-balance',
            isDark ? 'text-slate-300' : 'text-bodyText'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
