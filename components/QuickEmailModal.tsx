'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Send, Check } from 'lucide-react'
import { useTheme } from 'next-themes'
import { sendQuickMessage, type QuickMessageData } from '@/app/actions/quick-message'

interface QuickEmailModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QuickEmailModal({ isOpen, onClose }: QuickEmailModalProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Lock body scroll when modal is open and scroll to top
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.top = `-${window.scrollY}px`
    } else {
      const scrollY = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [isOpen])

  const isDark = mounted && theme === 'dark'

  const [formData, setFormData] = useState<QuickMessageData>({
    name: '',
    email: '',
    message: ''
  })

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
        setIsSuccess(false)
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className={`w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl p-6 shadow-2xl pointer-events-auto ${
                isDark
                  ? 'bg-gray-900 border border-gray-800'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className={`absolute top-4 right-4 p-2 rounded-lg transition-colors ${
                  isDark
                    ? 'hover:bg-gray-800 text-gray-400 hover:text-gray-200'
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              {isSuccess ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                    Message Sent!
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    We'll get back to you shortly at the email you provided.
                  </p>
                </motion.div>
              ) : (
                /* Form State */
                <>
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-orange to-orange-600 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <h3 className={`text-xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                        Quick Message
                      </h3>
                    </div>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Send us a message and we'll respond within 24 hours.
                    </p>
                    <div className={`mt-3 p-3 rounded-lg border ${
                      isDark
                        ? 'bg-gray-950 border-gray-800'
                        : 'bg-gray-50 border-gray-200'
                    }`}>
                      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        Or email us directly at:
                      </p>
                      <a
                        href="mailto:contact@cshift.io"
                        className="text-sm font-semibold text-brand-orange hover:text-brand-orange-dark transition-colors"
                      >
                        contact@cshift.io
                      </a>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg text-sm ${
                          isDark
                            ? 'bg-gray-950 border border-gray-800 text-gray-100 focus:border-brand-orange'
                            : 'bg-white border border-gray-200 text-gray-900 focus:border-brand-orange'
                        } focus:outline-none focus:ring-2 focus:ring-brand-orange/20`}
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg text-sm ${
                          isDark
                            ? 'bg-gray-950 border border-gray-800 text-gray-100 focus:border-brand-orange'
                            : 'bg-white border border-gray-200 text-gray-900 focus:border-brand-orange'
                        } focus:outline-none focus:ring-2 focus:ring-brand-orange/20`}
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg text-sm resize-none ${
                          isDark
                            ? 'bg-gray-950 border border-gray-800 text-gray-100 focus:border-brand-orange'
                            : 'bg-white border border-gray-200 text-gray-900 focus:border-brand-orange'
                        } focus:outline-none focus:ring-2 focus:ring-brand-orange/20`}
                        placeholder="How can we help you?"
                      />
                    </div>

                    {error && (
                      <div className={`p-3 rounded-lg border ${
                        isDark
                          ? 'bg-red-900/20 border-red-800 text-red-400'
                          : 'bg-red-50 border-red-200 text-red-600'
                      }`}>
                        <p className="text-sm">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-lg font-semibold text-sm hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
