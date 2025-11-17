'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import {
  Target,
  Rocket,
  TrendingUp,
  Package,
  BarChart3,
  Calendar,
  CheckSquare,
  FileText,
  CreditCard,
  Check,
  ArrowUpRight,
  Settings2,
  DollarSign
} from 'lucide-react'

type Category = 'grow-revenue' | 'run-operations' | 'manage-money'

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
  category: Category
  badge?: string
  screenshots?: string[]
}

const processes: Process[] = [
  // === GROW REVENUE (3 processes) ===
  {
    id: 'lead-conversion',
    icon: Target,
    title: 'Lead Acquisition and Conversion',
    description: 'Automated lead routing, pipeline visibility, and intelligent follow-ups',
    aiCapabilities: {
      shiftiq: 'ShiftIQ routing',
      compassai: 'CompassAI scoring'
    },
    usedBy: ['Real Estate', 'Agencies', 'B2B Sales', 'Professional Svcs'],
    category: 'grow-revenue',
    screenshots: [
      '/screenshots/lead-conversion/pipeline.jpg',
      '/screenshots/lead-conversion/detail.jpg',
      '/screenshots/lead-conversion/scoring.jpg',
      '/screenshots/lead-conversion/mobile.jpg',
      '/screenshots/lead-conversion/dashboard.jpg'
    ]
  },
  {
    id: 'customer-success',
    icon: Rocket,
    title: 'Customer Onboarding and Success',
    description: 'Proactive customer success with health monitoring, playbooks, and renewal pipeline',
    aiCapabilities: {
      shiftiq: 'ShiftIQ playbooks',
      compassai: 'CompassAI health scores'
    },
    usedBy: ['SaaS', 'Subscription Services', 'Managed Services'],
    category: 'grow-revenue',
    badge: 'CoreShift CX Platform'
  },
  {
    id: 'revenue-operations',
    icon: TrendingUp,
    title: 'Revenue Operations Intelligence',
    description: 'Unified view of sales pipeline, customer health, and revenue forecasting',
    aiCapabilities: {
      shiftiq: 'ShiftIQ data sync',
      compassai: 'CompassAI forecasting'
    },
    usedBy: ['Any B2B Business', 'Sales-Driven Organizations'],
    category: 'grow-revenue'
  },

  // === RUN OPERATIONS (4 processes) ===
  {
    id: 'order-management',
    icon: Package,
    title: 'Order to Delivery Orchestration',
    description: 'End-to-end order management from intake to dispatch with real-time tracking',
    aiCapabilities: {
      shiftiq: 'ShiftIQ status updates',
      compassai: 'CompassAI delay prediction'
    },
    usedBy: ['Manufacturing', 'D2C', 'Automotive', 'Food Services'],
    category: 'run-operations'
  },
  {
    id: 'inventory',
    icon: BarChart3,
    title: 'Inventory and Procurement Management',
    description: 'Real-time stock tracking with smart reordering and supplier coordination',
    aiCapabilities: {
      shiftiq: 'ShiftIQ reorder alerts',
      compassai: 'CompassAI demand forecast'
    },
    usedBy: ['Retail', 'Distribution', 'Pharmacies', 'Restaurants'],
    category: 'run-operations'
  },
  {
    id: 'appointments',
    icon: Calendar,
    title: 'Service Scheduling and Field Operations',
    description: 'Online booking, calendar management, and service history tracking',
    aiCapabilities: {
      shiftiq: 'ShiftIQ reminders',
      compassai: 'CompassAI scheduling optimization'
    },
    usedBy: ['Healthcare', 'Salons', 'Automotive Service', 'Consultants'],
    category: 'run-operations'
  },
  {
    id: 'project-management',
    icon: CheckSquare,
    title: 'Project and Task Execution',
    description: 'Project tracking, task boards, and client collaboration portals',
    aiCapabilities: {
      shiftiq: 'ShiftIQ task automation',
      compassai: 'CompassAI timeline prediction'
    },
    usedBy: ['Agencies', 'IT Services', 'Construction', 'Consulting'],
    category: 'run-operations'
  },

  // === MANAGE MONEY (2 processes) ===
  {
    id: 'invoicing',
    icon: FileText,
    title: 'Billing and Invoicing Automation',
    description: 'Automated invoicing, time/expense tracking, and payment reminders',
    aiCapabilities: {
      shiftiq: 'ShiftIQ invoice generation',
      compassai: 'CompassAI payment prediction'
    },
    usedBy: ['Professional Services', 'Agencies', 'Freelancers'],
    category: 'manage-money'
  },
  {
    id: 'expenses',
    icon: CreditCard,
    title: 'Expense and Procurement Tracking',
    description: 'Purchase request workflows, approval routing, and expense tracking',
    aiCapabilities: {
      shiftiq: 'ShiftIQ approval routing',
      compassai: 'CompassAI budget alerts'
    },
    usedBy: ['Any Growing Business', 'Multi-Department Organizations'],
    category: 'manage-money'
  }
]

