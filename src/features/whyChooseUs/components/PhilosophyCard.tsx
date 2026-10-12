import React from 'react'
import { LucideIcon } from 'lucide-react'
import { Card } from '@/components/ui/Card'

export interface PhilosophyCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export const PhilosophyCard: React.FC<PhilosophyCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <Card
      variant="dark"
      className="text-left transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 shadow-elevation-2 group flex flex-col justify-between"
    >
      <div>
        <div className="w-12 h-12 rounded-full bg-obsidian-muted/50 border border-obsidian-muted flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-primary/20 transition-all">
          <Icon size={22} strokeWidth={1.75} className="text-[#38BDF8]" />
        </div>
        <h3 className="font-heading font-bold text-xl text-white mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  )
}
