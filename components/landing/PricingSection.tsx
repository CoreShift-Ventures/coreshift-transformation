'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';

const PRICING_TIERS = [
  {
    id: 'essential',
    name: 'Essential',
    tagline: 'Core CS tools to stop churn and organize your team',
    headline: 'Stop the bleeding. Get organized.',
    subhead: 'Essential CS tools to reduce churn and bring order to chaos.',
    targetCustomer: 'Early-stage teams, ARR < $1M',
    priceMonthly: 2500,
    priceAnnual: 25000,
    cta: 'Start Free Trial',
    ctaLink: '/signup',
    modules: 8,
    features: [
      { name: 'Dashboard', included: true },
      { name: 'Health Scoring', included: true },
      { name: 'Task Management', included: true },
      { name: 'Basic Playbooks', included: true },
      { name: 'Customer Journey', included: true },
      { name: 'Success Plans', included: true },
      { name: 'Goal Tracking', included: true },
      { name: 'Basic Automation', included: true },
      { name: 'API Access', included: true },
      { name: 'Basic Reporting', included: true },
      { name: 'Email Support', included: true },
      { name: 'AI Copilot', included: false },
      { name: 'Advanced Analytics', included: false },
      { name: 'Custom Integrations', included: false }
    ],
    limits: {
      accounts: '500 accounts',
      users: '5 users',
      apiCalls: '10,000 API calls/month',
      retention: '12 months data retention'
    }
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'Everything in Essential, plus expansion and advanced analytics',
    headline: 'Scale systematically. Drive expansion.',
    subhead: 'Everything in Essential, plus the tools to grow revenue proactively.',
    targetCustomer: 'Growing teams, ARR $1M-$5M',
    priceMonthly: 5000,
    priceAnnual: 50000,
    cta: 'Request Demo',
    ctaLink: '/demo',
    badge: 'Most Popular',
    modules: 13,
    features: [
      { name: 'Everything in Essential', included: true, emphasized: true },
      { name: 'Expansion Pipeline', included: true },
      { name: 'Executive Analytics', included: true },
      { name: 'Integration Hub', included: true },
      { name: 'Advanced Playbooks', included: true },
      { name: 'Sentiment Tracking', included: true },
      { name: 'AI Copilot', included: true },
      { name: 'Advanced Analytics', included: true },
      { name: 'Custom Integrations', included: true },
      { name: 'Priority Support', included: true },
      { name: 'White Label', included: false },
      { name: 'Dedicated CSM', included: false }
    ],
    limits: {
      accounts: '2,000 accounts',
      users: '15 users',
      apiCalls: '50,000 API calls/month',
      retention: '24 months data retention'
    }
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Everything in Professional, plus AI, automation, and white-glove support',
    headline: 'AI-powered. World-class operations.',
    subhead: 'The complete platform for strategic CS teams driving predictable revenue.',
    targetCustomer: 'Scale teams, ARR $5M+',
    priceMonthly: null,
    priceAnnual: null,
    priceLabel: 'Custom Pricing',
    cta: 'Contact Sales',
    ctaLink: '/contact',
    modules: 25,
    features: [
      { name: 'Everything in Professional', included: true, emphasized: true },
      { name: 'AI Insights', included: true },
      { name: 'Account Segmentation', included: true },
      { name: 'Digital CS', included: true },
      { name: 'QBR Automation', included: true },
      { name: 'Benchmarking', included: true },
      { name: '+ 7 more modules', included: true },
      { name: 'White Label Branding', included: true },
      { name: 'Dedicated Success Manager', included: true },
      { name: 'Custom Development', included: true },
      { name: 'SLA Guarantees', included: true },
      { name: 'Onboarding & Training', included: true }
    ],
    limits: {
      accounts: 'Unlimited accounts',
      users: 'Unlimited users',
      apiCalls: 'Unlimited API calls',
      retention: '60 months data retention'
    }
  }
];

