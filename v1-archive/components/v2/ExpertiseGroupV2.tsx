'use client'

import Link from 'next/link'

const proofStrips = [
  {
    id: 'enterprise',
    label: 'Enterprise background',
    value: '20+ years across SAP, IBM, HCL, HP, Talend',
  },
  {
    id: 'global',
    label: 'Global delivery',
    value: 'Built for enterprises operating across time zones',
  },
  {
    id: 'discovery',
    label: 'Discovery-first',
    value: 'Process deep-dive before a single line of code is written',
  },
]

const stats = [
  { value: '6', label: 'Agents live in production' },
  { value: '19+', label: 'Enterprise systems integrated' },
  { value: '8 weeks', label: 'Average time to first agent live' },
  { value: '24/7', label: 'Monitoring and support' },
]

export function ExpertiseGroupV2() {
  return (
    <section id="about" className="bg-white">
      {/* Part A: Founder Credibility */}
      <div className="py-20 px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-start">
          {/* Left Column */}
          <div>
            <p className="text-[10px] font-medium text-[#999] uppercase tracking-[2.5px] mb-4">
              Why CoreShift
            </p>
            <h2 className="font-space text-[36px] font-medium text-[#1a1a1a] tracking-[-0.02em] leading-[1.2] mb-5">
              Built by people who've lived inside enterprise systems.
            </h2>
            <p className="text-[14px] text-[#666] leading-[1.8] mb-8 max-w-[500px]">
              CoreShift was founded by operators with 20+ years inside SAP, IBM, HCL, HP, and Talend who then spent time inside high-growth startups learning how to ship fast. We don't consult on enterprise operations. We've run them. That's why our agents handle the edge cases your IT team hasn't thought of yet.
            </p>

            {/* Proof Strips */}
            <div className="flex flex-col">
              {proofStrips.map((strip, i) => (
                <div
                  key={strip.label}
                  className={`flex items-center gap-4 py-4 ${
                    i !== proofStrips.length - 1 ? 'border-b border-[#eee]' : ''
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
                    {strip.id === 'enterprise' && (
                      <svg className="w-4 h-4 stroke-[#555] fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    )}
                    {strip.id === 'global' && (
                      <svg className="w-4 h-4 stroke-[#555] fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                      </svg>
                    )}
                    {strip.id === 'discovery' && (
                      <svg className="w-4 h-4 stroke-[#555] fill-none" strokeWidth="1.5" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="M21 21l-4.35-4.35"/>
                      </svg>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-medium text-[#999] uppercase tracking-[1px]">
                      {strip.label}
                    </span>
                    <span className="text-[14px] text-[#444]">{strip.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#f8f9fa] rounded-xl p-6 flex flex-col"
              >
                <span className="font-space text-[32px] font-semibold text-[#1a1a1a] tracking-[-0.02em] mb-1">
                  {stat.value}
                </span>
                <span className="text-[12px] text-[#777] leading-[1.4]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
