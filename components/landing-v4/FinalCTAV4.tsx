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
              Ready to replace chaos with systems?
            </h2>
            <p className={`text-base md:text-lg mb-10 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
              Book a free process audit. We'll diagnose where you're bleeding operationally and show you what's possible.
            </p>

            {/* CTA Options */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              {/* Primary CTA */}
              <a
                href="/contact?intent=blueprint"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-[#ec5f2b] text-white font-semibold rounded-xl text-base hover:bg-[#d94f1f] transition-all hover:scale-105 shadow-lg group min-h-[52px]"
              >
                <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>Book a Free Consult</span>
                <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA - Email */}
              <a
                href="mailto:contact@cshift.io"
                className={`w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-4 font-semibold rounded-xl text-base border-2 transition-all hover:scale-105 min-h-[52px] ${
                  isDark
                    ? 'border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800'
                    : 'border-gray-300 text-brand-charcoal hover:border-gray-400 hover:bg-white'
                }`}
              >
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>contact@cshift.io</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
