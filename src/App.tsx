import { AppointmentModalProvider } from '@/context/AppointmentModalContext'
import { MainLayout, TrustStrip } from '@/layouts'
import { HeroSection } from '@/features/hero'
import { TreatmentSection } from '@/features/treatments'
import { DoctorSection } from '@/features/doctors'
import { WhyChooseUsSection } from '@/features/whyChooseUs'
import { TestimonialSection } from '@/features/testimonials'
import { HowItWorksSection } from '@/features/howItWorks'
import { BookingCardSection, AppointmentModal } from '@/features/appointments'
import { FaqSection } from '@/features/faq'
import { LocationSection } from '@/features/location'

export default function App() {
  return (
    <AppointmentModalProvider>
      <MainLayout>
        {/* 1. Hero Section with Clinical Visual & 4.9 Star Rating */}
        <HeroSection />

        {/* 2. Four Pillars Trust Strip */}
        <TrustStrip />

        {/* 3. Treatments & Services with Category Filter Chips */}
        <TreatmentSection />

        {/* 4. Meet Dr. Kanishka Mudaliige (Lead Clinician Profile) */}
        <DoctorSection />

        {/* 5. Why Patients Choose Us (Obsidian Deep Framing) */}
        <WhyChooseUsSection />

        {/* 6. Testimonials & Verified Google Reviews */}
        <TestimonialSection />

        {/* 7. How It Works (3-step quick booking flow) */}
        <HowItWorksSection />

        {/* 8. Dedicated Interactive Booking Form Card */}
        <BookingCardSection />

        {/* 9. Common Questions Accordion */}
        <FaqSection />

        {/* 10. Visit Us in Galle Fort (Map & Directions) */}
        <LocationSection />

        {/* Global Accessible Appointment Booking Modal */}
        <AppointmentModal />
      </MainLayout>
    </AppointmentModalProvider>
  )
}
