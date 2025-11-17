'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Shield, Brain, Zap, Target, Check } from 'lucide-react';

export function CoreShiftDifference() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const features = [
    {
      icon: Shield,
      title: 'Production-Ready Architecture',
      points: [
        'Built on modern, proven technology stack',
        'Scales from 10 to 10,000 users seamlessly',
        'Security and compliance built-in from day one',
        'Professional-grade performance and reliability'
      ]
    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      points: [
        'Smart lead scoring & prioritization',
        'Automated workflow orchestration',
        'Predictive analytics & insights',
        'Intelligent routing & task assignment'
      ]
    },
    {
      icon: Zap,
      title: 'Deployed in Weeks, Not Months',
      points: [
        'Working prototype in 2 weeks',
        'Full system live in 4-6 weeks',
        'Continuous iteration from day one',
        'No 12-month waterfall nightmares'
      ]
    },
    {
      icon: Target,
      title: 'Built for YOUR Process',
      points: [
        'Custom to your exact workflows',
        'Not generic templates',
        'Adapts as your business evolves',
        'Your competitive process = your advantage'
      ]
    }
  ];

  return (
    <section className={`py-16 px-6 relative ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
          >
            Business Process Transformation.
            <br />
            <span className="text-[#ec5f2b]">Enterprise-Grade. AI-Powered. Fast.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-sm max-w-3xl mx-auto mt-6 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}
          >
            We transform your business processes with the perfect combination of enterprise quality, artificial intelligence, and startup speed.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className={`rounded-2xl p-6 border transition-all hover:scale-[1.02] ${
                  isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                } shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ec5f2b] to-[#d94f1f] rounded-xl shadow-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {feature.title}
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {feature.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#ec5f2b] flex-shrink-0 mt-0.5" />
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className={`mt-10 rounded-2xl p-6 border text-center ${
            isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className={`text-lg font-bold italic ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            "We don't digitize broken processes.
            <br />
            <span className="text-[#ec5f2b]">We transform them."</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
