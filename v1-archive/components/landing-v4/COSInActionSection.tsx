'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Layers, CheckCircle2, ArrowRight, Sparkles, Target, Zap, Users, DollarSign, BarChart3, Star, Wrench } from 'lucide-react'
import Link from 'next/link'

const domainModules = [
  {
    icon: Users,
    name: 'CS Engine',
    tagline: 'Customer Success Ops',
    flagshipBadge: 'Flagship Module',
    description: 'Customer Success platform built by operators, for operators',
    features: [
      'Health scoring & risk detection',
      'Automated onboarding workflows',
      'Success playbooks & orchestration',
      'Retention analytics & churn prevention'
    ],
    isFlagship: true,
    link: '/showcase'
  },
  {
    icon: DollarSign,
    name: 'Revenue Ops',
    tagline: 'Pipeline to Payment',
    description: 'Sales pipeline, forecasting, and revenue tracking',
    features: [
      'Deal pipeline & forecasting',
      'Quote-to-cash automation',
      'Commission tracking',
      'Revenue analytics'
    ],
    isFlagship: false,
    comingSoon: true,
    link: '#'
  },
  {
    icon: BarChart3,
    name: 'Finance Ops',
    tagline: 'Financial Command Center',
    description: 'Financial planning, budgeting, and real-time reporting',
    features: [
      'Budget planning & tracking',
      'Expense management',
      'Financial reporting & dashboards',
      'Vendor & contract management'
    ],
    isFlagship: false,
    comingSoon: true,
    link: '#'
  },
  {
    icon: Wrench,
    name: 'Custom Solutions',
    tagline: 'Your Unique Process',
    description: 'Industry-specific transformations tailored to your business',
    features: [
      'Custom workflow automation',
      'Industry-specific integrations',
      'Tailored dashboard & reporting',
      'Scalable process architecture'
    ],
    isFlagship: false,
    link: '#'
  }
]

