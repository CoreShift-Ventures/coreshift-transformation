'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const agents = [
  {
    status: 'LIVE',
    statusColor: 'green',
    industry: 'Automotive Manufacturing',
    name: 'GRN Reconciliation Agent',
    tagline: 'Logs into 19+ OEM vendor portals daily, extracts invoice GRN data, and updates SAP billing documents without anyone touching a keyboard.',
    metrics: [
      { value: '19+', label: 'Vendor portals' },
      { value: '2-4 hrs', label: 'Daily time saved' },
      { value: '154', label: 'Extraction runs' },
      { value: '~100%', label: 'Automation rate' },
    ],
    systems: ['SAP ECC/S4HANA', 'Playwright', 'Supabase', 'FastAPI'],
    quote: 'Revenue recognition delays ended. GRN updates now happen before the finance team arrives in the morning.',
    client: 'Tier-1 Indian auto-parts manufacturer'
  },
  {
    status: 'POC COMPLETE',
    statusColor: 'amber',
    industry: 'Global Media / B2B',
    name: 'AP/AR Automation Agent',
    tagline: 'Reads invoice emails, extracts 12 fields from PDFs, matches to POs, and posts to NetSuite. On the AR side, matches bank transactions to open invoices with a 94% auto-match rate.',
    metrics: [
      { value: '94%', label: 'Auto-match rate' },
      { value: '8 min', label: 'Saved per txn' },
      { value: '12', label: 'Fields extracted' },
      { value: '40-80 hrs', label: 'Monthly saved' },
    ],
    systems: ['NetSuite', 'Claude Vision', 'BACS/SWIFT', 'Outlook'],
    quote: 'Every invoice that arrives by email now goes to NetSuite without a human in the loop.',
    client: '£100M+ B2B media company, UK'
  },
  {
    status: 'LIVE',
    statusColor: 'green',
    industry: 'Manufacturing / SAP',
    name: 'SAP Data Query Agent',
    tagline: 'Self-service access to any SAP table for finance dashboards. No IT tickets, no ABAP developer, no waiting. Queries 10,000+ SAP tables in 2-5 seconds.',
    metrics: [
      { value: '10,000+', label: 'SAP tables' },
      { value: '2-5 sec', label: 'Query time' },
      { value: 'Zero', label: 'IT involvement' },
      { value: '4-6 hrs/wk', label: 'Time saved' },
    ],
    systems: ['SAP S4/HANA', 'OData 2.0', 'Power BI', 'Excel'],
    quote: 'The Finance Controller stopped filing IT tickets. Every dashboard refreshes directly from SAP, real-time.',
    client: '₹100-500 Cr Indian manufacturer'
  },
  {
    status: 'LIVE',
    statusColor: 'green',
    industry: 'Venture Capital',
    name: 'Fund Operations Agent',
    tagline: 'End-to-end investor reporting for VC fund operations. Ingests Tally exports, calculates allocation ratios across 117 investors, generates 6 compliance-ready reports.',
    metrics: [
      { value: '117', label: 'Investors' },
      { value: '97.3%', label: 'Accuracy' },
      { value: '₹277 Cr', label: 'AUM managed' },
      { value: '8-12 hrs', label: 'Monthly saved' },
    ],
    systems: ['Tally Prime', 'Supabase', 'FBIL API', 'Power BI'],
    quote: 'Capital Account Statements that used to take a weekend now run in minutes, with audit-ready reconciliation built in.',
    client: 'AIF Category II VC fund'
  },
  {
    status: 'LIVE',
    statusColor: 'green',
    industry: 'B2B SaaS',
    name: 'CS Command Center Agent',
    tagline: 'Real-time churn risk, NRR forecasting, and upsell pipeline visibility across 200+ enterprise accounts. Syncs from Salesforce every 6 hours with stage-based early warning alerts.',
    metrics: [
      { value: '$191M', label: 'ARR monitored' },
      { value: '200+', label: 'Accounts tracked' },
      { value: '4-6 hrs', label: 'Weekly saved' },
      { value: 'S12-S14', label: 'Early detection' },
    ],
    systems: ['Salesforce', 'SOQL', 'Google Apps Script', 'OAuth2'],
    quote: 'Leadership stopped asking "is this data right?" The agent has a single source of truth that refreshes automatically.',
    client: '$191M ARR B2B SaaS'
  },
  {
    status: 'LIVE',
    statusColor: 'green',
    industry: 'Automotive Services',
    name: 'Vehicle Compliance Agent',
    tagline: 'Validates 10,000+ vehicles against Indian government RTO databases, auto-flags expired insurance, fitness certificates, and challans. Generates prioritised call centre campaigns.',
    metrics: [
      { value: '10K+', label: 'Vehicles validated' },
      { value: '~95%', label: 'Automation rate' },
      { value: '60+', label: 'Fields per record' },
      { value: '6 types', label: 'Issues flagged' },
    ],
    systems: ['Signzy API', 'SurePass KYC', 'Parivahan', 'Supabase'],
    quote: 'Proactive renewal outreach is now automatic. The call centre works from a daily agent-generated list.',
    client: 'Indian automotive service chain'
  }
]

