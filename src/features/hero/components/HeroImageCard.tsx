import React from 'react'
import { Sparkles, CheckCircle2 } from 'lucide-react'

export const HeroImageCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Decorative ambient glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-primary/15 to-oceanic/10 rounded-[36px] blur-2xl -z-10" />

      {/* Main Clinic Visual Card */}
      <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-border-light shadow-elevation-2 bg-white">
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
          alt="Modern Dental Sanctuary Clinic Environment"
          className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover"
        />

        {/* Ambient Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent pointer-events-none" />

        {/* Floating Trust Card Overlay */}
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-border-light shadow-elevation-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <CheckCircle2 size={20} strokeWidth={2} />
            </div>
            <div>
              <p className="font-heading font-bold text-obsidian text-xs sm:text-sm">
                5,000+ Gentle Procedures
              </p>
              <p className="text-[11px] sm:text-xs text-bodyText">
                100% Pain-free local anesthesia protocol
              </p>
            </div>
          </div>
          <span className="text-[11px] font-heading font-bold text-oceanic bg-oceanic-light px-3 py-1.5 rounded-full border border-oceanic/20 hidden sm:inline-block">
            Galle Fort
          </span>
        </div>

        {/* Top Floating Badge */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-obsidian/90 backdrop-blur-md text-white text-[11px] sm:text-xs font-heading font-semibold px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 shadow-md">
          <Sparkles size={13} className="text-[#38BDF8]" />
          <span>Clinical Sanctuary</span>
        </div>
      </div>
    </div>
  )
}
