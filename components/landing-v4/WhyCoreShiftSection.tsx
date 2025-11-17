'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Compass, Zap, Clock, Shield, DollarSign, Sparkles, Check } from 'lucide-react'

const differentiators = [
  {
    icon: Compass,
    title: 'Strategy First',
    points: [
      'Blueprint before building',
      'No wasted development',
      'No expensive pivots',
      'Clear roadmap from day one'
    ]
  },
  {
    icon: Zap,
    title: 'AI-Native',
    points: [
      'Intelligence built-in, not bolted-on',
      'ShiftIQ automation at the core',
      'CompassAI insights everywhere',
      'Smart automation from the start'
    ]
  },
  {
    icon: Clock,
    title: 'Speed',
    points: [
      'Working POC in 2 weeks',
      'Production system in 8 weeks',
      'Not 6-12 months',
      'Fast iteration, faster time-to-value'
    ]
  },
  {
    icon: Shield,
    title: 'Ownership',
    points: [
      'You own everything',
      'Code, data, infrastructure',
      'No vendor lock-in',
      'Complete control and portability'
    ]
  },
  {
    icon: DollarSign,
    title: 'Fractional Expertise',
    points: [
      'CXO-level guidance',
      'Without full-time cost',
      'No long-term commitment',
      'Access experts when you need them'
    ]
  },
  {
    icon: Sparkles,
    title: 'Built for Scale, Powered by AI',
    points: [
      'Scales from 10 to 10,000 users',
      'Enterprise-grade architecture',
      'AI-powered automation throughout',
      'Performance that grows with you'
    ]
  }
]

export default function WhyCoreShiftSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  return (
    <section id="why-coreshift" className={`py-16 md:py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Why{' '}
            <span className={isDark ? 'text-white' : 'text-black'}>Core</span>
            <span className="text-[#ec5f2b]">Shift</span>
          </h2>
          <p className={`text-sm max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Your fractional operations brain + execution team
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
              }
            }
          }}
        >
          {differentiators.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={index}
                className={`rounded-2xl p-6 border flex flex-col ${
                  isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                } shadow-lg`}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: 'spring', stiffness: 100, damping: 20 }
                  }
                }}
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-[#ec5f2b]" strokeWidth={1.5} />
                </div>
                <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  {item.title}
                </h3>
                <ul className="space-y-2.5 mb-6 flex-grow">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className={`pt-4 mt-auto border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                  <p className={`text-sm font-semibold ${isDark ? 'text-[#ec5f2b]' : 'text-[#ec5f2b]'}`}>
                    ✓ {item.title === 'Strategy First' ? 'Blueprint before building' :
                        item.title === 'AI-Native' ? 'Intelligence built-in, not bolted-on' :
                        item.title === 'Speed' ? 'Production ready in 8 weeks' :
                        item.title === 'Ownership' ? 'You own everything' :
                        item.title === 'Fractional Expertise' ? 'CXO-level guidance without the cost' :
                        'Enterprise-grade, AI-powered'}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