export default function CaseStudiesSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / (agents.length + 1)
      carouselRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' })
      setCurrentIndex(index)
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft
      const cardWidth = carouselRef.current.scrollWidth / (agents.length + 1)
      const newIndex = Math.round(scrollLeft / cardWidth)
      setCurrentIndex(newIndex)
    }
  }

  return (
    <section id="agents" className={`relative py-12 md:py-16 overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl ${isDark ? 'bg-[#ec5f2b]/5' : 'bg-[#ec5f2b]/3'}`} />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 px-6"
      >
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4 ${
          isDark ? 'bg-[#ec5f2b]/10 text-[#ec5f2b] border border-[#ec5f2b]/20' : 'bg-[#ec5f2b]/10 text-[#ec5f2b] border border-[#ec5f2b]/20'
        }`}>
          AGENTS BUILT
        </span>
        <h2 className={`text-2xl md:text-3xl font-bold mb-3 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
          Six live agents. Six different operations.
        </h2>
        <p className={`text-sm md:text-base max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
          We haven't found an operation we couldn't agent-ify. Don't see yours? That's the point.
        </p>
      </motion.div>

      {/* Desktop Grid */}
      <div className="hidden lg:block max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-5">
          {agents.map((agent, index) => (
            <AgentCard key={index} agent={agent} isDark={isDark} index={index} />
          ))}
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`rounded-2xl p-6 border-2 border-dashed flex flex-col items-center justify-center text-center ${
              isDark ? 'border-gray-700 bg-gray-900/50' : 'border-gray-300 bg-white/50'
            }`}
          >
            <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              Don't see your operation?
            </h3>
            <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              That's the point. We've never met an operation we couldn't agent-ify.
            </p>
            <a
              href="mailto:contact@cshift.io"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ec5f2b] text-white rounded-lg text-sm font-semibold hover:bg-[#d94f1f] transition-all"
            >
              Tell us about yours
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Mobile/Tablet Carousel */}
      <div className="lg:hidden">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex-shrink-0 w-[85vw] snap-center"
            >
              <AgentCardMobile agent={agent} isDark={isDark} />
            </motion.div>
          ))}
          {/* CTA Card Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[85vw] snap-center"
          >
            <div className={`rounded-2xl p-5 border-2 border-dashed flex flex-col items-center justify-center text-center h-full min-h-[280px] ${
              isDark ? 'border-gray-700 bg-gray-900/50' : 'border-gray-300 bg-white/50'
            }`}>
              <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Don't see your operation?
              </h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                We've never met an operation we couldn't agent-ify.
              </p>
              <a
                href="mailto:contact@cshift.io"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ec5f2b] text-white rounded-lg text-sm font-semibold"
              >
                Tell us about yours
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Mobile Carousel Navigation */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={() => scrollToCard(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              currentIndex === 0
                ? isDark ? 'bg-gray-800 text-gray-600' : 'bg-gray-200 text-gray-400'
                : isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-1.5">
            {[...agents, null].map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-[#ec5f2b] w-5'
                    : isDark ? 'bg-gray-700 w-2' : 'bg-gray-300 w-2'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => scrollToCard(Math.min(agents.length, currentIndex + 1))}
            disabled={currentIndex === agents.length}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              currentIndex === agents.length
                ? isDark ? 'bg-gray-800 text-gray-600' : 'bg-gray-200 text-gray-400'
                : isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

function AgentCard({ agent, isDark, index }: { agent: typeof agents[0], isDark: boolean, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`rounded-2xl border overflow-hidden ${
        isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
      } shadow-lg hover:shadow-xl transition-shadow`}
    >
      {/* Header */}
      <div className={`px-5 py-4 border-b ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
        <div className="flex items-center justify-between mb-2">
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${
            agent.statusColor === 'green'
              ? isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
              : isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100 text-amber-700'
          }`}>
            {agent.status}
          </span>
          <span className={`text-[10px] font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            {agent.industry}
          </span>
        </div>
        <h3 className={`text-base font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
          {agent.name}
        </h3>
      </div>

      {/* Body */}
      <div className="px-5 py-4">
        <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {agent.tagline}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {agent.metrics.map((metric, idx) => (
            <div key={idx} className={`pl-2 border-l-2 border-[#ec5f2b] py-1 ${isDark ? 'bg-gray-800/40' : 'bg-gray-50'} rounded-r`}>
              <div className="text-sm font-bold text-[#ec5f2b]">{metric.value}</div>
              <div className={`text-[9px] uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Systems */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {agent.systems.map((sys, idx) => (
            <span key={idx} className={`px-2 py-0.5 rounded text-[10px] font-medium ${
              isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'
            }`}>
              {sys}
            </span>
          ))}
        </div>

        {/* Quote */}
        <div className={`pt-3 border-t ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
          <p className={`text-xs italic leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            "{agent.quote}"
          </p>
          <p className={`text-[10px] mt-1.5 font-medium ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
            — {agent.client}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function AgentCardMobile({ agent, isDark }: { agent: typeof agents[0], isDark: boolean }) {
  return (
    <div className={`rounded-2xl border overflow-hidden h-full ${
      isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
    } shadow-lg`}>
      {/* Header */}
      <div className={`px-4 py-3 border-b ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
        <div className="flex items-center justify-between mb-1.5">
          <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wide ${
            agent.statusColor === 'green'
              ? isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
              : isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100 text-amber-700'
          }`}>
            {agent.status}
          </span>
          <span className={`text-[9px] font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            {agent.industry}
          </span>
        </div>
        <h3 className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
          {agent.name}
        </h3>
      </div>

      {/* Body */}
      <div className="px-4 py-3">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {agent.metrics.slice(0, 4).map((metric, idx) => (
            <div key={idx} className={`pl-2 border-l-2 border-[#ec5f2b] py-1 ${isDark ? 'bg-gray-800/40' : 'bg-gray-50'} rounded-r`}>
              <div className="text-sm font-bold text-[#ec5f2b]">{metric.value}</div>
              <div className={`text-[8px] uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className={`pt-3 border-t ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
          <p className={`text-xs italic leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            "{agent.quote}"
          </p>
        </div>
      </div>
    </div>
  )
}
