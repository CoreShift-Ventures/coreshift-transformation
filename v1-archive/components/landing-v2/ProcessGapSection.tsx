// @ts-nocheck
'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FileSpreadsheet, Package, Clock, Building2, AlertTriangle } from 'lucide-react';

export function ProcessGapSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const failedApproaches = [
    {
      icon: FileSpreadsheet,
      title: 'Manual & Fragmented',
      problems: [
        'Spreadsheets, emails, disconnected tools',
        'Human bottlenecks slow everything',
        'Errors cost deals and customers'
      ],
      conclusion: "You can't scale broken processes"
    },
    {
      icon: Package,
      title: 'Rigid SaaS Platforms',
      problems: [
        'Force you to change YOUR proven process',
        'Generic workflows that don\'t fit',
        'Expensive per-seat pricing limits growth'
      ],
      conclusion: 'Conforming kills your competitive advantage'
    },
    {
      icon: Clock,
      title: 'Traditional Custom Development',
      problems: [
        '6-18 month development cycles',
        '₹20-50L+ budgets with uncertain outcomes',
        'By launch, your needs have changed'
      ],
      conclusion: 'Speed matters. Waiting costs revenue.'
    },
    {
      icon: Building2,
      title: 'Enterprise Consulting Firms',
      problems: [
        'Months of analysis, PowerPoints, roadmaps',
        'Implementation is someone else\'s problem',
        '₹50L+ for strategy, then ₹2Cr+ to build'
      ],
      conclusion: 'You need execution, not just strategy'
    }
  ];

  return (
    <section className={`py-16 px-6 relative ${isDark ? 'bg-black' : 'bg-white'}`}>
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
            Why Traditional Approaches <span className="text-red-600">Fail</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-sm max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}
          >
            Your business processes are stuck between outdated methods and inflexible solutions
          </motion.p>
        </div>

        {/* Failed Approaches Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {failedApproaches.map((approach, index) => {
            const Icon = approach.icon;

            return (
              <motion.div
                key={index}
                className={`rounded-2xl p-6 border transition-all hover:scale-[1.02] ${
                  isDark
                    ? 'bg-gray-900 border-gray-800 hover:border-gray-700'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                } shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Icon Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <Icon className="w-6 h-6 text-[#ec5f2b]" />
                  </div>
                  <h3 className={`text-lg font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {approach.title}
                  </h3>
                </div>

                {/* Problems */}
                <div className="space-y-2.5 mb-4">
                  {approach.problems.map((problem, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{problem}</p>
                    </div>
                  ))}
                </div>

                {/* Conclusion */}
                <div className={`pt-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                  <p className={`font-semibold italic ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                    → "{approach.conclusion}"
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* The Cost Statement */}
        <motion.div
          className={`rounded-2xl p-4 border text-center ${
            isDark
              ? 'bg-red-950/20 border-red-900/30'
              : 'bg-red-50 border-red-200'
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex justify-center mb-3">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            The Cost
          </h3>
          <p className={`text-sm max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Revenue leaked. Competitors move faster. Growth stalls.
            <br />
            <span className="text-[#ec5f2b] font-semibold">Every day you wait is another day of lost opportunity.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
