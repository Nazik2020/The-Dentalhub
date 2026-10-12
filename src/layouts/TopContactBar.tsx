import React from 'react'
import { Phone, Clock, AlertCircle } from 'lucide-react'
import { CLINIC_INFO } from '@/constants/clinicInfo'

export const TopContactBar: React.FC = () => {
  return (
    <div className="bg-obsidian-dark border-b border-obsidian-muted/40 text-xs text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-2">
        {/* Left: Emergency Status */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span className="font-heading font-semibold text-white">
            Open today
          </span>
          <span className="text-slate-500 hidden xs:inline" aria-hidden="true">•</span>
          <span className="text-slate-300 hidden sm:flex items-center gap-1.5">
            <AlertCircle size={13} strokeWidth={2} className="text-primary-container text-[#38BDF8]" aria-hidden="true" />
            Emergency cases prioritized immediately
          </span>
        </div>

        {/* Right: Phone & Hours */}
        <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
          <div className="hidden md:flex items-center gap-1.5 text-slate-300">
            <Clock size={13} strokeWidth={2} className="text-[#38BDF8]" aria-hidden="true" />
            <span>Mon–Sat: 8:30 AM – 7:00 PM</span>
          </div>
          <a
            href={`tel:${CLINIC_INFO.contact.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 font-heading font-semibold text-[#38BDF8] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
          >
            <Phone size={13} strokeWidth={2} aria-hidden="true" />
            <span>{CLINIC_INFO.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
