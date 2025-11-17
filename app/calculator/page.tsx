'use client';

import { Navigation } from '@/components/landing-v2/Navigation';
import { GrowthCalculator } from '@/components/landing-v2/GrowthCalculator';
import { Footer } from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CalculatorPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <>
      <Navigation />
      <main className={`min-h-screen pt-24 ${isDark ? 'bg-black' : 'bg-white'}`}>
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-brand-charcoal'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <section className={`px-6 pb-8 ${isDark ? 'bg-black' : 'bg-white'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
            >
              Calculate Your <span className="text-[#ec5f2b]">Growth Potential</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-base max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            >
              See the real impact of transforming your business processes with AI-powered automation.
              Input your current metrics to discover untapped revenue and efficiency gains.
            </motion.p>
          </div>
        </section>

        {/* Calculator */}
        <GrowthCalculator />

        {/* CTA Section */}
        <section className={`py-16 px-6 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
            >
              Ready to Unlock This Growth?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`text-base mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            >
              Let's discuss how we can transform your specific processes and achieve these results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-lg font-semibold hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg"
              >
                See How We Transform Processes
              </Link>
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-md border ${
                  isDark
                    ? 'bg-gray-900 hover:bg-gray-800 border-gray-700 text-gray-100'
                    : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-900'
                }`}
              >
                Book a Strategy Call
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
