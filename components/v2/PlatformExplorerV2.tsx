'use client'

import { useState } from 'react'
import Link from 'next/link'

const tabs = [
  { id: 'live-agents', label: 'Live Agents' },
  { id: 'blueprints', label: 'Agent Blueprints' },
  { id: 'custom-build', label: 'Custom Build' },
]

const liveAgents = [
  {
    name: 'GRN Reconciliation',
    heroMetric: '~100%',
    metricLabel: 'Automation rate',
    description: 'Logs into 19+ portals daily, zero manual touch',
    tags: ['SAP ECC', 'Playwright'],
    lastRun: 'Today 06:03 AM',
    errors: 0,
    sparkline: [true, true, true, true, true, true, true],
    icon: 'package',
  },
  {
    name: 'AP/AR Automation',
    heroMetric: '94%',
    metricLabel: 'Auto match rate',
    description: 'Matches invoices to POs with 94% accuracy',
    tags: ['NetSuite', 'Claude Vision'],
    lastRun: 'Today 05:45 AM',
    errors: 0,
    sparkline: [true, true, true, true, true, true, true],
    icon: 'invoice',
  },
  {
    name: 'SAP Query Agent',
    heroMetric: '2 to 5s',
    metricLabel: 'Query response',
    description: 'Self service SAP access, no IT tickets',
    tags: ['SAP HANA', 'ACDOCA'],
    lastRun: 'Today 06:12 AM',
    errors: 0,
    sparkline: [true, true, true, true, true, true, true],
    icon: 'database',
  },
  {
    name: 'Fund Operations',
    heroMetric: '97.3%',
    metricLabel: 'Accuracy vs legacy',
    description: '117 investors, full audit trail',
    tags: ['Tally Prime', 'FBIL API'],
    lastRun: 'Today 04:30 AM',
    errors: 0,
    sparkline: [true, true, true, true, true, true, true],
    icon: 'chart',
  },
  {
    name: 'CS Intelligence',
    heroMetric: '200+',
    metricLabel: 'Accounts monitored',
    description: 'Flags at risk revenue before your team sees it',
    tags: ['Salesforce', 'SOQL'],
    lastRun: 'Today 06:00 AM',
    errors: 0,
    sparkline: [true, true, true, true, false, true, true],
    icon: 'users',
  },
  {
    name: 'Vehicle Compliance',
    heroMetric: '10,000+',
    metricLabel: 'Vehicles validated',
    description: '10K+ vehicles validated against RTO daily',
    tags: ['RTO API', 'Fleet DB'],
    lastRun: 'Today 05:00 AM',
    errors: 0,
    sparkline: [true, true, true, true, true, true, true],
    icon: 'truck',
  },
]

const blueprintCategories = ['All', 'Finance', 'Supply Chain', 'Reporting', 'Customer Success', 'Compliance', 'ERP']

