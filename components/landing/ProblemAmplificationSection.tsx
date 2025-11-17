'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { AlertTriangle, TrendingDown, DollarSign, Target, Clock, Flame, Volume2 } from 'lucide-react';

const challenges = [
  {
    icon: TrendingDown,
    title: 'Reactive Firefighting',
    description: 'Your team only knows customers are unhappy when they churn'
  },
  {
    icon: DollarSign,
    title: 'Missed Expansion',
    description: 'You have no visibility into which customers are ready to expand'
  },
  {
    icon: Target,
    title: 'Manual Chaos',
    description: 'CSMs buried in spreadsheets instead of strategic relationships'
  },
  {
    icon: Clock,
    title: 'Detection Lag',
    description: 'By the time your data shows risk, it\'s too late to save the account'
  },
  {
    icon: Flame,
    title: 'Overwhelming Loads',
    description: 'Your team drowns in manual work instead of building relationships'
  },
  {
    icon: Volume2,
    title: 'Dark Sentiment',
    description: 'Customer signals buried in support tickets go unnoticed until churn'
  }
];

const symptoms = [
  'Surprise churns every quarter—"They seemed fine last week"',
  'CSMs managing relationships through Excel and gut feel',
  'Support tickets contain early warnings no one sees',
  'Expansion conversations happen too late or not at all',
  'Leadership asks "Why didn\'t we see this coming?"',
  'You\'ve tried adding more tools, but the chaos just spreads'
];

export function ProblemAmplificationSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useState(() => {
    setMounted(true);
  });

  const isDark = mounted && theme === 'dark';

  return (
    <section className={`relative py-24 px-6 overflow-hidden ${isDark ? 'bg-gradient-to-b from-gray-950 to-black' : 'bg-gradient-to-b from-transparent to-gray-100/50'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex justify-center mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${isDark ? 'bg-brand-orange/10 text-brand-orange border border-brand-orange/20' : 'bg-brand-orange/5 text-brand-orange border border-brand-orange/10'}`}>
              The Invisible Bleed
            </span>
          </div>

          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-5 leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Most Post Sales Teams Are Flying Blind
          </h2>

          <p className={`text-base text-center mb-12 max-w-3xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Without predictive intelligence and strategic architecture, you're reacting to problems instead of preventing them.
          </p>

          {/* Challenge Cards - 3 Column Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {challenges.map((challenge, i) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`group relative p-8 rounded-2xl transition-all duration-500 ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 border border-gray-800 hover:border-brand-orange/50 shadow-xl shadow-black/20'
                      : 'bg-white/80 hover:bg-white border border-gray-200/50 hover:border-brand-orange/50 shadow-xl shadow-gray-500/5'
                  }`}
                >
                  <div className="mb-4 text-brand-orange">
                    <Icon className="w-12 h-12" strokeWidth={1.5} />
                  </div>
                  <h3 className={`text-lg md:text-xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {challenge.title}
                  </h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                    {challenge.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Symptoms Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`mt-16 p-8 rounded-2xl ${
              isDark
                ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800'
                : 'bg-white/80 border border-gray-200/50 shadow-xl shadow-gray-500/5'
            }`}
          >
            <h3 className={`text-xl md:text-2xl font-bold mb-8 text-center ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              If This Sounds Familiar, You're Already Bleeding
            </h3>
            <div className="space-y-4 max-w-4xl mx-auto">
              {symptoms.map((symptom, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {symptom}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing Hook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center mt-12"
          >
            <p className={`text-lg font-semibold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              The cost of doing nothing: <span className="text-brand-orange">Revenue leak that compounds every quarter.</span>
            </p>
            <p className={`text-base mb-6 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
              The worst part? Your competitors implementing AI first operations are moving 10x faster while you're stuck in manual mode.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-orange text-white rounded-xl font-semibold text-base hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              Calculate Your Revenue Leak
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
