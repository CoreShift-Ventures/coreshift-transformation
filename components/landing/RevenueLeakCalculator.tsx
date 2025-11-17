'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { DollarSign, TrendingDown, TrendingUp, Users, AlertCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export function RevenueLeakCalculator() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Calculator inputs
  const [annualARR, setAnnualARR] = useState(5000000);
  const [customerCount, setCustomerCount] = useState(100);
  const [churnRate, setChurnRate] = useState(15);
  const [csmCount, setCsmCount] = useState(5);
  const [avgExpansionRate, setAvgExpansionRate] = useState(20);

  // Readiness checks
  const [hasCRM, setHasCRM] = useState(true);
  const [hasUsageTracking, setHasUsageTracking] = useState(true);
  const [hasSupportData, setHasSupportData] = useState(true);
  const [teamProactivity, setTeamProactivity] = useState(3); // 1-5 scale

  // Calculate readiness score (0-1)
  const readinessScore = (() => {
    let score = 0;
    if (hasCRM) score += 0.25;
    if (hasUsageTracking) score += 0.25;
    if (hasSupportData) score += 0.25;
    score += (teamProactivity / 5) * 0.25; // Team proactivity weighted
    return Math.max(0.5, score); // Minimum 50% even if all false
  })();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  // Calculations
  const calculations = {
    // Revenue Leak from Churn
    annualChurnLoss: annualARR * (churnRate / 100),
    preventableChurn: annualARR * (churnRate / 100) * 0.67, // Assume 67% is preventable

    // Missed Expansion
    currentExpansion: annualARR * (avgExpansionRate / 100),
    potentialExpansion: annualARR * 0.35, // Industry benchmark 35%
    missedExpansion: (annualARR * 0.35) - (annualARR * (avgExpansionRate / 100)),

    // CSM Efficiency
    hoursWastedPerCSM: 20,
    totalHoursWasted: 20 * csmCount * 52, // per year
    costPerCSM: 80000, // avg CSM salary
    wastedCost: (20 / 40) * csmCount * 80000, // 20hrs/40hr week wasted

    // Total Revenue Leak
    get totalLeak() {
      return this.preventableChurn + this.missedExpansion;
    },

    // ROI with CoreShift (Year 1, Conservative)
    churnReduction: annualARR * (churnRate / 100) * 0.35, // 35% churn reduction (conservative)
    expansionIncrease: ((annualARR * 0.35) - (annualARR * (avgExpansionRate / 100))) * 0.4, // Capture 40% of gap (realistic Year 1)
    efficiencyGain: (20 / 40) * csmCount * 80000 * 0.6, // 60% efficiency gain (automation takes time)

    get totalROI() {
      return this.churnReduction + this.expansionIncrease + this.efficiencyGain;
    },

    get roiMultiple() {
      return (this.totalROI / 15000).toFixed(1); // Assuming $15K platform cost
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <section className={`py-12 px-6 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-[95%] 2xl:max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-3">
            <DollarSign className="w-4 h-4 text-brand-orange" />
            <span className="text-sm font-semibold text-brand-orange">
              Revenue Leak Calculator
            </span>
          </div>

          <h2 className={`text-2xl md:text-4xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Do You Feel Like Doing Some Math?
          </h2>
          <p className={`text-sm md:text-base max-w-2xl mx-auto mb-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Calculate exactly how much revenue you're losing and what CoreShift could recover
          </p>

          {/* Toggle Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-base transition-all ${
              isDark
                ? 'bg-brand-orange text-white hover:bg-brand-orange-dark'
                : 'bg-brand-orange text-white hover:bg-brand-orange-dark'
            } shadow-lg hover:shadow-xl hover:scale-105`}
          >
            {isOpen ? 'Hide' : 'Show'} the Calculator
            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </motion.button>
        </motion.div>

        {/* Calculator */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className={`p-6 rounded-2xl ${
                isDark
                  ? 'bg-gray-900 border border-gray-800'
                  : 'bg-white border border-gray-200 shadow-xl'
              }`}>
                {/* Input Section */}
                <div className="mb-6">
                  <h3 className={`text-base font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    Your Metrics
                  </h3>

                  <div className="grid md:grid-cols-5 gap-4">
                    {/* Annual ARR */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Annual Recurring Revenue (ARR)
                        </label>
                        <span className={`text-lg font-bold ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`}>
                          {formatCurrency(annualARR)}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1000000"
                        max="100000000"
                        step="1000000"
                        value={annualARR}
                        onChange={(e) => setAnnualARR(parseInt(e.target.value))}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: isDark
                            ? `linear-gradient(to right, #ec5f2b 0%, #ec5f2b ${((annualARR - 1000000) / (100000000 - 1000000)) * 100}%, #374151 ${((annualARR - 1000000) / (100000000 - 1000000)) * 100}%, #374151 100%)`
                            : `linear-gradient(to right, #ec5f2b 0%, #ec5f2b ${((annualARR - 1000000) / (100000000 - 1000000)) * 100}%, #e5e7eb ${((annualARR - 1000000) / (100000000 - 1000000)) * 100}%, #e5e7eb 100%)`
                        }}
                      />
                      <div className="flex justify-between mt-1">
                        <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>$1M</span>
                        <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>$100M</span>
                      </div>
                    </div>

                    {/* Customer Count */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Number of Customers
                        </label>
                        <span className={`text-lg font-bold ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`}>
                          {formatNumber(customerCount)}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="1000"
                        step="10"
                        value={customerCount}
                        onChange={(e) => setCustomerCount(parseInt(e.target.value))}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: isDark
                            ? `linear-gradient(to right, #ec5f2b 0%, #ec5f2b ${((customerCount - 10) / (1000 - 10)) * 100}%, #374151 ${((customerCount - 10) / (1000 - 10)) * 100}%, #374151 100%)`
                            : `linear-gradient(to right, #ec5f2b 0%, #ec5f2b ${((customerCount - 10) / (1000 - 10)) * 100}%, #e5e7eb ${((customerCount - 10) / (1000 - 10)) * 100}%, #e5e7eb 100%)`
                        }}
                      />
                      <div className="flex justify-between mt-1">
                        <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>10</span>
                        <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>1,000</span>
                      </div>
                    </div>

                    {/* Churn Rate */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Annual Churn Rate
                        </label>
                        <span className={`text-lg font-bold ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`}>
                          {churnRate}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="40"
                        step="1"
                        value={churnRate}
                        onChange={(e) => setChurnRate(parseInt(e.target.value))}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: isDark
                            ? `linear-gradient(to right, #ec5f2b 0%, #ec5f2b ${((churnRate - 5) / (40 - 5)) * 100}%, #374151 ${((churnRate - 5) / (40 - 5)) * 100}%, #374151 100%)`
                            : `linear-gradient(to right, #ec5f2b 0%, #ec5f2b ${((churnRate - 5) / (40 - 5)) * 100}%, #e5e7eb ${((churnRate - 5) / (40 - 5)) * 100}%, #e5e7eb 100%)`
                        }}
                      />
                      <div className="flex justify-between mt-1">
                        <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>5%</span>
                        <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>40%</span>
                      </div>
                    </div>

                    {/* CSM Count */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Number of CSMs
                        </label>
                        <span className={`text-lg font-bold ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`}>
                          {csmCount}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="50"
                        step="1"
                        value={csmCount}
                        onChange={(e) => setCsmCount(parseInt(e.target.value))}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: isDark
                            ? `linear-gradient(to right, #ec5f2b 0%, #ec5f2b ${((csmCount - 1) / (50 - 1)) * 100}%, #374151 ${((csmCount - 1) / (50 - 1)) * 100}%, #374151 100%)`
                            : `linear-gradient(to right, #ec5f2b 0%, #ec5f2b ${((csmCount - 1) / (50 - 1)) * 100}%, #e5e7eb ${((csmCount - 1) / (50 - 1)) * 100}%, #e5e7eb 100%)`
                        }}
                      />
                      <div className="flex justify-between mt-1">
                        <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>1</span>
                        <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>50</span>
                      </div>
                    </div>

                    {/* Current Expansion Rate */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Current Expansion Rate
                        </label>
                        <span className={`text-lg font-bold ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`}>
                          {avgExpansionRate}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="40"
                        step="1"
                        value={avgExpansionRate}
                        onChange={(e) => setAvgExpansionRate(parseInt(e.target.value))}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: isDark
                            ? `linear-gradient(to right, #ec5f2b 0%, #ec5f2b ${(avgExpansionRate / 40) * 100}%, #374151 ${(avgExpansionRate / 40) * 100}%, #374151 100%)`
                            : `linear-gradient(to right, #ec5f2b 0%, #ec5f2b ${(avgExpansionRate / 40) * 100}%, #e5e7eb ${(avgExpansionRate / 40) * 100}%, #e5e7eb 100%)`
                        }}
                      />
                      <div className="flex justify-between mt-1">
                        <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>0%</span>
                        <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>40%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Readiness Check Section */}
                <div className={`mb-6 pb-4 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                  <h3 className={`text-base font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    Readiness Assessment
                  </h3>

                  <div className="grid md:grid-cols-4 gap-3">
                    {/* CRM Check */}
                    <label className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all ${
                      hasCRM
                        ? isDark ? 'bg-brand-orange/10 border border-brand-orange/30' : 'bg-brand-orange/5 border border-brand-orange/20'
                        : isDark ? 'bg-gray-950 border border-gray-800' : 'bg-gray-50 border border-gray-200'
                    }`}>
                      <input
                        type="checkbox"
                        checked={hasCRM}
                        onChange={(e) => setHasCRM(e.target.checked)}
                        className="w-4 h-4 text-brand-orange rounded focus:ring-brand-orange"
                      />
                      <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        CRM with customer data
                      </span>
                    </label>

                    {/* Usage Tracking Check */}
                    <label className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all ${
                      hasUsageTracking
                        ? isDark ? 'bg-brand-orange/10 border border-brand-orange/30' : 'bg-brand-orange/5 border border-brand-orange/20'
                        : isDark ? 'bg-gray-950 border border-gray-800' : 'bg-gray-50 border border-gray-200'
                    }`}>
                      <input
                        type="checkbox"
                        checked={hasUsageTracking}
                        onChange={(e) => setHasUsageTracking(e.target.checked)}
                        className="w-4 h-4 text-brand-orange rounded focus:ring-brand-orange"
                      />
                      <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Product usage analytics
                      </span>
                    </label>

                    {/* Support Data Check */}
                    <label className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all ${
                      hasSupportData
                        ? isDark ? 'bg-brand-orange/10 border border-brand-orange/30' : 'bg-brand-orange/5 border border-brand-orange/20'
                        : isDark ? 'bg-gray-950 border border-gray-800' : 'bg-gray-50 border border-gray-200'
                    }`}>
                      <input
                        type="checkbox"
                        checked={hasSupportData}
                        onChange={(e) => setHasSupportData(e.target.checked)}
                        className="w-4 h-4 text-brand-orange rounded focus:ring-brand-orange"
                      />
                      <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Support ticket history
                      </span>
                    </label>

                    {/* Team Proactivity */}
                    <div className={`p-4 rounded-lg ${
                      isDark ? 'bg-gray-950 border border-gray-800' : 'bg-gray-50 border border-gray-200'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Team proactivity
                        </span>
                        <span className={`text-sm font-bold ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`}>
                          {teamProactivity}/5
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        step="1"
                        value={teamProactivity}
                        onChange={(e) => setTeamProactivity(parseInt(e.target.value))}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: isDark
                            ? `linear-gradient(to right, #ec5f2b 0%, #ec5f2b ${((teamProactivity - 1) / 4) * 100}%, #374151 ${((teamProactivity - 1) / 4) * 100}%, #374151 100%)`
                            : `linear-gradient(to right, #ec5f2b 0%, #ec5f2b ${((teamProactivity - 1) / 4) * 100}%, #e5e7eb ${((teamProactivity - 1) / 4) * 100}%, #e5e7eb 100%)`
                        }}
                      />
                      <div className="flex justify-between mt-1">
                        <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Reactive</span>
                        <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Proactive</span>
                      </div>
                    </div>
                  </div>

                  {/* Readiness Score Indicator */}
                  <div className="mt-3">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Implementation Readiness
                      </span>
                      <span className={`text-xs font-bold ${
                        readinessScore >= 0.8 ? 'text-green-500' :
                        readinessScore >= 0.6 ? 'text-yellow-500' :
                        'text-orange-500'
                      }`}>
                        {readinessScore >= 0.8 ? 'High' : readinessScore >= 0.6 ? 'Medium' : 'Building'}
                      </span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                      <motion.div
                        className={`h-full ${
                          readinessScore >= 0.8 ? 'bg-green-500' :
                          readinessScore >= 0.6 ? 'bg-yellow-500' :
                          'bg-orange-500'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${readinessScore * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Results Section - Now in 3 columns */}
                <div className={`pt-4`}>
                  <h3 className={`text-base font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    Your Revenue Leak Analysis
                  </h3>

                  <div className="grid lg:grid-cols-3 gap-4 mb-4">
                    {/* Column 1: Total Leak */}
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={`p-4 rounded-xl ${
                        isDark
                          ? 'bg-red-950/30 border border-red-900/50'
                          : 'bg-red-50 border border-red-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <h4 className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Annual Revenue Leak
                        </h4>
                      </div>
                      <div className={`text-2xl font-bold text-red-500 mb-3`}>
                        {formatCurrency(calculations.totalLeak)}
                      </div>

                      {/* Mini Breakdown */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Preventable Churn</span>
                          <span className={`text-xs font-bold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {formatCurrency(calculations.preventableChurn)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Missed Expansion</span>
                          <span className={`text-xs font-bold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {formatCurrency(calculations.missedExpansion)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Wasted Capacity</span>
                          <span className={`text-xs font-bold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {formatCurrency(calculations.wastedCost)}
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Column 2: How We Recover It */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className={`p-4 rounded-xl ${
                        isDark ? 'bg-gray-950 border border-gray-800' : 'bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <h4 className={`text-xs font-semibold mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        How CoreShift Recovers It
                      </h4>

                      <div className="space-y-2.5">
                        <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          <div className="font-semibold text-brand-orange mb-1">1. Early Warning System</div>
                          <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                            ML models predict churn 90 days ahead using health scores, usage patterns, and sentiment analysis
                          </div>
                        </div>

                        <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          <div className="font-semibold text-brand-orange mb-1">2. Expansion Signals</div>
                          <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                            Automated identification of upsell opportunities based on product adoption and success metrics
                          </div>
                        </div>

                        <div className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          <div className="font-semibold text-brand-orange mb-1">3. Workflow Automation</div>
                          <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                            Playbooks that auto-trigger interventions, eliminating manual work and ensuring consistent execution
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Column 3: ROI Projection */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className={`p-4 rounded-xl ${
                        isDark
                          ? 'bg-gradient-to-br from-brand-orange/20 to-orange-600/20 border border-brand-orange/30'
                          : 'bg-gradient-to-br from-brand-orange/10 to-orange-100 border border-brand-orange/30'
                      }`}
                    >
                      <h4 className={`text-xs font-semibold mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Your Potential Recovery
                      </h4>

                      <div className="text-center mb-3">
                        <div className="text-2xl font-bold text-brand-orange mb-1">
                          {formatCurrency(calculations.totalROI * readinessScore * 0.7)} - {formatCurrency(calculations.totalROI * readinessScore)}
                        </div>
                        <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Year 1 • {(readinessScore * 100).toFixed(0)}% readiness
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="text-center">
                          <div className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                            {formatCurrency(calculations.churnReduction)}
                          </div>
                          <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                            Churn
                          </div>
                        </div>
                        <div className="text-center">
                          <div className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                            {formatCurrency(calculations.expansionIncrease)}
                          </div>
                          <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                            Expansion
                          </div>
                        </div>
                        <div className="text-center">
                          <div className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                            {formatCurrency(calculations.efficiencyGain)}
                          </div>
                          <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                            Efficiency
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className={`text-xs mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          <span className="font-bold text-brand-orange">{calculations.roiMultiple}x</span> ROI on $15K
                        </div>
                        <a
                          href="/blueprint"
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-orange text-white rounded-lg font-semibold text-xs hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg w-full justify-center"
                        >
                          Get Custom Blueprint
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </motion.div>
                  </div>

                  {/* Disclaimer */}
                  <div className={`mt-3 text-xs text-center ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    Estimates based on {(readinessScore * 100).toFixed(0)}% readiness score, industry benchmarks, and 6-12 month timeline. <a href="/blueprint" className="text-brand-orange hover:underline font-medium">Get Blueprint</a> to validate your specific potential.
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
