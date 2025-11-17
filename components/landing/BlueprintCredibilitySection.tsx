'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Award, TrendingUp, Users } from 'lucide-react';

const experience = [
  {
    company: 'SAP',
    detail: 'Enterprise Software Leader',
    description: 'Global transformation methodology, process excellence at Fortune 500 scale',
    logo: '/logos/Companies/SAP.png',
    scale: 0.8,
    invertInDark: false
  },
  {
    company: 'IBM',
    detail: 'Cloud & Enterprise Systems',
    description: 'Systems engineering at scale, distributed architecture mastery',
    logo: '/logos/Companies/IBM.svg',
    scale: 1.2,
    invertInDark: true
  },
  {
    company: 'Talend',
    detail: 'Data Integration Leader',
    description: 'Data operations excellence, modern data architecture',
    logo: '/logos/Companies/Talend.png?v=2',
    scale: 1.2,
    invertInDark: false
  },
  {
    company: 'HP',
    detail: 'Enterprise Technology',
    description: 'Product thinking at scale, customer experience design',
    logo: '/logos/Companies/HP .svg',
    scale: 1,
    invertInDark: false
  },
  {
    company: 'Algonomy',
    detail: 'AI Powered Commerce',
    description: 'Algorithmic personalization, real time decisioning at enterprise scale',
    logo: '/logos/Companies/Algonomy.png',
    scale: 1,
    invertInDark: true
  }
];

const stats = [
  { number: '20+', label: 'Years in Post Sales', icon: Award },
  { number: '$100M+', label: 'Revenue Managed', icon: TrendingUp },
  { number: '500+', label: 'Enterprise Accounts', icon: Users }
];

export function BlueprintCredibilitySection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useState(() => {
    setMounted(true);
  });

  const isDark = mounted && theme === 'dark';

  return (
    <section className={`py-24 px-6 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6"
          >
            <Award className="w-4 h-4 text-brand-orange" />
            <span className={`text-sm font-semibold ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`}>
              Built by Enterprise CS Leaders
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
          >
            Blueprints Written by Leaders Who Built Post Sales Platforms at Scale
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-base max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Two decades of post sales leadership at best in class enterprise companies, now productized into transformation frameworks you can deploy in weeks.
          </motion.p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`text-center p-8 rounded-2xl ${
                  isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
                }`}
              >
                <Icon className={`w-10 h-10 mx-auto mb-4 ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`} />
                <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  {stat.number}
                </div>
                <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Logo Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`p-8 rounded-2xl relative overflow-hidden ${
            isDark
              ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-gray-700 shadow-2xl'
              : 'bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-200 shadow-2xl'
          }`}
        >
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50" />

          <h3 className={`text-xl font-bold mb-3 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            We've spent two decades on the other side of this problem
          </h3>

          <div className="relative overflow-hidden mt-8">
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
                  className={`flex-shrink-0 mx-4 p-6 rounded-xl border w-[300px] ${
                    isDark
                      ? 'bg-gray-800/50 border-gray-700 hover:border-brand-orange/50'
                      : 'bg-white border-gray-200 hover:border-brand-orange/50'
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
                  <p className={`text-xs leading-relaxed text-center ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                    {exp.description}
                  </p>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {experience.map((exp, i) => (
                <div
                  key={`second-${i}`}
                  className={`flex-shrink-0 mx-4 p-6 rounded-xl border w-[300px] ${
                    isDark
                      ? 'bg-gray-800/50 border-gray-700 hover:border-brand-orange/50'
                      : 'bg-white border-gray-200 hover:border-brand-orange/50'
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
                  <p className={`text-xs leading-relaxed text-center ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            You're not buying consulting hours. You're accessing frameworks that took 20 years to build.
          </p>
          <a
            href="/audit"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-xl font-semibold text-base hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Award className="w-5 h-5" />
            Get Your Free Revenue Leak Audit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
