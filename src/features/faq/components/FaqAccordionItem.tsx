import React, { useId } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/utils/cn'

export interface FaqAccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export const FaqAccordionItem: React.FC<FaqAccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  const uniqueId = useId()
  const headerId = `faq-header-${uniqueId}`
  const panelId = `faq-panel-${uniqueId}`

  return (
    <div
      className={cn(
        'rounded-2xl border transition-all duration-200 overflow-hidden text-left',
        isOpen
          ? 'bg-white border-primary shadow-elevation-1'
          : 'bg-white border-border-light hover:border-border-medium'
      )}
    >
      <button
        id={headerId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full py-5 px-6 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
      >
        <span className="font-heading font-bold text-base md:text-[17px] text-obsidian leading-snug">
          {question}
        </span>
        <div
          className={cn(
            'w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200',
            isOpen
              ? 'bg-primary text-white rotate-180'
              : 'bg-canvas-subtle text-bodyText hover:text-obsidian'
          )}
          aria-hidden="true"
        >
          <ChevronDown size={18} strokeWidth={2} />
        </div>
      </button>

      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={headerId}
          className="px-6 pb-6 pt-1 text-sm md:text-base text-bodyText leading-relaxed border-t border-border-light/80 animate-in fade-in-50 duration-150"
        >
          {answer}
        </div>
      )}
    </div>
  )
}
