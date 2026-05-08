'use client'

import { useState, useEffect } from 'react'

const comparisonOptions = [
  {
    id: 'staff',
    title: 'Hire Staff',
    subtitle: 'Traditional approach',
    cost: '$60-120K/yr',
    costNote: 'per FTE',
    points: [
      { label: 'Runs at 6AM', value: false, note: 'Office hours only' },
      { label: 'Handles exceptions', value: 'partial', note: 'Slowly' },
      { label: 'Portal changes', value: 'partial', note: 'Adapts slowly' },
      { label: 'Audit trail', value: false, note: 'Manual tracking' },
      { label: 'System integration', value: 'partial', note: 'Copy-paste' },
      { label: 'Accountability', value: 'partial', note: 'Attrition risk' },
    ],
  },
  {
    id: 'rpa',
    title: 'RPA / Generic AI',
    subtitle: 'Bots & LLMs',
    cost: '$20-60K/yr',
    costNote: '+ implementation',
    points: [
      { label: 'Runs at 6AM', value: 'partial', note: 'Fragile, breaks often' },
      { label: 'Handles exceptions', value: false, note: 'Breaks or hallucinates' },
      { label: 'Portal changes', value: false, note: 'Breaks silently' },
      { label: 'Audit trail', value: false, note: 'None or unreliable' },
      { label: 'System integration', value: false, note: 'Manual glue code' },
      { label: 'Accountability', value: false, note: 'No one to call' },
    ],
  },
  {
    id: 'agent',
    title: 'CoreShift Agent',
    subtitle: 'Managed AI agent',
    cost: '20-50%',
    costNote: 'of staff cost',
    featured: true,
    points: [
      { label: 'Runs at 6AM', value: true, note: 'Always, reliably' },
      { label: 'Handles exceptions', value: true, note: 'Logs + alerts' },
      { label: 'Portal changes', value: true, note: 'Self-heals' },
      { label: 'Audit trail', value: true, note: 'Full automatic' },
      { label: 'System integration', value: true, note: 'Native connectors' },
      { label: 'Accountability', value: true, note: 'We fix it, SLA-backed' },
    ],
  },
]

const beforeSteps = [
  { title: 'Login to Vendor Portals', desc: 'Opening browser tabs manually' },
  { title: 'Download Records', desc: 'Copy-paste to spreadsheet' },
  { title: 'Manual Validation', desc: 'Cross-check against PO data' },
  { title: 'ERP Data Entry', desc: 'Type each record individually' },
  { title: 'Send Status Update', desc: 'Draft and send to stakeholders' },
]

const afterSteps = [
  { title: 'Portal Authentication', desc: 'Connected to 19 portals automatically' },
  { title: 'Data Extraction', desc: 'Extracted 81 pending records' },
  { title: 'Validation Rules', desc: '14 rules executed in parallel' },
  { title: 'ERP Sync', desc: 'Billing documents updated' },
]

const chatMessages = [
  { type: 'user', text: 'Process all pending GRNs from OEM vendor portal for this week.' },
  { type: 'agent', text: "I'll process the pending GRNs. Found 23 records for this week. Starting validation..." },
  { type: 'agent', text: 'Validated 23 GRNs against EKKO/EKPO\n21 matched successfully\n2 flagged for review' },
]

const liveTasks = [
  { name: 'OEM Portal Sync', status: 'running', progress: 67 },
  { name: 'SAP Validation', status: 'complete', progress: 100 },
  { name: 'VBRK Update', status: 'queued', progress: 0 },
]

// Icon Components
function UserIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}

function AgentIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  )
}

function BoltIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
    </svg>
  )
}

