// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Rocket, Users, Sparkles, Zap, Globe, Briefcase, BarChart3 } from 'lucide-react';
import { useTheme } from 'next-themes';

// Pricing data structure
const INVESTMENT_OPTIONS = [
  {
    id: 'assess',
    name: 'Assess',
    tagline: 'Know Exactly Where You\'re Bleeding',
    badge: null,
    icon: Zap,
    iconColor: '#3b82f6',
    priceOriginal: { usd: 2500, inr: 75000 },
    priceEarlyAdopter: { usd: 1000, inr: 30000 },
    priceNote: 'One-time investment',
    timeline: '48-hour turnaround',
    ownership: 'Full report + roadmap ownership',
    features: [
      'Revenue Leak Audit & Maturity Assessment',
      'Custom transformation roadmap',
      'Module recommendations based on your maturity',
      'ROI projections & business case',
      'Prioritized action plan',
      '90-minute strategy session',
      'Risk identification & quantification'
    ],
    cta: 'Start Assessment',
    ctaLink: '/audit',
    primary: false
  },
  {
    id: 'build',
    name: 'Build',
    tagline: 'Fast Foundation in 2 Weeks',
    badge: 'Most Popular',
    icon: Rocket,
    iconColor: '#ec5f2b',
    priceOriginal: { usd: { min: 10000, max: 20000 }, inr: { min: 330000, max: 660000 } },
    priceEarlyAdopter: { usd: { min: 4000, max: 8000 }, inr: { min: 130000, max: 260000 } },
    priceNote: 'Based on complexity',
    timeline: '2 weeks implementation',
    isRange: true,
    ownership: 'You own it forever',
    features: [
      'Everything in Assess +',
      'Deploy 3-5 core modules (dashboard, health scoring, automation)',
      'Basic system integrations',
      'Team training & quick-start guide',
      '30 days post-launch support',
      'Platform deployed to your infrastructure',
      'Fast results to prove value'
    ],
    cta: 'Start Building',
    ctaLink: '/contact',
    primary: true
  },
  {
    id: 'shift',
    name: 'Shift',
    tagline: 'Complete Platform in 30 Days',
    badge: null,
    icon: Building2,
    iconColor: '#8b5cf6',
    priceOriginal: { usd: { min: 30000, max: 50000 }, inr: { min: 1500000, max: 2500000 } },
    priceEarlyAdopter: { usd: { min: 12000, max: 20000 }, inr: { min: 600000, max: 1000000 } },
    priceNote: 'Based on scope & complexity',
    timeline: '30 days implementation',
    isRange: true,
    ownership: 'You own it forever',
    features: [
      'Everything in Build +',
      'All maturity-appropriate modules activated',
      'Complete system integration (CRM, support, product)',
      'AI agent configuration & training',
      'Advanced workflow automation',
      'Comprehensive team training',
      '90 days post-launch support',
      'Deployed to your infrastructure, zero lock-in'
    ],
    cta: 'Get Custom Quote',
    ctaLink: '/audit',
    primary: false
  },
  {
    id: 'evolve',
    name: 'Evolve',
    tagline: 'Continuous Growth Partnership',
    badge: null,
    icon: Users,
    iconColor: '#10b981',
    priceOriginal: { usd: 350, inr: 12500 },
    priceEarlyAdopter: { usd: 140, inr: 5000 },
    priceNote: 'per hour',
    timeline: 'Flexible engagement',
    ownership: 'No minimums, cancel anytime',
    prerequisite: 'After Assess, Build, or Shift',
    isHourly: true,
    hourlyPackages: [
      { hours: 6, label: 'Starter' },
      { hours: 12, label: 'Growth' },
      { hours: 20, label: 'Strategic' }
    ],
    features: [
      'Flexible hours based on your needs',
      'Strategic advisory & roadmap planning',
      'Module optimization & new feature development',
      'Maturity progression support',
      'Executive reporting & insights',
      'Priority support & direct access',
      'No long-term commitments'
    ],
    cta: 'Learn More',
    ctaLink: '/contact',
    primary: false
  }
];

// Import Building2 icon
import { Building2 } from 'lucide-react';

