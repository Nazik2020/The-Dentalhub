export interface PatientReview {
  id: string
  patientName: string
  rating: number // 1 to 5
  comment: string
  procedureReceived: string
  date: string
  verified: boolean
  avatarUrl?: string
}
