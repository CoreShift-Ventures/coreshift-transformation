'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Rocket, TrendingUp, Code, HeadphonesIcon, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const journeySteps = [
  {
    number: 1,
    icon: ClipboardCheck,
    title: 'FREE CS Maturity Audit',
    description: 'Assess your current state',
    duration: '45 min',
    keyPoints: [
      'Maturity Score (Level 1-5)',
      'NRR benchmarks',
      'Gap analysis',
      'Custom roadmap'
    ],
    color: '#3b82f6'
  },
  {
    number: 2,
    icon: Rocket,
    title: 'Deploy & Configure',
    description: 'Choose your path and deploy',
    duration: '2-4 weeks',
    keyPoints: [
      'Build & Own or Managed',
      'Infrastructure setup',
      'Team training',
      'Module activation'
    ],
    color: '#ec5f2b'
  },
  {
    number: 3,
    icon: TrendingUp,
    title: 'Grow & Unlock',
    description: 'Scale as your NRR improves',
    duration: 'Ongoing',
    keyPoints: [
      'Unlock advanced features',
      'Quarterly reviews',
      'Continuous optimization',
      'Free upgrades'
    ],
    color: '#16a34a'
  }
];

const deploymentPaths = [
  {
    title: 'Build & Own',
    icon: Code,
    subtitle: 'For Maturity Level 3-5',
    features: ['Full code ownership', 'Deploy to your cloud', '90-day support', 'Community access'],
    pricing: { setup: '$15K-$30K', monthly: '$0', timeline: '3 days' },
    color: '#3b82f6',
    href: '/build-and-own'
  },
  {
    title: 'Managed Service',
    icon: HeadphonesIcon,
    subtitle: 'For Maturity Level 1-2',
    features: ['We deploy & manage', 'Ongoing support', 'Monthly strategy', 'Dedicated CS Manager'],
    pricing: { setup: '$10K-$25K', monthly: '$2K-$5K', timeline: '2-4 weeks' },
    color: '#ec5f2b',
    recommended: true,
    href: '/managed-service'
  }
];

export function ProcessFlowSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ec5f2b 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm mb-6 ${isDark ? 'bg-[#ec5f2b]/10 text-[#ec5f2b] border border-[#ec5f2b]/20' : 'bg-[#ec5f2b]/5 text-[#ec5f2b] border border-[#ec5f2b]/10'}`}
          >
            <Zap className="w-4 h-4" />
            <span>From Chaos to Command</span>
          </motion.div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-5 leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Stop the Bleeding in 30 Days.<br />
            <span className="text-[#ec5f2b]">Own Your Transformation Forever.</span>
          </h2>
          <p className={`text-base max-w-3xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            From revenue leak audit to AI-powered CS infrastructure—fast enough to save this quarter's churn.
          </p>
        </motion.div>

        {/* Journey Steps - Horizontal Flow */}
        <div className="relative mb-20 pt-8 px-2">
          <div className="grid lg:grid-cols-3 gap-12 relative">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pt-4 pl-2"
              >
                {/* Animated connecting arrow */}
                {index < journeySteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    className="hidden lg:flex absolute top-1/2 -right-4 z-20 transform -translate-y-1/2"
                  >
                    <ArrowRight className="w-6 h-6 text-brand-orange animate-pulse" style={{ animationDuration: '2s' }} />
                  </motion.div>
                )}

                {/* Step number badge - positioned outside card */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: index * 0.15 + 0.2 }}
                  className="absolute -top-2 -left-2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-30"
                  style={{
                    background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}dd 100%)`
                  }}
                >
                  {step.number}
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative rounded-2xl p-8 transition-all duration-300 group ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 hover:border-brand-orange/50 shadow-xl'
                      : 'bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200 hover:border-brand-orange/50 shadow-xl hover:shadow-2xl'
                  }`}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}40 0%, ${step.color}10 100%)`
                    }}
                  />

                  {/* Icon */}
                  <div className="flex justify-center mb-6 relative z-10">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}20 0%, ${step.color}10 100%)`
                      }}
                    >
                      <step.icon className="w-10 h-10" style={{ color: step.color }} />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold text-center mb-2 relative z-10 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm text-center mb-2 relative z-10 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                    {step.description}
                  </p>
                  <div className="text-sm text-center mb-6 font-bold relative z-10" style={{ color: step.color }}>
                    {step.duration}
                  </div>

                  {/* Key points */}
                  <div className="space-y-2.5 relative z-10">
                    {step.keyPoints.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3 + i * 0.05 }}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: step.color }} />
                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{point}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Deployment Paths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              Choose Your <span className="gradient-text">Deployment Path</span>
            </h3>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
              Based on your maturity level
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {deploymentPaths.map((path, index) => (
              <motion.a
                key={path.title}
                href={path.href}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`group relative rounded-xl p-6 transition-all duration-300 cursor-pointer ${
                  path.recommended
                    ? 'border-2 border-brand-orange shadow-xl hover:shadow-2xl'
                    : isDark
                    ? 'bg-gray-900 border border-gray-800 hover:border-brand-orange/50 hover:shadow-xl'
                    : 'bg-white border border-gray-200 hover:border-brand-orange/50 shadow-lg hover:shadow-xl'
                }`}
              >
                {path.recommended && (
                  <div className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white text-xs font-bold shadow-md">
                    ⭐ RECOMMENDED
                  </div>
                )}

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${path.color} 0%, ${path.color}dd 100%)`
                      }}
                    >
                      <path.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className={`font-bold text-xl group-hover:text-brand-orange transition-colors ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                        {path.title}
                      </h4>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                        {path.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isDark ? 'text-gray-400' : 'text-gray-600'} group-hover:text-brand-orange`} />
                </div>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {path.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 text-green-600" />
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className={`pt-4 border-t space-y-2 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                  <div className="flex justify-between items-center">
                    <span className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Setup:</span>
                    <span className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{path.pricing.setup}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Monthly:</span>
                    <span className={`text-sm font-bold ${path.pricing.monthly === '$0' ? 'text-green-600' : isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                      {path.pricing.monthly}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Timeline:</span>
                    <span className="text-sm font-bold gradient-text">{path.pricing.timeline}</span>
                  </div>
                </div>

                {/* Learn More CTA */}
                <div className="mt-6">
                  <div className={`w-full px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    path.recommended
                      ? 'bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white hover:shadow-lg'
                      : isDark
                      ? 'border-2 border-gray-700 text-gray-200 hover:border-brand-orange hover:text-brand-orange'
                      : 'border-2 border-brand-border text-brand-charcoal hover:border-brand-orange hover:text-brand-orange'
                  }`}>
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
