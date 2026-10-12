import { NavLinkItem } from '@/types/common'

export const HEADER_NAV_LINKS: NavLinkItem[] = [
  { label: 'Specialised Dentistry', href: '#treatments' },
  { label: 'Our Doctors', href: '#doctor' },
  { label: 'Patient Stories', href: '#testimonials' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const FOOTER_NAV_LINKS = {
  treatments: [
    { label: 'Dental Implants', href: '#treatments' },
    { label: 'Teeth Whitening', href: '#treatments' },
    { label: 'Root Canal Treatment', href: '#treatments' },
    { label: 'Crowns & Bridges', href: '#treatments' },
    { label: 'Veneers & Aesthetics', href: '#treatments' },
    { label: 'Emergency Dentistry', href: '#treatments' },
  ],
  clinic: [
    { label: 'About Dr. Kanishka', href: '#doctor' },
    { label: 'Clinical Sanctuary', href: '#why-us' },
    { label: 'Patient Reviews', href: '#testimonials' },
    { label: 'Clinic Tour & Gallery', href: '#location' },
    { label: 'Pricing & Transparency', href: '#how-it-works' },
  ],
  support: [
    { label: 'Emergency Protocol', href: '#faq' },
    { label: 'Directions & Parking', href: '#contact' },
    { label: 'Insurance & Payment', href: '#faq' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Patient Rights', href: '#' },
  ],
}
