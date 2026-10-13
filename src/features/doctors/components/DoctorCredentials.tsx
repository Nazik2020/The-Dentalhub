import React from 'react'
import { CheckCircle2, Award, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { DOCTOR_DATA } from '../data/doctorData'
import { useAppointmentModal } from '@/context/AppointmentModalContext'

export const DoctorCredentials: React.FC = () => {
  const { openModal } = useAppointmentModal()

  return (
    <div className="space-y-6 text-left">
      <div>
        <span className="inline-flex items-center px-3 py-1 rounded-pill text-xs font-heading font-bold uppercase tracking-wider bg-oceanic-light text-oceanic-dark border border-oceanic/20 mb-3.5">
          OUR LEAD CLINICIAN
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-heading font-bold text-obsidian tracking-tight-head leading-[1.2]">
          Meet {DOCTOR_DATA.name}
        </h2>
      </div>

      <div className="space-y-4 text-base text-bodyText leading-body-relaxed">
        <p>{DOCTOR_DATA.bio1}</p>
        <p>{DOCTOR_DATA.bio2}</p>
      </div>

      {/* Verified Accreditation Card */}
      <div className="bg-white rounded-card p-6 border border-border-light shadow-elevation-1 space-y-3.5">
        <div className="flex items-center gap-2 text-primary">
          <Award size={20} strokeWidth={1.75} />
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-obsidian">
            Accreditations & Board Certifications
          </span>
        </div>
        <ul className="space-y-2.5 text-xs sm:text-sm text-bodyText">
          {DOCTOR_DATA.fellowships.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 size={16} strokeWidth={2} className="text-primary shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
          <li className="flex items-start gap-2.5 pt-1.5 border-t border-border-light font-semibold text-obsidian">
            <CheckCircle2 size={16} strokeWidth={2} className="text-primary shrink-0 mt-0.5" />
            <span>{DOCTOR_DATA.registration}</span>
          </li>
        </ul>
      </div>

      <div className="pt-2">
        <Button
          variant="primary"
          size="lg"
          onClick={() => openModal()}
          rightIcon={<ArrowRight size={18} strokeWidth={2} />}
          className="w-full sm:w-auto"
        >
          Book a Consultation
        </Button>
      </div>
    </div>
  )
}
