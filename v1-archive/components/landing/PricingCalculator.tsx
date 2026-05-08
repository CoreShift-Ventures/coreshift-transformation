// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Check, Info } from 'lucide-react';

type HostingModel = 'customer' | 'managed';

export function PricingCalculator() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Calculator inputs
  const [arr, setArr] = useState(5); // in millions
  const [teamSize, setTeamSize] = useState(5);
  const [customerCount, setCustomerCount] = useState(150);
  const [hostingModel, setHostingModel] = useState<HostingModel>('customer');

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  // Pricing logic with transparent calculation
  const calculatePricing = () => {
    // Base platform build cost (one-time)
    let baseBuildCost = 0;
    if (arr < 2) baseBuildCost = 15000;
    else if (arr < 5) baseBuildCost = 20000;
    else if (arr < 10) baseBuildCost = 30000;
    else if (arr < 25) baseBuildCost = 40000;
    else baseBuildCost = 50000;

    // Implementation cost based on complexity
    let implementationCost = 0;
    const complexity = teamSize * 100 + customerCount * 10;
    if (complexity < 1500) implementationCost = 5000;
    else if (complexity < 3000) implementationCost = 8000;
    else if (complexity < 5000) implementationCost = 12000;
    else implementationCost = 15000;

    // Infrastructure costs (annual)
    let infrastructureCost = 0;
    if (hostingModel === 'customer') {
      // Customer-owned: they pay their cloud provider directly
      // We estimate their cost for transparency
      if (arr < 5) infrastructureCost = 3600; // ~$300/mo
      else if (arr < 10) infrastructureCost = 6000; // ~$500/mo
      else if (arr < 25) infrastructureCost = 12000; // ~$1000/mo
      else infrastructureCost = 18000; // ~$1500/mo
    } else {
      // CoreShift-managed: we charge for hosting + margin
      if (arr < 5) infrastructureCost = 6000; // ~$500/mo
      else if (arr < 10) infrastructureCost = 9600; // ~$800/mo
      else if (arr < 25) infrastructureCost = 18000; // ~$1500/mo
      else infrastructureCost = 30000; // ~$2500/mo
    }

    // Support & maintenance (annual)
    let supportCost = baseBuildCost * 0.20; // 20% of build cost annually

    // Traditional SaaS comparison
    let traditionalSaasCost = 0;
    if (arr < 5) traditionalSaasCost = 50000;
    else if (arr < 10) traditionalSaasCost = 80000;
    else if (arr < 25) traditionalSaasCost = 120000;
    else traditionalSaasCost = 160000;

    return {
      year1: {
        baseBuild: baseBuildCost,
        implementation: implementationCost,
        infrastructure: infrastructureCost,
        support: supportCost,
        total: baseBuildCost + implementationCost + infrastructureCost + supportCost
      },
      year3: {
        infrastructure: infrastructureCost * 3,
        support: supportCost * 3,
        total: baseBuildCost + implementationCost + (infrastructureCost * 3) + (supportCost * 3)
      },
      traditionalSaaS: {
        year1: traditionalSaasCost,
        year3: traditionalSaasCost * 3
      },
      savings: {
        year1: traditionalSaasCost - (baseBuildCost + implementationCost + infrastructureCost + supportCost),
        year3: (traditionalSaasCost * 3) - (baseBuildCost + implementationCost + (infrastructureCost * 3) + (supportCost * 3))
      }
    };
  };

  const pricing = calculatePricing();
  const savingsPercent = Math.round((pricing.savings.year3 / pricing.traditionalSaaS.year3) * 100);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const sliderClass = `w-full h-2 rounded-lg appearance-none cursor-pointer ${
    isDark ? 'bg-gray-800' : 'bg-gray-200'
  } [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-orange [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-brand-orange [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0`;

  return (
    <section className={`py-16 px-6 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Transparent Pricing Calculator
          </h2>
          <p className={`text-sm max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Adjust the inputs below to see exactly how we calculate your investment. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-xl ${
              isDark
                ? 'bg-gray-900 border border-gray-800'
                : 'bg-white border border-gray-200 shadow-lg'
            }`}
          >
            <h3 className={`text-lg font-bold mb-6 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              Your Business Parameters
            </h3>

            <div className="space-y-8">
              {/* ARR Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Annual Recurring Revenue
                  </label>
                  <span className={`text-sm font-bold ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`}>
                    ${arr}M
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={arr}
                  onChange={(e) => setArr(Number(e.target.value))}
                  className={sliderClass}
                />
                <div className={`flex justify-between text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  <span>$1M</span>
                  <span>$50M</span>
                </div>
              </div>

              {/* Team Size Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    CS Team Size
                  </label>
                  <span className={`text-sm font-bold ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`}>
                    {teamSize} CSMs
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className={sliderClass}
                />
                <div className={`flex justify-between text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  <span>1 CSM</span>
                  <span>50 CSMs</span>
                </div>
              </div>

              {/* Customer Count Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Number of Customers
                  </label>
                  <span className={`text-sm font-bold ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`}>
                    {customerCount}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={customerCount}
                  onChange={(e) => setCustomerCount(Number(e.target.value))}
                  className={sliderClass}
                />
                <div className={`flex justify-between text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  <span>10</span>
                  <span>1000+</span>
                </div>
              </div>

              {/* Hosting Model Toggle */}
              <div>
                <label className={`block text-sm font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Hosting Model
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setHostingModel('customer')}
                    className={`p-4 rounded-lg text-sm font-semibold transition-all border-2 ${
                      hostingModel === 'customer'
                        ? 'border-brand-orange bg-brand-orange/10 text-brand-orange'
                        : isDark
                          ? 'border-gray-800 bg-gray-950 text-gray-400 hover:border-gray-700'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    Your Cloud
                  </button>
                  <button
                    onClick={() => setHostingModel('managed')}
                    className={`p-4 rounded-lg text-sm font-semibold transition-all border-2 ${
                      hostingModel === 'managed'
                        ? 'border-brand-orange bg-brand-orange/10 text-brand-orange'
                        : isDark
                          ? 'border-gray-800 bg-gray-950 text-gray-400 hover:border-gray-700'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    CoreShift Managed
                  </button>
                </div>
                <p className={`text-xs mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  {hostingModel === 'customer'
                    ? 'One-time build. Support is optional after Year 1. Platform keeps running even if you stop paying support (frozen, no updates).'
                    : 'Traditional SaaS subscription model. Required monthly/annual payments. Platform stops if you stop paying.'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Pricing Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* CoreShift Pricing */}
            <div className={`p-8 rounded-xl border-2 ${
              isDark
                ? 'bg-gray-900 border-brand-orange'
                : 'bg-white border-brand-orange shadow-xl'
            }`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-lg font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  CoreShift Engine
                </h3>
                <span className="px-3 py-1 bg-brand-orange text-white text-xs font-bold rounded-full">
                  {savingsPercent}% SAVINGS
                </span>
              </div>

              {/* Year 1 Breakdown */}
              <div className="space-y-3 mb-6">
                <div className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  YEAR 1 INVESTMENT
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Platform Build (one-time)</span>
                    <span className={isDark ? 'text-gray-100' : 'text-gray-900'}>{formatCurrency(pricing.year1.baseBuild)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Implementation</span>
                    <span className={isDark ? 'text-gray-100' : 'text-gray-900'}>{formatCurrency(pricing.year1.implementation)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Infrastructure (Year 1)</span>
                    <span className={isDark ? 'text-gray-100' : 'text-gray-900'}>{formatCurrency(pricing.year1.infrastructure)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Support & Maintenance</span>
                    <span className={isDark ? 'text-gray-100' : 'text-gray-900'}>{formatCurrency(pricing.year1.support)}</span>
                  </div>
                </div>
                <div className={`pt-3 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                  <div className="flex justify-between items-center">
                    <span className={`font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>Year 1 Total</span>
                    <span className="text-xl font-bold text-brand-orange">{formatCurrency(pricing.year1.total)}</span>
                  </div>
                </div>
              </div>

              {/* 3-Year Total */}
              <div className={`pt-6 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className={`text-xs font-semibold mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  3-YEAR TOTAL COST
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className={`font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>Total Investment</span>
                  <span className="text-2xl font-bold text-brand-orange">{formatCurrency(pricing.year3.total)}</span>
                </div>
                <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  {hostingModel === 'customer'
                    ? 'Includes one-time build, 3 years infrastructure & optional support'
                    : 'Includes 3 years of managed hosting & required subscription'}
                </div>
              </div>
            </div>

            {/* Traditional SaaS Comparison */}
            <div className={`p-6 rounded-xl ${
              isDark
                ? 'bg-gray-900 border border-gray-800'
                : 'bg-gray-50 border border-gray-200'
            }`}>
              <div className="flex items-start gap-2 mb-4">
                <Info className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                <div>
                  <div className={`text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Traditional CS SaaS Comparison
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className={isDark ? 'text-gray-500' : 'text-gray-600'}>Year 1 Cost:</span>
                      <span className={isDark ? 'text-gray-400' : 'text-gray-700'}>{formatCurrency(pricing.traditionalSaaS.year1)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDark ? 'text-gray-500' : 'text-gray-600'}>3-Year Cost:</span>
                      <span className={isDark ? 'text-gray-400' : 'text-gray-700'}>{formatCurrency(pricing.traditionalSaaS.year3)}</span>
                    </div>
                    <div className={`pt-2 border-t ${isDark ? 'border-gray-800' : 'border-gray-300'}`}>
                      <div className="flex justify-between font-bold">
                        <span className="text-green-500">Your Savings:</span>
                        <span className="text-green-500">{formatCurrency(pricing.savings.year3)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className={`p-6 rounded-xl ${
              isDark
                ? 'bg-gray-900 border border-gray-800'
                : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <div className={`text-sm font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                What's Included
              </div>
              <div className="space-y-2">
                {hostingModel === 'customer' ? [
                  'One-time platform build (not recurring license)',
                  'Complete data control on your infrastructure',
                  'All AI models & churn prediction algorithms',
                  'Custom integrations & workflows',
                  'Platform keeps running if you drop support',
                  'Optional updates & support after Year 1'
                ] : [
                  'Managed hosting on CoreShift infrastructure',
                  'Required monthly/annual subscription',
                  'All AI models & churn prediction algorithms',
                  'Custom integrations & workflows',
                  '24/7 technical support & monitoring',
                  'Ongoing platform updates & improvements'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Want to discuss your specific requirements?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/audit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-lg font-semibold text-sm hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg"
            >
              Get Free Revenue Audit
            </a>
            <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105 ${
              isDark
                ? 'bg-gray-800 text-white border border-gray-700 hover:border-brand-orange'
                : 'bg-white text-brand-charcoal border border-gray-200 hover:border-brand-orange shadow-lg'
            }`}>
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
