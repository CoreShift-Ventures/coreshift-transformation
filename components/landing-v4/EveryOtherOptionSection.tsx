'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Users, Code, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EveryOtherOptionSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const competitors = [
    {
      category: 'Consultancies',
      icon: Users,
      problems: [
        'Strategy decks, no execution',
        '12-18 month timelines',
        'Millions spent, capability walks away',
        "You're left implementing alone"
      ],
      result: 'You pay to rent expertise that disappears.'
    },
    {
      category: 'Generic SaaS',
      icon: Code,
      problems: [
        'Rigid workflows force conformity',
        'Your process dies to fit their box',
        'Vendor lock-in forever',
        'Generic = zero competitive edge'
      ],
      result: 'Another tool your team works around.'
    },
    {
      category: 'Dev Agencies',
      icon: Zap,
      problems: [
        "Build what you ask, don't challenge",
        '6-12 months to see anything',
        'No process expertise',
        'By launch, needs have changed'
      ],
      result: 'Slow execution while revenue bleeds.'
    }
  ];

  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / competitors.length;
      carouselRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
      setCurrentMobileIndex(index);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.scrollWidth / competitors.length;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentMobileIndex(newIndex);
    }
  };

  return (
    <section className={`py-12 md:py-16 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
          >
            Every Other Option Costs You
            <br />
            <span className="text-[#ec5f2b]">More Money and More Time</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-sm max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}
          >
            You've tried the alternatives. Here's why they keep failing:
          </motion.p>
        </div>

        {/* 3-Panel Competitor Comparison - Desktop Grid */}
        <motion.div
          className="hidden md:grid md:grid-cols-3 gap-4 md:gap-5 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
              }
            }
          }}
        >
          {competitors.map((comp, index) => {
            const Icon = comp.icon;

            return (
              <motion.div
                key={index}
                className={`rounded-2xl p-5 md:p-6 border flex flex-col ${
                  isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                } shadow-lg`}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: 'spring', stiffness: 100, damping: 20 }
                  }
                }}
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-[#ec5f2b]" strokeWidth={1.5} />
                </div>
                <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  {comp.category}
                </h3>
                <ul className="space-y-2.5 mb-6 flex-grow">
                  {comp.problems.map((problem, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {problem}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className={`pt-4 mt-auto border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                  <p className={`text-sm font-semibold italic ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                    → {comp.result}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-10">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {competitors.map((comp, index) => {
              const Icon = comp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[85vw] snap-center"
                >
                  <div className={`rounded-2xl p-5 border flex flex-col h-full ${
                    isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                  } shadow-lg`}>
                    <div className="mb-3">
                      <Icon className="w-8 h-8 text-[#ec5f2b]" strokeWidth={1.5} />
                    </div>
                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      {comp.category}
                    </h3>
                    <ul className="space-y-2 mb-4 flex-grow">
                      {comp.problems.map((problem, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {problem}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className={`pt-3 mt-auto border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                      <p className={`text-sm font-semibold italic ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                        → {comp.result}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Carousel Indicators & Navigation */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={() => scrollToCard(Math.max(0, currentMobileIndex - 1))}
              disabled={currentMobileIndex === 0}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                currentMobileIndex === 0
                  ? isDark ? 'bg-gray-800 text-gray-600' : 'bg-gray-100 text-gray-300'
                  : isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {competitors.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentMobileIndex
                      ? 'bg-[#ec5f2b] w-6'
                      : isDark ? 'bg-gray-700 w-2 hover:bg-gray-600' : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollToCard(Math.min(competitors.length - 1, currentMobileIndex + 1))}
              disabled={currentMobileIndex === competitors.length - 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                currentMobileIndex === competitors.length - 1
                  ? isDark ? 'bg-gray-800 text-gray-600' : 'bg-gray-100 text-gray-300'
                  : isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
