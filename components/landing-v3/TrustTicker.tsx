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

  // Logo sizes calibrated for visual consistency (similar visual weight)
  const logos = [
    { src: '/logos/Companies/SAP.png', width: 90, height: 36 },
    { src: '/logos/Companies/IBM.svg', width: 220, height: 88 },  // Square SVG with text inside - needs much larger
    { src: '/logos/Companies/hcltech-new-logo.svg', width: 120, height: 22 },
    { src: '/logos/Companies/HP .svg', width: 64, height: 64 },  // Circular logo
    { src: '/logos/Companies/Algonomy.png', width: 140, height: 48 },
    { src: '/logos/Companies/Talend.png', width: 100, height: 32 },
  ]

  return (
    <section className={`py-8 md:py-16 relative overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-10">
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
            {logos.map((logo, index) => (
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
                    {logos.map((logo, index) => (
                      <div
                        key={`${setIndex}-${index}`}
                        className={`flex-shrink-0 h-8 flex items-center justify-center mx-5 ${
                          isDark ? 'opacity-60 grayscale' : 'opacity-50 grayscale'
                        }`}
                      >
                        <Image
                          src={logo.src}
                          alt="Company logo"
                          width={logo.width * 0.7}
                          height={logo.height * 0.7}
                          className="object-contain max-h-8"
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
