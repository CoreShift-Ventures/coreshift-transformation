'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, DollarSign, Lock } from 'lucide-react';
import { useTheme } from 'next-themes';

const challenges = [
  {
    icon: Database,
    title: 'Data Fragmentation',
    description: 'Customer intelligence scattered across Salesforce, Zendesk, Intercom, and spreadsheets—no single source of truth.',
    stat: '73%',
    statLabel: 'of CS teams cite data silos as their #1 challenge'
  },
  {
    icon: DollarSign,
    title: 'Vendor Lock-In Tax',
    description: 'Enterprise CS platforms cost $120K+ annually with rigid pricing tiers that scale with your ARR, not your needs.',
    stat: '$280K',
    statLabel: 'average first-year cost for enterprise CS tools'
  },
  {
    icon: Lock,
    title: 'Limited Flexibility',
    description: 'One-size-fits-all workflows that force your team to adapt to the tool, not the other way around.',
    stat: '6-12mo',
    statLabel: 'typical time to full deployment & adoption'
  }
];

export function ChallengeSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
          {/* Section badge */}
          <div className="flex justify-center mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${isDark ? 'bg-[#ec5f2b]/10 text-[#ec5f2b] border border-[#ec5f2b]/20' : 'bg-[#ec5f2b]/5 text-[#ec5f2b] border border-[#ec5f2b]/10'}`}>
              The Challenge
            </span>
          </div>

          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-5 leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            You've Outgrown Spreadsheets,<br />
            <span className="text-[#ec5f2b]">but Enterprise CS Tools Are Overkill</span>
          </h2>

          <p className={`text-base text-center mb-12 max-w-3xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Traditional CS platforms lock you into expensive contracts while your data remains siloed across systems you don't control.
          </p>

          {/* Challenge cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {challenges.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`group relative p-8 rounded-2xl transition-all duration-500 ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 border border-gray-800 hover:border-[#ec5f2b]/50 shadow-xl shadow-black/20'
                    : 'bg-white/80 hover:bg-white border border-gray-200/50 hover:border-[#ec5f2b]/50 shadow-xl shadow-gray-500/5'
                }`}
              >
                <div className="mb-4 text-[#ec5f2b]">
                  <item.icon className="w-12 h-12" strokeWidth={1.5} />
                </div>
                <h3 className={`text-lg md:text-xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  {item.title}
                </h3>
                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                  {item.description}
                </p>
                <div className={`pt-4 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                  <div className="text-xl font-bold text-[#ec5f2b] mb-1">{item.stat}</div>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>{item.statLabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
