import React from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/utils/cn'

export interface StarRatingProps {
  rating?: number
  maxRating?: number
  size?: number
  showScore?: boolean
  reviewCount?: number
  className?: string
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating = 5,
  maxRating = 5,
  size = 18,
  showScore = false,
  reviewCount,
  className,
}) => {
  const ariaLabel = `Rated ${rating.toFixed(1)} out of ${maxRating} stars${
    reviewCount ? ` based on ${reviewCount}+ reviews` : ''
  }`

  return (
    <div
      className={cn('inline-flex items-center gap-1.5', className)}
      role="img"
      aria-label={ariaLabel}
    >
      <div className="flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: maxRating }).map((_, index) => {
          const isFilled = index < Math.floor(rating)
          return (
            <Star
              key={index}
              size={size}
              strokeWidth={1.5}
              className={cn(
                isFilled
                  ? 'text-gold fill-gold'
                  : 'text-border-medium fill-transparent'
              )}
            />
          )
        })}
      </div>
      {showScore && (
        <span className="font-heading font-bold text-obsidian text-sm ml-1" aria-hidden="true">
          {rating.toFixed(1)}
        </span>
      )}
      {reviewCount && (
        <span className="text-bodyText text-xs font-medium" aria-hidden="true">
          ({reviewCount}+ reviews)
        </span>
      )}
    </div>
  )
}
