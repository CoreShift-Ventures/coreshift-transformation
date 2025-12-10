'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { ArrowRight, Calendar } from 'lucide-react'

const rotatingStats = [
  "Your business runs on spreadsheets. It should run on systems.",
  "Enterprise-grade operations. Without the enterprise timeline.",
  "Stop scaling chaos. Start scaling systems."
]

// Headline split into parts for staggered animation
const headlineParts = [
  { text: "We transform", type: "normal" },
  { text: "your operations", type: "normal" },
  { text: "into", type: "normal" },
  { text: "modern,", type: "gradient" },
  { text: "intelligent", type: "gradient" },
  { text: "systems", type: "gradient" },
]

// Animation variants for staggered reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

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
    if (!currentStat) return

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
    }, 7000) // 7 seconds total (typing + pause)
    return () => clearInterval(rotateInterval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className={`relative flex items-center justify-center overflow-hidden pt-28 pb-4 md:pt-48 md:pb-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
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
        {/* Hero Badge - Hidden on mobile for cleaner look */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block mb-4 -mt-4"
        >
          <motion.span
            className={`relative inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs font-medium tracking-wide border backdrop-blur-md ${
              isDark
                ? 'bg-gray-900/70 border-[#ec5f2b]/20 text-gray-300'
                : 'bg-white/90 border-[#ec5f2b]/20 text-gray-600'
            }`}
            style={{
              boxShadow: isDark
                ? '0 0 20px rgba(236, 95, 43, 0.15), 0 0 40px rgba(236, 95, 43, 0.05), inset 0 1px 0 rgba(255,255,255,0.05)'
                : '0 0 20px rgba(236, 95, 43, 0.1), 0 0 40px rgba(236, 95, 43, 0.05), 0 4px 12px rgba(0,0,0,0.05)'
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: isDark
                ? '0 0 30px rgba(236, 95, 43, 0.25), 0 0 60px rgba(236, 95, 43, 0.1)'
                : '0 0 30px rgba(236, 95, 43, 0.2), 0 0 60px rgba(236, 95, 43, 0.08)'
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className="relative w-2 h-2 rounded-full bg-[#ec5f2b]"
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: [
                  '0 0 0 0 rgba(236, 95, 43, 0.4)',
                  '0 0 0 6px rgba(236, 95, 43, 0)',
                  '0 0 0 0 rgba(236, 95, 43, 0)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            Modern Business Systems for Scaling Companies
          </motion.span>
        </motion.div>

        {/* Main Headline with Staggered Word Reveal */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`text-[2.25rem] sm:text-4xl lg:text-4xl xl:text-5xl leading-[1.15] sm:leading-tight font-bold tracking-tight mb-6 px-4 sm:px-5 ${
            isDark ? 'text-gray-100' : 'text-brand-charcoal'
          }`}
        >
          {headlineParts.map((part, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className={`inline-block ${
                part.type === 'gradient'
                  ? 'bg-gradient-to-r from-[#ec5f2b] via-[#ff6b35] to-[#ec5f2b] bg-clip-text text-transparent animate-gradient-x'
                  : ''
              }`}
              style={{ willChange: 'opacity, transform, filter' }}
            >
              {part.text}
              {index < headlineParts.length - 1 && <span>&nbsp;</span>}
            </motion.span>
          ))}
        </motion.h1>

        {/* Rotating hook with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-6 sm:mb-10 px-4 sm:px-5 min-h-[56px] sm:min-h-[70px] flex items-center justify-center"
        >
          <div className="text-base sm:text-xl md:text-2xl xl:text-3xl font-semibold text-[#ec5f2b] leading-[1.35] tracking-tight text-center">
            {displayedText}
            <span className={`inline-block w-0.5 h-4 sm:h-6 md:h-7 xl:h-8 ml-1 ${isDark ? 'bg-white' : 'bg-black'} ${isTyping ? 'animate-blink' : 'opacity-0'}`} />
          </div>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className={`text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4 sm:px-5 ${
            isDark ? 'text-gray-400' : 'text-brand-gray'
          }`}
        >
          Too big for spreadsheets. Too unique for off-the-shelf. We build AI-powered systems around <span className="font-semibold text-[#ec5f2b]">your process</span>. Live in weeks, not months.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-lg sm:max-w-3xl mx-auto px-5"
        >
          <a
            href="/contact?intent=blueprint"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 focus-visible:ring-offset-white overflow-hidden min-h-[52px]"
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
            <span className="relative z-10">Book a Free Consult</span>
          </a>
          <button
            onClick={() => scrollToSection('case-studies')}
            className={`group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 border whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 overflow-hidden min-h-[52px] ${
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
            <svg className="w-5 h-5 flex-shrink-0 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="relative z-10">See Our Work</span>
          </button>
        </motion.div>

        {/* Scroll Indicator - Hidden on mobile for cleaner look */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="hidden md:flex mt-12 flex-col items-center gap-2"
        >
          <span className={`text-xs font-medium tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            Scroll to explore
          </span>
          <motion.div
            className={`w-6 h-10 rounded-full border-2 flex justify-center pt-2 ${
              isDark ? 'border-gray-700' : 'border-gray-300'
            }`}
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`}
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
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
