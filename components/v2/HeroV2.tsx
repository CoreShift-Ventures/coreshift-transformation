'use client'

import Link from 'next/link'
import Image from 'next/image'

const logos = [
  { src: '/logos/Companies/SAP.png', width: 80, height: 32 },
  { src: '/logos/Companies/IBM.svg', width: 70, height: 28 },
  { src: '/logos/Companies/hcltech-new-logo.svg', width: 100, height: 18 },
  { src: '/logos/Companies/HP .svg', width: 38, height: 38 },
  { src: '/logos/Companies/Algonomy.png', width: 95, height: 32 },
  { src: '/logos/Companies/Talend.png', width: 85, height: 26 },
]

const tickerEvents = [
  { agent: 'GRN Agent', event: '81 TAFE records processed, 0 failures', time: '2m ago' },
  { agent: 'CS Command Center', event: '3 accounts moved to At-Risk', time: '14m ago' },
  { agent: 'Vehicle Compliance', event: '240 vehicles validated, 6 flagged', time: '1h ago' },
  { agent: 'SAP Query Agent', event: '5,000 ACDOCA rows returned in 3.2s', time: '4m ago' },
  { agent: 'Fund Operations', event: '6 reports generated, 97.3% match rate', time: '6h ago' },
]

function TickerContent() {
  return (
    <div className="flex items-center py-2 px-2">
      {tickerEvents.map((item, i) => (
        <div key={i} className="flex items-center whitespace-nowrap">
          <span className="w-1 h-1 rounded-full bg-[#22c55e] mr-2 flex-shrink-0" />
          <span className="font-mono text-[11px] tracking-wide">
            <span className="text-[#333] font-medium">{item.agent}</span>
            <span className="text-[#888]"> — {item.event}</span>
            <span className="text-[#aaa] ml-2 text-[10px]">{item.time}</span>
          </span>
          <span className="mx-6 text-[#ddd]">·</span>
        </div>
      ))}
    </div>
  )
}

export function HeroV2() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-8 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 z-0 bg-[#f5f7fa]" />

      {/* Radial gradient glow from bottom */}
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


      {/* Content */}
      <div className="relative z-10 text-center max-w-[800px] mx-auto mt-8">
        <p className="text-[11px] font-medium text-[#888] uppercase tracking-[3px] mb-8">
          Agents as a Service
        </p>

        <h1 className="font-space text-[32px] md:text-[54px] font-medium text-[#1a1a1a] tracking-[-0.02em] leading-[1.15] mb-5">
          Enterprise operations.<br />Now agent-powered.
        </h1>

        <p className="font-space text-[18px] md:text-[22px] font-medium text-[#555] tracking-[-0.01em] mb-10">
          We build it. You run it. We maintain it.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1a1a1a] text-white rounded text-[11px] font-semibold uppercase tracking-[1.5px] no-underline hover:bg-[#4d65ff] transition-all duration-300"
          >
            Deploy Your First Agent
            <span className="text-[8px]">→</span>
          </Link>
          <Link
            href="#agents"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/80 backdrop-blur-sm text-[#1a1a1a] border border-[#ddd] rounded text-[11px] font-semibold uppercase tracking-[1.5px] no-underline hover:bg-white hover:border-[#1a1a1a] transition-all duration-300"
          >
            Agents in Action
            <span className="text-[8px]">↓</span>
          </Link>
        </div>

        {/* Logo Trust Bar */}
        <div className="mt-12">
          <p className="text-[12px] text-[#999] uppercase tracking-[2px] mb-6 text-center">Built by transformation experts from</p>
          <div className="flex justify-center items-center gap-6 md:gap-12 flex-wrap">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-10 relative flex items-center justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt="Company logo"
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Command Center Ticker */}
      <div className="relative z-10 mt-16 w-full max-w-[1200px] mx-auto px-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-[10px] font-medium text-[#aaa] uppercase tracking-[2px]">Command Center</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-[10px] font-medium text-[#22c55e] uppercase tracking-[1px]">Live</span>
          </span>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-white/60 backdrop-blur-md border border-[#e5e5e5]/50 shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
          <div className="flex ticker-wrapper">
            <div className="flex ticker-track">
              <TickerContent />
              <TickerContent />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
        }
        .ticker-track {
          display: flex;
          width: fit-content;
          animation: scroll 18s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
