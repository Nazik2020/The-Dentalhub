export interface TestimonialItem {
  id: string
  name: string
  rating: number
  quote: string
  procedure: string
  date: string
  verifiedSource: string
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'rev-1',
    name: 'Dilshan Samarasinghe',
    rating: 5,
    quote:
      'I used to dread any dental visits due to traumatic childhood memories. Dr. Kanishka and his team turned that around completely. The clinic looks like a luxury boutique, and the root canal was genuinely painless. Truly Galle’s premier clinic.',
    procedure: 'Root Canal & Zirconia Crown',
    date: '2 weeks ago',
    verifiedSource: 'Google Review',
  },
  {
    id: 'rev-2',
    name: 'Elena Rostova',
    rating: 5,
    quote:
      'Traveling across Sri Lanka when an excruciating tooth emergency struck. The Dental Hub took me in immediately without waiting. Dr. Kanishka explained every scan in English, fixed my tooth gently, and the pricing was completely honest.',
    procedure: 'Emergency Dental Relief',
    date: '1 month ago',
    verifiedSource: 'Google Review',
  },
  {
    id: 'rev-3',
    name: 'Chamari Wickramasinghe',
    rating: 5,
    quote:
      'Got my full dental implants and porcelain veneers completed here. I can now smile confidently and eat whatever I like. The calming sea breeze aura and Dr. Kanishka’s surgical expertise made it an effortless experience.',
    procedure: 'Full Arch Dental Implants',
    date: '2 months ago',
    verifiedSource: 'Google Review',
  },
]
