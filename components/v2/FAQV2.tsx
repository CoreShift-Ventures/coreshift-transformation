'use client'

import { useState } from 'react'

const faqs = [
  {
    category: 'security',
    question: 'Where does my data live?',
    answer: 'Your data never leaves your environment. Agents are deployed directly on your infrastructure, whether that\'s your private cloud, on-premise servers, or a dedicated secure environment. We don\'t have access to your production data unless explicitly granted for debugging.',
  },
  {
    category: 'security',
    question: 'What are the deployment options?',
    answer: 'Two options based on your preference: (1) On-premise deployment within your existing ecosystem. Agents run inside your firewall, connect to your systems locally, and data stays entirely in house. (2) Secured cloud deployment. Agents run on isolated infrastructure with encrypted connections to your systems. Either way, you maintain full control and no data leaves your environment.',
  },
  {
    category: 'security',
    question: 'How do you handle compliance?',
    answer: 'We design agents with compliance built in. Audit trails for every action. Role based access controls. Data encryption at rest and in transit. Since agents run on your infrastructure, they inherit your existing compliance posture. The architecture is reviewed with your security team before deployment.',
  },
  {
    category: 'security',
    question: 'What about API keys and credentials?',
    answer: 'All credentials are stored in your secret management system (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, etc.). Agents access credentials at runtime through secure references. Nothing is hardcoded or stored in our systems.',
  },
  {
    category: 'process',
    question: 'How long does it take to get an agent live?',
    answer: 'Typically 6 to 10 weeks from kickoff to production. 2 weeks for Discovery Sprint to map the process and scope the agent. 4 to 8 weeks for build, integration, and testing. Timeline depends on complexity, number of system integrations, and your team\'s availability for UAT.',
  },
  {
    category: 'process',
    question: 'What systems can you integrate with?',
    answer: 'Any system with an API, database connection, or web interface. We\'ve built integrations for SAP (ECC, S/4HANA), NetSuite, Salesforce, Tally, Oracle, and 50+ other enterprise systems. For legacy systems without APIs, we use secure browser automation or direct database connections.',
  },
  {
    category: 'process',
    question: 'What happens if something goes wrong?',
    answer: 'Agents are designed with guardrails. Anomaly detection flags unusual patterns before actions are taken. Human in the loop checkpoints for high risk operations. Automatic rollback capabilities. 24/7 monitoring means we catch issues before you do, and our SLA guarantees response times.',
  },
  {
    category: 'engagement',
    question: 'How is pricing determined?',
    answer: 'Pricing is based on three factors: complexity of the operation being automated, number of system integrations required, and SLA or support level. After the Discovery Sprint, you get a fixed quote for the build and a predictable monthly fee for operations. No surprises.',
  },
  {
    category: 'engagement',
    question: 'What\'s included in monthly operations?',
    answer: '24/7 monitoring and alerting. Bug fixes and maintenance. Monthly performance reports. Ongoing optimization as your processes evolve. Direct access to the engineering team. One invoice, zero ops burden on your side.',
  },
  {
    category: 'engagement',
    question: 'Can we start small and expand?',
    answer: 'Absolutely. Most clients start with a single agent for one process. Once it\'s proven, we expand to adjacent operations. The architecture is modular. Each agent is independent but can share integrations and learnings with others.',
  },
]

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'security', label: 'Security & Compliance' },
  { id: 'process', label: 'Process & Integration' },
  { id: 'engagement', label: 'Engagement & Pricing' },
]

export function FAQV2() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [openQuestion, setOpenQuestion] = useState<number | null>(0)

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory)

  return (
    <section id="faq" className="py-24 px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-medium text-[#888] uppercase tracking-[3px] mb-4">
            Common Questions
          </p>
          <h2 className="font-space text-[42px] font-medium text-[#1a1a1a] tracking-[-0.02em] leading-[1.2] mb-4">
            Built for enterprise. Secured by design.
          </h2>
          <p className="text-[15px] text-[#666] max-w-[550px] mx-auto">
            Security isn't an afterthought. Every agent is architected for your compliance requirements from day one.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-start md:justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id)
                setOpenQuestion(0)
              }}
              className={`flex-shrink-0 px-5 py-2.5 rounded-lg text-[12px] font-semibold uppercase tracking-[1px] transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#1a1a1a] text-white'
                  : 'bg-[#f5f5f5] text-[#666] hover:bg-[#eee]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Questions */}
          <div className="flex flex-col gap-3">
            {filteredFaqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setOpenQuestion(index)}
                className={`text-left p-5 rounded-xl border transition-all duration-300 ${
                  openQuestion === index
                    ? 'bg-[#1a1a1a] border-[#1a1a1a] text-white'
                    : 'bg-white border-[#e5e5e5] text-[#1a1a1a] hover:border-[#1a1a1a]'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-space text-[14px] font-medium">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
                      openQuestion === index ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column - Answer */}
          <div className="bg-[#f8f9fa] rounded-2xl p-6 md:p-8 md:sticky md:top-24 h-fit">
            {openQuestion !== null && filteredFaqs[openQuestion] && (
              <div className="animate-fadeIn">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-[10px] font-semibold uppercase tracking-[1px] px-2.5 py-1 rounded ${
                    filteredFaqs[openQuestion].category === 'security'
                      ? 'bg-[#22c55e]/10 text-[#22c55e]'
                      : filteredFaqs[openQuestion].category === 'process'
                      ? 'bg-[#4d65ff]/10 text-[#4d65ff]'
                      : 'bg-[#64748b]/10 text-[#64748b]'
                  }`}>
                    {filteredFaqs[openQuestion].category === 'security' && 'Security'}
                    {filteredFaqs[openQuestion].category === 'process' && 'Process'}
                    {filteredFaqs[openQuestion].category === 'engagement' && 'Engagement'}
                  </span>
                </div>
                <h3 className="font-space text-[20px] font-semibold text-[#1a1a1a] mb-4">
                  {filteredFaqs[openQuestion].question}
                </h3>
                <p className="text-[14px] text-[#555] leading-[1.8]">
                  {filteredFaqs[openQuestion].answer}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Security Highlight Box */}
        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-center">
            <div>
              <h3 className="font-space text-[20px] md:text-[22px] font-semibold mb-3">
                Your infrastructure. Your rules.
              </h3>
              <p className="text-[14px] text-white/70 leading-[1.7] max-w-[600px]">
                Every CoreShift agent is deployed within your security perimeter. On premise, private cloud, or secured managed environment. You choose. We build to your compliance standards, integrate with your secret management, and operate under your security policies.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex flex-col items-center gap-2 px-6 py-4 bg-white/5 rounded-xl">
                <svg className="w-6 h-6 stroke-[#4d65ff]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18M9 21V9"/>
                </svg>
                <span className="text-[10px] text-white/60 uppercase tracking-[1px] text-center">On Premise<br/>Deployment</span>
              </div>
              <div className="flex flex-col items-center gap-2 px-6 py-4 bg-white/5 rounded-xl">
                <svg className="w-6 h-6 stroke-[#4d65ff]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span className="text-[10px] text-white/60 uppercase tracking-[1px] text-center">Your<br/>Infrastructure</span>
              </div>
              <div className="flex flex-col items-center gap-2 px-6 py-4 bg-white/5 rounded-xl">
                <svg className="w-6 h-6 stroke-[#4d65ff]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="11" rx="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
                <span className="text-[10px] text-white/60 uppercase tracking-[1px] text-center">No Data<br/>Egress</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
