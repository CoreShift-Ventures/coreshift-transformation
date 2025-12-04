// @ts-nocheck
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { TrendingUp, Clock } from 'lucide-react';

export function CaseStudies() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState(0);

  const cases = [
    {
      tab: 'Automotive',
      title: 'Automotive Marketplace',
      subtitle: 'Lead Management Transformation',
      industry: 'B2C Automotive Platform',
      challenge: '200+ daily leads drowning in spreadsheets, 40% opportunities lost to manual chaos',
      results: [
        { label: 'Response Time', value: '3x faster', sublabel: '2 hours → 20 minutes' },
        { label: 'Conversion Rate', value: '+35%', sublabel: 'From better follow-up' },
        { label: 'Time Saved', value: '15h/week', sublabel: 'Per sales rep' }
      ],
      timeline: '2-week strategy → 5-week live system'
    },
    {
      tab: 'Venture Capital',
      title: 'Venture Capital Firm',
      subtitle: 'Investor Relations Automation',
      industry: 'Early-Stage VC Fund',
      challenge: 'Manual investor reporting, scattered deal tracking, no centralized process',
      results: [
        { label: 'Manual Work', value: '-90%', sublabel: 'Report automation' },
        { label: 'Investor NPS', value: '+40pts', sublabel: 'Professional experience' },
        { label: 'Insights', value: 'Real-time', sublabel: 'Portfolio analytics' }
      ],
      timeline: '1-week strategy → 4-week live system'
    },
    {
      tab: 'Service Business',
      title: 'Professional Services Firm',
      subtitle: 'Operations Workflow Transformation',
      industry: 'B2B Consulting Services',
      challenge: 'Email approval chains, project status black holes, revenue slipping through gaps',
      results: [
        { label: 'Project Velocity', value: '+50%', sublabel: 'Faster delivery cycles' },
        { label: 'Revenue Recovery', value: '+25%', sublabel: 'Better renewals' },
        { label: 'Efficiency Gain', value: '20h/week', sublabel: 'Team capacity freed' }
      ],
      timeline: '2-week strategy → 6-week live system'
    }
  ];

  return (
    <section className={`py-16 px-6 relative ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
          >
            Real Process <span className="text-[#ec5f2b]">Transformations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-sm max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}
          >
            From manual chaos to automated excellence
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 relative">
          {cases.map((caseStudy, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative px-6 py-3 rounded-lg font-semibold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 ${
                activeTab === index
                  ? 'text-[#ec5f2b]'
                  : isDark
                  ? 'text-gray-400 hover:text-gray-100 focus-visible:ring-offset-black'
                  : 'text-gray-600 hover:text-gray-900 focus-visible:ring-offset-white'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-pressed={activeTab === index}
            >
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#ec5f2b]/10 border-2 border-[#ec5f2b] rounded-lg"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{caseStudy.tab}</span>
            </motion.button>
          ))}
        </div>

        {/* Active Case Study */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={`rounded-2xl p-6 border ${
              isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
            } shadow-lg`}
            initial={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <div className="mb-4">
                  <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {cases[activeTab].title}
                  </h3>
                  <p className="text-sm text-[#ec5f2b] font-semibold mb-1">{cases[activeTab].subtitle}</p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{cases[activeTab].industry}</p>
                </div>

                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Challenge</h4>
                  <p className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{cases[activeTab].challenge}</p>
                </div>
              </div>

              <div>
                <h4 className={`text-sm font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Results</h4>
                <div className="space-y-3 mb-4">
                  {cases[activeTab].results.map((result, idx) => (
                    <div key={idx} className={`rounded-xl p-4 border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                      <div className={`text-sm mb-1 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>{result.label}</div>
                      <div className="text-3xl font-bold text-[#ec5f2b] mb-1">{result.value}</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{result.sublabel}</div>
                    </div>
                  ))}
                </div>

                <div className={`p-4 rounded-xl border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-[#ec5f2b]" />
                    <h4 className={`text-sm font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Timeline</h4>
                  </div>
                  <p className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{cases[activeTab].timeline}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
