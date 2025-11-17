'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Calculator, TrendingUp, Clock, AlertCircle, Users, DollarSign } from 'lucide-react'

export function ROICalculatorSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  // Calculator inputs
  const [teamSize, setTeamSize] = useState(5)
  const [hoursPerWeek, setHoursPerWeek] = useState(10)
  const [avgHourlyCost, setAvgHourlyCost] = useState(25)
  const [errorRate, setErrorRate] = useState(15)
  const [monthlyRevenue, setMonthlyRevenue] = useState(100000)

  // Calculations
  const weeklyManualCost = teamSize * hoursPerWeek * avgHourlyCost
  const monthlyManualCost = weeklyManualCost * 4
  const annualManualCost = monthlyManualCost * 12

  // Automation impact (conservative estimates)
  const timeAutomated = 0.70 // 70% of manual work automated
  const errorReduction = 0.85 // 85% error reduction
  const followUpImprovement = 0.60 // 60% better follow-up

  const monthlySavings = monthlyManualCost * timeAutomated
  const annualSavings = monthlySavings * 12

  const errorCostReduction = (monthlyRevenue * (errorRate / 100) * errorReduction) / 12
  const revenueProtected = (monthlyRevenue * 0.05 * followUpImprovement) * 12 // 5% revenue at risk from poor follow-up

  const totalAnnualValue = annualSavings + (errorCostReduction * 12) + revenueProtected

  // Cost of doing nothing (current state costs)
  const currentErrorCost = (monthlyRevenue * (errorRate / 100)) * 12
  const currentRevenueAtRisk = monthlyRevenue * 0.05 * 12 // 5% revenue at risk
  const softwareSprawlCost = 3000 * 12 // Assume $3k/mo in disconnected tools
  const costOfDoingNothing = annualManualCost + currentErrorCost + currentRevenueAtRisk + softwareSprawlCost

  // Typical project cost range
  const avgProjectCost = 50000 // Conservative mid-range
  const paybackMonths = avgProjectCost / (totalAnnualValue / 12)
  const threeYearROI = ((totalAnnualValue * 3 - avgProjectCost) / avgProjectCost) * 100

  return (
    <section className={`py-12 px-6 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/3 to-orange-600/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Transformation Value Calculator
          </h2>
          <p className={`text-sm max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            See the real impact of process automation. No inflated promises, just practical math.
          </p>
        </motion.div>

        {/* Main Calculator Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Left: Inputs in 2-column grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-xl border p-5 ${
              isDark
                ? 'bg-gradient-to-br from-gray-900 to-gray-950 border-gray-800'
                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
            } shadow-xl`}
          >
            <h3 className={`text-base font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              Your Current Situation
            </h3>

            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              {/* Team Size */}
              <div>
                <label className={`flex items-center gap-1.5 text-xs font-medium mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Users className="w-3 h-3 text-[#ec5f2b]" />
                  Team members handling this process
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ec5f2b]"
                />
                <div className="flex justify-between mt-1">
                  <span className={`text-xs font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>{teamSize} people</span>
                </div>
              </div>

              {/* Hours per week */}
              <div>
                <label className={`flex items-center gap-1.5 text-xs font-medium mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Clock className="w-3 h-3 text-[#ec5f2b]" />
                  Hours/week on manual work
                </label>
                <input
                  type="range"
                  min="2"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ec5f2b]"
                />
                <div className="flex justify-between mt-1">
                  <span className={`text-xs font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>{hoursPerWeek} hrs/week</span>
                </div>
              </div>

              {/* Average hourly cost */}
              <div>
                <label className={`flex items-center gap-1.5 text-xs font-medium mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <DollarSign className="w-3 h-3 text-[#ec5f2b]" />
                  Avg. hourly cost (salary + overhead)
                </label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={avgHourlyCost}
                  onChange={(e) => setAvgHourlyCost(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ec5f2b]"
                />
                <div className="flex justify-between mt-1">
                  <span className={`text-xs font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>${avgHourlyCost}/hr</span>
                </div>
              </div>

              {/* Error rate */}
              <div>
                <label className={`flex items-center gap-1.5 text-xs font-medium mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <AlertCircle className="w-3 h-3 text-[#ec5f2b]" />
                  Error/rework rate
                </label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  value={errorRate}
                  onChange={(e) => setErrorRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ec5f2b]"
                />
                <div className="flex justify-between mt-1">
                  <span className={`text-xs font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>{errorRate}%</span>
                </div>
              </div>

              {/* Monthly revenue */}
              <div>
                <label className={`flex items-center gap-1.5 text-xs font-medium mb-1.5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <TrendingUp className="w-3 h-3 text-[#ec5f2b]" />
                  Monthly revenue influenced
                </label>
                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  step="10000"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ec5f2b]"
                />
                <div className="flex justify-between mt-1">
                  <span className={`text-xs font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    ${(monthlyRevenue / 1000).toFixed(0)}k/mo
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Total Annual Value Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className={`rounded-xl border p-5 relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 border-gray-800'
                : 'bg-gradient-to-br from-white via-gray-50 to-gray-100 border-gray-200'
            } shadow-xl`}
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ec5f2b] to-transparent" />

            <div className={`text-xs font-medium mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Total Annual Value
            </div>
            <div className={`text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              ${totalAnnualValue.toLocaleString()}
              <span className="text-base text-gray-500">/yr</span>
            </div>

            <div className="space-y-2.5 mb-4">
              <div className="flex items-center justify-between">
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Time saved (70% automation)
                </span>
                <span className={`text-xs font-semibold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  ${annualSavings.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Error reduction (85%)
                </span>
                <span className={`text-xs font-semibold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  ${(errorCostReduction * 12).toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Revenue protected
                </span>
                <span className={`text-xs font-semibold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  ${revenueProtected.toLocaleString()}
                </span>
              </div>
            </div>

            <div className={`pt-3 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <span className={`text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  3-Year ROI
                </span>
                <span className="text-xl font-bold text-[#ec5f2b]">
                  {threeYearROI.toFixed(0)}%
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: Metrics */}
        <div className="grid lg:grid-cols-3 gap-4 mb-4">
          {/* Annual Savings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className={`rounded-lg border p-4 ${
              isDark
                ? 'bg-gradient-to-br from-gray-900 to-gray-950 border-gray-800'
                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
            } shadow-lg`}
          >
            <div className={`text-xs font-medium mb-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Annual Time Savings
            </div>
            <div className={`text-xl font-bold mb-0.5 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              ${annualSavings.toLocaleString()}
            </div>
            <div className="text-xs text-[#ec5f2b] font-medium">
              {(teamSize * hoursPerWeek * 4 * 12 * timeAutomated).toFixed(0)} hrs/yr
            </div>
          </motion.div>

          {/* Payback Period */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className={`rounded-lg border p-4 ${
              isDark
                ? 'bg-gradient-to-br from-gray-900 to-gray-950 border-gray-800'
                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
            } shadow-lg`}
          >
            <div className={`text-xs font-medium mb-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              Payback Period
            </div>
            <div className={`text-xl font-bold mb-0.5 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              {paybackMonths.toFixed(1)} mo
            </div>
            <div className="text-xs text-[#ec5f2b] font-medium">
              Break even: {Math.ceil(paybackMonths)} months
            </div>
          </motion.div>

          {/* Cost of Doing Nothing - Warning Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className={`rounded-lg border-2 p-4 relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-br from-red-950/30 to-red-900/20 border-red-900/50'
                : 'bg-gradient-to-br from-red-50 to-orange-50 border-red-200'
            } shadow-lg`}
          >
            {/* Warning pulse effect */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse" />

            <div className={`text-xs font-medium mb-1 flex items-center gap-1 ${
              isDark ? 'text-red-400' : 'text-red-600'
            }`}>
              <AlertCircle className="w-3 h-3" />
              Cost of Doing Nothing
            </div>
            <div className={`text-xl font-bold mb-0.5 ${
              isDark ? 'text-red-300' : 'text-red-700'
            }`}>
              ${costOfDoingNothing.toLocaleString()}
            </div>
            <div className={`text-xs font-medium ${isDark ? 'text-red-500' : 'text-red-600'}`}>
              Lost annually without change
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`rounded-lg border p-3 text-center ${
            isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'
          }`}
        >
          <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            <span className="font-semibold">Conservative estimates:</span> 70% automation, 85% error reduction, 60% follow-up improvement. Actual results vary.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
