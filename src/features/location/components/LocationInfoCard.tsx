import React from 'react'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CLINIC_INFO } from '@/constants/clinicInfo'

export const LocationInfoCard: React.FC = () => {
  const googleMapsUrl = CLINIC_INFO.location.googleMapsPlaceUrl

  return (
    <div className="space-y-6 text-left">
      <div>
        <span className="inline-flex items-center px-3 py-1 rounded-pill text-xs font-heading font-bold uppercase tracking-wider bg-oceanic-light text-oceanic-dark border border-oceanic/20 mb-3.5">
          CLINIC LOCATION
        </span>
        <h2 className="text-2xl sm:text-4xl font-heading font-bold text-obsidian tracking-tight-head leading-[1.2]">
          Visit us in Galle.
        </h2>
        <p className="mt-2 text-base text-bodyText">
          Conveniently located on Hirimbura Road in Kahaduwawatta, Galle with easy access, parking, and serene surroundings.
        </p>
      </div>

      <div className="space-y-3.5 pt-1">
        {/* Address */}
        <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-border-light shadow-2xs hover:border-border-medium transition-colors">
          <div className="w-10 h-10 rounded-full bg-oceanic-light border border-oceanic/20 flex items-center justify-center text-oceanic shrink-0">
            <MapPin size={18} strokeWidth={1.75} />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-obsidian">
              Address
            </h4>
            <p className="text-xs sm:text-sm text-bodyText mt-0.5">
              {CLINIC_INFO.location.address}
            </p>
            <p className="text-xs text-bodyText-muted mt-0.5">
              {CLINIC_INFO.location.landmark}
            </p>
          </div>
        </div>

        {/* Contact Phone */}
        <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-border-light shadow-2xs hover:border-border-medium transition-colors">
          <div className="w-10 h-10 rounded-full bg-oceanic-light border border-oceanic/20 flex items-center justify-center text-oceanic shrink-0">
            <Phone size={18} strokeWidth={1.75} />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-obsidian">
              Phone & WhatsApp
            </h4>
            <p className="text-xs sm:text-sm text-bodyText mt-0.5">
              Call: {CLINIC_INFO.contact.phoneDisplay}
            </p>
            <p className="text-xs text-whatsapp font-semibold mt-0.5">
              WhatsApp: {CLINIC_INFO.contact.whatsappDisplay}
            </p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-border-light shadow-2xs hover:border-border-medium transition-colors">
          <div className="w-10 h-10 rounded-full bg-oceanic-light border border-oceanic/20 flex items-center justify-center text-oceanic shrink-0">
            <Clock size={18} strokeWidth={1.75} />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-obsidian">
              Opening Hours
            </h4>
            <p className="text-xs sm:text-sm text-bodyText mt-0.5">
              {CLINIC_INFO.hours.weekdays}
            </p>
            <p className="text-xs text-bodyText-muted mt-0.5">
              {CLINIC_INFO.hours.saturday} • {CLINIC_INFO.hours.sunday}
            </p>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full sm:w-auto"
        >
          <Button
            variant="primary"
            size="lg"
            rightIcon={<Navigation size={18} strokeWidth={2} />}
            className="w-full sm:w-auto"
          >
            Get Directions
          </Button>
        </a>
      </div>
    </div>
  )
}
