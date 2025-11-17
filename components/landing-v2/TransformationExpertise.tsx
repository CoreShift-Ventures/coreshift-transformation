'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export function TransformationExpertise() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  const stats = [
    { value: '20+ Years', label: 'Combined Platform Experience' },
    { value: '3 Live', label: 'Transformations in Production' },
    { value: '2 Weeks', label: 'To Working Prototype' }
  ];

  // Logo companies - showing experience from enterprise backgrounds
  const logos = [
    { src: '/logos/Companies/SAP.png', width: 80, height: 30 },
    { src: '/logos/Companies/IBM.svg', width: 80, height: 30 },
    { src: '/logos/Companies/Talend.png', width: 120, height: 40 },
    { src: '/logos/Companies/Algonomy.png', width: 120, height: 40 },
    { src: '/logos/Companies/HP .svg', width: 50, height: 20 },
  ];

  return (
    <section className={`py-12 px-6 border-b ${isDark ? 'bg-black border-gray-800' : 'bg-white border-gray-200'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#ec5f2b] mb-1">
                {stat.value}
              </div>
              <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Ticker */}
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <p className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              TRUSTED BY FORWARD-THINKING BUSINESSES
            </p>
          </motion.div>

          {/* Fade edges */}
          <div className={`absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none ${
            isDark ? 'bg-gradient-to-r from-black to-transparent' : 'bg-gradient-to-r from-white to-transparent'
          }`} />
          <div className={`absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none ${
            isDark ? 'bg-gradient-to-l from-black to-transparent' : 'bg-gradient-to-l from-white to-transparent'
          }`} />

          {/* Animated logo container */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-32 h-12 relative flex items-center justify-center ${
                    isDark ? 'opacity-70 grayscale' : 'opacity-60 grayscale'
                  } hover:opacity-100 hover:grayscale-0 transition-all`}
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
