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

  const logos = [
    { src: '/logos/Companies/SAP.png', width: 80, height: 30, className: '' },
    { src: '/logos/Companies/IBM.svg', width: 80, height: 30, className: '' },
    { src: '/logos/Companies/hcltech-new-logo.svg', width: 100, height: 35, className: '' },
    { src: '/logos/Companies/HP .svg', width: 50, height: 20, className: '' },
    { src: '/logos/Companies/Algonomy.png', width: 120, height: 40, className: '' },
    { src: '/logos/Companies/Talend.png', width: 120, height: 40, className: '' },
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
          <div className="hidden md:flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex-shrink-0 h-10 md:h-12 relative flex items-center justify-center ${
                  isDark ? 'opacity-50 grayscale' : 'opacity-40 grayscale'
                } hover:opacity-100 hover:grayscale-0 transition-all duration-300 ${logo.className}`}
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

          {/* Mobile: Auto-scrolling Ticker */}
          <div className="md:hidden relative">
            {/* Gradient masks for fade effect */}
            <div className={`absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none ${
              isDark ? 'bg-gradient-to-r from-black to-transparent' : 'bg-gradient-to-r from-white to-transparent'
            }`} />
            <div className={`absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none ${
              isDark ? 'bg-gradient-to-l from-black to-transparent' : 'bg-gradient-to-l from-white to-transparent'
            }`} />

            <div className="overflow-hidden">
              <motion.div
                className="flex items-center gap-8"
                animate={{
                  x: [0, -50 * logos.length * 2],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {/* Double the logos for seamless loop */}
                {[...logos, ...logos, ...logos].map((logo, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 h-8 relative flex items-center justify-center px-2 ${
                      isDark ? 'opacity-50 grayscale' : 'opacity-40 grayscale'
                    }`}
                  >
                    <Image
                      src={logo.src}
                      alt="Company logo"
                      width={logo.width * 0.7}
                      height={logo.height * 0.7}
                      className="object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
