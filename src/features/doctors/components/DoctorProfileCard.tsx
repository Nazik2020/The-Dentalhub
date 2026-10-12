import React from 'react'
import { DOCTOR_DATA } from '../data/doctorData'

export const DoctorProfileCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none">
      {/* Ambient Backdrop */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-oceanic/15 rounded-[36px] blur-2xl -z-10" />

      {/* Doctor Image Container */}
      <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-border-light shadow-elevation-2 bg-white">
        <img
          src={DOCTOR_DATA.photoUrl}
          alt={DOCTOR_DATA.name}
          className="w-full h-[380px] sm:h-[460px] object-cover object-top"
        />

        {/* Floating Doctor Signature Badge */}
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-obsidian/95 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-elevation-3 text-left">
          <p className="font-heading font-extrabold text-white text-base sm:text-lg tracking-tight">
            {DOCTOR_DATA.name}
          </p>
          <p className="text-xs font-heading font-semibold text-[#38BDF8] mt-0.5">
            {DOCTOR_DATA.credentials}
          </p>
        </div>
      </div>
    </div>
  )
}
