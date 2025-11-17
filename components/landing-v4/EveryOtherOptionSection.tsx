'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Users, Code, Zap, Award, Shield, Target } from 'lucide-react';

const coreShiftDifference = [
  {
    icon: Award,
    title: 'Strategy + Execution',
    description: "We don't just consult, we build & deliver"
  },
  {
    icon: Shield,
    title: 'Process First, Then Tech',
    description: 'Transform the process, then automate with AI'
  },
  {
    icon: Target,
    title: 'You Own Everything',
    description: 'Your infrastructure, zero vendor lock-in'
  }
];

export default function EveryOtherOptionSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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

  return (
    <section className={`py-16 px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
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

        {/* 3-Panel Competitor Comparison */}
        <motion.div
          className="grid md:grid-cols-3 gap-5 mb-10"
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
                className={`rounded-2xl p-6 border flex flex-col ${
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

        {/* CoreShift Difference */}
        <motion.div
          className={`p-8 rounded-2xl ${
            isDark
              ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-[#ec5f2b]/30 shadow-xl shadow-black/20'
              : 'bg-white/80 border border-[#ec5f2b]/30 shadow-xl shadow-gray-500/5'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className={`text-xl md:text-2xl font-bold text-center mb-8 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            The <span className={isDark ? 'text-white' : 'text-brand-charcoal'}>Core</span><span className="text-[#ec5f2b]">Shift</span> Difference
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {coreShiftDifference.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">
                  <item.icon className="w-12 h-12 text-[#ec5f2b]" strokeWidth={1.5} />
                </div>
                <h4 className={`font-bold text-lg mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  {item.title}
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className={`text-xl md:text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            Stop renting solutions. <span className="text-[#ec5f2b]">Start owning transformation.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
