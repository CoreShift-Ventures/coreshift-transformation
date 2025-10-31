'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X, UserCheck, Key, Sparkles, Rocket, DollarSign, Target } from 'lucide-react';
import { useTheme } from 'next-themes';

const experience = [
  {
    company: 'SAP',
    detail: 'Enterprise Software Leader',
    description: 'Global transformation methodology, process excellence at Fortune 500 scale',
    logo: '/logos/Companies/SAP_logo.png',
    scale: 2,
    invertInDark: false // Keep original colors
  },
  {
    company: 'IBM',
    detail: 'Cloud & Enterprise Systems',
    description: 'Systems engineering at scale, distributed architecture mastery',
    logo: '/logos/Companies/IBM_logo.svg.png',
    scale: 0.75,
    invertInDark: true
  },
  {
    company: 'HCL Technologies',
    detail: 'Global Services',
    description: 'Global delivery models, distributed team orchestration',
    logo: '/logos/Companies/HCLTech.png',
    scale: 3,
    invertInDark: true
  },
  {
    company: 'Talend',
    detail: 'Data Integration Leader',
    description: 'Data operations excellence, modern data architecture',
    logo: '/logos/Companies/Talend.png',
    scale: 3,
    invertInDark: false
  },
  {
    company: 'HP',
    detail: 'Enterprise Technology',
    description: 'Product thinking at scale, customer experience design',
    logo: '/logos/Companies/Hewlett_Packard_Enterprise_logo_2025.svg.png',
    scale: 0.75,
    invertInDark: true
  },
  {
    company: 'Algonomy',
    detail: 'AI-Powered Commerce',
    description: 'Algorithmic personalization, real-time decisioning at enterprise scale',
    logo: '/logos/Companies/Algonomy-Logo-high-resolution.png',
    scale: 1,
    invertInDark: true
  }
];

const principles = [
  {
    title: 'You Work Directly With the Founder',
    description: 'Not a 2-year analyst working alone',
    subtitle: 'No bait-and-switch after sales call',
    icon: UserCheck
  },
  {
    title: 'You Own Everything We Build',
    description: 'Deployed to your infrastructure, zero lock-in',
    subtitle: 'Your asset, not our recurring revenue',
    icon: Key
  },
  {
    title: 'AI-First, Not AI-Washed',
    description: 'Built on AI from day one, not retrofitted',
    subtitle: 'Autonomous agents, not chatbot gimmicks',
    icon: Sparkles
  },
  {
    title: '30-Day Implementation',
    description: 'Not 18 months of change management',
    subtitle: 'Fast enough to stop this quarter churn',
    icon: Rocket
  },
  {
    title: 'Fixed, Transparent Pricing',
    description: '90% less investment, no surprise invoices',
    subtitle: 'Enterprise outcomes at 1/10th the cost',
    icon: DollarSign
  },
  {
    title: 'Results-Driven Partnership',
    description: 'Success measured by outcomes, not hours',
    subtitle: 'We succeed when you succeed',
    icon: Target
  }
];

const brokenModel = [
  {
    problem: 'They sell the partner, deliver the intern',
    impact: 'You pay $350+/hr for someone learning on your dime'
  },
  {
    problem: 'They build dependency, not capability',
    impact: 'Quarterly "check-ins" become permanent rent'
  },
  {
    problem: 'They leave when the contract ends',
    impact: 'Not when you actually succeed'
  }
];

