// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Zap, Compass, Users, Check, Play, Pause } from 'lucide-react'
import Image from 'next/image'

export function AIIntelligenceSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  const features = [
    {
      icon: Zap,
      title: 'ShiftIQ - Automation Engine',
      tagline: 'Handles repetitive work automatically',
      capabilities: [
        'Smart routing & assignments based on rules',
        'Automated alerts, reminders, and notifications',
        'Data validation and cleanup',
        'Approval workflow orchestration',
        'Follow-up sequences and triggers',
        'Task generation and scheduling'
      ],
      example: {
        title: '"New lead from website form"',
        steps: [
          'Validates contact info',
          'Assigns to right sales rep (region + availability)',
          'Creates follow-up task (due in 2 hours)',
          'Sends welcome email',
          'Notifies rep via mobile app'
        ],
        result: 'All in < 1 second. Zero manual work.'
      }
    },
    {
      icon: Compass,
      title: 'CompassAI - Intelligence Co-Pilot',
      tagline: 'Provides instant insights and predictions',
      capabilities: [
        'Predictive scoring (conversion probability, churn risk)',
        'Anomaly detection (unusual patterns, outliers)',
        'Next-step recommendations (what to do next)',
        'Pattern recognition (identify trends)',
        'Smart categorization (auto-tag, classify)',
        'Forecasting (revenue, demand, resource needs)'
      ],
      example: {
        title: 'CompassAI analyzes customer data:',
        steps: [
          'Login frequency dropping 60%',
          'Support tickets increased',
          'Invoice overdue 15 days',
          'No engagement with new features'
        ],
        result: 'Result: "High churn risk detected" → Trigger proactive check-in playbook'
      }
    },
    {
      icon: Users,
      title: 'Your AI Transformation Partner',
      tagline: 'We help you leverage AI thoughtfully',
      capabilities: [
        'Identify automation opportunities during Blueprint Sprint',
        'Design intelligent workflows (not just AI for hype)',
        'Implement AI where it adds real value',
        'Train your team on AI-enhanced processes',
        'Measure and optimize AI ROI over time'
      ],
      benefits: [
        {
          icon: '🎓',
          text: 'AI workflow training (how to interpret insights)'
        },
        {
          icon: '📊',
          text: 'AI impact dashboard (see time/cost saved)'
        },
        {
          icon: '🔧',
          text: 'Control over automation rules (customize behavior)'
        },
        {
          icon: '💬',
          text: 'Ongoing AI optimization support'
        }
      ],
      promise: 'No AI expertise required. We handle the complexity. Your team just sees faster, smarter processes.'
    }
  ]

  return (
    <section className={`py-16 px-6 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Built-In Intelligence That Works in the Background
          </h2>
          <p className={`text-sm max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Add intelligence to any process with ShiftIQ automation and CompassAI insights.
          </p>
        </motion.div>

        {/* 3-Column Grid: ShiftIQ | Video Demo | CompassAI */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* ShiftIQ Card */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`rounded-2xl border p-6 relative overflow-hidden group ${
              isDark
                ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 border-gray-800'
                : 'bg-gradient-to-br from-white via-gray-50 to-gray-100 border-gray-200'
            } shadow-xl hover:shadow-2xl transition-all`}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ec5f2b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Accent gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/5 transition-all duration-700" />

            {/* Animated glow */}
            <motion.div
              className="absolute -inset-[1px] bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative z-10">
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-12 h-12 bg-gradient-to-br from-[#ec5f2b] to-[#d94f1f] rounded-xl shadow-lg flex items-center justify-center group/icon"
                >
                  {/* Icon glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl blur-md opacity-0 group-hover/icon:opacity-50 transition-opacity duration-300" />
                  <Zap className="w-6 h-6 text-white relative z-10" strokeWidth={2.5} />
                </motion.div>
                <div className="flex-1">
                  <h3 className={`text-lg font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    ShiftIQ
                  </h3>
                  <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    Automation Engine
                  </p>
                </div>
              </div>

              <p className={`text-sm mb-5 font-medium ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                Handles repetitive work automatically
              </p>

              {/* Divider */}
              <div className={`h-px mb-5 bg-gradient-to-r from-transparent via-gray-700 to-transparent ${isDark ? 'opacity-50' : 'opacity-20'}`} />

              {/* Capabilities */}
              <div className="space-y-3">
                {features[0].capabilities.slice(0, 4).map((capability, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.08, type: "spring", stiffness: 200 }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="flex items-start gap-2.5 group/item"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ delay: 0.1 + idx * 0.08 + 0.3, duration: 0.4 }}
                    >
                      <Check className="w-4 h-4 text-[#ec5f2b] flex-shrink-0 mt-0.5 group-hover/item:text-[#ff6b35] transition-colors" strokeWidth={2.5} />
                    </motion.div>
                    <p className={`text-sm ${isDark ? 'text-gray-300 group-hover/item:text-gray-200' : 'text-gray-700 group-hover/item:text-gray-900'} transition-colors`}>
                      {capability}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center Video Demo Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, type: "spring", stiffness: 100 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`rounded-2xl border overflow-hidden relative group ${
              isDark
                ? 'bg-gradient-to-br from-gray-900 to-gray-950 border-gray-800'
                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
            } shadow-xl hover:shadow-2xl transition-all`}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            {/* Video Container */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800">
              {/* Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="text-center">
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`text-sm font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                  >
                    ShiftIQ + CompassAI Demo
                  </motion.div>
                  <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                    /public/screenshots/ai-intelligence.png
                  </p>
                </div>
              </div>

              {/* Play/Pause Control */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 flex items-center justify-center group/play"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                  isPlaying
                    ? 'bg-black/40 opacity-0 group-hover/play:opacity-100'
                    : 'bg-black/70 group-hover/play:bg-black/90'
                } backdrop-blur-sm ring-2 ring-white/20 group-hover/play:ring-white/40`}>
                  {isPlaying ? (
                    <Pause className="w-7 h-7 text-white" fill="white" />
                  ) : (
                    <Play className="w-7 h-7 text-white ml-1" fill="white" />
                  )}
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* CompassAI Card */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`rounded-2xl border p-6 relative overflow-hidden group ${
              isDark
                ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 border-gray-800'
                : 'bg-gradient-to-br from-white via-gray-50 to-gray-100 border-gray-200'
            } shadow-xl hover:shadow-2xl transition-all`}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ec5f2b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Accent gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/5 transition-all duration-700" />

            {/* Animated glow */}
            <motion.div
              className="absolute -inset-[1px] bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />

            <div className="relative z-10">
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  whileHover={{ rotate: [0, 10, -10, 10, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-12 h-12 bg-gradient-to-br from-[#ec5f2b] to-[#d94f1f] rounded-xl shadow-lg flex items-center justify-center group/icon"
                >
                  {/* Icon glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl blur-md opacity-0 group-hover/icon:opacity-50 transition-opacity duration-300" />
                  <Compass className="w-6 h-6 text-white relative z-10" strokeWidth={2.5} />
                </motion.div>
                <div className="flex-1">
                  <h3 className={`text-lg font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    CompassAI
                  </h3>
                  <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    Intelligence Co-Pilot
                  </p>
                </div>
              </div>

              <p className={`text-sm mb-5 font-medium ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                Provides instant insights and predictions
              </p>

              {/* Divider */}
              <div className={`h-px mb-5 bg-gradient-to-r from-transparent via-gray-700 to-transparent ${isDark ? 'opacity-50' : 'opacity-20'}`} />

              {/* Capabilities */}
              <div className="space-y-3">
                {features[1].capabilities.slice(0, 4).map((capability, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.08, type: "spring", stiffness: 200 }}
                    whileHover={{ x: -4, transition: { duration: 0.2 } }}
                    className="flex items-start gap-2.5 group/item"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ delay: 0.4 + idx * 0.08 + 0.3, duration: 0.4 }}
                    >
                      <Check className="w-4 h-4 text-[#ec5f2b] flex-shrink-0 mt-0.5 group-hover/item:text-[#ff6b35] transition-colors" strokeWidth={2.5} />
                    </motion.div>
                    <p className={`text-sm ${isDark ? 'text-gray-300 group-hover/item:text-gray-200' : 'text-gray-700 group-hover/item:text-gray-900'} transition-colors`}>
                      {capability}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Privacy + Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={`rounded-2xl p-6 border text-center relative overflow-hidden ${
            isDark ? 'bg-gray-900/80 border-gray-800' : 'bg-gray-50 border-gray-200'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5" />

          <div className="relative z-10">
            <p className={`text-base font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
              No AI expertise required. We handle the complexity.
              <br />
              <span className="text-[#ec5f2b]">Your team just sees faster, smarter processes.</span>
            </p>

            {/* Privacy Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-medium ${
                isDark
                  ? 'bg-gray-900 border-gray-700 text-gray-400'
                  : 'bg-white border-gray-300 text-gray-700'
              } shadow-lg`}
            >
              <svg className="w-4 h-4 text-[#ec5f2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              AI deployed thoughtfully • Your data never leaves your system • Privacy-first design
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
