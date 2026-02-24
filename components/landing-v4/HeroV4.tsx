'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, Clock, CheckCircle2 } from 'lucide-react'

// Floating agent activity cards data
const floatingCards = [
  { icon: CheckCircle2, text: "GRN Agent processed 81 records", color: "green", position: "left" },
  { icon: Zap, text: "94% auto-match rate achieved", color: "orange", position: "right" },
  { icon: Shield, text: "Command Center monitoring active", color: "blue", position: "left-bottom" },
  { icon: Clock, text: "Next scheduled run in 2h 14m", color: "purple", position: "right-bottom" },
]

// Word-by-word animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
}

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export default function HeroV4() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0b]">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        {/* Primary gradient orb */}
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236, 95, 43, 0.15) 0%, rgba(236, 95, 43, 0.05) 40%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary gradient orb - blue */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Tertiary gradient orb - purple */}
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Floating activity cards - Desktop only */}
      <div className="hidden lg:block">
        {floatingCards.map((card, index) => {
          const Icon = card.icon
          const positions: Record<string, string> = {
            "left": "top-1/3 left-[8%]",
            "right": "top-1/4 right-[8%]",
            "left-bottom": "bottom-1/3 left-[12%]",
            "right-bottom": "bottom-1/4 right-[10%]",
          }
          const colors: Record<string, string> = {
            "green": "from-green-500/20 to-green-500/5 border-green-500/20",
            "orange": "from-orange-500/20 to-orange-500/5 border-orange-500/20",
            "blue": "from-blue-500/20 to-blue-500/5 border-blue-500/20",
            "purple": "from-purple-500/20 to-purple-500/5 border-purple-500/20",
          }
          const iconColors: Record<string, string> = {
            "green": "text-green-400",
            "orange": "text-orange-400",
            "blue": "text-blue-400",
            "purple": "text-purple-400",
          }

          return (
            <motion.div
              key={index}
              className={`absolute ${positions[card.position]} z-20`}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.5 + index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <motion.div
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-br ${colors[card.color]} border backdrop-blur-xl`}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 ${iconColors[card.color]}`} />
                </div>
                <span className="text-sm text-gray-300 font-medium whitespace-nowrap">
                  {card.text}
                </span>
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            6 Agents Live in Production
          </span>
        </motion.div>

        {/* Main headline with word-by-word reveal */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          style={{ perspective: '1000px' }}
        >
          <motion.span variants={wordVariants} className="inline-block text-white">
            Your&nbsp;
          </motion.span>
          <motion.span variants={wordVariants} className="inline-block text-white">
            operations.
          </motion.span>
          <br className="hidden sm:block" />
          <motion.span
            variants={wordVariants}
            className="inline-block bg-gradient-to-r from-[#ec5f2b] via-[#ff8a5b] to-[#ec5f2b] bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient"
          >
            Our&nbsp;
          </motion.span>
          <motion.span
            variants={wordVariants}
            className="inline-block bg-gradient-to-r from-[#ec5f2b] via-[#ff8a5b] to-[#ec5f2b] bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient"
          >
            agents.
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={0.8}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AI agents built for <span className="text-white font-medium">your exact processes</span>,
          deployed on your infrastructure, monitored 24/7.
          <span className="text-[#ec5f2b] font-medium"> One monthly subscription.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={1.0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <a
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ec5f2b] to-[#ff6b35]" />

            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#ff6b35] to-[#ec5f2b]" />
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ec5f2b] to-[#ff6b35] rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />

            <span className="relative text-white">Book a Discovery Call</span>
            <ArrowRight className="relative w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#agents"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base bg-white/5 border border-white/10 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <span>See Agents Built</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          custom={1.3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500"
        >
          {[
            { value: "19+", label: "Systems integrated" },
            { value: "94%", label: "Automation rate" },
            { value: "24/7", label: "Monitoring" },
          ].map((stat, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">{stat.value}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-white/40"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0b] to-transparent" />

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        :global(.animate-gradient) {
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </section>
  )
}
