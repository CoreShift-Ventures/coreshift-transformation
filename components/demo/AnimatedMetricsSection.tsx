'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTheme } from 'next-themes';

const targetOutcomes = [
  {
    value: 60,
    suffix: '%',
    label: 'Churn Reduction',
    sublabel: 'with platform adoption',
    icon: '📉',
  },
  {
    value: 20,
    suffix: '+ pts',
    label: 'NRR Improvement',
    sublabel: 'expansion tracking',
    icon: '📈',
  },
  {
    value: 10,
    suffix: 'x',
    label: 'ROI Potential',
    sublabel: 'year one',
    icon: '💰',
  },
  {
    value: 40,
    suffix: '%',
    label: 'Time Savings',
    sublabel: 'per CSM',
    icon: '⚡',
  },
];

export function AnimatedMetricsSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <section
      ref={sectionRef}
      className={`py-24 px-6 relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}
    >
      {/* Animated grid background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.05 : 0 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ec5f2b 1px, transparent 1px), linear-gradient(to bottom, #ec5f2b 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </motion.div>

      {/* Floating orbs */}
      <FloatingOrbs isDark={isDark} isInView={isInView} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with reveal animation */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span
              className={`inline-block px-6 py-2 rounded-full text-sm font-semibold ${
                isDark
                  ? 'bg-[#ec5f2b]/10 text-[#ec5f2b] border border-[#ec5f2b]/20'
                  : 'bg-[#ec5f2b]/5 text-[#ec5f2b] border border-[#ec5f2b]/10'
              }`}
            >
              Measurable Impact
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`text-4xl md:text-5xl font-bold mb-6 leading-[1.1] tracking-[-0.02em] ${
              isDark ? 'text-gray-100' : 'text-brand-charcoal'
            }`}
          >
            Target Outcomes,
            <br />
            <span className="text-[#ec5f2b] relative inline-block">
              Delivered Together
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ec5f2b] via-orange-500 to-[#ec5f2b]"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className={`text-lg max-w-2xl mx-auto font-light ${
              isDark ? 'text-gray-400' : 'text-brand-gray'
            }`}
          >
            Potential outcomes when teams fully adopt our proven framework
          </motion.p>
        </div>

        {/* Metrics Grid with staggered animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {targetOutcomes.map((metric, idx) => (
            <MetricCard
              key={idx}
              metric={metric}
              index={idx}
              isDark={isDark}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Animated metric card
function MetricCard({
  metric,
  index,
  isDark,
  isInView,
}: {
  metric: typeof targetOutcomes[0];
  index: number;
  isDark: boolean;
  isInView: boolean;
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        type: 'spring',
        stiffness: 100,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`group relative p-8 rounded-2xl text-center transition-all duration-500 cursor-pointer ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#ec5f2b]/60 shadow-xl hover:shadow-2xl'
          : 'bg-white border border-gray-200 hover:border-[#ec5f2b]/40 shadow-lg hover:shadow-2xl'
      }`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#ec5f2b]/10 via-orange-500/5 to-transparent rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Top accent line with shine effect */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ec5f2b] to-transparent overflow-hidden rounded-t-2xl">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
          animate={isHovered ? { x: ['-100%', '100%'] } : {}}
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10">
        {/* Icon with bounce */}
        <motion.div
          className="text-4xl mb-4"
          animate={isHovered ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          {metric.icon}
        </motion.div>

        {/* Animated counter */}
        <div className="flex items-end justify-center mb-5">
          <AnimatedCounter
            value={metric.value}
            isInView={isInView}
            delay={index * 0.15 + 0.3}
          />
          {metric.suffix && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
              className={`text-2xl font-bold leading-none mb-1.5 ml-1 ${
                isDark ? 'text-gray-100' : 'text-gray-900'
              }`}
            >
              {metric.suffix}
            </motion.span>
          )}
        </div>

        {/* Label with slide-up */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
          className={`text-sm font-bold mb-2 uppercase tracking-wide ${
            isDark ? 'text-gray-200' : 'text-gray-800'
          }`}
        >
          {metric.label}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.7 }}
          className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}
        >
          {metric.sublabel}
        </motion.div>
      </div>

      {/* Corner decoration */}
      <motion.div
        className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#ec5f2b]/30 rounded-br-lg"
        animate={isHovered ? { scale: 1.2, opacity: 1 } : { scale: 1, opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// Animated counter component
function AnimatedCounter({
  value,
  isInView,
  delay,
}: {
  value: number;
  isInView: boolean;
  delay: number;
}) {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        motionValue.set(value);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, delay, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span className="text-6xl md:text-7xl font-black text-[#ec5f2b] leading-none tracking-tight">
      {displayValue}
    </span>
  );
}

// Floating orbs background
function FloatingOrbs({ isDark, isInView }: { isDark: boolean; isInView: boolean }) {
  const orbs = [
    { size: 300, x: '10%', y: '20%', duration: 15 },
    { size: 200, x: '80%', y: '60%', duration: 20 },
    { size: 250, x: '50%', y: '80%', duration: 18 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: isDark
              ? 'radial-gradient(circle, rgba(236, 95, 43, 0.15) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(236, 95, 43, 0.1) 0%, transparent 70%)',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView
              ? {
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1],
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                }
              : {}
          }
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
