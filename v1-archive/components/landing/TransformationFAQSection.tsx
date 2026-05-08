// @ts-nocheck
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'Do I need to start with the Blueprint, or can I go straight to the Platform?',
        a: 'You can start anywhere. However, most teams find the Blueprint invaluable for validating their strategy before investing in infrastructure. If you already have a clear transformation roadmap and know exactly what you need, you can go straight to the Platform.'
      },
      {
        q: 'How long does it take to see results?',
        a: 'Blueprint: 7-10 days delivery. Platform: 4 weeks to deploy. Results vary, but most teams see measurable improvements in retention metrics within 60-90 days of platform deployment.'
      },
      {
        q: 'What if I only want Advisory without Blueprint or Platform?',
        a: 'Absolutely. Expert Advisory is available as a standalone offering. Many teams engage us for strategic guidance while using their existing tools and infrastructure.'
      }
    ]
  },
  {
    category: 'Platform & Infrastructure',
    questions: [
      {
        q: 'What does "own your infrastructure" actually mean?',
        a: 'You get the complete codebase deployed to your cloud (AWS, Azure, GCP). No vendor lock-in, no recurring subscription fees. You control the data, the hosting, and the roadmap. We provide the initial build and training; you own it forever.'
      },
      {
        q: 'What are the ongoing costs after I buy the Platform?',
        a: 'You\'ll pay for cloud hosting (compute, storage, databases) and AI API costs (OpenAI, Anthropic, etc.) based on your usage. Most teams spend $500-2000/month depending on scale. This is still 90%+ cheaper than SaaS subscriptions.'
      },
      {
        q: 'Can you integrate with our existing CRM and support tools?',
        a: 'Yes. We integrate with Salesforce, HubSpot, Zendesk, Intercom, Slack, and most major platforms. Custom integrations are included in the Platform deployment.'
      },
      {
        q: 'Do I need a technical team to manage the Platform?',
        a: 'Basic cloud operations knowledge is helpful, but not required. We provide full training and documentation. Many teams run it with just their CS ops team. Ongoing Advisory support is available if needed.'
      }
    ]
  },
  {
    category: 'Pricing & ROI',
    questions: [
      {
        q: 'Why is this so much cheaper than other CS platforms?',
        a: 'Traditional SaaS platforms charge $50K-$120K+ annually because they host, maintain, and scale infrastructure for hundreds of customers. You\'re paying a one-time build cost and then managing your own hosting—cutting out 90%+ of the recurring overhead.'
      },
      {
        q: 'Is there a money-back guarantee?',
        a: 'We don\'t offer refunds, but we do offer a comprehensive Blueprint first ($1,000) so you can validate the approach before committing to the full Platform investment. This de-risks your decision significantly.'
      },
      {
        q: 'What\'s the typical ROI timeline?',
        a: 'Most teams see ROI within 6-12 months through improved retention, expansion visibility, and CSM efficiency. A 2-3% improvement in NRR typically pays for the entire Platform investment in the first year.'
      }
    ]
  },
  {
    category: 'Transformation Approach',
    questions: [
      {
        q: 'How is this different from hiring a CS consultant?',
        a: 'Consultants give you strategy documents. We give you strategy + infrastructure + execution. You\'re not just getting advice—you\'re getting working systems, trained teams, and ongoing support.'
      },
      {
        q: 'What makes your approach different from CS platforms like Gainsight or Totango?',
        a: 'CS platforms are one-size-fits-all SaaS tools. We build custom infrastructure tailored to your business, deployed to your cloud, that you own forever. You get the flexibility of custom-built with the speed of productized frameworks.'
      },
      {
        q: 'Can you help us if we\'re already using another CS platform?',
        a: 'Yes. Many teams use us alongside existing platforms—our AI intelligence layer sits on top and enhances what you already have. Or, we can help you migrate off expensive SaaS to owned infrastructure.'
      }
    ]
  }
];

export function TransformationFAQSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  useState(() => {
    setMounted(true);
  });

  const isDark = mounted && theme === 'dark';

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <section className={`py-24 px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6"
          >
            <HelpCircle className="w-4 h-4 text-brand-orange" />
            <span className="text-sm font-semibold text-brand-orange">
              Frequently Asked Questions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
          >
            Everything You Need to Know
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Common questions about our transformation approach, platform, and pricing
          </motion.p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                {category.category}
              </h3>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === key;

                  return (
                    <motion.div
                      key={questionIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: questionIndex * 0.05 }}
                      className={`rounded-xl border transition-all ${
                        isDark
                          ? isOpen
                            ? 'bg-gray-900 border-brand-orange/50'
                            : 'bg-gray-900 border-gray-800 hover:border-gray-700'
                          : isOpen
                          ? 'bg-white border-brand-orange/50 shadow-lg'
                          : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'
                      }`}
                    >
                      {/* Question Button */}
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left"
                      >
                        <span className={`font-semibold text-base flex-1 ${
                          isDark ? 'text-gray-100' : 'text-gray-900'
                        }`}>
                          {faq.q}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          {isOpen ? (
                            <Minus className={`w-5 h-5 ${isDark ? 'text-brand-orange' : 'text-brand-orange'}`} />
                          ) : (
                            <Plus className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                          )}
                        </motion.div>
                      </button>

                      {/* Answer */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className={`px-6 pb-5 text-sm leading-relaxed ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className={`text-center mt-16 p-8 rounded-2xl ${
            isDark
              ? 'bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800'
              : 'bg-gradient-to-br from-gray-50 to-white border border-gray-200'
          }`}
        >
          <p className={`text-base font-semibold mb-4 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
            Still have questions?
          </p>
          <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Book a 15-minute consultation to discuss your specific transformation needs
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-xl font-semibold text-base hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Schedule a Call
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
