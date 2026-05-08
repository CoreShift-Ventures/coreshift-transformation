'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Search, Hammer, TrendingUp, ArrowRight } from 'lucide-react'

const phases = [
  {
    number: '01',
    icon: Search,
    title: 'Strategy & Blueprint',
    duration: '2 weeks',
    description: 'Deep-dive workshops, process mapping, and gap analysis.',
    deliverables: [
      'Working POC/prototype',
      'Blueprint document',
      'Build estimate & roadmap',
      'Live demo'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '02',
    icon: Hammer,
    title: 'Build & Deploy',
    duration: '4-8 weeks',
    description: 'State-of-the-art web/mobile app powered by AI.',
    deliverables: [
      'Production-ready system',
      'Your team trained',
      'Deployed & running',
      'Documentation'
    ],
    color: 'from-[#ec5f2b] to-[#f59e0b]'
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Evolve & Optimize',
    duration: 'Ongoing',
    description: 'Fractional CXO engagement for continuous improvement.',
    deliverables: [
      'Quarterly strategy sessions',
      'Feature enhancements',
      'Scale support',
      'Performance optimization'
    ],
    color: 'from-purple-500 to-pink-500',
    optional: true
  }
]

export default function HowWeWorkSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  return (
    <section id="how-we-work" className={`py-16 md:py-20 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            How We Work
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            A proven 3-phase approach to transforming your operations
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8 md:space-y-12">
          {phases.map((phase, index) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`grid md:grid-cols-12 gap-8 items-start`}>
                  {/* Phase Number & Icon */}
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-4 md:flex-col md:items-start">
                      <div className={`text-6xl md:text-7xl font-bold bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}>
                        {phase.number}
                      </div>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${phase.color} flex items-center justify-center`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Phase Content */}
                  <div className={`md:col-span-9 rounded-xl p-8 border ${
                    isDark
                      ? 'bg-gray-900 border-gray-800'
                      : 'bg-white border-gray-200'
                  }`}>
                    {/* Title & Duration */}
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                          {phase.title}
                          {phase.optional && (
                            <span className="ml-3 text-sm font-normal text-gray-500">(Optional)</span>
                          )}
                        </h3>
                        <p className={`text-base ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                          {phase.description}
                        </p>
                      </div>
                      <div className={`px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r ${phase.color} text-white`}>
                        {phase.duration}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="mt-6">
                      <div className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Deliverables:
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {phase.deliverables.map((deliverable, delIndex) => (
                          <div
                            key={delIndex}
                            className={`flex items-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-700'}`}
                          >
                            <ArrowRight className="w-4 h-4 text-[#ec5f2b] mr-2 flex-shrink-0" />
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector Line (except for last phase) */}
                {index < phases.length - 1 && (
                  <div className={`hidden md:block absolute left-[10%] top-full h-12 w-0.5 ${
                    isDark ? 'bg-gray-800' : 'bg-gray-300'
                  }`} />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#ec5f2b] text-white font-semibold rounded-lg hover:bg-[#d94f1f] transition-all hover:scale-105 shadow-lg group"
          >
            Start with Phase 1
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
