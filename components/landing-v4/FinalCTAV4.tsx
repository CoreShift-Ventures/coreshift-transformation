'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Calendar, Linkedin, Mail, ArrowRight } from 'lucide-react'

export default function FinalCTAV4() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  return (
    <section id="contact" className={`py-16 md:py-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-2xl p-12 md:p-16 text-center relative overflow-hidden ${
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
              Ready to transform your Business?
            </h2>
            <p className={`text-lg mb-10 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
              Start with a free process audit. We'll identify your biggest opportunities and show you exactly how to fix them.
            </p>

            {/* CTA Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              {/* Primary CTA - Contact Page */}
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#ec5f2b] text-white font-semibold rounded-lg hover:bg-[#d94f1f] transition-all hover:scale-105 shadow-lg group"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Strategy Session
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA - Email */}
              <a
                href="mailto:contact@cshift.io"
                className={`inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg border-2 transition-all hover:scale-105 ${
                  isDark
                    ? 'border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800'
                    : 'border-gray-300 text-brand-charcoal hover:border-gray-400 hover:bg-white'
                }`}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>

            {/* Social Connect */}
            <div className="pt-8 border-t border-gray-300/20">
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                Connect with us
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://www.linkedin.com/company/coreshift"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 ${
                    isDark
                      ? 'bg-gray-800 hover:bg-gray-700 text-gray-400'
                      : 'bg-white hover:bg-gray-50 text-gray-600 border border-gray-200'
                  }`}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contact@cshift.io"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110 ${
                    isDark
                      ? 'bg-gray-800 hover:bg-gray-700 text-gray-400'
                      : 'bg-white hover:bg-gray-50 text-gray-600 border border-gray-200'
                  }`}
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
