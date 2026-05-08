// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { DEMO_URLS } from '@/config/brand';
import { DemoOptionsModal } from '@/components/modals/DemoOptionsModal';
import { InstantAccessForm } from '@/components/forms/InstantAccessForm';
import { DemoQualificationForm } from '@/components/forms/DemoQualificationForm';

const rotatingTexts = [
  "23% of Contractual Revenue Right Now",
  "$1M-$3M in Silent Revenue Leaks",
  "Revenue While You're Reading This",
  "15-30% ARR Through Silent Customer Exit"
];

export function HeroSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDemoOptions, setShowDemoOptions] = useState(false);
  const [showInstantAccess, setShowInstantAccess] = useState(false);
  const [showGuidedDemo, setShowGuidedDemo] = useState(false);

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
    <section className={`relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
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

      <div className="relative max-w-5xl mx-auto z-10 text-center">
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          <span>Stop Revenue Leak</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-4xl md:text-5xl leading-[1.1] font-bold tracking-[-0.02em] mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
        >
          Preventable Churn is Costing You
        </motion.h1>

        {/* Rotating hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-16"
        >
          <div className={`text-3xl md:text-4xl font-semibold text-[#ec5f2b] leading-[1.1] tracking-[-0.02em] min-h-[36px] md:min-h-[44px]`}>
            {displayText}<span className="animate-pulse font-thin">|</span>
          </div>
        </motion.div>

        {/* Sub-headline with more spacing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base max-w-3xl mx-auto mb-12 font-light leading-relaxed ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}
        >
          While your Post-Sales team works blind, 3 customers are planning to churn, 5 expansion opportunities are being missed, and your CAC is burning through the cracks of spreadsheets and siloed tools.
        </motion.p>

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
          <button
            onClick={() => setShowDemoOptions(true)}
            className={`group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:scale-105 hover:shadow-lg min-w-[240px] justify-center shadow-md border ${
              isDark
                ? 'bg-gray-900 hover:bg-gray-800 border-gray-700 text-gray-100'
                : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-900'
            }`}
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            See the Transformation Engine
          </button>
        </motion.div>
      </div>

      {/* Modals */}
      <DemoOptionsModal
        isOpen={showDemoOptions}
        onClose={() => setShowDemoOptions(false)}
        onSelectInstantAccess={() => {
          setShowDemoOptions(false);
          setShowInstantAccess(true);
        }}
        onSelectGuidedDemo={() => {
          setShowDemoOptions(false);
          setShowGuidedDemo(true);
        }}
      />

      {showInstantAccess && (
        <InstantAccessForm onClose={() => setShowInstantAccess(false)} />
      )}

      {showGuidedDemo && (
        <DemoQualificationForm onClose={() => setShowGuidedDemo(false)} />
      )}
    </section>
  );
}
