import React, { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/utils/cn'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  children: React.ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  maxWidth = 'lg',
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') {
        onClose()
        return
      }

      // Simple focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusableElements.length === 0) return

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            e.preventDefault()
          }
        }
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      // Focus close button initially
      setTimeout(() => {
        closeButtonRef.current?.focus()
      }, 50)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const maxWidthStyles = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-3xl',
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby={description ? 'modal-description' : undefined}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-obsidian/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div
        ref={modalRef}
        className={cn(
          'relative w-full bg-white rounded-card p-6 sm:p-8 shadow-elevation-3 border border-border-light z-10 my-4 sm:my-8 transition-all animate-in fade-in-50 zoom-in-95 duration-200',
          maxWidthStyles[maxWidth]
        )}
      >
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-canvas-subtle hover:bg-canvas-container flex items-center justify-center text-bodyText hover:text-obsidian transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label="Close dialog"
        >
          <X size={18} strokeWidth={2} />
        </button>

        {title && (
          <div className="mb-6 pr-8 text-left">
            <h3 id="modal-title" className="text-xl sm:text-2xl font-heading font-extrabold text-obsidian tracking-tight">
              {title}
            </h3>
            {description && (
              <p id="modal-description" className="mt-1 text-sm text-bodyText">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="mt-2">{children}</div>
      </div>
    </div>
  )
}
