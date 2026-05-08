// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { AlertTriangle, FileSpreadsheet, Workflow, Bell, Eye, UserX, Brain } from 'lucide-react'

export function UniversalProblems() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  const problems = [
    {
      icon: FileSpreadsheet,
      title: 'Manual Data Entry',
      description: 'Hours spent on tasks that should be automated'
    },
    {
      icon: Workflow,
      title: 'Scattered Tools & Spreadsheets',
      description: 'Data trapped across 5+ disconnected systems'
    },
    {
      icon: Bell,
      title: 'Missing Follow-Ups',
      description: 'Leads, customers, and tasks slip through cracks'
    },
    {
      icon: Eye,
      title: 'Zero Real-Time Visibility',
      description: 'Can\'t see what\'s happening without manual reports'
    },
    {
      icon: UserX,
      title: 'Founder Bottleneck',
      description: 'Everything requires your approval or involvement'
    },
    {
      icon: Brain,
      title: 'No Process Intelligence',
      description: 'Decisions based on gut feel, not data'
    }
  ]

  return (
    <section className={`py-16 px-6 relative ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
          >
            The Hidden Cost of Manual Operations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-sm max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}
          >
            Growing businesses lose 20-30% of their time to preventable inefficiencies
          </motion.p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                className={`rounded-2xl p-6 border transition-all hover:scale-[1.02] ${
                  isDark
                    ? 'bg-gray-900 border-gray-800 hover:border-gray-700'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                } shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isDark ? 'bg-red-950/50' : 'bg-red-50'
                  }`}>
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      {problem.title}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Closing Statement */}
        <motion.div
          className={`rounded-2xl p-6 border text-center ${
            isDark
              ? 'bg-red-950/20 border-red-900/30'
              : 'bg-red-50 border-red-200'
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className={`text-base font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            These aren't just inefficiencies — they're barriers to growth.
            <br />
            <span className="text-[#ec5f2b]">Here's how we solve them.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
