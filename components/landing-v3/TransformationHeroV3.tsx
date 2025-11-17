'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

const rotatingStats = [
  "AI-driven automation can reduce operational costs by up to 40%",
  "Manual workflows drain 20–30% of productivity every day",
  "Automation-led companies grow up to 50% faster than their peers"
];

export function TransformationHeroV3() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [rotatingIndex, setRotatingIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % rotatingStats.length);
    }, 4000); // 4 seconds per stat
    return () => clearInterval(interval);
  }, []);

  const scrollToProcessSolutions = () => {
    const section = document.querySelector('section'); // First section after hero
    section?.scrollIntoView({ behavior: 'smooth' });
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
          AI-Powered Business Apps<br />
          That Transform How You Work
        </motion.h1>

        {/* Rotating hook - EXACT V2 STYLING */}
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
              {rotatingStats[rotatingIndex]}
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
          Proven workflow blueprints across sales, operations and finance transformed into custom systems engineered for your processes
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-3xl mx-auto px-4"
        >
          <button
            className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-lg font-semibold text-base hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Book Free Process Audit
          </button>
          <button
            onClick={scrollToProcessSolutions}
            className={`group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base transition-all hover:scale-105 shadow-md border whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 ${
              isDark
                ? 'bg-gray-900 hover:bg-gray-800 border-gray-700 text-gray-100 focus-visible:ring-offset-black'
                : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-900 focus-visible:ring-offset-white'
            }`}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            Explore Process Solutions
          </button>
        </motion.div>

        {/* Placeholder for future video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 px-4"
        >
          <div className={`aspect-video rounded-lg border-2 flex items-center justify-center ${
            isDark
              ? 'bg-gray-900 border-gray-800'
              : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto mb-4 text-[#ec5f2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
              <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Hero Video: 3-Process Demo
              </p>
              <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                45-50 seconds • Lead Conversion • Order Mgmt • Customer Success
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
