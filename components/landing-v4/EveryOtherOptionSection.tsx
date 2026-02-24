'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Brain, Plug, Clock, Shield, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';

const gapCards = [
  {
    number: '01',
    icon: Brain,
    title: 'Process Knowledge',
    body: 'ChatGPT has no idea that Vendor 47 uses a non-standard date format, or that your 15th-of-month run is 3x larger than usual. We build agents after a 2-week Discovery Sprint that encodes exactly how your operation runs.',
    callout: 'ChatGPT knows GRN reconciliation in theory. Our agent knows yours.'
  },
  {
    number: '02',
    icon: Plug,
    title: 'System Integration',
    body: 'ChatGPT lives in a chat window. Your agent needs to connect to SAP via VPN, handle API rate limits, authenticate with 6 portals, and recover gracefully when NetSuite times out. We build and maintain all of that.',
    callout: 'AI can describe the bridge. We build it and we maintain it.'
  },
  {
    number: '03',
    icon: Clock,
    title: 'Scheduled Execution',
    body: 'Every AI tool waits for a human to press go. Our agents run on cron schedules, processing records, posting heartbeats, flagging exceptions, while your team is at lunch, on holiday, or asleep.',
    callout: 'AI tools wait for instructions. Agents don\'t.'
  },
  {
    number: '04',
    icon: Shield,
    title: 'Production Reliability',
    body: 'A wrong ChatGPT answer is an inconvenience. A wrong agent run at 3am touching SAP billing documents is a business problem. Every CoreShift agent has error handling, retry logic, anomaly detection, and Command Center monitoring.',
    callout: 'We engineer for the difference between inconvenience and disaster.'
  },
  {
    number: '05',
    icon: RefreshCw,
    title: 'Permanent Maintenance',
    body: 'When SAP updates, a vendor changes their portal UI, or a new business rule is added, someone must update the agent. Our subscription model means we own maintenance permanently. Your agent keeps working because our revenue depends on it.',
    callout: 'Any developer can build an agent. Nobody wants to maintain it forever. We do.'
  }
];

export default function EveryOtherOptionSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / gapCards.length;
      carouselRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
      setCurrentMobileIndex(index);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.scrollWidth / gapCards.length;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentMobileIndex(newIndex);
    }
  };

  return (
    <section id="why" className={`py-12 md:py-16 px-4 md:px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${
              isDark ? 'bg-gray-900 text-gray-400 border border-gray-800' : 'bg-gray-100 text-gray-600 border border-gray-200'
            }`}>
              THE GAP
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
          >
            AI alone isn't enough.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-sm md:text-base max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}
          >
            ChatGPT knows everything about your process in theory. Our agents know how yours actually works.
          </motion.p>
        </div>

        {/* Desktop Grid - 5 cards in 3+2 layout */}
        <motion.div
          className="hidden md:block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
              }
            }
          }}
        >
          {/* First row - 3 cards */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">
            {gapCards.slice(0, 3).map((card, index) => (
              <GapCard key={index} card={card} index={index} isDark={isDark} />
            ))}
          </div>
          {/* Second row - 2 cards centered */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
            {gapCards.slice(3, 5).map((card, index) => (
              <GapCard key={index + 3} card={card} index={index + 3} isDark={isDark} />
            ))}
          </div>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {gapCards.map((card, index) => {
              const Icon = card.icon;
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
                    {/* Number + Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-mono ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                        {card.number} / 05
                      </span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isDark ? 'bg-[#ec5f2b]/10' : 'bg-[#ec5f2b]/10'
                      }`}>
                        <Icon className="w-5 h-5 text-[#ec5f2b]" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      {card.title}
                    </h3>

                    <p className={`text-sm leading-relaxed mb-4 flex-grow ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {card.body}
                    </p>

                    {/* Callout */}
                    <div className={`pt-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                      <p className={`text-sm italic ${isDark ? 'text-[#ec5f2b]/80' : 'text-[#ec5f2b]'}`}>
                        "{card.callout}"
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Carousel Indicators */}
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

            <div className="flex gap-1.5">
              {gapCards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentMobileIndex
                      ? 'bg-[#ec5f2b] w-5'
                      : isDark ? 'bg-gray-700 w-2 hover:bg-gray-600' : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollToCard(Math.min(gapCards.length - 1, currentMobileIndex + 1))}
              disabled={currentMobileIndex === gapCards.length - 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                currentMobileIndex === gapCards.length - 1
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

// Separate component for desktop cards
function GapCard({ card, index, isDark }: { card: typeof gapCards[0], index: number, isDark: boolean }) {
  const Icon = card.icon;

  return (
    <motion.div
      className={`rounded-2xl p-5 md:p-6 border flex flex-col ${
        isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
      } shadow-lg hover:shadow-xl transition-shadow duration-300`}
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
      {/* Number + Icon */}
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs font-mono ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
          {card.number} / 05
        </span>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
          isDark ? 'bg-[#ec5f2b]/10' : 'bg-[#ec5f2b]/10'
        }`}>
          <Icon className="w-5 h-5 text-[#ec5f2b]" strokeWidth={1.5} />
        </div>
      </div>

      <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
        {card.title}
      </h3>

      <p className={`text-sm leading-relaxed mb-4 flex-grow ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {card.body}
      </p>

      {/* Callout */}
      <div className={`pt-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <p className={`text-sm italic ${isDark ? 'text-[#ec5f2b]/80' : 'text-[#ec5f2b]'}`}>
          "{card.callout}"
        </p>
      </div>
    </motion.div>
  );
}
