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
    question: "Who are you? Why should we trust you?",
    answer: "CoreShift was founded by a transformation architect with 20+ years of enterprise experience at SAP, IBM, HCL, HP, and Talend. We've seen what breaks when companies scale and built a team to help others escape the chaos. We're not a faceless agency. We're operators who deliver, not just advise."
  },
  {
    question: "How is the Blueprint different from a typical sales demo?",
    answer: "A sales demo shows you their product. A Blueprint Sprint diagnoses your business. You walk away with a validated plan, not a pitch deck."
  },
  {
    question: "Who is this for?",
    answer: "Scaling companies who've outgrown spreadsheets but aren't ready for (or don't fit into) off the shelf enterprise software. Team size doesn't matter, operational complexity does."
  },
  {
    question: "How long does it take to go live?",
    answer: "Blueprint: 2 weeks. Systems build: 4 to 8 weeks to MVP."
  },
  {
    question: "Can we start with just one workflow?",
    answer: "Absolutely. Start with your highest friction workflow, prove the value, then expand."
  },
  {
    question: "Do I need a technical team to work with you?",
    answer: "Not necessarily. We handle the build end-to-end. For integrations with your existing systems, we'll collaborate with your IT team as needed, but you don't need dedicated developers on your side."
  },
  {
    question: "What makes your AI different from tools that just added ChatGPT?",
    answer: "We architect AI into your workflows from the ground up, purpose built for your processes."
  },
  {
    question: "What if my processes are unique to my business?",
    answer: "That's exactly why we exist. Unique isn't a problem; it's our specialty."
  },
  {
    question: "Can you integrate with our existing tools?",
    answer: "Yes. CRMs, ERPs, payment gateways, communication tools, and custom APIs."
  },
  {
    question: "What does Fractional COO mean?",
    answer: "C level operational leadership without the full time salary. 10 hours/month of strategic guidance with hands on execution."
  },
  {
    question: "What ongoing support do you provide after launch?",
    answer: "Hosting, AI usage, and support are available separately based on your needs. Your data, your decisions. No lock-in."
  },
  {
    question: "What's your guarantee?",
    answer: "We de-risk with the Blueprint Sprint. You see exactly what you're paying for before any major investment."
  }
]

export default function FAQSectionV4() {
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
    <section id="faq" className={`py-14 md:py-20 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 md:px-10">
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
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Everything you need to know about transforming your operations
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
                  className={`w-full text-left px-4 md:px-6 py-4 md:py-5 flex items-center justify-between transition-colors min-h-[56px] ${
                    isOpen
                      ? isDark
                        ? 'bg-gray-900'
                        : 'bg-gray-50'
                      : isDark
                      ? 'hover:bg-gray-900'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <span className={`text-sm md:text-base font-semibold pr-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
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
                      <div className={`px-4 md:px-6 py-4 border-t ${
                        isDark ? 'border-gray-800' : 'border-gray-200'
                      }`}>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {faq.answer.split(/(\[.*?\]\(.*?\))/).map((part, i) => {
                            const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/)
                            if (linkMatch) {
                              return (
                                <a
                                  key={i}
                                  href={linkMatch[2]}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#ec5f2b] hover:underline font-medium"
                                >
                                  {linkMatch[1]}
                                </a>
                              )
                            }
                            return part
                          })}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