export function PricingSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <section className={`py-24 px-6 relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
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
            className="inline-block px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-semibold text-sm mb-6"
          >
            Pricing
          </motion.div>
          <h2 className={`text-3xl md:text-5xl font-bold mb-5 leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Simple, transparent pricing
          </h2>
          <p className={`text-base md:text-lg max-w-3xl mx-auto font-light mb-8 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Choose the plan that fits your team's stage and growth goals
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-lg bg-white dark:bg-gray-900 border border-brand-border dark:border-gray-800">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md font-semibold text-sm transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-brand-orange text-white'
                  : isDark ? 'text-gray-400 hover:text-gray-200' : 'text-brand-gray hover:text-brand-charcoal'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-md font-semibold text-sm transition-all ${
                billingPeriod === 'annual'
                  ? 'bg-brand-orange text-white'
                  : isDark ? 'text-gray-400 hover:text-gray-200' : 'text-brand-gray hover:text-brand-charcoal'
              }`}
            >
              Annual <span className="text-xs ml-1">(Save 17%)</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                tier.badge
                  ? isDark
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-brand-orange shadow-2xl shadow-brand-orange/20'
                    : 'bg-white border-2 border-brand-orange shadow-2xl shadow-brand-orange/10'
                  : isDark
                  ? 'bg-gray-900 border border-gray-800'
                  : 'bg-white border border-brand-border'
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-orange text-white text-xs font-bold rounded-full">
                  {tier.badge}
                </div>
              )}

              {/* Tier Name */}
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                {tier.name}
              </h3>
              <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                {tier.tagline}
              </p>

              {/* Price */}
              <div className="mb-6">
                {tier.priceMonthly ? (
                  <>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                        ${billingPeriod === 'monthly' ? tier.priceMonthly.toLocaleString() : (tier.priceAnnual / 12).toLocaleString()}
                      </span>
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                        /month
                      </span>
                    </div>
                    {billingPeriod === 'annual' && (
                      <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-brand-gray'}`}>
                        Billed ${tier.priceAnnual.toLocaleString()}/year
                      </p>
                    )}
                  </>
                ) : (
                  <span className={`text-3xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {tier.priceLabel}
                  </span>
                )}
              </div>

              {/* CTA */}
              <a
                href={tier.ctaLink}
                className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all mb-8 ${
                  tier.badge
                    ? 'bg-brand-orange text-white hover:bg-brand-orange/90 shadow-lg shadow-brand-orange/20'
                    : isDark
                    ? 'bg-gray-800 text-gray-100 hover:bg-gray-700 border border-gray-700'
                    : 'bg-brand-charcoal text-white hover:bg-brand-charcoal/90'
                }`}
              >
                {tier.cta}
              </a>

              {/* Modules Count */}
              <div className={`text-sm font-semibold mb-4 pb-4 border-b ${isDark ? 'text-gray-300 border-gray-800' : 'text-brand-charcoal border-brand-border'}`}>
                {tier.modules} modules included
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isDark ? 'text-gray-700' : 'text-gray-300'}`} />
                    )}
                    <span className={`text-sm ${
                      feature.emphasized
                        ? isDark ? 'font-semibold text-gray-100' : 'font-semibold text-brand-charcoal'
                        : feature.included
                        ? isDark ? 'text-gray-300' : 'text-brand-gray'
                        : isDark ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Limits */}
              <div className={`pt-6 border-t ${isDark ? 'border-gray-800' : 'border-brand-border'}`}>
                <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                  LIMITS
                </p>
                <ul className="space-y-1">
                  {Object.values(tier.limits).map((limit, idx) => (
                    <li key={idx} className={`text-sm ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                      {limit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Need a detailed comparison?{' '}
            <a href="/pricing" className="text-brand-orange hover:underline inline-flex items-center gap-1">
              View full feature matrix
              <ArrowRight className="w-4 h-4" />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
