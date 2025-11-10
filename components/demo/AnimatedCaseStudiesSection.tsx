'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useTheme } from 'next-themes';
import { ChevronRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    company: 'B2B SaaS Platform',
    industry: 'Software',
    gradient: 'from-blue-500/10 to-purple-500/10',
    accentColor: '#3b82f6',
    problem: 'Reactive CS operations bleeding $2M+ annually',
    metrics: [
      { label: 'Churn Reduction', value: '67%', timeframe: 'in 9 months' },
      { label: 'ARR Saved', value: '$800K', timeframe: 'first year' },
      { label: 'CSM Efficiency', value: '40%', timeframe: 'increase' },
    ],
    quote:
      'We were flying blind with customer health. CoreShift gave us predictive insights 90 days before churn risk. The ROI was immediate—we saved 3 enterprise accounts in the first quarter alone.',
    author: 'VP of Customer Success',
    authorTitle: 'B2B SaaS Platform',
    implementation: '28 days from kickoff to live',
    investment: '$7,997',
  },
  {
    id: 2,
    company: 'Enterprise Analytics Company',
    industry: 'Data & Analytics',
    gradient: 'from-green-500/10 to-emerald-500/10',
    accentColor: '#10b981',
    problem: 'Manual processes, missed expansion opportunities',
    metrics: [
      { label: 'Expansion Revenue', value: '3x', timeframe: 'increase' },
      { label: 'Time Saved', value: '15hrs/week', timeframe: 'per CSM' },
      { label: 'Implementation', value: '30 days', timeframe: 'to launch' },
    ],
    quote:
      'Before CoreShift, our CSMs spent more time updating spreadsheets than building relationships. Now automation handles the busywork, and our team focuses on strategic accounts. Expansion revenue tripled.',
    author: 'Chief Customer Officer',
    authorTitle: 'Enterprise Analytics Company',
    implementation: '30 days from kickoff to live',
    investment: '$34,997',
  },
  {
    id: 3,
    company: 'Growth-Stage SaaS',
    industry: 'B2B Software',
    gradient: 'from-orange-500/10 to-red-500/10',
    accentColor: '#f97316',
    problem: 'Scaling CS without enterprise tool bloat',
    metrics: [
      { label: 'NRR Improvement', value: '118%', timeframe: 'from 105%' },
      { label: 'Cost Savings', value: '$120K/yr', timeframe: 'vs SaaS tools' },
      { label: 'ROI', value: '15x', timeframe: 'first year' },
    ],
    quote: `We didn't need another $10K/month SaaS subscription. We needed infrastructure we could own and control. CoreShift delivered exactly that—custom-built for our workflow, deployed to our cloud.`,
    author: 'Head of Operations',
    authorTitle: 'Growth-Stage SaaS',
    implementation: '21 days from kickoff to live',
    investment: '$7,997',
  },
];

export function AnimatedCaseStudiesSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';
  const activeCase = caseStudies[activeTab];

  return (
    <section
      ref={sectionRef}
      className={`py-32 px-6 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}
    >
      {/* Animated background elements */}
      <BackgroundElements isDark={isDark} isInView={isInView} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <span
              className={`px-6 py-2 rounded-full text-sm font-semibold ${
                isDark
                  ? 'bg-[#ec5f2b]/10 text-[#ec5f2b] border border-[#ec5f2b]/20'
                  : 'bg-[#ec5f2b]/5 text-[#ec5f2b] border border-[#ec5f2b]/10'
              }`}
            >
              Customer Success Stories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={`text-4xl md:text-5xl font-bold mb-6 leading-[1.1] tracking-[-0.02em] ${
              isDark ? 'text-gray-100' : 'text-brand-charcoal'
            }`}
          >
            Transformations That Paid for
            <br />
            <span className="text-[#ec5f2b] relative inline-block">
              Themselves in 60 Days
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 300 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.path
                  d="M0,4 Q75,0 150,4 T300,4"
                  stroke="#ec5f2b"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className={`text-lg max-w-3xl mx-auto font-light ${
              isDark ? 'text-gray-400' : 'text-brand-gray'
            }`}
          >
            Real companies. Real results. All within 30 days of implementation.
          </motion.p>
        </motion.div>

        {/* Tabs with slide animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex justify-center mb-16 overflow-x-auto"
        >
          <div
            className={`inline-flex gap-3 p-2 rounded-2xl backdrop-blur-sm ${
              isDark ? 'bg-gray-900/80 border border-gray-800' : 'bg-gray-100/80 border border-gray-200'
            }`}
          >
            {caseStudies.map((study, idx) => (
              <motion.button
                key={study.id}
                onClick={() => setActiveTab(idx)}
                className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                  activeTab === idx
                    ? 'text-white'
                    : isDark
                    ? 'text-gray-400 hover:text-gray-200'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#ec5f2b] rounded-xl"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{study.company}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Case Study Content with page transition effect */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 100, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -100, rotateY: 15 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            className={`rounded-3xl p-8 md:p-12 relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-gray-700'
                : 'bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-200 shadow-2xl'
            }`}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${activeCase.gradient} opacity-50 pointer-events-none`}
            />

            {/* Company Info with slide-in */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 relative z-10"
            >
              <h3 className={`text-3xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                {activeCase.company}
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{activeCase.industry}</p>
            </motion.div>

            {/* Metrics Grid with 3D card effect */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 relative z-10">
              {activeCase.metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + idx * 0.1,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  whileHover={{
                    y: -5,
                    rotateX: 5,
                    transition: { duration: 0.2 },
                  }}
                  className={`p-6 rounded-2xl text-center relative overflow-hidden ${
                    isDark
                      ? 'bg-gray-800/50 border border-gray-700 backdrop-blur-sm'
                      : 'bg-white border border-gray-200 shadow-lg backdrop-blur-sm'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0"
                    initial={{ x: '-100%', y: '-100%' }}
                    whileHover={{ x: '100%', y: '100%' }}
                    transition={{ duration: 0.6 }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="text-5xl md:text-6xl font-black text-[#ec5f2b] mb-3"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4 + idx * 0.1,
                        type: 'spring',
                        stiffness: 200,
                      }}
                    >
                      {metric.value}
                    </motion.div>
                    <div className={`text-sm font-bold mb-1 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                      {metric.label}
                    </div>
                    <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      {metric.timeframe}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quote with typewriter effect simulation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className={`p-8 rounded-2xl mb-10 relative overflow-hidden ${
                isDark
                  ? 'bg-gray-900/50 border border-gray-700 backdrop-blur-sm'
                  : 'bg-gray-50 border border-gray-200 backdrop-blur-sm'
              }`}
            >
              <motion.div
                className="text-[#ec5f2b] text-7xl mb-4 leading-none"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 200 }}
              >
                "
              </motion.div>

              <p className={`text-lg md:text-xl mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {activeCase.quote}
              </p>

              <div className="flex items-center gap-4">
                <motion.div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white bg-[#ec5f2b] text-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {activeCase.author.charAt(0)}
                </motion.div>
                <div>
                  <div className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                    {activeCase.author}
                  </div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {activeCase.authorTitle}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Implementation Details with hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid md:grid-cols-2 gap-6 relative z-10"
            >
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className={`p-5 rounded-xl ${isDark ? 'bg-gray-800/30' : 'bg-gray-100'}`}
              >
                <div
                  className={`text-xs font-semibold uppercase tracking-wide mb-2 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Implementation Time
                </div>
                <div className={`text-xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  {activeCase.implementation}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className={`p-5 rounded-xl ${isDark ? 'bg-gray-800/30' : 'bg-gray-100'}`}
              >
                <div
                  className={`text-xs font-semibold uppercase tracking-wide mb-2 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Investment
                </div>
                <div className={`text-xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  {activeCase.investment}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* CTA with magnetic effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="text-center mt-16"
        >
          <p className={`text-xl font-semibold mb-8 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Ready to write your own success story?
          </p>
          <motion.a
            href="/audit"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-white rounded-xl font-semibold text-lg shadow-xl relative overflow-hidden group"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(236, 95, 43, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-brand-orange"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Get Your Free Revenue Leak Audit</span>
            <ChevronRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// Animated background elements
function BackgroundElements({ isDark, isInView }: { isDark: boolean; isInView: boolean }) {
  return (
    <>
      {/* Floating shapes */}
      <motion.div
        className={`absolute top-20 right-10 w-32 h-32 rounded-full blur-2xl ${
          isDark ? 'bg-[#ec5f2b]/10' : 'bg-[#ec5f2b]/5'
        }`}
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1, y: [0, -20, 0] } : {}}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 1 },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <motion.div
        className={`absolute bottom-20 left-10 w-48 h-48 rounded-full blur-3xl ${
          isDark ? 'bg-purple-500/10' : 'bg-purple-500/5'
        }`}
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1, y: [0, 20, 0] } : {}}
        transition={{
          opacity: { duration: 1, delay: 0.3 },
          scale: { duration: 1, delay: 0.3 },
          y: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
    </>
  );
}