export default function COSInActionSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  return (
    <section id="c-os-in-action" className={`relative py-16 md:py-20 overflow-hidden ${isDark ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      {/* Subtle background decoration - Enterprise feel */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl ${isDark ? 'bg-[#ec5f2b]/10' : 'bg-[#ec5f2b]/5'}`}
          style={{ animation: 'pulse 8s ease-in-out infinite' }}
        />
        <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl ${isDark ? 'bg-purple-500/10' : 'bg-purple-500/5'}`}
          style={{ animation: 'pulse 10s ease-in-out infinite' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            className="inline-block mb-4"
          >
            <span className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${
              isDark ? 'bg-gray-900 text-gray-400 border border-gray-800' : 'bg-gray-100 text-gray-600 border border-gray-200'
            }`}>
              OUR METHODOLOGY
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
          >
            C-OS in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={`text-base max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}
          >
            The <span className="font-semibold text-[#ec5f2b]">CoreShift Operating System (C-OS)</span> is our proprietary business systems architecture framework. We don't start from scratch—we bring battle-tested domain modules that customize to your business.
          </motion.p>
        </motion.div>

        {/* C-OS Framework Overview - Premium Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <motion.div
            whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
            className={`rounded-2xl p-10 md:p-12 border relative overflow-hidden group ${
              isDark
                ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border-gray-800'
                : 'bg-gradient-to-br from-white via-white to-gray-50 border-gray-200'
            } shadow-2xl`}
          >
            {/* Animated gradient overlay on hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
              isDark
                ? 'bg-gradient-to-br from-[#ec5f2b]/5 to-transparent'
                : 'bg-gradient-to-br from-[#ec5f2b]/3 to-transparent'
            }`} />

            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ec5f2b] via-[#ff6b35] to-purple-500" />

            {/* Icon & Title */}
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div className="flex items-center gap-5 mb-6 md:mb-0">
                <motion.div
                  whileHover={{ rotate: 360, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-[#ec5f2b]/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className={`relative w-20 h-20 rounded-2xl flex items-center justify-center ${isDark ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}>
                    <Layers className="w-10 h-10 text-[#ec5f2b]" strokeWidth={2} />
                  </div>
                </motion.div>
                <div>
                  <h3 className={`text-3xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    C-OS Framework
                  </h3>
                  <p className={`text-base mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    CoreShift Operating System
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`relative text-lg leading-relaxed mb-10 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Our framework contains battle-tested domain modules for the most critical business operations. Each module is <span className="font-semibold text-[#ec5f2b]">80% proven platform</span> with <span className="font-semibold text-[#ec5f2b]">20% customization</span> to fit your exact workflows.
            </motion.p>

            {/* Key Points - Premium Design */}
            <div className="relative grid md:grid-cols-3 gap-6">
              {[
                { icon: Target, title: '80% proven platform', desc: 'Battle-tested architecture', delay: 0.1 },
                { icon: Zap, title: '20% customized', desc: 'Adapted to your workflows', delay: 0.2 },
                { icon: Sparkles, title: 'Zero compromise', desc: 'Bends to your business', delay: 0.3 }
              ].map((item, idx) => {
                const ItemIcon = item.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: item.delay, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    className={`flex items-start gap-4 p-5 rounded-xl ${
                      isDark ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50' : 'bg-gray-50 hover:bg-white border border-gray-200/50'
                    } transition-all duration-300`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isDark ? 'bg-gray-900' : 'bg-white'
                    } shadow-md`}>
                      <ItemIcon className="w-6 h-6 text-[#ec5f2b]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className={`text-base font-bold mb-1 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                        {item.title}
                      </p>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Domain Modules Grid - Premium 4-Column Layout */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
          {domainModules.map((module, index) => {
            const Icon = module.icon

            return (
              <motion.div
                key={index}
                className="relative flex"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 80,
                      damping: 18,
                      duration: 0.9
                    }
                  }
                }}
                whileHover={{
                  y: -12,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                <div className={`w-full rounded-2xl p-7 border-2 relative overflow-hidden group flex flex-col ${
                  module.isFlagship
                    ? isDark
                      ? 'bg-gradient-to-br from-[#ec5f2b]/15 via-gray-900 to-gray-800 border-[#ec5f2b]/50'
                      : 'bg-gradient-to-br from-[#ec5f2b]/10 via-white to-gray-50 border-[#ec5f2b]/40'
                    : isDark
                    ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 border-gray-700 hover:border-gray-600'
                    : 'bg-gradient-to-br from-white via-white to-gray-50 border-gray-300 hover:border-gray-400'
                } shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500`}>

                  {/* Multi-layer animated glow on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                    module.isFlagship
                      ? 'bg-gradient-to-br from-[#ec5f2b]/10 via-transparent to-transparent'
                      : isDark
                      ? 'bg-gradient-to-br from-[#ec5f2b]/5 via-transparent to-transparent'
                      : 'bg-gradient-to-br from-[#ec5f2b]/5 via-transparent to-transparent'
                  }`} />

                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Top accent line */}
                  {module.isFlagship && (
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ec5f2b] via-[#ff6b35] to-[#ff8c00]" />
                  )}

                  {/* Side accent line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 ${
                    module.isFlagship
                      ? 'bg-gradient-to-b from-[#ec5f2b] to-transparent'
                      : 'bg-gradient-to-b from-gray-400 to-transparent opacity-0 group-hover:opacity-100'
                  }`} />

                  {/* Badge with premium styling - Corner ribbon */}
                  {module.isFlagship && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#ec5f2b] blur-md opacity-50" />
                        <span className="relative px-3 py-1.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-[#ec5f2b] to-[#ff6b35] text-white flex items-center gap-1 shadow-lg">
                          <Star className="w-3 h-3" fill="currentColor" />
                          {module.flagshipBadge || module.tagline}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Icon & Title - Premium Design */}
                  <div className="relative mb-5">
                    <motion.div
                      className="relative mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* Icon glow effect */}
                      <div className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 ${
                        module.isFlagship
                          ? 'bg-[#ec5f2b]/20 group-hover:bg-[#ec5f2b]/30'
                          : isDark
                          ? 'bg-gray-600/10 group-hover:bg-gray-600/20'
                          : 'bg-gray-400/10 group-hover:bg-gray-400/20'
                      }`} />

                      <motion.div
                        whileHover={{
                          rotate: module.isFlagship ? [0, -10, 10, -10, 10, 0] : 0,
                          transition: { duration: 0.5 }
                        }}
                        className={`relative w-16 h-16 rounded-2xl flex items-center justify-center ${
                          module.isFlagship
                            ? 'bg-gradient-to-br from-[#ec5f2b]/20 to-[#ec5f2b]/5 shadow-xl'
                            : isDark
                            ? 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg'
                            : 'bg-gradient-to-br from-gray-100 to-gray-200 shadow-md'
                        } transition-all duration-500 group-hover:shadow-2xl`}
                      >
                        <Icon
                          className={`w-8 h-8 transition-all duration-500 ${
                            module.isFlagship
                              ? 'text-[#ec5f2b] group-hover:text-[#ff6b35]'
                              : isDark
                              ? 'text-gray-400 group-hover:text-gray-300'
                              : 'text-gray-600 group-hover:text-gray-700'
                          }`}
                          strokeWidth={2}
                        />
                      </motion.div>
                    </motion.div>

                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      isDark ? 'text-gray-100 group-hover:text-white' : 'text-brand-charcoal group-hover:text-black'
                    }`}>
                      {module.name}
                    </h3>

                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-3 ${
                      module.isFlagship
                        ? isDark
                          ? 'bg-[#ec5f2b]/10 border border-[#ec5f2b]/30'
                          : 'bg-[#ec5f2b]/5 border border-[#ec5f2b]/20'
                        : isDark
                        ? 'bg-gray-800/50 border border-gray-700/50'
                        : 'bg-gray-100/50 border border-gray-300/50'
                    }`}>
                      <Sparkles className={`w-3 h-3 ${
                        module.isFlagship ? 'text-[#ec5f2b]' : isDark ? 'text-gray-400' : 'text-gray-600'
                      }`} strokeWidth={2.5} />
                      <p className={`text-xs font-semibold tracking-wide ${
                        module.isFlagship ? 'text-[#ec5f2b]' : isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {module.tagline}
                      </p>
                    </div>

                    <p className={`text-sm leading-relaxed ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {module.description}
                    </p>
                  </div>

                  {/* Features - Enhanced Design */}
                  <div className="relative space-y-3 flex-grow mb-6">
                    {module.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-2.5 group/feature"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.06 }}
                      >
                        <div className="relative flex-shrink-0 w-5 h-5 mt-0.5">
                          <div className="absolute inset-0 bg-green-500/20 rounded-full blur-sm opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300" />
                          <CheckCircle2 className="relative w-5 h-5 text-green-500" strokeWidth={2} />
                        </div>
                        <span className={`text-sm leading-relaxed transition-colors duration-300 ${
                          isDark ? 'text-gray-300 group-hover/feature:text-gray-200' : 'text-gray-700 group-hover/feature:text-gray-900'
                        }`}>
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA - Premium Button */}
                  {module.link && (
                    <div className={`relative pt-5 mt-auto border-t-2 ${
                      isDark ? 'border-gray-800' : 'border-gray-200'
                    }`}>
                      {module.comingSoon ? (
                        <div
                          title="Coming Soon"
                          className={`relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 cursor-not-allowed ${
                            isDark
                              ? 'bg-gray-800/50 border-gray-700 text-gray-500'
                              : 'bg-gray-100 border-gray-300 text-gray-500'
                          }`}
                        >
                          <span>View Case Studies</span>
                          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                        </div>
                      ) : (
                        <Link
                          href={module.link}
                          className="group/btn relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ec5f2b] to-[#ff6b35] text-white rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(236,95,43,0.5)] hover:scale-105 overflow-hidden"
                        >
                          {/* Button shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-30 -translate-x-full group-hover/btn:translate-x-full transition-all duration-700" />

                          <span className="relative">{module.isFlagship ? 'View Solution' : 'View Case Studies'}</span>
                          <ArrowRight className="relative w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-16"
        >
          <p className={`text-lg font-semibold italic ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            "We customize the solution to your business, not the other way around."
          </p>
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
    </section>
  )
}
