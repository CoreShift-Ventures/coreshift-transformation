// @ts-nocheck
'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export function TrustTicker() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  // Desktop logo sizes
  const desktopLogos = [
    { src: '/logos/Companies/SAP.png', width: 90, height: 36 },
    { src: '/logos/Companies/IBM.svg', width: 80, height: 32 },
    { src: '/logos/Companies/hcltech-new-logo.svg', width: 120, height: 22 },
    { src: '/logos/Companies/HP .svg', width: 44, height: 44 },
    { src: '/logos/Companies/Algonomy.png', width: 110, height: 38 },
    { src: '/logos/Companies/Talend.png', width: 95, height: 30 },
  ]

  // Mobile logo sizes - individually tuned for visual balance in ticker
  const mobileLogos = [
    { src: '/logos/Companies/SAP.png', width: 70, height: 28 },
    { src: '/logos/Companies/IBM.svg', width: 62, height: 25 },
    { src: '/logos/Companies/hcltech-new-logo.svg', width: 90, height: 17 },
    { src: '/logos/Companies/HP .svg', width: 34, height: 34 },
    { src: '/logos/Companies/Algonomy.png', width: 85, height: 29 },
    { src: '/logos/Companies/Talend.png', width: 75, height: 24 },
  ]

  const stats = [
    { value: '6', label: 'Agents in production' },
    { value: '19+', label: 'Systems integrated' },
    { value: '94%', label: 'Automation rate' },
    { value: '5+', label: 'Industries served' },
  ]

  return (
    <section className={`py-8 md:py-16 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 py-6 md:py-8 px-4 md:px-10 rounded-2xl border ${
            isDark
              ? 'bg-gray-900/50 border-gray-800'
              : 'bg-gray-50/80 border-gray-200'
          }`}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#ec5f2b] mb-1">
                  {stat.value}
                </div>
                <div className={`text-xs md:text-sm font-medium ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Logo Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className={`text-xs uppercase tracking-wider font-medium mb-6 md:mb-8 ${
            isDark ? 'text-gray-500' : 'text-gray-500'
          }`}>
            Built by transformation experts from
          </p>

          {/* Desktop: Static Logo Grid */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-10 lg:gap-14">
            {desktopLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex-shrink-0 h-10 relative flex items-center justify-center ${
                  isDark ? 'opacity-50 grayscale' : 'opacity-40 grayscale'
                } hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
              >
                <Image
                  src={logo.src}
                  alt="Company logo"
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile: CSS-based infinite scroll ticker */}
          <div className="md:hidden relative">
            {/* Gradient masks for fade effect */}
            <div className={`absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none ${
              isDark ? 'bg-gradient-to-r from-black to-transparent' : 'bg-gradient-to-r from-white to-transparent'
            }`} />
            <div className={`absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none ${
              isDark ? 'bg-gradient-to-l from-black to-transparent' : 'bg-gradient-to-l from-white to-transparent'
            }`} />

            <div className="overflow-hidden">
              <div className="ticker-track">
                {/* Two sets of logos for seamless infinite loop */}
                {[0, 1].map((setIndex) => (
                  <div key={setIndex} className="ticker-content">
                    {mobileLogos.map((logo, index) => (
                      <div
                        key={`${setIndex}-${index}`}
                        className={`flex-shrink-0 flex items-center justify-center px-5 ${
                          isDark ? 'opacity-60 grayscale' : 'opacity-50 grayscale'
                        }`}
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
                ))}
              </div>
            </div>

            <style jsx>{`
              .ticker-track {
                display: flex;
                width: max-content;
                animation: ticker 25s linear infinite;
              }
              .ticker-content {
                display: flex;
                flex-shrink: 0;
              }
              @keyframes ticker {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
