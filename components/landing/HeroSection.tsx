'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { DEMO_URLS } from '@/config/brand';
import { DemoOptionsModal } from '@/components/modals/DemoOptionsModal';
import { InstantAccessForm } from '@/components/forms/InstantAccessForm';
import { DemoQualificationForm } from '@/components/forms/DemoQualificationForm';

const rotatingTexts = [
  "Start with Strategy: Blueprint Your Transformation",
  "Activate Engine: Deploy AI-Powered Modules in Weeks, Not Months",
  "Execute with Expertise: 20 Years of Proven Playbooks"
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
          className={`text-3xl sm:text-4xl lg:text-4xl xl:text-5xl leading-tight font-bold tracking-tight mb-6 px-4 lg:whitespace-nowrap ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
        >
          $100M CS Teams Run on Architecture, Not Tools
        </motion.h1>

        {/* Rotating hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-16 px-4"
        >
          <div className={`text-xl md:text-2xl xl:text-3xl font-semibold text-[#ec5f2b] leading-[1.3] tracking-tight min-h-[90px] md:min-h-[85px]`}>
            {displayText}<span className="animate-pulse font-thin">|</span>
          </div>
        </motion.div>

        {/* Sub-headline with more spacing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-sm sm:text-base max-w-3xl mx-auto mb-10 font-light leading-relaxed px-4 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}
        >
          Elite CS teams run on architecture, not luck. We blueprint your transformation, build your AI-powered engine, and activate enterprise-grade revenue growth function.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-3xl mx-auto px-4"
        >
          <a
            href="/audit"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-lg font-semibold text-base hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            Get Your Free Revenue Leak Audit
          </a>
          <a
            href="#three-paths"
            className={`group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base transition-all hover:scale-105 shadow-md border whitespace-nowrap ${
              isDark
                ? 'bg-gray-900 hover:bg-gray-800 border-gray-700 text-gray-100'
                : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-900'
            }`}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            See How We Transform
          </a>
        </motion.div>

        {/* Credibility with small icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-2 px-4"
        >
          <svg className="w-4 h-4 text-[#ec5f2b] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <div className={`text-xs font-medium text-center ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            <span className="hidden sm:inline">Two Decades Leading Post-Sales at Enterprise Scale • Now Helping Growth-Stage Teams</span>
            <span className="sm:hidden">20+ Years Enterprise CS Leadership</span>
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
