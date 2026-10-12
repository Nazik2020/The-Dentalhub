import React from 'react'
import {
  Sparkles,
  Activity,
  Shield,
  Zap,
  Smile,
  Scissors,
  Award,
  Stethoscope,
  AlertCircle,
  ArrowRight,
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { TreatmentItem } from '../data/treatmentData'
import { useAppointmentModal } from '@/context/AppointmentModalContext'

const iconMap = {
  sparkles: Sparkles,
  activity: Activity,
  shield: Shield,
  zap: Zap,
  smile: Smile,
  scissors: Scissors,
  award: Award,
  stethoscope: Stethoscope,
  alert: AlertCircle,
}

export interface TreatmentCardProps {
  treatment: TreatmentItem
}

export const TreatmentCard: React.FC<TreatmentCardProps> = ({ treatment }) => {
  const { openModal } = useAppointmentModal()
  const IconComponent = iconMap[treatment.iconName] || Sparkles

  return (
    <Card
      variant="white"
      interactive
      onClick={() => openModal(treatment.id)}
      className="relative flex flex-col justify-between h-full group transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          openModal(treatment.id)
        }
      }}
      aria-label={`Book ${treatment.title}, starting from ${treatment.startingPrice}`}
    >
      <div>
        {/* Top Icon & Badge Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-full bg-oceanic-light border border-oceanic/20 flex items-center justify-center text-oceanic group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-200">
            <IconComponent size={22} strokeWidth={1.75} />
          </div>

          {treatment.isPopular && (
            <Badge variant="popular">
              Most Popular
            </Badge>
          )}
        </div>

        {/* Treatment Title */}
        <h3 className="font-heading font-bold text-[19px] leading-[26px] tracking-tight text-obsidian mb-2.5 group-hover:text-primary transition-colors">
          {treatment.title}
        </h3>

        {/* Clinical Description */}
        <p className="text-sm text-bodyText leading-relaxed">
          {treatment.description}
        </p>
      </div>

      {/* Action Footer */}
      <div className="pt-5 mt-6 border-t border-border-light flex items-center justify-between">
        <span className="text-xs font-heading font-medium text-bodyText-muted">
          From <span className="font-bold text-obsidian">{treatment.startingPrice}</span>
        </span>

        <span className="inline-flex items-center gap-1.5 text-sm font-heading font-bold text-primary group-hover:text-primary-hover transition-colors">
          <span>Book Now</span>
          <ArrowRight
            size={15}
            strokeWidth={2}
            className="group-hover:translate-x-1 transition-transform"
          />
        </span>
      </div>
    </Card>
  )
}
