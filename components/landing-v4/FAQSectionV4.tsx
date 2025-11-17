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
    answer: "I'm an operator first. I've spent more than two decades leading Customer Success, Revenue Operations, and transformation initiatives across enterprise and growth stage environments. CoreShift is my independent practice, built on real operational experience, not theories or playbooks. I don't run ads or cold outreach. Every client I work with comes through referrals or from following my work over the years. You can review my track record, background, and recommendations directly on [LinkedIn](https://www.linkedin.com/in/srisridh/). I've helped teams fix broken processes, reduce churn, streamline customer delivery, and build the operational clarity they were missing. Today, I bring the same experience into designing modern systems, automation, and AI driven workflows, delivered with the speed and clarity founders expect. If you value depth, honesty, and hands on execution, you'll be in good hands."
  },
  {
    question: "How is the Blueprint different from a typical sales demo?",
    answer: "We don't sell you a generic product. The Blueprint Sprint is a 2 week diagnostic where we map your actual processes, identify gaps, and build a working prototype customized to your business. You get a clear roadmap with realistic timelines before committing to anything."
  },
  {
    question: "Who is this for?",
    answer: "Growing B2B businesses (10 to 500 employees) with operational chaos that blocks scale. If you're managing critical workflows through spreadsheets, emails, and disconnected tools, or if scaling feels unsustainable, this is built for you."
  },
  {
    question: "How long does it take to go live?",
    answer: "Blueprint Sprint takes 2 weeks. Build and Deploy takes 6 to 8 weeks depending on complexity. Most businesses are fully operational within 8 to 10 weeks total, not 6 to 12 months like traditional development."
  },
  {
    question: "Can we start with just one workflow?",
    answer: "Absolutely. We recommend starting with your biggest pain point, usually customer operations, revenue workflows, or finance and billing. Once you see ROI, we can expand to other processes incrementally."
  },
  {
    question: "Do I need a technical team to work with you?",
    answer: "We handle all development and technical execution. However, for integrations with your existing systems, we'll need your IT admin or technical team to provide API access and credentials. The Blueprint Sprint will clearly identify what technical support is needed, if any."
  },
  {
    question: "What makes your AI different from tools that just added ChatGPT?",
    answer: "We build AI native systems from the ground up using autonomous agents, not chatbots bolted onto legacy software. Our ShiftIQ and CompassAI frameworks handle complex workflows, make decisions, and automate end to end processes, not just answer questions."
  },
  {
    question: "What if my processes are unique to my business?",
    answer: "That's exactly why we start with the Blueprint Sprint. We don't force you into a generic template. We map your unique workflows, understand your competitive advantage, and build systems that preserve what makes your business different."
  },
  {
    question: "Can you integrate with our existing tools?",
    answer: "Yes. We integrate with your current stack including CRMs, ERPs, payment systems, communication tools, and databases. The goal is to automate workflows across your existing systems, not replace everything."
  },
  {
    question: "What does Fractional COO mean?",
    answer: "CXO level strategic guidance on operations, customer success, and revenue workflows on a part time basis. This includes quarterly planning, OKRs, metrics review, team coaching, and ongoing optimization without the full time executive cost."
  },
  {
    question: "What ongoing support do you provide after launch?",
    answer: "We offer flexible ongoing support including monthly retainers for updates and optimization, Fractional COO advisory for strategic guidance, or project based work as needs evolve. You choose what makes sense for your business."
  },
  {
    question: "What's your refund policy?",
    answer: "We don't offer refunds, and here's why. The Blueprint Sprint is real work. We invest significant time understanding your business, mapping processes, designing systems, exploring AI opportunities, and building a working prototype. We charge a reasonable fee for this because it creates immediate value and gives you complete clarity before committing to a larger build. To de-risk your decision even further, the full Blueprint Sprint fee is credited toward your Build and Deploy phase if you move forward with implementation. This way, you're never paying twice for the same work. If you're exploring, unsure about timing, or unable to commit your team's bandwidth, it's better to wait. But if you're serious about transforming how your business operates, you'll get exceptional value from day one, and a clear roadmap that pays for itself long before your system goes live."
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
    <section id="faq" className={`py-16 md:py-20 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
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
                  <span className={`text-base font-semibold pr-8 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
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
            href="mailto:contact@cshift.io"
            className="text-sm font-semibold text-[#ec5f2b] hover:text-[#d94f1f] transition-colors"
          >
            Get in touch with our team →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
