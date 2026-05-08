'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const agents = [
  {
    name: 'GRN Reconciliation Agent',
    status: 'live',
    lastRun: 'Today, 06:03 AM',
    lastRunRelative: '2 hours ago',
    records: 81,
    errors: 0,
    duration: '3.2 min',
    sparkline: [true, true, true, true, true, true, true],
    log: 'TAFE: 81 records extracted → VBRK updated ✓',
  },
  {
    name: 'AP/AR Automation Agent',
    status: 'poc',
    lastRun: 'Demo available',
    lastRunRelative: 'POC complete',
    records: 47,
    errors: 0,
    duration: '1.8 min',
    sparkline: [true, true, true, true, true],
    log: '12 fields extracted, PO matched, NetSuite ready ✓',
  },
  {
    name: 'SAP Query Agent',
    status: 'live',
    lastRun: 'Today, 09:41 AM',
    lastRunRelative: '23 min ago',
    records: 5000,
    errors: 0,
    duration: '3.2 sec',
    sparkline: [true, true, true, true, true, true, true],
    log: 'ACDOCA: 5K rows returned via OData ✓',
  },
  {
    name: 'Fund Operations Agent',
    status: 'live',
    lastRun: 'Yesterday, 11:00 PM',
    lastRunRelative: '11 hours ago',
    records: 117,
    errors: 0,
    duration: '8.4 min',
    sparkline: [true, true, true, true, true, false, true],
    log: '6 reports generated, CAS match 97.3% ✓',
  },
  {
    name: 'CS Command Center Agent',
    status: 'live',
    lastRun: 'Today, 08:00 AM',
    lastRunRelative: '4 hours ago',
    records: 200,
    errors: 0,
    duration: '4.1 min',
    sparkline: [true, true, true, true, true, true, true],
    log: '3 accounts → At-Risk, NRR forecast updated ✓',
  },
  {
    name: 'Vehicle Compliance Agent',
    status: 'live',
    lastRun: 'Today, 07:15 AM',
    lastRunRelative: '5 hours ago',
    records: 10247,
    errors: 0,
    duration: '12.3 min',
    sparkline: [true, true, true, true, true, false, true],
    log: '6 compliance flags raised, campaign list ready ✓',
  },
]

const initialEvents = [
  { time: '09:41:23', agent: 'SAP Query Agent', event: 'Query completed: 5,000 ACDOCA rows returned', type: 'success' },
  { time: '08:00:15', agent: 'CS Command Center', event: 'Pipeline sync complete, 3 accounts flagged at-risk', type: 'success' },
  { time: '07:15:42', agent: 'Vehicle Compliance', event: '10,247 vehicles validated, 6 flags raised', type: 'success' },
  { time: '06:03:18', agent: 'GRN Reconciliation', event: '81 TAFE records processed, VBRK updated', type: 'success' },
  { time: '05:45:00', agent: 'AP/AR Automation', event: 'POC run: 47 invoices processed, 94% match rate', type: 'info' },
]

const newEventTemplates = [
  { agent: 'GRN Reconciliation', event: 'Vendor portal sync initiated', type: 'info' },
  { agent: 'SAP Query Agent', event: 'Cache refreshed, 12 new queries queued', type: 'success' },
  { agent: 'Fund Operations', event: 'IRR calculation triggered for Fund I', type: 'info' },
  { agent: 'Vehicle Compliance', event: 'Daily validation batch started', type: 'info' },
  { agent: 'CS Command Center', event: 'Salesforce delta sync in progress', type: 'info' },
  { agent: 'GRN Reconciliation', event: 'Portal login successful: Mahindra OEM', type: 'success' },
]

