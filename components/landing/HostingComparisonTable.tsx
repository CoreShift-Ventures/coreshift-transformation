'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Check, X, AlertCircle } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  traditional: boolean | string;
  managed: boolean | string;
  customerOwned: boolean | string;
  highlight?: boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: 'Pricing Model',
    traditional: 'Recurring subscription',
    managed: 'Recurring subscription',
    customerOwned: 'One-time build',
    highlight: true
  },
  {
    feature: 'Year 1 Cost (for $5M ARR)',
    traditional: '$50K-80K',
    managed: '$30K-40K',
    customerOwned: '$20K-30K',
    highlight: true
  },
  {
    feature: 'Year 2-3 Cost',
    traditional: '$50K-80K/year',
    managed: '$15K-25K/year',
    customerOwned: '$6K-12K/year (optional)',
    highlight: true
  },
  {
    feature: 'Support After Year 1',
    traditional: 'Required (stops if you stop paying)',
    managed: 'Required (stops if you stop paying)',
    customerOwned: 'Optional (platform keeps running)',
    highlight: true
  },
  {
    feature: 'Data Location',
    traditional: 'Vendor cloud',
    managed: 'Your cloud (isolated)',
    customerOwned: 'Your cloud (isolated)'
  },
  {
    feature: 'Data Control',
    traditional: 'Limited access',
    managed: 'Full access',
    customerOwned: 'Full access'
  },
  {
    feature: 'Infrastructure Control',
    traditional: false,
    managed: 'Managed by CoreShift',
    customerOwned: 'Managed by you'
  },
  {
    feature: 'Platform Customization',
    traditional: 'Limited',
    managed: 'Customizable',
    customerOwned: 'Fully customizable'
  },
  {
    feature: 'Vendor Lock-in',
    traditional: 'High',
    managed: 'Low',
    customerOwned: 'None'
  },
  {
    feature: 'Setup Time',
    traditional: '2-4 weeks',
    managed: '4 weeks',
    customerOwned: '4 weeks'
  },
  {
    feature: 'Technical Support',
    traditional: 'Business hours',
    managed: '24/7',
    customerOwned: '24/7 (with support)'
  },
  {
    feature: 'Platform Updates',
    traditional: true,
    managed: true,
    customerOwned: 'With support only'
  },
  {
    feature: 'Best For',
    traditional: 'Quick start, less control',
    managed: '70% savings, managed service',
    customerOwned: 'Maximum savings & control'
  }
];

export function HostingComparisonTable() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" strokeWidth={3} />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" strokeWidth={3} />
      );
    }
    return <span className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{value}</span>;
  };

  return (
    <section className={`py-24 px-6 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Choose Your Hosting Model
          </h2>
          <p className={`text-base max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Compare traditional SaaS, CoreShift-managed, and customer-owned deployment options
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className={`rounded-2xl border-2 overflow-hidden ${
            isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white shadow-2xl'
          }`}>
            {/* Table Header */}
            <div className={`grid grid-cols-4 gap-4 p-6 ${
              isDark ? 'bg-gray-950 border-b border-gray-800' : 'bg-gray-50 border-b border-gray-200'
            }`}>
              <div className={`text-sm font-bold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Feature
              </div>
              <div className="text-center">
                <div className={`text-sm font-bold mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Traditional SaaS
                </div>
                <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  (Gainsight, Totango, etc.)
                </div>
              </div>
              <div className="text-center">
                <div className={`text-sm font-bold mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  CoreShift Managed
                </div>
                <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  (Your cloud, we manage)
                </div>
              </div>
              <div className="text-center">
                <div className="relative inline-block">
                  <div className={`text-sm font-bold mb-1 ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`}>
                    Customer Owned
                  </div>
                  <div className="absolute -top-2 -right-8">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-orange text-white">
                      RECOMMENDED
                    </span>
                  </div>
                </div>
                <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  (Your cloud, your control)
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-800">
              {comparisonData.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`grid grid-cols-4 gap-4 p-6 ${
                    row.highlight
                      ? isDark
                        ? 'bg-brand-orange/5'
                        : 'bg-brand-orange/5'
                      : ''
                  }`}
                >
                  {/* Feature Name */}
                  <div className="flex items-center gap-2">
                    {row.highlight && (
                      <AlertCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                    )}
                    <span className={`text-sm font-semibold ${
                      row.highlight
                        ? 'text-brand-orange'
                        : isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {row.feature}
                    </span>
                  </div>

                  {/* Traditional SaaS */}
                  <div className="flex items-center justify-center">
                    {renderCell(row.traditional)}
                  </div>

                  {/* CoreShift Managed */}
                  <div className="flex items-center justify-center">
                    {renderCell(row.managed)}
                  </div>

                  {/* Customer Owned */}
                  <div className={`flex items-center justify-center ${
                    row.highlight ? 'font-semibold' : ''
                  }`}>
                    {renderCell(row.customerOwned)}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer with Key Message */}
            <div className={`p-6 ${
              isDark
                ? 'bg-gradient-to-r from-brand-orange/10 to-orange-900/10 border-t border-gray-800'
                : 'bg-gradient-to-r from-brand-orange/5 to-orange-100/50 border-t border-gray-200'
            }`}>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className={`text-sm font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    Key Difference: What happens when you stop paying?
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Traditional SaaS:
                      </span>
                      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                        {' '}Platform stops. Lose all access.
                      </span>
                    </div>
                    <div>
                      <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        CoreShift Managed:
                      </span>
                      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                        {' '}Platform stops. Subscription required.
                      </span>
                    </div>
                    <div>
                      <span className={`font-semibold text-brand-orange`}>
                        Customer Owned:
                      </span>
                      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                        {' '}Platform keeps running (frozen, no updates).
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Not sure which model is right for you? Start with a free audit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/audit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-lg font-semibold text-sm hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg"
            >
              Get Free Revenue Audit
            </a>
            <a
              href="/platform"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105 ${
                isDark
                  ? 'bg-gray-800 text-white border border-gray-700 hover:border-brand-orange'
                  : 'bg-white text-brand-charcoal border border-gray-200 hover:border-brand-orange shadow-lg'
              }`}
            >
              Explore Platform
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
