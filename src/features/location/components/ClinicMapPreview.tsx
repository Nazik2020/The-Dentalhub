import React from 'react'
import { MapPin, ExternalLink } from 'lucide-react'
import { CLINIC_INFO } from '@/constants/clinicInfo'

export const ClinicMapPreview: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${CLINIC_INFO.name}, ${CLINIC_INFO.location.address}`
  )}`

  return (
    <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden border border-border-light shadow-elevation-2 bg-canvas-container h-[320px] sm:h-[420px] lg:h-[480px]">
      {/* Stylized Coastal Map Graphic */}
      <iframe
        title="Galle Fort Clinic Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15871.39958348873!2d80.2109!3d6.0328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173bb5a5b50d9%3A0x6b80d0d8294ad0a2!2sGalle%20Fort%2C%20Galle%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
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
            <h4 className="font-heading font-extrabold text-sm text-obsidian">
              The Dental Hub Galle
            </h4>
            <p className="text-xs text-bodyText mt-0.5">
              Rampart St, Galle Fort
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
