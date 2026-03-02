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

const companies = [
  {
    id: 'coreshift',
    name: 'CoreShift',
    descriptor: 'AI agents for enterprise operations. Complex workflows, system integrations, compliance requirements.',
  },
  {
    id: 'a365shift',
    name: 'A365Shift',
    descriptor: 'The group. When engagements span both enterprise and individual automation, we deliver as one.',
  },
  {
    id: 'ambot365',
    name: 'Ambot365',
    descriptor: 'AI agents for individuals and professionals. Personal productivity, task automation, daily workflows.',
  },
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

      {/* Part B: When the engagement needs more */}
      <div className="relative py-16 px-8 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 z-0 bg-[#f5f7fa]" />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `
              radial-gradient(ellipse 200% 100% at 50% 100%, rgba(200, 210, 240, 0.5) 0%, transparent 60%),
              radial-gradient(ellipse 150% 80% at 50% 95%, rgba(180, 195, 235, 0.4) 0%, transparent 50%)
            `
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <p className="text-[10px] font-medium text-[#999] uppercase tracking-[2.5px] mb-3 text-center">
            When the engagement needs more
          </p>
          <h3 className="font-space text-[28px] font-medium text-[#1a1a1a] tracking-[-0.02em] leading-[1.3] mb-10 text-center">
            For larger engagements, we bring the whole group.
          </h3>

          {/* Company Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
            {companies.map((company) => (
              <div
                key={company.id}
                className="group bg-white/70 backdrop-blur-xl rounded-2xl p-6 flex flex-col border border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(77,101,255,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4d65ff]/10 to-[#4d65ff]/5 flex items-center justify-center mb-5 group-hover:from-[#4d65ff]/20 group-hover:to-[#4d65ff]/10 transition-all duration-300">
                  {company.id === 'coreshift' && (
                    <svg className="w-6 h-6 stroke-[#4d65ff]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  )}
                  {company.id === 'a365shift' && (
                    <svg className="w-6 h-6 stroke-[#4d65ff]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                    </svg>
                  )}
                  {company.id === 'ambot365' && (
                    <svg className="w-6 h-6 stroke-[#4d65ff]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  )}
                </div>

                {/* Name */}
                <span className="font-space text-[18px] font-semibold text-[#1a1a1a] mb-2 group-hover:text-[#4d65ff] transition-colors duration-300">
                  {company.name}
                </span>

                {/* Descriptor */}
                <p className="text-[13px] text-[#666] leading-[1.7] flex-1">
                  {company.descriptor}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#1a1a1a] hover:text-[#4d65ff] transition-colors"
            >
              Talk to us about your engagement
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
