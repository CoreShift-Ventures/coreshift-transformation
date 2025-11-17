'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { DollarSign, TrendingDown, Zap, Check, X } from 'lucide-react';

const comparison = {
  traditional: {
    name: 'Traditional CS SaaS',
    examples: 'Gainsight, Totango, ChurnZero',
    color: 'text-red-500',
    costs: [
      { label: 'Annual Subscription', amount: '$50K - $120K', recurring: true },
      { label: 'Implementation', amount: '$15K - $30K', recurring: false },
      { label: 'Training & Onboarding', amount: '$5K - $10K', recurring: false },
      { label: 'Year 1 Total', amount: '$70K - $160K', highlight: true },
      { label: '3-Year Total', amount: '$210K - $480K', highlight: true }
    ],
    downsides: [
      'Vendor lock-in',
      'Limited customization',
      'Data stays on their servers',
      'Recurring annual costs forever',
      'One-size-fits-all features'
    ]
  },
  coreshift: {
    name: 'CoreShift Model',
    examples: 'Own Your Infrastructure',
    color: 'text-brand-orange',
    costs: [
      { label: 'Blueprint (Optional)', amount: '$1,000', recurring: false },
      { label: 'Platform Build', amount: '$10K - $15K', recurring: false },
      { label: 'Cloud Hosting (Annual)', amount: '$6K - $24K', recurring: true },
      { label: 'Year 1 Total', amount: '$17K - $40K', highlight: true },
      { label: '3-Year Total', amount: '$28K - $88K', highlight: true }
    ],
    upsides: [
      'Own forever, no vendor lock-in',
      'Fully customizable',
      'Your data, your cloud',
      'One-time build cost',
      'Tailored to your business'
    ]
  }
};

const savingsCalculator = {
  year1: { traditional: 115000, coreshift: 28500, savings: 86500 },
  year3: { traditional: 345000, coreshift: 58000, savings: 287000 },
  year5: { traditional: 575000, coreshift: 88000, savings: 487000 }
};

export function PricingTransparencySection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useState(() => {
    setMounted(true);
  });

  const isDark = mounted && theme === 'dark';

  return (
    <section className={`py-24 px-6 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6"
          >
            <DollarSign className="w-4 h-4 text-brand-orange" />
            <span className="text-sm font-semibold text-brand-orange">
              Transparent Pricing
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
          >
            The Real Cost of Customer Success Infrastructure
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-base max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Side-by-side comparison: Traditional SaaS subscriptions vs. owned infrastructure
          </motion.p>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Traditional SaaS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`p-8 rounded-2xl ${
              isDark
                ? 'bg-gray-900 border border-red-900/30'
                : 'bg-white border border-red-200 shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <TrendingDown className={`w-6 h-6 ${comparison.traditional.color}`} />
              <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                {comparison.traditional.name}
              </h3>
            </div>
            <p className={`text-sm mb-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              {comparison.traditional.examples}
            </p>

            {/* Costs */}
            <div className="space-y-3 mb-8">
              {comparison.traditional.costs.map((cost, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between py-2 ${
                    cost.highlight
                      ? isDark
                        ? 'border-t-2 border-red-900/50 pt-4 mt-4'
                        : 'border-t-2 border-red-200 pt-4 mt-4'
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`text-sm ${cost.highlight ? 'font-bold' : 'font-medium'} ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {cost.label}
                    </span>
                    {cost.recurring && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        isDark ? 'bg-red-950/50 text-red-400' : 'bg-red-50 text-red-600'
                      }`}>
                        Annual
                      </span>
                    )}
                  </div>
                  <span className={`${cost.highlight ? 'text-lg font-bold' : 'text-base font-semibold'} ${
                    isDark ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    {cost.amount}
                  </span>
                </div>
              ))}
            </div>

            {/* Downsides */}
            <div className={`pt-6 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
              <h4 className={`text-sm font-semibold mb-3 uppercase tracking-wide ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                Trade-offs
              </h4>
              <ul className="space-y-2">
                {comparison.traditional.downsides.map((downside, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <X className={`w-4 h-4 flex-shrink-0 mt-0.5 ${comparison.traditional.color}`} />
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {downside}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* CoreShift Model */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`p-8 rounded-2xl relative ${
              isDark
                ? 'bg-gray-900 border-2 border-brand-orange shadow-2xl'
                : 'bg-white border-2 border-brand-orange shadow-2xl'
            }`}
          >
            {/* Recommended Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold bg-brand-orange text-white shadow-lg">
                75-85% SAVINGS
              </span>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <Zap className={`w-6 h-6 ${comparison.coreshift.color}`} />
              <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                {comparison.coreshift.name}
              </h3>
            </div>
            <p className={`text-sm mb-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              {comparison.coreshift.examples}
            </p>

            {/* Costs */}
            <div className="space-y-3 mb-8">
              {comparison.coreshift.costs.map((cost, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between py-2 ${
                    cost.highlight
                      ? isDark
                        ? 'border-t-2 border-brand-orange/50 pt-4 mt-4'
                        : 'border-t-2 border-brand-orange/50 pt-4 mt-4'
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`text-sm ${cost.highlight ? 'font-bold' : 'font-medium'} ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {cost.label}
                    </span>
                    {cost.recurring && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        isDark ? 'bg-brand-orange/20 text-brand-orange' : 'bg-brand-orange/10 text-brand-orange'
                      }`}>
                        Annual
                      </span>
                    )}
                  </div>
                  <span className={`${cost.highlight ? 'text-lg font-bold' : 'text-base font-semibold'} ${
                    isDark ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    {cost.amount}
                  </span>
                </div>
              ))}
            </div>

            {/* Upsides */}
            <div className={`pt-6 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
              <h4 className={`text-sm font-semibold mb-3 uppercase tracking-wide ${
                isDark ? 'text-gray-500' : 'text-gray-600'
              }`}>
                Benefits
              </h4>
              <ul className="space-y-2">
                {comparison.coreshift.upsides.map((upside, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${comparison.coreshift.color}`} />
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {upside}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Savings Over Time */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`p-10 rounded-2xl ${
            isDark
              ? 'bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800'
              : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xl'
          }`}
        >
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              Your Savings Over Time
            </h3>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Average mid-market company comparison
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(savingsCalculator).map(([period, data], index) => (
              <motion.div
                key={period}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl text-center ${
                  isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
                }`}
              >
                <div className={`text-sm font-semibold uppercase tracking-wide mb-3 ${
                  isDark ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  {period === 'year1' ? 'Year 1' : period === 'year3' ? 'Year 3' : 'Year 5'}
                </div>
                <div className={`text-3xl font-bold mb-2 text-brand-orange`}>
                  ${(data.savings / 1000).toFixed(0)}K
                </div>
                <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                  Total Savings
                </div>
                <div className={`mt-4 pt-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                  <div className={`text-xs mb-1 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                    CoreShift: ${(data.coreshift / 1000).toFixed(0)}K
                  </div>
                  <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                    Traditional: ${(data.traditional / 1000).toFixed(0)}K
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className={`text-base mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Ready to own your infrastructure and save 75%+ on CS technology costs?
          </p>
          <a
            href="#three-paths"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-xl font-semibold text-base hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Your Transformation Path
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
