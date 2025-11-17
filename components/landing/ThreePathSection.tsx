'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FileText, Zap, Target, Check } from 'lucide-react';

const paths = [
  {
    id: 'blueprint',
    step: '01',
    icon: FileText,
    name: 'Transformation Blueprint',
    tagline: 'Strategy first approach to CS transformation',
    headline: 'Validate your transformation roadmap before committing to major investments',
    description: 'Comprehensive CS maturity assessment with a detailed 3 year transformation plan and AI implementation priorities.',
    keyFeatures: [
      'Complete maturity assessment (0 to 100 scoring)',
      'Custom 3 year transformation roadmap',
      'AI implementation framework and priorities',
      'Interactive POC demo you can share with execs',
      'Module recommendations based on your gaps',
      'ROI projections and business case'
    ],
    valueProps: [
      'Get exec buy in with data backed insights',
      'See exactly what you\'d build (and why)',
      'De risk your transformation investment'
    ],
    timeline: '7 to 10 days delivery',
    commitment: 'One time engagement',
    deliverable: 'Full report and roadmap ownership',
    pricing: 'Starting at $4,995',
    cta: 'Explore Blueprint',
    ctaLink: '/blueprint',
    mostPopular: false
  },
  {
    id: 'platform',
    step: '02',
    icon: Zap,
    name: 'CoreShift Engine',
    tagline: 'AI powered customer intelligence platform',
    headline: 'Build once, deploy to your cloud. Support is optional after Year 1.',
    description: 'AI platform that predicts churn, surfaces expansion signals, and automates workflows on your cloud.',
    keyFeatures: [
      'Everything in Blueprint plus',
      'Custom deployed AI engine (your cloud)',
      'Predictive churn and expansion models',
      'Automated playbooks and workflows',
      'Full system integration (CRM, support, product)',
      'Team training and post launch support'
    ],
    valueProps: [
      'One-time build, not recurring license fees',
      'Your data stays in your infrastructure',
      'Stop paying support anytime - platform still runs (frozen)'
    ],
    timeline: '4 weeks deployment',
    commitment: 'One time investment',
    deliverable: 'Platform ownership and hosting on your cloud*',
    pricing: 'From $20K one-time + optional $6-12K/year support',
    cta: 'Explore Platform',
    ctaLink: '/platform',
    mostPopular: true,
    note: '*Cloud hosting and AI compute costs based on your preference'
  },
  {
    id: 'consulting',
    step: '03',
    icon: Target,
    name: 'Expert Advisory',
    tagline: 'Ongoing strategic partnership',
    headline: 'Fractional Customer Experience Architect at a fraction of full time executive cost',
    description: 'Ongoing strategic guidance from 20+ year post sales veterans, without the overhead of full time executive hiring.',
    keyFeatures: [
      'Strategic advisory and roadmap planning',
      'Module optimization and feature development',
      'Team training and maturity progression',
      'Executive reporting and insights',
      'Priority support and direct access',
      'Flexible engagement model'
    ],
    valueProps: [
      'Flexible hours based on your needs',
      'No long term commitments required',
      'Available standalone or with Platform'
    ],
    timeline: 'Ongoing partnership',
    commitment: 'Monthly retainer or hourly',
    deliverable: 'Flexible packages: 6hrs/mo • 12hrs/mo • 20hrs/mo',
    pricing: 'From $2,500/month',
    cta: 'Explore Advisory',
    ctaLink: '/advisory',
    mostPopular: false
  }
];

