export interface Doctor {
  id: string
  name: string
  title: string
  specialization: string
  qualifications: string[]
  experienceYears: number
  photoUrl: string
  bio: string
  availableDays: string[]
  rating: number
  reviewCount: number
}
