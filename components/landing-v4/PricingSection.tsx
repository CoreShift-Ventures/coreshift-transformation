'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Lightbulb, Zap, Users, Check, ArrowRight, Calendar, Globe, MapPin } from 'lucide-react'
import Link from 'next/link'

type Region = 'india' | 'global'

interface PricingData {
  india: {
    currency: string
    symbol: string
    packages: {
      blueprint: { min: string; max: string }
      systems: { min: string; max: string }
      fractional: { min: string; max: string }
    }
    hosting: { min: string; max: string; period: string }
  }
  global: {
    currency: string
    symbol: string
    packages: {
      blueprint: { min: string; max: string }
      systems: { min: string; max: string }
      fractional: { min: string; max: string }
    }
    hosting: { min: string; max: string; period: string }
  }
}

const pricingData: PricingData = {
  india: {
    currency: 'INR',
    symbol: '₹',
    packages: {
      blueprint: { min: '75k', max: '1.5L' },
      systems: { min: '3L', max: '20L' },
      fractional: { min: '1L', max: '4L' }
    },
    hosting: { min: '25k', max: '75k', period: 'year' }
  },
  global: {
    currency: 'USD',
    symbol: '$',
    packages: {
      blueprint: { min: '2.5k', max: '5k' },
      systems: { min: '15k', max: '100k' },
      fractional: { min: '3k', max: '12k' }
    },
    hosting: { min: '49', max: '299', period: 'month' }
  }
}

