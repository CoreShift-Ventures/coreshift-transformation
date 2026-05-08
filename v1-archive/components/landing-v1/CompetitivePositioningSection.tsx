// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Zap, Award, Shield, Target } from 'lucide-react';
import { useTheme } from 'next-themes';

const competitors = [
  {
    category: 'Enterprise Consultancies',
    icon: Users,
    problems: [
      'Sell the partner, deliver the intern',
      'Massive invoices with unpredictable scope creep',
      '18-month timelines while you hemorrhage revenue',
      'Dependency model: you never own the capability'
    ],
    result: 'You pay millions to rent expertise that walks out the door.'
  },
  {
    category: 'Off-the-Shelf SaaS',
    icon: Code,
    problems: [
      '"AI-powered" = basic if/then rules with ChatGPT bolted on',
      'Rigid workflows that force you to change your process',
      'Vendor lock-in: your data, their platform, forever',
      'Generic features built for everyone, perfect for no one'
    ],
    result: 'Another tool your team works around, not with.'
  },
  {
    category: 'Internal Dev Teams',
    icon: Zap,
    problems: [
      'Already underwater with product roadmap',
      'No operations expertise, learning on your dime',
      '6-12 months to MVP, another 12 to production-ready',
      'Opportunity cost: what revenue features didn\'t get built?'
    ],
    result: 'By the time it\'s ready, the market has moved and the bleeding continues.'
  }
];

const coreShiftDifference = [
  {
    icon: Award,
    title: 'Enterprise Rigor, Startup Speed',
    description: 'Decades of enterprise transformation expertise, delivered in 30 days, not 18 months'
  },
  {
    icon: Shield,
    title: 'You Own Everything',
    description: 'Deployed to your infrastructure, zero vendor lock-in. Your asset, not our rent stream.'
  },
  {
    icon: Target,
    title: 'True AI-First Architecture',
    description: 'Autonomous agents, not chatbots. Built on AI from day one, not retrofitted.'
  }
];

export function CompetitivePositioningSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <section className={`relative py-24 px-6 overflow-hidden ${isDark ? 'bg-gradient-to-b from-black to-gray-950' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section badge */}
          <div className="flex justify-center mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${isDark ? 'bg-[#ec5f2b]/10 border border-[#ec5f2b]/20' : 'bg-[#ec5f2b]/5 border border-[#ec5f2b]/10'}`}>
              <span className={isDark ? 'text-white' : 'text-brand-charcoal'}>Why </span>
              <span className={isDark ? 'text-white' : 'text-brand-charcoal'}>Core</span><span className="text-[#ec5f2b]">Shift</span>
              <span className={isDark ? 'text-white' : 'text-brand-charcoal'}> Is Different</span>
            </span>
          </div>

          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-5 leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Every Other Option Costs You<br />
            <span className="text-[#ec5f2b]">More Money and More Time</span>
          </h2>

          <p className={`text-base text-center mb-12 max-w-3xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            You've already tried the alternatives. Here's why they keep failing:
          </p>

          {/* Competitors Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {competitors.map((comp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 rounded-2xl border flex flex-col ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 shadow-xl shadow-black/20'
                    : 'bg-white/80 border-gray-200/50 shadow-xl shadow-gray-500/5'
                }`}
              >
                <div className="mb-4 text-[#ec5f2b]">
                  <comp.icon className="w-12 h-12" strokeWidth={1.5} />
                </div>
                <h3 className={`text-lg md:text-xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  {comp.category}
                </h3>
                <ul className="space-y-3 mb-6 flex-grow">
                  {comp.problems.map((problem, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                        {problem}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className={`pt-4 mt-auto border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                  <p className={`text-sm font-semibold ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                    {comp.result}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CoreShift Difference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`p-8 rounded-2xl ${
              isDark
                ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-[#ec5f2b]/30 shadow-xl shadow-black/20'
                : 'bg-white/80 border border-[#ec5f2b]/30 shadow-xl shadow-gray-500/5'
            }`}
          >
            <h3 className={`text-xl md:text-2xl font-bold text-center mb-8 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              The <span className={isDark ? 'text-white' : 'text-brand-charcoal'}>Core</span><span className="text-[#ec5f2b]">Shift</span> Difference
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {coreShiftDifference.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    <item.icon className="w-12 h-12 text-[#ec5f2b]" strokeWidth={1.5} />
                  </div>
                  <h4 className={`font-bold text-lg mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {item.title}
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className={`text-lg font-semibold mb-6 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              Stop renting solutions. Start owning transformation.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-orange text-white rounded-xl font-semibold text-base hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              Get Your Free Revenue Leak Audit
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
