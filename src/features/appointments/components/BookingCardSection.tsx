import React from 'react'
import { BookingForm } from './BookingForm'

export const BookingCardSection: React.FC = () => {
  return (
    <section id="booking-section" className="py-16 sm:py-24 bg-canvas-subtle border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-10 border border-border-light shadow-elevation-2">
          {/* Header */}
          <div className="text-center mb-7 sm:mb-8">
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-pill text-xs font-heading font-bold uppercase tracking-wider bg-oceanic-light text-oceanic-dark border border-oceanic/20">
                PLAN YOUR CLINICAL VISIT
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-obsidian tracking-tight-head">
              Book your visit
            </h2>
            <p className="mt-2 text-sm sm:text-base text-bodyText max-w-md mx-auto">
              We will contact you promptly to confirm your preferred date and time slot.
            </p>
          </div>

          {/* Form */}
          <BookingForm />
        </div>
      </div>
    </section>
  )
}