export function InvestmentOwnershipSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currency, setCurrency] = useState<'usd' | 'inr'>('usd');
  const [isIndiaDetected, setIsIndiaDetected] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Auto-detect India based on timezone or locale
    const detectIndia = () => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const isIndia = timezone.includes('Kolkata') || timezone.includes('Calcutta') ||
                      navigator.language.includes('IN');

      if (isIndia) {
        setCurrency('inr');
        setIsIndiaDetected(true);
      }
    };

    detectIndia();
  }, []);

  const isDark = mounted && theme === 'dark';

  // Format price based on currency
  const formatPrice = (amount: number, curr: 'usd' | 'inr') => {
    if (curr === 'inr') {
      // Format INR in Lakhs for large amounts
      if (amount >= 100000) {
        const lakhs = amount / 100000;
        return `₹${lakhs}L`;
      }
      // Full number for amounts under 1 lakh
      return `₹${amount.toLocaleString('en-IN')}`;
    }
    // USD: Use K format for amounts >= $1,000 to save space
    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toLocaleString('en-US')}`;
  };

  return (
    <section id="pricing" className={`py-24 px-6 relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className={`inline-block px-4 py-2 rounded-full font-semibold text-sm mb-6 ${isDark ? 'bg-[#ec5f2b]/10 text-[#ec5f2b] border border-[#ec5f2b]/20' : 'bg-[#ec5f2b]/5 text-[#ec5f2b] border border-[#ec5f2b]/10'}`}
          >
            Investment & Ownership
          </motion.div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-5 leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            You Own the Deployment.<br />
            <span className="text-[#ec5f2b]">Not Rent Access.</span>
          </h2>
          <p className={`text-base max-w-3xl mx-auto font-light mb-6 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Fixed, transparent pricing. Platform deployed to YOUR infrastructure.
            No SaaS fees, no vendor lock-in. Pay once, runs forever.
          </p>

          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-3">
            <Globe className={`w-4 h-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
            <div className="inline-flex items-center gap-2 p-1 rounded-lg bg-white dark:bg-gray-900 border border-brand-border dark:border-gray-800">
              <button
                onClick={() => setCurrency('usd')}
                className={`px-4 py-1.5 rounded-md font-semibold text-sm transition-all ${
                  currency === 'usd'
                    ? 'bg-brand-orange text-white'
                    : isDark ? 'text-gray-400 hover:text-gray-200' : 'text-brand-gray hover:text-brand-charcoal'
                }`}
              >
                USD
              </button>
              <button
                onClick={() => setCurrency('inr')}
                className={`px-4 py-1.5 rounded-md font-semibold text-sm transition-all ${
                  currency === 'inr'
                    ? 'bg-brand-orange text-white'
                    : isDark ? 'text-gray-400 hover:text-gray-200' : 'text-brand-gray hover:text-brand-charcoal'
                }`}
              >
                INR
              </button>
            </div>
          </div>
        </motion.div>

        {/* Comparison Section - Aligned with Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              Why Start with Build?
            </h3>
            <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Same investment, vastly different outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Big 4 */}
            <div className={`rounded-xl p-8 border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200 shadow-lg'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-200'}`}>
                  <Briefcase className={`w-6 h-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} strokeWidth={1.5} />
                </div>
                <h4 className={`font-bold text-base ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>Big 4 Consulting</h4>
              </div>
              <p className={`text-sm font-semibold mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {currency === 'inr' ? '₹2-3 Lakhs' : '$6K'} gets you:
              </p>
              <ul className="space-y-3">
                <li className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>• 15-20 hours consultant time</li>
                <li className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>• PowerPoint strategy deck</li>
                <li className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>• No implementation</li>
                <li className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>• Junior analyst delivers</li>
                <li className={`text-sm text-red-500 font-semibold`}>• You own nothing</li>
              </ul>
            </div>

            {/* SaaS Vendors */}
            <div className={`rounded-xl p-8 border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200 shadow-lg'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-200'}`}>
                  <BarChart3 className={`w-6 h-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} strokeWidth={1.5} />
                </div>
                <h4 className={`font-bold text-base ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>SaaS Vendors</h4>
              </div>
              <p className={`text-sm font-semibold mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {currency === 'inr' ? '₹2-3 Lakhs' : '$6K'} gets you:
              </p>
              <ul className="space-y-3">
                <li className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>• 3-4 months subscription</li>
                <li className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>• Generic tool setup</li>
                <li className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>• Limited customization</li>
                <li className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>• Vendor lock-in</li>
                <li className={`text-sm text-red-500 font-semibold`}>• Pay forever or lose access</li>
              </ul>
            </div>

            {/* CoreShift Build */}
            <div className={`rounded-xl p-8 border-2 border-brand-orange ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl shadow-brand-orange/20' : 'bg-white shadow-xl shadow-brand-orange/10'}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-brand-orange/10 border border-brand-orange/20">
                  <Rocket className="w-6 h-6 text-[#ec5f2b]" strokeWidth={1.5} />
                </div>
                <h4 className={`font-bold text-base`}>
                  <span className={isDark ? 'text-white' : 'text-brand-charcoal'}>Core</span><span className="text-[#ec5f2b]">Shift</span><span className="text-[#ec5f2b]"> Build</span>
                </h4>
              </div>
              <p className={`text-sm font-semibold mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {currency === 'inr' ? '₹2 Lakhs' : '$6K'} gets you:
              </p>
              <ul className="space-y-3">
                <li className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>• Running platform in 2 weeks</li>
                <li className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>• 3-5 core modules deployed</li>
                <li className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>• Deployed to your infrastructure</li>
                <li className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>• Enterprise expertise</li>
                <li className={`text-sm text-emerald-500 font-bold`}>• Own it forever</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Investment Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {INVESTMENT_OPTIONS.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl p-6 flex flex-col h-full ${
                option.primary
                  ? isDark
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-brand-orange shadow-2xl shadow-brand-orange/20'
                    : 'bg-white border-2 border-brand-orange shadow-xl shadow-brand-orange/10'
                  : isDark
                  ? 'bg-gray-900 border border-gray-800 shadow-lg'
                  : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow'
              }`}
            >
              {/* Early Adopter Hanging Notice Badge */}
              <div className="absolute -top-2 -left-2 z-10">
                <div className="relative">
                  {/* Thread/String */}
                  <div className="absolute -top-3 left-8 w-[2px] h-8 bg-gradient-to-b from-gray-400 to-gray-500"></div>

                  {/* Pin/Tack */}
                  <div className="absolute -top-4 left-[30px] w-2.5 h-2.5 rounded-full bg-gray-600 shadow-md border-2 border-gray-500"></div>

                  {/* Notice Board - hanging at angle */}
                  <div className="relative bg-gradient-to-br from-emerald-500 to-green-600 text-white px-3 py-1.5 rounded-sm shadow-2xl transform -rotate-12 hover:-rotate-6 transition-all duration-300 mt-5"
                    style={{
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.15)'
                    }}
                  >
                    <div className="text-[10px] font-bold leading-tight text-center whitespace-nowrap">Early Adopter</div>
                    <div className="text-[8px] uppercase tracking-wider opacity-95 text-center font-semibold whitespace-nowrap">60% OFF • 25 Spots</div>
                  </div>
                </div>
              </div>

              {/* Badge (Most Popular, etc) */}
              {option.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${
                  option.comingSoon
                    ? 'bg-gray-600 text-white'
                    : 'bg-brand-orange text-white'
                }`}>
                  {option.badge}
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center`}
                  style={{
                    background: `linear-gradient(135deg, ${option.iconColor}15, ${option.iconColor}05)`,
                    border: `1px solid ${option.iconColor}20`
                  }}
                >
                  <option.icon
                    className="w-7 h-7"
                    style={{ color: option.iconColor }}
                    strokeWidth={2}
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className={`text-2xl font-bold mb-1.5 text-center ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                {option.name}
              </h3>
              <p className={`text-xs mb-6 text-center leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {option.tagline}
              </p>

              {/* Price */}
              <div className="mb-5 text-center">
                {/* Original Price (Strikethrough) */}
                {option.priceOriginal && (
                  <div className="mb-0.5">
                    <span className={`text-sm line-through ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                      {option.isRange
                        ? `${formatPrice(option.priceOriginal[currency].min, currency)} - ${formatPrice(option.priceOriginal[currency].max, currency)}`
                        : formatPrice(option.priceOriginal[currency], currency)
                      }
                    </span>
                  </div>
                )}
                {/* Early Adopter Price */}
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  {option.priceEarlyAdopter && (
                    <span className={`text-3xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      {option.isRange
                        ? `${formatPrice(option.priceEarlyAdopter[currency].min, currency)} - ${formatPrice(option.priceEarlyAdopter[currency].max, currency)}`
                        : formatPrice(option.priceEarlyAdopter[currency], currency)
                      }
                    </span>
                  )}
                </div>
                <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  {option.priceNote}
                </p>

                {/* Hourly Packages (if applicable) */}
                {option.isHourly && option.hourlyPackages && (
                  <div className={`mt-3 pt-3 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                    <p className={`text-xs font-semibold mb-1.5 uppercase tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      Example Packages
                    </p>
                    <div className="space-y-1">
                      {option.hourlyPackages.map((pkg, idx) => {
                        const monthlyPrice = option.priceEarlyAdopter[currency] * pkg.hours;
                        return (
                          <div key={idx} className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <span className="font-semibold">{pkg.label}:</span> {pkg.hours}hrs/mo = {formatPrice(monthlyPrice, currency)}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Meta Info */}
              <div className={`mb-5 pb-5 border-b text-center space-y-0.5 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  ⏱️ {option.timeline}
                </p>
                <p className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {option.ownership}
                </p>
                {option.prerequisite && (
                  <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                    ({option.prerequisite})
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-grow">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={option.ctaLink}
                className={`flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                  option.primary
                    ? 'bg-brand-orange text-white hover:bg-brand-orange/90 shadow-lg shadow-brand-orange/20 hover:shadow-xl hover:scale-[1.02]'
                    : isDark
                    ? 'bg-gray-800 text-gray-100 hover:bg-gray-700 border border-gray-700'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {option.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            All packages include deployment to your infrastructure and zero vendor lock-in.
            <span className="ml-1">Enterprise source code licensing available (custom pricing).</span>
          </p>
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            Questions about pricing?{' '}
            <a href="/contact" className="text-brand-orange hover:underline">
              Schedule a 15-minute alignment call
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
