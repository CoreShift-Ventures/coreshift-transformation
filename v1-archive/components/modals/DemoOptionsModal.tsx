'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { X, Zap, Calendar, ArrowRight, Clock, Users } from 'lucide-react';
import { ScreenshotCarousel } from '@/components/ui/ScreenshotCarousel';

interface DemoOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectInstantAccess: () => void;
  onSelectGuidedDemo: () => void;
}

export function DemoOptionsModal({
  isOpen,
  onClose,
  onSelectInstantAccess,
  onSelectGuidedDemo
}: DemoOptionsModalProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-50 overflow-y-auto ${
            isDark ? 'bg-gray-950' : 'bg-white'
          }`}
        >
          <div className="min-h-screen">
            <div className={`relative w-full ${
              isDark ? 'bg-gray-950' : 'bg-white'
            }`}>
            {/* Close button - Fixed position */}
            <button
              onClick={onClose}
              className={`fixed top-6 right-6 p-3 rounded-full transition-all z-50 shadow-lg ${
                isDark ? 'bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-gray-200 border border-gray-800' : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 border border-gray-200'
              }`}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
              {/* Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="inline-block px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-semibold text-sm mb-6"
                >
                  Choose Your Path
                </motion.div>
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  Experience CoreShift
                </h2>
                <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                  Get instant access to explore on your own, or book a guided demo with our team
                </p>
              </div>

              {/* Screenshot Carousel Preview - Larger */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-16 max-w-6xl mx-auto"
              >
                <ScreenshotCarousel />
              </motion.div>

              {/* Two Options Grid */}
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Option 1: Instant Access */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative rounded-2xl border-2 p-8 cursor-pointer transition-all overflow-hidden ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 hover:border-brand-orange hover:bg-gray-800/80'
                      : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-brand-orange hover:shadow-xl'
                  }`}
                  onClick={onSelectInstantAccess}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-dark flex items-center justify-center mb-6 shadow-lg"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Zap className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Badge */}
                    <div className="inline-block px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold mb-4 border border-brand-orange/20">
                      SELF-SERVE
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      Try It Yourself
                    </h3>

                    {/* Description */}
                    <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                      Get instant access to our interactive demo. Explore at your own pace.
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      <li className={`flex items-start gap-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Clock className="w-3 h-3 text-brand-orange" />
                        </div>
                        <span><strong>Instant access</strong> via email</span>
                      </li>
                      <li className={`flex items-start gap-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Zap className="w-3 h-3 text-brand-orange" />
                        </div>
                        <span><strong>Full feature access</strong> for 14 days</span>
                      </li>
                      <li className={`flex items-start gap-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <div className="w-5 h-5 rounded-full bg-brand-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Users className="w-3 h-3 text-brand-orange" />
                        </div>
                        <span><strong>Explore independently</strong> on your schedule</span>
                      </li>
                    </ul>

                    {/* CTA */}
                    <button
                      onClick={onSelectInstantAccess}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white font-semibold hover:shadow-lg transition-all group-hover:scale-105"
                    >
                      <span>Request Access</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>

                {/* Option 2: Guided Demo */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative rounded-2xl border-2 p-8 cursor-pointer transition-all overflow-hidden ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 hover:border-brand-orange hover:bg-gray-800/80'
                      : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-brand-orange hover:shadow-xl'
                  }`}
                  onClick={onSelectGuidedDemo}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6 shadow-lg"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Calendar className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Badge */}
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-bold mb-4 border border-blue-500/20">
                      RECOMMENDED
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      Book a Guided Demo
                    </h3>

                    {/* Description */}
                    <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                      Schedule a personalized walkthrough with our team. Get your questions answered.
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      <li className={`flex items-start gap-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Users className="w-3 h-3 text-blue-600" />
                        </div>
                        <span><strong>1-on-1 consultation</strong> with expert</span>
                      </li>
                      <li className={`flex items-start gap-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Calendar className="w-3 h-3 text-blue-600" />
                        </div>
                        <span><strong>Tailored to your needs</strong> and use cases</span>
                      </li>
                      <li className={`flex items-start gap-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Zap className="w-3 h-3 text-blue-600" />
                        </div>
                        <span><strong>Live Q&A</strong> and best practices</span>
                      </li>
                    </ul>

                    {/* CTA */}
                    <button
                      onClick={onSelectGuidedDemo}
                      className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all group-hover:scale-105 ${
                        isDark
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                          : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                      }`}
                    >
                      <span>Schedule Demo</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Footer note */}
              <p className={`text-sm text-center mt-12 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                Not sure which to choose? Start with instant access—you can always book a guided demo later.
              </p>
            </div>
          </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
