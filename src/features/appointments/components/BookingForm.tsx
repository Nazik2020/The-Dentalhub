import React, { useState, useEffect } from 'react'
import { CheckCircle2, Phone, MessageSquare } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { CLINIC_INFO } from '@/constants/clinicInfo'
import { TREATMENTS_DATA } from '@/features/treatments/data/treatmentData'
import { AppointmentService } from '@/services/appointmentService'

export interface BookingFormProps {
  initialTreatmentId?: string
  onSuccess?: () => void
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialTreatmentId = '',
  onSuccess,
}) => {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [treatment, setTreatment] = useState(initialTreatmentId)
  const [preferredDate, setPreferredDate] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [bookingId, setBookingId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setTreatment(initialTreatmentId || '')
  }, [initialTreatmentId])

  const treatmentOptions = TREATMENTS_DATA.map((t) => ({
    value: t.id,
    label: `${t.title} (${t.startingPrice})`,
  }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName.trim()) {
      setError('Please provide your full name.')
      return
    }
    if (!phone.trim()) {
      setError('Please provide a valid phone number for confirmation.')
      return
    }

    setError('')
    setIsLoading(true)

    try {
      const response = await AppointmentService.requestBooking({
        patient: {
          fullName: fullName.trim(),
          phone: phone.trim(),
          email: '',
          isFirstVisit: true,
        },
        treatmentId: treatment || 'general-checkup',
        preferredDate: preferredDate.trim() || 'Flexible',
        preferredTimeSlot: 'Flexible',
      })

      setIsLoading(false)
      if (response.data) {
        setBookingId(response.data.bookingId)
      }
      setIsSubmitted(true)
      if (onSuccess) onSuccess()
    } catch {
      setIsLoading(false)
      setError('Unable to submit request right now. Please reach us directly via phone or WhatsApp.')
    }
  }

  if (isSubmitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="text-center py-8 px-5 space-y-4 bg-emerald-50 rounded-2xl border border-emerald-200"
      >
        <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 size={30} strokeWidth={2.5} />
        </div>
        <h3 className="font-heading font-bold text-2xl text-emerald-950">
          Appointment Requested!
        </h3>
        {bookingId && (
          <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-emerald-200 text-xs text-emerald-900 shadow-2xs">
            <span className="font-medium text-emerald-700">Reference ID:</span>
            <span className="font-mono font-bold tracking-wider">{bookingId}</span>
          </div>
        )}
        <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-bold text-emerald-950">{fullName}</span>. Our patient coordinator will contact you via WhatsApp or phone (<span className="font-semibold">{phone}</span>) shortly to finalize your exact slot.
        </p>
        <div className="pt-2">
          <Button
            variant="outline"
            size="md"
            onClick={() => {
              setIsSubmitted(false)
              setBookingId(null)
              setFullName('')
              setPhone('')
              setPreferredDate('')
            }}
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-left" noValidate>
      {error && (
        <div
          role="alert"
          className="p-3.5 text-xs sm:text-sm bg-red-50 border border-red-200 text-red-800 rounded-xl font-medium"
        >
          {error}
        </div>
      )}

      {/* Row 1: Patient Name & Phone Number (2 columns on sm+, 1 col on mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          placeholder="e.g., Nipun Gunaratne"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <Input
          label="Phone / WhatsApp Number"
          type="tel"
          placeholder="e.g., +94 71 986 8990"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      {/* Row 2: Treatment Needed & Preferred Date/Time (2 columns on sm+, 1 col on mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          label="Treatment Needed"
          placeholder="Select a Treatment"
          options={treatmentOptions}
          value={treatment}
          onChange={(e) => setTreatment(e.target.value)}
        />

        <Input
          label="Preferred Date / Time"
          placeholder="e.g., Wednesday morning"
          value={preferredDate}
          onChange={(e) => setPreferredDate(e.target.value)}
        />
      </div>

      {/* Submit Button */}
      <div className="pt-1">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isLoading}
          className="w-full shadow-sm"
        >
          Request Appointment
        </Button>
      </div>

      {/* Direct Contact Alternative */}
      <div className="pt-5 border-t border-border-light text-center">
        <p className="text-xs text-bodyText-muted mb-3 font-heading font-medium">
          Prefer an immediate response? Connect directly:
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
          <a
            href={`tel:${CLINIC_INFO.contact.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto min-h-[42px] inline-flex items-center justify-center gap-2 text-xs font-heading font-bold text-obsidian bg-canvas-subtle hover:bg-canvas-container border border-border-medium px-5 py-2.5 rounded-pill transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Phone size={14} strokeWidth={1.75} className="text-primary" />
            <span>Call Clinic</span>
          </a>
          <a
            href={`https://wa.me/${CLINIC_INFO.contact.whatsapp.replace(/\+/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[42px] inline-flex items-center justify-center gap-2 text-xs font-heading font-bold text-white bg-whatsapp hover:bg-whatsapp-hover px-5 py-2.5 rounded-pill transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-whatsapp"
          >
            <MessageSquare size={14} strokeWidth={1.75} />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </form>
  )
}
