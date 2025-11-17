'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

const rotatingTexts = [
  "Start with Strategy: Blueprint Your Transformation",
  "Build with AI: Enterprise-Grade Systems in Weeks",
  "Scale with Confidence: Your Process, Your Advantage"
];

export function TransformationHeroV2() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [rotatingIndex, setRotatingIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const scrollToCalculator = () => {
    const calculator = document.getElementById('growth-calculator');
    calculator?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    const howItWorks = document.getElementById('how-it-works');
    howItWorks?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center px-6 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1200px] lg:h-[1200px] rounded-full blur-3xl"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(236, 95, 43, 0.2) 0%, rgba(236, 95, 43, 0.08) 40%, transparent 70%)'
              : 'radial-gradient(circle, rgba(236, 95, 43, 0.15) 0%, rgba(236, 95, 43, 0.05) 40%, transparent 70%)',
            animation: 'pulse 8s ease-in-out infinite'
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto z-10 text-center mt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-12 relative ${
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
          <span>Working Prototype in 2 Weeks</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-3xl sm:text-4xl lg:text-4xl xl:text-5xl leading-tight font-bold tracking-tight mb-6 px-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
        >
          AI-Powered Business Process Transformation
        </motion.h1>

        {/* Rotating hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10 px-4 min-h-[90px] md:min-h-[85px] flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={rotatingIndex}
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl xl:text-3xl font-semibold text-[#ec5f2b] leading-[1.3] tracking-tight text-center"
            >
              {rotatingTexts[rotatingIndex]}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-sm sm:text-base max-w-3xl mx-auto mb-10 font-light leading-relaxed px-4 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}
        >
          Transform how you convert leads, manage operations, and retain customers.
          <br />
          Bespoke systems for YOUR processes, AI-powered, deployed in weeks not months.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-3xl mx-auto px-4"
        >
          <button
            onClick={scrollToCalculator}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-lg font-semibold text-base hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Calculate Your Growth Potential
          </button>
          <button
            onClick={scrollToHowItWorks}
            className={`group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base transition-all hover:scale-105 shadow-md border whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 ${
              isDark
                ? 'bg-gray-900 hover:bg-gray-800 border-gray-700 text-gray-100 focus-visible:ring-offset-black'
                : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-900 focus-visible:ring-offset-white'
            }`}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            See How We Transform Processes
          </button>
        </motion.div>

        {/* Credibility */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-2 px-4"
        >
          <svg className="w-4 h-4 text-[#ec5f2b] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <div className={`text-xs font-medium text-center ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            <span>See working prototype in 2 weeks • Production-ready • AI-powered • Your infrastructure</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`w-6 h-10 border-2 rounded-full flex items-start justify-center pt-2 ${
              isDark ? 'border-gray-600' : 'border-gray-400'
            }`}
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#ec5f2b] rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
