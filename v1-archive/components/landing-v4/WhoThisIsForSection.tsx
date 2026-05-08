'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { TrendingUp, Flame, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react'

const audiences = [
  {
    icon: TrendingUp,
    title: 'Growing Companies',
    description: 'Revenue is up but operations are holding you back. You\'ve outgrown spreadsheets but enterprise software is overkill.',
    highlight: 'outgrown'
  },
  {
    icon: Flame,
    title: 'Lean Teams',
    description: 'Small team, big ambitions. You need systems that multiply capacity, not another SaaS subscription that adds work.',
    highlight: 'multiply capacity'
  },
  {
    icon: RefreshCw,
    title: 'Unique Processes',
    description: 'Off-the-shelf software doesn\'t fit. You\'ve tried the big platforms but your process is different, and that\'s your edge.',
    highlight: 'your edge'
  }
]

export default function WhoThisIsForSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / audiences.length
      carouselRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
      setCurrentMobileIndex(index)
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft
      const cardWidth = carouselRef.current.scrollWidth / audiences.length
      const newIndex = Math.round(scrollLeft / cardWidth)
      setCurrentMobileIndex(newIndex)
    }
  }

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

        {/* Audience Cards - Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
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

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {audiences.map((audience, index) => {
              const Icon = audience.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[85vw] snap-center"
                >
                  <div className={`relative h-full rounded-2xl p-5 border ${
                    isDark
                      ? 'bg-gray-900 border-gray-800'
                      : 'bg-white border-gray-200'
                  } shadow-sm`}>
                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                      isDark ? 'bg-[#ec5f2b]/10' : 'bg-[#ec5f2b]/10'
                    }`}>
                      <Icon className="w-5 h-5 text-[#ec5f2b]" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg font-bold mb-2 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      {audience.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {audience.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Mobile Carousel Indicators & Navigation */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={() => scrollToCard(Math.max(0, currentMobileIndex - 1))}
              disabled={currentMobileIndex === 0}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                currentMobileIndex === 0
                  ? isDark ? 'bg-gray-800 text-gray-600' : 'bg-gray-100 text-gray-300'
                  : isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {audiences.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentMobileIndex
                      ? 'bg-[#ec5f2b] w-6'
                      : isDark ? 'bg-gray-700 w-2 hover:bg-gray-600' : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollToCard(Math.min(audiences.length - 1, currentMobileIndex + 1))}
              disabled={currentMobileIndex === audiences.length - 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                currentMobileIndex === audiences.length - 1
                  ? isDark ? 'bg-gray-800 text-gray-600' : 'bg-gray-100 text-gray-300'
                  : isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
