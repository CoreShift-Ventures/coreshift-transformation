'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { ArrowRight, Calendar } from 'lucide-react'

const rotatingStats = [
  "The right process blueprint pays for itself in 90 days",
  "Scaling without systems always becomes firefighting",
  "Operational chaos costs scaling businesses 6–7 figures annually"
]

export default function HeroV4() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [rotatingIndex, setRotatingIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  // Typing effect
  useEffect(() => {
    const currentStat = rotatingStats[rotatingIndex]
    let currentIndex = 0
    setDisplayedText('')
    setIsTyping(true)

    const typingInterval = setInterval(() => {
      if (currentIndex <= currentStat.length) {
        setDisplayedText(currentStat.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setIsTyping(false)
      }
    }, 50) // 50ms per character

    return () => clearInterval(typingInterval)
  }, [rotatingIndex])

  // Rotate to next stat
  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % rotatingStats.length)
    }, 5000) // 5 seconds total (typing + pause)
    return () => clearInterval(rotateInterval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className={`relative flex items-center justify-center overflow-hidden pt-48 pb-4 md:pt-56 md:pb-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isDark
              ? 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.03) 1px, transparent 0)'
              : 'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.02) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-[0.015]">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Radial gradient spotlight - matching V3 */}
      <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1200px] lg:h-[1200px] rounded-full blur-3xl"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(236, 95, 43, 0.2) 0%, rgba(236, 95, 43, 0.08) 40%, transparent 70%)'
              : 'radial-gradient(circle, rgba(236, 95, 43, 0.15) 0%, rgba(236, 95, 43, 0.05) 40%, transparent 70%)',
            animation: 'pulse 8s ease-in-out infinite'
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto z-10 text-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-3xl sm:text-4xl lg:text-4xl xl:text-5xl leading-tight font-bold tracking-tight mb-6 px-4 ${
            isDark ? 'text-gray-100' : 'text-brand-charcoal'
          }`}
        >
          We turn chaotic operations into<br />
          <span className="bg-gradient-to-r from-[#ec5f2b] via-[#ff6b35] to-[#ec5f2b] bg-clip-text text-transparent animate-gradient-x">revenue engines</span>
        </motion.h1>

        {/* Rotating hook with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10 px-4 min-h-[90px] md:min-h-[85px] flex items-center justify-center"
        >
          <div className="text-xl md:text-2xl xl:text-3xl font-semibold text-[#ec5f2b] leading-[1.3] tracking-tight text-center">
            {displayedText}
            <span className={`inline-block w-0.5 h-6 md:h-7 xl:h-8 ml-1 ${isDark ? 'bg-white' : 'bg-black'} ${isTyping ? 'animate-blink' : 'opacity-0'}`} />
          </div>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-sm sm:text-base max-w-3xl mx-auto mb-10 font-light leading-relaxed px-4 ${
            isDark ? 'text-gray-400' : 'text-brand-gray'
          }`}
        >
          Strategy-first transformation for scaling businesses. Your fractional operations brain + execution team. Clear roadmap in 2 weeks, live system in 8 weeks.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-3xl mx-auto px-4"
        >
          <a
            href="/contact?intent=blueprint"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-lg font-semibold text-base transition-all duration-300 hover:scale-105 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 focus-visible:ring-offset-white overflow-hidden"
            style={{
              boxShadow: '0 4px 14px 0 rgba(236, 95, 43, 0.25)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(236, 95, 43, 0.4), 0 0 40px rgba(236, 95, 43, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(236, 95, 43, 0.25)';
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ec5f2b] to-[#ff6b35] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg className="w-5 h-5 flex-shrink-0 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="relative z-10">Book Free Process Audit</span>
          </a>
          <button
            onClick={() => scrollToSection('how-we-work')}
            className={`group relative inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-105 border whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 overflow-hidden ${
              isDark
                ? 'bg-gray-900 border-gray-700 text-gray-100 focus-visible:ring-offset-black hover:border-gray-600'
                : 'bg-white border-gray-200 text-gray-900 focus-visible:ring-offset-white hover:border-gray-300'
            }`}
            style={{
              boxShadow: isDark
                ? '0 4px 14px 0 rgba(0, 0, 0, 0.3)'
                : '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = isDark
                ? '0 6px 20px rgba(0, 0, 0, 0.4), 0 0 30px rgba(236, 95, 43, 0.1)'
                : '0 6px 20px rgba(0, 0, 0, 0.15), 0 0 30px rgba(236, 95, 43, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = isDark
                ? '0 4px 14px 0 rgba(0, 0, 0, 0.3)'
                : '0 4px 14px 0 rgba(0, 0, 0, 0.1)';
            }}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              isDark ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-gray-50 to-white'
            }`} />
            <svg className="w-5 h-5 flex-shrink-0 relative z-10 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            <span className="relative z-10">See How We Work</span>
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        :global(.animate-blink) {
          animation: blink 1s step-end infinite;
        }
        :global(.animate-gradient-x) {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  )
}
