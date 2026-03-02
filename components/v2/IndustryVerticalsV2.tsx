'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

function AutomotiveTerminalAnimation() {
  const [step, setStep] = useState(0)
  const [isResetting, setIsResetting] = useState(false)
  const [vehiclesScanned, setVehiclesScanned] = useState(0)
  const [typingText, setTypingText] = useState('')

  // The story: Connect GOV DB → Load Fleet → Scan Compliance → Flag Issues → Generate List
  const flaggedVehicle = {
    regNo: 'VH-4829-XM',
    type: 'Commercial',
    owner: 'Fleet Unit #12',
    issues: [
      { type: 'Insurance', status: 'Expired 3 days', severity: 'high' },
      { type: 'Fitness', status: 'Expires in 5 days', severity: 'medium' },
    ],
  }

  const complianceChecks = [
    { label: 'Insurance', passed: 10181, total: 10247 },
    { label: 'Fitness', passed: 10203, total: 10247 },
    { label: 'Fitness', passed: 10199, total: 10247 },
    { label: 'Challans', passed: 10241, total: 10247 },
  ]

  useEffect(() => {
    if (isResetting) return

    const timeline = [
      { time: 400, action: () => setStep(1) }, // Connecting to GOV DB
      { time: 1600, action: () => setStep(2) }, // Loading fleet
      { time: 3400, action: () => setStep(3) }, // Compliance scan
      { time: 5000, action: () => setStep(4) }, // Flagged vehicle
      { time: 6400, action: () => setStep(5) }, // Generating list
      { time: 7800, action: () => setStep(6) }, // Done
      { time: 9800, action: () => {
        setIsResetting(true)
        setTimeout(() => {
          setStep(0)
          setVehiclesScanned(0)
          setTypingText('')
          setIsResetting(false)
        }, 500)
      }},
    ]

    const timers = timeline.map(({ time, action }) => setTimeout(action, time))
    return () => timers.forEach(clearTimeout)
  }, [isResetting])

  // Vehicle counter animation
  useEffect(() => {
    if (step >= 2 && vehiclesScanned < 10247) {
      const interval = setInterval(() => {
        setVehiclesScanned(prev => Math.min(prev + 512, 10247))
      }, 50)
      return () => clearInterval(interval)
    }
  }, [step, vehiclesScanned])

  // Typing animation
  useEffect(() => {
    if (step >= 5) {
      const text = 'Generating call centre campaign list...'
      let i = 0
      const interval = setInterval(() => {
        if (i <= text.length) {
          setTypingText(text.slice(0, i))
          i++
        }
      }, 35)
      return () => clearInterval(interval)
    }
  }, [step])

  const stages = [
    { id: 'connect', label: 'GOV DATABASE', icon: '⚡' },
    { id: 'load', label: 'FLEET LOAD', icon: '↓' },
    { id: 'scan', label: 'COMPLIANCE SCAN', icon: '◎' },
    { id: 'action', label: 'CAMPAIGN LIST', icon: '→' },
  ]

  const getStageStatus = (index: number) => {
    if (index === 0 && step >= 2) return 'complete'
    if (index === 1 && step >= 3) return 'complete'
    if (index === 2 && step >= 5) return 'complete'
    if (index === 3 && step >= 6) return 'complete'
    if (index === 0 && step >= 1) return 'active'
    if (index === 1 && step >= 2) return 'active'
    if (index === 2 && step >= 3) return 'active'
    if (index === 3 && step >= 5) return 'active'
    return 'pending'
  }

  return (
    <div className={`absolute inset-0 flex flex-col md:flex-row transition-opacity duration-500 ${isResetting ? 'opacity-0' : 'opacity-100'}`} style={{ background: 'linear-gradient(165deg, #0f172a 0%, #1e293b 100%)' }}>
      {/* Left Panel - Pipeline Flow */}
      <div className="w-full md:w-[42%] p-3 md:p-4 border-b md:border-b-0 md:border-r border-white/10">
        <div className="text-[8px] md:text-[9px] font-mono text-[#64748b] uppercase tracking-wider mb-2 md:mb-4">Agent Pipeline</div>

        {/* Vertical Pipeline */}
        <div className="space-y-2 md:space-y-3">
          {stages.map((stage, i) => {
            const status = getStageStatus(i)
            return (
              <div key={stage.id} className="flex items-center gap-2 md:gap-3">
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded flex items-center justify-center transition-all duration-300 ${
                  status === 'complete' ? 'bg-[#4ade80]' :
                  status === 'active' ? 'bg-[#4d65ff]' : 'bg-[#334155]'
                }`}>
                  {status === 'complete' ? (
                    <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  ) : (
                    <span className={`text-[9px] md:text-[10px] ${status === 'active' ? 'text-white animate-pulse' : 'text-[#64748b]'}`}>
                      {stage.icon}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <div className={`text-[10px] font-mono font-medium transition-colors duration-300 ${
                    status === 'complete' ? 'text-[#4ade80]' :
                    status === 'active' ? 'text-white' : 'text-[#64748b]'
                  }`}>
                    {stage.label}
                  </div>
                </div>
                <div className={`text-[9px] font-mono ${
                  status === 'complete' ? 'text-[#4ade80]' :
                  status === 'active' ? 'text-[#fbbf24]' : 'text-[#475569]'
                }`}>
                  {status === 'complete' ? '✓' :
                   status === 'active' ? (i === 1 ? `${vehiclesScanned.toLocaleString()}` : 'processing') : '—'}
                </div>
              </div>
            )
          })}
        </div>

        {/* Compliance Summary */}
        <div className={`mt-4 pt-3 border-t border-[#334155] transition-all duration-500 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-[8px] font-mono text-[#64748b] mb-2">COMPLIANCE STATUS</div>
          <div className="space-y-1.5">
            {complianceChecks.map((check, i) => (
              <div key={check.label} className="flex items-center gap-2" style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="text-[8px] font-mono text-[#64748b] w-16">{check.label}</span>
                <div className="flex-1 h-1.5 bg-[#334155] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#4ade80] transition-all duration-700"
                    style={{ width: step >= 4 ? `${(check.passed / check.total) * 100}%` : '0%' }}
                  />
                </div>
                <span className={`text-[8px] font-mono ${step >= 4 ? 'text-[#4ade80]' : 'text-[#475569]'}`}>
                  {step >= 4 ? check.passed.toLocaleString() : '—'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action output */}
        <div className={`mt-3 pt-3 border-t border-[#334155] transition-all duration-500 ${step >= 5 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-[9px] font-mono text-[#60a5fa]">
            {typingText}
            {step >= 5 && typingText.length < 38 && <span className="inline-block w-1.5 h-3 bg-[#60a5fa] animate-pulse ml-0.5" />}
          </div>
          {step >= 6 && (
            <div className="mt-2 flex items-center gap-2 text-[9px] font-mono text-[#4ade80]">
              <span>✓</span>
              <span>66 vehicles in today&apos;s list</span>
            </div>
          )}
        </div>
      </div>

      {/* Right Panel - Flagged Vehicle */}
      <div className="flex-1 p-3 md:p-4 overflow-hidden">
        <div className="text-[8px] md:text-[9px] font-mono text-[#64748b] uppercase tracking-wider mb-2 md:mb-3">Flagged Vehicle</div>

        {/* Vehicle Card */}
        <div className={`bg-[#1e293b] rounded-lg border transition-all duration-500 ${
          step >= 4 ? 'border-[#f59e0b] shadow-[0_0_20px_rgba(245,158,11,0.15)]' : 'border-[#334155] opacity-30'
        }`}>
          {/* Header */}
          <div className="px-2 md:px-3 py-2 border-b border-[#334155] flex items-center justify-between">
            <div>
              <div className="text-[10px] md:text-[12px] font-bold font-mono text-white">{flaggedVehicle.regNo}</div>
              <div className="text-[8px] md:text-[9px] text-[#64748b]">{flaggedVehicle.type} · {flaggedVehicle.owner}</div>
            </div>
            {step >= 4 && (
              <div className="px-1.5 md:px-2 py-0.5 md:py-1 bg-[#f59e0b]/20 rounded text-[7px] md:text-[8px] font-bold text-[#f59e0b] animate-pulse">
                2 ISSUES
              </div>
            )}
          </div>

          {/* Issues */}
          <div className={`px-3 py-3 transition-all duration-500 ${step >= 4 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="space-y-2">
              {flaggedVehicle.issues.map((issue, i) => (
                <div
                  key={issue.type}
                  className={`flex items-center justify-between p-2 rounded transition-all duration-300 ${
                    issue.severity === 'high' ? 'bg-[#ef4444]/10 border border-[#ef4444]/30' : 'bg-[#f59e0b]/10 border border-[#f59e0b]/30'
                  }`}
                  style={{
                    opacity: step >= 4 ? 1 : 0,
                    transform: step >= 4 ? 'translateX(0)' : 'translateX(-8px)',
                    transitionDelay: `${i * 150}ms`
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${issue.severity === 'high' ? 'bg-[#ef4444]' : 'bg-[#f59e0b]'}`} />
                    <span className="text-[10px] font-mono text-white font-medium">{issue.type}</span>
                  </div>
                  <span className={`text-[9px] font-mono ${issue.severity === 'high' ? 'text-[#f87171]' : 'text-[#fbbf24]'}`}>
                    {issue.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className={`px-3 py-2 bg-[#0f172a] rounded-b-lg flex items-center justify-between transition-all duration-500 ${step >= 6 ? 'opacity-100' : 'opacity-50'}`}>
            <span className="text-[8px] font-mono text-[#64748b]">Action</span>
            <span className={`text-[9px] font-mono ${step >= 6 ? 'text-[#4ade80]' : 'text-[#475569]'}`}>
              {step >= 6 ? '→ Added to renewal call list' : 'Pending'}
            </span>
          </div>
        </div>

        {/* Summary Stats */}
        <div className={`mt-2 md:mt-3 grid grid-cols-3 gap-1 md:gap-2 transition-all duration-500 ${step >= 6 ? 'opacity-100' : 'opacity-0'}`}>
          {[
            { value: '10K+', label: 'Scanned', color: 'text-[#4ade80]' },
            { value: '66', label: 'Flagged', color: 'text-[#f59e0b]' },
            { value: '99%', label: 'OK', color: 'text-[#4ade80]' },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-1.5 md:py-2 bg-[#1e293b] rounded border border-[#334155]">
              <div className={`text-[11px] md:text-[14px] font-bold font-mono ${stat.color}`}>{stat.value}</div>
              <div className="text-[6px] md:text-[7px] text-[#64748b] uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SaaSDashboardAnimation() {
  const [step, setStep] = useState(0)
  const [isResetting, setIsResetting] = useState(false)
  const [typingText, setTypingText] = useState('')
  const [accountsScanned, setAccountsScanned] = useState(0)

  // The story: Agent syncs Salesforce → Scans accounts → Detects risk → Takes action
  const account = {
    name: 'Meridian Corp',
    arr: '$420K',
    renewal: '14 days',
    healthDrop: '72 → 48',
    signals: ['Usage ↓34%', 'Support tickets ×3', 'Champion left'],
  }

  useEffect(() => {
    if (isResetting) return

    const timeline = [
      { time: 400, action: () => setStep(1) }, // Connecting to Salesforce
      { time: 1400, action: () => setStep(2) }, // Scanning accounts
      { time: 3200, action: () => setStep(3) }, // Risk detected
      { time: 4400, action: () => setStep(4) }, // Analyzing signals
      { time: 5800, action: () => setStep(5) }, // Taking action
      { time: 7400, action: () => setStep(6) }, // Done
      { time: 9500, action: () => {
        setIsResetting(true)
        setTimeout(() => {
          setStep(0)
          setTypingText('')
          setAccountsScanned(0)
          setIsResetting(false)
        }, 500)
      }},
    ]

    const timers = timeline.map(({ time, action }) => setTimeout(action, time))
    return () => timers.forEach(clearTimeout)
  }, [isResetting])

  // Account counter animation
  useEffect(() => {
    if (step >= 2 && accountsScanned < 100) {
      const interval = setInterval(() => {
        setAccountsScanned(prev => Math.min(prev + 5, 100))
      }, 30)
      return () => clearInterval(interval)
    }
  }, [step, accountsScanned])

  // Typing animation for the final action
  useEffect(() => {
    if (step >= 5) {
      const text = 'Creating Slack alert for CS team...'
      let i = 0
      const interval = setInterval(() => {
        if (i <= text.length) {
          setTypingText(text.slice(0, i))
          i++
        }
      }, 40)
      return () => clearInterval(interval)
    }
  }, [step])

  const stages = [
    { id: 'sync', label: 'SALESFORCE SYNC', icon: '↻' },
    { id: 'scan', label: 'ACCOUNT SCAN', icon: '◎' },
    { id: 'detect', label: 'RISK DETECTION', icon: '⚠' },
    { id: 'action', label: 'AUTO-ACTION', icon: '→' },
  ]

  const getStageStatus = (index: number) => {
    if (step > index + 1) return 'complete'
    if (step === index + 1 || (index === 1 && step === 2)) return 'active'
    return 'pending'
  }

  return (
    <div className={`absolute inset-0 flex flex-col md:flex-row transition-opacity duration-500 ${isResetting ? 'opacity-0' : 'opacity-100'}`} style={{ background: 'linear-gradient(165deg, #0f172a 0%, #1e293b 100%)' }}>
      {/* Left Panel - Pipeline Flow */}
      <div className="w-full md:w-[45%] p-3 md:p-4 border-b md:border-b-0 md:border-r border-white/10">
        <div className="text-[8px] md:text-[9px] font-mono text-[#64748b] uppercase tracking-wider mb-2 md:mb-4">Agent Pipeline</div>

        {/* Vertical Pipeline */}
        <div className="space-y-2 md:space-y-3">
          {stages.map((stage, i) => {
            const status = getStageStatus(i)
            return (
              <div key={stage.id} className="flex items-center gap-2 md:gap-3">
                {/* Status indicator */}
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded flex items-center justify-center transition-all duration-300 ${
                  status === 'complete' ? 'bg-[#4ade80]' :
                  status === 'active' ? 'bg-[#4d65ff]' : 'bg-[#334155]'
                }`}>
                  {status === 'complete' ? (
                    <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  ) : (
                    <span className={`text-[9px] md:text-[10px] ${status === 'active' ? 'text-white animate-pulse' : 'text-[#64748b]'}`}>
                      {stage.icon}
                    </span>
                  )}
                </div>

                {/* Stage info */}
                <div className="flex-1">
                  <div className={`text-[9px] md:text-[10px] font-mono font-medium transition-colors duration-300 ${
                    status === 'complete' ? 'text-[#4ade80]' :
                    status === 'active' ? 'text-white' : 'text-[#64748b]'
                  }`}>
                    {stage.label}
                  </div>
                </div>

                {/* Status text */}
                <div className={`text-[8px] md:text-[9px] font-mono ${
                  status === 'complete' ? 'text-[#4ade80]' :
                  status === 'active' ? 'text-[#94a3b8]' : 'text-[#475569]'
                }`}>
                  {status === 'complete' ? '✓' : status === 'active' ? (i === 1 ? `${accountsScanned}/100` : '...') : '—'}
                </div>
              </div>
            )
          })}
        </div>

        {/* Action output */}
        <div className={`mt-3 md:mt-4 pt-2 md:pt-3 border-t border-[#334155] transition-all duration-500 ${step >= 5 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-[8px] md:text-[9px] font-mono text-[#60a5fa]">
            {typingText}
            {step >= 5 && typingText.length < 35 && <span className="inline-block w-1 h-2.5 md:w-1.5 md:h-3 bg-[#60a5fa] animate-pulse ml-0.5" />}
          </div>
          {step >= 6 && (
            <div className="mt-1.5 md:mt-2 flex items-center gap-2 text-[8px] md:text-[9px] font-mono text-[#4ade80]">
              <span>✓</span>
              <span>Alert sent to #cs-alerts</span>
            </div>
          )}
        </div>
      </div>

      {/* Right Panel - Account Card */}
      <div className="flex-1 p-3 md:p-4 overflow-hidden">
        <div className="text-[8px] md:text-[9px] font-mono text-[#64748b] uppercase tracking-wider mb-2 md:mb-3">Flagged Account</div>

        {/* Account Card */}
        <div className={`bg-[#1e293b] rounded-lg border transition-all duration-500 ${
          step >= 3 ? 'border-[#f59e0b] shadow-[0_0_20px_rgba(245,158,11,0.15)]' : 'border-[#334155] opacity-30'
        }`}>
          {/* Header */}
          <div className="px-3 py-2.5 border-b border-[#334155] flex items-center justify-between">
            <div>
              <div className="text-[11px] font-semibold text-white">{account.name}</div>
              <div className="text-[9px] text-[#64748b]">{account.arr} ARR · Renewal in {account.renewal}</div>
            </div>
            {step >= 3 && (
              <div className="px-2 py-1 bg-[#f59e0b]/20 rounded text-[8px] font-bold text-[#f59e0b] animate-pulse">
                AT RISK
              </div>
            )}
          </div>

          {/* Health Score */}
          <div className="px-3 py-2 border-b border-[#334155]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[8px] font-mono text-[#64748b]">HEALTH SCORE</span>
              {step >= 3 && (
                <span className="text-[9px] font-mono text-[#ef4444]">↓ 24pts</span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-[#334155] rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${step >= 3 ? 'bg-[#f59e0b]' : 'bg-[#4ade80]'}`}
                  style={{ width: step >= 3 ? '48%' : '72%' }}
                />
              </div>
              <span className={`text-[12px] font-bold font-mono ${step >= 3 ? 'text-[#f59e0b]' : 'text-[#4ade80]'}`}>
                {step >= 3 ? '48' : '72'}
              </span>
            </div>
          </div>

          {/* Risk Signals */}
          <div className={`px-3 py-2 transition-all duration-500 ${step >= 4 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-[8px] font-mono text-[#64748b] mb-2">DETECTED SIGNALS</div>
            <div className="space-y-1.5">
              {account.signals.map((signal, i) => (
                <div
                  key={signal}
                  className="flex items-center gap-2 transition-all duration-300"
                  style={{
                    opacity: step >= 4 ? 1 : 0,
                    transform: step >= 4 ? 'translateX(0)' : 'translateX(-8px)',
                    transitionDelay: `${i * 150}ms`
                  }}
                >
                  <span className="w-1 h-1 rounded-full bg-[#ef4444]" />
                  <span className="text-[9px] font-mono text-[#f87171]">{signal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className={`mt-3 grid grid-cols-3 gap-2 transition-all duration-500 ${step >= 6 ? 'opacity-100' : 'opacity-0'}`}>
          {[
            { value: '97', label: 'Healthy', color: 'text-[#4ade80]' },
            { value: '3', label: 'At Risk', color: 'text-[#f59e0b]' },
            { value: '$40M', label: 'ARR', color: 'text-white' },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-2 bg-[#1e293b] rounded border border-[#334155]">
              <div className={`text-[14px] font-bold font-mono ${stat.color}`}>{stat.value}</div>
              <div className="text-[7px] text-[#64748b] uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VCPEDashboardAnimation() {
  const [phase, setPhase] = useState(0)
  const [visibleRows, setVisibleRows] = useState(0)
  const [isResetting, setIsResetting] = useState(false)

  const investors = [
    { name: 'Horizon Partners', type: 'LP', committed: '₹24.5 Cr', called: '68%', irr: '18.2%' },
    { name: 'Meridian Family Office', type: 'LP', committed: '₹18.0 Cr', called: '68%', irr: '17.8%' },
    { name: 'Coastal Ventures', type: 'LP', committed: '₹15.2 Cr', called: '68%', irr: '19.1%' },
    { name: 'Summit Capital', type: 'GP', committed: '₹12.0 Cr', called: '68%', irr: '18.4%' },
  ]

  const allocationData = [
    { label: 'Series A', value: 42, color: '#4d65ff' },
    { label: 'Series B', value: 31, color: '#22c55e' },
    { label: 'Bridge', value: 18, color: '#f59e0b' },
    { label: 'Reserve', value: 9, color: '#64748b' },
  ]

  useEffect(() => {
    if (isResetting) return

    const timeline = [
      { time: 500, action: () => setPhase(1) },
      { time: 1200, action: () => setVisibleRows(1) },
      { time: 1600, action: () => setVisibleRows(2) },
      { time: 2000, action: () => setVisibleRows(3) },
      { time: 2400, action: () => setVisibleRows(4) },
      { time: 3000, action: () => setPhase(2) },
      { time: 8500, action: () => {
        setIsResetting(true)
        setTimeout(() => {
          setPhase(0)
          setVisibleRows(0)
          setIsResetting(false)
        }, 500)
      }},
    ]

    const timers = timeline.map(({ time, action }) => setTimeout(action, time))
    return () => timers.forEach(clearTimeout)
  }, [isResetting])

  return (
    <div className={`absolute inset-0 flex transition-opacity duration-500 ${isResetting ? 'opacity-0' : 'opacity-100'}`} style={{ background: '#0F172A' }}>
      {/* Left Sidebar - Hidden on mobile */}
      <div className="hidden md:flex w-[140px] border-r border-[#1e293b] p-3 flex-col">
        {/* Logo area */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1e293b]">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-[#4d65ff] to-[#7c3aed] flex items-center justify-center">
            <span className="text-[10px] font-bold text-white">FO</span>
          </div>
          <div>
            <div className="text-[9px] font-medium text-white">Fund Ops</div>
            <div className="text-[7px] text-[#64748b]">Agent v2.1</div>
          </div>
        </div>

        {/* Nav items */}
        <div className="space-y-1">
          {['Dashboard', 'Investors', 'Reports', 'Capital Calls'].map((item, i) => (
            <div key={item} className={`px-2 py-1.5 rounded text-[8px] font-medium ${i === 0 ? 'bg-[#1e293b] text-white' : 'text-[#64748b] hover:text-white'}`}>
              {item}
            </div>
          ))}
        </div>

        {/* Sync status */}
        <div className="mt-auto pt-3 border-t border-[#1e293b]">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-[7px] text-[#64748b]">Tally synced 2m ago</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-3 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-[11px] font-semibold text-white">Fund I — Capital Accounts</div>
            <div className="text-[8px] text-[#64748b]">Q3 2024 · 117 LPs · ₹277 Cr AUM</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 bg-[#22c55e]/10 rounded text-[7px] font-medium text-[#22c55e]">
              SEBI AIF Cat II ✓
            </div>
            {phase >= 2 && (
              <div className="flex items-center gap-1 px-2 py-1 bg-[#1e293b] rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-[7px] font-medium text-[#22c55e]">LIVE</span>
              </div>
            )}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
          {[
            { label: 'Total Committed', value: '₹277 Cr', sub: '46% of target' },
            { label: 'Capital Called', value: '₹188 Cr', sub: '68% deployed' },
            { label: 'Distributions', value: '₹42.3 Cr', sub: 'Q3 2024' },
            { label: 'Net IRR', value: '18.4%', sub: '97.3% accuracy', highlight: true },
          ].map((stat, i) => (
            <div key={stat.label} className={`p-2 rounded border transition-all duration-500 ${phase >= 1 ? 'bg-[#1e293b] border-[#334155]' : 'bg-[#0F172A] border-[#1e293b]'}`}>
              <div className="text-[7px] text-[#64748b] uppercase tracking-wider">{stat.label}</div>
              <div className={`text-[13px] font-semibold mt-0.5 ${stat.highlight ? 'text-[#22c55e]' : 'text-white'}`}>{phase >= 1 ? stat.value : '—'}</div>
              <div className="text-[7px] text-[#475569]">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_120px] gap-3 h-auto md:h-[140px]">
          {/* Investor Table */}
          <div className="bg-[#1e293b] rounded border border-[#334155] overflow-hidden">
            <div className="px-2 py-1.5 border-b border-[#334155] flex items-center justify-between">
              <span className="text-[8px] font-medium text-[#94a3b8]">Top LPs by Commitment</span>
              <span className="text-[7px] text-[#64748b]">4 of 117</span>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-[1fr_50px_50px] md:grid-cols-[1fr_40px_55px_40px_40px] gap-1 px-2 py-1 text-[7px] text-[#64748b] border-b border-[#334155]/50">
              <span>Investor</span>
              <span className="hidden md:block">Type</span>
              <span>Committed</span>
              <span className="hidden md:block">Called</span>
              <span>IRR</span>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#334155]/30">
              {investors.map((inv, i) => (
                <div
                  key={inv.name}
                  className={`grid grid-cols-[1fr_50px_50px] md:grid-cols-[1fr_40px_55px_40px_40px] gap-1 px-2 py-1.5 text-[8px] transition-all duration-300 ${
                    visibleRows > i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`}
                >
                  <span className="text-white font-medium truncate">{inv.name}</span>
                  <span className={`hidden md:block ${inv.type === 'GP' ? 'text-[#f59e0b]' : 'text-[#64748b]'}`}>{inv.type}</span>
                  <span className="text-[#94a3b8]">{inv.committed}</span>
                  <span className="hidden md:block text-[#94a3b8]">{inv.called}</span>
                  <span className="text-[#22c55e]">{inv.irr}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Allocation Donut */}
          <div className="bg-[#1e293b] rounded border border-[#334155] p-2">
            <div className="text-[8px] font-medium text-[#94a3b8] mb-2">Allocation</div>

            {/* Simple donut representation */}
            <div className="relative w-16 h-16 mx-auto mb-2">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                {allocationData.map((segment, i) => {
                  const offset = allocationData.slice(0, i).reduce((sum, s) => sum + s.value, 0)
                  return (
                    <circle
                      key={segment.label}
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke={phase >= 2 ? segment.color : '#334155'}
                      strokeWidth="4"
                      strokeDasharray={`${segment.value} ${100 - segment.value}`}
                      strokeDashoffset={-offset}
                      className="transition-all duration-1000"
                    />
                  )
                })}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">100%</span>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-1">
              {allocationData.map((item) => (
                <div key={item.label} className="flex items-center justify-between text-[7px]">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                    <span className="text-[#94a3b8]">{item.label}</span>
                  </div>
                  <span className="text-white">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FinanceFlowAnimation() {
  const [step, setStep] = useState(0)
  const [isResetting, setIsResetting] = useState(false)

  const invoiceData = {
    vendor: 'Printforce UK Ltd',
    invoiceNo: 'INV-2024-0847',
    amount: '£12,450.00',
    poRef: 'PO-2024-1123',
    bacsRef: 'BACS-9921',
  }

  const stages = [
    { id: 'scan', label: 'SCANNING', status: 'Inbox monitored' },
    { id: 'extract', label: 'EXTRACTING', status: '12 fields' },
    { id: 'match', label: 'MATCHING', status: 'PO lookup' },
    { id: 'post', label: 'POSTING', status: 'NetSuite API' },
    { id: 'reconcile', label: 'RECONCILED', status: 'BACS matched' },
  ]

  useEffect(() => {
    if (isResetting) return

    const interval = setInterval(() => {
      setStep(prev => {
        if (prev >= 6) {
          setIsResetting(true)
          setTimeout(() => {
            setStep(0)
            setIsResetting(false)
          }, 1500)
          return prev
        }
        return prev + 1
      })
    }, 1400)

    return () => clearInterval(interval)
  }, [isResetting])

  return (
    <div className="absolute inset-0 flex flex-col md:flex-row" style={{ background: 'linear-gradient(165deg, #0f172a 0%, #1e293b 100%)' }}>
      {/* Left Panel - Invoice Preview */}
      <div className={`w-full md:w-[45%] p-3 md:p-4 border-b md:border-b-0 md:border-r border-white/10 transition-opacity duration-500 ${isResetting ? 'opacity-0' : 'opacity-100'}`}>
        <div className="text-[8px] md:text-[9px] font-mono text-[#64748b] uppercase tracking-wider mb-2 md:mb-3">Invoice Preview</div>

        {/* Mini Invoice Card */}
        <div className={`bg-[#1e293b] rounded-lg border border-[#334155] p-3 transition-all duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-30'}`}>
          {/* Invoice Header */}
          <div className="flex justify-between items-start mb-3 pb-2 border-b border-[#334155]">
            <div>
              <div className="text-[10px] font-mono text-white font-medium">{invoiceData.vendor}</div>
              <div className="text-[9px] font-mono text-[#64748b]">{invoiceData.invoiceNo}</div>
            </div>
            <div className="text-right">
              <div className={`text-[12px] font-mono font-bold transition-colors duration-300 ${step >= 2 ? 'text-[#4ade80]' : 'text-white'}`}>
                {invoiceData.amount}
              </div>
            </div>
          </div>

          {/* Extracted Fields */}
          <div className="space-y-1.5">
            <div className="flex justify-between">
              <span className="text-[8px] font-mono text-[#64748b]">PO Reference</span>
              <span className={`text-[9px] font-mono transition-all duration-300 ${step >= 3 ? 'text-[#4ade80]' : 'text-[#94a3b8]'}`}>
                {step >= 3 ? `${invoiceData.poRef} ✓` : invoiceData.poRef}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[8px] font-mono text-[#64748b]">Bank Ref</span>
              <span className={`text-[9px] font-mono transition-all duration-300 ${step >= 5 ? 'text-[#4ade80]' : 'text-[#94a3b8]'}`}>
                {step >= 5 ? `${invoiceData.bacsRef} ✓` : invoiceData.bacsRef}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[8px] font-mono text-[#64748b]">NetSuite</span>
              <span className={`text-[9px] font-mono transition-all duration-300 ${step >= 4 ? 'text-[#4ade80]' : 'text-[#64748b]'}`}>
                {step >= 4 ? 'Posted ✓' : 'Pending'}
              </span>
            </div>
          </div>
        </div>

        {/* Queue indicator */}
        <div className="mt-3 flex items-center gap-2">
          <div className="text-[8px] font-mono text-[#64748b]">Queue:</div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i === 0 && step >= 1 ? 'bg-[#4ade80]' : 'bg-[#334155]'}`} />
            ))}
          </div>
          <div className="text-[8px] font-mono text-[#64748b]">+13 more</div>
        </div>
      </div>

      {/* Right Panel - Processing Pipeline */}
      <div className={`flex-1 p-3 md:p-4 transition-opacity duration-500 ${isResetting ? 'opacity-0' : 'opacity-100'}`}>
        <div className="text-[8px] md:text-[9px] font-mono text-[#64748b] uppercase tracking-wider mb-2 md:mb-3">Processing Pipeline</div>

        {/* Vertical Pipeline */}
        <div className="space-y-2">
          {stages.map((stage, i) => {
            const isActive = step > i
            const isCurrent = step === i + 1

            return (
              <div key={stage.id} className="flex items-center gap-3">
                {/* Status indicator */}
                <div className={`w-5 h-5 rounded flex items-center justify-center transition-all duration-300 ${
                  isActive ? 'bg-[#4ade80]' : isCurrent ? 'bg-[#4d65ff]' : 'bg-[#334155]'
                }`}>
                  {isActive ? (
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  ) : isCurrent ? (
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#64748b]" />
                  )}
                </div>

                {/* Stage info */}
                <div className="flex-1">
                  <div className={`text-[9px] font-mono font-medium transition-colors duration-300 ${
                    isActive ? 'text-[#4ade80]' : isCurrent ? 'text-white' : 'text-[#64748b]'
                  }`}>
                    {stage.label}
                  </div>
                </div>

                {/* Status text */}
                <div className={`text-[8px] font-mono transition-all duration-300 ${
                  isActive ? 'text-[#4ade80]' : isCurrent ? 'text-[#94a3b8]' : 'text-[#475569]'
                }`}>
                  {isActive ? '✓' : isCurrent ? stage.status : '—'}
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary Stats */}
        <div className={`mt-4 pt-3 border-t border-[#334155] transition-all duration-500 ${step >= 6 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center">
              <div className="text-[14px] font-mono font-bold text-[#4ade80]">94%</div>
              <div className="text-[7px] font-mono text-[#64748b]">AUTO-MATCH</div>
            </div>
            <div className="text-center">
              <div className="text-[14px] font-mono font-bold text-white">14</div>
              <div className="text-[7px] font-mono text-[#64748b]">PROCESSED</div>
            </div>
            <div className="text-center">
              <div className="text-[14px] font-mono font-bold text-[#4ade80]">0</div>
              <div className="text-[7px] font-mono text-[#64748b]">EXCEPTIONS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function GRNTerminalAnimation() {
  const [step, setStep] = useState(0)
  const [isResetting, setIsResetting] = useState(false)
  const [portalsConnected, setPortalsConnected] = useState(0)
  const [recordsExtracted, setRecordsExtracted] = useState(0)
  const [typingText, setTypingText] = useState('')

  // The story: Connect portals → Extract GRNs → Validate SAP → Update VBRK
  const grnRecord = {
    vendor: 'Tata AutoComp',
    grnNo: 'GRN-2024-08471',
    poRef: 'PO-4500012847',
    material: 'Brake Assembly Kit',
    qty: '240 units',
    plant: 'Plant 1100',
    amount: '₹18,42,000',
  }

  const sapRules = [
    { rule: 'Material exists in MM60', status: 'pass' },
    { rule: 'PO quantity matches', status: 'pass' },
    { rule: 'Vendor code active', status: 'pass' },
    { rule: 'Plant assignment valid', status: 'pass' },
  ]

  useEffect(() => {
    if (isResetting) return

    const timeline = [
      { time: 400, action: () => setStep(1) }, // Connecting to portals
      { time: 2000, action: () => setStep(2) }, // Extracting GRNs
      { time: 3600, action: () => setStep(3) }, // SAP Validation
      { time: 5200, action: () => setStep(4) }, // Updating VBRK
      { time: 6800, action: () => setStep(5) }, // Done
      { time: 9000, action: () => {
        setIsResetting(true)
        setTimeout(() => {
          setStep(0)
          setPortalsConnected(0)
          setRecordsExtracted(0)
          setTypingText('')
          setIsResetting(false)
        }, 500)
      }},
    ]

    const timers = timeline.map(({ time, action }) => setTimeout(action, time))
    return () => timers.forEach(clearTimeout)
  }, [isResetting])

  // Portal counter animation
  useEffect(() => {
    if (step >= 1 && portalsConnected < 19) {
      const interval = setInterval(() => {
        setPortalsConnected(prev => Math.min(prev + 1, 19))
      }, 80)
      return () => clearInterval(interval)
    }
  }, [step, portalsConnected])

  // Records counter animation
  useEffect(() => {
    if (step >= 2 && recordsExtracted < 81) {
      const interval = setInterval(() => {
        setRecordsExtracted(prev => Math.min(prev + 4, 81))
      }, 40)
      return () => clearInterval(interval)
    }
  }, [step, recordsExtracted])

  // Typing animation for VBRK update
  useEffect(() => {
    if (step >= 4) {
      const text = 'Posting to VBRK billing document...'
      let i = 0
      const interval = setInterval(() => {
        if (i <= text.length) {
          setTypingText(text.slice(0, i))
          i++
        }
      }, 35)
      return () => clearInterval(interval)
    }
  }, [step])

  const stages = [
    { id: 'connect', label: 'PORTAL AUTH', icon: '⚡' },
    { id: 'extract', label: 'GRN EXTRACT', icon: '↓' },
    { id: 'validate', label: 'SAP VALIDATION', icon: '◎' },
    { id: 'post', label: 'VBRK UPDATE', icon: '→' },
  ]

  const getStageStatus = (index: number) => {
    if (step > index + 1) return 'complete'
    if (step === index + 1) return 'active'
    return 'pending'
  }

  return (
    <div className={`absolute inset-0 flex flex-col md:flex-row transition-opacity duration-500 ${isResetting ? 'opacity-0' : 'opacity-100'}`} style={{ background: 'linear-gradient(165deg, #0f172a 0%, #1e293b 100%)' }}>
      {/* Left Panel - Pipeline Flow */}
      <div className="w-full md:w-[42%] p-3 md:p-4 border-b md:border-b-0 md:border-r border-white/10">
        <div className="text-[8px] md:text-[9px] font-mono text-[#64748b] uppercase tracking-wider mb-2 md:mb-4">Agent Pipeline</div>

        {/* Vertical Pipeline */}
        <div className="space-y-2 md:space-y-3">
          {stages.map((stage, i) => {
            const status = getStageStatus(i)
            return (
              <div key={stage.id} className="flex items-center gap-2 md:gap-3">
                {/* Status indicator */}
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded flex items-center justify-center transition-all duration-300 ${
                  status === 'complete' ? 'bg-[#4ade80]' :
                  status === 'active' ? 'bg-[#4d65ff]' : 'bg-[#334155]'
                }`}>
                  {status === 'complete' ? (
                    <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  ) : (
                    <span className={`text-[9px] md:text-[10px] ${status === 'active' ? 'text-white animate-pulse' : 'text-[#64748b]'}`}>
                      {stage.icon}
                    </span>
                  )}
                </div>

                {/* Stage info */}
                <div className="flex-1">
                  <div className={`text-[9px] md:text-[10px] font-mono font-medium transition-colors duration-300 ${
                    status === 'complete' ? 'text-[#4ade80]' :
                    status === 'active' ? 'text-white' : 'text-[#64748b]'
                  }`}>
                    {stage.label}
                  </div>
                </div>

                {/* Status text */}
                <div className={`text-[8px] md:text-[9px] font-mono ${
                  status === 'complete' ? 'text-[#4ade80]' :
                  status === 'active' ? 'text-[#fbbf24]' : 'text-[#475569]'
                }`}>
                  {status === 'complete' ? '✓' :
                   status === 'active' ? (i === 0 ? `${portalsConnected}/19` : i === 1 ? `${recordsExtracted}/81` : '...') : '—'}
                </div>
              </div>
            )
          })}
        </div>

        {/* Action output */}
        <div className={`mt-3 md:mt-4 pt-2 md:pt-3 border-t border-[#334155] transition-all duration-500 ${step >= 4 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-[8px] md:text-[9px] font-mono text-[#60a5fa]">
            {typingText}
            {step >= 4 && typingText.length < 34 && <span className="inline-block w-1 h-2.5 md:w-1.5 md:h-3 bg-[#60a5fa] animate-pulse ml-0.5" />}
          </div>
          {step >= 5 && (
            <div className="mt-2 flex items-center gap-2 text-[9px] font-mono text-[#4ade80]">
              <span>✓</span>
              <span>81 docs posted to SAP</span>
            </div>
          )}
        </div>
      </div>

      {/* Right Panel - GRN Record */}
      <div className="flex-1 p-4">
        <div className="text-[9px] font-mono text-[#64748b] uppercase tracking-wider mb-3">Sample GRN Record</div>

        {/* GRN Card */}
        <div className={`bg-[#1e293b] rounded-lg border transition-all duration-500 ${
          step >= 2 ? 'border-[#4ade80] shadow-[0_0_20px_rgba(74,222,128,0.1)]' : 'border-[#334155] opacity-30'
        }`}>
          {/* Header */}
          <div className="px-3 py-2 border-b border-[#334155] flex items-center justify-between">
            <div>
              <div className="text-[11px] font-semibold text-white">{grnRecord.vendor}</div>
              <div className="text-[9px] text-[#64748b]">{grnRecord.grnNo}</div>
            </div>
            {step >= 2 && (
              <div className="px-2 py-1 bg-[#4ade80]/20 rounded text-[8px] font-bold text-[#4ade80]">
                EXTRACTED
              </div>
            )}
          </div>

          {/* GRN Details */}
          <div className="px-3 py-2 border-b border-[#334155] grid grid-cols-2 gap-2">
            {[
              { label: 'PO Ref', value: grnRecord.poRef },
              { label: 'Material', value: grnRecord.material },
              { label: 'Quantity', value: grnRecord.qty },
              { label: 'Plant', value: grnRecord.plant },
            ].map((field) => (
              <div key={field.label}>
                <div className="text-[7px] font-mono text-[#64748b]">{field.label}</div>
                <div className={`text-[9px] font-mono transition-all duration-300 ${step >= 2 ? 'text-white' : 'text-[#475569]'}`}>
                  {step >= 2 ? field.value : '—'}
                </div>
              </div>
            ))}
          </div>

          {/* SAP Validation Rules */}
          <div className={`px-3 py-2 transition-all duration-500 ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-[8px] font-mono text-[#64748b] mb-1.5">SAP VALIDATION</div>
            <div className="space-y-1">
              {sapRules.map((rule, i) => (
                <div
                  key={rule.rule}
                  className="flex items-center gap-2 transition-all duration-300"
                  style={{
                    opacity: step >= 3 ? 1 : 0,
                    transform: step >= 3 ? 'translateX(0)' : 'translateX(-8px)',
                    transitionDelay: `${i * 100}ms`
                  }}
                >
                  <span className="text-[#4ade80] text-[8px]">✓</span>
                  <span className="text-[8px] font-mono text-[#94a3b8]">{rule.rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amount */}
          <div className={`px-3 py-2 bg-[#0f172a] rounded-b-lg flex items-center justify-between transition-all duration-500 ${step >= 5 ? 'opacity-100' : 'opacity-50'}`}>
            <span className="text-[8px] font-mono text-[#64748b]">VBRK Amount</span>
            <span className={`text-[12px] font-bold font-mono ${step >= 5 ? 'text-[#4ade80]' : 'text-white'}`}>
              {grnRecord.amount} {step >= 5 && '✓'}
            </span>
          </div>
        </div>

        {/* Summary Stats */}
        <div className={`mt-3 grid grid-cols-3 gap-2 transition-all duration-500 ${step >= 5 ? 'opacity-100' : 'opacity-0'}`}>
          {[
            { value: '19', label: 'Portals', color: 'text-[#4ade80]' },
            { value: '81', label: 'GRNs', color: 'text-[#fbbf24]' },
            { value: '100%', label: 'Validated', color: 'text-[#4ade80]' },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-2 bg-[#1e293b] rounded border border-[#334155]">
              <div className={`text-[14px] font-bold font-mono ${stat.color}`}>{stat.value}</div>
              <div className="text-[7px] text-[#64748b] uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const industries = [
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'finance', label: 'Finance Ops' },
  { id: 'vcpe', label: 'VC & PE' },
  { id: 'saas', label: 'B2B SaaS' },
  { id: 'automotive', label: 'Automotive' },
]

const industryData: Record<string, {
  agentName: string
  badge: 'live' | 'poc'
  gradient: string
  useCases: string[]
  outcome: string
  context: string
  stats: { value: string; label: string }[]
}> = {
  manufacturing: {
    agentName: 'GRN Reconciliation Agent',
    badge: 'live',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    useCases: [
      'Logs into 19+ OEM vendor portals daily, extracts GRN data automatically',
      'Extracts GRN data, validates against 14 SAP business rules',
      'Updates VBRK billing documents with zero human intervention',
    ],
    outcome: 'Revenue recognition delays eliminated. GRN updates complete before the finance team arrives each morning.',
    context: 'Tier-1 auto-parts manufacturer · SAP ECC environment',
    stats: [
      { value: '19+', label: 'Vendor portals' },
      { value: '154', label: 'Extraction runs' },
      { value: '~100%', label: 'Automation rate' },
    ],
  },
  finance: {
    agentName: 'AP/AR Automation Agent',
    badge: 'poc',
    gradient: 'linear-gradient(135deg, #3d2314 0%, #5c3a28 50%, #7a4f3c 100%)',
    useCases: [
      'Reads vendor emails, extracts 12 fields from invoice PDFs',
      'Matches to POs and posts vendor bills to NetSuite automatically',
      'Applies BACS/SWIFT bank payments to open invoices — 94% auto-match',
    ],
    outcome: 'Invoices arriving by email flow directly to NetSuite without manual intervention. 94% of payments auto-matched.',
    context: 'Target: Global B2B enterprises · NetSuite + bank integrations',
    stats: [
      { value: '94%', label: 'Auto-match rate' },
      { value: '8 min', label: 'Saved per txn' },
      { value: '40–80 hrs', label: 'Monthly saved' },
    ],
  },
  vcpe: {
    agentName: 'Fund Operations Agent',
    badge: 'live',
    gradient: 'linear-gradient(135deg, #2c1810 0%, #4a2c2a 50%, #5d3a38 100%)',
    useCases: [
      'Ingests Tally Prime exports, calculates 3 allocation ratio types',
      'Generates 6 compliance-ready reports: CAS, IRR, Management Fees, Expenses',
      'Handles 117 investors across 2 funds with 97.3% accuracy vs Power BI',
    ],
    outcome: 'Capital Account Statements that took a weekend now run in minutes. Audit-ready reconciliation built in.',
    context: 'AIF Category II VC fund · ₹277 Cr AUM',
    stats: [
      { value: '117', label: 'Investors managed' },
      { value: '₹277 Cr', label: 'AUM' },
      { value: '97.3%', label: 'Accuracy' },
    ],
  },
  saas: {
    agentName: 'CS Command Center Agent',
    badge: 'live',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 50%, #3d3d5c 100%)',
    useCases: [
      'Syncs from Salesforce every 6 hours via SOQL, tracks 100+ accounts',
      'Classifies 15 pipeline stages into churn risk buckets (S12–S14 = at risk)',
      'Calculates NRR, surfaces at-risk accounts before revenue is lost',
    ],
    outcome: 'Single source of truth for pipeline health. Leadership no longer questions data accuracy.',
    context: 'B2B SaaS · 100+ enterprise accounts · Salesforce integration',
    stats: [
      { value: '$40M', label: 'ARR monitored' },
      { value: '100+', label: 'Accounts tracked' },
      { value: '4–6 hrs', label: 'Weekly saved' },
    ],
  },
  automotive: {
    agentName: 'Vehicle Compliance Agent',
    badge: 'live',
    gradient: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #2b3a4d 100%)',
    useCases: [
      'Validates 10,000+ vehicles against government databases daily',
      'Auto-flags compliance issues: insurance, fitness, challans, hypothecation, blacklist',
      'Generates daily prioritised call centre campaign list for renewals',
    ],
    outcome: 'Proactive renewal outreach fully automated. Call centre works from daily agent-generated campaign lists.',
    context: 'Automotive service network · Fleet compliance management',
    stats: [
      { value: '10K+', label: 'Vehicles validated' },
      { value: '~95%', label: 'Automation rate' },
      { value: '60+', label: 'Fields per vehicle' },
    ],
  },
}

export function IndustryVerticalsV2() {
  const [activeTab, setActiveTab] = useState('manufacturing')
  const data = industryData[activeTab]

  return (
    <section id="agents" className="relative py-24 px-8 overflow-hidden">
      {/* Blue gradient background */}
      <div className="absolute inset-0 z-0 bg-[#f5f7fa]" />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 200% 100% at 50% 0%, rgba(200, 210, 240, 0.6) 0%, transparent 60%),
            radial-gradient(ellipse 150% 80% at 50% 5%, rgba(180, 195, 235, 0.5) 0%, transparent 50%),
            radial-gradient(ellipse 100% 50% at 50% 10%, rgba(160, 180, 230, 0.4) 0%, transparent 40%)
          `
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-medium text-[#888] uppercase tracking-[3px] mb-4">
            Industry Solutions
          </p>
          <h2 className="font-space text-[42px] font-medium text-[#1a1a1a] tracking-[-0.02em] leading-[1.2] mb-4">
            Every agent is built for how your<br />industry actually operates.
          </h2>
          <p className="text-[15px] text-[#666] leading-[1.7] max-w-[560px] mx-auto">
            We don't sell generic AI. We build agents that know your SAP transaction codes, your vendor portal quirks, and your compliance requirements.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-start md:justify-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-lg font-space text-[12px] font-semibold tracking-[0.5px] transition-all duration-300 whitespace-nowrap ${
                activeTab === industry.id
                  ? 'bg-[#1a1a1a] text-white shadow-lg'
                  : 'bg-white/70 backdrop-blur-sm text-[#666] border border-[#e0e0e0] hover:border-[#1a1a1a] hover:bg-white'
              }`}
            >
              {industry.label}
            </button>
          ))}
        </div>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr]">
            {/* Left: Animation Zone */}
            <div
              className="h-[280px] md:h-[320px] relative overflow-hidden transition-all duration-500"
              style={{ background: 'linear-gradient(165deg, #0f172a 0%, #1e293b 100%)' }}
            >
              {/* Terminal Animations */}
              {activeTab === 'manufacturing' && <GRNTerminalAnimation />}
              {activeTab === 'finance' && <FinanceFlowAnimation />}
              {activeTab === 'vcpe' && <VCPEDashboardAnimation />}
              {activeTab === 'saas' && <SaaSDashboardAnimation />}
              {activeTab === 'automotive' && <AutomotiveTerminalAnimation />}

              {/* Agent Name Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                <span className="font-space text-[18px] font-semibold text-white tracking-[-0.01em]">{data.agentName}</span>
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col">
              {/* What It Does */}
              <div className="px-6 py-5 flex-1">
                <p className="text-[10px] font-bold text-[#999] uppercase tracking-[2px] mb-3">What It Does</p>
                <div className="flex flex-col gap-3">
                  {data.useCases.map((useCase, i) => (
                    <div key={i} className="flex items-start gap-3 text-[13px] text-[#444] leading-[1.6]">
                      <svg className="w-4 h-4 stroke-[#4d65ff] fill-none flex-shrink-0 mt-0.5" strokeWidth="2" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="px-6 py-4 bg-[#f8f9fa] border-l-2 border-[#22c55e]">
                <p className="text-[10px] font-bold text-[#22c55e] uppercase tracking-[2px] mb-2 flex items-center gap-1.5">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Outcome
                </p>
                <p className="text-[13px] text-[#444] leading-relaxed mb-1.5">{data.outcome}</p>
                <p className="text-[10px] text-[#888]">{data.context}</p>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-4 md:gap-8 px-6 py-4 border-t border-[#eee]">
                {data.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col min-w-[70px]">
                    <span className="font-space text-[18px] md:text-[22px] font-semibold text-[#1a1a1a] tracking-[-0.02em]">{stat.value}</span>
                    <span className="text-[9px] md:text-[10px] text-[#888]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1a1a1a] text-white rounded-lg text-[11px] font-semibold uppercase tracking-[1.5px] no-underline hover:bg-[#4d65ff] transition-all duration-300 shadow-lg"
          >
            Deploy Your First Agent
            <span>→</span>
          </Link>
          <Link
            href="#agents"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/80 backdrop-blur-sm text-[#1a1a1a] border border-[#ddd] rounded-lg text-[11px] font-semibold uppercase tracking-[1.5px] no-underline hover:border-[#1a1a1a] hover:bg-white transition-all duration-300"
          >
            See All Agents
          </Link>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
