'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const rotatingTexts = [
  "$1M-$3M in Silent Revenue Leaks",
  "15-30% ARR Lost to Preventable Churn",
  "Post-Sales Teams Working Blind"
];

export function TransformationHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  useEffect(() => {
    const currentText = rotatingTexts[rotatingIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText !== currentText) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 80);
    } else if (!isDeleting && displayText === currentText) {
      // Pause at complete text
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText !== '') {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 40);
    } else if (isDeleting && displayText === '') {
      // Move to next text
      setIsDeleting(false);
      setRotatingIndex((prev) => (prev + 1) % rotatingTexts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, rotatingIndex]);

  return (
    <section className={`relative min-h-[85vh] flex items-center justify-center px-6 pt-32 pb-16 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(236, 95, 43, 0.2) 0%, rgba(236, 95, 43, 0.08) 40%, transparent 70%)'
              : 'radial-gradient(circle, rgba(236, 95, 43, 0.15) 0%, rgba(236, 95, 43, 0.05) 40%, transparent 70%)',
            animation: 'pulse 8s ease-in-out infinite'
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto z-10 text-center mt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-12 relative ${
            isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'
          }`}
          style={{
            boxShadow: isDark
              ? '0 0 25px rgba(236, 95, 43, 0.3), 0 0 50px rgba(236, 95, 43, 0.15), 0 2px 8px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              : '0 0 25px rgba(192, 192, 192, 0.8), 0 0 50px rgba(192, 192, 192, 0.4), 0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            border: isDark ? '2px solid rgba(236, 95, 43, 0.3)' : '2px solid rgba(0, 0, 0, 0.15)'
          }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>AI Transformation Partner</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-4xl md:text-5xl xl:text-6xl leading-[1.15] font-bold tracking-tight mb-6 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
        >
          Transform Post-Sales with
          <br />
          <span className="text-[#ec5f2b]">Strategy, Infrastructure & Expertise</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 font-normal leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
        >
          Stop losing revenue to preventable churn. We deliver the blueprint, build the AI-powered platform, and guide your team through execution.
        </motion.p>

        {/* Rotating hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12"
        >
          <div className={`text-2xl md:text-3xl font-semibold text-[#ec5f2b] leading-[1.2] tracking-tight min-h-[32px] md:min-h-[40px]`}>
            {displayText}<span className="animate-pulse font-thin">|</span>
          </div>
        </motion.div>

        {/* Credibility */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className={`text-sm font-medium mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        >
          20+ Years Post-Sales Leadership • Built for SAP, Talend, Algonomy
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/audit"
            className="group flex items-center gap-2 px-7 py-3.5 bg-brand-orange text-white rounded-xl font-semibold text-base hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl min-w-[240px] justify-center"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            Get Your Free Revenue Leak Audit
          </a>
          <a
            href="#how-we-transform"
            className={`group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:scale-105 hover:shadow-lg min-w-[240px] justify-center shadow-md border ${
              isDark
                ? 'bg-gray-900 hover:bg-gray-800 border-gray-700 text-gray-100'
                : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-900'
            }`}
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            See How We Transform
          </a>
        </motion.div>
      </div>
    </section>
  );
}
