'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useTheme } from 'next-themes';

const rotatingTexts = [
  "23% of Contractual Revenue Right Now",
  "$1M-$3M in Silent Revenue Leaks",
  "Revenue While You're Reading This",
  "15-30% ARR Through Silent Customer Exit"
];

export function AnimatedHeroSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  // Typing animation
  useEffect(() => {
    const currentText = rotatingTexts[rotatingIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText !== currentText) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 80);
    } else if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText !== '') {
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 40);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRotatingIndex((prev) => (prev + 1) % rotatingTexts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, rotatingIndex]);

  return (
    <section
      ref={containerRef}
      className={`relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden ${
        isDark ? 'bg-black' : 'bg-white'
      }`}
    >
      {/* Animated gradient blob */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        style={{ opacity }}
      >
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(236, 95, 43, 0.3) 0%, rgba(236, 95, 43, 0.1) 40%, transparent 70%)'
              : 'radial-gradient(circle, rgba(236, 95, 43, 0.2) 0%, rgba(236, 95, 43, 0.08) 40%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Floating particles */}
      <FloatingParticles isDark={isDark} />

      <motion.div
        className="relative max-w-4xl mx-auto z-10 text-center"
        style={{ opacity, scale, y }}
      >
        {/* Badge with slide-in animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className={`inline-block px-6 py-2 rounded-full text-sm font-semibold ${
            isDark ? 'bg-[#ec5f2b]/10 text-[#ec5f2b] border border-[#ec5f2b]/20' : 'bg-[#ec5f2b]/5 text-[#ec5f2b] border border-[#ec5f2b]/10'
          }`}>
            ✨ Enhanced with Fluid Animations
          </span>
        </motion.div>

        {/* Main Headline with letter stagger */}
        <motion.h1
          className={`text-5xl md:text-7xl leading-[1.05] font-bold tracking-[-0.03em] mb-4 ${
            isDark ? 'text-gray-100' : 'text-brand-charcoal'
          }`}
        >
          {['Preventable', 'Churn', 'is', 'Costing', 'You'].map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + idx * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className="inline-block mr-3 md:mr-4"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Rotating hook with gradient underline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-24"
        >
          <div className="text-3xl md:text-5xl font-bold text-[#ec5f2b] leading-[1.1] tracking-[-0.02em] min-h-[48px] md:min-h-[60px] relative">
            <motion.span
              key={displayText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {displayText}
            </motion.span>
            <span className="animate-pulse font-thin">|</span>

            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ec5f2b] to-transparent"
              animate={{
                scaleX: [0, 1, 0],
                x: ['-100%', '0%', '100%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className={`text-base md:text-lg max-w-3xl mx-auto mb-12 font-light leading-relaxed ${
            isDark ? 'text-gray-400' : 'text-brand-gray'
          }`}
        >
          While your Post-Sales team works blind, 3 customers are planning to churn, 5 expansion
          opportunities are being missed, and your CAC is burning through the cracks of spreadsheets
          and siloed tools.
        </motion.p>

        {/* CTA Buttons with magnetic effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            href="/audit"
            primary
            isDark={isDark}
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            Get Your Free Revenue Leak Audit
          </MagneticButton>

          <MagneticButton
            href="#"
            isDark={isDark}
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            See the Transformation Engine
          </MagneticButton>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`w-6 h-10 border-2 rounded-full flex items-start justify-center pt-2 ${
              isDark ? 'border-gray-600' : 'border-gray-400'
            }`}
          >
            <motion.div
              animate={{ opacity: [0, 1, 0], y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-[#ec5f2b] rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Magnetic button component
function MagneticButton({
  children,
  href,
  primary,
  isDark
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
  isDark: boolean;
}) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={position}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={`group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-all min-w-[240px] justify-center ${
        primary
          ? 'bg-brand-orange text-white hover:bg-brand-orange-dark shadow-lg hover:shadow-2xl'
          : isDark
          ? 'bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-100 shadow-md hover:shadow-xl'
          : 'bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 shadow-md hover:shadow-xl'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

// Floating particles background
function FloatingParticles({ isDark }: { isDark: boolean }) {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${isDark ? 'bg-[#ec5f2b]/20' : 'bg-[#ec5f2b]/10'}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
