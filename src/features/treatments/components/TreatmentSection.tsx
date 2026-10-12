import React, { useState } from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TreatmentCard } from './TreatmentCard'
import { TreatmentFilter, FilterOption } from './TreatmentFilter'
import { TREATMENTS_DATA } from '../data/treatmentData'

const FILTER_OPTIONS: FilterOption[] = [
  { id: 'all', label: 'All Treatments' },
  { id: 'general', label: 'General & Hygiene' },
  { id: 'cosmetic', label: 'Cosmetic & Veneers' },
  { id: 'restorative', label: 'Restorative Care' },
  { id: 'surgical', label: 'Implants & Surgery' },
  { id: 'emergency', label: 'Emergency' },
]

export const TreatmentSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredTreatments = TREATMENTS_DATA.filter((item) => {
    if (activeCategory === 'all') return true
    return item.category === activeCategory
  })

  return (
    <section id="treatments" className="py-20 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          tag="TREATMENTS"
          title="Everything your smile needs."
          subtitle="From preventative hygiene to complex restorative reconstruction led by Dr. Kanishka Mudaliige, experience world-class clinical precision with a gentle touch."
        />

        {/* Category Pill Filters */}
        <div className="mb-10">
          <TreatmentFilter
            options={FILTER_OPTIONS}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* 12-Column Responsive Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredTreatments.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </div>
    </section>
  )
}
