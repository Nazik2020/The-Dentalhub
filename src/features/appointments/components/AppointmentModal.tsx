import React from 'react'
import { Modal } from '@/components/ui/Modal'
import { BookingForm } from './BookingForm'
import { useAppointmentModal } from '@/context/AppointmentModalContext'

export const AppointmentModal: React.FC = () => {
  const { isOpen, closeModal, preselectedTreatment } = useAppointmentModal()

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      title="Book a Dental Consultation"
      description="Experience anxiety-free, gentle dentistry under Dr. Kanishka Mudaliige."
      maxWidth="md"
    >
      <BookingForm
        initialTreatmentId={preselectedTreatment}
        onSuccess={() => {
          // Modal can stay open to show success confirmation
        }}
      />
    </Modal>
  )
}
