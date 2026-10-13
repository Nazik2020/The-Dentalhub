import React from 'react'
import { Card } from '@/components/ui/Card'
import { StarRating } from '@/components/ui/StarRating'
import { TestimonialItem, getRelativeReviewDate } from '../data/testimonialData'

export interface TestimonialCardProps {
  testimonial: TestimonialItem
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const relativeDate = getRelativeReviewDate(testimonial.publishedAt, testimonial.date)

  return (
    <Card
      variant="white"
      className="flex flex-col justify-between h-full text-left"
    >
      <div>
        {/* Star Rating & Dynamic Relative Date Header */}
        <div className="mb-4 flex items-center justify-between gap-2">
          <StarRating rating={testimonial.rating} size={17} />
          <span className="text-xs text-bodyText-muted font-medium">
            {relativeDate}
          </span>
        </div>

        {/* Patient Quote */}
        <p className="text-sm md:text-base text-bodyText-dark leading-relaxed italic mb-6">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Patient Signature Footer */}
      <div className="pt-4 border-t border-border-light flex items-center justify-between gap-2">
        <div>
          <h4 className="font-heading font-bold text-sm text-obsidian">
            {testimonial.name}
          </h4>
          <p className="text-xs text-bodyText mt-0.5">
            {testimonial.badge ? `${testimonial.badge} • ` : ''}{testimonial.procedure}
          </p>
        </div>

        <span className="text-[11px] font-heading font-semibold text-oceanic bg-oceanic-light border border-oceanic/20 px-2.5 py-1 rounded-pill shrink-0">
          {testimonial.verifiedSource}
        </span>
      </div>
    </Card>
  )
}
