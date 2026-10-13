import React from 'react'
import { Heart, Compass, ShieldCheck } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PhilosophyCard } from './PhilosophyCard'

export const WhyChooseUsSection: React.FC = () => {
  const pillars = [
    {
      icon: Heart,
      title: 'A breath-first treatment philosophy',
      description:
        'From gentle reception greetings to relaxed post-op care, we honor your pace. We listen attentively and never begin any step until you are thoroughly prepared and numb.',
    },
    {
      icon: Compass,
      title: 'Every step explained clearly',
      description:
        'No confusing jargon, hidden expenses, or forced procedures. We utilize high-definition 3D intraoral imagery so you clearly see your teeth and collaborate on your treatment roadmap.',
    },
    {
      icon: ShieldCheck,
      title: 'Your comfort comes first',
      description:
        'Noise-cancelling audio, warm blankets, ergonomic memory-foam chairs, and clinically tested gentle anesthesia create an anxiety-free sanctuary for adults and children.',
    },
  ]

  return (
    <section id="why-us" className="py-14 sm:py-20 bg-obsidian-dark text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-oceanic-dark/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          tag="THE SANCTUARY STANDARD"
          title="Why patients choose us."
          subtitle="A radical departure from clinical anxiety, fear, and rushed appointments."
          align="center"
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => (
            <PhilosophyCard
              key={index}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
