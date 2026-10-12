import React from 'react'
import { DoctorProfileCard } from './DoctorProfileCard'
import { DoctorCredentials } from './DoctorCredentials'

export const DoctorSection: React.FC = () => {
  return (
    <section id="doctor" className="py-20 bg-canvas-subtle border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <DoctorProfileCard />
          </div>
          <div className="lg:col-span-7">
            <DoctorCredentials />
          </div>
        </div>
      </div>
    </section>
  )
}
