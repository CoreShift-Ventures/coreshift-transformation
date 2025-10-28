'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const caseStudies = [
  {
    title: 'Automotive Compliance Platform',
    industry: 'Vehicle Services & Regulatory Technology',
    icon: '🚗',
    challenge: 'Leading vehicle service provider needed a scalable platform to manage emission data extraction, compliance tracking, and regulatory reporting across thousands of vehicles. Required real-time processing, desktop deployment, and seamless CRM integration.',
    solution: 'Engineered a production-grade Next.js platform with Electron desktop application, featuring real-time data extraction pipelines, analytics dashboards, and automated compliance workflows. Implemented PostgreSQL with Prisma ORM for complex data relationships and Supabase for scalable backend.',
    results: [
      '60% reduction in data processing time through optimized extraction algorithms',
      'Desktop application deployed across regional service centers',
      'Real-time analytics dashboard processing thousands of vehicle records',
      'Automated PUCC compliance tracking and reporting',
      'Scalable architecture supporting growing data volumes'
    ],
    tech: ['Next.js 14', 'Electron', 'TypeScript', 'Prisma', 'PostgreSQL', 'Supabase', 'Framer Motion']
  },
  {
    title: 'Fund Administration Platform',
    industry: 'Alternative Investments & FinTech',
    icon: '💼',
    challenge: 'Fund administrator managing VC/PE funds ($100M+ AUM) required platform to replace legacy PowerBI solution. Needed to support 100-150 investors per fund, complex capital call calculations, and regulatory compliance (SEBI, RBI). Existing manual processes consumed 10+ hours weekly.',
    solution: 'Designed and architecting a modern fund administration platform replacing $18K legacy system. Building LP/GP investor portals, automated capital account management, and regulatory reporting engine. Multi-tenant architecture to scale across multiple funds with sophisticated financial calculations.',
    results: [
      'Platform architecture designed to replace manual Excel-based workflows',
      'Self-service investor portal reducing support queries by 60-70%',
      'Automated capital call processing and distribution calculations',
      'Real-time regulatory compliance reporting (SEBI, RBI)',
      'Scalable multi-tenant architecture for future fund onboarding',
      'Projected 80% reduction in manual data processing time'
    ],
    tech: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'TailwindCSS', 'React Query']
  }
];

export function CaseStudiesSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <section className={`relative py-32 px-6 overflow-hidden ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 ${
            isDark
              ? 'bg-gray-900 text-gray-300 border border-gray-800'
              : 'bg-gray-50 text-gray-700 border border-gray-200'
          }`}>
            <Sparkles className="w-4 h-4 text-brand-orange" />
            <span>Platform Engineering</span>
          </div>

          <h2 className={`text-4xl md:text-5xl font-bold tracking-tight mb-6 ${
            isDark ? 'text-white' : 'text-foreground'
          }`}>
            Beyond Customer Success:<br />
            <span className="text-accent">Custom Platform Development</span>
          </h2>

          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
            isDark ? 'text-gray-400' : 'text-muted'
          }`}>
            While CoreShift powers post-sales teams, our engineering expertise extends to building
            production-grade platforms for complex business challenges.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-12 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-10 rounded-2xl border transition-all ${
                isDark
                  ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
                  : 'bg-white border-border hover:border-gray-300 hover:shadow-lg'
              }`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">{study.icon}</div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-foreground'
                  }`}>
                    {study.title}
                  </h3>
                  <p className={`text-sm font-medium ${
                    isDark ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {study.industry}
                  </p>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-6">
                <h4 className={`font-semibold mb-3 text-sm uppercase tracking-wide ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Challenge
                </h4>
                <p className={`leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className={`font-semibold mb-3 text-sm uppercase tracking-wide ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Solution
                </h4>
                <p className={`leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {study.solution}
                </p>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h4 className={`font-semibold mb-4 text-sm uppercase tracking-wide ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Impact & Results
                </h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {study.results.map((result) => (
                    <li key={result} className={`flex items-start gap-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className={`pt-6 border-t ${
                isDark ? 'border-gray-800' : 'border-gray-200'
              }`}>
                <h4 className={`font-semibold mb-3 text-sm uppercase tracking-wide ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        isDark
                          ? 'bg-gray-800 text-gray-300 border border-gray-700'
                          : 'bg-gray-50 text-gray-700 border border-gray-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="/platform-engineering"
            className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 ${
              isDark
                ? 'bg-gray-900 hover:bg-gray-800 text-white border border-gray-800 hover:border-gray-700'
                : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-gray-300 hover:shadow-md'
            }`}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            Explore Platform Engineering Services
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
