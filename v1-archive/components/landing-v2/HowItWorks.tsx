// @ts-nocheck
'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Search, Rocket, TrendingUp, Clock, CheckCircle2, Layers } from 'lucide-react';

export function HowItWorks() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const phases = [
    {
      number: '1',
      title: 'Strategy, Blueprint & Working Prototype',
      duration: '2 weeks',
      icon: Search,
      deliverables: 'Process transformation roadmap + Working POC',
      scope: 'Discovery + Strategic Roadmap + Clickable Prototype',
      outcome: 'See it working BEFORE committing to full build'
    },
    {
      number: '2',
      title: 'Build & Deploy Your Transformed Process',
      duration: '4-6 weeks',
      icon: Rocket,
      deliverables: 'Production system deployed to your infrastructure',
      scope: 'Full development + AI integration + Training + Deployment',
      outcome: 'Live system transforming your business operations'
    },
    {
      number: '3',
      title: 'Evolve & Optimize',
      duration: 'Ongoing - Optional',
      icon: TrendingUp,
      deliverables: 'Continuous improvement and feature additions',
      scope: 'Monthly retainer or project-based enhancements',
      outcome: 'Your system adapts as your business evolves'
    }
  ];

  return (
    <section id="how-it-works" className={`py-16 px-6 relative ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
          >
            How Business Process
            <br />
            <span className="text-[#ec5f2b]">Transformation Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-sm max-w-3xl mx-auto mt-6 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}
          >
            Strategy → Prototype → Transform → Evolve
          </motion.p>
        </div>

        <div className="space-y-5">
          {phases.map((phase, index) => {
            const Icon = phase.icon;

            return (
              <motion.div
                key={index}
                className={`rounded-2xl p-6 border ${
                  isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                } shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#ec5f2b] to-[#d94f1f] rounded-xl shadow-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{phase.number}</span>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#ec5f2b] to-[#d94f1f] rounded-xl shadow-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      {phase.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[#ec5f2b]">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-semibold">{phase.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-3">
                  <div className={`rounded-xl p-4 border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-[#ec5f2b]" />
                      <h4 className={`text-sm font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>What We Deliver</h4>
                    </div>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{phase.deliverables}</p>
                  </div>
                  <div className={`rounded-xl p-4 border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="w-4 h-4 text-[#ec5f2b]" />
                      <h4 className={`text-sm font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>What's Included</h4>
                    </div>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{phase.scope}</p>
                  </div>
                  <div className={`rounded-xl p-4 border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-[#ec5f2b]" />
                      <h4 className={`text-sm font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>The Result</h4>
                    </div>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{phase.outcome}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className={`mt-10 rounded-2xl p-4 border ${
            isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-base font-bold mb-6 text-center ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Timeline Comparison</h3>
          <div className="grid md:grid-cols-3 gap-3 text-center">
            <div>
              <div className={`text-sm mb-2 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>CoreShift</div>
              <div className="text-3xl font-bold text-[#ec5f2b] mb-2">6-8 weeks</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>2 weeks POC → 6 weeks live → Results</div>
            </div>
            <div>
              <div className={`text-sm mb-2 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Traditional Development</div>
              <div className="text-3xl font-bold text-orange-500 mb-2">12-18 months</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>3 months planning → 12 months build</div>
            </div>
            <div>
              <div className={`text-sm mb-2 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>SaaS Conformity</div>
              <div className="text-3xl font-bold text-[#ec5f2b] mb-2">Day 1 → Forever</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Instant → Months adapting → Disadvantage</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={`mb-6 ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} rounded-2xl p-6 border inline-block`}>
            <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Next Step</h3>
            <p className={`text-base mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className="font-bold">2-week Strategy + Blueprint + Working POC</span>
            </p>
            <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              See proof it works before full commitment
            </p>
          </div>
          <p className={`text-xl md:text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            "See results in <span className="text-[#ec5f2b]">weeks, not quarters</span>."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
