import React from 'react'
import { Card } from '@/components/ui/Card'

export interface StepCardProps {
  stepNumber: number
  title: string
  description: string
}

export const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  description,
}) => {
  return (
    <Card
      variant="white"
      className="flex flex-col items-center text-center p-6 sm:p-8 h-full justify-between"
    >
      <div className="flex flex-col items-center">
        {/* Number Badge */}
        <div className="w-12 h-12 rounded-full bg-oceanic-light text-oceanic font-heading font-extrabold text-base sm:text-lg flex items-center justify-center mb-5 border border-oceanic/25 shadow-2xs">
          0{stepNumber}
        </div>

        <h3 className="font-heading font-bold text-lg text-obsidian mb-2.5 tracking-tight">
          {title}
        </h3>

        <p className="text-sm text-bodyText leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  )
}
