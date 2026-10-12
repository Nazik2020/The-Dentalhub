export type AppointmentStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed'

export interface PatientDetails {
  fullName: string
  email: string
  phone: string
  isFirstVisit: boolean
  notes?: string
}

export interface AppointmentBookingPayload {
  patient: PatientDetails
  doctorId?: string
  treatmentId: string
  preferredDate: string
  preferredTimeSlot: string
}

export interface AppointmentBookingConfirmation {
  bookingId: string
  createdAt: string
  status: AppointmentStatus
  payload: AppointmentBookingPayload
}
