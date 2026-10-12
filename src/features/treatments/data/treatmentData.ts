export interface TreatmentItem {
  id: string
  title: string
  description: string
  category: 'all' | 'general' | 'cosmetic' | 'restorative' | 'surgical' | 'emergency'
  duration: string
  isPopular?: boolean
  startingPrice: string
  iconName: 'sparkles' | 'activity' | 'shield' | 'zap' | 'smile' | 'scissors' | 'award' | 'stethoscope' | 'alert'
}

export const TREATMENTS_DATA: TreatmentItem[] = [
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    description: 'Medical-grade laser and take-home whitening kits that lift deep coffee and tea stains up to 8 shades lighter without enamel sensitivity.',
    category: 'cosmetic',
    duration: '60 mins',
    startingPrice: '$120',
    iconName: 'sparkles',
  },
  {
    id: 'root-canal',
    title: 'Root Canal Therapy',
    description: 'Painless endodontic precision using micro-rotary technology to eliminate infection and preserve your natural tooth structure permanently.',
    category: 'restorative',
    duration: '90 mins',
    startingPrice: '$200',
    iconName: 'activity',
  },
  {
    id: 'crowns-bridges',
    title: 'Crowns & Bridges',
    description: 'Custom ceramic and high-translucency zirconia crowns crafted with digital 3D scans to restore structural integrity and seamless aesthetics.',
    category: 'restorative',
    duration: '2 sessions',
    startingPrice: '$250',
    iconName: 'shield',
  },
  {
    id: 'scaling-polishing',
    title: 'Scaling & Polishing',
    description: 'Deep hygienic ultrasonic scaling and gentle airflow polishing to eliminate calculus, bacterial bio-film, and prevent periodontitis.',
    category: 'general',
    duration: '45 mins',
    startingPrice: '$60',
    iconName: 'zap',
  },
  {
    id: 'emergency-dentistry',
    title: 'Emergency Dentistry',
    description: 'Immediate acute pain relief, management of chipped or knocked-out teeth, and rapid infection management with zero waiting time.',
    category: 'emergency',
    duration: 'Immediate',
    startingPrice: '$80',
    iconName: 'alert',
  },
  {
    id: 'veneers-makeovers',
    title: 'Veneers & Smile Makeovers',
    description: 'Ultra-thin custom porcelain laminate veneers designed to correct alignment, gaps, and severe discoloration for a red-carpet smile.',
    category: 'cosmetic',
    duration: '2-3 sessions',
    startingPrice: '$350',
    iconName: 'smile',
  },
  {
    id: 'wisdom-tooth-surgery',
    title: 'Wisdom Tooth Surgery',
    description: 'Gentle, minimally invasive surgical extractions of impacted third molars performed under localized profound anesthesia and sedation.',
    category: 'surgical',
    duration: '60 mins',
    startingPrice: '$180',
    iconName: 'scissors',
  },
  {
    id: 'braces-aligners',
    title: 'Braces & Clear Aligners',
    description: 'Modern clear aligner therapy and ceramic bracket orthodontics providing discreet bite alignment for adults, teens, and children.',
    category: 'cosmetic',
    duration: '6-18 months',
    startingPrice: '$900',
    iconName: 'award',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    description: 'Gold-standard titanium and ceramic root replacements anchored into bone, topped with bespoke zirconia crowns for natural chewing strength.',
    category: 'surgical',
    duration: 'Surgical consult',
    isPopular: true,
    startingPrice: '$850',
    iconName: 'stethoscope',
  },
]