export default function CommandCenter() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [events, setEvents] = useState(initialEvents)

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Add new event every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const template = newEventTemplates[Math.floor(Math.random() * newEventTemplates.length)]
      const now = new Date()
      const timeStr = now.toTimeString().slice(0, 8)
      const newEvent = { time: timeStr, ...template }
      setEvents(prev => [newEvent, ...prev.slice(0, 9)])
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const liveCount = agents.filter(a => a.status === 'live').length

  return (
    <div className="min-h-screen bg-[#0A0A12] text-white font-sans">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="font-space text-[20px] font-semibold tracking-tight">
              CoreShift Command Center
            </h1>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#22c55e]/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-[12px] font-semibold text-[#22c55e]">
                {liveCount} agents operational
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[13px] text-white/50">{formatDate(currentTime)}</div>
            <div className="font-mono text-[18px] font-semibold text-white/90">{formatTime(currentTime)}</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Agent Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="bg-[#12121A] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-space text-[15px] font-semibold text-white truncate mb-1">
                      {agent.name}
                    </h3>
                    <p className="text-[12px] text-white/40">{agent.lastRunRelative}</p>
                  </div>
                  <span className={`flex-shrink-0 ml-3 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wide ${
                    agent.status === 'live'
                      ? 'bg-[#22c55e]/20 text-[#22c55e]'
                      : 'bg-[#f97316]/20 text-[#f97316]'
                  }`}>
                    {agent.status}
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-[#0A0A12] rounded-lg p-3">
                    <div className="text-[18px] font-semibold text-white">
                      {agent.records.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wide">Records</div>
                  </div>
                  <div className="bg-[#0A0A12] rounded-lg p-3">
                    <div className={`text-[18px] font-semibold ${agent.errors === 0 ? 'text-[#22c55e]' : 'text-[#ef4444]'}`}>
                      {agent.errors}
                    </div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wide">Errors</div>
                  </div>
                  <div className="bg-[#0A0A12] rounded-lg p-3">
                    <div className="text-[18px] font-semibold text-white">{agent.duration}</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wide">Duration</div>
                  </div>
                </div>

                {/* Sparkline */}
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-[10px] text-white/30 mr-2">Last 7 runs:</span>
                  {agent.sparkline.map((success, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full ${success ? 'bg-[#22c55e]' : 'bg-[#f97316]'}`}
                    />
                  ))}
                </div>

                {/* Log Line */}
                <div className="bg-[#0A0A12] rounded-lg px-3 py-2.5 font-mono text-[11px] text-white/60 truncate">
                  <span className="text-[#4d65ff] mr-2">&gt;</span>
                  {agent.log}
                </div>
              </div>
            ))}
          </div>

          {/* Live Event Feed */}
          <div className="bg-[#12121A] border border-white/5 rounded-xl overflow-hidden">
            <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4d65ff] animate-pulse" />
                <h3 className="font-space text-[14px] font-semibold text-white">Live Event Feed</h3>
              </div>
              <span className="text-[11px] text-white/30">Updates every 30s</span>
            </div>
            <div className="divide-y divide-white/5">
              {events.map((event, i) => (
                <div key={i} className="px-5 py-3 flex items-center gap-4 hover:bg-white/[0.02] transition-colors">
                  <span className="font-mono text-[12px] text-white/30 w-20 flex-shrink-0">{event.time}</span>
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    event.type === 'success' ? 'bg-[#22c55e]' : 'bg-[#4d65ff]'
                  }`} />
                  <span className="text-[13px] text-white/70 font-medium w-48 flex-shrink-0">{event.agent}</span>
                  <span className="text-[13px] text-white/50 truncate">{event.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Bottom CTA Bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-[#12121A] border-t border-white/10 px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <p className="text-[14px] text-white/60">
            Want an agent like this running in your operation?
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#4d65ff] hover:bg-[#3d55ef] text-white rounded-lg text-[12px] font-semibold uppercase tracking-wide transition-colors"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/#agents"
              className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white/70 rounded-lg text-[12px] font-semibold uppercase tracking-wide transition-colors"
            >
              See All Agents
            </Link>
          </div>
        </div>
      </footer>

      {/* Watermark */}
      <div className="fixed bottom-20 right-6 text-[10px] text-white/20">
        Powered by CoreShift
      </div>
    </div>
  )
}