export function ThreePathSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <section id="three-paths" className={`relative py-24 px-6 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: isDark
          ? 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)'
          : 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-4xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
          >
            Three Paths to Unlock Revenue Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Start with strategy, deploy infrastructure, or get expert guidance
          </motion.p>
        </div>

        {/* Path Cards - Enhanced Premium Enterprise Design */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ perspective: '2000px' }}>
          {paths.map((path, index) => {
            const Icon = path.icon;

            return (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -12,
                  rotateY: index === 1 ? 0 : (index === 0 ? 2 : -2),
                  transition: { duration: 0.4, type: 'spring', stiffness: 200 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className={`group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-500 ${
                  path.mostPopular
                    ? isDark
                      ? 'bg-gradient-to-br from-gray-900/90 via-gray-900/90 to-gray-950/90 backdrop-blur-xl border-2 border-brand-orange shadow-[0_20px_60px_rgba(236,95,43,0.3)]'
                      : 'bg-gradient-to-br from-white/90 via-white/90 to-gray-50/90 backdrop-blur-xl border-2 border-brand-orange shadow-[0_20px_60px_rgba(236,95,43,0.25)]'
                    : isDark
                    ? 'bg-gradient-to-br from-gray-900/80 via-gray-900/80 to-gray-950/80 backdrop-blur-xl border border-gray-800 hover:border-gray-700 shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)]'
                    : 'bg-gradient-to-br from-white/80 via-white/80 to-gray-50/80 backdrop-blur-xl border border-gray-200 hover:border-gray-300 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]'
                }`}
              >
                {/* Animated Gradient Border for Most Popular */}
                {path.mostPopular && (
                  <>
                    <motion.div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      animate={{
                        background: [
                          'linear-gradient(0deg, rgba(236,95,43,0.15), rgba(255,107,53,0.15))',
                          'linear-gradient(120deg, rgba(236,95,43,0.15), rgba(255,107,53,0.15))',
                          'linear-gradient(240deg, rgba(236,95,43,0.15), rgba(255,107,53,0.15))',
                          'linear-gradient(360deg, rgba(236,95,43,0.15), rgba(255,107,53,0.15))',
                        ]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{ filter: 'blur(20px)', opacity: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-brand-orange opacity-0 group-hover:opacity-3 transition-opacity duration-500 pointer-events-none" />
                  </>
                )}

                {/* Header Section with Premium Badge Treatment */}
                <div className={`relative px-6 pt-8 pb-6 ${
                  path.mostPopular
                    ? isDark
                      ? 'bg-gradient-to-b from-brand-orange/10 to-transparent'
                      : 'bg-gradient-to-b from-brand-orange/5 to-transparent'
                    : isDark
                    ? 'bg-gradient-to-b from-gray-800/40 to-transparent'
                    : 'bg-gradient-to-b from-gray-100/60 to-transparent'
                }`}>
                  {/* Most Popular Badge - Premium Style */}
                  {path.mostPopular && (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-brand-orange to-orange-600 text-white text-xs font-bold rounded-bl-xl shadow-lg"
                    >
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        MOST POPULAR
                      </span>
                    </motion.div>
                  )}

                  {/* Step Number - Premium Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className={`absolute top-6 left-6 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shadow-lg ${
                      path.mostPopular
                        ? 'bg-brand-orange text-white'
                        : isDark
                        ? 'bg-gray-800 text-gray-300 border border-gray-700'
                        : 'bg-white text-gray-700 border-2 border-gray-300'
                    }`}
                  >
                    {path.step}
                  </motion.div>

                  {/* Icon - Enhanced with Animated Halos */}
                  <div className="flex justify-center pt-2">
                    <div className="relative">
                      {/* Animated Halos */}
                      {path.mostPopular && (
                        <>
                          <motion.div
                            className="absolute inset-0 rounded-2xl bg-brand-orange/30 blur-2xl"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.div
                            className="absolute inset-0 rounded-2xl bg-orange-400/20 blur-xl"
                            animate={{
                              scale: [1.2, 1.5, 1.2],
                              opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1.5
                            }}
                          />
                        </>
                      )}

                      <motion.div
                        className={`relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl ${
                          path.mostPopular
                            ? 'bg-gradient-to-br from-brand-orange via-orange-500 to-orange-600'
                            : isDark
                            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                            : 'bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300'
                        }`}
                        whileHover={{
                          scale: 1.15,
                          rotate: 360,
                          transition: { duration: 0.6, type: 'spring' }
                        }}
                      >
                        <Icon className={`relative w-10 h-10 ${path.mostPopular ? 'text-white' : isDark ? 'text-gray-300' : 'text-gray-700'}`} strokeWidth={2.5} />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="px-6 py-6 flex-grow flex flex-col">
                  {/* Name & Tagline - Prominent */}
                  <div className="text-center mb-5">
                    <h3 className={`text-2xl font-bold mb-2 tracking-tight ${isDark ? 'text-gray-50' : 'text-brand-charcoal'}`}>
                      {path.name}
                    </h3>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                      path.mostPopular
                        ? 'bg-brand-orange/10 text-brand-orange'
                        : isDark
                        ? 'bg-gray-800 text-gray-400'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        path.mostPopular ? 'bg-brand-orange' : isDark ? 'bg-gray-600' : 'bg-gray-400'
                      }`} />
                      {path.tagline}
                    </div>
                  </div>

                  {/* Headline - Emphasized */}
                  <p className={`text-sm font-semibold mb-3 leading-snug text-center ${
                    path.mostPopular
                      ? isDark ? 'text-gray-200' : 'text-gray-900'
                      : isDark ? 'text-gray-300' : 'text-gray-800'
                  }`}>
                    {path.headline}
                  </p>

                  {/* Description */}
                  <p className={`text-xs leading-relaxed mb-5 text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {path.description}
                  </p>

                  {/* Divider with Icon */}
                  <div className="relative mb-5">
                    <div className={`absolute inset-0 flex items-center ${isDark ? '' : ''}`}>
                      <div className={`w-full border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`} />
                    </div>
                    <div className="relative flex justify-center">
                      <div className={`px-3 text-xs font-semibold ${
                        path.mostPopular
                          ? 'bg-brand-orange/10 text-brand-orange'
                          : isDark
                          ? 'bg-gray-900 text-gray-600'
                          : 'bg-white text-gray-500'
                      }`}>
                        DETAILS
                      </div>
                    </div>
                  </div>

                  {/* Meta Info - Enhanced */}
                  <div className={`grid grid-cols-2 gap-4 mb-5 pb-5 border-b-2 ${
                    path.mostPopular
                      ? 'border-brand-orange/20'
                      : isDark
                      ? 'border-gray-800'
                      : 'border-gray-200'
                  }`}>
                    <div className="text-center">
                      <div className={`flex items-center justify-center gap-1 mb-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="text-[10px] uppercase tracking-wide font-bold">Timeline</div>
                      </div>
                      <div className={`text-xs font-bold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{path.timeline}</div>
                    </div>
                    <div className="text-center">
                      <div className={`flex items-center justify-center gap-1 mb-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="text-[10px] uppercase tracking-wide font-bold">Commitment</div>
                      </div>
                      <div className={`text-xs font-bold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{path.commitment}</div>
                    </div>
                  </div>

                  {/* Key Features - With Section Header */}
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <svg className={`w-4 h-4 ${path.mostPopular ? 'text-brand-orange' : isDark ? 'text-gray-600' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <div className={`text-xs uppercase tracking-wider font-bold ${
                        path.mostPopular ? 'text-brand-orange' : isDark ? 'text-gray-500' : 'text-gray-600'
                      }`}>
                        What's Included
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {path.keyFeatures.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2"
                        >
                          <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${path.mostPopular ? 'text-brand-orange' : isDark ? 'text-gray-600' : 'text-gray-400'}`} strokeWidth={3} />
                          <span className={`text-xs leading-snug ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Value Props - Premium Highlight Box */}
                  <div className={`mb-5 p-4 rounded-xl border-2 ${
                    path.mostPopular
                      ? isDark
                        ? 'bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 border-brand-orange/30'
                        : 'bg-gradient-to-br from-brand-orange/5 to-white border-brand-orange/30'
                      : isDark
                      ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/30 border-gray-800'
                      : 'bg-gradient-to-br from-gray-50 to-white border-gray-200'
                  }`}>
                    <div className="flex items-center gap-2 mb-3">
                      <svg className={`w-4 h-4 ${path.mostPopular ? 'text-brand-orange' : isDark ? 'text-gray-600' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className={`text-xs uppercase tracking-wider font-bold ${
                        path.mostPopular ? 'text-brand-orange' : isDark ? 'text-gray-500' : 'text-gray-600'
                      }`}>
                        Why Choose This
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {path.valueProps.map((prop, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          viewport={{ once: true }}
                          className={`text-xs flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                        >
                          <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${path.mostPopular ? 'text-brand-orange' : isDark ? 'text-gray-600' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="leading-snug font-medium">{prop}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverable - Enhanced */}
                  <div className={`mb-4 p-3 rounded-lg ${isDark ? 'bg-gray-800/30' : 'bg-gray-50'}`}>
                    <div className="flex items-start gap-2">
                      <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${path.mostPopular ? 'text-brand-orange' : isDark ? 'text-gray-600' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                      <div>
                        <div className={`text-[10px] uppercase tracking-wide font-bold mb-1 ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
                          Deliverable
                        </div>
                        <div className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {path.deliverable}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Platform Note */}
                  {path.note && (
                    <div className={`mb-4 text-[10px] italic flex items-start gap-1 ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
                      <svg className="w-3 h-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {path.note}
                    </div>
                  )}
                </div>

                {/* CTA Section - Premium */}
                <div className={`px-6 pb-6 pt-0 ${
                  path.mostPopular
                    ? isDark
                      ? 'bg-gradient-to-t from-brand-orange/5 to-transparent'
                      : 'bg-gradient-to-t from-brand-orange/5 to-transparent'
                    : ''
                }`}>
                  <motion.a
                    href={path.ctaLink}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-xl hover:shadow-2xl ${
                      path.mostPopular
                        ? 'bg-gradient-to-r from-brand-orange via-orange-500 to-orange-600 text-white hover:from-orange-600 hover:via-orange-500 hover:to-brand-orange'
                        : isDark
                        ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 hover:from-gray-700 hover:to-gray-800 border-2 border-gray-700 hover:border-gray-600'
                        : 'bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700'
                    }`}
                  >
                    {path.cta}
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3, type: 'spring' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Early Adopter Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className={`text-center mt-12 text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}
        >
          <p className="mb-2">
            <span className="font-semibold text-brand-orange">Early Adopter Pricing:</span> Lock in 60% off before we onboard our next cohort.
          </p>
          <p className="text-xs">
            Pricing increases as we scale. Secure your spot at pilot rates while they last.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
