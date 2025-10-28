'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { ArrowRight, Sparkles } from 'lucide-react';

export function TransformationOverview() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <section className={`relative py-24 px-6 overflow-hidden ${
      isDark ? 'bg-gradient-to-b from-black to-gray-950' : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 ${
            isDark ? 'bg-gray-900 text-white border border-gray-800' : 'bg-white text-black border border-gray-200'
          }`}>
            <Sparkles className="w-4 h-4 text-brand-orange" />
            <span>Digital Transformation</span>
          </div>

          <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-6 ${
            isDark ? 'text-white' : 'text-brand-charcoal'
          }`}>
            Beyond Customer Success:<br />
            <span className="text-brand-orange">Business Transformation</span>
          </h2>

          <p className={`text-lg max-w-3xl mx-auto mb-10 leading-relaxed ${
            isDark ? 'text-gray-400' : 'text-brand-gray'
          }`}>
            While CoreShift powers post-sales teams, our engineering expertise extends to full-scale
            digital transformation—replacing legacy systems, automating workflows, and building
            modern platforms tailored to your business.
          </p>

          <a
            href="/transformation"
            className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-all hover:scale-105 hover:shadow-lg border ${
              isDark
                ? 'bg-gray-900 hover:bg-gray-800 border-gray-700 text-gray-100'
                : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-900'
            }`}
          >
            <Sparkles className="w-5 h-5 text-brand-orange" />
            Explore Transformation Services
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