const blueprints = [
  {
    name: 'Invoice Reconciliation',
    slug: 'invoice-reconciliation',
    category: 'Finance',
    description: 'Extracts invoice data, matches POs, posts to ERP',
    systems: ['NetSuite/SAP', 'Vision API', 'BACS/SWIFT'],
    buildTime: '4 to 6 weeks',
    basedOn: 'Production-ready',
    tag: 'NetSuite',
  },
  {
    name: 'GRN Reconciliation',
    slug: 'grn-reconciliation',
    category: 'Finance',
    description: 'Logs into vendor portals, validates, updates SAP',
    systems: ['SAP ECC/S4HANA', 'Playwright', 'PostgreSQL'],
    buildTime: '4 to 6 weeks',
    basedOn: '1 live deployment',
    tag: 'SAP',
  },
  {
    name: 'Bank Reconciliation',
    slug: 'bank-reconciliation',
    category: 'Finance',
    description: 'Matches bank feeds to ledger entries automatically',
    systems: ['Tally/SAP', 'Bank API', 'PostgreSQL'],
    buildTime: '4 to 6 weeks',
    basedOn: 'Blueprint',
    tag: 'Tally',
  },
  {
    name: 'Expense Report Automation',
    slug: 'expense-report',
    category: 'Finance',
    description: 'Extracts receipts, categorizes, submits for approval',
    systems: ['SAP Concur', 'Vision API', 'Slack'],
    buildTime: '3 to 4 weeks',
    basedOn: 'Blueprint',
    tag: 'SAP',
  },
  {
    name: 'Vendor Portal Extraction',
    slug: 'vendor-portal',
    category: 'Supply Chain',
    description: 'Multi portal login, data extraction, SAP update',
    systems: ['Playwright', 'SAP', 'PostgreSQL'],
    buildTime: '4 to 6 weeks',
    basedOn: '1 live deployment',
    tag: 'SAP',
  },
  {
    name: 'PO GRN Matching',
    slug: 'po-grn-matching',
    category: 'Supply Chain',
    description: 'Matches purchase orders to goods receipts',
    systems: ['SAP MM', 'PostgreSQL'],
    buildTime: '3 to 4 weeks',
    basedOn: 'Blueprint',
    tag: 'SAP',
  },
  {
    name: 'Investor Reporting',
    slug: 'investor-reporting',
    category: 'Reporting',
    description: 'Compliance ready investor statements, automated',
    systems: ['Tally Prime', 'FBIL API', 'PostgreSQL'],
    buildTime: '6 to 8 weeks',
    basedOn: '1 live deployment',
    tag: 'Tally',
  },
  {
    name: 'Board Pack Automation',
    slug: 'board-pack',
    category: 'Reporting',
    description: 'KPIs pulled, formatted, delivered on schedule',
    systems: ['Power BI', 'Google Slides API'],
    buildTime: '4 to 6 weeks',
    basedOn: 'Blueprint',
    tag: 'Power BI',
  },
  {
    name: 'Churn Risk Monitor',
    slug: 'churn-risk',
    category: 'Customer Success',
    description: 'Monitors NRR, usage, flags at risk accounts',
    systems: ['Salesforce', 'SOQL', 'Google Apps Script'],
    buildTime: '4 to 6 weeks',
    basedOn: '1 live deployment',
    tag: 'Salesforce',
  },
  {
    name: 'Renewal Pipeline Tracker',
    slug: 'renewal-tracker',
    category: 'Customer Success',
    description: 'Surfaces upcoming renewals, health scores',
    systems: ['Salesforce', 'PostgreSQL'],
    buildTime: '3 to 4 weeks',
    basedOn: 'Blueprint',
    tag: 'Salesforce',
  },
  {
    name: 'Vehicle Compliance Validator',
    slug: 'vehicle-compliance',
    category: 'Compliance',
    description: 'Validates licences, fitness, insurance at scale',
    systems: ['Vahan API', 'SurePass'],
    buildTime: '4 to 6 weeks',
    basedOn: '1 live deployment',
    tag: 'RTO',
  },
  {
    name: 'SAP Self Service Query',
    slug: 'sap-query',
    category: 'ERP',
    description: 'Natural language queries against SAP tables',
    systems: ['SAP S4/HANA', 'OData 2.0', 'Power BI'],
    buildTime: '6 to 8 weeks',
    basedOn: '1 live deployment',
    tag: 'SAP',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery Sprint',
    duration: '2 weeks',
    description: 'We embed with your team to map the operation, identify edge cases, and scope the agent.',
    deliverables: ['Process documentation', 'Edge case matrix', 'Technical spec'],
  },
  {
    step: '02',
    title: 'Build & Test',
    duration: '4-6 weeks',
    description: 'We build the agent, integrate with your systems, and test against real data.',
    deliverables: ['Working agent', 'Integration tests', 'UAT sign-off'],
  },
  {
    step: '03',
    title: 'Deploy & Monitor',
    duration: 'Ongoing',
    description: 'Agent goes live on your infrastructure. We monitor 24/7 and handle maintenance.',
    deliverables: ['Production deployment', '24/7 monitoring', 'Monthly reports'],
  },
]


const operationTiles = [
  { id: 'invoice', label: 'Invoice Processing', icon: 'invoice' },
  { id: 'vendor', label: 'Vendor Reconciliation', icon: 'vendor' },
  { id: 'investor', label: 'Investor Reporting', icon: 'chart' },
  { id: 'compliance', label: 'Compliance Tracking', icon: 'shield' },
  { id: 'sales', label: 'Sales Pipeline Ops', icon: 'trending' },
  { id: 'hr', label: 'HR & Payroll Checks', icon: 'users' },
  { id: 'migration', label: 'System Data Migration', icon: 'database' },
  { id: 'other', label: 'Something else...', icon: 'arrow' },
]

