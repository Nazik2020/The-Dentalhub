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

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={`https://wa.me/${CLINIC_INFO.contact.whatsapp.replace(/\+/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-whatsapp text-white px-4 py-3 rounded-pill shadow-lg hover:shadow-xl hover:bg-whatsapp-hover transition-all duration-200 flex items-center gap-2 font-heading font-bold text-sm hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-whatsapp"
        aria-label="Direct WhatsApp message"
      >
        <MessageSquare size={18} strokeWidth={1.5} />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </div>
  )
}
