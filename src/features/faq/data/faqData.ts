export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How are dental implants done and are they painful?',
    answer:
      'Dental implants replace missing tooth roots with biocompatible titanium anchors, topped by custom porcelain crowns. Thanks to modern profound local anesthesia and precision 3D surgical planning, the procedure itself is virtually painless. Most patients report feeling only mild pressure, and return to normal activities within 24 to 48 hours.',
  },
  {
    id: 'faq-2',
    question: 'Do you accept walk-in emergency patients?',
    answer:
      'Yes, absolutely. We prioritize urgent emergency cases—such as severe toothaches, facial swelling, broken crowns, or trauma—on the very same day. If you are in acute pain, please call our hotline or message us via WhatsApp immediately so we can prep a operatory for your arrival.',
  },
  {
    id: 'faq-3',
    question: 'How does teeth whitening work and how long does it last?',
    answer:
      'We use an advanced in-office laser whitening system combined with desensitizing minerals. It gently breaks down deep stains caused by tea, coffee, and spices in about 60 minutes. With good oral hygiene and periodic touch-ups, whitening results typically last between 12 to 24 months.',
  },
  {
    id: 'faq-4',
    question: 'What are your clinic opening hours?',
    answer:
      'We are open Monday through Friday from 8:30 AM to 7:00 PM, and Saturdays from 9:00 AM to 5:00 PM. On Sundays, our facility is closed for routine consultations, but our clinical team remains on-call for emergency triage.',
  },
  {
    id: 'faq-5',
    question: 'Where exactly is the clinic located in Galle?',
    answer:
      'Our clinic sanctuary is situated inside the UNESCO World Heritage Galle Fort at No. 42, Rampart Street, Galle 80000. It is located right across from the historic Ramparts and Light House with convenient parking nearby.',
  },
]
