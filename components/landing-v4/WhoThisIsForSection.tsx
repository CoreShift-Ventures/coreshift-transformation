'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { TrendingUp, Flame, RefreshCw } from 'lucide-react'

const audiences = [
  {
    icon: TrendingUp,
    title: 'Scaling Companies',
    description: 'Growth-stage companies hitting operational walls. The business is scaling but systems can\'t keep up.',
    highlight: 'scaling'
  },
  {
    icon: Flame,
    title: 'Founder-Led Teams',
    description: 'Founders drowning in operational details instead of building the business. You need systems that run without you.',
    highlight: 'run without you'
  },
  {
    icon: RefreshCw,
    title: 'Unique Processes',
    description: 'Off-the-shelf software doesn\'t fit. You\'ve tried the big platforms but your process is different and that\'s your edge.',
    highlight: 'your edge'
  }
]

export default function WhoThisIsForSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  return (
    <section className={`relative py-16 md:py-20 overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-[#faf8f5]'}`}>
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className={`absolute top-1/4 left-0 w-72 h-72 rounded-full blur-3xl ${isDark ? 'bg-[#ec5f2b]/5' : 'bg-[#ec5f2b]/5'}`} />
        <div className={`absolute bottom-1/4 right-0 w-72 h-72 rounded-full blur-3xl ${isDark ? 'bg-purple-500/5' : 'bg-purple-500/3'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${
              isDark ? 'bg-gray-900 text-gray-400 border border-gray-800' : 'bg-white text-gray-600 border border-gray-200 shadow-sm'
            }`}>
              WHO THIS IS FOR
            </span>
          </motion.div>
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Businesses ready to scale but blocked by chaos
          </h2>
          <p className={`text-sm md:text-base max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            You&apos;ve grown beyond spreadsheets and WhatsApp, but enterprise software doesn&apos;t fit how you work. You need something built for <span className="font-semibold text-[#ec5f2b]">YOU</span>.
          </p>
        </motion.div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className={`relative h-full rounded-2xl p-6 md:p-8 border transition-all duration-500 ${
                  isDark
                    ? 'bg-gray-900 border-gray-800 hover:border-[#ec5f2b]/30'
                    : 'bg-white border-gray-200 hover:border-[#ec5f2b]/30'
                } shadow-sm hover:shadow-xl`}>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isDark ? 'bg-gradient-to-br from-[#ec5f2b]/5 to-transparent' : 'bg-gradient-to-br from-[#ec5f2b]/5 to-transparent'
                  }`} />

                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${
                      isDark ? 'bg-[#ec5f2b]/10' : 'bg-[#ec5f2b]/10'
                    }`}>
                      <Icon className="w-6 h-6 text-[#ec5f2b]" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg md:text-xl font-bold mb-3 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      {audience.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {audience.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
