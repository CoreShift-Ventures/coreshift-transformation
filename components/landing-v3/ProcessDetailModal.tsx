// @ts-nocheck
'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

interface Process {
  id: string
  icon: any
  title: string
  description: string
  aiCapabilities: {
    shiftiq: string
    compassai: string
  }
  usedBy: string[]
  category: string
  badge?: string
  screenshots?: string[]
}

interface ProcessDetailModalProps {
  process: Process | null
  onClose: () => void
  isDark: boolean
}

export default function ProcessDetailModal({ process, onClose, isDark }: ProcessDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const autoScrollInterval = useRef<NodeJS.Timeout>()

  // Auto-scroll carousel every 3-4 seconds
  useEffect(() => {
    if (!process || !isAutoScrolling || !process.screenshots) return

    autoScrollInterval.current = setInterval(() => {
      setCurrentImageIndex(prev =>
        prev === (process.screenshots?.length || 0) - 1 ? 0 : prev + 1
      )
    }, 3500) // 3.5 seconds per image

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current)
      }
    }
  }, [process, isAutoScrolling])

  // Reset state when modal opens/closes
  useEffect(() => {
    if (process) {
      setCurrentImageIndex(0)
      setIsAutoScrolling(true)
    }
  }, [process])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxImage) {
          setLightboxImage(null)
        } else {
          onClose()
        }
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose, lightboxImage])

  // Prevent body scroll when modal open
  useEffect(() => {
    if (process) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [process])

  if (!process) return null

  const Icon = process.icon
  const screenshots = process.screenshots || []

  const nextImage = () => {
    setCurrentImageIndex(prev =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    )
    setIsAutoScrolling(false) // Stop auto-scroll on manual navigation
  }

  const prevImage = () => {
    setCurrentImageIndex(prev =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    )
    setIsAutoScrolling(false)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
    setIsAutoScrolling(false)
  }

  return (
    <>
      {/* Modal Overlay */}
      <AnimatePresence>
        {process && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            {/* Modal Content */}
            <motion.div
              className={`relative w-full max-w-5xl max-h-[90vh] rounded-lg shadow-2xl overflow-y-auto ${
                isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white'
              }`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className={`absolute top-6 right-6 z-10 p-2 rounded-full shadow-lg transition-colors duration-200 ${
                  isDark
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-100'
                    : 'bg-white/90 backdrop-blur-sm hover:bg-gray-100 text-gray-700'
                }`}
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-20 h-20 rounded-lg bg-brand-orange
                                flex items-center justify-center flex-shrink-0"
                       style={{ boxShadow: '0 10px 40px -10px rgba(236, 95, 43, 0.3)' }}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight ${
                      isDark ? 'text-gray-100' : 'text-brand-charcoal'
                    }`}>
                      {process.title}
                    </h2>
                    {process.badge && (
                      <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3 ${
                        isDark
                          ? 'bg-orange-900/30 text-orange-300'
                          : 'bg-orange-50 text-orange-700'
                      }`}>
                        {process.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className={`text-base sm:text-lg mb-8 leading-relaxed font-light ${
                  isDark ? 'text-gray-400' : 'text-brand-gray'
                }`}>
                  {process.description}
                </p>

                {/* Screenshot Carousel */}
                {screenshots.length > 0 && (
                  <div
                    className={`mb-10 relative rounded-lg overflow-hidden ${
                      isDark ? 'bg-gray-800' : 'bg-gray-100'
                    }`}
                    onMouseEnter={() => setIsAutoScrolling(false)}
                    onMouseLeave={() => setIsAutoScrolling(true)}
                  >
                    {/* Image Container */}
                    <div className={`relative aspect-video w-full ${
                      isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-100 to-gray-200'
                    }`}>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          className="absolute inset-0 flex items-center justify-center"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.5 }}
                        >
                          {/* Placeholder for screenshots (will be replaced with actual images) */}
                          <div className={`w-full h-full flex items-center justify-center ${
                            isDark
                              ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                              : 'bg-gradient-to-br from-orange-50 to-orange-100'
                          }`}>
                            <div className="text-center p-8">
                              <Icon className={`w-24 h-24 mx-auto mb-4 ${
                                isDark ? 'text-orange-400/30' : 'text-orange-300'
                              }`} />
                              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                Screenshot {currentImageIndex + 1} of {screenshots.length}
                              </p>
                              <p className={`text-xs mt-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                {screenshots[currentImageIndex]?.split('/').pop()}
                              </p>
                            </div>
                          </div>

                          {/* Lightbox button */}
                          <button
                            onClick={() => setLightboxImage(screenshots[currentImageIndex])}
                            className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-lg
                                     hover:bg-black/70 transition-colors duration-200"
                            aria-label="View full size"
                          >
                            <Maximize2 className="w-5 h-5 text-white" />
                          </button>
                        </motion.div>
                      </AnimatePresence>

                      {/* Navigation Arrows */}
                      {screenshots.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm
                                     rounded-full hover:bg-black/70 transition-colors duration-200"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="w-6 h-6 text-white" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm
                                     rounded-full hover:bg-black/70 transition-colors duration-200"
                            aria-label="Next image"
                          >
                            <ChevronRight className="w-6 h-6 text-white" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Dot Navigation */}
                    {screenshots.length > 1 && (
                      <div className={`flex justify-center gap-2 py-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                        {screenshots.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToImage(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              index === currentImageIndex
                                ? 'w-8 bg-brand-orange'
                                : isDark
                                  ? 'w-2 bg-gray-600 hover:bg-gray-500'
                                  : 'w-2 bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    Key Features:
                  </h3>
                  <ul className="space-y-3">
                    {getKeyFeatures(process.id).map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 w-5 h-5 rounded-full bg-brand-orange
                                        flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </span>
                        <span className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-brand-gray'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AI Capabilities */}
                <div className={`mb-8 p-6 rounded-lg border ${
                  isDark
                    ? 'bg-gray-800/50 border-gray-700'
                    : 'bg-orange-50 border-orange-100'
                }`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    AI Capabilities:
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <span className="text-2xl">⚡</span>
                      <div>
                        <strong className="text-brand-orange">ShiftIQ:</strong>
                        <p className={`mt-1 text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-brand-gray'}`}>
                          {getAIDescription(process.id).shiftiq}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">🧭</span>
                      <div>
                        <strong className="text-brand-orange">CompassAI:</strong>
                        <p className={`mt-1 text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-brand-gray'}`}>
                          {getAIDescription(process.id).compassai}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Used By */}
                <div className="mb-8">
                  <h3 className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Used by:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {process.usedBy.map((industry, i) => (
                      <span
                        key={i}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          isDark
                            ? 'bg-gray-800 text-gray-300'
                            : 'bg-orange-50 text-gray-700'
                        }`}
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 px-8 py-4 bg-brand-orange text-white
                                    rounded-lg font-semibold text-base shadow-lg hover:shadow-xl
                                    hover:bg-brand-orange-dark
                                    transform hover:scale-105 transition-all duration-300">
                    Get This Template →
                  </button>
                  <button className={`px-8 py-4 border-2 rounded-lg font-semibold text-base
                                   transform hover:scale-105 transition-all duration-300 ${
                                     isDark
                                       ? 'bg-gray-900 border-gray-700 text-gray-100 hover:border-gray-600'
                                       : 'bg-white border-gray-200 text-gray-900 hover:border-gray-300'
                                   }`}>
                    Book Demo
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-sm rounded-full
                       hover:bg-white/20 transition-colors duration-200"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8 text-white" />
            </button>
            <motion.div
              className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <div className={`rounded-lg p-8 text-center ${
                isDark
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                  : 'bg-gradient-to-br from-orange-50 to-orange-100'
              }`}>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Screenshot Preview</p>
                <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{lightboxImage}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Helper functions for detailed content
function getKeyFeatures(processId: string): string[] {
  const features: Record<string, string[]> = {
    'lead-conversion': [
      'Lead capture from all sources (web, email, phone)',
      'Smart routing by territory, availability, and expertise',
      'Pipeline Kanban with drag-and-drop',
      'Activity timeline with automated task creation',
      'Mobile app for on-the-go updates'
    ],
    'customer-success': [
      'Customer health score dashboard',
      'Automated onboarding playbooks',
      'Renewal pipeline management',
      'Usage analytics and engagement tracking',
      'Proactive churn risk detection'
    ],
    'revenue-operations': [
      'Unified sales and customer metrics',
      'Revenue forecasting with AI',
      'Pipeline velocity tracking',
      'Deal health scoring',
      'Executive dashboard with real-time updates'
    ],
    'order-management': [
      'Order intake from multiple channels',
      'Production queue management',
      'Real-time status tracking',
      'Quality checkpoints and alerts',
      'Automated dispatch and customer notifications'
    ],
    'inventory': [
      'Multi-location stock tracking',
      'Smart reorder point alerts',
      'Supplier management',
      'Purchase order automation',
      'Stock movement history'
    ],
    'appointments': [
      'Online booking portal for customers',
      'Calendar integration and management',
      'Automated reminders (SMS/Email)',
      'Service history tracking',
      'Resource scheduling optimization'
    ],
    'project-management': [
      'Project overview and task boards',
      'Client collaboration portal',
      'Time and milestone tracking',
      'File sharing and documentation',
      'Team workload balancing'
    ],
    'invoicing': [
      'Time and expense tracking',
      'Automated invoice generation',
      'Payment reminders and tracking',
      'Multi-currency support',
      'Integration with accounting systems'
    ],
    'expenses': [
      'Purchase request workflows',
      'Multi-level approval routing',
      'Expense categorization and tracking',
      'Budget monitoring and alerts',
      'Vendor management'
    ]
  }

  return features[processId] || []
}

function getAIDescription(processId: string): { shiftiq: string; compassai: string } {
  const descriptions: Record<string, { shiftiq: string; compassai: string }> = {
    'lead-conversion': {
      shiftiq: 'Auto-assign leads based on territory, availability, and past performance. Trigger follow-up sequences automatically.',
      compassai: 'Predict conversion probability and recommend next best actions to maximize win rates.'
    },
    'customer-success': {
      shiftiq: 'Automatically trigger onboarding playbooks and renewal workflows based on customer milestones.',
      compassai: 'Monitor health scores and predict churn risk before it happens.'
    },
    'revenue-operations': {
      shiftiq: 'Sync data across sales and customer success systems automatically.',
      compassai: 'Forecast revenue trends and identify at-risk deals with AI-powered insights.'
    },
    'order-management': {
      shiftiq: 'Send automated status updates to customers and quality checkpoint reminders to teams.',
      compassai: 'Predict potential delays and suggest corrective actions before they impact delivery.'
    },
    'inventory': {
      shiftiq: 'Trigger reorder alerts when stock hits minimum thresholds across locations.',
      compassai: 'Forecast demand patterns and optimize reorder quantities.'
    },
    'appointments': {
      shiftiq: 'Send automated reminders and follow-up messages to customers.',
      compassai: 'Optimize scheduling based on resource availability and service duration patterns.'
    },
    'project-management': {
      shiftiq: 'Automate task assignments and status updates across team members.',
      compassai: 'Predict project timelines and identify potential bottlenecks.'
    },
    'invoicing': {
      shiftiq: 'Generate invoices automatically from time entries and send payment reminders.',
      compassai: 'Predict payment delays and recommend collection strategies.'
    },
    'expenses': {
      shiftiq: 'Route approval requests automatically based on amount and category rules.',
      compassai: 'Alert on budget overruns and anomalous spending patterns.'
    }
  }

  return descriptions[processId] || { shiftiq: '', compassai: '' }
}
