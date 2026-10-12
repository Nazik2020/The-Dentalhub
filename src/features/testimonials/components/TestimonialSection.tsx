import React from 'react'
import { ArrowRight } from 'lucide-react'
import { StarRating } from '@/components/ui/StarRating'
import { TestimonialCard } from './TestimonialCard'
import { TESTIMONIALS_DATA } from '../data/testimonialData'

export const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-canvas-subtle border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row with rating on the right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="text-left">
            <span className="inline-flex items-center px-3 py-1 rounded-pill text-xs font-heading font-bold uppercase tracking-wider bg-oceanic-light text-oceanic-dark border border-oceanic/20 mb-3.5">
              PATIENT STORIES
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-heading font-extrabold text-obsidian tracking-tight leading-tight">
              Patients trust Dental Hub.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 bg-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-pill border border-border-light shadow-2xs shrink-0 w-fit">
            <StarRating rating={4.9} size={16} />
            <span className="font-heading font-bold text-xs sm:text-sm text-obsidian">
              4.9 / 5.0
            </span>
            <span className="text-[11px] sm:text-xs text-bodyText">
              (250+ Google Reviews)
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Read more reviews link */}
        <div className="mt-10 text-center">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-heading font-bold text-primary hover:text-primary-hover transition-colors cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg px-2 py-1"
          >
            <span>Read more Google reviews (250+)</span>
            <ArrowRight
              size={16}
              strokeWidth={2}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
