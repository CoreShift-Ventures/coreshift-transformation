// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Lightbulb, Check, ArrowRight, Sparkles } from 'lucide-react'

export function CustomTransformationCallout() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  const capabilities = [
    {
      title: 'Custom Workflows & Integrations',
      description: 'Build exactly what your business needs, integrated with your existing systems'
    },
    {
      title: 'Legacy System Migrations',
      description: 'Modernize outdated processes without disrupting operations'
    },
    {
      title: 'Multi-Department Transformations',
      description: 'Connect sales, operations, and finance in one unified system'
    }
  ]

  return (
    <section className={`py-16 px-6 relative ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-2xl border p-8 md:p-10 shadow-lg relative overflow-hidden ${
            isDark
              ? 'bg-gray-900 border-gray-800'
              : 'bg-white border-gray-200'
          }`}
        >
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Icon & Heading */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#ec5f2b] to-[#d94f1f] rounded-xl shadow-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className={`text-xl md:text-2xl font-bold ${
                      isDark ? 'text-gray-100' : 'text-brand-charcoal'
                    }`}>
                      Don't See Your Exact Process?
                    </h3>
                    <Sparkles className="w-5 h-5 text-[#ec5f2b]" />
                  </div>
                  <p className={`text-sm max-w-2xl ${
                    isDark ? 'text-gray-400' : 'text-brand-gray'
                  }`}>
                    Our 9 templates cover most businesses. For unique transformations, we build custom solutions with the same speed and AI capabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Capabilities Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {capabilities.map((capability, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`p-4 rounded-xl border ${
                    isDark ? 'bg-gray-950/50 border-gray-800' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-start gap-2 mb-2">
                    <Check className="w-4 h-4 text-[#ec5f2b] flex-shrink-0 mt-0.5" />
                    <h4 className={`text-sm font-semibold ${
                      isDark ? 'text-gray-100' : 'text-gray-900'
                    }`}>
                      {capability.title}
                    </h4>
                  </div>
                  <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between">
              <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                Same 2-week Blueprint Sprint • Same AI capabilities • Built for YOUR process
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg bg-gradient-to-r from-[#ec5f2b] to-[#d94f1f] hover:from-[#d94f1f] hover:to-[#c7451a] text-white">
                Schedule Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
