'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, LayoutDashboard, Heart, CheckSquare, BookOpen, Lock, ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';

const demoModules = [
  {
    title: 'Dashboard (NRR Target)',
    icon: LayoutDashboard,
    url: 'http://localhost:3008/dashboard?embed=true',
    stats: ['Current: 105%', 'Target: 118%', 'Real-time progress tracking'],
    badge: 'Included in Demo',
    color: '#ec5f2b'
  },
  {
    title: 'Goals Module',
    icon: Target,
    url: 'http://localhost:3008/goals?embed=true',
    stats: ['40 sample goals', '10 customers', '4 timeframes (30/90/180/year)'],
    badge: 'Included in Demo',
    color: '#ec5f2b'
  },
  {
    title: 'Health Scoring',
    icon: Heart,
    url: 'http://localhost:3008/health-scoring?embed=true',
    stats: ['10 customers tracked', '3 at-risk, 3 medium-risk', '7 configurable components'],
    badge: 'Included in Demo',
    color: '#dc2626'
  },
  {
    title: 'Task Management',
    icon: CheckSquare,
    url: 'http://localhost:3008/tasks?embed=true',
    stats: ['18 active tasks', '$625K ARR at risk', 'Goal linkage enabled'],
    badge: 'Included in Demo',
    color: '#ec5f2b'
  },
  {
    title: 'Playbook Library',
    icon: BookOpen,
    url: 'http://localhost:3008/playbooks?embed=true',
    stats: ['6 proven playbooks', '88% success rate', 'Auto-create tasks'],
    badge: 'Included in Demo',
    color: '#ec5f2b'
  }
];

interface LiveDemoSectionProps {
  onRequestDemo?: () => void;
}

export function LiveDemoSection({ onRequestDemo }: LiveDemoSectionProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  const handleCardClick = () => {
    onRequestDemo?.();
  };

  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #ec5f2b 1px, transparent 1px), linear-gradient(to bottom, #ec5f2b 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
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
            className="inline-block px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-semibold text-sm mb-6"
          >
            Live & Interactive
          </motion.div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-5 leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            See What's Inside:<br />
            <span className="gradient-text">Full Platform Access</span>
          </h2>
          <p className={`text-base max-w-3xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Real platform features. Request access to explore everything included in your demo.
          </p>
        </motion.div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {demoModules.map((module, index) => (
            <motion.div
              key={module.title}
              onClick={handleCardClick}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`group rounded-2xl border hover:border-brand-orange transition-all cursor-pointer shadow-lg hover:shadow-2xl relative overflow-hidden ${
                isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-brand-border'
              }`}
            >
              {/* Live Preview */}
              <div className={`relative h-48 overflow-hidden rounded-t-2xl ${
                isDark ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                {/* Loading state */}
                <div className={`absolute inset-0 flex items-center justify-center ${
                  isDark ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <div className="text-center">
                    <div className="w-8 h-8 border-3 border-brand-orange/30 border-t-brand-orange rounded-full animate-spin mx-auto mb-2" />
                    <div className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                      Loading preview...
                    </div>
                  </div>
                </div>

                {/* Live iframe - embed mode hides navigation */}
                <iframe
                  src={module.url}
                  className="absolute inset-0 w-full h-full border-0 scale-[0.5] origin-top-left"
                  style={{
                    width: '200%',
                    height: '200%',
                    pointerEvents: 'none'
                  }}
                  title={module.title}
                  sandbox="allow-same-origin allow-scripts"
                  loading="lazy"
                  onLoad={(e) => {
                    const loadingDiv = e.currentTarget.previousSibling as HTMLElement;
                    if (loadingDiv) loadingDiv.style.display = 'none';
                  }}
                />

                {/* Lock overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="w-12 h-12 rounded-full bg-brand-orange/90 flex items-center justify-center shadow-lg"
                  >
                    <Lock className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* LIVE badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-400 text-[10px] font-bold">LIVE</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                {/* Shimmer effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ${
                  isDark ? 'via-white/5' : 'via-white/10'
                }`} />

                {/* Header */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <motion.div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${module.color} 0%, ${module.color}dd 100%)`
                    }}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <module.icon className="w-7 h-7" />
                  </motion.div>
                </div>

                {/* Badge */}
                <div className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-orange/10 text-brand-orange mb-4 border border-brand-orange/20">
                  {module.badge}
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-4 group-hover:text-brand-orange transition-colors leading-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  {module.title}
                </h3>

                {/* Stats */}
                <div className="space-y-3 mb-6">
                  {module.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className={`flex items-center gap-3 text-sm ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-dark flex-shrink-0" />
                      <span>{stat}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Footer CTA */}
                <div className={`pt-4 border-t ${isDark ? 'border-gray-800' : 'border-brand-border'}`}>
                  <div className="flex items-center justify-between text-sm font-semibold text-brand-orange">
                    <span>Click to Get Access</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={handleCardClick}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white font-semibold text-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <span>Get Access to All Features</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
