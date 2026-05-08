// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    industry: 'Mobility Platform Client',
    challenge: '$1.2M+ churn, no visibility into customer sentiment, CSMs firefighting in spreadsheets',
    solution: 'Deployed AI-powered CS infrastructure with automated health scoring, churn prediction, and workflow orchestration',
    results: [
      '67% reduction in surprise churn (detected risk 90 days earlier)',
      '$800K ARR saved in first 6 months',
      'CSM productivity up 3x (eliminated 15 hours/week of manual work)',
      'NPS improved from 32 to 58'
    ],
    timeline: '30-day implementation, ROI in 4 months'
  },
  {
    industry: 'FinTech Client',
    challenge: 'Manual account reviews, no expansion pipeline, relying on Salesforce reports built in 2019',
    solution: 'Custom Post-sales Platform with usage analytics, automated expansion triggers, and playbook workflows',
    results: [
      'Expansion pipeline grew from $200K to $1.8M in 8 months',
      'Reduced time-to-upsell by 60% (from 6 months to 2.5 months)',
      'QBRs automated—CSMs focus on strategy, not slide decks',
      'Renewal rate improved from 82% to 94%'
    ],
    timeline: '30-day implementation, first expansion closed in Month 2'
  }
];

export function TransformationOverview() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <section className={`relative py-24 px-6 overflow-hidden ${
      isDark ? 'bg-gradient-to-b from-gray-950 to-black' : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
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
              Real Transformations
            </span>
          </div>

          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-5 leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            From Bleeding Revenue to<br />
            <span className="text-[#ec5f2b]">Predictable Growth</span>
          </h2>

          <p className={`text-base text-center mb-16 max-w-3xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Real companies. Real revenue saved. Real transformations in 30 days, not 18 months.
          </p>

          {/* Case Studies */}
          <div className="space-y-8">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`p-8 rounded-2xl ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 shadow-xl shadow-black/20'
                    : 'bg-white/80 border border-gray-200/50 shadow-xl shadow-gray-500/5'
                }`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-[#ec5f2b]">
                    <TrendingUp className="w-12 h-12" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      {study.industry}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      {study.timeline}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className={`font-bold text-sm mb-2 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      The Bleed
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className={`font-bold text-sm mb-2 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      The Fix
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className={`font-bold text-sm mb-2 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      The Results
                    </h4>
                    <ul className="space-y-2">
                      {study.results.slice(0, 2).map((result, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#ec5f2b] flex-shrink-0 mt-0.5" strokeWidth={2} />
                          <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`pt-6 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                  <h4 className={`font-bold text-sm mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    Additional Impact:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {study.results.slice(2).map((result, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#ec5f2b] flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                          {result}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className={`text-lg font-semibold mb-6 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              Your transformation could be next. See where you're bleeding revenue right now.
            </p>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-orange text-white rounded-xl font-semibold text-base hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              Get Your Free Revenue Leak Audit
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
