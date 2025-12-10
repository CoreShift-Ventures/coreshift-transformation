'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { AlertTriangle, Sparkles, X, Check, Clock, Users, TrendingUp, BarChart3, Zap, ArrowRight } from 'lucide-react'

const problems = [
  'Spreadsheet driven operations blocking scale',
  'Revenue leakage hidden in everyday workflows',
  'Teams overwhelmed by manual tasks',
  'No real visibility into customer or operational health',
  'Scaling feels chaotic and unsustainable',
  'Critical decisions delayed by lack of data'
]

const impacts = [
  { metric: '50%', prefix: 'Up to', description: 'productivity gains from automated workflows', icon: Clock, color: 'from-blue-500 to-cyan-400' },
  { metric: '30%', prefix: 'Up to', description: 'revenue leakage recovered', icon: TrendingUp, color: 'from-green-500 to-emerald-400' },
  { metric: '5%', prefix: 'Up to', description: 'churn reduction via consistent delivery', icon: Users, color: 'from-purple-500 to-violet-400' },
  { metric: '25%', prefix: 'Up to', description: 'operational cost savings', icon: BarChart3, color: 'from-[#ec5f2b] to-orange-400' }
]

export default function WhyThisMattersSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileTab, setMobileTab] = useState<'chaos' | 'systems'>('chaos')

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  return (
    <section id="why-this-matters" className={`relative py-20 md:py-28 overflow-hidden ${isDark ? 'bg-gradient-to-b from-black via-gray-950 to-black' : 'bg-gradient-to-b from-[#faf8f5] via-white to-[#faf8f5]'}`}>
      {/* Premium background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl ${isDark ? 'bg-red-500/3' : 'bg-red-500/5'}`} />
        <div className={`absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl ${isDark ? 'bg-green-500/3' : 'bg-green-500/5'}`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${isDark ? 'bg-[#ec5f2b]/2' : 'bg-[#ec5f2b]/3'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-5"
          >
            <span className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${
              isDark ? 'bg-gray-900 text-gray-400 border border-gray-800' : 'bg-white text-gray-600 border border-gray-200 shadow-sm'
            }`}>
              WHY THIS MATTERS
            </span>
          </motion.div>
          <h2 className={`text-2xl md:text-3xl font-bold tracking-tight mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            The cost of <span className="text-red-500">chaos</span> vs. the power of <span className="text-[#ec5f2b]">systems</span>
          </h2>
          <p className={`text-sm md:text-base max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            See where you are today and where you could be tomorrow
          </p>
        </motion.div>

        {/* Mobile: Tabbed Toggle View */}
        <div className="lg:hidden mb-8">
          {/* Tab Toggle */}
          <div className={`flex rounded-xl p-1 mb-6 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <button
              onClick={() => setMobileTab('chaos')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                mobileTab === 'chaos'
                  ? 'bg-red-500 text-white shadow-lg'
                  : isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Without Systems
              </span>
            </button>
            <button
              onClick={() => setMobileTab('systems')}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                mobileTab === 'systems'
                  ? 'bg-[#ec5f2b] text-white shadow-lg'
                  : isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                With CoreShift
              </span>
            </button>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {mobileTab === 'chaos' ? (
              <motion.div
                key="chaos"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl p-5 border-t-4 border-t-red-500 ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                } shadow-lg`}
              >
                <p className={`text-xs font-medium uppercase tracking-wide mb-4 ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                  The chaos you&apos;re living with
                </p>
                <ul className="space-y-3">
                  {problems.slice(0, 4).map((problem, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        isDark ? 'bg-red-500/20' : 'bg-red-100'
                      }`}>
                        <X className="w-3 h-3 text-red-500" strokeWidth={3} />
                      </div>
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{problem}</span>
                    </li>
                  ))}
                </ul>
                <div className={`mt-5 p-3 rounded-lg border-l-4 border-l-red-500 ${isDark ? 'bg-red-500/5' : 'bg-red-50'}`}>
                  <p className={`text-xs font-medium ${isDark ? 'text-red-400' : 'text-red-700'}`}>
                    Without strategy and systems, scaling becomes chaos.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="systems"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl overflow-hidden ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                } shadow-xl`}
              >
                {/* Animated gradient header */}
                <div className="relative h-2 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#ec5f2b] via-orange-400 to-[#ec5f2b]"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    style={{ width: '200%' }}
                  />
                </div>

                <div className="p-5">
                  {/* Header with sparkle animation */}
                  <div className="flex items-center gap-2 mb-4">
                    <motion.div
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Sparkles className="w-4 h-4 text-[#ec5f2b]" />
                    </motion.div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#ec5f2b]">
                      Typical Client Outcomes
                    </p>
                  </div>

                  {/* Metric cards with gradient accents */}
                  <div className="grid grid-cols-2 gap-3">
                    {impacts.map((impact, index) => {
                      const Icon = impact.icon
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className={`relative rounded-xl overflow-hidden ${
                            isDark ? 'bg-gray-800/80' : 'bg-gradient-to-br from-gray-50 to-white border border-gray-100'
                          }`}
                        >
                          {/* Gradient accent bar */}
                          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${impact.color}`} />

                          <div className="p-3 pt-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${impact.color}`}>
                                <Icon className="w-4 h-4 text-white" />
                              </div>
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                  isDark ? 'bg-green-500/20' : 'bg-green-100'
                                }`}
                              >
                                <Check className="w-3 h-3 text-green-500" strokeWidth={3} />
                              </motion.div>
                            </div>

                            <span className={`text-[9px] font-semibold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                              {impact.prefix}
                            </span>
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 + index * 0.1 }}
                              className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
                            >
                              {impact.metric}
                            </motion.div>
                            <p className={`text-[10px] leading-tight mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {impact.description}
                            </p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* CTA callout */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className={`mt-4 p-4 rounded-xl relative overflow-hidden ${
                      isDark ? 'bg-gradient-to-r from-[#ec5f2b]/10 to-orange-500/5' : 'bg-gradient-to-r from-[#ec5f2b]/10 to-orange-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#ec5f2b] flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Ready to transform?
                        </p>
                        <p className={`text-[10px] ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          We calculate your exact ROI in the Blueprint Sprint
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#ec5f2b]" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop: Two Column Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-5 md:gap-6 lg:gap-10">
          {/* LEFT: Without Systems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group"
          >
            <div className={`relative h-full rounded-3xl overflow-hidden ${
              isDark
                ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-red-950/30'
                : 'bg-white'
            } shadow-2xl`}>

              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-400 to-red-500" />

              {/* Subtle pattern overlay */}
              <div className={`absolute inset-0 opacity-[0.02] ${isDark ? 'bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]' : 'bg-[radial-gradient(circle_at_1px_1px,black_1px,transparent_0)]'} bg-[length:24px_24px]`} />

              <div className="relative p-6 md:p-8 lg:p-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center ${
                    isDark ? 'bg-red-500/10' : 'bg-red-50'
                  }`}>
                    <AlertTriangle className="w-7 h-7 text-red-500" strokeWidth={1.5} />
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  </div>
                  <div>
                    <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      Without Systems
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-red-400/80' : 'text-red-600/80'}`}>
                      The chaos you&apos;re living with
                    </p>
                  </div>
                </div>

                {/* Problem list */}
                <ul className="space-y-4 mb-8">
                  {problems.map((problem, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                      className={`flex items-start p-3 rounded-xl transition-colors ${
                        isDark ? 'bg-red-500/5 hover:bg-red-500/10' : 'bg-red-50/50 hover:bg-red-50'
                      }`}
                    >
                      <div className={`flex-shrink-0 mr-3 w-6 h-6 rounded-full flex items-center justify-center ${
                        isDark ? 'bg-red-500/20' : 'bg-red-100'
                      }`}>
                        <X className="w-3.5 h-3.5 text-red-500" strokeWidth={3} />
                      </div>
                      <span className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {problem}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom callout */}
                <div className={`rounded-xl p-4 border-l-4 border-l-red-500 ${
                  isDark ? 'bg-red-500/5' : 'bg-red-50'
                }`}>
                  <p className={`text-sm font-medium ${isDark ? 'text-red-400' : 'text-red-700'}`}>
                    Without strategy and systems, scaling becomes chaos.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: With CoreShift */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="group"
          >
            <div className={`relative h-full rounded-3xl overflow-hidden ${
              isDark
                ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-[#ec5f2b]/10'
                : 'bg-white'
            } shadow-2xl`}>

              {/* Animated top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#ec5f2b] via-orange-400 via-50% to-[#ec5f2b]"
                  animate={{ x: ['-50%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  style={{ width: '200%' }}
                />
              </div>

              {/* Subtle pattern overlay */}
              <div className={`absolute inset-0 opacity-[0.02] ${isDark ? 'bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]' : 'bg-[radial-gradient(circle_at_1px_1px,black_1px,transparent_0)]'} bg-[length:24px_24px]`} />

              {/* Floating glow effect */}
              <motion.div
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl bg-[#ec5f2b]/10 pointer-events-none"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="relative p-6 md:p-8 lg:p-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    className={`relative w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#ec5f2b] to-orange-500`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Sparkles className="w-7 h-7 text-white" strokeWidth={1.5} />
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-white/20"
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  <div>
                    <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      With <span className={isDark ? 'text-white' : 'text-brand-charcoal'}>Core</span><span className="text-[#ec5f2b]">Shift</span>
                    </h3>
                    <p className={`text-sm font-medium ${isDark ? 'text-[#ec5f2b]' : 'text-[#ec5f2b]'}`}>
                      Typical client outcomes
                    </p>
                  </div>
                </div>

                {/* Metrics Grid - Enhanced */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {impacts.map((impact, index) => {
                    const Icon = impact.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className={`relative rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-xl ${
                          isDark
                            ? 'bg-gradient-to-br from-gray-800/80 to-gray-800/40'
                            : 'bg-white border border-gray-100 hover:border-gray-200'
                        }`}
                      >
                        {/* Gradient accent bar */}
                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${impact.color}`} />

                        <div className="p-5 pt-6">
                          {/* Icon badge */}
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${impact.color} shadow-lg`}>
                              <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                            </div>
                            <motion.div
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
                              className={`w-7 h-7 rounded-full flex items-center justify-center ${
                                isDark ? 'bg-green-500/20' : 'bg-green-100'
                              }`}
                            >
                              <Check className="w-4 h-4 text-green-500" strokeWidth={3} />
                            </motion.div>
                          </div>

                          {/* Metric */}
                          <div className="mb-2">
                            <span className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                              {impact.prefix}
                            </span>
                            <motion.div
                              initial={{ opacity: 0, scale: 0.5 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.4 + index * 0.1, type: 'spring' }}
                              className={`text-4xl md:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
                            >
                              {impact.metric}
                            </motion.div>
                          </div>

                          {/* Description */}
                          <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {impact.description}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Bottom callout - Enhanced */}
                <motion.a
                  href="/contact?intent=blueprint"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block rounded-xl p-5 relative overflow-hidden group/cta cursor-pointer ${
                    isDark ? 'bg-gradient-to-r from-[#ec5f2b]/20 to-orange-500/10' : 'bg-gradient-to-r from-[#ec5f2b]/10 to-orange-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#ec5f2b] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#ec5f2b]/30">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className={`text-base font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Ready to transform your operations?
                      </p>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        We calculate your exact ROI during the Blueprint Sprint
                      </p>
                    </div>
                    <motion.div
                      className="w-10 h-10 rounded-full bg-[#ec5f2b] flex items-center justify-center"
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                  {/* Hover shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700"
                  />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
