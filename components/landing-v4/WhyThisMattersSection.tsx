'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { AlertCircle, TrendingUp, X, Check, AlertTriangle, Clock, Users, Zap, Eye, BarChart3, Rocket } from 'lucide-react'

const problems = [
  'Spreadsheet driven operations blocking scale',
  'Revenue leakage hidden in everyday workflows',
  'Teams overwhelmed by manual tasks',
  'No real visibility into customer or operational health',
  'Scaling feels chaotic and unsustainable',
  'Critical decisions delayed by lack of data'
]

const impacts = [
  { metric: '30%', description: 'more time for revenue generating activities', icon: Clock },
  { metric: '15–20%', description: 'reduction in churn through consistent delivery', icon: Users },
  { metric: '2×', description: 'faster customer onboarding and handoffs', icon: Zap },
  { metric: 'Real time', description: 'operational visibility across teams', icon: Eye },
  { metric: '40%', description: 'reduction in operational errors and rework', icon: BarChart3 },
  { metric: 'Scalable', description: 'systems that grow without increasing headcount', icon: Rocket }
]

export default function WhyThisMattersSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  return (
    <section id="why-this-matters" className={`py-12 md:py-16 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
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
              THE REALITY
            </span>
          </motion.div>
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Why This Matters
          </h2>
          <p className={`text-sm max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            The cost of chaos is higher than you think
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <motion.div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${isDark ? 'bg-gray-800' : 'bg-gray-100'} relative`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-red-500/10 rounded-xl blur-md transition-all duration-300" />
                <AlertCircle className="w-7 h-7 text-red-500 relative" strokeWidth={2} />
              </motion.div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                The Problem
              </h3>
            </div>

            {/* Problem Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group flex-1"
            >
              <div className={`rounded-xl p-6 border h-full transition-all duration-300 flex flex-col ${
                isDark
                  ? 'bg-gray-900 border-gray-800 hover:border-red-500/30'
                  : 'bg-white border-gray-200 hover:border-red-500/20'
              } shadow-lg hover:shadow-xl`}>

                {/* Problem list */}
                <ul className="space-y-4 flex-1">
                  {problems.map((problem, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="flex items-start group/item"
                    >
                      <div className="flex-shrink-0 w-5 h-5 mr-3 mt-1">
                        <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center group-hover/item:bg-red-500/20 transition-colors duration-300">
                          <X className="w-3 h-3 text-red-500" strokeWidth={2.5} />
                        </div>
                      </div>
                      <span className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {problem}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom accent */}
                <div className={`pt-5 mt-6 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                  <p className={`text-base font-semibold italic flex items-center gap-2 ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                    <span className="text-red-500">→</span> Without the right strategy and systems, scaling becomes chaos
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* The Impact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <motion.div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${isDark ? 'bg-gray-800' : 'bg-gray-100'} relative`}
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-[#ec5f2b]/10 rounded-xl blur-md transition-all duration-300" />
                <TrendingUp className="w-7 h-7 text-[#ec5f2b] relative" strokeWidth={2} />
              </motion.div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                The Impact
              </h3>
            </div>

            {/* Impact Cards Grid */}
            <div className="grid grid-cols-2 gap-3 flex-1">
              {impacts.map((impact, index) => {
                const Icon = impact.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="group/card"
                  >
                    <div className={`rounded-lg p-4 border h-full transition-all duration-300 ${
                      isDark
                        ? 'bg-gray-900 border-gray-800 hover:border-[#ec5f2b]/30'
                        : 'bg-white border-gray-200 hover:border-[#ec5f2b]/20'
                    } shadow-md hover:shadow-lg`}>

                      {/* Icon - Top Right */}
                      <div className="flex justify-end mb-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isDark ? 'bg-gray-800' : 'bg-gray-100'} group-hover/card:bg-[#ec5f2b]/10 transition-colors duration-300`}>
                          <Icon className="w-5 h-5 text-[#ec5f2b]" strokeWidth={2} />
                        </div>
                      </div>

                      {/* Metric */}
                      <div className="font-bold text-3xl text-[#ec5f2b] mb-2 leading-none">{impact.metric}</div>

                      {/* Description */}
                      <p className={`text-xs leading-snug ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {impact.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* The Cost - Takeaway Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6"
        >
          <div className={`relative rounded-xl p-6 border overflow-hidden ${
            isDark
              ? 'bg-gradient-to-br from-red-950/30 via-gray-900 to-gray-900 border-red-900/40'
              : 'bg-gradient-to-br from-red-50 via-white to-white border-red-200'
          } shadow-lg`}>

            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-[#ec5f2b] to-transparent" />

            <div className="flex items-start gap-5">
              {/* Icon */}
              <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500/20 rounded-2xl blur-lg" />
                  <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <AlertTriangle className="w-7 h-7 text-red-500" strokeWidth={2} />
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 pt-0.5">
                <h4 className={`text-xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                  The Cost of Waiting
                </h4>
                <p className={`text-sm leading-snug mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
                  Revenue leaked. Competitors move faster. Growth stalls.
                </p>
                <p className="text-sm text-[#ec5f2b] font-semibold flex items-center gap-2">
                  <span className="text-red-500">→</span> Every day you wait is another day of lost opportunity.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
