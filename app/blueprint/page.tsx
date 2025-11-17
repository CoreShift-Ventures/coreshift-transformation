'use client';

import { useState } from 'react';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FileText, Check, ArrowRight, Target, Clock, Layers, Map, Shield, Zap } from 'lucide-react';

export default function BlueprintPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useState(() => {
    setMounted(true);
  });

  const isDark = mounted && theme === 'dark';

  const blueprintPhases = [
    {
      phase: 'Phase 1',
      title: 'Current State Assessment',
      duration: '1-2 days',
      deliverables: [
        'CS team structure and workflow audit',
        'Tool stack and integration analysis',
        'Customer health scoring evaluation',
        'Data infrastructure assessment'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Gap Analysis & Architecture',
      duration: '2-3 days',
      deliverables: [
        'Identify revenue leak sources',
        'Design target state architecture',
        'Technology stack recommendations',
        'Process optimization roadmap'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Transformation Roadmap',
      duration: '2-3 days',
      deliverables: [
        'Phased implementation plan',
        'Resource and budget requirements',
        'Risk mitigation strategies',
        'Success metrics and KPIs'
      ]
    }
  ];

  const whatYouGet = [
    {
      icon: Map,
      title: '50+ Page Strategic Blueprint',
      description: 'Comprehensive analysis of your current state, gap analysis, and detailed transformation roadmap with prioritized action items.'
    },
    {
      icon: Target,
      title: 'Custom Architecture Design',
      description: 'Tailored CS operations architecture designed for your specific business model, customer segments, and growth stage.'
    },
    {
      icon: Layers,
      title: 'Technology Stack Recommendations',
      description: 'Evaluation of build vs buy decisions, integration requirements, and vendor recommendations based on your needs.'
    },
    {
      icon: Clock,
      title: 'Implementation Timeline',
      description: 'Week by week execution plan with milestones, dependencies, and resource allocation for each phase.'
    },
    {
      icon: Shield,
      title: 'Risk Assessment & Mitigation',
      description: 'Identification of potential blockers, change management strategies, and contingency planning.'
    },
    {
      icon: Zap,
      title: 'Quick Win Identification',
      description: 'Immediate actions you can take to stop revenue leak while building long term transformation.'
    }
  ];

  const idealFor = [
    {
      title: 'Early Stage SaaS',
      description: 'Building CS from 0 to 100 and need proven frameworks to avoid costly mistakes',
      fit: 'Perfect Fit'
    },
    {
      title: 'Growing Teams',
      description: 'Scaling CS operations and need strategic architecture before adding headcount',
      fit: 'Perfect Fit'
    },
    {
      title: 'Platform Evaluators',
      description: 'Considering building vs buying and need expert guidance on the right path',
      fit: 'Perfect Fit'
    },
    {
      title: 'DIY Implementers',
      description: 'Have engineering resources and want to build in house with expert guidance',
      fit: 'Perfect Fit'
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className={`relative pt-32 pb-16 px-6 ${isDark ? 'bg-gradient-to-b from-gray-950 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-4">
                <FileText className="w-4 h-4 text-brand-orange" />
                <span className="text-sm font-semibold text-brand-orange">
                  CoreShift Blueprint
                </span>
              </div>

              {/* Headline */}
              <h1 className={`text-3xl md:text-4xl font-bold mb-4 leading-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Strategy First Architecture For Post Sales Excellence
              </h1>

              {/* Subheadline */}
              <p className={`text-base max-w-3xl mx-auto mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Get a custom transformation roadmap built by leaders who scaled post-sales operations at enterprise companies managing $100M+ ARR. Know exactly what to build, buy, or optimize before spending a dollar.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-lg font-semibold text-sm hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg"
                >
                  Get Your Blueprint
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/audit"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105 ${
                    isDark
                      ? 'bg-gray-800 text-white border border-gray-700 hover:border-brand-orange'
                      : 'bg-white text-brand-charcoal border border-gray-200 hover:border-brand-orange shadow-lg'
                  }`}
                >
                  Start Free Audit
                </a>
              </div>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-4 mt-12"
            >
              {[
                { stat: '7-10 days', label: 'Delivery Timeline' },
                { stat: '$1,000', label: 'One Time Investment' },
                { stat: '20+ years', label: 'Enterprise CS Expertise' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`p-5 rounded-xl text-center ${
                    isDark
                      ? 'bg-gray-900 border border-gray-800'
                      : 'bg-white border border-gray-200 shadow-lg'
                  }`}
                >
                  <div className={`text-2xl font-bold mb-1 text-brand-orange`}>
                    {item.stat}
                  </div>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className={`py-16 px-6 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                What You Get
              </h2>
              <p className={`text-sm max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                A complete transformation roadmap designed specifically for your business
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {whatYouGet.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`p-6 rounded-xl ${
                      isDark
                        ? 'bg-gray-950 border border-gray-800'
                        : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <Icon className="w-10 h-10 text-brand-orange mb-3" />
                    <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Blueprint Process */}
        <section className={`py-16 px-6 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                The Blueprint Process
              </h2>
              <p className={`text-sm max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Three phase approach to design your transformation roadmap
              </p>
            </motion.div>

            <div className="space-y-4">
              {blueprintPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-xl ${
                    isDark
                      ? 'bg-gray-900 border border-gray-800'
                      : 'bg-white border border-gray-200 shadow-lg'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <div className="inline-flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-bold">
                          {phase.phase}
                        </span>
                        <h3 className={`text-lg font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                          {phase.title}
                        </h3>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-semibold">{phase.duration}</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-2.5">
                    {phase.deliverables.map((deliverable, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal For Section */}
        <section className={`py-16 px-6 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Ideal For
              </h2>
              <p className={`text-sm max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Blueprint is perfect for teams who need strategic direction before execution
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5">
              {idealFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-6 rounded-xl border-2 ${
                    isDark
                      ? 'bg-gray-950 border-brand-orange/30'
                      : 'bg-white border-brand-orange/30 shadow-lg'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className={`text-base font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      {item.title}
                    </h3>
                    <span className="px-2.5 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold whitespace-nowrap">
                      {item.fit}
                    </span>
                  </div>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Blueprint Preview */}
        <section className={`py-16 px-6 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Sample Blueprint Sections
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                'Executive Summary',
                'Current State Assessment',
                'Gap Analysis',
                'Target Architecture',
                'Technology Evaluation',
                'Implementation Roadmap',
                'Resource Requirements',
                'Risk Mitigation',
                'Success Metrics'
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className={`p-5 rounded-xl text-center ${
                    isDark
                      ? 'bg-gray-900 border border-gray-800'
                      : 'bg-white border border-gray-200 shadow-lg'
                  }`}
                >
                  <FileText className="w-7 h-7 text-brand-orange mx-auto mb-2" />
                  <h3 className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {section}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={`py-16 px-6 ${isDark ? 'bg-gradient-to-br from-brand-orange to-brand-orange-dark' : 'bg-gradient-to-br from-brand-orange to-brand-orange-dark'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Ready to Get Your Custom Roadmap?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm text-white/90 mb-6"
            >
              $1,000 investment. 7 to 10 days delivery. 20+ years of enterprise CS expertise productized into your custom transformation blueprint.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-orange rounded-lg font-semibold text-sm hover:bg-gray-50 transition-all hover:scale-105 shadow-xl"
              >
                Get Your Blueprint
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-sm hover:bg-white/10 transition-all hover:scale-105"
              >
                Explore All Paths
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