const categories = [
  {
    id: 'grow-revenue' as Category,
    icon: ArrowUpRight,
    label: 'Accelerate Revenue',
    tagline: 'Focus: sales → onboarding → customer value → renewals'
  },
  {
    id: 'run-operations' as Category,
    icon: Settings2,
    label: 'Optimize Operations',
    tagline: 'Automate fulfillment, inventory, and service delivery'
  },
  {
    id: 'manage-money' as Category,
    icon: DollarSign,
    label: 'Control Financial Flows',
    tagline: 'Streamline invoicing, expenses, and financial operations'
  }
]

// Large Video Showcase Component (Screen Studio Style)
function ProcessShowcase({ process, index, isDark }: {
  process: Process
  index: number
  isDark: boolean
}) {
  const [imageError, setImageError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [clickStartPos, setClickStartPos] = useState({ x: 0, y: 0 })
  const Icon = process.icon

  const handlePlayClick = (e: React.MouseEvent) => {
    // Only toggle if not dragging (check if mouse moved significantly)
    const deltaX = Math.abs(e.clientX - clickStartPos.x)
    const deltaY = Math.abs(e.clientY - clickStartPos.y)
    if (deltaX < 5 && deltaY < 5) {
      setIsPlaying(!isPlaying)
    }
  }

  const handlePlayMouseDown = (e: React.MouseEvent) => {
    setClickStartPos({ x: e.clientX, y: e.clientY })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="flex-shrink-0 w-[65vw] max-w-[700px] snap-center group"
    >
      {/* Video Panel - V2 Theme */}
      <div className={`relative rounded-xl overflow-hidden mb-5 border ${
        isDark ? 'border-gray-800 shadow-lg' : 'border-gray-200 shadow-lg'
      }`}>
        <div className="relative h-[50vh] min-h-[380px] max-h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
          {process.screenshots?.[0] && !imageError ? (
            <Image
              src={process.screenshots[0]}
              alt={`${process.title} - Demo`}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              onError={() => setImageError(true)}
              priority={index === 0}
            />
          ) : (
            // Elegant Placeholder
            <div className="w-full h-full bg-gradient-to-br from-[#ec5f2b]/20 via-gray-900 to-gray-800 flex items-center justify-center">
              <div className="text-center">
                <Icon className="w-32 h-32 text-[#ec5f2b]/30 mx-auto mb-6" strokeWidth={1} />
                <h4 className="text-2xl font-bold text-gray-400 mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm">Demo video coming soon</p>
              </div>
            </div>
          )}

          {/* Play/Pause Button Overlay - V2 Theme */}
          <button
            onMouseDown={handlePlayMouseDown}
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center group/play cursor-pointer"
          >
            <div className={`w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 ${
              isPlaying
                ? 'opacity-0 group-hover/play:opacity-90'
                : 'opacity-90 group-hover/play:scale-110 group-hover/play:bg-white'
            }`}>
              {isPlaying ? (
                // Pause Icon
                <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="7" y="5" width="3" height="14" rx="1" />
                  <rect x="14" y="5" width="3" height="14" rx="1" />
                </svg>
              ) : (
                // Play Icon
                <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Caption Info Below Panel - V2 Theme */}
      <div className="px-2">
        {/* Title with Icon */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#ec5f2b] to-[#d94f1f] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
            <Icon className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h3 className={`text-base md:text-lg font-bold leading-tight mb-1 ${
              isDark ? 'text-gray-100' : 'text-brand-charcoal'
            }`}>
              {process.title}
            </h3>
            <p className={`text-xs md:text-sm leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-brand-gray'
            }`}>
              {process.description}
            </p>
          </div>
        </div>

        {/* AI Capabilities + Badge */}
        <div className="flex flex-wrap gap-2 text-xs ml-13">
          <span className={`px-2.5 py-1 rounded-md border ${
            isDark
              ? 'bg-gray-900/50 border-gray-800 text-gray-400'
              : 'bg-gray-50 border-gray-200 text-gray-600'
          }`}>
            {process.aiCapabilities.shiftiq}
          </span>
          <span className={`px-2.5 py-1 rounded-md border ${
            isDark
              ? 'bg-gray-900/50 border-gray-800 text-gray-400'
              : 'bg-gray-50 border-gray-200 text-gray-600'
          }`}>
            {process.aiCapabilities.compassai}
          </span>
          {process.badge && (
            <span className="px-2.5 py-1 rounded-md border border-orange-500/30 bg-orange-500/10 text-orange-600 text-[10px] font-semibold">
              {process.badge}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// Category Section Component with Horizontal Scroll
function CategorySection({ category, categoryIndex, isDark }: {
  category: typeof categories[0]
  categoryIndex: number
  isDark: boolean
}) {
  const categoryProcesses = processes.filter(p => p.category === category.id)
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = React.useState(false)
  const [startX, setStartX] = React.useState(0)
  const [scrollLeft, setScrollLeft] = React.useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
    scrollRef.current.style.cursor = 'grabbing'
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab'
    }
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      if (scrollRef.current) {
        scrollRef.current.style.cursor = 'grab'
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
      className="mb-16"
    >
      {/* Category Header - V2 Theme */}
      <div className="mb-8 px-6 md:px-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#ec5f2b] to-[#d94f1f] rounded-xl shadow-lg flex items-center justify-center">
            {React.createElement(category.icon, { className: 'w-6 h-6 text-white', strokeWidth: 2 })}
          </div>
          <div>
            <h3 className={`text-2xl md:text-3xl font-bold mb-1 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              {category.label}
            </h3>
            <p className={`text-xs md:text-sm ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
              {categoryProcesses.length} Solutions • {category.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        {/* Scrollable container */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="flex gap-6 overflow-x-auto scrollbar-hide pl-12 md:pl-20 pr-6 md:pr-10 pb-6 snap-x snap-mandatory cursor-grab select-none"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {categoryProcesses.map((process, index) => (
            <ProcessShowcase
              key={process.id}
              process={process}
              index={index}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function ProcessSolutionsGrid() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  return (
    <section className={`py-16 relative ${isDark ? 'bg-black' : 'bg-white'} overflow-hidden`}>
      {/* Section Header - V2 Theme */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Pre-Engineered Process Accelerators
          </h2>
          <p className={`text-sm max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Battle-tested workflow blueprints customized for your business in 2 weeks
          </p>
        </motion.div>
      </div>

      {/* Category Sections */}
      {categories.map((category, categoryIndex) => (
        <CategorySection
          key={category.id}
          category={category}
          categoryIndex={categoryIndex}
          isDark={isDark}
        />
      ))}
    </section>
  )
}

