import React from 'react'
import { ShieldCheck, HeartHandshake, Sparkles, Clock } from 'lucide-react'

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Clock,
      title: '24/7 Acute Triage',
      description: 'Emergency dental relief prioritized on-call',
    },
    {
      icon: HeartHandshake,
      title: '250+ Verified 5-Star Reviews',
      description: 'Galle’s most trusted patient ratings on Google',
    },
    {
      icon: Sparkles,
      title: 'Pain-Free Technology',
      description: 'Gentle local anesthesia & modern precision',
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Pricing',
      description: 'Clear treatment plans with zero surprises',
    },
  ]

  return (
    <section className="bg-white border-y border-border-light py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-3 rounded-2xl transition-colors hover:bg-canvas-subtle"
              >
                <div className="w-11 h-11 rounded-full bg-oceanic-light border border-oceanic/20 shadow-2xs flex items-center justify-center shrink-0 text-oceanic">
                  <IconComponent size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-obsidian text-sm md:text-[15px] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-bodyText mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
