'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import {
  ArrowRight, Monitor, Sparkles, AlertCircle, TrendingUp, Clock, Bell, CheckCircle2, X, Maximize2, ChevronLeft, ChevronRight
} from 'lucide-react'

const caseStudies = [
  // LIVE PROJECTS
  {
    industry: 'Automotive',
    shortName: 'LeadIQ',
    productName: 'LeadIQ',
    tagline: 'Fleet compliance platform',
    outcomeHeadline: 'From data silos to real-time lead intelligence',
    status: 'live',
    challenges: [
      'Fragmented compliance data across multiple sources',
      'Manual tracking of 7+ critical checkpoints',
      'Missed renewals leading to penalties & downtime'
    ],
    solutionBrief: 'Intelligent fleet compliance platform that aggregates data from multiple providers and delivers real-time dashboards with proactive alerts.',
    whatWeBuilt: [
      'Real-time compliance dashboard',
      'Automated data sync engine',
      'Smart filters & bulk validation',
      'Export & offline companion app'
    ],
    techStack: ['React', 'PostgreSQL', 'Tailwind', 'Python', 'API'],
    outcomeMetrics: [
      { value: '95%', label: 'Compliance Accuracy' },
      { value: '>40hrs', label: 'Saved Monthly' },
      { value: '3x', label: 'Lead Conversion' },
      { value: 'Real-time', label: 'Data Sync' }
    ],
    screenshots: [
      '/screenshots/LeadIQ/LeadIQ_1.png',
      '/screenshots/LeadIQ/LeadIQ_2.png',
      '/screenshots/LeadIQ/LeadIQ_3.png',
      '/screenshots/LeadIQ/LeadIQ_4.png',
      '/screenshots/LeadIQ/LeadIQ_5.png'
    ],
    screenshotLabel: 'Fleet Compliance Dashboard'
  },
  {
    industry: 'Financial Services',
    shortName: 'FundView',
    productName: 'FundView',
    tagline: 'Investor portal',
    outcomeHeadline: 'From 2-week reports to real-time investor visibility',
    status: 'live',
    challenges: [
      'Investor statements taking 2+ weeks per quarter',
      'Investor inquiries stuck in email for 48-72 hours',
      'Spreadsheet tracking with no real-time visibility'
    ],
    solutionBrief: 'Automated data pipeline from accounting system to live dashboards, with self-service investor portal and audit-ready report generation.',
    whatWeBuilt: [
      'Real-time fund performance dashboard',
      'Self-service investor portal',
      'Automated statement generation',
      'Multi-currency calculations'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    outcomeMetrics: [
      { value: '2wks→0', label: 'Report Time' },
      { value: '100%', label: 'Self-Service' },
      { value: 'Real-time', label: 'Data Sync' },
      { value: 'Audit-ready', label: 'Reports' }
    ],
    screenshots: [
      '/screenshots/FundView/Finance_1.png',
      '/screenshots/FundView/Finance_2.png',
      '/screenshots/FundView/Finance_3.png',
      '/screenshots/FundView/Finance_4.png'
    ],
    screenshotLabel: 'Fund Performance Dashboard'
  },
  // IN PROGRESS PROJECTS
  {
    industry: 'Healthcare',
    shortName: 'ClaimFlow',
    productName: 'ClaimFlow',
    tagline: 'Claims & collections platform',
    outcomeHeadline: 'Real-time visibility into every claim, every payer, every dollar',
    status: 'in-progress',
    challenges: [
      'Claims stuck in spreadsheets, no visibility',
      'Manual follow-ups falling through cracks',
      'Millions in revenue sitting uncollected'
    ],
    solutionBrief: 'Purpose-built platform that centralizes claim tracking, automates follow-up workflows, and provides real-time visibility into aging receivables.',
    whatWeBuilt: [
      'Centralized claims tracking',
      'Automated follow-up workflows',
      'Aging analytics dashboard',
      'Role-based access & escalations'
    ],
    techStack: ['React', 'PostgreSQL', 'Workflow Engine', 'Analytics'],
    outcomeMetrics: [
      { value: '2,800+', label: 'Claims Tracked' },
      { value: '$1.2M+', label: 'AR Managed' },
      { value: '4', label: 'Workflow Stages' },
      { value: '12', label: 'Agents Supported' }
    ],
    screenshots: [
      '/screenshots/ClaimFlow/Healthcare_2.png',
      '/screenshots/ClaimFlow/Healthcare_3.png',
      '/screenshots/ClaimFlow/Healthcare_4.png'
    ],
    screenshotLabel: 'Claims Management Dashboard'
  },
  {
    industry: 'B2B SaaS (HRMS)',
    shortName: 'WorkMate',
    productName: 'WorkMate',
    tagline: 'Ops platform for HRMS',
    outcomeHeadline: 'From reactive support to proactive customer success',
    status: 'in-progress',
    challenges: [
      'No visibility into customer module adoption',
      'Renewal risks discovered too late to act',
      'Upsell conversations lack usage data'
    ],
    solutionBrief: 'B2B operations platform providing real-time adoption tracking, automated health scoring, and proactive renewal management for HRMS businesses.',
    whatWeBuilt: [
      'Adoption intelligence dashboard',
      'Automated health scoring',
      '90-day renewal pipeline',
      'Playbook-driven engagement'
    ],
    techStack: ['React', 'PostgreSQL', 'Analytics', 'ShiftIQ (AI)'],
    outcomeMetrics: [
      { value: '14', label: 'Modules Tracked' },
      { value: '90-day', label: 'Renewal Pipeline' },
      { value: '100%', label: 'Health Visibility' },
      { value: 'Automated', label: 'Playbooks' }
    ],
    screenshots: [
      '/screenshots/WorkMate/CX_HRMS_1.png',
      '/screenshots/WorkMate/CX_HRMS_2.png'
    ],
    screenshotLabel: 'B2B Ops Dashboard'
  },
  {
    industry: 'B2B SaaS',
    shortName: 'SaaS Ops',
    productName: 'SaaS Ops Platform',
    tagline: 'B2B SaaS operations platform',
    outcomeHeadline: 'From spreadsheet chaos to NRR-driven operations',
    status: 'in-progress',
    challenges: [
      'No visibility into customer health until renewal time',
      'Ops teams drowning in manual tracking across 5+ tools',
      'Expansion opportunities missed due to reactive workflows'
    ],
    solutionBrief: 'A purpose-built platform for B2B SaaS operations, health scoring, churn prediction, revenue analytics. Demonstrates our AI-native architecture approach.',
    whatWeBuilt: [
      'Predictive health scoring engine',
      'Automated playbook workflows',
      'NRR command center dashboard',
      'Ops productivity workspace'
    ],
    techStack: ['React', 'PostgreSQL', 'AI/ML', 'Workflow Engine'],
    outcomeMetrics: [
      { value: '90-day', label: 'Churn Prediction' },
      { value: '100%', label: 'Health Visibility' },
      { value: '3x', label: 'Ops Productivity' },
      { value: 'Automated', label: 'Playbooks' }
    ],
    screenshots: [
      '/screenshots/CS Engine/CS_Engine_1.png',
      '/screenshots/CS Engine/CS_Engine_2.png',
      '/screenshots/CS Engine/CS_Engine_3.png',
      '/screenshots/CS Engine/CS_Engine_4.png',
      '/screenshots/CS Engine/CS_Engine_5.png',
      '/screenshots/CS Engine/CS_Engine_6.png',
      '/screenshots/CS Engine/CS_Engine_7.png',
      '/screenshots/CS Engine/CS_Engine_8.png'
    ],
    screenshotLabel: 'SaaS Operations Platform'
  }
]

export default function CaseStudiesSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const [screenshotIndex, setScreenshotIndex] = useState(0)
  const [screenshotPaused, setScreenshotPaused] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [sectionInView, setSectionInView] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [mobileFullscreen, setMobileFullscreen] = useState<number | null>(null)
  const mobileCarouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToMobileCard = (index: number) => {
    if (mobileCarouselRef.current) {
      const cardWidth = mobileCarouselRef.current.scrollWidth / caseStudies.length
      mobileCarouselRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
      setCurrentIndex(index)
    }
  }

  const handleMobileScroll = () => {
    if (mobileCarouselRef.current) {
      const scrollLeft = mobileCarouselRef.current.scrollLeft
      const cardWidth = mobileCarouselRef.current.scrollWidth / caseStudies.length
      const newIndex = Math.round(scrollLeft / cardWidth)
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex)
        setProgress(0)
      }
    }
  }

  // Lock body scroll when expanded
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isExpanded])

  // Show hint when section comes into view, hide after 6 seconds
  useEffect(() => {
    if (sectionInView && !hasInteracted) {
      setShowHint(true)
      const timer = setTimeout(() => setShowHint(false), 6000)
      return () => clearTimeout(timer)
    }
  }, [sectionInView, hasInteracted])

  const isDark = mounted && theme === 'dark'
  const currentStudy = caseStudies[currentIndex]

  // Reset screenshot index and pause state when case study changes
  useEffect(() => {
    setScreenshotIndex(0)
    setScreenshotPaused(false)
  }, [currentIndex])

  // Auto-rotate screenshots every 2 seconds (pauses when user interacts)
  useEffect(() => {
    if (currentStudy.screenshots.length <= 1 || screenshotPaused) return

    const interval = setInterval(() => {
      setScreenshotIndex((prev) => (prev + 1) % currentStudy.screenshots.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [currentStudy.screenshots.length, currentIndex, screenshotPaused])

  // Auto-rotate every 8 seconds
  const rotateSlide = useCallback(() => {
    if (!isPaused) {
      setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
    }
  }, [isPaused])

  useEffect(() => {
    const interval = setInterval(rotateSlide, 10000)
    return () => clearInterval(interval)
  }, [rotateSlide])

  // Progress bar animation
  useEffect(() => {
    if (isPaused) return

    setProgress(0)
    const startTime = Date.now()
    const duration = 10000

    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / duration) * 100, 100)
      setProgress(newProgress)

      if (newProgress < 100) {
        requestAnimationFrame(updateProgress)
      }
    }

    const animationFrame = requestAnimationFrame(updateProgress)
    return () => cancelAnimationFrame(animationFrame)
  }, [currentIndex, isPaused])

  const handleTabClick = (index: number) => {
    setCurrentIndex(index)
    setProgress(0)
    setHasInteracted(true)
    setShowHint(false)
  }

  return (
    <section id="case-studies" className={`relative py-12 md:py-16 overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${isDark ? 'bg-[#ec5f2b]/5' : 'bg-[#ec5f2b]/3'}`} />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 px-6"
      >
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4 ${
          isDark ? 'bg-[#ec5f2b]/10 text-[#ec5f2b] border border-[#ec5f2b]/20' : 'bg-[#ec5f2b]/10 text-[#ec5f2b] border border-[#ec5f2b]/20'
        }`}>
          THE PORTFOLIO
        </span>
        <h2 className={`text-2xl md:text-3xl font-bold mb-3 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
          What We Build
        </h2>
        <p className={`text-sm md:text-base max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
          Real systems. Built to scale. Across industries.
        </p>
      </motion.div>

      {/* Mobile Swipeable Carousel */}
      <div className="lg:hidden px-4">
        <div
          ref={mobileCarouselRef}
          onScroll={handleMobileScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[85vw] snap-center"
            >
              <div className={`rounded-2xl border overflow-hidden ${
                isDark
                  ? 'bg-gray-900 border-gray-800'
                  : 'bg-white border-gray-200'
              } shadow-lg`}>
                {/* Status Badge & Title */}
                <div className={`p-4 border-b ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#ec5f2b] font-bold text-sm">{study.productName}</span>
                    {study.status === 'in-progress' && (
                      <span className={`px-2 py-0.5 rounded text-[9px] font-semibold uppercase ${
                        isDark ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        WIP
                      </span>
                    )}
                  </div>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{study.tagline}</p>
                </div>

                {/* Screenshot with fullscreen button */}
                <div className={`relative aspect-[16/10] ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
                  {study.screenshots.length > 0 ? (
                    <>
                      <img
                        src={study.screenshots[0]}
                        alt={study.screenshotLabel}
                        className="w-full h-full object-cover object-top"
                        draggable={false}
                      />
                      {/* Fullscreen button */}
                      <button
                        onClick={() => setMobileFullscreen(index)}
                        className={`absolute bottom-2 right-2 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                          isDark ? 'bg-black/60 text-white hover:bg-black/80' : 'bg-white/80 text-gray-700 hover:bg-white'
                        } backdrop-blur-sm shadow-lg`}
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Monitor className={`w-10 h-10 ${isDark ? 'text-gray-700' : 'text-gray-300'}`} strokeWidth={1} />
                    </div>
                  )}
                </div>

                {/* Outcome Headline */}
                <div className={`p-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                  <p className={`text-sm font-semibold leading-snug mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    "{study.outcomeHeadline}"
                  </p>

                  {/* Key Metrics - 2x2 Grid */}
                  {study.outcomeMetrics && study.outcomeMetrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-2">
                      {study.outcomeMetrics.slice(0, 4).map((metric, idx) => (
                        <div
                          key={idx}
                          className={`pl-2 border-l-2 border-[#ec5f2b] py-1.5 ${
                            isDark ? 'bg-gray-800/40' : 'bg-gray-50'
                          } rounded-r`}
                        >
                          <div className="text-lg font-bold text-[#ec5f2b] leading-none">
                            {metric.value}
                          </div>
                          <div className={`text-[9px] font-medium uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel Indicators & Navigation */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={() => scrollToMobileCard(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              currentIndex === 0
                ? isDark ? 'bg-gray-800 text-gray-600' : 'bg-gray-100 text-gray-300'
                : isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-1.5">
            {caseStudies.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToMobileCard(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-[#ec5f2b] w-5'
                    : isDark ? 'bg-gray-700 w-2 hover:bg-gray-600' : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => scrollToMobileCard(Math.min(caseStudies.length - 1, currentIndex + 1))}
            disabled={currentIndex === caseStudies.length - 1}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              currentIndex === caseStudies.length - 1
                ? isDark ? 'bg-gray-800 text-gray-600' : 'bg-gray-100 text-gray-300'
                : isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Screenshot Modal */}
      <AnimatePresence>
        {mobileFullscreen !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
            onClick={() => setMobileFullscreen(null)}
          >
            {/* Backdrop */}
            <div className={`absolute inset-0 ${isDark ? 'bg-black/95' : 'bg-black/90'}`} />

            {/* Content */}
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 relative z-10">
                <div>
                  <h3 className="text-white font-bold text-sm">{caseStudies[mobileFullscreen].productName}</h3>
                  <p className="text-gray-400 text-xs">{caseStudies[mobileFullscreen].tagline}</p>
                </div>
                <button
                  onClick={() => setMobileFullscreen(null)}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Screenshot - Full width, scrollable */}
              <div className="flex-1 overflow-auto p-4">
                <img
                  src={caseStudies[mobileFullscreen].screenshots[0]}
                  alt={caseStudies[mobileFullscreen].screenshotLabel}
                  className="w-full rounded-lg shadow-2xl"
                  style={{ maxWidth: 'none', width: '100%' }}
                />
              </div>

              {/* Bottom info */}
              <div className="p-4 relative z-10">
                <p className="text-white text-sm font-medium text-center">
                  "{caseStudies[mobileFullscreen].outcomeHeadline}"
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop: Integrated Card with Tabs */}
      <div className="hidden lg:block relative w-full px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => setSectionInView(true)}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="max-w-[1600px] mx-auto"
        >
          <div className={`rounded-2xl overflow-hidden border ${
            isDark
              ? 'bg-gray-900 border-gray-800 shadow-2xl shadow-black/40'
              : 'bg-[#faf8f5] border-gray-200 shadow-xl shadow-gray-300/50'
          }`}>

            {/* Tab Bar - Inside Card */}
            <div className={`flex items-center justify-between px-2 sm:px-4 md:px-6 py-2 sm:py-3 border-b ${
              isDark ? 'border-gray-800 bg-gray-900/50' : 'border-gray-200 bg-white/50'
            }`}>
              {/* Industry Tabs - Horizontal scroll on mobile */}
              <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-hide">
                <div className="flex items-center gap-0.5 sm:gap-1">
                  {caseStudies.map((study, index) => {
                    const isActive = currentIndex === index
                    const isInProgress = study.status === 'in-progress'
                    return (
                      <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        onMouseEnter={() => {
                          setIsPaused(true)
                          setShowHint(false)
                        }}
                        onMouseLeave={() => {
                          if (!hasInteracted) setIsPaused(false)
                        }}
                        className={`relative px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap min-h-[36px] sm:min-h-[40px] flex items-center gap-1.5 ${
                          isActive
                            ? 'text-white'
                            : isDark
                              ? 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/50'
                              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {/* Active background with progress */}
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 rounded-lg overflow-hidden"
                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                          >
                            <div className="absolute inset-0 bg-[#ec5f2b]" />
                            {!isPaused && (
                              <motion.div
                                className="absolute inset-0 bg-[#c94d1f] origin-left"
                                style={{ width: `${progress}%` }}
                              />
                            )}
                          </motion.div>
                        )}
                        <span className="relative z-10">{study.shortName}</span>
                        {/* In Progress badge */}
                        {isInProgress && (
                          <span className={`relative z-10 px-1.5 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wide ${
                            isActive
                              ? 'bg-white/20 text-white'
                              : isDark
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            WIP
                          </span>
                        )}
                      </button>
                    )
                  })}
                  {/* "Yours?" CTA tab */}
                  <a
                    href="/contact?intent=build"
                    className={`relative px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 border border-dashed whitespace-nowrap min-h-[36px] sm:min-h-[40px] flex items-center ${
                      isDark
                        ? 'text-[#ec5f2b] border-[#ec5f2b]/40 hover:bg-[#ec5f2b]/10 hover:border-[#ec5f2b]'
                        : 'text-[#ec5f2b] border-[#ec5f2b]/40 hover:bg-[#ec5f2b]/5 hover:border-[#ec5f2b]'
                    }`}
                  >
                    <span className="relative z-10">Yours?</span>
                  </a>
                </div>

                {/* Helpful hint - shows when section enters view */}
                <AnimatePresence>
                  {showHint && !hasInteracted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium ${
                        isDark
                          ? 'bg-[#ec5f2b]/10 text-[#ec5f2b] border border-[#ec5f2b]/20'
                          : 'bg-[#ec5f2b]/10 text-[#ec5f2b] border border-[#ec5f2b]/20'
                      }`}
                    >
                      <motion.span
                        animate={{ y: [0, -2, 0] }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
                        className="text-sm"
                      >
                        ☝️
                      </motion.span>
                      <span className="hidden sm:inline">Click any tab to explore</span>
                      <span className="sm:hidden">Tap to explore</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Auto-play toggle with better UX */}
              <button
                onClick={() => {
                  setIsPaused(!isPaused)
                  setHasInteracted(true)
                  setShowHint(false)
                }}
                className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  isPaused
                    ? isDark
                      ? 'bg-gray-800 text-gray-400 hover:text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-500 hover:text-gray-700 hover:bg-gray-200'
                    : isDark
                      ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20'
                      : 'bg-green-50 text-green-600 hover:bg-green-100'
                }`}
              >
                <div className={`w-2 h-2 rounded-full transition-colors ${
                  isPaused ? 'bg-gray-400' : 'bg-green-500 animate-pulse'
                }`} />
                <span className="hidden sm:inline">{isPaused ? 'Click to resume' : 'Auto-playing'}</span>
                <span className="sm:hidden">{isPaused ? 'Play' : 'Pause'}</span>
              </button>
            </div>

            {/* Case Study Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Main Content - Screenshot Left, Title/Metrics Right */}
                <div className={`grid lg:grid-cols-7 gap-0 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>

                  {/* Left: Screenshot (wider - 4/7 columns on desktop) */}
                  <div className={`lg:col-span-4 p-4 md:p-5 ${isDark ? 'bg-gray-900' : 'bg-gray-50/50'}`}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      {/* Browser Window Frame */}
                      <div className={`rounded-xl overflow-hidden ${isDark ? 'shadow-2xl shadow-black/50 ring-1 ring-gray-700' : 'shadow-lg ring-1 ring-gray-200'}`}>
                        {/* Browser Top Bar */}
                        <div className={`flex items-center gap-2 px-3 py-2 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                          </div>
                          <div className="flex-1 flex justify-center">
                            <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono tracking-tight ${isDark ? 'bg-gray-900/80 text-gray-500' : 'bg-white/80 text-gray-400'}`}>
                              <span className="text-[#ec5f2b]">~/</span>{currentStudy.productName.toLowerCase()}
                            </span>
                          </div>
                        </div>

                        {/* Screenshot Area - Fixed 16:9 aspect ratio, protected from download */}
                        <div
                          className={`relative aspect-[16/9] overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
                          onContextMenu={(e) => e.preventDefault()}
                        >
                          {currentStudy.screenshots.length > 0 ? (
                            <>
                              <AnimatePresence mode="wait">
                                <motion.img
                                  key={screenshotIndex}
                                  src={currentStudy.screenshots[screenshotIndex]}
                                  alt={`${currentStudy.screenshotLabel} ${screenshotIndex + 1}`}
                                  className="absolute inset-0 w-full h-full object-contain object-top pointer-events-none select-none"
                                  draggable={false}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.4 }}
                                />
                              </AnimatePresence>
                              {/* Transparent overlay to prevent direct image interaction */}
                              <div className="absolute inset-0 z-10" />

                              {/* Expand Button - Mobile Only */}
                              <button
                                onClick={() => setIsExpanded(true)}
                                className="lg:hidden absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/70 backdrop-blur-sm text-white hover:bg-black/90 transition-colors"
                                aria-label="Expand screenshot"
                              >
                                <Maximize2 className="w-4 h-4" />
                              </button>

                              {/* Navigation Controls */}
                              {currentStudy.screenshots.length > 1 && (
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                  <button
                                    onClick={() => setScreenshotPaused(!screenshotPaused)}
                                    className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                  >
                                    {screenshotPaused ? (
                                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    ) : (
                                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /></svg>
                                    )}
                                  </button>
                                  <div className="w-px h-3 bg-white/20" />
                                  <button
                                    onClick={() => { setScreenshotPaused(true); setScreenshotIndex((prev) => prev === 0 ? currentStudy.screenshots.length - 1 : prev - 1) }}
                                    className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                  >
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                                  </button>
                                  <div className="flex gap-1 px-0.5">
                                    {currentStudy.screenshots.map((_, idx) => (
                                      <button
                                        key={idx}
                                        onClick={() => { setScreenshotPaused(true); setScreenshotIndex(idx) }}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === screenshotIndex ? 'bg-[#ec5f2b] w-4' : 'bg-white/40 hover:bg-white/60 w-1.5'}`}
                                      />
                                    ))}
                                  </div>
                                  <button
                                    onClick={() => { setScreenshotPaused(true); setScreenshotIndex((prev) => (prev + 1) % currentStudy.screenshots.length) }}
                                    className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                  >
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                  </button>
                                  <div className="w-px h-3 bg-white/20" />
                                  <span className="text-white/60 text-[10px] font-medium">{screenshotIndex + 1}/{currentStudy.screenshots.length}</span>
                                </div>
                              )}
                            </>
                          ) : (
                            <div className={`aspect-video flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
                              <div className="text-center">
                                <Monitor className={`w-12 h-12 mx-auto mb-3 ${isDark ? 'text-gray-700' : 'text-gray-300'}`} strokeWidth={1} />
                                <p className={`text-sm font-medium ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{currentStudy.screenshotLabel}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right: Title & Metrics (3/7 columns on desktop) */}
                  <div className={`lg:col-span-3 p-6 md:p-8 flex flex-col justify-center ${
                    isDark
                      ? 'bg-gray-900 border-l border-gray-800'
                      : 'bg-white border-l border-gray-100'
                  }`}>
                    {/* Outcome Headline */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="mb-6"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[#ec5f2b] font-bold text-sm">{currentStudy.productName}</span>
                        <span className={isDark ? 'text-gray-600' : 'text-gray-300'}>•</span>
                        <span className={isDark ? 'text-gray-400' : 'text-gray-500'} style={{ fontSize: '12px' }}>{currentStudy.tagline}</span>
                      </div>
                      <h3 className={`text-lg md:text-xl lg:text-2xl font-bold leading-snug ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        "{currentStudy.outcomeHeadline}"
                      </h3>
                    </motion.div>

                    {/* Metrics - 2x2 Grid with accent bars */}
                    {currentStudy.outcomeMetrics && currentStudy.outcomeMetrics.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-2 gap-3"
                      >
                        {currentStudy.outcomeMetrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className={`pl-3 border-l-2 border-[#ec5f2b] ${
                              isDark ? 'bg-gray-800/40' : 'bg-gray-50/80'
                            } rounded-r-lg py-3 pr-3`}
                          >
                            <div className="text-2xl md:text-3xl font-black text-[#ec5f2b] tracking-tight leading-none mb-1">
                              {metric.value}
                            </div>
                            <div className={`text-[11px] font-medium uppercase tracking-wide leading-tight ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Bottom Section - Premium Cards */}
                <div className={`border-t ${isDark ? 'bg-gray-950 border-gray-800' : 'bg-white border-gray-100'}`}>
                  <div className="grid md:grid-cols-3">

                    {/* The Challenge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      className={`p-6 md:p-8 ${isDark ? 'md:border-r border-gray-800' : 'md:border-r border-gray-100'}`}
                    >
                      {/* Prominent Header */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-1 h-8 rounded-full bg-red-500" />
                        <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          The Challenge
                        </h4>
                      </div>
                      {/* Bullets */}
                      <ul className="space-y-4">
                        {currentStudy.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-red-500/15' : 'bg-red-50'}`}>
                              <span className="text-red-500 text-xs font-bold">{idx + 1}</span>
                            </div>
                            <span className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Our Solution */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className={`p-6 md:p-8 ${isDark ? 'bg-[#ec5f2b]/5 md:border-r border-gray-800' : 'bg-gradient-to-b from-[#ec5f2b]/[0.03] to-transparent md:border-r border-gray-100'}`}
                    >
                      {/* Prominent Header */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-1 h-8 rounded-full bg-[#ec5f2b]" />
                        <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Our Solution
                        </h4>
                      </div>
                      {/* Description */}
                      <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {currentStudy.solutionBrief}
                      </p>
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {currentStudy.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                              isDark
                                ? 'bg-gray-800 text-gray-300 border border-gray-700'
                                : 'bg-white text-gray-600 border border-gray-200 shadow-sm'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* What We Built */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      className="p-6 md:p-8"
                    >
                      {/* Prominent Header */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-1 h-8 rounded-full bg-green-500" />
                        <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          What We Built
                        </h4>
                      </div>
                      {/* Deliverables */}
                      <ul className="space-y-3">
                        {currentStudy.whatWeBuilt.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 ${isDark ? 'bg-[#ec5f2b]/20' : 'bg-[#ec5f2b]/10'}`}>
                              <svg className="w-3 h-3 text-[#ec5f2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            </div>
                            <span className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Screenshot Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col"
            onClick={() => setIsExpanded(false)}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-[#ec5f2b] font-semibold text-sm">{currentStudy.productName}</span>
                <span className="text-white/40">•</span>
                <span className="text-white/60 text-xs">{currentStudy.screenshotLabel}</span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Screenshot */}
            <div
              className="flex-1 flex items-center justify-center p-4 overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={screenshotIndex}
                src={currentStudy.screenshots[screenshotIndex]}
                alt={`${currentStudy.screenshotLabel} ${screenshotIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                draggable={false}
              />
            </div>

            {/* Bottom Navigation */}
            {currentStudy.screenshots.length > 1 && (
              <div className="px-4 py-4 border-t border-white/10">
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={(e) => { e.stopPropagation(); setScreenshotIndex((prev) => prev === 0 ? currentStudy.screenshots.length - 1 : prev - 1) }}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  </button>

                  <div className="flex items-center gap-2 px-4">
                    {currentStudy.screenshots.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setScreenshotIndex(idx) }}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === screenshotIndex ? 'bg-[#ec5f2b] w-6' : 'bg-white/30 hover:bg-white/50 w-2'}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={(e) => { e.stopPropagation(); setScreenshotIndex((prev) => (prev + 1) % currentStudy.screenshots.length) }}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>

                <p className="text-center text-white/40 text-xs mt-3">
                  {screenshotIndex + 1} of {currentStudy.screenshots.length} • Swipe or tap arrows
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
