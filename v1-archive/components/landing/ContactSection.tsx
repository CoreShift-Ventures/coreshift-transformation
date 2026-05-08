// @ts-nocheck
/* eslint-disable */
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { DemoQualificationForm } from '@/components/forms/DemoQualificationForm';

const contactOptions = [
  {
    icon: Calendar,
    title: 'Book a Demo',
    description: 'Schedule a 15-minute intro call',
    cta: 'Book Call',
    useForm: true,
    color: '#ec5f2b'
  },
  {
    icon: MessageSquare,
    title: 'Free CS Audit',
    description: 'Get your maturity score and roadmap',
    cta: 'Start Audit',
    href: '/audit',
    color: '#16a34a',
    highlighted: true
  },
  {
    icon: Mail,
    title: 'Contact Us',
    description: 'Have questions? Send us a message',
    cta: 'Email Us',
    href: 'mailto:contact@cshift.io',
    color: '#3b82f6'
  }
];

export function ContactSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  const handleOptionClick = (option: typeof contactOptions[0]) => {
    if (option.useForm) {
      setShowDemoForm(true);
    } else if (option.href) {
      window.location.href = option.href;
    }
  };

  return (
    <section className={`py-24 px-6 relative overflow-hidden ${isDark ? 'bg-gradient-to-b from-gray-950 to-black' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className={`inline-block px-4 py-2 rounded-full font-semibold text-sm mb-6 ${isDark ? 'bg-[#ec5f2b]/10 text-[#ec5f2b] border border-[#ec5f2b]/20' : 'bg-[#ec5f2b]/5 text-[#ec5f2b] border border-[#ec5f2b]/10'}`}
          >
            Stop the Bleed
          </motion.div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-5 leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Every Day You Wait,<br />
            <span className="text-[#ec5f2b]">You're Leaving Revenue on the Table</span>
          </h2>
          <p className={`text-base max-w-3xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Get your free Revenue Leak Audit. See exactly where you're bleeding and how to stop it in 30 days.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 group ${
                option.highlighted
                  ? 'border-2 border-brand-orange shadow-2xl'
                  : isDark
                  ? 'bg-gray-900 border border-gray-800 hover:border-brand-orange/50'
                  : 'bg-white border border-brand-border hover:border-brand-orange/50 shadow-lg'
              }`}
            >
              {option.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white text-xs font-bold shadow-lg">
                    ⭐ RECOMMENDED
                  </span>
                </div>
              )}

              <div className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${option.color} 0%, ${option.color}dd 100%)`
                  }}
                >
                  <option.icon className="w-8 h-8" />
                </div>

                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  {option.title}
                </h3>

                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                  {option.description}
                </p>

                <button
                  onClick={() => handleOptionClick(option)}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    option.highlighted
                      ? 'bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white hover:shadow-lg'
                      : isDark
                      ? 'border-2 border-gray-700 text-gray-200 hover:border-brand-orange hover:text-brand-orange'
                      : 'border-2 border-brand-border text-brand-charcoal hover:border-brand-orange hover:text-brand-orange'
                  }`}
                >
                  <span>{option.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-16 text-center p-8 rounded-2xl ${
            isDark ? 'bg-gray-900/50 border border-gray-800' : 'bg-white/50 border border-brand-border'
          }`}
        >
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Or reach out directly at{' '}
            <a
              href="mailto:contact@cshift.io"
              className="text-brand-orange font-semibold hover:underline"
            >
              contact@cshift.io
            </a>
          </p>
        </motion.div>
      </div>

      {/* Demo Qualification Form Modal */}
      {showDemoForm && <DemoQualificationForm onClose={() => setShowDemoForm(false)} />}
    </section>
  );
}
