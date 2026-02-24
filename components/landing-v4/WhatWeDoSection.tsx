'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Search, Wrench, RefreshCw, Check, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Search,
    phase: 'Step 01 · Discover',
    title: 'Discovery Sprint',
    priceTag: '$750 – $1,500 · One-time · 2 weeks',
    description: 'We spend 2 weeks inside your operation. Mapping the exact process, documenting edge cases, identifying system touchpoints, defining exception logic. The output is a signed-off Agent Design Document.',
    features: [
      'Process walkthroughs with your team',
      'System access and integration mapping',
      'Edge case and exception documentation',
      'Agent Design Document delivered',
      'Signed-off ROI model with confirmed numbers'
    ],
    outcome: 'Complete process understanding before a single line of code is written.',
    cta: 'Start Discovery',
    ctaLink: 'mailto:contact@cshift.io',
    featured: false
  },
  {
    icon: Wrench,
    phase: 'Step 02 · Deploy',
    title: 'Build & Deploy',
    priceTag: '$2,500 – $10,000 · One-time · 4-6 weeks',
    description: 'We build the agent, connect to your live systems, run validation sprints, and deploy on your infrastructure. Agent is registered in CoreShift Command Center from day one.',
    features: [
      'Agent built to the Design Document',
      'Staging environment validation',
      'Live system integration testing',
      'Command Center monitoring setup',
      'Handover, documentation, team training'
    ],
    outcome: 'Your agent live in production, monitored 24/7, on your infrastructure.',
    cta: 'Get a Quote',
    ctaLink: 'mailto:contact@cshift.io',
    featured: true
  },
  {
    icon: RefreshCw,
    phase: 'Step 03 · Operate',
    title: 'Monthly Subscription',
    priceTag: '$500 – $1,500 / month · Per agent',
    description: 'We own the agent permanently. Monitoring, maintenance, updates when systems change, new business rule additions — all included. You get a running agent, we stay accountable for keeping it running.',
    features: [
      '24/7 Command Center monitoring',
      'Slack/email alerts on anomalies',
      'Updates when upstream systems change',
      'Monthly performance report',
      'New business logic additions included'
    ],
    outcome: 'Permanent accountability. Your agent keeps working because our revenue depends on it.',
    cta: 'Talk to Us',
    ctaLink: 'mailto:contact@cshift.io',
    featured: false
  }
]

