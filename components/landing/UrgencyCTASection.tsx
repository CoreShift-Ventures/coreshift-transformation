'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingDown, DollarSign } from 'lucide-react';
import { useTheme } from 'next-themes';

const urgencyStats = [
  {
    icon: Clock,
    stat: 'Every Quarter You Wait',
    impact: '23% compounding revenue loss',
    detail: 'Churn accelerates, CAC compounds, market share erodes',
    iconColor: '#ef4444'
  },
  {
    icon: TrendingDown,
    stat: 'Every Customer That Churns',
    impact: '5-7x CAC to replace',
    detail: 'Plus the opportunity cost of CSM time on firefighting',
    iconColor: '#f97316'
  },
  {
    icon: DollarSign,
    stat: 'Every Missed Expansion',
    impact: '$50K-$200K ARR gone',
    detail: 'Your competitor just closed it instead',
    iconColor: '#ec5f2b'
  }
];

export function UrgencyCTASection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <section className={`relative py-24 px-6 overflow-hidden ${isDark ? 'bg-gradient-to-b from-gray-950 via-black to-gray-950' : 'bg-gradient-to-b from-white via-gray-50 to-white'}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(236, 95, 43, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section badge */}
          <div className="flex justify-center mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${isDark ? 'bg-[#ec5f2b]/10 text-[#ec5f2b] border border-[#ec5f2b]/20' : 'bg-[#ec5f2b]/5 text-[#ec5f2b] border border-[#ec5f2b]/10'}`}>
              The Cost of Waiting
            </span>
          </div>

          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-5 leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Revenue Loss Accelerates<br />
            <span className="text-[#ec5f2b]">While You Wait</span>
          </h2>

          <p className={`text-base text-center mb-12 max-w-3xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Right now, while you're reading this, customers are going silent, expansion signals are expiring, and your competitors are moving faster.
          </p>

          {/* Urgency Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {urgencyStats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative p-8 rounded-2xl border-2 flex flex-col transition-all duration-300 ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-gray-700 shadow-xl shadow-black/20 hover:border-gray-600'
                    : 'bg-gradient-to-br from-white via-gray-50 to-white border-gray-200 shadow-xl shadow-gray-500/5 hover:border-gray-300'
                }`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.iconColor}, transparent)`
                  }}
                />

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    style={{
                      background: `linear-gradient(135deg, ${item.iconColor}20, ${item.iconColor}10)`
                    }}
                  >
                    <item.icon
                      className="w-10 h-10"
                      style={{ color: item.iconColor }}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Stat Title */}
                <h3 className={`text-lg md:text-xl font-bold mb-4 text-center ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  {item.stat}
                </h3>

                {/* Impact - emphasized */}
                <div className={`py-3 px-4 rounded-xl mb-4 ${
                  isDark ? 'bg-gray-800/50' : 'bg-gray-50'
                }`}>
                  <div className="text-lg md:text-xl font-bold text-center text-[#ec5f2b] leading-tight">
                    {item.impact}
                  </div>
                </div>

                {/* Detail */}
                <p className={`text-sm text-center leading-relaxed ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`p-8 rounded-2xl text-center ${
              isDark
                ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-[#ec5f2b]/30 shadow-xl shadow-black/20'
                : 'bg-white/80 border border-[#ec5f2b]/30 shadow-xl shadow-gray-500/5'
            }`}
          >
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              Start Your Transformation Today.
            </h3>
            <p className={`text-base mb-8 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
              Get your free Revenue Leak Audit. See exactly where you're losing revenue, what it's costing you, and how to fix it in 30 days.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/audit"
                className="group flex items-center gap-2 px-7 py-3.5 bg-brand-orange text-white rounded-xl font-semibold text-base hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl min-w-[280px] justify-center"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Get Your Free Revenue Leak Audit
              </a>
              <a
                href="/contact"
                className={`group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:scale-105 hover:shadow-lg min-w-[280px] justify-center shadow-md border ${
                  isDark
                    ? 'bg-gray-900 hover:bg-gray-800 border-gray-700 text-gray-100'
                    : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-900'
                }`}
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Schedule 15-Minute Alignment Call
              </a>
            </div>

            <p className={`text-sm mt-6 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              No pressure. No pitch. Just a real conversation about your post-sales operations and whether we can help.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
