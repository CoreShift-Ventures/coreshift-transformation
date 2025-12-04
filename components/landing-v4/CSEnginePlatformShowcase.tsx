'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import {
  Heart, Target, BarChart3, TrendingUp, Zap, Users, Brain,
  LayoutDashboard, Briefcase, LineChart, Workflow, Bell,
  ArrowRight, Play, Pause, Layers
} from 'lucide-react'
import Link from 'next/link'

interface ScreenshotLayer {
  src: string
  animation: 'left' | 'right' | 'top' | 'bottom' | 'fade' | 'scale' | 'none'
  className?: string
}

interface Feature {
  icon: React.ElementType
  title: string
  description: string
  screenshotLabel: string
  screenshot?: string // Single full screenshot
  screenshots?: string[] // Multiple screenshots that auto-transition
  screenshotLayers?: ScreenshotLayer[] // Multiple animated layers (fly-in effect)
}

interface Category {
  id: string
  icon: React.ElementType
  name: string
  shortName: string
  features: Feature[]
  bestForTags: string[]
}

const categories: Category[] = [
  {
    id: 'health-retention',
    icon: Heart,
    name: 'Customer Health & Retention',
    shortName: 'Health',
    bestForTags: ['SaaS', 'Subscription', 'B2B Services'],
    features: [
      {
        icon: Heart,
        title: 'Predictive Health Scoring',
        description: 'Real-time health scores analyzing usage, engagement, and sentiment to identify at-risk customers 90 days before churn.',
        screenshotLabel: 'Health Scoring Dashboard',
        screenshot: '/screenshots/CS Engine/1.Customer Health and Retention/Predictive Health Scoring/2.png'
      },
      {
        icon: Bell,
        title: 'Early Warning Alerts',
        description: 'Automated alerts when health drops below threshold, with recommended playbooks and actions to prevent churn.',
        screenshotLabel: 'Alert Center',
        screenshots: [
          '/screenshots/CS Engine/1.Customer Health and Retention/Early Warning Alerts/1.png',
          '/screenshots/CS Engine/1.Customer Health and Retention/Early Warning Alerts/2.png'
        ]
      },
      {
        icon: Target,
        title: 'Goal-Linked Retention',
        description: 'Connect every customer goal to retention outcomes, so your team knows exactly what drives renewals.',
        screenshotLabel: 'Goal Tracking',
        screenshot: '/screenshots/CS Engine/1.Customer Health and Retention/Goal-linked Retention/2.png'
      }
    ]
  },
  {
    id: 'revenue-expansion',
    icon: TrendingUp,
    name: 'Revenue Growth & Expansion',
    shortName: 'Revenue',
    bestForTags: ['Revenue Teams', 'CS Leaders', 'CFOs'],
    features: [
      {
        icon: BarChart3,
        title: 'NRR Command Center',
        description: 'Retention, expansion, and churn metrics unified in one view. Track your NRR waterfall from starting ARR to final ARR.',
        screenshotLabel: 'NRR Dashboard'
      },
      {
        icon: TrendingUp,
        title: 'Expansion Signals',
        description: 'AI automatically identifies upsell and cross-sell opportunities based on usage patterns and growth indicators.',
        screenshotLabel: 'Expansion Signals'
      },
      {
        icon: LineChart,
        title: 'Revenue Scenarios',
        description: 'Model different outcomes from reactive to world-class CS, so you can see the revenue impact of your investments.',
        screenshotLabel: 'Revenue Modeling'
      }
    ]
  },
  {
    id: 'playbooks-automation',
    icon: Workflow,
    name: 'Playbooks & Automation',
    shortName: 'Playbooks',
    bestForTags: ['CS Ops', 'Scaling Teams', 'Process-Driven Orgs'],
    features: [
      {
        icon: Layers,
        title: 'Visual Playbook Builder',
        description: 'Drag-and-drop workflow builder for any customer motion - onboarding, adoption, renewal, or risk mitigation.',
        screenshotLabel: 'Playbook Builder'
      },
      {
        icon: Zap,
        title: 'Smart Automation Rules',
        description: 'Trigger tasks, alerts, and escalations automatically based on customer behavior, health changes, or time-based rules.',
        screenshotLabel: 'Automation Rules'
      },
      {
        icon: Brain,
        title: 'AI-Assisted Actions',
        description: 'Let AI analyze the situation and recommend the best intervention, so your team always knows what to do next.',
        screenshotLabel: 'AI Actions'
      }
    ]
  },
  {
    id: 'team-productivity',
    icon: LayoutDashboard,
    name: 'Team Productivity',
    shortName: 'Productivity',
    bestForTags: ['CSM Teams', 'CS Managers', 'Enterprise CS'],
    features: [
      {
        icon: LayoutDashboard,
        title: 'CSM Daily Workspace',
        description: "Everything a CSM needs in one screen - today's tasks, at-risk accounts, upcoming renewals, and quick stats.",
        screenshotLabel: 'CSM Workspace'
      },
      {
        icon: Users,
        title: 'Portfolio Analytics',
        description: 'Compare performance across CSMs and customer segments to identify coaching opportunities and best practices.',
        screenshotLabel: 'Portfolio Analytics'
      },
      {
        icon: Briefcase,
        title: 'Business Review Prep',
        description: 'QBR materials generated automatically - not assembled manually. Save hours on every business review.',
        screenshotLabel: 'QBR Generator'
      }
    ]
  }
]

