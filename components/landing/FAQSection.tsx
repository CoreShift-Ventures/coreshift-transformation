'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';

const faqs = [
  {
    question: 'How is CoreShift different from traditional CS platforms?',
    answer: 'CoreShift is built on a unique dual pole star framework combining Customer Goals and NRR. Unlike traditional platforms that give you 100+ features on Day 1, we provide a maturity-based approach that grows with your organization.'
  },
  {
    question: 'Do I need to deploy and manage the platform myself?',
    answer: 'We offer two paths: Build & Own (you deploy and manage) or Managed Service (we handle everything). Your choice depends on your team\'s technical capability and maturity level.'
  },
  {
    question: 'How long does implementation take?',
    answer: 'Build & Own deployments typically take 3 days. Managed Service implementations are completed in 2-4 weeks, compared to 6-12 months with traditional enterprise CS platforms.'
  },
  {
    question: 'What about data ownership and security?',
    answer: '100% of your data stays in YOUR cloud accounts. Even with Managed Service, we deploy to your Vercel and Supabase accounts. You own the infrastructure, database, and all customer data.'
  },
  {
    question: 'Can I see the platform before buying?',
    answer: 'Yes! We have fully functional demo modules you can explore. These aren\'t mockups—they\'re the actual platform you\'ll deploy.'
  },
  {
    question: 'What\'s included in the free audit?',
    answer: 'The free audit includes a 45-minute assessment, maturity score (Level 1-5), NRR benchmarks for your industry, gap analysis, and recommended deployment path customized to your needs.'
  }
];

export function FAQSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <section className={`py-24 px-6 relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
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
            className="inline-block px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-semibold text-sm mb-6"
          >
            FAQ
          </motion.div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-5 leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-base max-w-3xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Everything you need to know about CoreShift
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                isDark
                  ? 'bg-gray-900 border-gray-800 hover:border-brand-orange/50'
                  : 'bg-white border-brand-border hover:border-brand-orange/50 shadow-sm'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 group"
              >
                <span className={`font-semibold text-lg ${isDark ? 'text-gray-100' : 'text-brand-charcoal'} group-hover:text-brand-orange transition-colors`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`px-6 pb-6 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