// Before Panel - Process Flow Animation
function BeforeAnimation() {
  const [activeStep, setActiveStep] = useState(0)
  const [isResetting, setIsResetting] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)

  const stages = [
    { id: 'login', label: 'Portal Login', icon: '↗', duration: '~15 min' },
    { id: 'download', label: 'Data Download', icon: '↓', duration: '~45 min' },
    { id: 'validate', label: 'Manual Check', icon: '◎', duration: '~90 min' },
    { id: 'entry', label: 'ERP Entry', icon: '✎', duration: '~120 min' },
    { id: 'report', label: 'Status Report', icon: '→', duration: '~30 min' },
  ]

  useEffect(() => {
    if (isResetting) return

    const timeline = [
      { time: 600, action: () => setActiveStep(1) },
      { time: 1800, action: () => setActiveStep(2) },
      { time: 3200, action: () => setActiveStep(3) },
      { time: 4800, action: () => setActiveStep(4) },
      { time: 6200, action: () => setActiveStep(5) },
      { time: 12000, action: () => {
        setIsResetting(true)
        setTimeout(() => {
          setActiveStep(0)
          setElapsedTime(0)
          setIsResetting(false)
        }, 800)
      }},
    ]

    const timers = timeline.map(({ time, action }) => setTimeout(action, time))
    return () => timers.forEach(clearTimeout)
  }, [isResetting])

  // Elapsed time counter
  useEffect(() => {
    if (activeStep > 0 && !isResetting) {
      const interval = setInterval(() => {
        setElapsedTime(prev => prev + 1)
      }, 100)
      return () => clearInterval(interval)
    }
  }, [activeStep, isResetting])

  const getStageStatus = (index: number) => {
    if (activeStep > index) return 'complete'
    if (activeStep === index) return 'active'
    return 'pending'
  }

  const formatTime = (t: number) => {
    const mins = Math.floor(t / 2)
    const hrs = Math.floor(mins / 60)
    const remainingMins = mins % 60
    if (hrs > 0) {
      return `${hrs}h ${remainingMins}m`
    }
    return `${mins} min`
  }

  return (
    <div className={`h-full flex transition-opacity duration-500 ${isResetting ? 'opacity-0' : 'opacity-100'}`}>
      {/* Left - Pipeline */}
      <div className="flex-1 p-4">
        <div className="text-[9px] font-semibold text-[#64748b] uppercase tracking-[1.5px] mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#64748b]" />
          Manual Workflow
        </div>

        <div className="space-y-2">
          {stages.map((stage, i) => {
            const status = getStageStatus(i)
            return (
              <div key={stage.id} className="flex items-center gap-2.5">
                {/* Status Indicator */}
                <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-all duration-300 ${
                  status === 'complete' ? 'bg-[#64748b]' :
                  status === 'active' ? 'bg-[#1e293b]' : 'bg-[#e2e8f0]'
                }`}>
                  {status === 'complete' ? (
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  ) : (
                    <span className={`text-[10px] ${status === 'active' ? 'text-white animate-pulse' : 'text-[#94a3b8]'}`}>
                      {stage.icon}
                    </span>
                  )}
                </div>

                {/* Stage Info */}
                <div className="flex-1">
                  <div className={`text-[11px] font-medium transition-colors duration-300 ${
                    status === 'complete' ? 'text-[#64748b]' :
                    status === 'active' ? 'text-[#0f172a]' : 'text-[#94a3b8]'
                  }`}>
                    {stage.label}
                  </div>
                </div>

                {/* Duration/Status */}
                <div className={`text-[9px] font-mono ${
                  status === 'complete' ? 'text-[#64748b]' :
                  status === 'active' ? 'text-[#f59e0b]' : 'text-[#cbd5e1]'
                }`}>
                  {status === 'complete' ? '✓' : status === 'active' ? stage.duration : '—'}
                </div>
              </div>
            )
          })}
        </div>

        {/* Waiting indicator when active */}
        {activeStep > 0 && activeStep <= stages.length && (
          <div className="mt-4 pt-3 border-t border-[#e2e8f0]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[0, 1, 2].map(i => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#94a3b8] animate-pulse"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
              <span className="text-[10px] text-[#64748b]">Processing manually...</span>
            </div>
          </div>
        )}
      </div>

      {/* Right - Status Panel */}
      <div className="w-[120px] bg-[#f8fafc] border-l border-[#e2e8f0] p-3 flex flex-col">
        <div className="text-[8px] font-semibold text-[#94a3b8] uppercase tracking-wider mb-2">Status</div>

        <div className="space-y-3 flex-1">
          <div>
            <div className="text-[8px] text-[#94a3b8]">Elapsed</div>
            <div className="text-[14px] font-mono font-semibold text-[#475569]">{formatTime(elapsedTime)}</div>
          </div>
          <div>
            <div className="text-[8px] text-[#94a3b8]">Records</div>
            <div className="text-[14px] font-mono font-semibold text-[#475569]">{activeStep > 1 ? Math.min(activeStep * 4, 12) : 0}</div>
          </div>
          <div>
            <div className="text-[8px] text-[#94a3b8]">Errors</div>
            <div className="text-[14px] font-mono font-semibold text-[#f59e0b]">{activeStep > 2 ? 2 : 0}</div>
          </div>
        </div>

        <div className="mt-auto pt-2 border-t border-[#e2e8f0]">
          <div className="text-[8px] text-[#94a3b8] mb-1">Daily Effort</div>
          <div className="text-[11px] font-semibold text-[#ef4444]">4-6 hours</div>
        </div>
      </div>
    </div>
  )
}

// After Panel - Process Flow Animation (Agent)
function AfterAnimation() {
  const [activeStep, setActiveStep] = useState(0)
  const [isResetting, setIsResetting] = useState(false)
  const [recordCount, setRecordCount] = useState(0)
  const [typingText, setTypingText] = useState('')

  const stages = [
    { id: 'auth', label: 'Portal Auth', icon: '⚡' },
    { id: 'extract', label: 'Data Extract', icon: '↓' },
    { id: 'validate', label: 'Validation', icon: '◎' },
    { id: 'sync', label: 'ERP Sync', icon: '→' },
  ]

  useEffect(() => {
    if (isResetting) return

    const timeline = [
      { time: 400, action: () => setActiveStep(1) },
      { time: 1200, action: () => setActiveStep(2) },
      { time: 2200, action: () => setActiveStep(3) },
      { time: 3200, action: () => setActiveStep(4) },
      { time: 4000, action: () => setActiveStep(5) },
      { time: 10000, action: () => {
        setIsResetting(true)
        setTimeout(() => {
          setActiveStep(0)
          setRecordCount(0)
          setTypingText('')
          setIsResetting(false)
        }, 800)
      }},
    ]

    const timers = timeline.map(({ time, action }) => setTimeout(action, time))
    return () => timers.forEach(clearTimeout)
  }, [isResetting])

  // Record counter
  useEffect(() => {
    if (activeStep >= 2 && recordCount < 81) {
      const interval = setInterval(() => {
        setRecordCount(prev => Math.min(prev + 6, 81))
      }, 60)
      return () => clearInterval(interval)
    }
  }, [activeStep, recordCount])

  // Typing animation
  useEffect(() => {
    if (activeStep >= 4) {
      const text = '81 records synced to VBRK...'
      let i = 0
      const interval = setInterval(() => {
        if (i <= text.length) {
          setTypingText(text.slice(0, i))
          i++
        }
      }, 40)
      return () => clearInterval(interval)
    }
  }, [activeStep])

  const getStageStatus = (index: number) => {
    if (activeStep > index) return 'complete'
    if (activeStep === index) return 'active'
    return 'pending'
  }

  return (
    <div className={`h-full flex transition-opacity duration-500 ${isResetting ? 'opacity-0' : 'opacity-100'}`} style={{ background: 'linear-gradient(165deg, #0f172a 0%, #1e293b 100%)' }}>
      {/* Left - Pipeline */}
      <div className="flex-1 p-4">
        <div className="text-[9px] font-semibold text-[#64748b] uppercase tracking-[1.5px] mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
          Agent Workflow
        </div>

        <div className="space-y-2">
          {stages.map((stage, i) => {
            const status = getStageStatus(i)
            return (
              <div key={stage.id} className="flex items-center gap-2.5">
                {/* Status Indicator */}
                <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-all duration-300 ${
                  status === 'complete' ? 'bg-[#22c55e]' :
                  status === 'active' ? 'bg-[#4d65ff]' : 'bg-[#334155]'
                }`}>
                  {status === 'complete' ? (
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  ) : (
                    <span className={`text-[10px] ${status === 'active' ? 'text-white animate-pulse' : 'text-[#64748b]'}`}>
                      {stage.icon}
                    </span>
                  )}
                </div>

                {/* Stage Info */}
                <div className="flex-1">
                  <div className={`text-[11px] font-medium transition-colors duration-300 ${
                    status === 'complete' ? 'text-[#22c55e]' :
                    status === 'active' ? 'text-white' : 'text-[#64748b]'
                  }`}>
                    {stage.label}
                  </div>
                </div>

                {/* Status */}
                <div className={`text-[9px] font-mono ${
                  status === 'complete' ? 'text-[#22c55e]' :
                  status === 'active' ? 'text-[#fbbf24]' : 'text-[#475569]'
                }`}>
                  {status === 'complete' ? '✓' : status === 'active' ? (i === 1 ? `${recordCount}/81` : 'processing') : '—'}
                </div>
              </div>
            )
          })}
        </div>

        {/* Output message */}
        <div className={`mt-4 pt-3 border-t border-[#334155] transition-all duration-500 ${activeStep >= 4 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-[9px] font-mono text-[#60a5fa]">
            {typingText}
            {activeStep >= 4 && typingText.length < 28 && <span className="inline-block w-1.5 h-3 bg-[#60a5fa] animate-pulse ml-0.5" />}
          </div>
          {activeStep >= 5 && (
            <div className="mt-2 flex items-center gap-2 text-[9px] font-mono text-[#22c55e]">
              <span>✓</span>
              <span>Completed at 06:02 AM</span>
            </div>
          )}
        </div>
      </div>

      {/* Right - Status Panel */}
      <div className="w-[120px] bg-[#0f172a]/50 border-l border-white/10 p-3 flex flex-col">
        <div className="text-[8px] font-semibold text-[#64748b] uppercase tracking-wider mb-2">Status</div>

        <div className="space-y-3 flex-1">
          <div>
            <div className="text-[8px] text-[#64748b]">Duration</div>
            <div className="text-[14px] font-mono font-semibold text-[#22c55e]">2 min</div>
          </div>
          <div>
            <div className="text-[8px] text-[#64748b]">Records</div>
            <div className="text-[14px] font-mono font-semibold text-white">{recordCount}</div>
          </div>
          <div>
            <div className="text-[8px] text-[#64748b]">Errors</div>
            <div className="text-[14px] font-mono font-semibold text-[#22c55e]">0</div>
          </div>
        </div>

        {/* Summary stats */}
        <div className={`mt-auto pt-2 border-t border-white/10 transition-all duration-500 ${activeStep >= 5 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid grid-cols-2 gap-2 text-center">
            <div>
              <div className="text-[12px] font-bold text-[#22c55e]">19</div>
              <div className="text-[7px] text-[#64748b]">Portals</div>
            </div>
            <div>
              <div className="text-[12px] font-bold text-[#22c55e]">100%</div>
              <div className="text-[7px] text-[#64748b]">Match</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Agent Studio Component - Enterprise icons, no emojis
function AgentStudio() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [activeAgent, setActiveAgent] = useState(0)

  const sidebarAgents = ['GRN Reconciliation', 'AP/AR Automation', 'SAP Query Agent']

  useEffect(() => {
    let index = 0
    const showNextMessage = () => {
      if (index < chatMessages.length) {
        setVisibleMessages(prev => [...prev, index])
        index++
        setTimeout(showNextMessage, 1000)
      } else {
        setTimeout(() => {
          setVisibleMessages([])
          index = 0
          setTimeout(showNextMessage, 700)
        }, 4000)
      }
    }
    setTimeout(showNextMessage, 700)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAgent(prev => (prev + 1) % sidebarAgents.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] px-4 py-2.5 flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#f87171]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80]" />
        </div>
        <span className="text-[11px] font-semibold text-white">CoreShift Agent Studio</span>
        <div className="flex gap-2">
          <span className="px-2.5 py-1 bg-white/10 rounded text-[9px] font-semibold text-white hover:bg-white/20 transition-colors cursor-pointer">Deploy</span>
          <span className="px-2.5 py-1 bg-white/10 rounded text-[9px] font-semibold text-white hover:bg-white/20 transition-colors cursor-pointer">Settings</span>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_200px] min-h-[360px]">
        {/* Sidebar */}
        <div className="hidden md:block bg-[#f8fafc] border-r border-[#e2e8f0] p-3">
          <div className="text-[9px] font-bold text-[#94a3b8] tracking-[1.5px] uppercase mb-2">Active Agents</div>
          {sidebarAgents.map((agent, i) => (
            <div
              key={agent}
              className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-[11px] font-medium mb-1 cursor-pointer transition-all duration-300 ${
                activeAgent === i
                  ? 'bg-white text-[#0f172a] shadow-[0_1px_3px_rgba(15,23,42,0.06)]'
                  : 'text-[#64748b] hover:bg-white hover:text-[#0f172a]'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full transition-colors ${activeAgent === i ? 'bg-[#22c55e]' : 'bg-[#94a3b8]'}`} />
              {agent}
            </div>
          ))}
          <div className="text-[9px] font-bold text-[#94a3b8] tracking-[1.5px] uppercase mt-4 mb-2">Recent</div>
          <div className="px-2.5 py-2 text-[11px] text-[#64748b] hover:bg-white rounded-lg cursor-pointer transition-colors">Fund Operations</div>
          <div className="px-2.5 py-2 text-[11px] text-[#64748b] hover:bg-white rounded-lg cursor-pointer transition-colors">Invoice Processing</div>
        </div>

        {/* Chat Area */}
        <div className="p-4 bg-white">
          <div className="flex items-center justify-between mb-3">
            <span className="font-space text-[14px] font-semibold text-[#0f172a]">GRN Reconciliation Agent</span>
            <div className="flex gap-0.5 bg-[#f1f5f9] p-0.5 rounded-md">
              <span className="px-2.5 py-1 bg-white rounded text-[10px] font-semibold text-[#0f172a] shadow-sm">Chat</span>
              <span className="px-2.5 py-1 text-[10px] font-semibold text-[#64748b]">Logs</span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 h-[260px] overflow-y-auto">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 transition-all duration-400 ${
                  visibleMessages.includes(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  msg.type === 'user' ? 'bg-[#f1f5f9] text-[#475569]' : 'bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white'
                }`}>
                  {msg.type === 'user' ? <UserIcon /> : <AgentIcon />}
                </div>
                <div className={`flex-1 px-3 py-2 rounded-xl text-[11px] leading-relaxed whitespace-pre-line ${
                  msg.type === 'user'
                    ? 'bg-[#f1f5f9] text-[#334155]'
                    : 'bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] border border-[#e2e8f0] text-[#0f172a]'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tasks Panel */}
        <div className="hidden md:block bg-[#f8fafc] border-l border-[#e2e8f0] p-3">
          <div className="text-[11px] font-semibold text-[#0f172a] mb-2.5 flex items-center gap-1.5">
            <BoltIcon />
            Live Tasks
          </div>
          <div className="flex flex-col gap-2">
            {liveTasks.map((task) => (
              <div key={task.name} className="bg-white rounded-lg p-2.5 border border-[#e2e8f0] hover:border-[#cbd5e1] hover:shadow-sm transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-semibold text-[#0f172a]">{task.name}</span>
                  <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded ${
                    task.status === 'running' ? 'bg-[#3b82f6]/10 text-[#2563eb]' :
                    task.status === 'complete' ? 'bg-[#22c55e]/10 text-[#16a34a]' :
                    'bg-[#94a3b8]/10 text-[#64748b]'
                  }`}>
                    {task.status.toUpperCase()}
                  </span>
                </div>
                <div className="h-1 bg-[#e2e8f0] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      task.status === 'complete' ? 'bg-[#22c55e]' : 'bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]'
                    }`}
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function WhyAgentsV2() {
  return (
    <section id="why-agents" className="relative py-20 px-4 md:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#f8fafc] via-[#f5f7fa] to-[#f8fafc]" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[11px] font-medium text-[#64748b] uppercase tracking-[3px] mb-4">
            Before & After
          </p>
          <h2 className="font-space text-[32px] md:text-[42px] font-medium text-[#1a1a1a] tracking-[-0.02em] leading-[1.2]">
            The operation stays the same.<br />
            <span className="text-[#3b82f6]">The execution changes.</span>
          </h2>
        </div>

        {/* Side-by-Side Panels - Enterprise card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
          {/* LEFT PANEL - Before */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
            <div className="px-5 py-3 border-b border-[#e2e8f0] flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#64748b]">
                Current Process
              </span>
              <span className="text-[10px] font-medium text-[#94a3b8]">Manual</span>
            </div>
            <div className="h-[340px]">
              <BeforeAnimation />
            </div>
          </div>

          {/* RIGHT PANEL - After */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
            <div className="px-5 py-3 border-b border-[#e2e8f0] flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#64748b]">
                With CoreShift
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-medium text-[#22c55e]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                Automated
              </span>
            </div>
            <div className="h-[340px]">
              <AfterAnimation />
            </div>
          </div>
        </div>

        {/* Agent Studio */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <p className="text-[11px] font-medium text-[#64748b] uppercase tracking-[3px]">
              See It In Action
            </p>
          </div>
          <AgentStudio />
        </div>

        {/* Comparison Cards */}
        <div className="mb-8">
          <h3 className="text-center text-[11px] font-medium text-[#64748b] uppercase tracking-[3px] mb-8">
            Why an agent, specifically?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {comparisonOptions.map((option) => (
              <div
                key={option.id}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:translate-y-[-2px] ${
                  option.featured
                    ? 'bg-[#0f172a] border-[#1e293b] shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)]'
                    : 'bg-white border-[#e5e7eb] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
                }`}
              >
                <div className="p-5 pb-4">
                  <h4 className={`font-space text-[18px] font-semibold mb-0.5 ${option.featured ? 'text-white' : 'text-[#1a1a1a]'}`}>
                    {option.title}
                  </h4>
                  <p className={`text-[11px] ${option.featured ? 'text-white/50' : 'text-[#94a3b8]'}`}>
                    {option.subtitle}
                  </p>
                </div>

                <div className={`px-5 pb-4 border-b ${option.featured ? 'border-white/10' : 'border-[#f1f5f9]'}`}>
                  <span className={`font-space text-[26px] font-bold ${option.featured ? 'text-[#4d65ff]' : 'text-[#1a1a1a]'}`}>
                    {option.cost}
                  </span>
                  <span className={`text-[11px] ml-1.5 ${option.featured ? 'text-white/40' : 'text-[#94a3b8]'}`}>
                    {option.costNote}
                  </span>
                </div>

                <div className="p-5 flex flex-col gap-3">
                  {option.points.map((point) => (
                    <div key={point.label} className="flex items-start gap-2.5">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        point.value === true ? 'bg-[#22c55e]/15' :
                        point.value === 'partial' ? (option.featured ? 'bg-white/5' : 'bg-[#f59e0b]/10') :
                        (option.featured ? 'bg-white/5' : 'bg-[#64748b]/10')
                      }`}>
                        {point.value === true ? (
                          <svg className="w-2.5 h-2.5 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : point.value === 'partial' ? (
                          <span className={`text-[9px] font-semibold ${option.featured ? 'text-white/30' : 'text-[#f59e0b]'}`}>~</span>
                        ) : (
                          <svg className={`w-2.5 h-2.5 ${option.featured ? 'text-white/30' : 'text-[#64748b]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className={`text-[12px] font-medium leading-tight ${option.featured ? 'text-white/80' : 'text-[#374151]'}`}>
                          {point.label}
                        </div>
                        <div className={`text-[10px] leading-tight mt-0.5 ${
                          point.value === true ? 'text-[#22c55e]' :
                          point.value === 'partial' ? (option.featured ? 'text-white/30' : 'text-[#f59e0b]') :
                          (option.featured ? 'text-white/30' : 'text-[#64748b]')
                        }`}>
                          {point.note}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
