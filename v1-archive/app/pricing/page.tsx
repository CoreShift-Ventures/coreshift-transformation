'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Navigation } from '@/components/landing-v2/Navigation'
import { Footer } from '@/components/landing/Footer'
import { ROICalculatorSection } from '@/components/landing-v3/ROICalculatorSection'
import Link from 'next/link'
import {
  Target,
  Rocket,
  TrendingUp,
  Package,
  BarChart3,
  Calendar,
  CheckSquare,
  FileText,
  CreditCard,
  Check,
  Globe,
  MapPin,
  Users,
  Zap,
  ArrowRight
} from 'lucide-react'

type Region = 'india' | 'global'
type AITier = 'light' | 'medium' | 'heavy'

interface ProcessModule {
  id: string
  icon: any
  title: string
  complexity: 'simple' | 'medium' | 'complex'
  indiaPrice: number
  globalPrice: number
}

const processModules: ProcessModule[] = [
  { id: 'lead-conversion', icon: Target, title: 'Lead Acquisition and Conversion', complexity: 'complex', indiaPrice: 4000, globalPrice: 65 },
  { id: 'customer-success', icon: Rocket, title: 'Customer Onboarding and Success', complexity: 'complex', indiaPrice: 4000, globalPrice: 65 },
  { id: 'revenue-operations', icon: TrendingUp, title: 'Revenue Operations Intelligence', complexity: 'medium', indiaPrice: 2500, globalPrice: 40 },
  { id: 'order-management', icon: Package, title: 'Order to Delivery Orchestration', complexity: 'complex', indiaPrice: 3500, globalPrice: 55 },
  { id: 'inventory', icon: BarChart3, title: 'Inventory and Procurement Management', complexity: 'medium', indiaPrice: 2500, globalPrice: 40 },
  { id: 'appointments', icon: Calendar, title: 'Service Scheduling and Field Operations', complexity: 'medium', indiaPrice: 2000, globalPrice: 35 },
  { id: 'project-management', icon: CheckSquare, title: 'Project and Task Execution', complexity: 'medium', indiaPrice: 2500, globalPrice: 40 },
  { id: 'invoicing', icon: FileText, title: 'Billing and Invoicing Automation', complexity: 'simple', indiaPrice: 1500, globalPrice: 25 },
  { id: 'expenses', icon: CreditCard, title: 'Expense and Procurement Tracking', complexity: 'simple', indiaPrice: 1500, globalPrice: 25 }
]

const aiTierDetails = {
  light: {
    credits: 500,
    indiaPrice: 1500,
    globalPrice: 30,
    description: 'Basic automation'
  },
  medium: {
    credits: 1500,
    indiaPrice: 4500,
    globalPrice: 90,
    description: 'Enhanced intelligence'
  },
  heavy: {
    credits: 3000,
    indiaPrice: 9000,
    globalPrice: 180,
    description: 'Advanced AI-driven'
  }
}

