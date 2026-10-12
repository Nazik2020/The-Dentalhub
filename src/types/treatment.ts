export type TreatmentCategory = 
  | 'all'
  | 'general'
  | 'cosmetic'
  | 'orthodontics'
  | 'surgical'
  | 'pediatric'

export interface Treatment {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  category: TreatmentCategory
  estimatedDuration: string
  startingPrice: number
  isPopular?: boolean
  features: string[]
  iconName: string
}
