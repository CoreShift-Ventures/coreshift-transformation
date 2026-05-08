'use client';

import { useState, useEffect } from 'react';
import { NavigationV4 } from '@/components/landing-v4/NavigationV4';
import { Footer } from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Target, Check, ArrowRight, Users, TrendingUp, Zap, Shield, Clock, Award, BarChart3, BookOpen, Lightbulb, Brain, Workflow, Rocket } from 'lucide-react';

export default function AdvisoryPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  const advisoryServices = [
    {
      icon: Brain,
      title: 'Strategic Operations Leadership',
      description: 'Embedded COO-level guidance to design and optimize your core business operations',
      details: [
        'Business process audit and optimization roadmap',
        'Cross-functional workflow design and automation',
        'Executive reporting and operational KPI frameworks',
        'Organizational structure and team alignment'
      ],
      commitment: '10-15 hours/week',
      duration: '3-12 months'
    },
    {
      icon: Workflow,
      title: 'Transformation Execution Partner',
      description: 'Hands-on implementation support to build and deploy your operational systems',
      details: [
        'End-to-end process blueprint development',
        'Platform selection and technical architecture',
        'Workflow automation and AI integration',
        'Change management and team training'
      ],
      commitment: '15-20 hours/week',
      duration: '6-12 months'
    },
    {
      icon: Rocket,
      title: 'Scaling Operations Consultant',
      description: 'Strategic guidance to scale your operations without proportional headcount growth',
      details: [
        'Revenue leak audit and prevention strategies',
        'Efficiency optimization and cost reduction',
        'Team productivity and collaboration frameworks',
        'Growth infrastructure and scaling playbooks'
      ],
      commitment: '10-15 hours/week',
      duration: '3-6 months'
    }
  ];

  const expertise = [
    {
      icon: Award,
      title: 'Enterprise Operations Leadership',
      description: '20+ years building and scaling operations at high-growth and enterprise companies'
    },
    {
      icon: BarChart3,
      title: 'Proven Scale Experience',
      description: 'Led operations transformations managing $100M+ in revenue and 500+ enterprise accounts'
    },
    {
      icon: Shield,
      title: 'Battle-Tested Frameworks',
      description: 'Productized playbooks from Fortune 500 companies and high-growth SaaS businesses'
    },
    {
      icon: Lightbulb,
      title: 'AI-Powered Operations',
      description: 'Deep expertise in workflow automation, AI integration, and intelligent process design'
    }
  ];

  const engagementModels = [
    {
      title: 'Fractional Retainer',
      commitment: '10-20 hours/week',
      duration: '3-12 months',
      bestFor: 'Ongoing strategic guidance and execution support',
      pricing: 'Custom based on scope'
    },
    {
      title: 'Project Based',
      commitment: 'Fixed scope',
      duration: '4-12 weeks',
      bestFor: 'Specific initiatives like platform implementation or process redesign',
      pricing: 'Fixed fee per project'
    },
    {
      title: 'Strategic Advisory',
      commitment: '5-10 hours/month',
      duration: '6-12 months',
      bestFor: 'Executive coaching and strategic decision support',
      pricing: 'Monthly retainer'
    }
  ];

  const idealFor = [
    {
      title: 'Scaling Businesses ($2M-$50M)',
      description: 'Need experienced operations leadership but not ready for full-time COO hire',
      scenarios: [
        'Building operational infrastructure from scratch',
        'Scaling team from 10 to 100+ employees',
        'Transitioning from founder-led to process-driven'
      ]
    },
    {
      title: 'Operational Transformation',
      description: 'Existing operations are chaotic and need strategic restructuring',
      scenarios: [
        'Revenue leaks and inefficiencies costing 6-7 figures',
        'Teams working in silos with no alignment',
        'Manual processes preventing scalability'
      ]
    },
    {
      title: 'Growth & Expansion Phase',
      description: 'Preparing for rapid growth and need scalable operational foundation',
      scenarios: [
        'Pre-fundraise operational readiness',
        'Market expansion preparation',
        'M&A integration support'
      ]
    }
  ];

  return (
    <>
      <NavigationV4 />
      <main className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'}`}>
        {/* Hero Section */}
        <section className={`relative pt-32 pb-20 px-6 overflow-hidden ${isDark ? 'bg-gradient-to-b from-gray-950 to-black' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
          {/* Subtle background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 ${isDark ? 'bg-brand-orange/10' : 'bg-brand-orange/5'}`} />
            <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 ${isDark ? 'bg-purple-500/10' : 'bg-purple-500/5'}`} />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-4">
                <Target className="w-4 h-4 text-brand-orange" />
                <span className="text-sm font-semibold text-brand-orange">
                  Fractional COO Services
                </span>
              </div>

              {/* Headline */}
              <h1 className={`text-3xl md:text-4xl font-bold mb-4 leading-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Your Fractional COO Without the Executive Overhead
              </h1>

              {/* Subheadline */}
              <p className={`text-base max-w-3xl mx-auto mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Embedded operations leadership and hands-on execution support. Get 20+ years of enterprise transformation expertise exactly when you need it.
              </p>

              {/* CTA */}
              <div className="flex justify-center">
                <a
                  href="/contact?intent=advisory"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-lg font-semibold text-base transition-all duration-300 hover:scale-105 overflow-hidden"
                  style={{
                    boxShadow: '0 4px 14px 0 rgba(236, 95, 43, 0.25)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(236, 95, 43, 0.4), 0 0 40px rgba(236, 95, 43, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(236, 95, 43, 0.25)';
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ec5f2b] to-[#ff6b35] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Schedule Consultation</span>
                  <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-4 gap-6 mt-16"
            >
              {[
                { stat: '20+ years', label: 'Operations Leadership' },
                { stat: '$100M+', label: 'Revenue Scaled' },
                { stat: '500+', label: 'Enterprise Clients' },
                { stat: 'Flexible', label: 'Engagement Terms' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`relative p-6 rounded-xl text-center backdrop-blur-sm ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800/50'
                      : 'bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 shadow-xl'
                  }`}
                  style={{
                    boxShadow: isDark
                      ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                      : '0 4px 20px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className={`relative text-3xl font-bold mb-2 bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent`}>
                    {item.stat}
                  </div>
                  <div className={`relative text-xs font-medium tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Advisory Services Section */}
        <section className={`py-20 px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                How We Work Together
              </h2>
              <p className={`text-base max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Flexible engagement models designed to fit your transformation journey
              </p>
            </motion.div>

            <div className="space-y-6">
              {advisoryServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className={`group relative p-8 rounded-2xl ${
                      isDark
                        ? 'bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/50'
                        : 'bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50'
                    }`}
                    style={{
                      boxShadow: isDark
                        ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                        : '0 4px 20px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 border ${
                          isDark ? 'border-brand-orange/20' : 'border-brand-orange/20'
                        } shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                          <Icon className="w-7 h-7 text-brand-orange" strokeWidth={2} />
                        </div>
                      </div>

                      <div className="flex-grow">
                        <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                          {service.title}
                        </h3>
                        <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {service.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-2.5 mb-4">
                          {service.details.map((detail, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                              <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${
                            isDark ? 'bg-gray-900' : 'bg-white border border-gray-200'
                          }`}>
                            <Clock className="w-3.5 h-3.5 text-brand-orange" />
                            <span className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              {service.commitment}
                            </span>
                          </div>
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${
                            isDark ? 'bg-gray-900' : 'bg-white border border-gray-200'
                          }`}>
                            <BookOpen className="w-3.5 h-3.5 text-brand-orange" />
                            <span className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              {service.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className={`py-20 px-6 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Why Choose Our Fractional COO Service
              </h2>
              <p className={`text-base max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Two decades of operations leadership productized into fractional executive services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className={`group relative p-8 rounded-2xl ${
                      isDark
                        ? 'bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/50'
                        : 'bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50'
                    }`}
                    style={{
                      boxShadow: isDark
                        ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                        : '0 4px 20px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 border ${
                        isDark ? 'border-brand-orange/20' : 'border-brand-orange/20'
                      } shadow-lg mb-5`}>
                        <Icon className="w-7 h-7 text-brand-orange" strokeWidth={2} />
                      </div>
                      <h3 className={`text-lg font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className={`py-20 px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Engagement Models
              </h2>
              <p className={`text-base max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Flexible models to fit your timeline and budget
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {engagementModels.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className={`group relative p-8 rounded-2xl ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/50'
                      : 'bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50'
                  }`}
                  style={{
                    boxShadow: isDark
                      ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                      : '0 4px 20px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <h3 className={`text-lg font-bold mb-5 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      {model.title}
                    </h3>

                  <div className="space-y-2.5 mb-4">
                    <div>
                      <div className={`text-xs uppercase tracking-wide mb-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        Commitment
                      </div>
                      <div className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {model.commitment}
                      </div>
                    </div>
                    <div>
                      <div className={`text-xs uppercase tracking-wide mb-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        Duration
                      </div>
                      <div className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {model.duration}
                      </div>
                    </div>
                    <div>
                      <div className={`text-xs uppercase tracking-wide mb-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        Best For
                      </div>
                      <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {model.bestFor}
                      </div>
                    </div>
                  </div>

                  <div className={`pt-4 border-t ${isDark ? 'border-gray-800/50' : 'border-gray-200/50'}`}>
                    <div className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {model.pricing}
                    </div>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal For Section */}
        <section className={`py-20 px-6 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Ideal For
              </h2>
              <p className={`text-base max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Advisory is perfect for teams who need strategic leadership and hands on execution
              </p>
            </motion.div>

            <div className="space-y-6">
              {idealFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className={`group relative p-8 rounded-2xl ${
                    isDark
                      ? 'bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800/50'
                      : 'bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50'
                  }`}
                  style={{
                    boxShadow: isDark
                      ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                      : '0 4px 20px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.description}
                    </p>

                    <div className="grid md:grid-cols-3 gap-4">
                      {item.scenarios.map((scenario, i) => (
                        <div key={i} className={`p-4 rounded-xl border ${
                          isDark
                            ? 'bg-gray-950/50 border-gray-800/50'
                            : 'bg-white border-gray-200/50'
                        } shadow-sm`}>
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                          <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {scenario}
                          </span>
                        </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={`relative py-24 px-6 overflow-hidden ${isDark ? 'bg-gradient-to-br from-brand-orange to-brand-orange-dark' : 'bg-gradient-to-br from-brand-orange to-brand-orange-dark'}`}>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight"
            >
              Ready to Transform Your Operations?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              Schedule a consultation to discuss your transformation needs. Get 20+ years of operations expertise with the flexibility your business requires.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact?intent=advisory"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-orange rounded-lg font-semibold text-base hover:bg-gray-50 transition-all hover:scale-105 shadow-2xl"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/#what-we-do"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-white/80 rounded-lg font-semibold text-base hover:bg-white/10 hover:border-white transition-all hover:scale-105 backdrop-blur-sm"
              >
                Explore All Paths
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