export default function PricingPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [region, setRegion] = useState<Region>('india')
  const [selectedProcesses, setSelectedProcesses] = useState<Set<string>>(new Set())
  const [aiTier, setAiTier] = useState<AITier>('medium')
  const [additionalUsers, setAdditionalUsers] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  // One-time costs
  const blueprintCost = region === 'india' ? 100000 : 2000 // Phase 1: Strategy & Blueprint
  const buildCostPerModule = region === 'india' ? 15000 : 300 // Phase 2: Build cost per module
  const buildCost = selectedProcesses.size * buildCostPerModule
  const totalOneTime = blueprintCost + buildCost

  // Recurring costs
  const basePlatformFee = region === 'india' ? 2500 : 40
  const processTotal = Array.from(selectedProcesses).reduce((sum, processId) => {
    const process = processModules.find(p => p.id === processId)
    return sum + (process ? (region === 'india' ? process.indiaPrice : process.globalPrice) : 0)
  }, 0)
  const aiCreditsPrice = region === 'india' ? aiTierDetails[aiTier].indiaPrice : aiTierDetails[aiTier].globalPrice
  const userPrice = region === 'india' ? 250 : 5
  const additionalUsersTotal = additionalUsers * userPrice
  const monthlyTotal = basePlatformFee + processTotal + aiCreditsPrice + additionalUsersTotal
  const annualTotal = monthlyTotal * 12

  const currencySymbol = region === 'india' ? '₹' : '$'

  const toggleProcess = (processId: string) => {
    const newSelected = new Set(selectedProcesses)
    if (newSelected.has(processId)) {
      newSelected.delete(processId)
    } else {
      newSelected.add(processId)
    }
    setSelectedProcesses(newSelected)
  }

  return (
    <>
      <Navigation />
      <main className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'}`}>
        {/* Compact Header */}
        <section className="pt-24 pb-12 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h1 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Build Your Transformation Plan
              </h1>
              <p className={`text-sm max-w-2xl mx-auto mb-6 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                Choose processes, select AI tier, see your investment instantly
              </p>

              {/* Region Toggle */}
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => setRegion('india')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                    region === 'india'
                      ? 'bg-gradient-to-r from-[#ec5f2b] to-[#d94f1f] text-white shadow-md'
                      : isDark
                      ? 'bg-gray-900 border border-gray-800 text-gray-400'
                      : 'bg-gray-100 border border-gray-200 text-gray-600'
                  }`}
                >
                  <MapPin className="w-3 h-3" />
                  India (₹)
                </button>
                <button
                  onClick={() => setRegion('global')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                    region === 'global'
                      ? 'bg-gradient-to-r from-[#ec5f2b] to-[#d94f1f] text-white shadow-md'
                      : isDark
                      ? 'bg-gray-900 border border-gray-800 text-gray-400'
                      : 'bg-gray-100 border border-gray-200 text-gray-600'
                  }`}
                >
                  <Globe className="w-3 h-3" />
                  Global ($)
                </button>
              </div>
            </motion.div>

            {/* 2-Column Layout */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left Column: Configuration */}
              <div className="lg:col-span-2 space-y-4">
                {/* Process Modules - Compact Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className={`text-base font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    Select Process Modules
                  </h3>
                  <div className="grid md:grid-cols-3 gap-2">
                    {processModules.map((process) => {
                      const Icon = process.icon
                      const isSelected = selectedProcesses.has(process.id)
                      const price = region === 'india' ? process.indiaPrice : process.globalPrice

                      return (
                        <motion.button
                          key={process.id}
                          onClick={() => toggleProcess(process.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`text-left p-3 rounded-lg border transition-all ${
                            isSelected
                              ? 'border-[#ec5f2b] bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/20 dark:to-gray-900'
                              : isDark
                              ? 'border-gray-800 bg-gray-900/50 hover:border-gray-700'
                              : 'border-gray-200 bg-white hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`w-7 h-7 rounded flex items-center justify-center ${
                              isSelected
                                ? 'bg-gradient-to-br from-[#ec5f2b] to-[#d94f1f]'
                                : isDark
                                ? 'bg-gray-800'
                                : 'bg-gray-100'
                            }`}>
                              <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                            </div>
                            {isSelected && (
                              <Check className="w-4 h-4 text-[#ec5f2b] ml-auto" />
                            )}
                          </div>
                          <h4 className={`text-xs font-bold mb-1 leading-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                            {process.title}
                          </h4>
                          <div className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-brand-charcoal'}`}>
                            {currencySymbol}{price.toLocaleString()}/mo
                          </div>
                        </motion.button>
                      )
                    })}
                  </div>
                </motion.div>

                {/* Row: Base Platform + AI Credits + Users */}
                <div className="grid md:grid-cols-3 gap-3">
                  {/* Base Platform */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`rounded-lg border p-3 ${
                      isDark
                        ? 'bg-gray-900/50 border-gray-800'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <h3 className={`text-xs font-bold mb-1 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      Base Platform
                    </h3>
                    <div className={`text-lg font-bold mb-1 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      {currencySymbol}{basePlatformFee.toLocaleString()}
                      <span className="text-xs font-normal text-gray-400">/mo</span>
                    </div>
                    <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                      5 users included
                    </p>
                  </motion.div>

                  {/* AI Credits */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={`rounded-lg border p-3 ${
                      isDark
                        ? 'bg-gray-900/50 border-gray-800'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <h3 className={`text-xs font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      AI Credits
                    </h3>
                    <div className="space-y-1">
                      {(Object.keys(aiTierDetails) as AITier[]).map((tier) => {
                        const details = aiTierDetails[tier]
                        const isSelected = aiTier === tier
                        const price = region === 'india' ? details.indiaPrice : details.globalPrice

                        return (
                          <button
                            key={tier}
                            onClick={() => setAiTier(tier)}
                            className={`w-full text-left px-2 py-1.5 rounded text-xs transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#ec5f2b] text-white'
                                : isDark
                                ? 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            <span className="font-semibold uppercase">{tier}</span>
                            <span className="font-bold">{currencySymbol}{price.toLocaleString()}</span>
                          </button>
                        )
                      })}
                    </div>
                  </motion.div>

                  {/* Additional Users */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={`rounded-lg border p-3 ${
                      isDark
                        ? 'bg-gray-900/50 border-gray-800'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <h3 className={`text-xs font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      Additional Users
                    </h3>
                    <div className="flex items-center gap-2 mb-1">
                      <button
                        onClick={() => setAdditionalUsers(Math.max(0, additionalUsers - 1))}
                        className={`w-7 h-7 rounded font-bold transition-all text-sm ${
                          isDark
                            ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                            : 'bg-gray-200 hover:bg-gray-300 text-brand-charcoal'
                        }`}
                      >
                        -
                      </button>
                      <span className={`text-xl font-bold flex-1 text-center ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                        {additionalUsers}
                      </span>
                      <button
                        onClick={() => setAdditionalUsers(additionalUsers + 1)}
                        className={`w-7 h-7 rounded font-bold transition-all text-sm ${
                          isDark
                            ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                            : 'bg-gray-200 hover:bg-gray-300 text-brand-charcoal'
                        }`}
                      >
                        +
                      </button>
                    </div>
                    <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                      {currencySymbol}{userPrice}/user/mo
                    </p>
                  </motion.div>
                </div>

                {/* AI Credits Explanation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className={`rounded-lg border p-4 ${
                    isDark
                      ? 'bg-gradient-to-br from-orange-950/20 to-gray-900 border-orange-900/30'
                      : 'bg-gradient-to-br from-orange-50 to-white border-orange-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ec5f2b] to-[#d94f1f] flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-sm font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                        How AI Credits Work
                      </h3>
                      <p className={`text-xs mb-3 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        AI credits power ShiftIQ automation and CompassAI intelligence across your workflows. Choose the tier that matches your usage.
                      </p>
                      <div className={`text-xs space-y-2 mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <div className="flex items-start gap-2">
                          <span className="text-[#ec5f2b] font-bold mt-0.5">•</span>
                          <span><strong>Light (500 credits/mo):</strong> Perfect for small teams automating 1-2 processes with basic routing and notifications</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#ec5f2b] font-bold mt-0.5">•</span>
                          <span><strong>Medium (1,500 credits/mo):</strong> Ideal for growing teams running 3-5 processes with health scoring and predictive insights</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#ec5f2b] font-bold mt-0.5">•</span>
                          <span><strong>Heavy (3,000 credits/mo):</strong> Built for high-volume operations with advanced forecasting, continuous optimization, and multiple AI-driven workflows</span>
                        </div>
                      </div>
                      <div className={`text-xs p-2 rounded ${
                        isDark
                          ? 'bg-gray-900/50 border border-gray-800'
                          : 'bg-white border border-orange-200'
                      }`}>
                        <p className={`font-semibold mb-1 ${isDark ? 'text-gray-300' : 'text-brand-charcoal'}`}>
                          Need more credits?
                        </p>
                        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                          Purchase additional credits anytime as you scale. No contracts, pay only for what you use.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Price Summary (Sticky) */}
              <div className="lg:col-span-1">
                {/* Add matching spacing for the header on left side */}
                <div className="h-[36px]"></div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="sticky top-24"
                >
                  <div className={`rounded-xl border-2 border-[#ec5f2b] overflow-hidden ${
                    isDark ? 'bg-gray-900' : 'bg-white'
                  }`}>
                    {/* One-Time Costs */}
                    <div className={`p-4 border-b ${isDark ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-gray-50'}`}>
                      <h3 className={`text-xs font-semibold mb-3 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        One-Time Investment
                      </h3>
                      <div className="space-y-2 text-xs mb-3">
                        <div className="flex items-center justify-between">
                          <span className={isDark ? 'text-gray-400' : 'text-brand-gray'}>
                            Strategy & Blueprint
                          </span>
                          <span className={`font-semibold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                            {currencySymbol}{blueprintCost.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={isDark ? 'text-gray-400' : 'text-brand-gray'}>
                            Build & Deploy ({selectedProcesses.size} modules)
                          </span>
                          <span className={`font-semibold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                            {currencySymbol}{buildCost.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-gray-300 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                            Total One-Time
                          </span>
                          <span className={`text-lg font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                            {currencySymbol}{totalOneTime.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Recurring Costs */}
                    <div className="bg-gradient-to-r from-[#ec5f2b] to-[#d94f1f] p-4">
                      <h3 className="text-xs font-semibold text-white/80 mb-2 uppercase tracking-wide">
                        Monthly Recurring
                      </h3>
                      <div className="text-3xl font-bold text-white mb-1">
                        {currencySymbol}{monthlyTotal.toLocaleString()}
                        <span className="text-sm font-normal text-white/80">/month</span>
                      </div>
                      <div className="text-xs text-white/80">
                        {currencySymbol}{annualTotal.toLocaleString()}/year
                      </div>
                    </div>

                    {/* Breakdown */}
                    <div className="p-4 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className={isDark ? 'text-gray-400' : 'text-brand-gray'}>
                          Base Platform
                        </span>
                        <span className={`font-semibold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                          {currencySymbol}{basePlatformFee.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className={isDark ? 'text-gray-400' : 'text-brand-gray'}>
                          Modules ({selectedProcesses.size})
                        </span>
                        <span className={`font-semibold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                          {currencySymbol}{processTotal.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className={isDark ? 'text-gray-400' : 'text-brand-gray'}>
                          AI Credits ({aiTier})
                        </span>
                        <span className={`font-semibold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                          {currencySymbol}{aiCreditsPrice.toLocaleString()}
                        </span>
                      </div>

                      {additionalUsers > 0 && (
                        <div className="flex items-center justify-between">
                          <span className={isDark ? 'text-gray-400' : 'text-brand-gray'}>
                            Users (+{additionalUsers})
                          </span>
                          <span className={`font-semibold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                            {currencySymbol}{additionalUsersTotal.toLocaleString()}
                          </span>
                        </div>
                      )}

                      <Link href="/contact" className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold transition-all shadow-lg hover:shadow-xl bg-gradient-to-r from-[#ec5f2b] to-[#d94f1f] hover:from-[#d94f1f] hover:to-[#c7451a] text-white mt-3">
                        Schedule Discovery Call
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <p className={`text-xs text-center ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        2-week deployment • Cancel anytime
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <ROICalculatorSection />
      </main>
      <Footer />
    </>
  )
}
