'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, FileText, BarChart, ArrowRight, Zap, CheckCircle } from 'lucide-react';
import { useTheme } from 'next-themes';

const workflowSteps = [
  {
    number: 1,
    icon: Target,
    title: 'Set Goals',
    description: 'Define customer objectives and organizational targets',
    features: ['Multi-timeframe tracking', 'Goal hierarchies', 'Progress metrics'],
    color: '#ec5f2b',
    gradient: 'from-orange-500/20 to-red-500/20'
  },
  {
    number: 2,
    icon: FileText,
    title: 'Smart Planning',
    description: 'Automated success plan generation',
    features: ['AI-powered plans', 'Template library', 'Dynamic workflows'],
    color: '#8b5cf6',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    number: 3,
    icon: BarChart,
    title: 'Track & Optimize',
    description: 'Real-time monitoring and insights',
    features: ['Live dashboards', 'Predictive analytics', 'Health scoring'],
    color: '#16a34a',
    gradient: 'from-green-500/20 to-emerald-500/20'
  }
];

export function GoalsWorkflowSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <section className={`relative py-24 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-brand-orange/5' : 'bg-brand-orange/10'} animate-pulse`} style={{ animationDuration: '4s' }} />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-purple-500/5' : 'bg-purple-500/10'} animate-pulse`} style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-semibold text-sm mb-6 border border-brand-orange/20"
          >
            <Zap className="w-4 h-4" />
            <span>How It Works</span>
          </motion.div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-5 leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Simple. Powerful. <span className="gradient-text">Automated.</span>
          </h2>
          <p className={`text-base max-w-3xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Enterprise-grade workflow that adapts to your team's maturity
          </p>
        </motion.div>

        {/* Visual Workflow */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Connecting Arrow - Centered */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-20 transform -translate-y-1/2">
                    <motion.div
                      initial={{ x: -5, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <ArrowRight className="w-5 h-5 text-brand-orange" />
                    </motion.div>
                  </div>
                )}

                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`relative rounded-2xl p-6 transition-all duration-300 group overflow-hidden flex-1 flex flex-col ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-brand-orange/50'
                      : 'bg-white border border-gray-200 hover:border-brand-orange/50 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none`} />

                  {/* Number badge - Compact */}
                  <div className="relative mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, delay: index * 0.1 + 0.1 }}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-xl font-bold text-white text-base shadow-md relative"
                      style={{
                        background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}dd 100%)`
                      }}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Icon - Compact */}
                  <div className="relative mb-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative inline-flex items-center justify-center w-16 h-16 rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}15 0%, ${step.color}08 100%)`
                      }}
                    >
                      <step.icon className="w-8 h-8 relative z-10" style={{ color: step.color }} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className={`font-bold text-xl mb-2 relative z-10 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm mb-4 leading-relaxed relative z-10 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                    {step.description}
                  </p>

                  {/* Features list - Compact */}
                  <div className="space-y-1.5 relative z-10 flex-1">
                    {step.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2 + i * 0.03 }}
                        className="flex items-center gap-2 text-xs"
                      >
                        <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: step.color }} />
                        <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom accent - Subtle */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA or stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-gray-100 border border-gray-200'}`}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Deploy in under 4 weeks
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
