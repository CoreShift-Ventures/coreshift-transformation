'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import {
  Target,
  Rocket,
  TrendingUp,
  Check,
  ArrowRight,
  FileText,
  Zap,
  Settings
} from 'lucide-react'

const approachSteps = [
  {
    phase: 'Phase 1',
    title: 'Strategy & Blueprint',
    duration: '2 weeks',
    icon: Target,
    description: 'We analyze your current processes, identify transformation opportunities, and deliver a working POC',
    deliverables: [
      'Process discovery & analysis',
      'Strategic transformation roadmap',
      'Working POC/prototype',
      'Technical architecture plan',
      'No obligation to proceed'
    ]
  },
  {
    phase: 'Phase 2',
    title: 'Build & Deploy',
    duration: '4-6 weeks',
    icon: Rocket,
    description: 'Full system development with your chosen process modules and AI intelligence integration',
    deliverables: [
      'Full system development',
      'AI integration & training',
      'Data migration & setup',
      'Team training',
      'Production deployment'
    ]
  },
  {
    phase: 'Phase 3',
    title: 'Evolve & Optimize',
    duration: 'Ongoing (Optional)',
    icon: TrendingUp,
    description: 'Continuous improvement and scaling support as your business grows',
    deliverables: [
      'Feature enhancements',
      'Process optimization',
      'Additional integrations',
      'Scaling support',
      'Ongoing improvements'
    ]
  }
]

export default function TransformationApproach() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  return (
    <section className={`py-16 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Our Transformation Approach
          </h2>
          <p className={`text-base max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            A proven three-phase methodology to transform your business processes without disruption
          </p>
        </motion.div>

        {/* Approach Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {approachSteps.map((step, index) => {
            const Icon = step.icon
            const isHighlighted = index === 1 // Highlight middle phase (Build & Deploy)

            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative rounded-xl overflow-hidden ${
                  isHighlighted
                    ? 'border-2 border-[#ec5f2b] shadow-xl'
                    : isDark
                    ? 'border border-gray-800 shadow-lg'
                    : 'border border-gray-200 shadow-lg'
                } ${isDark ? 'bg-gray-900' : 'bg-white'}`}
              >
                {/* Phase Badge */}
                <div className={`absolute top-0 right-0 px-4 py-1 text-xs font-semibold ${
                  isHighlighted
                    ? 'bg-[#ec5f2b] text-white'
                    : isDark
                    ? 'bg-gray-800 text-gray-400'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {step.phase}
                </div>

                <div className="p-6 pt-8">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    isHighlighted
                      ? 'bg-gradient-to-br from-[#ec5f2b] to-[#d94f1f]'
                      : isDark
                      ? 'bg-gray-800'
                      : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      isHighlighted
                        ? 'text-white'
                        : isDark
                        ? 'text-gray-400'
                        : 'text-brand-charcoal'
                    }`} strokeWidth={2} />
                  </div>

                  {/* Title & Duration */}
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                    {step.duration}
                  </p>

                  {/* Description */}
                  <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 mb-6">
                    {step.deliverables.map((deliverable, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          isHighlighted ? 'text-[#ec5f2b]' : isDark ? 'text-gray-500' : 'text-gray-400'
                        }`} />
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold transition-all shadow-lg hover:shadow-xl bg-gradient-to-r from-[#ec5f2b] to-[#d94f1f] hover:from-[#d94f1f] hover:to-[#c7451a] text-white"
          >
            Build Your Plan & See Pricing
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className={`text-xs mt-4 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            2-week deployment • No long-term contracts • You own everything
          </p>
        </motion.div>
      </div>
    </section>
  )
}
