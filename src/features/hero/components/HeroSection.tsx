import React from 'react'
import { MessageSquare, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { StarRating } from '@/components/ui/StarRating'
import { CLINIC_INFO } from '@/constants/clinicInfo'
import { useAppointmentModal } from '@/context/AppointmentModalContext'
import { HeroImageCard } from './HeroImageCard'

export const HeroSection: React.FC = () => {
  const { openModal } = useAppointmentModal()

  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 text-left space-y-5 sm:space-y-6">
            {/* Triage Badge */}
            <div className="inline-block">
              <Badge variant="emergency" hasDot>
                Open today | Emergency cases priority
              </Badge>
            </div>

            {/* Display Hero Title (Design spec: 38px mobile, 56px desktop) */}
            <h1 className="font-heading font-extrabold text-[34px] sm:text-5xl lg:text-[56px] text-obsidian tracking-tight-hero leading-[1.12]">
              Creating smiles, with gentle care in Galle.
            </h1>

            {/* Reassuring Subtitle */}
            <p className="text-sm sm:text-lg text-bodyText leading-relaxed sm:leading-body-relaxed max-w-xl">
              World-class dental precision nestled in coastal Galle Fort. From anxiety-free routine cleanings and aesthetic veneers to complex dental implants, experience restorative care led by Dr. Kanishka Mudaliige.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => openModal()}
                rightIcon={<ArrowRight size={18} strokeWidth={2} />}
                className="w-full sm:w-auto"
              >
                Book Appointment
              </Button>

              <a
                href={`https://wa.me/${CLINIC_INFO.contact.whatsapp.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-block"
              >
                <Button
                  variant="whatsapp"
                  size="lg"
                  leftIcon={<MessageSquare size={18} strokeWidth={1.5} />}
                  className="w-full"
                >
                  WhatsApp: {CLINIC_INFO.contact.whatsappDisplay}
                </Button>
              </a>
            </div>

            {/* Social Proof Star Rating */}
            <div className="pt-4 flex flex-wrap items-center gap-2.5 sm:gap-3 border-t border-border-light max-w-md">
              <StarRating rating={4.9} size={18} />
              <div className="text-xs sm:text-sm text-bodyText font-medium">
                <span className="font-heading font-bold text-obsidian">4.9 / 5.0</span>
                {' '}from{' '}
                <a
                  href="#testimonials"
                  className="text-oceanic font-semibold hover:underline"
                >
                  250+ Google Reviews
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 w-full">
            <HeroImageCard />
          </div>
        </div>
      </div>
    </section>
  )
}
