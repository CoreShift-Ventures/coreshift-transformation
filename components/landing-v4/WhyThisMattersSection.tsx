'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { AlertTriangle, Sparkles, X, Check, Clock, Users, TrendingUp, BarChart3 } from 'lucide-react'

const problems = [
  'Spreadsheet driven operations blocking scale',
  'Revenue leakage hidden in everyday workflows',
  'Teams overwhelmed by manual tasks',
  'No real visibility into customer or operational health',
  'Scaling feels chaotic and unsustainable',
  'Critical decisions delayed by lack of data'
]

const impacts = [
  { metric: '50%', prefix: 'Up to', description: 'productivity gains from automated workflows', icon: Clock },
  { metric: '30%', prefix: 'Up to', description: 'revenue leakage recovered', icon: TrendingUp },
  { metric: '5%', prefix: 'Up to', description: 'churn reduction via consistent delivery', icon: Users },
  { metric: '25%', prefix: 'Up to', description: 'operational cost savings', icon: BarChart3 }
]

export default function WhyThisMattersSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

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

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-10">
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

              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec5f2b] via-[#ff7849] to-[#ec5f2b]" />

              {/* Subtle pattern overlay */}
              <div className={`absolute inset-0 opacity-[0.02] ${isDark ? 'bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]' : 'bg-[radial-gradient(circle_at_1px_1px,black_1px,transparent_0)]'} bg-[length:24px_24px]`} />

              <div className="relative p-6 md:p-8 lg:p-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center ${
                    isDark ? 'bg-[#ec5f2b]/10' : 'bg-[#ec5f2b]/10'
                  }`}>
                    <Sparkles className="w-7 h-7 text-[#ec5f2b]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      With <span className={isDark ? 'text-white' : 'text-brand-charcoal'}>Core</span><span className="text-[#ec5f2b]">Shift</span>
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-[#ec5f2b]/80' : 'text-[#ec5f2b]/80'}`}>
                      Typical client outcomes
                    </p>
                  </div>
                </div>

                {/* Metrics Grid */}
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
                        className={`relative rounded-2xl p-5 transition-all duration-300 ${
                          isDark
                            ? 'bg-gradient-to-br from-gray-800/80 to-gray-800/40 hover:from-gray-800 hover:to-gray-800/60'
                            : 'bg-gradient-to-br from-[#faf8f5] to-white hover:from-[#fff5f0] hover:to-white border border-gray-100'
                        }`}
                      >
                        {/* Icon badge */}
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            isDark ? 'bg-[#ec5f2b]/15' : 'bg-[#ec5f2b]/10'
                          }`}>
                            <Icon className="w-5 h-5 text-[#ec5f2b]" strokeWidth={1.5} />
                          </div>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            isDark ? 'bg-green-500/20' : 'bg-green-100'
                          }`}>
                            <Check className="w-3.5 h-3.5 text-green-500" strokeWidth={3} />
                          </div>
                        </div>

                        {/* Metric */}
                        <div className="mb-1.5">
                          <span className={`text-xs font-medium uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                            {impact.prefix}
                          </span>
                          <div className={`text-3xl md:text-4xl font-bold tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                            {impact.metric}
                          </div>
                        </div>

                        {/* Description */}
                        <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {impact.description}
                        </p>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Bottom callout */}
                <div className={`rounded-xl p-4 border-l-4 border-l-[#ec5f2b] ${
                  isDark ? 'bg-[#ec5f2b]/5' : 'bg-[#ec5f2b]/5'
                }`}>
                  <p className={`text-sm font-medium ${isDark ? 'text-[#ec5f2b]' : 'text-[#d54f20]'}`}>
                    We calculate your exact ROI during the Blueprint Sprint.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
