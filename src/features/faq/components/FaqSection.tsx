import React, { useState } from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FaqAccordionItem } from './FaqAccordionItem'
import { FAQ_DATA } from '../data/faqData'

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id)

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className="py-20 bg-canvas">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="ANSWERS"
          title="Common questions."
          subtitle="Clear answers about our procedures, comfort protocols, and booking instructions."
          align="center"
        />

        <div className="space-y-3.5">
          {FAQ_DATA.map((item) => (
            <FaqAccordionItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
