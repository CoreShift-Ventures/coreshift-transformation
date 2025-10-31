'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Check, ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';

interface LiveDemoSectionProps {
  onRequestDemo?: () => void;
}

export function LiveDemoSection({ onRequestDemo }: LiveDemoSectionProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  // TODO: Replace this placeholder URL with your actual Loom/YouTube video URL
  const VIDEO_URL = ''; // Add your video URL here when ready

  const outcomes = [
    'Real-time customer health visibility across your entire portfolio',
    'AI-powered risk detection 90 days before churn',
    'Automated playbook execution that saves 40% of CSM time',
    'Unified customer 360 view pulling from all your data sources'
  ];

  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #ec5f2b 1px, transparent 1px), linear-gradient(to bottom, #ec5f2b 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className={`inline-block px-4 py-2 rounded-full font-semibold text-sm mb-6 ${isDark ? 'bg-[#ec5f2b]/10 text-[#ec5f2b] border border-[#ec5f2b]/20' : 'bg-[#ec5f2b]/5 text-[#ec5f2b] border border-[#ec5f2b]/10'}`}
          >
            See CoreShift in Action
          </motion.div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-5 leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            See How We Stop the Bleed<br />
            <span className="text-[#ec5f2b]">In 60 Seconds</span>
          </h2>
          <p className={`text-base max-w-3xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            A quick tour of the platform that transforms your CS operations from reactive to predictive.
          </p>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className={`relative rounded-2xl overflow-hidden border-2 ${isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'} shadow-2xl`}>
            {VIDEO_URL ? (
              // Real video embed (when URL is added)
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={VIDEO_URL}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="CoreShift Platform Tour"
                />
              </div>
            ) : (
              // Placeholder (current)
              <div className="relative w-full aspect-video flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ec5f2b]/10 via-transparent to-[#ec5f2b]/5" />
                <div className="relative z-10 text-center">
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-gray-800 border-2 border-gray-700' : 'bg-white border-2 border-gray-200'} shadow-xl`}>
                    <Play className="w-12 h-12 text-[#ec5f2b] ml-1" strokeWidth={2} fill="currentColor" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    Platform Tour Coming Soon
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Want to see it now? Book a strategy call for a personalized walkthrough.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-4 mb-12"
        >
          {outcomes.map((outcome, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 p-4 rounded-xl ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-gray-50 border border-gray-200'}`}
            >
              <Check className="w-6 h-6 text-[#ec5f2b] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
              <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {outcome}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className={`text-lg font-semibold mb-6 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Want to see how this works for your business?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-orange text-white rounded-xl font-semibold text-base hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book Strategy Call
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