export default function CSEnginePlatformShowcase() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)
  const [activeFeature, setActiveFeature] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeScreenshot, setActiveScreenshot] = useState(0)
  const [layerPhase, setLayerPhase] = useState<'intro' | 'focused'>('intro')

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'
  const currentCategory = categories[activeCategory]
  const currentFeature = currentCategory?.features[activeFeature]

  // Reset screenshot index and layer phase when feature changes
  useEffect(() => {
    setActiveScreenshot(0)
    setLayerPhase('intro')
  }, [activeCategory, activeFeature])

  // Transition layer phase after 2 seconds (menu fades, content zooms)
  useEffect(() => {
    if (!currentFeature?.screenshotLayers || currentFeature.screenshotLayers.length < 2) return

    const timer = setTimeout(() => {
      setLayerPhase('focused')
    }, 2000)

    return () => clearTimeout(timer)
  }, [activeCategory, activeFeature, currentFeature?.screenshotLayers])

  // Auto-rotate screenshots within a feature (every 2.5 seconds)
  useEffect(() => {
    if (!currentFeature?.screenshots || currentFeature.screenshots.length <= 1) return

    const interval = setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % currentFeature.screenshots!.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [currentFeature?.screenshots, activeCategory, activeFeature])

  // Auto-rotate features every 4 seconds
  const rotateFeature = useCallback(() => {
    if (!isPaused) {
      setActiveFeature((prev) => {
        const nextFeature = (prev + 1) % currentCategory.features.length
        // If we've cycled through all features, move to next category
        if (nextFeature === 0) {
          setActiveCategory((prevCat) => (prevCat + 1) % categories.length)
        }
        return nextFeature
      })
    }
  }, [isPaused, currentCategory?.features.length])

  useEffect(() => {
    const interval = setInterval(rotateFeature, 4000)
    return () => clearInterval(interval)
  }, [rotateFeature])

  // Progress bar animation
  useEffect(() => {
    if (isPaused) return

    setProgress(0)
    const startTime = Date.now()
    const duration = 4000

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
  }, [activeCategory, activeFeature, isPaused])

  const handleCategoryClick = (index: number) => {
    setActiveCategory(index)
    setActiveFeature(0)
    setProgress(0)
  }

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index)
    setProgress(0)
  }

  if (!currentCategory || !currentFeature) return null

  return (
    <div className={`relative py-12 md:py-16 overflow-hidden ${isDark ? 'bg-black' : 'bg-[#faf8f5]'}`}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl ${isDark ? 'bg-[#ec5f2b]/10' : 'bg-[#ec5f2b]/5'}`} />
        <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl ${isDark ? 'bg-purple-500/10' : 'bg-purple-500/5'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${
            isDark ? 'bg-gray-900 text-gray-400 border border-gray-800' : 'bg-gray-100 text-gray-600 border border-gray-200'
          }`}>
            HOW WE BUILD IT
          </span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-10"
        >
          <h3 className={`text-xl md:text-2xl font-bold mb-3 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            The NRR-Driven Post-sales Engine
          </h3>
          <p className={`text-sm md:text-base max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            80% proven framework. 20% customized to you. Every goal, task, and playbook ties directly to revenue impact.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category, index) => {
            const Icon = category.icon
            const isActive = activeCategory === index
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-[#ec5f2b] text-white shadow-lg shadow-[#ec5f2b]/30'
                    : isDark
                      ? 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200 border border-gray-700/50'
                      : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700 border border-gray-200 shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4" strokeWidth={2} />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.shortName}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Feature List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Category Heading */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className={`text-xl md:text-2xl font-bold mb-1 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  {currentCategory.name}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  Click to explore or let it auto-play
                </p>
              </div>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className={`p-2 rounded-lg transition-colors ${
                  isDark
                    ? 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'bg-white text-gray-400 hover:text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
                title={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
              >
                {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </button>
            </div>

            {/* Feature Items */}
            <div className="space-y-4">
              {currentCategory.features.map((feature, index) => {
                const FeatureIcon = feature.icon
                const isActive = activeFeature === index

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleFeatureClick(index)}
                    className={`relative cursor-pointer transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                    }`}
                  >
                    {/* Progress bar for active feature */}
                    {isActive && !isPaused && (
                      <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <motion.div
                          className="w-full bg-[#ec5f2b]"
                          style={{ height: `${progress}%` }}
                        />
                      </div>
                    )}
                    {isActive && isPaused && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ec5f2b] rounded-full" />
                    )}

                    <div className="pl-6">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg flex-shrink-0 transition-colors duration-300 ${
                          isActive ? 'bg-[#ec5f2b]' : isDark ? 'bg-gray-800' : 'bg-gray-100'
                        }`}>
                          <FeatureIcon className={`w-4 h-4 ${isActive ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-500'}`} strokeWidth={2} />
                        </div>
                        <div>
                          <h4 className={`text-base font-bold mb-1.5 transition-colors duration-300 ${
                            isActive ? 'text-[#ec5f2b]' : isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {feature.title}
                          </h4>
                          <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                            isActive
                              ? isDark ? 'text-gray-300' : 'text-gray-700'
                              : isDark ? 'text-gray-500' : 'text-gray-500'
                          }`}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Screenshot Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${activeFeature}`}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Glow effect behind screenshot */}
                <div className={`absolute -inset-4 rounded-3xl blur-2xl ${isDark ? 'bg-gradient-to-br from-[#ec5f2b]/20 to-purple-500/10' : 'bg-gradient-to-br from-[#ec5f2b]/10 to-purple-500/5'}`} />

                {/* Screenshot container - clean enterprise style */}
                <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${
                  isDark
                    ? 'shadow-black/60 ring-1 ring-white/10'
                    : 'shadow-gray-400/30 ring-1 ring-black/5'
                }`}>
                  {/* Screenshot area */}
                  <div className={`aspect-[16/10] relative overflow-hidden ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
                      : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
                  }`}>
                    {currentFeature.screenshots ? (
                      // Multiple screenshots with crossfade transition
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentFeature.screenshots[activeScreenshot]}
                          src={currentFeature.screenshots[activeScreenshot]}
                          alt={`${currentFeature.screenshotLabel} ${activeScreenshot + 1}`}
                          className="w-full h-full object-contain object-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      </AnimatePresence>
                    ) : currentFeature.screenshot ? (
                      // Single full screenshot
                      <motion.img
                        key={currentFeature.screenshot}
                        src={currentFeature.screenshot}
                        alt={currentFeature.screenshotLabel}
                        className="w-full h-full object-contain object-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    ) : currentFeature.screenshotLayers ? (
                      // Animated layered screenshots with phase transitions
                      <div className="relative w-full h-full">
                        {currentFeature.screenshotLayers.map((layer, idx) => {
                          const isMenu = idx === 0
                          const isContent = idx === 1

                          // Intro animation variants
                          const introVariants = {
                            left: { x: -100, opacity: 0, scale: 1 },
                            right: { x: 100, opacity: 0, scale: 1 },
                            top: { y: -80, opacity: 0, scale: 1 },
                            bottom: { y: 80, opacity: 0, scale: 1 },
                            fade: { opacity: 0, scale: 1 },
                            scale: { opacity: 0, scale: 0.8 },
                            none: { scale: 1 }
                          }

                          // Determine current animation state based on phase
                          const getAnimateState = () => {
                            if (layerPhase === 'intro') {
                              // Both visible in their positions
                              return { x: 0, y: 0, opacity: 1, scale: 1 }
                            } else {
                              // Focused phase: first layer fades, second layer zooms
                              if (isMenu) {
                                return { x: 0, y: 0, opacity: 0, scale: 0.95 }
                              }
                              if (isContent) {
                                return { x: 0, y: 0, opacity: 1, scale: 1.1 }
                              }
                              return { x: 0, y: 0, opacity: 1, scale: 1 }
                            }
                          }

                          return (
                            <motion.img
                              key={layer.src}
                              src={layer.src}
                              alt={`${currentFeature.screenshotLabel} layer ${idx + 1}`}
                              className={layerPhase === 'focused' && isContent
                                ? 'absolute inset-0 w-full h-full object-contain object-center'
                                : layer.className || 'absolute inset-0 w-full h-full object-contain'
                              }
                              initial={introVariants[layer.animation]}
                              animate={getAnimateState()}
                              transition={{
                                duration: layerPhase === 'intro' ? 0.5 : 0.6,
                                delay: layerPhase === 'intro' ? idx * 0.15 : 0,
                                ease: 'easeOut'
                              }}
                            />
                          )
                        })}
                      </div>
                    ) : (
                      // Placeholder when no screenshot
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center p-8">
                          {(() => {
                            const CurrentIcon = currentFeature.icon
                            return (
                              <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                              >
                                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                                  isDark
                                    ? 'bg-gradient-to-br from-[#ec5f2b]/20 to-purple-500/10'
                                    : 'bg-gradient-to-br from-[#ec5f2b]/10 to-purple-500/5'
                                }`}>
                                  <CurrentIcon className={`w-10 h-10 ${isDark ? 'text-[#ec5f2b]/60' : 'text-[#ec5f2b]/50'}`} strokeWidth={1.5} />
                                </div>
                                <p className={`text-lg font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                  {currentFeature.screenshotLabel}
                                </p>
                                <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                                  Screenshot coming soon
                                </p>
                              </motion.div>
                            )
                          })()}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Feature counter */}
                <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full border shadow-lg ${
                  isDark
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}>
                  {currentCategory.features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleFeatureClick(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeFeature
                          ? 'bg-[#ec5f2b] w-6'
                          : isDark ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Best For Tags - Dynamic per category */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <span className={`text-sm font-semibold ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Best for:</span>
              {currentCategory.bestForTags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1.5 rounded-full text-sm border ${
                    isDark
                      ? 'bg-gray-800/50 border-gray-700/50 text-gray-400'
                      : 'bg-white border-gray-200 text-gray-500 shadow-sm'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-10 text-center"
        >
          <Link
            href="/contact?intent=cs-engine"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ec5f2b] text-white rounded-xl font-bold text-base transition-all duration-300 hover:bg-[#d54f20] hover:shadow-lg hover:scale-105"
          >
            Book a Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className={`mt-3 text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            Free walkthrough of how CS Engine fits your business
          </p>
        </motion.div>
      </div>
    </div>
  )
}
