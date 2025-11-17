'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { ChevronDown } from 'lucide-react';

export function FAQSectionV2() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How is this different from hiring a consulting firm?',
      a: 'We combine strategy AND execution. You get a working system in weeks, not a roadmap that sits on a shelf. We don\'t just advise, we build, deploy, and make it real.'
    },
    {
      q: 'How can you build enterprise grade systems in weeks?',
      a: 'Modern platform architecture + AI assisted development + process expertise. We build fast without cutting corners by leveraging proven frameworks and automation.'
    },
    {
      q: 'What if our process needs to change after we build?',
      a: 'Expected. That\'s why we offer Phase 3 evolution or one off enhancements. The system adapts as your business grows and changes.'
    },
    {
      q: 'What about our data and infrastructure?',
      a: '100% yours. Host your database in your cloud (AWS/Azure/GCP). We deploy the application to your infrastructure or manage it for you, your choice.'
    },
    {
      q: 'How do you use AI in the system?',
      a: 'Lead scoring, workflow automation, predictive analytics, intelligent routing, natural language interfaces, all tailored to your specific process needs.'
    },
    {
      q: 'Can this integrate with our existing tools?',
      a: 'Yes. We build integrations with your CRM, ERP, payment systems, communication tools, and any other systems as part of your transformation.'
    },
    {
      q: 'What if the POC doesn\'t meet expectations?',
      a: 'You own the POC and strategy roadmap, your investment gives you that value even if you don\'t proceed to Phase 2. No further obligation.'
    },
    {
      q: 'Do we have to commit to Phase 3 ongoing retainer?',
      a: 'No. Many clients do one off enhancements or pause after Phase 2. Your system works independently and you maintain full access.'
    },
    {
      q: 'How is pricing determined?',
      a: 'Based on process complexity, user count, integrations, and AI features. Use our calculator or book a scoping call for a custom proposal.'
    },
    {
      q: 'Can you handle enterprise scale complexity?',
      a: 'Yes. Our architecture is built for scale, from 10 to 10,000 users. Enterprise security, compliance, and performance are built in from day one.'
    }
  ];

  return (
    <section className={`py-16 px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Frequently Asked <span className="text-[#ec5f2b]">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`rounded-xl border overflow-hidden ${
                isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full px-4 py-3 flex items-center justify-between text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-inset ${
                  isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                }`}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                aria-expanded={openIndex === index}
              >
                <span className={`text-base font-semibold pr-3 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <ChevronDown className="w-4 h-4 text-[#ec5f2b] flex-shrink-0" />
                </motion.div>
              </motion.button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                      opacity: { duration: 0.25, delay: 0.05 }
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.2 }}
                      className={`px-4 pb-3 border-t pt-3 text-sm ${
                        isDark ? 'text-gray-300 border-gray-800' : 'text-gray-700 border-gray-200'
                      }`}
                    >
                      {faq.a}
                    </motion.div>
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