export function WhyUsSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <section className={`relative py-24 px-6 overflow-hidden ${isDark ? 'bg-gradient-to-b from-black via-gray-950 to-black' : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'}`}>
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)',
            animation: 'pulse 8s ease-in-out infinite'
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(34, 197, 94, 0.05) 0%, transparent 70%)',
            animation: 'pulse 10s ease-in-out infinite',
            animationDelay: '2s'
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
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${isDark ? 'bg-[#ec5f2b]/10 border border-[#ec5f2b]/20' : 'bg-[#ec5f2b]/5 border border-[#ec5f2b]/10'}`}>
              <span className={isDark ? 'text-white' : 'text-brand-charcoal'}>Who's Behind </span><span className={isDark ? 'text-white' : 'text-brand-charcoal'}>Core</span><span className="text-[#ec5f2b]">Shift</span>
            </span>
          </div>

          {/* Headline */}
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-5 leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Enterprise Transformation Expertise.<br />
            <span className="text-[#ec5f2b]">Startup Speed & AI Power.</span>
          </h2>

          <p className={`text-base text-center mb-12 max-w-3xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            20+ years architecting enterprise transformations at the companies that wrote the playbook. Now bringing that methodology supercharged with AI to growth-stage B2B SaaS.
          </p>

          {/* Experience Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mb-16 p-10 rounded-2xl relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-gray-700 shadow-2xl shadow-black/40'
                : 'bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-200 shadow-2xl shadow-gray-500/10'
            }`}
          >
            {/* Subtle accent line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ec5f2b] to-transparent opacity-50`} />

            <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Built for Enterprise. Designed for You.
            </h3>
            <p className={`mb-10 text-base font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
              We've spent two decades on the other side of this problem:
            </p>

            {/* Animated Logo Ticker */}
            <div className="relative overflow-hidden mb-10">
              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .ticker-wrapper {
                  display: flex;
                  animation: scroll 30s linear infinite;
                }
                .ticker-wrapper:hover {
                  animation-play-state: paused;
                }
              `}</style>

              <div className="ticker-wrapper">
                {/* First set of logos */}
                {experience.map((exp, i) => (
                  <div
                    key={`first-${i}`}
                    className={`flex-shrink-0 mx-8 p-6 rounded-xl border w-[300px] ${
                      isDark
                        ? 'bg-gray-800/50 border-gray-700 hover:border-[#ec5f2b]/50'
                        : 'bg-white border-gray-200 hover:border-[#ec5f2b]/50'
                    } transition-all duration-300 hover:shadow-lg group`}
                  >
                    {/* Logo */}
                    <div className="mb-4 h-16 flex items-center justify-center">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className={`max-h-10 w-auto object-contain transition-all duration-300 ${
                          isDark
                            ? exp.invertInDark
                              ? 'brightness-0 invert opacity-80 group-hover:opacity-100'
                              : 'opacity-80 group-hover:opacity-100'
                            : 'opacity-70 group-hover:opacity-100'
                        }`}
                        style={{
                          maxWidth: '120px',
                          transform: `scale(${exp.scale || 1})`
                        }}
                      />
                    </div>

                    {/* Detail badge */}
                    <div className={`text-xs font-semibold mb-3 text-center uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {exp.detail}
                    </div>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed text-center font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                      {exp.description}
                    </p>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {experience.map((exp, i) => (
                  <div
                    key={`second-${i}`}
                    className={`flex-shrink-0 mx-8 p-6 rounded-xl border w-[300px] ${
                      isDark
                        ? 'bg-gray-800/50 border-gray-700 hover:border-[#ec5f2b]/50'
                        : 'bg-white border-gray-200 hover:border-[#ec5f2b]/50'
                    } transition-all duration-300 hover:shadow-lg group`}
                  >
                    {/* Logo */}
                    <div className="mb-4 h-16 flex items-center justify-center">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className={`max-h-10 w-auto object-contain transition-all duration-300 ${
                          isDark
                            ? exp.invertInDark
                              ? 'brightness-0 invert opacity-80 group-hover:opacity-100'
                              : 'opacity-80 group-hover:opacity-100'
                            : 'opacity-70 group-hover:opacity-100'
                        }`}
                        style={{
                          maxWidth: '120px',
                          transform: `scale(${exp.scale || 1})`
                        }}
                      />
                    </div>

                    {/* Detail badge */}
                    <div className={`text-xs font-semibold mb-3 text-center uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {exp.detail}
                    </div>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed text-center font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`pt-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <p className={`text-lg font-medium ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                We've led transformations that cost millions and took years. We know what works and what's theater.
              </p>
            </div>
          </motion.div>

          {/* The Difference Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`mb-16 p-10 rounded-2xl relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-gray-700 shadow-2xl shadow-black/40'
                : 'bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-200 shadow-2xl shadow-gray-500/10'
            }`}
          >
            {/* Subtle accent line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ec5f2b] to-transparent opacity-50`} />

            <h3 className={`text-2xl md:text-3xl font-bold text-center mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Why <span className={isDark ? 'text-white' : 'text-gray-900'}>Core</span><span className="text-[#ec5f2b]">Shift</span> Exists
            </h3>
            <p className={`text-base text-center mb-10 max-w-3xl mx-auto font-light ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              After watching Big Firms sell junior talent at senior prices, and SaaS vendors trap clients in rigid platforms, we built the alternative we wish existed when we were on your side of the table.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {principles.map((principle, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className={`p-6 rounded-xl border group hover:scale-105 transition-all duration-300 flex flex-col ${
                    isDark
                      ? 'bg-gray-800/50 border-gray-700 hover:border-[#ec5f2b]/50 shadow-lg shadow-black/20'
                      : 'bg-white border-gray-200 hover:border-[#ec5f2b]/50 shadow-lg shadow-gray-500/5'
                  }`}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <principle.icon className="w-7 h-7 text-green-500" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h4 className={`font-semibold text-sm mb-3 text-center min-h-[40px] flex items-center justify-center uppercase tracking-wide ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {principle.title}
                  </h4>
                  <p className={`mb-2 text-sm text-center leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {principle.description}
                  </p>
                  <p className={`text-xs text-center leading-relaxed mt-auto ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {principle.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* The Broken Model Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`p-10 rounded-2xl relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-br from-red-950/30 via-gray-900 to-gray-900 border-2 border-red-900/40 shadow-2xl shadow-black/40'
                : 'bg-gradient-to-br from-red-50/80 via-white to-white border-2 border-red-200/60 shadow-2xl shadow-red-500/10'
            }`}
          >
            {/* Subtle accent line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50`} />

            <h3 className={`text-2xl md:text-3xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
              The Broken Model
            </h3>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
              {brokenModel.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  className={`p-6 rounded-xl border group hover:scale-105 transition-all duration-300 ${
                    isDark
                      ? 'bg-gray-900/50 border-red-900/30 hover:border-red-700/50 shadow-lg shadow-black/20'
                      : 'bg-white border-red-200/50 hover:border-red-400/50 shadow-lg shadow-red-500/5'
                  }`}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                      <X className="w-7 h-7 text-red-500" strokeWidth={2.5} />
                    </div>
                  </div>
                  <p className={`font-semibold text-sm mb-3 text-center min-h-[40px] flex items-center justify-center ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {item.problem}
                  </p>
                  <p className={`text-xs text-center leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    → {item.impact}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className={`pt-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <p className={`text-base text-center font-medium leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                We wanted to build something different:<br />
                A true partnership where your success is the only metric that matters.
              </p>
            </div>
          </motion.div>

          {/* Closing Statement - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`mt-16 p-10 rounded-2xl relative overflow-hidden text-center ${
              isDark
                ? 'bg-gradient-to-br from-gray-900 via-[#ec5f2b]/5 to-gray-900 border-2 border-[#ec5f2b]/30 shadow-2xl shadow-[#ec5f2b]/10'
                : 'bg-gradient-to-br from-white via-[#ec5f2b]/5 to-white border-2 border-[#ec5f2b]/20 shadow-2xl shadow-[#ec5f2b]/10'
            }`}
          >
            {/* Subtle accent lines */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ec5f2b] to-transparent`} />
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ec5f2b] to-transparent`} />

            <p className={`text-xl md:text-2xl font-bold mb-6 max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-white' : 'text-gray-900'}`}>
              You're not hiring a vendor.<br />
              You're not hiring a consultant.
            </p>
            <p className={`text-lg md:text-xl font-medium mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
              You're gaining a transformation partner who's been in the enterprise trenches and emerged with the blueprint.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-xl font-semibold text-base hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Meet for a 15-Minute Alignment Call →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
