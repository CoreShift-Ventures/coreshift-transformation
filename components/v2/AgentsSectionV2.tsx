'use client'

const agents = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#555] fill-none" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
      </svg>
    ),
    title: 'GRN Reconciliation Agent',
    description: 'Logs into 19+ OEM portals daily, extracts GRN data, updates SAP VBRK billing documents — without anyone touching a keyboard.',
    tags: ['SAP ECC/S4HANA', 'Playwright', 'PostgreSQL'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#555] fill-none" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    title: 'AP/AR Automation Agent',
    description: 'Extracts 12 fields from invoice PDFs, matches POs, applies BACS/SWIFT bank payments to open invoices with 94% auto-match rate.',
    tags: ['NetSuite', 'Claude Vision', 'BACS/SWIFT'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#555] fill-none" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'SAP Query Agent',
    description: 'Self-service access to 10,000+ SAP tables for finance dashboards — no IT tickets, no ABAP developer, real-time via OData.',
    tags: ['SAP S4/HANA', 'OData 2.0', 'Power BI'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#555] fill-none" strokeWidth="1.5">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
    title: 'Fund Operations Agent',
    description: 'End-to-end investor reporting for VC/PE — 6 compliance-ready reports, 117 investors, 97.3% accuracy vs legacy Power BI.',
    tags: ['Tally Prime', 'PostgreSQL', 'FBIL API'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#555] fill-none" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
      </svg>
    ),
    title: 'CS Intelligence Agent',
    description: 'Monitors churn risk and NRR across 200+ enterprise accounts syncing from Salesforce — surfaces at-risk revenue before it\'s lost.',
    tags: ['Salesforce', 'SOQL', 'Google Apps Script'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#555] fill-none" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Vehicle Compliance Agent',
    description: 'Validates 10,000+ vehicles against government RTO databases, auto-flags compliance issues, generates renewal campaigns daily.',
    tags: ['Signzy API', 'SurePass', 'Parivahan/Vahan'],
  },
]

export function AgentsSectionV2() {
  return (
    <section id="agents" className="relative py-20 px-8 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 z-0 bg-[#f5f7fa]" />

      {/* Radial gradient glow from bottom - matching hero */}
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
        <div className="text-center mb-12">
          <p className="text-[10px] font-medium text-[#999] uppercase tracking-[2.5px] mb-3">
            Live in Production
          </p>
          <h2 className="font-space text-[36px] font-medium text-[#1a1a1a] tracking-[-0.02em]">
            Agents running today
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div
              key={agent.title}
              className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 border border-white/80"
            >
              <div className="w-10 h-10 bg-white/80 border border-[#eee] rounded-lg flex items-center justify-center mb-4">
                {agent.icon}
              </div>
              <h3 className="font-space text-[16px] font-semibold text-[#1a1a1a] mb-2 tracking-[-0.01em]">
                {agent.title}
              </h3>
              <p className="text-[13px] text-[#777] leading-[1.6] mb-4">
                {agent.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {agent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-medium text-[#666] bg-white/80 border border-[#e5e5e5] px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
