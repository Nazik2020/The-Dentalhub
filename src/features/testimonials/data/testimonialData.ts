export interface TestimonialItem {
  id: string
  name: string
  badge?: string
  rating: number
  quote: string
  procedure: string
  publishedAt: string
  date: string
  verifiedSource: string
}

/**
 * Dynamically calculates relative time ("2 weeks ago", "1 month ago", "4 months ago")
 * from an ISO date string so review timestamps stay accurate as days pass.
 */
export function getRelativeReviewDate(publishedAt: string, fallback: string): string {
  const published = new Date(publishedAt)
  if (isNaN(published.getTime())) return fallback

  const now = new Date()
  const diffMs = Math.max(0, now.getTime() - published.getTime())
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays < 7) return diffDays <= 1 ? '1 day ago' : `${diffDays} days ago`
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7)
    return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`
  }
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30)
    return months === 1 ? 'a month ago' : `${months} months ago`
  }
  const years = Math.floor(diffDays / 365)
  return years === 1 ? 'a year ago' : `${years} years ago`
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'rev-1',
    name: 'Asela Dinesh Pinthu',
    badge: 'Local Guide • 6 reviews',
    rating: 5,
    quote:
      'I recently had an excellent experience at The Dental Hub in Galle and highly recommend Dr. Kanishka Mudalige. The clinic interior is spotless, the charges are very reasonable, and every step of the treatment was handled with genuine care and professionalism.',
    procedure: 'General & Restorative Care',
    publishedAt: '2026-09-10',
    date: 'a month ago',
    verifiedSource: 'Google Review',
  },
  {
    id: 'rev-2',
    name: 'Dulari G.',
    badge: 'Verified Patient',
    rating: 5,
    quote:
      'The dentist is genuinely kind and stands out from others. I usually dread dental visits due to traumatic childhood experiences, but he made me feel at ease right from the start. I felt no pain when he extracted a tooth or during fillings. I travel all the way from Colombo for my treatments, and it is truly worth it.',
    procedure: 'Pain-Free Extraction & Fillings',
    publishedAt: '2026-06-12',
    date: '4 months ago',
    verifiedSource: 'Google Review',
  },
  {
    id: 'rev-3',
    name: 'Jayangani L.',
    badge: 'Verified Patient',
    rating: 5,
    quote:
      'I highly recommend this place for anyone in need of outstanding care. The staff are incredibly friendly, and the doctor exudes confidence, clearly demonstrating expertise and always providing the best advice. The dental office is clean, comfortable, and prices are quite reasonable. Thank you once again, doctor, for the painless and successful nerve filling.',
    procedure: 'Root Canal / Nerve Filling',
    publishedAt: '2026-06-10',
    date: '4 months ago',
    verifiedSource: 'Google Review',
  },
]
