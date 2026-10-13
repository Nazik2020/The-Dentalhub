import React from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StepCard } from './StepCard'

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      stepNumber: 1,
      title: 'Choose a treatment',
      description:
        'Select from routine checkups, teeth whitening, clear aligners, or an implant surgical consultation.',
    },
    {
      stepNumber: 2,
      title: 'Call, WhatsApp or request online',
      description:
        'Pick your preferred date and time slot. Our patient care concierge responds promptly within minutes.',
    },
    {
      stepNumber: 3,
      title: 'Walk in & rediscover your smile',
      description:
        'Arrive at our serene Hirimbura Road clinic in Galle and receive anxiety-free, gentle dentistry in an architectural sanctuary.',
    },
  ]

  return (
    <section id="how-it-works" className="py-14 sm:py-20 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="HASSLE-FREE APPOINTMENTS"
          title="Booking takes a minute."
          subtitle="Three straightforward steps to secure your visit with zero anxiety and zero delay."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <StepCard
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
