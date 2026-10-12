import React, { createContext, useContext, useState, ReactNode } from 'react'

interface AppointmentModalContextType {
  isOpen: boolean
  preselectedTreatment: string
  openModal: (treatmentId?: string) => void
  closeModal: () => void
}

const AppointmentModalContext = createContext<AppointmentModalContextType | undefined>(undefined)

export const AppointmentModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [preselectedTreatment, setPreselectedTreatment] = useState('')

  const openModal = (treatmentId?: string) => {
    if (treatmentId) {
      setPreselectedTreatment(treatmentId)
    } else {
      setPreselectedTreatment('')
    }
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <AppointmentModalContext.Provider
      value={{
        isOpen,
        preselectedTreatment,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppointmentModalContext.Provider>
  )
}

export function useAppointmentModal() {
  const context = useContext(AppointmentModalContext)
  if (!context) {
    throw new Error('useAppointmentModal must be used within an AppointmentModalProvider')
  }
  return context
}
