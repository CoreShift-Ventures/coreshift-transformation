'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Code2, Rocket, Building2 } from 'lucide-react';
import { useTheme } from 'next-themes';

const engagementModels = [
  {
    type: 'Platform',
    badge: 'Self-Service',
    icon: Code2,
    iconColor: '#3b82f6',
    description: 'You own and operate the platform',
    features: [
      'Platform deployed to your infrastructure',
      'Full deployment control & ownership',
      'Complete platform documentation',
      'Community support & updates'
    ],
    cta: 'Get Started',
    href: '/audit',
    primary: false
  },
  {
    type: 'Platform + Launch',
    badge: 'Managed Setup',
    icon: Rocket,
    iconColor: '#ec5f2b',
    description: 'We handle implementation & training',
    features: [
      'Everything in Platform',
      'Custom data integrations',
      'Team training & onboarding',
      '30-day implementation guarantee'
    ],
    cta: 'Book Strategy Call',
    href: '/contact',
    primary: true
  },
  {
    type: 'Digital Transformation',
    badge: 'Enterprise Partnership',
    icon: Building2,
    iconColor: '#8b5cf6',
    description: 'End-to-end transformation services',
    features: [
      'Everything in Platform + Launch',
      'Process redesign & change management',
      'Custom workflow automation',
      'Ongoing strategic partnership'
    ],
    cta: 'Schedule Consultation',
    href: '/contact',
    primary: false
  }
];

export function EngagementModelsSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <section className={`relative py-24 px-6 overflow-hidden ${isDark ? 'bg-gradient-to-b from-gray-950 to-black' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section badge */}
          <div className="flex justify-center mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${isDark ? 'bg-[#ec5f2b]/10 text-[#ec5f2b] border border-[#ec5f2b]/20' : 'bg-[#ec5f2b]/5 text-[#ec5f2b] border border-[#ec5f2b]/10'}`}>
              Flexible Engagement Models
            </span>
          </div>

          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-5 leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Built to Run on Its Own.<br />
            <span className="text-[#ec5f2b]">Backed by Enterprise-Grade Transformation Methodology.</span>
          </h2>

          <p className={`text-base text-center mb-12 max-w-3xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            The platform is designed for you to own and operate. But if you need a transformation partner to handle implementation, change management, or custom integrations, we've architected these exact systems at SAP, IBM, and Talend.
          </p>

          {/* Engagement Models Grid */}
          <div className="grid md:grid-cols-3 gap-8 pt-6">
            {engagementModels.map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative p-8 rounded-2xl border-2 flex flex-col group ${
                  model.primary
                    ? isDark
                      ? 'bg-gradient-to-br from-[#ec5f2b]/10 via-gray-900 to-gray-900 border-[#ec5f2b] shadow-2xl shadow-[#ec5f2b]/20'
                      : 'bg-gradient-to-br from-[#ec5f2b]/5 via-white to-white border-[#ec5f2b] shadow-2xl shadow-[#ec5f2b]/10'
                    : isDark
                    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-gray-700 shadow-xl shadow-black/20 hover:border-gray-600'
                    : 'bg-gradient-to-br from-white via-gray-50 to-white border-gray-200 shadow-xl shadow-gray-500/5 hover:border-gray-300'
                }`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${model.iconColor}, transparent)`
                  }}
                />

                {model.primary && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white text-xs font-bold shadow-lg">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    style={{
                      background: `linear-gradient(135deg, ${model.iconColor}20, ${model.iconColor}10)`
                    }}
                  >
                    <model.icon
                      className="w-10 h-10"
                      style={{ color: model.iconColor }}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Badge */}
                <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold mb-4 self-center uppercase tracking-wide ${
                  isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>
                  {model.badge}
                </div>

                {/* Type */}
                <h3 className={`text-xl font-bold mb-2 text-center ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  {model.type}
                </h3>

                {/* Description */}
                <p className={`text-sm text-center mb-6 font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                  {model.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {model.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#ec5f2b] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={model.href}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 mt-auto ${
                    model.primary
                      ? 'bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white hover:shadow-lg'
                      : isDark
                      ? 'border-2 border-gray-700 text-gray-200 hover:border-brand-orange hover:text-brand-orange'
                      : 'border-2 border-brand-border text-brand-charcoal hover:border-brand-orange hover:text-brand-orange'
                  }`}
                >
                  {model.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              All models include full IP ownership and zero vendor lock-in
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
