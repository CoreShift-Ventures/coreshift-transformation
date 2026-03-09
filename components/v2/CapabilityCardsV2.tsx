'use client'

import { useState, useEffect } from 'react'

const agents = [
  { name: 'GRN Reconciliation', percent: 100 },
  { name: 'AP/AR Automation', percent: 94 },
  { name: 'SAP Query Agent', percent: 100 },
  { name: 'Fund Operations', percent: 97 },
  { name: 'CS Command Center', percent: 80 },
  { name: 'Vehicle Compliance', percent: 95 },
]

function LiveAgentsAnimation() {
  const [visibleRows, setVisibleRows] = useState(0)
  const [showNextRun, setShowNextRun] = useState(false)
  const [isResetting, setIsResetting] = useState(false)

  useEffect(() => {
    if (isResetting) return

    // Show rows sequentially
    if (visibleRows < agents.length) {
      const timer = setTimeout(() => {
        setVisibleRows(prev => prev + 1)
      }, 700)
      return () => clearTimeout(timer)
    }

    // After all rows visible, wait 2s then show "Next scheduled run"
    if (visibleRows === agents.length && !showNextRun) {
      const timer = setTimeout(() => {
        setShowNextRun(true)
      }, 2000)
      return () => clearTimeout(timer)
    }

    // After showing next run, wait 4s then reset
    if (showNextRun) {
      const timer = setTimeout(() => {
        setIsResetting(true)
        setTimeout(() => {
          setVisibleRows(0)
          setShowNextRun(false)
          setIsResetting(false)
        }, 500)
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [visibleRows, showNextRun, isResetting])

  const getProgressBar = (percent: number) => {
    const filled = Math.round(percent / 12.5)
    const empty = 8 - filled
    return '█'.repeat(filled) + '░'.repeat(empty)
  }

  return (
    <div
      className={`bg-[#F0F4FF] rounded-xl p-3 h-full font-mono text-[10px] transition-opacity duration-500 border border-[#e0e8ff] flex flex-col ${
        isResetting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col gap-1.5 flex-1">
        {agents.slice(0, visibleRows).map((agent, index) => (
          <div
            key={agent.name}
            className="flex items-center gap-2 animate-fadeIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse flex-shrink-0" />
            <span className="text-[#1a1a2e] flex-1 truncate">{agent.name}</span>
            <span className="text-white text-[8px] font-semibold px-1.5 py-0.5 bg-[#22C98A] rounded">
              LIVE
            </span>
            <span className="text-[#4d65ff] tracking-tight">{getProgressBar(agent.percent)}</span>
            <span className="text-[#666] w-7 text-right">{agent.percent}%</span>
          </div>
        ))}
      </div>

      {showNextRun && (
        <div className="mt-auto pt-2 border-t border-[#d0d8f0] animate-fadeIn">
          <span className="text-[#4d65ff] text-[10px]">
            Next scheduled run: 06:00 →
            <span className="inline-block w-1.5 h-3 bg-[#4d65ff] ml-1 animate-blink" />
          </span>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  )
}

const analysisChecks = [
  'Finance Ops patterns',
  'NetSuite integrations',
  'PDF extraction layer',
]

function BlueprintMatcherAnimation() {
  const [phase, setPhase] = useState<'input' | 'analysis' | 'match' | 'resetting'>('input')
  const [typedText, setTypedText] = useState('')
  const [progress, setProgress] = useState(0)
  const [visibleChecks, setVisibleChecks] = useState(0)
  const [checkProgress, setCheckProgress] = useState<number[]>([0, 0, 0])
  const [showMatch, setShowMatch] = useState(false)
  const [confidenceBar, setConfidenceBar] = useState(0)

  const fullText = 'Manual invoice reconciliation · NetSuite'

  useEffect(() => {
    if (phase === 'resetting') return

    // Phase 1: Input typing
    if (phase === 'input') {
      if (typedText.length < fullText.length) {
        const timer = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1))
          setProgress(((typedText.length + 1) / fullText.length) * 100)
        }, 70)
        return () => clearTimeout(timer)
      }
      const timer = setTimeout(() => {
        setPhase('analysis')
      }, 400)
      return () => clearTimeout(timer)
    }

    // Phase 2: Analysis checks
    if (phase === 'analysis') {
      if (visibleChecks < analysisChecks.length) {
        // Show next check row
        const showTimer = setTimeout(() => {
          setVisibleChecks(prev => prev + 1)
        }, 450)

        // Animate progress bar for current check
        const progressTimer = setInterval(() => {
          setCheckProgress(prev => {
            const newProgress = [...prev]
            if (newProgress[visibleChecks] < 100) {
              newProgress[visibleChecks] = Math.min(newProgress[visibleChecks] + 20, 100)
            }
            return newProgress
          })
        }, 50)

        return () => {
          clearTimeout(showTimer)
          clearInterval(progressTimer)
        }
      }
      // All checks done, move to match
      const timer = setTimeout(() => {
        setPhase('match')
      }, 400)
      return () => clearTimeout(timer)
    }

    // Phase 3: Match result
    if (phase === 'match') {
      const showTimer = setTimeout(() => {
        setShowMatch(true)
        // Animate confidence bar
        const barTimer = setInterval(() => {
          setConfidenceBar(prev => {
            if (prev >= 94) {
              clearInterval(barTimer)
              return 94
            }
            return prev + 8
          })
        }, 30)
      }, 200)

      const resetTimer = setTimeout(() => {
        setPhase('resetting')
        setTimeout(() => {
          setTypedText('')
          setProgress(0)
          setVisibleChecks(0)
          setCheckProgress([0, 0, 0])
          setShowMatch(false)
          setConfidenceBar(0)
          setPhase('input')
        }, 500)
      }, 4000)

      return () => {
        clearTimeout(showTimer)
        clearTimeout(resetTimer)
      }
    }
  }, [phase, typedText, visibleChecks])

  return (
    <div
      className={`bg-white border border-[#eee] rounded-xl p-3 h-full relative transition-opacity duration-500 ${
        phase === 'resetting' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Phase 1: Input */}
      <div className={`absolute inset-3 transition-all duration-300 ${phase === 'input' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <span className="text-[9px] font-semibold text-[#F97316] uppercase tracking-[1.5px]">
          Operation Detected
        </span>
        <div className="mt-2 p-2.5 bg-[#f8f9fa] rounded-lg border border-[#e5e5e5]">
          <div className="font-mono text-[11px] text-[#1a1a1a] min-h-[18px]">
            {typedText}
            <span className="inline-block w-0.5 h-3.5 bg-[#F97316] ml-0.5 animate-blink align-middle" />
          </div>
        </div>
        <div className="mt-2.5 h-1 bg-[#eee] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#F97316] to-[#FDBA74] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-[9px] text-[#999]">Scanning blueprint library...</p>
      </div>

      {/* Phase 2: Analysis */}
      <div className={`absolute inset-3 transition-all duration-300 ${phase === 'analysis' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="bg-[#f8f9fa] rounded-lg p-2.5 font-mono text-[9px]">
          <div className="flex flex-col gap-2">
            {analysisChecks.map((check, i) => (
              <div key={check} className={`flex items-center gap-2 transition-opacity duration-200 ${i <= visibleChecks ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-[#666] flex-1">Checking: {check}...</span>
                <div className="w-14 h-1.5 bg-[#e5e5e5] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#F97316] transition-all duration-150 ease-out"
                    style={{ width: `${checkProgress[i]}%` }}
                  />
                </div>
                {checkProgress[i] >= 100 && (
                  <span className="text-[#22c55e]">✓</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phase 3: Match */}
      <div className={`absolute inset-3 transition-all duration-300 ${phase === 'match' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
        <div className="p-3 bg-[#F0FDF4] border-[1.5px] border-[#22C98A] rounded-lg h-full flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C98A]" />
            <span className="text-[9px] font-semibold text-[#1a1a1a] uppercase tracking-[1px]">Blueprint Match</span>
          </div>

          <p className="text-[14px] font-semibold text-[#1a1a1a] mb-1">AP/AR Automation</p>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] text-[#666]">Confidence</span>
            <div className="flex-1 h-1.5 bg-[#e5e5e5] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#22C98A] transition-all duration-300 ease-out"
                style={{ width: `${confidenceBar}%` }}
              />
            </div>
            <span className="text-[10px] font-semibold text-[#1a1a1a]">{confidenceBar}%</span>
          </div>

          <p className="text-[10px] text-[#666] mb-3">4 to 6 weeks · NetSuite + Vision API</p>

          <button className="mt-auto w-full py-2 px-3 border border-[#1a1a1a] rounded-lg text-[9px] font-semibold text-[#1a1a1a] uppercase tracking-[1px] hover:bg-[#1a1a1a] hover:text-white transition-all">
            Start Discovery Sprint →
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.8s infinite;
        }
      `}</style>
    </div>
  )
}

const codeLines = [
  { indent: 0, content: 'def grn_agent(vendor_portal):' },
  { indent: 1, content: 'records = extract_grn_data()' },
  { indent: 1, content: 'validated = run_sap_rules(records)' },
  { indent: 1, content: 'if validated:' },
  { indent: 2, content: 'update_vbrk_table()' },
  { indent: 1, content: 'return f"{len(records)} docs updated"' },
]

const outputLines = [
  { text: 'Connecting to vendor portal...', check: true },
  { text: 'Records extracted: 81', check: false },
  { text: 'SAP rules validated: 14/14', check: false },
  { text: 'VBRK updated: 81 docs', check: true },
  { text: 'Runtime: 3m 12s', check: false },
]

function CustomAgentAnimation() {
  const [phase, setPhase] = useState<'typing' | 'running' | 'output' | 'success' | 'resetting'>('typing')
  const [visibleLines, setVisibleLines] = useState(0)
  const [visibleOutput, setVisibleOutput] = useState(0)
  const [runPulse, setRunPulse] = useState(false)

  useEffect(() => {
    if (phase === 'resetting') return

    if (phase === 'typing') {
      if (visibleLines < codeLines.length) {
        const timer = setTimeout(() => {
          setVisibleLines(prev => prev + 1)
        }, 800)
        return () => clearTimeout(timer)
      }
      // All lines typed, move to running
      const timer = setTimeout(() => {
        setPhase('running')
        setRunPulse(true)
      }, 400)
      return () => clearTimeout(timer)
    }

    if (phase === 'running') {
      const timer = setTimeout(() => {
        setRunPulse(false)
        setPhase('output')
      }, 500)
      return () => clearTimeout(timer)
    }

    if (phase === 'output') {
      if (visibleOutput < outputLines.length) {
        const timer = setTimeout(() => {
          setVisibleOutput(prev => prev + 1)
        }, 500)
        return () => clearTimeout(timer)
      }
      // All output shown, move to success
      const timer = setTimeout(() => {
        setPhase('success')
      }, 300)
      return () => clearTimeout(timer)
    }

    if (phase === 'success') {
      const timer = setTimeout(() => {
        setPhase('resetting')
        setTimeout(() => {
          setVisibleLines(0)
          setVisibleOutput(0)
          setPhase('typing')
        }, 500)
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [phase, visibleLines, visibleOutput])

  const renderCodeWord = (content: string) => {
    const keywords = ['def', 'if', 'return']
    const functions = ['extract_grn_data', 'run_sap_rules', 'update_vbrk_table', 'len']

    return content.split(/(\s+|[():,])/).map((part, i) => {
      if (keywords.includes(part)) {
        return <span key={i} className="text-[#d73a49]">{part}</span>
      }
      if (functions.includes(part)) {
        return <span key={i} className="text-[#6f42c1]">{part}</span>
      }
      if (part.startsWith('f"') || part.startsWith('"')) {
        return <span key={i} className="text-[#22863a]">{part}</span>
      }
      return <span key={i}>{part}</span>
    })
  }

  return (
    <div
      className={`bg-white border border-[#eee] rounded-xl overflow-hidden h-full flex flex-col transition-opacity duration-500 ${
        phase === 'resetting' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#f8f8f8] border-b border-[#eee] flex-shrink-0">
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
        <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-[8px] text-[#999] font-medium">agent.py</span>
      </div>

      {/* Code area */}
      <div className="flex-1 p-2.5 font-mono text-[9px] leading-[1.8] bg-white overflow-hidden">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex animate-slideIn" style={{ animationDelay: `${i * 0.05}s` }}>
            <span className="text-[#999] select-none w-4 text-right mr-2">{i + 1}</span>
            <span style={{ paddingLeft: `${line.indent * 12}px` }}>
              {renderCodeWord(line.content)}
            </span>
          </div>
        ))}
        {phase === 'typing' && visibleLines < codeLines.length && (
          <div className="flex">
            <span className="text-[#999] select-none w-4 text-right mr-2">{visibleLines + 1}</span>
            <span className="inline-block w-1 h-3 bg-[#4d65ff] animate-blink" />
          </div>
        )}

        {/* Output section */}
        {visibleOutput > 0 && (
          <div className="mt-2 pt-2 border-t border-[#eee]">
            {outputLines.slice(0, visibleOutput).map((line, i) => (
              <div key={i} className="text-[#555] animate-slideIn flex items-center gap-1 leading-[1.6]">
                <span className="text-[#4d65ff]">&gt;</span>
                <span>{line.text}</span>
                {line.check && <span className="text-[#22c55e]">✓</span>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer with Run button */}
      <div className="px-2.5 py-1.5 border-t border-[#eee] flex justify-between items-center bg-[#fafafa] flex-shrink-0">
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 bg-[#22c55e] text-white rounded text-[8px] font-semibold transition-all ${
            runPulse ? 'animate-runPulse shadow-[0_0_12px_rgba(34,197,94,0.6)]' : ''
          }`}
        >
          <svg className="w-2 h-2 fill-white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          Run
        </span>
        {phase === 'success' && (
          <span className="text-[8px] font-medium text-[#22c55e] animate-slideIn">
            Agent run complete · 0 errors
          </span>
        )}
        {phase !== 'success' && (
          <span className="text-[8px] font-medium text-[#999]">Deploy →</span>
        )}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.6s infinite;
        }
        @keyframes runPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-runPulse {
          animation: runPulse 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

export function CapabilityCardsV2() {
  return (
    <section className="relative z-20 -mt-8 px-8 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {/* Card 1: Live Agents */}
        <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col border border-white/80 min-h-[420px]">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-space text-[18px] font-medium text-[#1a1a1a] tracking-[-0.01em]">
              Live Agents
            </h3>
            <span className="flex items-center gap-1.5 px-2 py-1 bg-[#22c55e]/10 rounded text-[9px] font-semibold text-[#22c55e]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
              6 LIVE
            </span>
          </div>
          <p className="text-[13px] text-[#777] leading-relaxed mb-5">
            Proven agents running in production. Adaptable to your stack, deployable in weeks.
          </p>
          <div className="h-[240px] overflow-hidden">
            <LiveAgentsAnimation />
          </div>
        </div>

        {/* Card 2: Custom Agents */}
        <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col border border-white/80 min-h-[420px]">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-space text-[18px] font-medium text-[#1a1a1a] tracking-[-0.01em]">
              Custom Agents
            </h3>
            <span className="flex items-center gap-1.5 px-2 py-1 bg-[#1a1a1a]/5 rounded text-[9px] font-semibold text-[#1a1a1a]">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
              BUILD
            </span>
          </div>
          <p className="text-[13px] text-[#777] leading-relaxed mb-5">
            Any operation. Any system. Scoped after a 2 week Discovery Sprint.
          </p>
          <div className="h-[240px] overflow-hidden">
            <CustomAgentAnimation />
          </div>
        </div>

        {/* Card 3: Agent Blueprints */}
        <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col border border-white/80 min-h-[420px]">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-space text-[18px] font-medium text-[#1a1a1a] tracking-[-0.01em]">
              Agent Blueprints
            </h3>
            <span className="flex items-center gap-1.5 px-2 py-1 bg-[#4d65ff]/10 rounded text-[9px] font-semibold text-[#4d65ff]">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              MATCHER
            </span>
          </div>
          <p className="text-[13px] text-[#777] leading-relaxed mb-5">
            We've solved this class of problem before. Faster build, lower risk, known patterns.
          </p>
          <div className="h-[240px] overflow-hidden">
            <BlueprintMatcherAnimation />
          </div>
        </div>
      </div>
    </section>
  )
}

