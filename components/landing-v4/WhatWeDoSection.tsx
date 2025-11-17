'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Lightbulb, Zap, Users, ArrowRight, Check, Target, Sparkles, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Lightbulb,
    title: 'Strategy & Blueprint',
    badge: 'Discover',
    description: 'A focused 2-week Blueprint Sprint that uncovers bottlenecks, aligns your team, and gives you clarity before you build anything.',
    sectionTitle: "What's Included",
    features: [
      'Process maturity assessment',
      'Business workflow and systems design',
      'AI opportunity mapping',
      'Clickable prototype / working POC',
      'Clear implementation roadmap'
    ],
    outcome: 'A validated, executive-ready transformation blueprint that de-risks implementation and accelerates time-to-value.',
    cta: 'Book a Strategy Session',
    ctaSubtext: 'Free 30-minute diagnostic call',
    ctaLink: null
  },
  {
    icon: Zap,
    title: 'Systems & Automation',
    badge: 'Deploy',
    description: 'Modern, AI powered systems that eliminate operational friction and automate critical workflows across your business.',
    sectionTitle: 'What We Build',
    features: [
      'Customer Ops (Success, Experience)',
      'Revenue operations',
      'Finance & Billing operations',
      'Your unique process automation',
      'AI framework integration'
    ],
    outcome: 'Enterprise-grade operational infrastructure that scales with your business and delivers measurable efficiency gains from day one.',
    cta: 'See What\'s Possible',
    ctaSubtext: 'A preview of what your Blueprint could become',
    ctaLink: '/showcase'
  },
  {
    icon: Users,
    title: 'Fractional COO & Growth Advisor',
    badge: 'Evolve',
    description: 'Strategic leadership to scale your business without the full time cost. Ideal for founders who want hands-on execution with guidance.',
    sectionTitle: 'How We Support You',
    features: [
      'Operational optimization',
      'Team enablement and coaching',
      'Quarterly planning and OKRs',
      'Metrics, dashboards and accountability',
      'Scale and growth support'
    ],
    outcome: 'Strategic C-level partnership that transforms operational chaos into scalable systems, driving sustainable growth without the full-time cost.',
    cta: 'Talk to your Fractional COO',
    ctaSubtext: 'Explore your growth priorities',
    ctaLink: '/contact?intent=advisory'
  }
]

export default function WhatWeDoSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  return (
    <section id="what-we-do" className={`relative py-16 md:py-20 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-[#ec5f2b]/5' : 'bg-[#ec5f2b]/3'}`} />
        <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-purple-500/5' : 'bg-purple-500/3'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              OUR SERVICES
            </span>
          </motion.div>
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            What We Do
          </h2>
          <p className={`text-sm max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Strategy. Build. Scale. In that order.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative flex"
              >
                {/* Card - PREMIUM */}
                <div className={`relative w-full rounded-xl p-8 border transition-all duration-500 flex flex-col ${
                  isDark
                    ? 'bg-gray-900 border-gray-800 hover:border-gray-700'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                } shadow-lg hover:shadow-xl`}>

                  {/* Badge & Icon - Horizontal Layout */}
                  <div className="flex items-center justify-between mb-5">
                    {/* Badge */}
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#ec5f2b] text-white`}>
                      {service.badge}
                    </span>

                    {/* Icon */}
                    <div className="relative w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                      {/* Circle background */}
                      <div className={`absolute inset-0 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`} />
                      {/* Icon */}
                      <Icon className={`relative w-6 h-6 ${isDark ? 'text-[#ec5f2b]' : 'text-[#ec5f2b]'}`} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title & Description - PREMIUM */}
                  <h3 className={`text-xl font-bold mb-3 tracking-tight leading-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm mb-5 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {service.description}
                  </p>

                  {/* Section title for features */}
                  <p className={`text-xs font-bold tracking-wider mb-3 uppercase ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {service.sectionTitle}
                  </p>

                  {/* Features List - PREMIUM with gradient checks */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.15 + featureIndex * 0.05
                        }}
                        className="group/item flex items-start cursor-default"
                      >
                        {/* Gradient check icon */}
                        <div className="relative flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full bg-gradient-to-br from-[#ec5f2b] to-[#f97316] p-0.5">
                          <div className={`w-full h-full rounded-full flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                            <Check className="w-3 h-3 text-[#ec5f2b]" strokeWidth={3} />
                          </div>
                        </div>

                        <span className={`text-sm leading-relaxed ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Outcome */}
                  <div className={`mt-auto pt-6 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                    <div className={`relative p-4 rounded-lg ${
                      isDark
                        ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/30 border border-gray-800/50'
                        : 'bg-gradient-to-br from-gray-50 to-white border border-gray-200/50'
                    } shadow-sm`}>
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#ec5f2b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative">
                        <div className="flex items-center gap-2.5 mb-3">
                          <div className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-[#ec5f2b] to-[#f97316] flex items-center justify-center flex-shrink-0 shadow-md">
                            <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
                          </div>
                          <p className={`text-xs font-bold tracking-wider uppercase ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Your Outcome
                          </p>
                        </div>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                          {service.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Product Features Note */}
                    {service.showProductFeatures && (
                      <div className={`mt-3 pt-3 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                        <p className={`text-xs flex items-center gap-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          <ExternalLink className="w-3.5 h-3.5 text-[#ec5f2b]" strokeWidth={2} />
                          <span>Explore product features on the detailed page</span>
                        </p>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 flex-shrink-0">
                    {service.ctaLink ? (
                      <Link
                        href={service.ctaLink}
                        className="w-full px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 bg-[#ec5f2b] text-white hover:bg-[#d54f20] hover:shadow-lg hover:scale-105 group flex items-center justify-center"
                      >
                        <span>{service.cta}</span>
                        <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          const contactSection = document.getElementById('contact')
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          }
                        }}
                        className="w-full px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 bg-[#ec5f2b] text-white hover:bg-[#d54f20] hover:shadow-lg hover:scale-105 group"
                      >
                        <span>{service.cta}</span>
                        <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                    <p className={`text-xs text-center mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      {service.ctaSubtext}
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
