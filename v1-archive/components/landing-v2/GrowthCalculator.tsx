// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

export function GrowthCalculator() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [leads, setLeads] = useState(100);
  const [conversionRate, setConversionRate] = useState(15);
  const [dealValue, setDealValue] = useState(500000);
  const [manualHours, setManualHours] = useState(20);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  // Calculations
  const currentRevenue = (leads * conversionRate / 100) * dealValue;
  const improvedConversionRate = conversionRate + (conversionRate * 0.25);
  const improvedRevenue = (leads * improvedConversionRate / 100) * dealValue;
  const revenueGain = improvedRevenue - currentRevenue;
  const annualRevenueGain = revenueGain * 12;
  const hoursSaved = manualHours * 0.6;
  const retentionImprovement = 15;
  const salesCycleImprovement = 35;

  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} L`;
    } else {
      return `₹${value.toLocaleString('en-IN')}`;
    }
  };

  return (
    <section id="growth-calculator" className={`py-16 px-6 relative ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
          >
            What Could <span className="text-[#ec5f2b]">Optimized Processes</span> Unlock?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-sm max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}
          >
            See the real impact of transforming your business processes with AI-powered automation
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Input Section */}
          <motion.div
            className={`rounded-2xl p-6 border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              <Users className="w-6 h-6 text-[#ec5f2b]" />
              Your Current State
            </h3>

            <div className="space-y-3">
              {/* Monthly Leads */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Monthly leads handled
                </label>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={leads}
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ec5f2b]"
                />
                <div className="flex justify-between mt-2">
                  <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>10</span>
                  <span className="text-lg font-semibold text-[#ec5f2b]">{leads}</span>
                  <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>1000</span>
                </div>
              </div>

              {/* Conversion Rate */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Current conversion rate (%)
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ec5f2b]"
                />
                <div className="flex justify-between mt-2">
                  <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>5%</span>
                  <span className="text-lg font-semibold text-[#ec5f2b]">{conversionRate}%</span>
                  <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>50%</span>
                </div>
              </div>

              {/* Average Deal Value */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Average deal value (₹)
                </label>
                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="50000"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ec5f2b]"
                />
                <div className="flex justify-between mt-2">
                  <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>₹50K</span>
                  <span className="text-lg font-semibold text-[#ec5f2b]">{formatCurrency(dealValue)}</span>
                  <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>₹50L</span>
                </div>
              </div>

              {/* Manual Hours */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Manual process hours per week
                </label>
                <input
                  type="range"
                  min="5"
                  max="80"
                  step="5"
                  value={manualHours}
                  onChange={(e) => setManualHours(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ec5f2b]"
                />
                <div className="flex justify-between mt-2">
                  <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>5h</span>
                  <span className="text-lg font-semibold text-[#ec5f2b]">{manualHours}h</span>
                  <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>80h</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            className={`rounded-2xl p-6 border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              <TrendingUp className="w-6 h-6 text-[#ec5f2b]" />
              With Transformed Processes, You Could Gain:
            </h3>

            <div className="space-y-3">
              {/* Revenue Gain */}
              <div className={`rounded-xl p-4 border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="w-4 h-4 text-[#ec5f2b]" />
                  <span className={`text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Additional Revenue/Year</span>
                </div>
                <div className="text-2xl font-bold text-[#ec5f2b] mb-1">
                  +{formatCurrency(annualRevenueGain)}
                </div>
                <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                  25% better conversion through automation
                </p>
              </div>

              {/* Time Saved */}
              <div className={`rounded-xl p-4 border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-[#ec5f2b]" />
                  <span className={`text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Time Saved/Week</span>
                </div>
                <div className="text-2xl font-bold text-[#ec5f2b] mb-1">
                  {hoursSaved.toFixed(1)} hours
                </div>
                <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                  AI-powered workflow automation
                </p>
              </div>

              {/* Retention */}
              <div className={`rounded-xl p-4 border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-[#ec5f2b]" />
                  <span className={`text-xs font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Better Retention</span>
                </div>
                <div className="text-2xl font-bold text-[#ec5f2b] mb-1">
                  +{retentionImprovement}%
                </div>
                <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                  Proactive process management
                </p>
              </div>
            </div>

            {/* Total Opportunity */}
            <div className="mt-4 p-4 bg-gradient-to-r from-[#ec5f2b]/10 to-[#ec5f2b]/5 rounded-xl border-2 border-[#ec5f2b]/20">
              <div className="text-center">
                <p className={`text-xs mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total Annual Opportunity</p>
                <div className="text-3xl font-bold text-[#ec5f2b] mb-3">
                  {formatCurrency(annualRevenueGain)}
                </div>
                <button className="w-full px-6 py-3 bg-brand-orange text-white rounded-lg font-semibold hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg">
                  See How We Transform Your Processes
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Note */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className={`text-lg md:text-xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            Most businesses see ROI in 3-6 months. <span className="text-[#ec5f2b]">What could you achieve?</span>
          </p>
          <p className={`text-sm ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
            * Calculations based on industry averages. Actual results vary by business and implementation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
