import React from 'react'
import { MessageSquare } from 'lucide-react'
import { TopContactBar } from './TopContactBar'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { CLINIC_INFO } from '@/constants/clinicInfo'

export interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-bodyText-dark overflow-x-hidden relative">
      <TopContactBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Floating WhatsApp Quick Action Button: circular FAB on mobile, pill with label on sm+ */}
      <a
        href={`https://wa.me/${CLINIC_INFO.contact.whatsapp.replace(/\+/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 w-12 h-12 sm:w-auto sm:h-auto bg-whatsapp text-white sm:px-4 sm:py-3 rounded-pill shadow-lg hover:shadow-xl hover:bg-whatsapp-hover transition-all duration-200 flex items-center justify-center gap-2 font-heading font-bold text-sm hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-whatsapp"
        aria-label="Direct WhatsApp message"
      >
        <MessageSquare size={20} strokeWidth={1.75} />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </div>
  )
}
