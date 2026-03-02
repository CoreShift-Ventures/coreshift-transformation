'use client'

import Link from 'next/link'

const engagementStages = [
  {
    id: 'discovery',
    stage: '01',
    title: 'Discovery Sprint',
    duration: '2 weeks',
    description: 'We embed with your team to understand the operation, map edge cases, and scope the agent.',
    includes: [
      'Process mapping sessions',
      'Edge case documentation',
      'Technical feasibility assessment',
      'Agent scope & spec document',
    ],
    outcome: 'Clear scope and fixed quote for build',
  },
  {
    id: 'build',
    stage: '02',
    title: 'Agent Build',
    duration: '4-8 weeks',
    description: 'We build the agent, integrate with your systems, and test against real data until it works.',
    includes: [
      'Custom agent development',
      'System integrations (SAP, Salesforce, etc.)',
      'Testing with production data',
      'UAT and sign-off',
    ],
    outcome: 'Production-ready agent on your infrastructure',
  },
  {
    id: 'operate',
    stage: '03',
    title: 'Monthly Operations',
    duration: 'Ongoing',
    description: 'Agent goes live. We monitor 24/7, handle issues, and ship updates. You get a single monthly invoice.',
    includes: [
      '24/7 monitoring & alerting',
      'Bug fixes & maintenance',
      'Monthly performance reports',
      'Ongoing optimization',
    ],
    outcome: 'One subscription. Zero ops burden.',
    featured: true,
  },
]

export function PricingV2() {
  return (
    <section id="how-it-works" className="relative py-24 px-8 overflow-hidden">
      {/* Blue gradient background */}
      <div className="absolute inset-0 z-0 bg-[#f5f7fa]" />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 200% 100% at 50% 100%, rgba(200, 210, 240, 0.6) 0%, transparent 60%),
            radial-gradient(ellipse 150% 80% at 50% 95%, rgba(180, 195, 235, 0.5) 0%, transparent 50%),
            radial-gradient(ellipse 100% 50% at 50% 90%, rgba(160, 180, 230, 0.4) 0%, transparent 40%)
          `
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-medium text-[#888] uppercase tracking-[3px] mb-4">
            How Engagements Work
          </p>
          <h2 className="font-space text-[42px] font-medium text-[#1a1a1a] tracking-[-0.02em] leading-[1.2] mb-4">
            Transparent process.<br />Predictable investment.
          </h2>
          <p className="text-[15px] text-[#666] max-w-[500px] mx-auto">
            Every engagement follows the same proven path. No surprises, no scope creep, no hidden costs.
          </p>
        </div>

        {/* Engagement Cards Container */}
        <div className="bg-white/50 backdrop-blur-xl rounded-2xl border border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {engagementStages.map((stage, index) => (
            <div
              key={stage.id}
              className={`p-6 flex flex-col transition-all duration-300 ${
                stage.featured
                  ? 'bg-[#1a1a1a] text-white'
                  : 'bg-transparent'
              } ${index < engagementStages.length - 1 && !stage.featured ? 'border-b md:border-b-0 md:border-r border-[#e5e5e5]/50' : ''}`}
            >
              {/* Stage Number */}
              <div className="flex items-center justify-between mb-4">
                <span className={`font-space text-[32px] font-bold ${
                  stage.featured ? 'text-[#4d65ff]' : 'text-[#4d65ff]'
                }`}>
                  {stage.stage}
                </span>
                <span className={`text-[10px] font-medium uppercase tracking-[1px] px-3 py-1 rounded-full shadow-[0_0_12px_rgba(77,101,255,0.4)] ${
                  stage.featured
                    ? 'bg-white/10 text-white/90'
                    : 'bg-[#f5f5f5] text-[#666]'
                }`}>
                  {stage.duration}
                </span>
              </div>

              {/* Title */}
              <h3 className={`font-space text-[20px] font-semibold mb-2 ${
                stage.featured ? 'text-white' : 'text-[#1a1a1a]'
              }`}>
                {stage.title}
              </h3>

              {/* Description */}
              <p className={`text-[13px] leading-[1.6] mb-5 ${
                stage.featured ? 'text-white/70' : 'text-[#666]'
              }`}>
                {stage.description}
              </p>

              {/* Includes */}
              <div className="flex-1">
                <p className={`text-[10px] font-semibold uppercase tracking-[1.5px] mb-3 ${
                  stage.featured ? 'text-white/50' : 'text-[#999]'
                }`}>
                  What's Included
                </p>
                <ul className="flex flex-col gap-2">
                  {stage.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          stage.featured ? 'stroke-[#4d65ff]' : 'stroke-[#4d65ff]'
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                      >
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span className={`text-[12px] ${
                        stage.featured ? 'text-white/80' : 'text-[#555]'
                      }`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className={`mt-5 pt-4 border-t ${
                stage.featured ? 'border-white/10' : 'border-[#eee]'
              }`}>
                <p className={`text-[10px] font-semibold uppercase tracking-[1.5px] mb-1 ${
                  stage.featured ? 'text-white/50' : 'text-[#999]'
                }`}>
                  Outcome
                </p>
                <p className={`text-[13px] font-medium ${
                  stage.featured ? 'text-white' : 'text-[#1a1a1a]'
                }`}>
                  {stage.outcome}
                </p>
              </div>
            </div>
          ))}
          </div>

          {/* Integrated CTA Footer */}
          <div className="mx-4 mb-4 mt-2 px-6 py-5 rounded-xl bg-[#f8f9fa]/80 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[14px] text-[#555] text-center md:text-left">
              Pricing depends on complexity, integrations, and SLA requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white rounded-lg text-[11px] font-semibold uppercase tracking-[1.5px] hover:bg-[#4d65ff] transition-all shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
              >
                Get Custom Pricing
                <span>→</span>
              </Link>
              <Link
                href="#agents"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#ccc] text-[#1a1a1a] rounded-lg text-[11px] font-semibold uppercase tracking-[1.5px] hover:border-[#1a1a1a] hover:bg-white transition-all"
              >
                Agents in Action
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
