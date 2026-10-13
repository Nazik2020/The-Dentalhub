import React, { useState, useEffect } from 'react'
import { Phone, Menu, X, Sparkles } from 'lucide-react'
import { HEADER_NAV_LINKS } from '@/constants/navigation'
import { CLINIC_INFO } from '@/constants/clinicInfo'
import { Button } from '@/components/ui/Button'
import { useAppointmentModal } from '@/context/AppointmentModalContext'

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openModal } = useAppointmentModal()

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-40 bg-obsidian/95 backdrop-blur-md border-b border-obsidian-muted/40 transition-all shadow-elevation-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-3">
          {/* Logo - shrink-0 & whitespace-nowrap prevents 2-line wrapping */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-oceanic-dark flex items-center justify-center text-primary group-hover:scale-105 transition-transform border border-primary/25 shadow-sm shrink-0">
              <Sparkles size={18} strokeWidth={1.75} className="text-white" />
            </div>
            <div className="whitespace-nowrap">
              <span className="font-heading font-bold text-base sm:text-lg xl:text-xl tracking-normal text-white block leading-tight">
                THE DENTAL HUB
              </span>
              <span className="text-[10px] font-heading font-semibold text-[#38BDF8] tracking-widest uppercase block">
                Galle • Sanctuary
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - whitespace-nowrap guarantees single-line rendering */}
          <nav
            className="hidden lg:flex items-center gap-0.5 xl:gap-1.5"
            aria-label="Main Navigation"
          >
            {HEADER_NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-[13px] xl:text-[14px] font-heading font-medium text-slate-200 hover:text-white hover:bg-white/5 px-2.5 xl:px-3 py-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3.5 shrink-0">
            <a
              href={`tel:${CLINIC_INFO.contact.phone.replace(/\s+/g, '')}`}
              className="hidden xl:flex items-center gap-2 whitespace-nowrap text-sm font-heading font-semibold text-slate-200 hover:text-white px-3 py-2 rounded-full hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Phone size={15} strokeWidth={1.75} className="text-[#38BDF8] shrink-0" />
              <span>{CLINIC_INFO.contact.phoneDisplay}</span>
            </a>

            <Button
              variant="primary"
              size="md"
              onClick={() => openModal()}
              className="shadow-sm font-bold whitespace-nowrap px-5 xl:px-6"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile & Tablet Menu Controls */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <Button
              variant="primary"
              size="sm"
              onClick={() => openModal()}
              className="sm:hidden text-xs px-3.5 h-9 whitespace-nowrap"
            >
              Book Now
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-obsidian-muted/40 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={22} strokeWidth={1.75} />
              ) : (
                <Menu size={22} strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian border-b border-obsidian-muted/40 px-4 pt-3 pb-6 shadow-elevation-3 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {HEADER_NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-heading font-semibold text-slate-100 hover:text-white py-3 px-3.5 rounded-xl hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-obsidian-muted/40 flex flex-col gap-3">
              <a
                href={`tel:${CLINIC_INFO.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 text-sm font-heading font-semibold text-[#38BDF8] py-2.5 px-3.5 rounded-xl bg-white/5"
              >
                <Phone size={16} strokeWidth={1.75} />
                <span>Call Clinic: {CLINIC_INFO.contact.phoneDisplay}</span>
              </a>
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  setMobileMenuOpen(false)
                  openModal()
                }}
                className="w-full"
              >
                Book Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