export default function PricingSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [region, setRegion] = useState<Region>('global')
  const [detectedRegion, setDetectedRegion] = useState<Region | null>(null)

  useEffect(() => {
    setMounted(true)

    // Detect user's region based on timezone
    const detectRegion = () => {
      try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        // Indian timezones
        if (timezone.includes('Asia/Kolkata') || timezone.includes('Asia/Calcutta')) {
          setDetectedRegion('india')
          setRegion('india')
        } else {
          setDetectedRegion('global')
          setRegion('global')
        }
      } catch (error) {
        // Fallback to global if detection fails
        setDetectedRegion('global')
        setRegion('global')
      }
    }

    detectRegion()
  }, [])

  const isDark = mounted && theme === 'dark'
  const pricing = pricingData[region]

  const packages = [
    {
      icon: Lightbulb,
      name: 'Blueprint Sprint',
      badge: 'Strategy & Blueprint',
      duration: '2 weeks',
      priceRange: `${pricing.symbol}${pricing.packages.blueprint.min} – ${pricing.symbol}${pricing.packages.blueprint.max}`,
      description: 'A focused 2-week Sprint that uncovers bottlenecks, aligns your team, and gives you clarity before you build.',
      deliverables: [
        'Process maturity assessment',
        'Stakeholder interviews & gaps map',
        'Clickable prototype / working POC',
        'Prioritised implementation roadmap + ROI estimate'
      ],
      payment: 'One-time investment • Fully credited toward build',
      cta: 'Start Your Blueprint Sprint',
      ctaLink: '/contact?intent=blueprint',
      highlight: false
    },
    {
      icon: Zap,
      name: 'Systems & Automation',
      badge: 'Build & Deploy',
      duration: '4–8 weeks',
      priceRange: `${pricing.symbol}${pricing.packages.systems.min} – ${pricing.symbol}${pricing.packages.systems.max}`,
      description: 'Custom systems with automation, dashboards, and integrations. MVP to production in 4–8 weeks.',
      deliverables: [
        'Custom web/mobile build of core workflows',
        'Integrations (CRM, payments, inventory as required)',
        'Dashboards & operational alerts',
        '4–8 week delivery (MVP → production)'
      ],
      payment: '50% upfront • 30% staging • 20% go-live',
      cta: 'Book a Build Consultation',
      ctaLink: '/contact?intent=build',
      highlight: true
    },
    {
      icon: Users,
      name: 'Fractional COO',
      badge: 'Evolve & Scale',
      duration: 'Quarterly minimum',
      priceRange: `${pricing.symbol}${pricing.packages.fractional.min} – ${pricing.symbol}${pricing.packages.fractional.max} / month`,
      description: 'Ongoing ops leadership, OKRs, team enablement, and strategic guidance without the full-time cost.',
      deliverables: [
        'Ongoing ops leadership, OKRs, team enablement',
        'Monthly KPI reporting & continuous improvement',
        'Quarterly strategy sessions and roadmap resets'
      ],
      payment: 'Monthly retainer • Quarterly commitment',
      cta: 'Talk to a Fractional COO',
      ctaLink: '/contact?intent=advisory',
      highlight: false
    }
  ]

  return (
    <section id="pricing" className={`relative py-20 md:py-24 overflow-hidden ${isDark ? 'bg-gradient-to-b from-black via-gray-950 to-black' : 'bg-gradient-to-b from-white via-gray-50 to-white'}`}>
      {/* Premium background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl ${isDark ? 'bg-[#ec5f2b]/10' : 'bg-[#ec5f2b]/5'}`}
          style={{ animation: 'pulse 8s ease-in-out infinite' }}
        />
        <div className={`absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full blur-3xl ${isDark ? 'bg-purple-500/10' : 'bg-purple-500/5'}`}
          style={{ animation: 'pulse 10s ease-in-out infinite' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header - Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block mb-6"
          >
            <span className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider border ${
              isDark ? 'bg-gray-900 text-gray-400 border-gray-800' : 'bg-gray-100 text-gray-600 border-gray-200'
            }`}>
              INVESTMENT & PRICING
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
          >
            Transparent, Value-Driven Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={`text-base max-w-3xl mx-auto mb-8 leading-relaxed ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}
          >
            Fixed-price packages designed for predictability. Clarity in 2 weeks. Systems in 8 weeks. Growth forever.
          </motion.p>

          {/* Region Selector */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <Globe className="w-4 h-4 text-[#ec5f2b]" />
              <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Pricing for:
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setRegion('india')}
                  className={`px-3 py-1 rounded-md text-sm font-semibold transition-all ${
                    region === 'india'
                      ? 'bg-[#ec5f2b] text-white'
                      : isDark
                      ? 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  India
                </button>
                <button
                  onClick={() => setRegion('global')}
                  className={`px-3 py-1 rounded-md text-sm font-semibold transition-all ${
                    region === 'global'
                      ? 'bg-[#ec5f2b] text-white'
                      : isDark
                      ? 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Global
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards - Premium Redesign */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 auto-rows-fr">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{
                  y: -12,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                }}
                className="relative"
              >
                {/* Most Popular badge - Fixed z-index */}
                {pkg.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#ec5f2b] blur-lg opacity-50" />
                      <span className="relative px-5 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-[#ec5f2b] to-[#ff6b35] text-white shadow-2xl whitespace-nowrap">
                        ⭐ Most Popular
                      </span>
                    </div>
                  </div>
                )}

                <div className={`relative rounded-2xl p-8 border-2 overflow-hidden group h-full flex flex-col ${
                  pkg.highlight
                    ? isDark
                      ? 'bg-gradient-to-br from-[#ec5f2b]/15 via-gray-900 to-gray-800 border-[#ec5f2b]/50'
                      : 'bg-gradient-to-br from-[#ec5f2b]/10 via-white to-gray-50 border-[#ec5f2b]/50'
                    : isDark
                    ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border-gray-700 hover:border-gray-600'
                    : 'bg-gradient-to-br from-white via-white to-gray-50 border-gray-300 hover:border-gray-400'
                } shadow-2xl hover:shadow-[0_25px_80px_-20px_rgba(0,0,0,0.4)] transition-all duration-500`}>

                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                    pkg.highlight
                      ? 'bg-gradient-to-br from-[#ec5f2b]/10 via-transparent to-transparent'
                      : isDark
                      ? 'bg-gradient-to-br from-[#ec5f2b]/5 via-transparent to-transparent'
                      : 'bg-gradient-to-br from-[#ec5f2b]/5 via-transparent to-transparent'
                  }`} />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Top accent line */}
                  {pkg.highlight && (
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ec5f2b] via-[#ff6b35] to-[#ff8c00]" />
                  )}

                  {/* Side accent line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 ${
                    pkg.highlight
                      ? 'bg-gradient-to-b from-[#ec5f2b] to-transparent'
                      : 'bg-gradient-to-b from-gray-400 to-transparent opacity-0 group-hover:opacity-100'
                  }`} />

                  {/* Badge & Icon */}
                  <div className="relative flex items-center justify-between mb-6">
                    <div className="relative">
                      <span className={`inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${
                        pkg.highlight
                          ? 'bg-gradient-to-r from-[#ec5f2b] to-[#ff6b35] text-white shadow-lg'
                          : isDark
                          ? 'bg-gray-800 text-gray-400'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {pkg.badge}
                      </span>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: pkg.highlight ? 360 : 0 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                        pkg.highlight
                          ? 'bg-gradient-to-br from-[#ec5f2b]/20 to-[#ec5f2b]/5 shadow-xl'
                          : isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg' : 'bg-gradient-to-br from-gray-100 to-gray-200 shadow-md'
                      }`}
                    >
                      <Icon className={`w-7 h-7 ${pkg.highlight ? 'text-[#ec5f2b]' : 'text-gray-600'}`} strokeWidth={2} />
                    </motion.div>
                  </div>

                  {/* Name & Duration */}
                  <h3 className={`relative text-2xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`relative text-xs font-semibold mb-6 uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    Delivery: {pkg.duration}
                  </p>

                  {/* Price Range - Professional */}
                  <div className="relative mb-6 pb-6 border-b border-gray-700/20">
                    <p className={`text-xl font-bold mb-2 ${
                      pkg.highlight ? 'text-[#ec5f2b]' : isDark ? 'text-gray-100' : 'text-brand-charcoal'
                    }`}>
                      {pkg.priceRange}
                    </p>
                    {pkg.payment && (
                      <p className={`text-xs font-semibold ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        {pkg.payment}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <p className={`relative text-sm mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {pkg.description}
                  </p>

                  {/* Deliverables */}
                  <div className="relative space-y-3 mb-6 flex-grow">
                    {pkg.deliverables.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + idx * 0.06 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="relative flex-shrink-0 w-5 h-5 mt-0.5">
                          <div className="absolute inset-0 bg-green-500/20 rounded-full blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                          <Check className="relative w-5 h-5 text-[#ec5f2b]" strokeWidth={2.5} />
                        </div>
                        <span className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hosting Note */}
                  {pkg.highlight && (
                    <div className={`relative mb-8 p-3 rounded-lg border ${
                      isDark ? 'bg-gray-800/30 border-gray-700' : 'bg-gray-50 border-gray-200'
                    }`}>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        + Hosting & Managed Services: {pricing.symbol}{pricing.hosting.min}–{pricing.symbol}{pricing.hosting.max}/{pricing.hosting.period} • AI usage billed separately
                      </p>
                    </div>
                  )}

                  {/* CTA Button - Premium */}
                  <Link
                    href={pkg.ctaLink}
                    className={`relative w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 overflow-hidden group/btn ${
                      pkg.highlight
                        ? 'bg-gradient-to-r from-[#ec5f2b] to-[#ff6b35] text-white hover:shadow-[0_10px_40px_-10px_rgba(236,95,43,0.6)] hover:scale-105'
                        : isDark
                        ? 'bg-gray-800 text-gray-100 border-2 border-gray-700 hover:bg-gray-700 hover:border-gray-600'
                        : 'bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                    }`}
                  >
                    {/* Button shimmer */}
                    {pkg.highlight && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-30 -translate-x-full group-hover/btn:translate-x-full transition-all duration-700" />
                    )}
                    <span className="relative">{pkg.cta}</span>
                    <ArrowRight className="relative w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.5} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Guarantees & Value Commitments - Enterprise Grade */}
        <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="md:col-span-3"
        >
          <div className={`rounded-2xl p-10 border-2 relative overflow-hidden ${
            isDark
              ? 'bg-gradient-to-br from-[#ec5f2b]/10 via-gray-900 to-gray-800 border-[#ec5f2b]/30'
              : 'bg-gradient-to-br from-[#ec5f2b]/5 via-white to-gray-50 border-[#ec5f2b]/40'
          } shadow-2xl`}>
            {/* Top accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ec5f2b] via-[#ff6b35] to-[#ff8c00]" />

            <div className="flex items-start gap-6 mb-8">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                isDark ? 'bg-gradient-to-br from-[#ec5f2b]/20 to-[#ec5f2b]/5' : 'bg-gradient-to-br from-[#ec5f2b]/10 to-[#ec5f2b]/5'
              }`}>
                <svg className="w-8 h-8 text-[#ec5f2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  Our Value Commitments & Guarantees
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  We back our work with clear guarantees and transparent processes
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group/card"
                >
                  <div className={`relative p-6 rounded-xl border-2 h-full overflow-hidden transition-all duration-300 ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-900/80 border-gray-700 hover:border-[#ec5f2b]/50'
                      : 'bg-gradient-to-br from-white via-white to-gray-50/50 border-gray-200 hover:border-[#ec5f2b]/30'
                  } shadow-lg hover:shadow-2xl`}>
                    {/* Side accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ec5f2b] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                    {/* Icon with gradient background */}
                    <div className="mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isDark
                          ? 'bg-gradient-to-br from-[#ec5f2b]/20 to-[#ec5f2b]/5 group-hover/card:from-[#ec5f2b]/30 group-hover/card:to-[#ec5f2b]/10'
                          : 'bg-gradient-to-br from-[#ec5f2b]/10 to-[#ec5f2b]/5 group-hover/card:from-[#ec5f2b]/20 group-hover/card:to-[#ec5f2b]/10'
                      } shadow-md group-hover/card:shadow-lg`}>
                        <svg className="w-6 h-6 text-[#ec5f2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>

                    <h4 className={`font-bold text-base mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                      100% Blueprint Credit
                    </h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Your full Blueprint Sprint investment is credited toward implementation if you proceed within 90 days. Zero risk, complete transparency.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group/card"
                >
                  <div className={`relative p-6 rounded-xl border-2 h-full overflow-hidden transition-all duration-300 ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-900/80 border-gray-700 hover:border-[#ec5f2b]/50'
                      : 'bg-gradient-to-br from-white via-white to-gray-50/50 border-gray-200 hover:border-[#ec5f2b]/30'
                  } shadow-lg hover:shadow-2xl`}>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ec5f2b] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                    <div className="mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isDark
                          ? 'bg-gradient-to-br from-[#ec5f2b]/20 to-[#ec5f2b]/5 group-hover/card:from-[#ec5f2b]/30 group-hover/card:to-[#ec5f2b]/10'
                          : 'bg-gradient-to-br from-[#ec5f2b]/10 to-[#ec5f2b]/5 group-hover/card:from-[#ec5f2b]/20 group-hover/card:to-[#ec5f2b]/10'
                      } shadow-md group-hover/card:shadow-lg`}>
                        <svg className="w-6 h-6 text-[#ec5f2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                    </div>

                    <h4 className={`font-bold text-base mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                      Working Prototype Delivered
                    </h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Every Blueprint Sprint includes a clickable prototype and detailed ROI estimate. Make informed decisions before committing to full development.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group/card"
                >
                  <div className={`relative p-6 rounded-xl border-2 h-full overflow-hidden transition-all duration-300 ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-900/80 border-gray-700 hover:border-[#ec5f2b]/50'
                      : 'bg-gradient-to-br from-white via-white to-gray-50/50 border-gray-200 hover:border-[#ec5f2b]/30'
                  } shadow-lg hover:shadow-2xl`}>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ec5f2b] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                    <div className="mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isDark
                          ? 'bg-gradient-to-br from-[#ec5f2b]/20 to-[#ec5f2b]/5 group-hover/card:from-[#ec5f2b]/30 group-hover/card:to-[#ec5f2b]/10'
                          : 'bg-gradient-to-br from-[#ec5f2b]/10 to-[#ec5f2b]/5 group-hover/card:from-[#ec5f2b]/20 group-hover/card:to-[#ec5f2b]/10'
                      } shadow-md group-hover/card:shadow-lg`}>
                        <svg className="w-6 h-6 text-[#ec5f2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>

                    <h4 className={`font-bold text-base mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                      Transparent Partnership
                    </h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Regular sprint reviews, shared documentation, and clear milestone tracking. Full visibility into progress at every stage.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group/card"
                >
                  <div className={`relative p-6 rounded-xl border-2 h-full overflow-hidden transition-all duration-300 ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-900/80 border-gray-700 hover:border-[#ec5f2b]/50'
                      : 'bg-gradient-to-br from-white via-white to-gray-50/50 border-gray-200 hover:border-[#ec5f2b]/30'
                  } shadow-lg hover:shadow-2xl`}>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ec5f2b] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                    <div className="mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isDark
                          ? 'bg-gradient-to-br from-[#ec5f2b]/20 to-[#ec5f2b]/5 group-hover/card:from-[#ec5f2b]/30 group-hover/card:to-[#ec5f2b]/10'
                          : 'bg-gradient-to-br from-[#ec5f2b]/10 to-[#ec5f2b]/5 group-hover/card:from-[#ec5f2b]/20 group-hover/card:to-[#ec5f2b]/10'
                      } shadow-md group-hover/card:shadow-lg`}>
                        <svg className="w-6 h-6 text-[#ec5f2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>

                    <h4 className={`font-bold text-base mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                      Fixed-Price Certainty
                    </h4>
                    <p className={`text-sm leading-relaxed mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      No hourly billing surprises. Clear milestone-based payments:
                    </p>
                    <ul className={`text-xs space-y-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      <li>• 50% upon project kickoff</li>
                      <li>• 30% upon staging deployment</li>
                      <li>• 20% upon final acceptance</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group/card"
                >
                  <div className={`relative p-6 rounded-xl border-2 h-full overflow-hidden transition-all duration-300 ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-900/80 border-gray-700 hover:border-[#ec5f2b]/50'
                      : 'bg-gradient-to-br from-white via-white to-gray-50/50 border-gray-200 hover:border-[#ec5f2b]/30'
                  } shadow-lg hover:shadow-2xl`}>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ec5f2b] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                    <div className="mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isDark
                          ? 'bg-gradient-to-br from-[#ec5f2b]/20 to-[#ec5f2b]/5 group-hover/card:from-[#ec5f2b]/30 group-hover/card:to-[#ec5f2b]/10'
                          : 'bg-gradient-to-br from-[#ec5f2b]/10 to-[#ec5f2b]/5 group-hover/card:from-[#ec5f2b]/20 group-hover/card:to-[#ec5f2b]/10'
                      } shadow-md group-hover/card:shadow-lg`}>
                        <svg className="w-6 h-6 text-[#ec5f2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>

                    <h4 className={`font-bold text-base mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                      Rapid Time-to-Value
                    </h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Working prototype in 2 weeks. Production system in 8 weeks. Not 6-12 months. Fast deployment, faster ROI.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group/card"
                >
                  <div className={`relative p-6 rounded-xl border-2 h-full overflow-hidden transition-all duration-300 ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-900/80 border-gray-700 hover:border-[#ec5f2b]/50'
                      : 'bg-gradient-to-br from-white via-white to-gray-50/50 border-gray-200 hover:border-[#ec5f2b]/30'
                  } shadow-lg hover:shadow-2xl`}>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ec5f2b] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                    <div className="mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isDark
                          ? 'bg-gradient-to-br from-[#ec5f2b]/20 to-[#ec5f2b]/5 group-hover/card:from-[#ec5f2b]/30 group-hover/card:to-[#ec5f2b]/10'
                          : 'bg-gradient-to-br from-[#ec5f2b]/10 to-[#ec5f2b]/5 group-hover/card:from-[#ec5f2b]/20 group-hover/card:to-[#ec5f2b]/10'
                      } shadow-md group-hover/card:shadow-lg`}>
                        <svg className="w-6 h-6 text-[#ec5f2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                    </div>

                    <h4 className={`font-bold text-base mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                      Direct Access to Leadership
                    </h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Work directly with seasoned operators. No junior handoffs. No layers. CXO-level expertise on every engagement.
                    </p>
                  </div>
                </motion.div>
            </div>
          </div>
        </motion.div>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.6;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
