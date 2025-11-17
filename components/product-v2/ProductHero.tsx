'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ArrowRight, Zap } from 'lucide-react';

export function ProductHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  const videoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"]
  });

  // Video scales from 105% to 100% as you scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <section className={`relative pt-32 pb-16 px-6 ${isDark ? 'bg-gradient-to-b from-gray-950 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-4">
            <Zap className="w-4 h-4 text-brand-orange" />
            <span className="text-sm font-semibold text-brand-orange">
              AI-Powered Revenue Recovery
            </span>
          </div>

          {/* Headline */}
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 leading-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Stop Losing Revenue.{' '}
            <span className="text-brand-orange">Start Recovering It.</span>
          </h1>

          {/* Subheadline */}
          <p className={`text-base max-w-3xl mx-auto mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            AI-powered platform that finds hidden revenue leaks and turns them into growth opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a
              href="/audit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-lg font-semibold text-sm hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg"
            >
              Start Free Audit
              <ArrowRight className="w-4 h-4" />
            </a>
            <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105 ${
              isDark
                ? 'bg-gray-800 text-white border border-gray-700 hover:border-brand-orange'
                : 'bg-white text-brand-charcoal border border-gray-200 hover:border-brand-orange shadow-lg'
            }`}>
              Watch Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className={`flex items-center justify-center gap-6 text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free 3-minute audit
            </div>
          </div>
        </motion.div>

        {/* Video Section */}
        <div className="max-w-5xl mx-auto mt-12">
          <motion.div
            ref={videoRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              style={{ scale, opacity }}
              className="relative aspect-video rounded-xl overflow-hidden shadow-xl"
            >
              {/* Placeholder for product demo video */}
              <div className={`w-full h-full flex items-center justify-center ${
                isDark
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                  : 'bg-gradient-to-br from-gray-100 to-gray-200'
              }`}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-orange rounded-xl mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Product demo video</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
