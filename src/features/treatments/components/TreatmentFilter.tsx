import React from 'react'
import { Badge } from '@/components/ui/Badge'

export interface FilterOption {
  id: string
  label: string
}

export interface TreatmentFilterProps {
  options: FilterOption[]
  activeCategory: string
  onSelectCategory: (id: string) => void
}

export const TreatmentFilter: React.FC<TreatmentFilterProps> = ({
  options,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div
      role="tablist"
      aria-label="Treatment categories"
      className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
    >
      {options.map((opt) => {
        const isActive = activeCategory === opt.id
        return (
          <button
            key={opt.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(opt.id)}
            className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-pill shrink-0"
          >
            <Badge
              variant={isActive ? 'active' : 'inactive'}
              className="py-2 px-4 sm:px-5 text-xs sm:text-sm transition-all"
            >
              {opt.label}
            </Badge>
          </button>
        )
      })}
    </div>
  )
}
