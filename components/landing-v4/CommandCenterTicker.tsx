'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const events = [
  { agent: 'GRN Agent', message: 'processed 81 vendor records, 0 failures', time: '2m ago', status: 'success' },
  { agent: 'CS Command Center', message: '3 accounts moved to At-Risk, alerts sent', time: '14m ago', status: 'info' },
  { agent: 'Vehicle Compliance', message: '240 vehicles validated, 6 flagged', time: '1h ago', status: 'success' },
  { agent: 'SAP Data Agent', message: '5,000 rows returned in 3.2s', time: '4m ago', status: 'success' },
  { agent: 'Fund Operations', message: '6 reports generated, 97.3% match rate', time: '6h ago', status: 'success' },
  { agent: 'AP/AR Agent', message: '94% auto-match on bank feed, 12 invoices extracted', time: '38m ago', status: 'info' },
]

export function CommandCenterTicker() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  return (
    <section className={`py-4 md:py-6 overflow-hidden border-y ${
      isDark ? 'bg-gray-950 border-gray-800' : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="flex items-center">
        {/* Label */}
        <div className={`flex-shrink-0 px-4 md:px-8 border-r ${
          isDark ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex items-center gap-2">
            <span className={`relative flex h-2 w-2`}>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className={`text-[10px] md:text-xs font-bold tracking-widest uppercase ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Command Center
            </span>
          </div>
        </div>

        {/* Scrolling Events */}
        <div className="flex-1 overflow-hidden">
          <div className="ticker-track-cc">
            {[0, 1].map((setIndex) => (
              <div key={setIndex} className="ticker-content-cc">
                {events.map((event, index) => (
                  <div
                    key={`${setIndex}-${index}`}
                    className={`flex-shrink-0 flex items-center gap-3 px-6 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      event.status === 'success' ? 'bg-green-500' : 'bg-blue-500'
                    }`} />
                    <span className="text-xs md:text-sm whitespace-nowrap">
                      <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {event.agent}
                      </span>
                      <span className={`mx-1.5 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>·</span>
                      <span>{event.message}</span>
                    </span>
                    <span className={`text-[10px] md:text-xs ${
                      isDark ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      {event.time}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .ticker-track-cc {
          display: flex;
          width: max-content;
          animation: ticker-cc 40s linear infinite;
        }
        .ticker-content-cc {
          display: flex;
          flex-shrink: 0;
        }
        @keyframes ticker-cc {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
