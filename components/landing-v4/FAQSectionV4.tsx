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
    question: "Can't I just use ChatGPT or Copilot for this?",
    answer: "ChatGPT and Copilot are reasoning engines. They're brilliant, and we use them inside our agents. But they don't connect to your SAP, they don't know your vendor quirks, they don't run on a schedule, and they don't send alerts when something breaks at 3am. CoreShift agents are built around those tools. We're the team that makes them work in your specific operation."
  },
  {
    question: "Our data is sensitive. Where does it go?",
    answer: "Your data stays on your infrastructure. Agents are deployed on your servers, your cloud account, or your SAP system. CoreShift's Command Center receives heartbeat signals and operational metadata only, not your financial records, customer data, or proprietary information. We can walk through the architecture in detail during Discovery."
  },
  {
    question: "What happens when the agent breaks?",
    answer: "You get a Slack or email alert before it becomes a problem. That's what Command Center monitoring is for. If an agent run fails, we're notified automatically, we investigate, and we fix it. This is exactly why the subscription model exists: we have a direct financial incentive to keep every agent running. If it's broken, we're not getting paid."
  },
  {
    question: "Can our IT team build this instead?",
    answer: "Probably, yes. Any competent developer can build an agent. The question is: who maintains it when your SAP upgrades, a vendor portal changes its UI, or a new business rule is added? Internal IT teams build things and move on. CoreShift's subscription model means we own maintenance permanently, because that's how we get paid."
  },
  {
    question: "How long does it take to go live?",
    answer: "Discovery Sprint is 2 weeks. Build and Deploy is typically 4 to 6 weeks after a signed Design Document. First agent live within 8 to 10 weeks of kickoff. We've delivered faster for simpler operations and scoped longer for complex ones like SAP + 19 vendor portals."
  },
  {
    question: "Do you work with companies outside India?",
    answer: "Yes. One of our live agents is for a UK-headquartered global company, processing GBP invoices, BACS/SWIFT bank feeds, and posting to NetSuite. We integrate with SAP, NetSuite, Salesforce, and most enterprise systems regardless of geography. Billing is available in INR or USD."
  },
  {
    question: "What operations are you best suited for?",
    answer: "Operations that are rule-based (there's a defined process), high-volume (manual work is significant), connected to enterprise systems (SAP, ERP, CRM, portals), and consequential enough that errors matter. Finance operations, supply chain reconciliation, compliance tracking, and customer success reporting are our strongest areas, but we've never encountered a well-defined operation that couldn't be agent-ified."
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${
              isDark ? 'bg-gray-900 text-gray-400 border border-gray-800' : 'bg-white text-gray-600 border border-gray-200 shadow-sm'
            }`}>
              FAQ
            </span>
          </motion.div>
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Questions we hear from every prospect.
          </h2>
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
