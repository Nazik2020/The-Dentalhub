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
      'Dental implants replace missing tooth roots with biocompatible titanium anchors, topped by custom porcelain crowns. Thanks to modern profound local anesthesia and precision surgical planning, the procedure itself is virtually painless. Most patients report feeling only mild pressure, and return to normal activities within 24 to 48 hours.',
  },
  {
    id: 'faq-2',
    question: 'Do you accept walk-in emergency patients?',
    answer:
      'Yes, absolutely. We prioritize urgent emergency cases—such as severe toothaches, facial swelling, broken crowns, or trauma—on the very same day. If you are in acute pain, please call +94 71 986 8990 or message us via WhatsApp immediately so we can prepare an operatory for your arrival.',
  },
  {
    id: 'faq-3',
    question: 'How does teeth whitening work and how long does it last?',
    answer:
      'We use an advanced in-office whitening system combined with desensitizing minerals. It gently breaks down deep stains caused by tea, coffee, and spices in about 60 minutes. With good oral hygiene and periodic touch-ups, whitening results typically last between 12 to 24 months.',
  },
  {
    id: 'faq-4',
    question: 'What are your clinic opening hours?',
    answer:
      'We are open Monday through Friday from 4:30 PM to 8:30 PM, Saturdays from 9:00 AM to 12:00 PM and 4:30 PM to 8:30 PM, and Sundays from 4:00 PM to 8:30 PM. You can also message us anytime on WhatsApp (+94 71 986 8990) to reserve your slot.',
  },
  {
    id: 'faq-5',
    question: 'Where exactly is the clinic located in Galle?',
    answer:
      'The Dental Hub is located at 185 Hirimbura Road, Kahaduwawatta, Galle 80000, Sri Lanka. It is easily accessible along Hirimbura Road with convenient parking right outside the clinic.',
  },
]
