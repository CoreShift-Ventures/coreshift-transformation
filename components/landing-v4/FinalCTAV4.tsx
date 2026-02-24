'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Calendar, Mail, ArrowRight } from 'lucide-react'

export default function FinalCTAV4() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  return (
    <section id="contact" className={`py-14 md:py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-2xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden ${
            isDark
              ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700'
              : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200'
          }`}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ec5f2b] opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ec5f2b] opacity-5 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              Ready to stop doing work that machines should do?
            </h2>
            <p className={`text-base md:text-lg mb-10 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
              Book a 30-minute call. Tell us one process your team does manually. We'll tell you exactly what an agent for it would look like.
            </p>

            {/* CTA Options */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10">
              {/* Primary CTA */}
              <a
                href="mailto:contact@cshift.io"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-[#ec5f2b] text-white font-semibold rounded-xl text-base hover:bg-[#d94f1f] transition-all hover:scale-105 shadow-lg group min-h-[52px]"
              >
                <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#agents"
                className={`w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-4 font-semibold rounded-xl text-base border-2 transition-all hover:scale-105 min-h-[52px] ${
                  isDark
                    ? 'border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800'
                    : 'border-gray-300 text-brand-charcoal hover:border-gray-400 hover:bg-white'
                }`}
              >
                <span>See All 6 Agents</span>
              </a>
            </div>

            {/* Trust Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              {[
                { value: '6', label: 'Live Agents' },
                { value: '5+', label: 'Industries' },
                { value: '20+', label: 'Years Enterprise Experience' },
                { value: '$0', label: 'Upfront unless we scope it' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-[#ec5f2b]">{stat.value}</div>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
