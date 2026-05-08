'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface LiveModule {
  url: string;
  title: string;
  badge: string;
  description: string;
}

const liveModules: LiveModule[] = [
  {
    url: 'http://localhost:3008/dashboard?embed=true',
    title: 'Dashboard',
    badge: '105% NRR Current',
    description: 'Real-time NRR tracking and metrics'
  },
  {
    url: 'http://localhost:3008/goals?embed=true',
    title: 'Goals Module',
    badge: '40 sample goals',
    description: 'Track customer success goals'
  },
  {
    url: 'http://localhost:3008/health-scoring?embed=true',
    title: 'Health Scoring',
    badge: '7 configurable components',
    description: 'Customer health tracking'
  },
  {
    url: 'http://localhost:3008/tasks?embed=true',
    title: 'Task Management',
    badge: '18 active tasks',
    description: 'Active tasks tracking'
  },
  {
    url: 'http://localhost:3008/playbooks?embed=true',
    title: 'Playbook Library',
    badge: '6 proven playbooks',
    description: 'Automated best practices'
  }
];

export function ScreenshotCarousel() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  // Auto-advance carousel (pauses on hover)
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % liveModules.length);
    }, 5000); // Slower for live previews

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % liveModules.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + liveModules.length) % liveModules.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div
        className={`relative rounded-2xl overflow-hidden border-2 shadow-2xl ${
          isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-100'
        }`}
        style={{ aspectRatio: '16/9', minHeight: '500px' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {/* Live Platform Preview */}
            <div className="relative w-full h-full overflow-hidden">
              {/* Loading state */}
              <div className={`absolute inset-0 flex items-center justify-center ${
                isDark ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 border-4 border-brand-orange/30 border-t-brand-orange rounded-full animate-spin mx-auto" />
                  <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Loading {liveModules[currentIndex].title}...
                  </div>
                </div>
              </div>

              {/* Live iframe - embed mode hides navigation */}
              <iframe
                src={liveModules[currentIndex].url}
                className="absolute inset-0 w-full h-full border-0"
                title={liveModules[currentIndex].title}
                sandbox="allow-same-origin allow-scripts allow-forms"
                loading="lazy"
                onLoad={(e) => {
                  // Hide loading state when iframe loads
                  const loadingDiv = e.currentTarget.previousSibling as HTMLElement;
                  if (loadingDiv) loadingDiv.style.display = 'none';
                }}
              />

              {/* Subtle overlay to indicate it's a preview (optional - prevents interaction) */}
              <div className="absolute inset-0 bg-transparent pointer-events-none" />

              {/* Gradient overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Title overlay with "Live Preview" badge */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/20 border border-green-500/30">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-green-400 text-xs font-bold">LIVE</span>
                    </div>
                    <span className="text-white/60 text-xs">{liveModules[currentIndex].description}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg">
                    {liveModules[currentIndex].title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {liveModules[currentIndex].badge}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
            isDark
              ? 'bg-gray-900/80 hover:bg-gray-900 text-white'
              : 'bg-white/80 hover:bg-white text-gray-900'
          } shadow-lg`}
          aria-label="Previous screenshot"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={goToNext}
          className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 ${
            isDark
              ? 'bg-gray-900/80 hover:bg-gray-900 text-white'
              : 'bg-white/80 hover:bg-white text-gray-900'
          } shadow-lg`}
          aria-label="Next screenshot"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {liveModules.map((module, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-brand-orange'
                : isDark
                ? 'w-2 bg-gray-600 hover:bg-gray-500'
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to ${module.title}`}
          />
        ))}
      </div>

      {/* Live Preview Info */}
      <div className={`mt-3 text-center text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
        <div className="flex items-center justify-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span>Live platform preview - See it in action</span>
        </div>
      </div>
    </div>
  );
}
