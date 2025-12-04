'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Rocket, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const pricingPlans = [
  {
    phase: 'Strategy',
    title: 'Blueprint Sprint™',
    timeline: '2 weeks • Credited toward build',
    standardPrice: 'Starting $2,500',
    foundingPrice: '$1,500',
    pricePrefix: 'Flat',
    description: 'A focused diagnostic that uncovers bottlenecks, aligns your team, and delivers a clear implementation roadmap.',
    cta: 'Book a Free Consult',
    ctaLink: '/contact?intent=blueprint',
    featured: false
  },
  {
    phase: 'Build',
    title: 'Systems & Automation',
    timeline: '4 to 8 weeks • MVP to production',
    standardPrice: 'Starting $15,000',
    foundingPrice: '$9,000',
    pricePrefix: 'From',
    pricingContext: 'Hosting, AI usage, and support are billed separately based on your needs, giving you full control and zero lock-in.',
    description: 'Custom web applications with automation, dashboards, and integrations. Enterprise grade infrastructure, live in weeks.',
    cta: 'Start Your Build',
    ctaLink: '/contact?intent=build',
    featured: true
  },
  {
    phase: 'Scale',
    title: 'Fractional COO',
    timeline: 'Quarterly minimum • 10 hrs/month',
    standardPrice: 'Starting $3,000/month',
    foundingPrice: '$1,800',
    foundingPeriod: '/month',
    description: 'Strategic leadership to scale your operations without the full time cost. Hands on execution with C level guidance.',
    cta: 'Talk to Us',
    ctaLink: '/contact?intent=advisory',
    featured: false
  }
]

export default function InvestmentSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  return (
    <section id="investment" className={`relative py-16 md:py-20 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-[#ec5f2b]/5' : 'bg-[#ec5f2b]/3'}`} />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-purple-500/5' : 'bg-purple-500/3'}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
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
              INVESTMENT
            </span>
          </motion.div>
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Transparent pricing. Real transformation.
          </h2>
          <p className={`text-sm md:text-base max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Enterprise grade transformation without the enterprise price tag.
          </p>
        </motion.div>

        {/* Founding Client Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className={`relative rounded-2xl p-6 md:p-8 overflow-hidden ${
            isDark
              ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800'
              : 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800'
          }`}>
            {/* Gradient overlay */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ec5f2b]/15 to-transparent pointer-events-none" />

            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ec5f2b] text-white text-xs font-bold uppercase tracking-wide mb-4">
                <Rocket className="w-3.5 h-3.5" />
                <span>Limited Opportunity</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Founding Client Program
              </h3>
              <p className="text-gray-400 text-sm md:text-base max-w-xl mb-4 leading-relaxed">
                We are selectively onboarding our first 10 clients at 40% off standard rates. In exchange, we ask for a detailed case study and testimonial to showcase our work.
              </p>

              {/* Spots remaining */}
              <div className="inline-flex items-center gap-2 text-[#ec5f2b] font-semibold text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ec5f2b] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ec5f2b]"></span>
                </span>
                <span>Limited spots available</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2 + index * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative"
            >
              {/* Featured badge */}
              {plan.featured && (
                <motion.div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#ec5f2b] text-white text-xs font-bold uppercase tracking-wide shadow-lg shadow-[#ec5f2b]/25">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    Most Popular
                  </span>
                </motion.div>
              )}

              {/* Card with premium styling */}
              <div className={`relative h-full rounded-2xl border-2 transition-all duration-500 overflow-hidden flex flex-col ${
                plan.featured
                  ? 'border-[#ec5f2b] shadow-xl shadow-[#ec5f2b]/10'
                  : isDark
                    ? 'border-gray-800 hover:border-[#ec5f2b]/30'
                    : 'border-gray-200 hover:border-[#ec5f2b]/30'
              } ${isDark ? 'bg-gradient-to-b from-gray-900 to-gray-900/80' : 'bg-white'} shadow-xl hover:shadow-2xl group-hover:-translate-y-2`}>

                {/* Top gradient accent for featured */}
                {plan.featured && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec5f2b] via-[#ff7849] to-[#ec5f2b]" />
                )}

                {/* Hover glow effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                  isDark ? 'bg-gradient-to-b from-[#ec5f2b]/5 to-transparent' : 'bg-gradient-to-b from-[#ec5f2b]/3 to-transparent'
                }`} />

                <div className="relative p-6 md:p-8 flex flex-col h-full">
                  {/* Phase label */}
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#ec5f2b] mb-3">
                    {plan.phase}
                  </p>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-1.5 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {plan.title}
                  </h3>

                  {/* Timeline */}
                  <p className={`text-sm mb-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {plan.timeline}
                  </p>

                  {/* Pricing */}
                  <div className={`pb-6 mb-6 border-b ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
                    {/* Standard price (strikethrough) */}
                    <p className={`text-sm line-through mb-1.5 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                      {plan.standardPrice}
                    </p>

                    {/* Founding price */}
                    <div className="flex items-baseline gap-2 mb-3">
                      {plan.pricePrefix && (
                        <span className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                          {plan.pricePrefix}
                        </span>
                      )}
                      <span className={`text-4xl font-bold tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                        {plan.foundingPrice}
                      </span>
                      {plan.foundingPeriod && (
                        <span className={`text-base font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                          {plan.foundingPeriod}
                        </span>
                      )}
                    </div>

                    {/* Founding client label */}
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#ec5f2b]/10 text-[#ec5f2b]">
                      Founding Client Rate
                    </span>

                  </div>

                  {/* Description + Context wrapper for flex-grow */}
                  <div className="flex-grow flex flex-col">
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>

                    {/* Pricing context - premium inline badge after description */}
                    {plan.pricingContext && (
                      <div className={`mt-4 pt-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
                        <div className="flex items-start gap-2">
                          <span className={`flex-shrink-0 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                            isDark ? 'bg-[#ec5f2b]/15 text-[#ec5f2b]' : 'bg-[#ec5f2b]/10 text-[#ec5f2b]'
                          }`}>
                            You own everything
                          </span>
                        </div>
                        <p className={`text-[11px] leading-relaxed mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {plan.pricingContext}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* CTA - always at bottom */}
                  <Link
                    href={plan.ctaLink}
                    className={`mt-8 w-full px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center group/btn ${
                      plan.featured
                        ? 'bg-[#ec5f2b] text-white hover:bg-[#d54f20] hover:shadow-lg hover:shadow-[#ec5f2b]/25'
                        : isDark
                          ? 'bg-gray-800 text-gray-100 hover:bg-gray-700 border border-gray-700 hover:border-gray-600'
                          : 'bg-gray-50 text-gray-800 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`text-center text-sm mt-10 max-w-2xl mx-auto ${isDark ? 'text-gray-500' : 'text-gray-500'}`}
        >
          Investment varies by scope and complexity. All engagements begin with a free strategy session to align on goals and ensure we are the right fit.
        </motion.p>
      </div>
    </section>
  )
}
