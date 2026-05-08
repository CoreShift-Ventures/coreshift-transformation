'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { AnimatedHeroSection } from '@/components/demo/AnimatedHeroSection';
import { AnimatedMetricsSection } from '@/components/demo/AnimatedMetricsSection';
import { AnimatedCaseStudiesSection } from '@/components/demo/AnimatedCaseStudiesSection';

export default function DemoPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Page Title Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-brand-orange to-orange-600 text-white py-4 px-6 text-center sticky top-0 z-50 shadow-lg"
      >
        <p className="text-sm font-semibold">
          🎨 Animated Landing Demo - Fluid Designs Inspired
        </p>
      </motion.div>

      {/* Animated Sections */}
      <AnimatedHeroSection />
      <AnimatedMetricsSection />
      <AnimatedCaseStudiesSection />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />
    </main>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-brand-orange origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