export default function WhatWeDoSection() {
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
      const cardWidth = carouselRef.current.scrollWidth / services.length
      carouselRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
      setCurrentMobileIndex(index)
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft
      const cardWidth = carouselRef.current.scrollWidth / services.length
      const newIndex = Math.round(scrollLeft / cardWidth)
      setCurrentMobileIndex(newIndex)
    }
  }

  return (
    <section id="process" className={`relative py-16 md:py-20 overflow-hidden ${isDark ? 'bg-gradient-to-b from-black via-gray-950 to-black' : 'bg-gradient-to-b from-[#faf8f5] via-[#fff9f5] to-[#faf8f5]'}`}>
      {/* Premium background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl ${isDark ? 'bg-[#ec5f2b]/8' : 'bg-[#ec5f2b]/5'}`} />
        <div className={`absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl ${isDark ? 'bg-purple-500/5' : 'bg-purple-500/3'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
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
              HOW IT WORKS
            </span>
          </motion.div>
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            From spreadsheet chaos to running agent in 6 weeks.
          </h2>
          <p className={`text-sm md:text-base max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Every engagement follows the same three-phase structure. Discovery de-risks the build. Subscription keeps the agent running.
          </p>
        </motion.div>

        {/* Premium Service Cards - Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative"
              >
                {/* Phase Badge - Premium positioned */}
                <motion.div
                  className="absolute -top-3 left-6 z-10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                >
                  <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#ec5f2b] text-white shadow-lg shadow-[#ec5f2b]/25">
                    {service.phase}
                  </span>
                </motion.div>

                {/* Card with premium styling */}
                <div className={`relative h-full rounded-2xl border transition-all duration-500 overflow-hidden ${
                  isDark
                    ? 'bg-gradient-to-b from-gray-900 to-gray-900/80 border-gray-800 hover:border-[#ec5f2b]/30'
                    : 'bg-white border-gray-200 hover:border-[#ec5f2b]/30'
                } shadow-xl hover:shadow-2xl group-hover:-translate-y-2`}>

                  {/* Top gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec5f2b] via-[#ff7849] to-[#ec5f2b]" />

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isDark ? 'bg-gradient-to-b from-[#ec5f2b]/5 to-transparent' : 'bg-gradient-to-b from-[#ec5f2b]/3 to-transparent'
                  }`} />

                  <div className="relative p-6 md:p-8 pt-10 flex flex-col h-full">
                    {/* Icon - Premium style */}
                    <motion.div
                      className="mb-6"
                      whileHover={{ scale: 1.05, rotate: [0, -3, 3, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center ${
                        isDark ? 'bg-[#ec5f2b]/10' : 'bg-[#ec5f2b]/10'
                      } group-hover:bg-[#ec5f2b]/15 transition-colors duration-300`}>
                        <Icon className="w-7 h-7 text-[#ec5f2b]" strokeWidth={1.5} />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className={`text-xl font-bold mb-2 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      {service.title}
                    </h3>

                    {/* Price Tag */}
                    <p className={`text-xs font-medium mb-4 ${isDark ? 'text-[#ec5f2b]/80' : 'text-[#ec5f2b]'}`}>
                      {service.priceTag}
                    </p>

                    {/* Description */}
                    <p className={`text-sm mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {service.description}
                    </p>

                    {/* Features List - Clean premium style */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + featureIndex * 0.05
                          }}
                          className="flex items-center gap-3"
                        >
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                            isDark ? 'bg-[#ec5f2b]/20' : 'bg-[#ec5f2b]/10'
                          }`}>
                            <Check className="w-3 h-3 text-[#ec5f2b]" strokeWidth={3} />
                          </div>
                          <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Outcome Box - Premium with orange accent */}
                    <div className={`mt-auto rounded-xl p-5 border-l-4 border-l-[#ec5f2b] ${
                      isDark ? 'bg-gray-800/50' : 'bg-gradient-to-r from-[#ec5f2b]/5 to-transparent'
                    }`}>
                      <p className="text-[10px] font-bold tracking-[0.15em] uppercase mb-2 text-[#ec5f2b]">
                        Your Outcome
                      </p>
                      <p className={`text-sm leading-relaxed font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                        {service.outcome}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={service.ctaLink}
                      className={`mt-6 w-full px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center group/btn ${
                        service.featured
                          ? 'bg-[#ec5f2b] text-white hover:bg-[#d54f20] hover:shadow-lg hover:shadow-[#ec5f2b]/25'
                          : isDark
                            ? 'bg-gray-800 text-gray-100 hover:bg-gray-700 border border-gray-700 hover:border-gray-600'
                            : 'bg-gray-50 text-gray-800 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span>{service.cta}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
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
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[85vw] snap-center pt-4"
                >
                  {/* Phase Badge */}
                  <div className="relative">
                    <span className="absolute -top-3 left-4 z-10 inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#ec5f2b] text-white shadow-lg shadow-[#ec5f2b]/25">
                      {service.phase}
                    </span>
                  </div>

                  <div className={`relative rounded-2xl border overflow-hidden h-full ${
                    isDark
                      ? 'bg-gradient-to-b from-gray-900 to-gray-900/80 border-gray-800'
                      : 'bg-white border-gray-200'
                  } shadow-xl`}>
                    {/* Top gradient accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec5f2b] via-[#ff7849] to-[#ec5f2b]" />

                    <div className="p-5 pt-8 flex flex-col h-full">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        isDark ? 'bg-[#ec5f2b]/10' : 'bg-[#ec5f2b]/10'
                      }`}>
                        <Icon className="w-6 h-6 text-[#ec5f2b]" strokeWidth={1.5} />
                      </div>

                      {/* Title */}
                      <h3 className={`text-lg font-bold mb-1 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                        {service.title}
                      </h3>

                      {/* Price Tag */}
                      <p className={`text-xs font-medium mb-3 ${isDark ? 'text-[#ec5f2b]/80' : 'text-[#ec5f2b]'}`}>
                        {service.priceTag}
                      </p>

                      {/* Description */}
                      <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {service.description}
                      </p>

                      {/* Features List - Compact for mobile */}
                      <ul className="space-y-2 mb-4 flex-grow">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                              isDark ? 'bg-[#ec5f2b]/20' : 'bg-[#ec5f2b]/10'
                            }`}>
                              <Check className="w-2.5 h-2.5 text-[#ec5f2b]" strokeWidth={3} />
                            </div>
                            <span className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'} pl-6`}>
                            +{service.features.length - 3} more
                          </li>
                        )}
                      </ul>

                      {/* Outcome Box - Compact */}
                      <div className={`rounded-lg p-3 border-l-4 border-l-[#ec5f2b] mb-4 ${
                        isDark ? 'bg-gray-800/50' : 'bg-gradient-to-r from-[#ec5f2b]/5 to-transparent'
                      }`}>
                        <p className="text-[9px] font-bold tracking-[0.15em] uppercase mb-1 text-[#ec5f2b]">
                          Your Outcome
                        </p>
                        <p className={`text-xs leading-relaxed font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                          {service.outcome}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <Link
                        href={service.ctaLink}
                        className={`w-full px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center ${
                          service.featured
                            ? 'bg-[#ec5f2b] text-white'
                            : isDark
                              ? 'bg-gray-800 text-gray-100 border border-gray-700'
                              : 'bg-gray-50 text-gray-800 border border-gray-200'
                        }`}
                      >
                        <span>{service.cta}</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
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
              {services.map((_, idx) => (
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
              onClick={() => scrollToCard(Math.min(services.length - 1, currentMobileIndex + 1))}
              disabled={currentMobileIndex === services.length - 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                currentMobileIndex === services.length - 1
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
