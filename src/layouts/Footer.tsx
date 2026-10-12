import React from 'react'
import { Sparkles, Phone, MessageSquare, MapPin, Mail, Clock } from 'lucide-react'
import { CLINIC_INFO } from '@/constants/clinicInfo'
import { FOOTER_NAV_LINKS } from '@/constants/navigation'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian-dark text-slate-300 pt-16 pb-12 border-t border-obsidian-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-obsidian-muted/40">
          {/* Column 1 & 2: Clinic Brand */}
          <div className="lg:col-span-2 space-y-4 pr-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-oceanic-dark flex items-center justify-center text-primary border border-primary/25">
                <Sparkles size={20} strokeWidth={1.5} className="text-white" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                THE DENTAL HUB
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Creating smiles, with gentle care in Galle, Sri Lanka. Modern dentistry with zero anxiety, led by Dr. Kanishka Mudaliige (BDS, MSc Implantology).
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <p className="flex items-center gap-2">
                <MapPin size={14} strokeWidth={1.5} className="text-[#38BDF8] shrink-0" />
                <span>{CLINIC_INFO.location.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={14} strokeWidth={1.5} className="text-[#38BDF8] shrink-0" />
                <span>{CLINIC_INFO.hours.weekdays}</span>
              </p>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {FOOTER_NAV_LINKS.clinic.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Treatments */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-4">
              Treatments
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {FOOTER_NAV_LINKS.treatments.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Direct Contact */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <a
                href={`tel:${CLINIC_INFO.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
              >
                <Phone size={15} strokeWidth={1.5} className="text-[#38BDF8]" />
                <span>{CLINIC_INFO.contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${CLINIC_INFO.contact.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
              >
                <Mail size={15} strokeWidth={1.5} className="text-[#38BDF8]" />
                <span>{CLINIC_INFO.contact.email}</span>
              </a>
              <a
                href={`https://wa.me/${CLINIC_INFO.contact.whatsapp.replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:underline pt-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
              >
                <MessageSquare size={16} strokeWidth={1.5} />
                <span>WhatsApp: {CLINIC_INFO.contact.whatsappDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} The Dental Hub Galle. All rights reserved. Registered Dental Healthcare Facility Sri Lanka.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Care</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Patient Safety Protocol</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
