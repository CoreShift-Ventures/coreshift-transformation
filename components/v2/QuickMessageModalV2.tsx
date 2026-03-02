'use client'

import React, { useState, useEffect } from 'react'
import { sendQuickMessage, type QuickMessageData } from '@/app/actions/quick-message'

interface QuickMessageModalV2Props {
  isOpen: boolean
  onClose: () => void
}

export function QuickMessageModalV2({ isOpen, onClose }: QuickMessageModalV2Props) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState<QuickMessageData>({
    name: '',
    email: '',
    message: ''
  })

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setIsSuccess(false)
        setError(null)
      }, 300)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await sendQuickMessage(formData)

      if (!result.success) {
        setError(result.error || 'Failed to send message')
        setIsSubmitting(false)
        return
      }

      setIsSuccess(true)
      setFormData({ name: '', email: '', message: '' })

      // Close modal after 2 seconds
      setTimeout(() => {
        onClose()
      }, 2000)
    } catch (err) {
      console.error('Submission error:', err)
      setError('An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
        <div
          className={`w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.15)] pointer-events-auto bg-white/95 backdrop-blur-xl border border-white/80 transition-all duration-300 ${
            isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
          }`}
        >
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4d65ff] via-[#7c8cff] to-[#4d65ff] rounded-t-2xl" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg transition-colors hover:bg-[#f5f5f5] text-[#888] hover:text-[#1a1a1a]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <div className="p-6 pt-8">
            {isSuccess ? (
              /* Success State */
              <div className="text-center py-8 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#22c55e]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#22c55e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3 className="font-space text-[20px] font-medium text-[#1a1a1a] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[13px] text-[#666]">
                  We'll get back to you shortly at the email you provided.
                </p>
              </div>
            ) : (
              /* Form State */
              <>
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <h3 className="font-space text-[20px] font-medium text-[#1a1a1a]">
                      Quick Message
                    </h3>
                  </div>
                  <p className="text-[13px] text-[#666]">
                    Send us a message and we'll respond within 24 hours.
                  </p>
                  <div className="mt-3 p-3 rounded-lg bg-[#f8f9fa] border border-[#e5e5e5]">
                    <p className="text-[11px] text-[#888]">
                      Or email us directly at:
                    </p>
                    <a
                      href="mailto:contact@cshift.io"
                      className="text-[13px] font-medium text-[#4d65ff] hover:text-[#1a1a1a] transition-colors"
                    >
                      contact@cshift.io
                    </a>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-semibold mb-1.5 uppercase tracking-[1px] text-[#666]">
                      Your Name <span className="text-[#4d65ff]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-lg border text-[13px] transition-all bg-white border-[#e0e0e0] text-[#1a1a1a] placeholder-[#999] focus:border-[#4d65ff] focus:outline-none focus:ring-2 focus:ring-[#4d65ff]/20"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold mb-1.5 uppercase tracking-[1px] text-[#666]">
                      Your Email <span className="text-[#4d65ff]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-lg border text-[13px] transition-all bg-white border-[#e0e0e0] text-[#1a1a1a] placeholder-[#999] focus:border-[#4d65ff] focus:outline-none focus:ring-2 focus:ring-[#4d65ff]/20"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold mb-1.5 uppercase tracking-[1px] text-[#666]">
                      Message <span className="text-[#4d65ff]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-lg border text-[13px] transition-all resize-none bg-white border-[#e0e0e0] text-[#1a1a1a] placeholder-[#999] focus:border-[#4d65ff] focus:outline-none focus:ring-2 focus:ring-[#4d65ff]/20"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {error && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600">
                      <p className="text-[13px]">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white rounded-lg text-[11px] font-semibold uppercase tracking-[1.5px] transition-all hover:bg-[#4d65ff] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#1a1a1a]"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="22" y1="2" x2="11" y2="13"/>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  )
}