const operationResponses: Record<string, { intro: string; points: string[]; closing: string }> = {
  'invoice': {
    intro: 'Invoice Processing is a well-understood pattern for us. We\'ve built 2 variants: AP/AR automation and GRN reconciliation.',
    points: ['PDF/email extraction layer', 'ERP matching and posting', 'Exception handling workflow'],
    closing: 'Discovery Sprint scopes your exact variant in 2 weeks.',
  },
  'vendor': {
    intro: 'Vendor Reconciliation is one of our strongest patterns. We\'ve automated 19+ OEM vendor portals for GRN matching.',
    points: ['Multi-portal login automation', 'GRN extraction and validation', 'SAP/ERP update workflows'],
    closing: 'Discovery Sprint maps your vendor ecosystem in 2 weeks.',
  },
  'investor': {
    intro: 'Investor Reporting is live in production for a VC fund. Compliance-ready statements with full audit trail.',
    points: ['Data pull from Tally/accounting systems', 'FBIL rate integration', 'Formatted report generation'],
    closing: 'Discovery Sprint scopes your reporting requirements in 2 weeks.',
  },
  'compliance': {
    intro: 'Compliance Tracking scales well with agents. We\'ve built vehicle compliance validation at 10K+ scale.',
    points: ['Licence and certificate validation', 'Expiry tracking and alerts', 'Audit-ready documentation'],
    closing: 'Discovery Sprint identifies your compliance checkpoints in 2 weeks.',
  },
  'sales': {
    intro: 'Sales Pipeline Ops is a natural fit for agents. We\'ve built churn monitoring and NRR tracking for CS teams.',
    points: ['CRM data hygiene automation', 'Pipeline health scoring', 'Renewal and churn alerts'],
    closing: 'Discovery Sprint maps your sales ops workflows in 2 weeks.',
  },
  'hr': {
    intro: 'HR & Payroll checks involve repetitive validation. Exactly what agents excel at.',
    points: ['Attendance and leave reconciliation', 'Payroll data validation', 'Compliance document checks'],
    closing: 'Discovery Sprint scopes your HR automation in 2 weeks.',
  },
  'migration': {
    intro: 'System Data Migration is complex but automatable. Agents handle extraction, transformation, and validation.',
    points: ['Legacy system data extraction', 'Field mapping and transformation', 'Validation and error handling'],
    closing: 'Discovery Sprint assesses your migration scope in 2 weeks.',
  },
  'other': {
    intro: 'Every agent we\'ve built started as a conversation. If your team does it manually on a schedule, we can likely automate it.',
    points: [],
    closing: 'Tell us what your team does, and we\'ll scope a Discovery Sprint.',
  },
}

const proofStrips = [
  { icon: 'bolt', text: 'Scoped in 2 weeks, not months' },
  { icon: 'lock', text: 'Fixed price Discovery Sprint. No surprises' },
  { icon: 'refresh', text: 'Working prototype before Build begins' },
]

const buildSteps = [
  {
    step: '01',
    title: 'Discovery Sprint',
    duration: '2 weeks',
    includes: ['Process mapping', 'Edge case doc', 'Agent spec', 'ROI model', 'Prototype'],
    outcome: 'You know exactly what you\'re buying',
  },
  {
    step: '02',
    title: 'Agent Build',
    duration: '4 to 8 weeks',
    includes: ['Full agent build', 'System integrations', 'UAT on your data', 'Deployment'],
    outcome: 'Agent live on your infrastructure',
  },
  {
    step: '03',
    title: 'Monthly Ops',
    duration: 'Ongoing',
    includes: ['24/7 monitoring', 'Bug fixes', 'Updates', 'Monthly performance report'],
    outcome: 'Zero ops burden, one invoice',
  },
]

