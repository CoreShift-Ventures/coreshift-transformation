// @ts-nocheck
'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Shield, Database, Cloud, Cpu, Lock, Network } from 'lucide-react';

export function TechnologyStack() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const stack = [
    { icon: Database, title: 'Modern Architecture', desc: 'Scalable, cloud-native systems built for growth' },
    { icon: Cpu, title: 'AI & Automation', desc: 'Intelligent workflows that learn and adapt' },
    { icon: Lock, title: 'Production-Grade Security', desc: 'Role-based access, encryption, audit trails' },
    { icon: Cloud, title: 'Your Infrastructure', desc: 'Deploy to your cloud or let us manage it' },
    { icon: Shield, title: 'Compliance Built-In', desc: 'Security and compliance from day one' },
    { icon: Network, title: 'Seamless Integration', desc: 'Connects with your existing tools and systems' }
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
            <span className="text-[#ec5f2b]">Built for Scale,</span> Powered by AI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-sm max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}
          >
            Production-ready systems with the flexibility to grow with your business
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stack.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                className={`rounded-xl p-6 border transition-all hover:scale-[1.02] ${
                  isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                } shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Icon className="w-8 h-8 text-[#ec5f2b] mb-3" />
                <h3 className={`text-sm font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{item.title}</h3>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
