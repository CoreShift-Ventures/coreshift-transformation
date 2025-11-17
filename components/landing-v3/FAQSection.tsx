'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How is this different from buying off-the-shelf software?",
    answer: "Off-the-shelf tools force you to adapt your processes to their rigid workflows. We build custom solutions tailored to your exact business processes. You get the flexibility of custom software with rapid deployment."
  },
  {
    question: "What if our process isn't covered by the pre-built accelerators?",
    answer: "Our accelerators cover most business processes, but if you need something unique, we can build custom solutions during the Build & Deploy phase. The Strategy & Blueprint phase identifies exactly what you need."
  },
  {
    question: "How long does deployment actually take?",
    answer: "Strategy & Blueprint takes 2 weeks and delivers a working POC. Build & Deploy takes 4-6 weeks depending on complexity. Most businesses are fully operational within 6-8 weeks from start to finish."
  },
  {
    question: "Do we need technical expertise in-house?",
    answer: "No. We handle all technical implementation, training, and deployment. Your team just needs to understand your business processes. We train your team on using the system, no coding required."
  },
  {
    question: "What happens if we want to cancel?",
    answer: "No long-term contracts. After the initial deployment, you can cancel your monthly subscription anytime. Your deployment and hosting preferences are flexible based on your choice."
  },
  {
    question: "Can we add more processes later?",
    answer: "Absolutely. Start with 1-2 critical processes, then add more as you see ROI. Each new process module can be added independently without disrupting your existing workflows."
  },
  {
    question: "How does the AI credit system work?",
    answer: "AI credits power ShiftIQ automation and CompassAI intelligence. Each AI operation (routing, scoring, prediction) consumes credits based on complexity. Choose a tier that matches your usage, and purchase additional credits anytime as you scale. No overage penalties, just pay for what you use."
  },
  {
    question: "What's included in the Strategy & Blueprint phase?",
    answer: "We analyze your current processes, identify transformation opportunities, design your technical architecture, and deliver a working POC/prototype. You get a clear roadmap with no obligation to proceed. This phase ensures alignment before we build anything."
  },
  {
    question: "What deployment options do we have?",
    answer: "You choose where your solution is deployed and who manages it. We offer flexible hosting arrangements - you can host on your own infrastructure or we can manage it for you. Pricing varies based on your preference. Source code access is available as an optional lifetime purchase."
  },
  {
    question: "What kind of support do we get?",
    answer: "During deployment: full implementation support and training. After launch: ongoing platform support is included in your monthly subscription. Phase 3 (Evolve & Optimize) is optional for feature enhancements and scaling support."
  }
]

export default function FAQSection() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className={`py-16 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-sm max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Everything you need to know about transforming your business processes
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`rounded-lg border overflow-hidden ${
                  isDark
                    ? 'border-gray-800 bg-gray-900/50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full text-left px-6 py-4 flex items-center justify-between transition-colors ${
                    isOpen
                      ? isDark
                        ? 'bg-gray-900'
                        : 'bg-gray-50'
                      : isDark
                      ? 'hover:bg-gray-900'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <span className={`text-sm font-bold pr-8 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    } ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 py-4 border-t ${
                        isDark ? 'border-gray-800' : 'border-gray-200'
                      }`}>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-12 text-center p-6 rounded-lg border ${
            isDark
              ? 'border-gray-800 bg-gray-900/50'
              : 'border-gray-200 bg-gray-50'
          }`}
        >
          <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Still have questions?
          </p>
          <a
            href="mailto:hello@coreshift.co"
            className="text-sm font-semibold text-[#ec5f2b] hover:text-[#d94f1f] transition-colors"
          >
            Get in touch with our team →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