export function PlatformExplorerV2() {
  const [activeTab, setActiveTab] = useState('live-agents')
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedOperation, setSelectedOperation] = useState<string | null>(null)
  const [customOperation, setCustomOperation] = useState('')

  return (
    <section id="solutions" className="relative py-24 px-8">
      {/* Blue gradient background */}
      <div className="absolute inset-0 z-0 bg-[#f5f7fa]" />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 200% 100% at 50% 0%, rgba(200, 210, 240, 0.5) 0%, transparent 50%),
            radial-gradient(ellipse 150% 80% at 50% 100%, rgba(180, 195, 235, 0.4) 0%, transparent 40%)
          `
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-[11px] font-medium text-[#888] uppercase tracking-[3px] mb-3">
            Use tabs to explore more
          </p>
          <h2 className="font-space text-[36px] font-medium text-[#1a1a1a] tracking-[-0.02em] leading-[1.2]">
            Purpose-built agentic AI for enterprise operations
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {/* Tabs - Horizontal on mobile, vertical sidebar on desktop */}
          <div className="w-full md:w-[280px] flex-shrink-0 md:sticky md:top-[80px] self-start">
            <div className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 px-5 py-3 md:py-3.5 rounded-lg text-left font-space text-[12px] md:text-[13px] font-semibold uppercase tracking-[1px] transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-[#1a1a1a] text-white shadow-lg'
                      : 'bg-white/70 backdrop-blur-sm text-[#555] border border-[#e0e0e0] hover:border-[#1a1a1a] hover:bg-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-5 md:p-8 min-h-[400px]">
            {/* Live Agents Tab */}
            {activeTab === 'live-agents' && (
              <div className="animate-fadeIn">
                <div className="mb-5">
                  <h3 className="font-space text-[22px] font-medium text-[#1a1a1a] mb-2">
                    Agents in Production
                  </h3>
                  <p className="text-[14px] text-[#666]">
                    Proven agents running at enterprises today. Adaptable to your stack, deployable in weeks.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {liveAgents.map((agent) => (
                    <div
                      key={agent.name}
                      className="group relative rounded-2xl border border-[#E8E8EE] bg-white overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {/* Card Content */}
                      <div className="p-4">
                        {/* Row 1: Icon + LIVE badge */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-lg bg-[#f5f7fa] flex items-center justify-center">
                            {agent.icon === 'package' && (
                              <svg className="w-4 h-4 stroke-[#555]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                                <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                                <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>
                              </svg>
                            )}
                            {agent.icon === 'invoice' && (
                              <svg className="w-4 h-4 stroke-[#555]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
                              </svg>
                            )}
                            {agent.icon === 'database' && (
                              <svg className="w-4 h-4 stroke-[#555]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                              </svg>
                            )}
                            {agent.icon === 'chart' && (
                              <svg className="w-4 h-4 stroke-[#555]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                                <path d="M18 20V10M12 20V4M6 20v-6"/>
                              </svg>
                            )}
                            {agent.icon === 'users' && (
                              <svg className="w-4 h-4 stroke-[#555]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                              </svg>
                            )}
                            {agent.icon === 'truck' && (
                              <svg className="w-4 h-4 stroke-[#555]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                                <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/>
                                <circle cx="5.5" cy="18.5" r="2.5"/>
                                <circle cx="18.5" cy="18.5" r="2.5"/>
                              </svg>
                            )}
                          </div>
                          <span className="flex items-center gap-1.5 px-2 py-1 bg-[#22c55e]/10 rounded text-[9px] font-semibold text-[#22c55e] uppercase tracking-[0.5px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                            Live
                          </span>
                        </div>

                        {/* Row 2: Agent Name */}
                        <h4 className="font-space text-[15px] font-semibold text-[#1a1a1a] mb-2">
                          {agent.name}
                        </h4>

                        {/* Row 3: Hero Metric */}
                        <div className="mb-2">
                          <span className="font-space text-[26px] font-bold text-[#f97316] tracking-[-0.02em]">
                            {agent.heroMetric}
                          </span>
                          <p className="text-[10px] text-[#888] uppercase tracking-[1px] mt-0.5">
                            {agent.metricLabel}
                          </p>
                        </div>

                        {/* Row 4: Description */}
                        <p className="text-[11px] text-[#666] leading-[1.5] mb-3">
                          {agent.description}
                        </p>

                        {/* Row 5: Tech Tags */}
                        <div className="flex gap-1.5">
                          {agent.tags.map((tag) => (
                            <span key={tag} className="text-[9px] font-medium text-[#888] bg-[#f5f5f5] px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hover Slide-up Panel */}
                      <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-[#0F172A] rounded-b-2xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                        <div className="p-3 h-full flex flex-col">
                          {/* Top row: Last Run & Status */}
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="text-[8px] text-white/50 uppercase tracking-[1px] mb-0.5">Last Run</p>
                              <p className="text-[11px] text-white font-medium">{agent.lastRun}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-[8px] text-white/50 uppercase tracking-[1px] mb-0.5">Status</p>
                              <p className="text-[11px] text-[#22c55e] font-medium flex items-center gap-1 justify-end">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                                {agent.errors} errors
                              </p>
                            </div>
                          </div>

                          {/* Sparkline */}
                          <div className="flex gap-1 mb-2">
                            {agent.sparkline.map((success, i) => (
                              <span
                                key={i}
                                className={`w-2 h-2 rounded-full ${success ? 'bg-[#22c55e]' : 'bg-[#ef4444]'}`}
                              />
                            ))}
                          </div>

                          {/* View Details Link */}
                          <div className="mt-auto text-right">
                            <span className="text-[10px] font-medium text-white/70 hover:text-white cursor-pointer transition-colors">
                              View details →
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom text */}
                <p className="mt-6 text-center text-[12px] text-[#888]">
                  All agents deployed on your infrastructure · Monitored 24/7
                </p>
              </div>
            )}

            {/* Blueprints Tab */}
            {activeTab === 'blueprints' && (
              <div className="animate-fadeIn">
                {/* Header */}
                <div className="mb-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-space text-[22px] font-medium text-[#1a1a1a]">
                      Agent Blueprints
                    </h3>
                    <div className="flex gap-2">
                      <span className="px-2.5 py-1 bg-[#f5f5f5] rounded text-[10px] font-medium text-[#666]">
                        12+ Blueprints
                      </span>
                      <span className="px-2.5 py-1 bg-[#f5f5f5] rounded text-[10px] font-medium text-[#666]">
                        4 to 6 week avg build
                      </span>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#666]">
                    Operations we've solved before. Faster build, lower risk, known patterns.
                  </p>
                </div>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {blueprintCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-medium transition-all duration-200 ${
                        activeCategory === cat
                          ? 'bg-[#1a1a1a] text-white'
                          : 'bg-white border border-[#e0e0e0] text-[#666] hover:border-[#1a1a1a] hover:text-[#1a1a1a]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Blueprint Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {blueprints
                    .filter(bp => activeCategory === 'All' || bp.category === activeCategory)
                    .map((bp) => (
                      <div
                        key={bp.name}
                        className="group relative rounded-xl border border-[#E8E8EE] bg-white overflow-hidden hover:border-[#4d65ff] hover:shadow-[0_4px_20px_rgba(77,101,255,0.12)] transition-all duration-300"
                      >
                        <div className="p-4">
                          {/* Top row: Category + Tag */}
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[9px] font-semibold text-[#4d65ff] bg-[#4d65ff]/10 px-2 py-0.5 rounded uppercase tracking-[0.5px]">
                              {bp.category}
                            </span>
                            <span className="text-[9px] font-medium text-[#888] bg-[#f5f5f5] px-2 py-0.5 rounded">
                              {bp.tag}
                            </span>
                          </div>

                          {/* Blueprint Name */}
                          <h4 className="font-space text-[14px] font-semibold text-[#1a1a1a] mb-2">
                            {bp.name}
                          </h4>

                          {/* Description */}
                          <p className="text-[11px] text-[#666] leading-[1.5] mb-3">
                            {bp.description}
                          </p>

                          {/* Divider */}
                          <div className="border-t border-[#eee] pt-3">
                            {/* Systems */}
                            <div className="flex items-start gap-2 mb-1.5">
                              <span className="text-[9px] text-[#999] w-12 flex-shrink-0">Systems</span>
                              <span className="text-[10px] text-[#555]">{bp.systems.join(' · ')}</span>
                            </div>
                            {/* Build Time */}
                            <div className="flex items-start gap-2 mb-1.5">
                              <span className="text-[9px] text-[#999] w-12 flex-shrink-0">Build</span>
                              <span className="text-[10px] text-[#555]">{bp.buildTime}</span>
                            </div>
                            {/* Based On */}
                            <div className="flex items-start gap-2">
                              <span className="text-[9px] text-[#999] w-12 flex-shrink-0">Based on</span>
                              <span className={`text-[10px] font-medium ${bp.basedOn.includes('live') ? 'text-[#f97316]' : 'text-[#888]'}`}>
                                {bp.basedOn}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Hover Strip */}
                        <div className="absolute bottom-0 left-0 right-0 bg-[#0F172A] py-2 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                          <Link href={`/contact?intent=${bp.slug}`} className="text-[10px] font-medium text-white flex items-center justify-between">
                            <span>Discuss this blueprint</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Bottom CTA Card */}
                <div className="mt-5 -mx-5 md:-mx-8 -mb-5 md:-mb-8 px-5 md:px-6 py-5 bg-[#F0F4FF] rounded-b-2xl">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <p className="text-[14px] font-medium text-[#1a1a1a] mb-1">Don't see your operation?</p>
                      <p className="text-[12px] text-[#666]">Every blueprint started as a custom build. Tell us what your team does manually.</p>
                    </div>
                    <button
                      onClick={() => setActiveTab('custom-build')}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0F172A] text-white rounded-lg text-[10px] font-semibold uppercase tracking-[1px] hover:bg-[#1e293b] transition-all flex-shrink-0 w-full md:w-auto"
                    >
                      Explore Custom Build
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Custom Build Tab */}
            {activeTab === 'custom-build' && (
              <div className="animate-fadeIn">
                {/* Zone 1: Reassurance Header */}
                <div className="mb-5">
                  <p className="text-[10px] font-semibold text-[#4d65ff] uppercase tracking-[1.5px] mb-2">Custom Agents</p>
                  <h3 className="font-space text-[22px] font-medium text-[#1a1a1a] mb-2">
                    We've never met an operation we couldn't agent-ify.
                  </h3>
                  <p className="text-[13px] text-[#666] leading-[1.6] mb-4 max-w-[600px]">
                    If your team does it manually on a schedule, an agent can do it better. We scope it in 2 weeks. You see a working prototype before you commit to build.
                  </p>
                  <div className="flex flex-wrap gap-3 md:gap-6">
                    {proofStrips.map((strip, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-[#4d65ff]/10 flex items-center justify-center flex-shrink-0">
                          {strip.icon === 'bolt' && <svg className="w-3.5 h-3.5 stroke-[#4d65ff]" viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>}
                          {strip.icon === 'lock' && <svg className="w-3.5 h-3.5 stroke-[#4d65ff]" viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>}
                          {strip.icon === 'refresh' && <svg className="w-3.5 h-3.5 stroke-[#4d65ff]" viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>}
                        </span>
                        <span className="text-[11px] text-[#555] font-medium">{strip.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Zone 2: Operation Finder */}
                <div className="mb-5">
                  <p className="text-[10px] font-semibold text-[#888] uppercase tracking-[1.5px] mb-3">What does your team do manually today?</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {operationTiles.map((tile) => (
                      <button
                        key={tile.id}
                        onClick={() => setSelectedOperation(tile.id)}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-full border transition-all duration-200 ${
                          selectedOperation === tile.id
                            ? 'border-[#0F172A] bg-[#0F172A] text-white shadow-sm'
                            : 'border-[#e0e0e0] bg-white text-[#555] hover:border-[#999]'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${selectedOperation === tile.id ? 'bg-white/20' : 'bg-[#f5f5f5]'}`}>
                          {tile.icon === 'invoice' && <svg className={`w-3 h-3 ${selectedOperation === tile.id ? 'stroke-white' : 'stroke-[#666]'}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>}
                          {tile.icon === 'vendor' && <svg className={`w-3 h-3 ${selectedOperation === tile.id ? 'stroke-white' : 'stroke-[#666]'}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.5"><path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></svg>}
                          {tile.icon === 'chart' && <svg className={`w-3 h-3 ${selectedOperation === tile.id ? 'stroke-white' : 'stroke-[#666]'}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>}
                          {tile.icon === 'shield' && <svg className={`w-3 h-3 ${selectedOperation === tile.id ? 'stroke-white' : 'stroke-[#666]'}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                          {tile.icon === 'trending' && <svg className={`w-3 h-3 ${selectedOperation === tile.id ? 'stroke-white' : 'stroke-[#666]'}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.5"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>}
                          {tile.icon === 'users' && <svg className={`w-3 h-3 ${selectedOperation === tile.id ? 'stroke-white' : 'stroke-[#666]'}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>}
                          {tile.icon === 'database' && <svg className={`w-3 h-3 ${selectedOperation === tile.id ? 'stroke-white' : 'stroke-[#666]'}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>}
                          {tile.icon === 'arrow' && <svg className={`w-3 h-3 ${selectedOperation === tile.id ? 'stroke-white' : 'stroke-[#666]'}`} viewBox="0 0 24 24" fill="none" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>}
                        </span>
                        <span className="text-[10px] font-medium truncate">
                          {tile.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Response Panel */}
                  <div className={`mt-3 overflow-hidden transition-all duration-300 ${selectedOperation ? 'max-h-[220px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    {selectedOperation && operationResponses[selectedOperation] && (
                      <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                        <p className="text-[13px] text-[#1a1a1a] leading-[1.7] mb-3">
                          {operationResponses[selectedOperation].intro}
                        </p>

                        {operationResponses[selectedOperation].points.length > 0 && (
                          <div className="mb-3">
                            <p className="text-[11px] text-[#666] mb-2">Your version would likely involve:</p>
                            <ul className="space-y-1">
                              {operationResponses[selectedOperation].points.map((point) => (
                                <li key={point} className="flex items-center gap-2 text-[12px] text-[#555]">
                                  <span className="w-1 h-1 rounded-full bg-[#4d65ff]" />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {selectedOperation === 'other' && (
                          <input
                            type="text"
                            value={customOperation}
                            onChange={(e) => setCustomOperation(e.target.value)}
                            placeholder="Describe what your team does manually..."
                            className="w-full px-3 py-2.5 text-[12px] border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#4d65ff] transition-colors mb-3 bg-white"
                          />
                        )}

                        <p className="text-[12px] text-[#666] mb-3">
                          {operationResponses[selectedOperation].closing}
                        </p>

                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#0F172A] text-white rounded-lg text-[10px] font-semibold uppercase tracking-[1px] hover:bg-[#1e293b] transition-all"
                        >
                          Start Discovery Sprint
                          <span>→</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                {/* Zone 3: 3-Step Process with Pricing */}
                <div className="mb-5">
                  <div className="flex flex-col md:flex-row gap-3">
                    {buildSteps.map((step, i) => (
                      <div key={step.step} className="flex-1 p-4 rounded-xl border border-[#e5e5e5] bg-white relative">
                        {/* Step indicator */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[9px] font-semibold text-[#888] uppercase tracking-[1px]">Step {step.step}</span>
                          {i < buildSteps.length - 1 && (
                            <span className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-[#ccc] z-10">→</span>
                          )}
                        </div>

                        {/* Title */}
                        <h4 className="font-space text-[15px] font-semibold text-[#1a1a1a] mb-1">
                          {step.title}
                        </h4>

                        {/* Duration */}
                        <div className="border-t border-[#eee] pt-2 mt-2 mb-3">
                          <p className="text-[12px] font-medium text-[#4d65ff]">{step.duration}</p>
                        </div>

                        {/* What's included */}
                        <div className="mb-3">
                          <p className="text-[9px] text-[#999] uppercase tracking-[0.5px] mb-1">Includes</p>
                          <p className="text-[10px] text-[#666] leading-[1.6]">
                            {step.includes.join(', ')}
                          </p>
                        </div>

                        {/* Outcome */}
                        <div className="pt-2 border-t border-[#eee]">
                          <p className="text-[11px] font-medium text-[#22c55e]">
                            → {step.outcome}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Note */}
                  <p className="text-[11px] text-[#888] text-center mt-3">
                    Discovery fee is credited toward Build if you proceed. No lock-in.
                  </p>
                </div>

                {/* Zone 4: Dark CTA Card */}
                <div className="-mx-5 md:-mx-8 -mb-5 md:-mb-8 px-5 md:px-6 py-5 md:py-6 bg-[#0F172A] rounded-b-2xl">
                  <h4 className="font-space text-[18px] font-semibold text-white mb-4">
                    Ready to scope your operation?
                  </h4>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    {/* Left: Description */}
                    <div className="flex-1">
                      <p className="text-[13px] text-white/70 leading-[1.7]">
                        Tell us what your team does manually and we'll tell you if an agent can do it.
                        <span className="block mt-1 text-white/50">First conversation is free.</span>
                      </p>
                    </div>

                    {/* Right: CTAs */}
                    <div className="flex-shrink-0 w-full md:w-[280px]">
                      <Link
                        href="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#0F172A] rounded-lg text-[11px] font-semibold uppercase tracking-[1px] hover:bg-white/90 transition-all mb-3"
                      >
                        Book Discovery Call
                        <span>→</span>
                      </Link>

                      <p className="text-[10px] text-white/40 mb-2">or describe your operation:</p>
                      <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2.5">
                        <input
                          type="text"
                          placeholder="We manually process invoices every..."
                          className="flex-1 bg-transparent text-[11px] text-white placeholder-white/30 outline-none"
                        />
                        <button className="text-[10px] font-semibold text-[#4d65ff] hover:text-[#6d85ff] transition-colors flex-shrink-0">
                          Send →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

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
