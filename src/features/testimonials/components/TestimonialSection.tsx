import React from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { StarRating } from '@/components/ui/StarRating'
import { CLINIC_INFO } from '@/constants/clinicInfo'
import { TestimonialCard } from './TestimonialCard'
import { TESTIMONIALS_DATA } from '../data/testimonialData'

export const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-canvas-subtle border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row with rating on the right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
          <div className="text-left">
            <span className="inline-flex items-center px-3 py-1 rounded-pill text-xs font-heading font-bold uppercase tracking-wider bg-oceanic-light text-oceanic-dark border border-oceanic/20 mb-3">
              PATIENT STORIES
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-heading font-bold text-obsidian tracking-tight-head leading-[1.2]">
              Patients trust Dental Hub.
            </h2>
          </div>

          <a
            href={CLINIC_INFO.location.googleMapsPlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-wrap items-center gap-2.5 sm:gap-3 bg-white hover:bg-canvas px-4 py-2.5 sm:px-5 sm:py-3 rounded-pill border border-border-light hover:border-border-medium shadow-2xs transition-colors shrink-0 w-fit"
          >
            <StarRating rating={CLINIC_INFO.reviews.averageRating} size={16} />
            <span className="font-heading font-bold text-xs sm:text-sm text-obsidian">
              {CLINIC_INFO.reviews.averageRating} / 5.0
            </span>
            <span className="text-[11px] sm:text-xs text-bodyText font-medium">
              ({CLINIC_INFO.reviews.reviewCount}+ Google Reviews)
            </span>
          </a>
        </div>

        {/* Google Review Topic Highlight Pills (from Google Maps Review Summary) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10">
          <span className="text-xs font-heading font-semibold text-bodyText-muted mr-1">
            Frequently mentioned on Google:
          </span>
          {CLINIC_INFO.reviews.highlights.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-white border border-border-light text-xs font-heading font-medium text-obsidian shadow-2xs"
            >
              <CheckCircle2 size={13} className="text-primary shrink-0" />
              <span>{item.label}</span>
              <span className="text-bodyText-muted font-semibold">({item.count})</span>
            </span>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Read more reviews link pointing directly to Google Maps Place listing */}
        <div className="mt-10 text-center">
          <a
            href={CLINIC_INFO.location.googleMapsPlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-heading font-bold text-primary hover:text-primary-hover transition-colors cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg px-2 py-1"
          >
            <span>Read all {CLINIC_INFO.reviews.reviewCount}+ verified Google reviews</span>
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
