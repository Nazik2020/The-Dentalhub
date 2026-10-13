import React from 'react'
import { MapPin, ExternalLink } from 'lucide-react'
import { CLINIC_INFO } from '@/constants/clinicInfo'

export const ClinicMapPreview: React.FC = () => {
  const googleMapsUrl = CLINIC_INFO.location.googleMapsPlaceUrl

  return (
    <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden border border-border-light shadow-elevation-2 bg-canvas-container h-[320px] sm:h-[420px] lg:h-[480px]">
      {/* Embedded Google Map centered on The Dental Hub by Dr. Kanishka Mudalige (6.0636039, 80.2151958) */}
      <iframe
        title="The Dental Hub by Dr. Kanishka Mudalige - 185 Hirimbura Road, Galle"
        src="https://maps.google.com/maps?q=6.0636039,80.2151958+(The+Dental+Hub+by+Dr.+Kanishka+Mudalige)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
        className="w-full h-full border-0 grayscale-[0.15] contrast-[1.05]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Floating Map Anchor Pin Card */}
      <div className="absolute top-3.5 left-3.5 right-3.5 sm:top-5 sm:left-5 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-border-light shadow-elevation-2 text-left">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold shadow-2xs">
            <MapPin size={18} strokeWidth={2} />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-obsidian">
              The Dental Hub Galle
            </h4>
            <p className="text-xs text-bodyText mt-0.5">
              185 Hirimbura Rd, Kahaduwawatta, Galle
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-heading font-bold text-primary hover:text-primary-hover hover:underline mt-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
            >
              <span>View in Google Maps</span>
              <ExternalLink size={11} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
