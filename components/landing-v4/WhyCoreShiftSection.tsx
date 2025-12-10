'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Building2, Zap, Target, Code2, Handshake, DollarSign, Bot, ChevronLeft, ChevronRight } from 'lucide-react'

const differentiators = [
  {
    icon: Building2,
    title: 'Enterprise DNA',
    description: '20+ years building operations at SAP, IBM, HCL, HP, and Talend. We have seen what works at scale and what does not.',
    highlight: '20+ years'
  },
  {
    icon: Zap,
    title: 'Startup Speed',
    description: 'Working POC in 2 weeks. Production systems in 8 weeks, not 8 months. No enterprise bloat.',
    highlight: '2 weeks'
  },
  {
    icon: Target,
    title: 'Strategy First',
    description: 'We do not start building until we understand your business. Blueprint before code so you never waste money on the wrong thing.',
    highlight: 'Blueprint before code'
  },
  {
    icon: Code2,
    title: 'Modern Stack',
    description: 'React, Postgres, AI native architecture. Enterprise grade without enterprise bloat. Built to scale from 10 to 10,000 users.',
    highlight: 'Enterprise grade'
  },
  {
    icon: Handshake,
    title: 'True Partnership',
    description: 'Your data stays yours. Full documentation. Training included. Long term support as your ops partner, not just a vendor.',
    highlight: 'Long term support'
  },
  {
    icon: DollarSign,
    title: 'Right-Sized Investment',
    description: 'CXO level guidance without full time cost. Fractional expertise that grows with you. Pay for what you need, when you need it.',
    highlight: 'CXO level guidance'
  }
]

export default function WhyCoreShiftSection() {
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
      const cardWidth = carouselRef.current.scrollWidth / differentiators.length
      carouselRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
      setCurrentMobileIndex(index)
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft
      const cardWidth = carouselRef.current.scrollWidth / differentiators.length
      const newIndex = Math.round(scrollLeft / cardWidth)
      setCurrentMobileIndex(newIndex)
    }
  }

  return (
    <section id="why-coreshift" className={`relative py-16 md:py-20 overflow-hidden ${isDark ? 'bg-gradient-to-b from-black via-gray-950 to-black' : 'bg-gradient-to-b from-white via-gray-50 to-white'}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -top-48 -right-48 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-[#ec5f2b]/15' : 'bg-[#ec5f2b]/8'}`}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className={`absolute -bottom-48 -left-48 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-purple-500/15' : 'bg-purple-500/8'}`}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isDark
              ? 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.02) 1px, transparent 0)'
              : 'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.01) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${
              isDark ? 'bg-gray-900 text-gray-400 border border-gray-800' : 'bg-gray-100 text-gray-600 border border-gray-200'
            }`}>
              WHY CORESHIFT
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
          >
            Not a dev shop.{' '}
            <span className="text-[#ec5f2b]">Transformation architects.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`text-sm md:text-base max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}
          >
            Dev shops give you code. We give you systems that change how your business operates.
          </motion.p>
        </motion.div>

        {/* Differentiators - Desktop Grid */}
        <motion.div
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.15
              }
            }
          }}
        >
          {differentiators.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={index}
                className="group/card relative"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: 'spring', stiffness: 80, damping: 18 }
                  }
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ${
                  isDark ? 'bg-[#ec5f2b]/20' : 'bg-[#ec5f2b]/15'
                }`} />

                <div className={`relative rounded-2xl p-5 md:p-6 border-2 flex flex-col h-full ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border-gray-700 hover:border-[#ec5f2b]/50'
                    : 'bg-gradient-to-br from-white via-white to-gray-50 border-gray-200 hover:border-[#ec5f2b]/30'
                } shadow-xl hover:shadow-2xl transition-all duration-300`}>

                  {/* Top accent line - animated */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec5f2b] to-[#ff6b35] rounded-t-2xl"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  />

                  {/* Side accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ec5f2b] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-l-2xl" />

                  {/* Icon with animation */}
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative">
                      <div className={`absolute inset-0 rounded-xl blur-md opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 ${
                        isDark ? 'bg-[#ec5f2b]/30' : 'bg-[#ec5f2b]/20'
                      }`} />
                      <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center ${
                        isDark ? 'bg-[#ec5f2b]/10' : 'bg-[#ec5f2b]/10'
                      } group-hover/card:bg-[#ec5f2b]/20 transition-colors duration-300`}>
                        <Icon className="w-6 h-6 text-[#ec5f2b]" strokeWidth={2} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {item.title}
                  </h3>

                  {/* Description with highlighted text */}
                  <p className={`text-sm leading-relaxed flex-grow ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description.split(item.highlight).map((part, idx, arr) => (
                      <span key={idx}>
                        {part}
                        {idx < arr.length - 1 && (
                          <span className="text-[#ec5f2b] font-semibold">{item.highlight}</span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Differentiators - Mobile Carousel */}
        <div className="sm:hidden">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {differentiators.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[85vw] snap-center"
                >
                  <div className={`relative rounded-2xl p-5 border-2 h-full ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border-gray-700'
                      : 'bg-gradient-to-br from-white via-white to-gray-50 border-gray-200'
                  } shadow-xl`}>
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec5f2b] to-[#ff6b35] rounded-t-2xl" />

                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      isDark ? 'bg-[#ec5f2b]/10' : 'bg-[#ec5f2b]/10'
                    }`}>
                      <Icon className="w-6 h-6 text-[#ec5f2b]" strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.description.split(item.highlight).map((part, idx, arr) => (
                        <span key={idx}>
                          {part}
                          {idx < arr.length - 1 && (
                            <span className="text-[#ec5f2b] font-semibold">{item.highlight}</span>
                          )}
                        </span>
                      ))}
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
              {differentiators.map((_, idx) => (
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
              onClick={() => scrollToCard(Math.min(differentiators.length - 1, currentMobileIndex + 1))}
              disabled={currentMobileIndex === differentiators.length - 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                currentMobileIndex === differentiators.length - 1
                  ? isDark ? 'bg-gray-800 text-gray-600' : 'bg-gray-100 text-gray-300'
                  : isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* AI Premium Card - Full Width Dark Theme */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
            {/* Gradient overlay - right side glow */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ec5f2b]/15 to-transparent pointer-events-none" />

            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />

            <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-[#ec5f2b]/10 border border-[#ec5f2b]/20 flex items-center justify-center">
                  <Bot className="w-7 h-7 text-[#ec5f2b]" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  AI That Actually Works
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl">
                  We do not bolt ChatGPT onto your spreadsheet. We architect AI into your workflows, <span className="text-[#ec5f2b] font-semibold">purpose built for your process</span>.
                </p>
              </div>

              {/* Badge */}
              <div className="flex-shrink-0">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ec5f2b] text-white text-xs font-bold uppercase tracking-wide">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <span>AI Native</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
