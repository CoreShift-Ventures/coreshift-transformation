/* eslint-disable */
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Code2, Zap, Database, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Footer } from '@/components/landing/Footer';

const services = [
  {
    icon: Code2,
    title: 'Custom Platform Development',
    description: 'Production-grade web and desktop applications built on modern, scalable architectures.',
    features: [
      'Next.js & React full-stack development',
      'Electron desktop application engineering',
      'Real-time data processing pipelines',
      'Enterprise-grade authentication & security'
    ]
  },
  {
    icon: Database,
    title: 'Data & Infrastructure',
    description: 'Robust database design and backend infrastructure for complex business logic.',
    features: [
      'PostgreSQL & Supabase implementation',
      'Prisma ORM & type-safe data layers',
      'Multi-tenant architecture design',
      'Regulatory compliance & audit trails'
    ]
  },
  {
    icon: Zap,
    title: 'Legacy System Modernization',
    description: 'Replace outdated systems with modern platforms that scale with your business.',
    features: [
      'PowerBI to modern SaaS migration',
      'Process automation & workflow optimization',
      'Analytics dashboard engineering',
      'API integration & third-party connectors'
    ]
  }
];

const caseStudies = [
  {
    title: 'Automotive Compliance Platform',
    industry: 'Vehicle Services & Regulatory Technology',
    icon: '🚗',
    challenge: 'Leading vehicle service provider needed a scalable platform to manage emission data extraction, compliance tracking, and regulatory reporting across thousands of vehicles. Required real-time processing, desktop deployment, and seamless CRM integration.',
    solution: 'Engineered a production-grade Next.js platform with Electron desktop application, featuring real-time data extraction pipelines, analytics dashboards, and automated compliance workflows. Implemented PostgreSQL with Prisma ORM for complex data relationships and Supabase for scalable backend.',
    results: [
      '60% reduction in data processing time',
      'Desktop app deployed across service centers',
      'Real-time analytics for thousands of records',
      'Automated PUCC compliance tracking',
      'Scalable architecture supporting growth'
    ],
    tech: ['Next.js 14', 'Electron', 'TypeScript', 'Prisma', 'PostgreSQL', 'Supabase']
  },
  {
    title: 'Fund Administration Platform',
    industry: 'Alternative Investments & FinTech',
    icon: '💼',
    challenge: 'Fund administrator managing VC/PE funds ($100M+ AUM) required platform to replace legacy PowerBI solution. Needed to support 100-150 investors per fund, complex capital call calculations, and regulatory compliance (SEBI, RBI). Existing manual processes consumed 10+ hours weekly.',
    solution: 'Designed and architecting a modern fund administration platform replacing $18K legacy system. Building LP/GP investor portals, automated capital account management, and regulatory reporting engine. Multi-tenant architecture to scale across multiple funds with sophisticated financial calculations.',
    results: [
      'Replacing $18K legacy PowerBI solution',
      'Self-service portal reducing queries by 60-70%',
      'Automated capital call processing',
      'Real-time regulatory compliance (SEBI, RBI)',
      'Multi-tenant architecture for scalability',
      'Projected 80% reduction in manual processing'
    ],
    tech: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'TailwindCSS']
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    description: 'Deep dive into your current systems, business requirements, and transformation goals'
  },
  {
    step: '02',
    title: 'Architecture Design',
    description: 'Design scalable, secure technical foundation aligned with your business objectives'
  },
  {
    step: '03',
    title: 'Agile Development',
    description: 'Iterative development with regular demos and continuous feedback integration'
  },
  {
    step: '04',
    title: 'Deployment & Training',
    description: 'Smooth production launch with comprehensive documentation and team training'
  },
  {
    step: '05',
    title: 'Ongoing Evolution',
    description: 'Continuous enhancements, maintenance, and technical support as you grow'
  }
];

export default function TransformationPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <main className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`relative py-24 px-6 overflow-hidden ${
        isDark ? 'bg-gradient-to-b from-gray-950 to-black' : 'bg-gradient-to-b from-white to-gray-50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 ${
              isDark ? 'bg-gray-900 text-white border border-gray-800' : 'bg-white text-black border border-gray-200'
            }`}>
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span>Digital Transformation</span>
            </div>

            <h1 className={`text-5xl md:text-6xl font-bold tracking-tight mb-6 ${
              isDark ? 'text-white' : 'text-brand-charcoal'
            }`}>
              Transform Your Business<br />
              <span className="text-brand-orange">With Modern Technology</span>
            </h1>

            <p className={`text-xl max-w-3xl mx-auto mb-10 leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-brand-gray'
            }`}>
              We engineer production-grade platforms that replace legacy systems, automate workflows,
              and scale with your business—built on Next.js, TypeScript, and modern cloud infrastructure.
            </p>

            <a
              href="mailto:srinath@coreshift.ai?subject=Digital%20Transformation%20Inquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-xl font-semibold text-base transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Discuss Your Transformation
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className={`py-24 px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-4 tracking-tight ${
              isDark ? 'text-white' : 'text-brand-charcoal'
            }`}>
              What We Do
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
              Full-stack engineering for business transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-2xl border transition-all ${
                  isDark
                    ? 'bg-gray-900 border-gray-800 hover:border-gray-700'
                    : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-lg'
                }`}
              >
                <service.icon className="w-12 h-12 text-brand-orange mb-6" />
                <h3 className={`text-2xl font-bold mb-4 tracking-tight ${
                  isDark ? 'text-white' : 'text-brand-charcoal'
                }`}>
                  {service.title}
                </h3>
                <p className={`mb-6 leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-brand-gray'
                }`}>
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className={`flex items-start gap-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className={`py-24 px-6 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-4 tracking-tight ${
              isDark ? 'text-white' : 'text-brand-charcoal'
            }`}>
              How We Work
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
              A structured approach that delivers results
            </p>
          </motion.div>

          <div className="space-y-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-xl border ${
                  isDark
                    ? 'bg-gray-900 border-gray-800'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-bold text-brand-orange flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-brand-charcoal'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`leading-relaxed ${
                      isDark ? 'text-gray-400' : 'text-brand-gray'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof: Case Studies Section */}
      <section className={`py-24 px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-4 tracking-tight ${
              isDark ? 'text-white' : 'text-brand-charcoal'
            }`}>
              Proven Results
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
              Real transformations for real businesses
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-10 rounded-2xl border ${
                  isDark
                    ? 'bg-gray-900 border-gray-800'
                    : 'bg-white border-gray-200'
                }`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{study.icon}</div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 tracking-tight ${
                      isDark ? 'text-white' : 'text-brand-charcoal'
                    }`}>
                      {study.title}
                    </h3>
                    <p className={`text-sm font-medium text-gray-500`}>
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
                    Results & Impact
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {study.results.map((result) => (
                      <li key={result} className={`flex items-start gap-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
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
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
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
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-24 px-6 ${
        isDark ? 'bg-gradient-to-b from-gray-950 to-black' : 'bg-gradient-to-b from-gray-50 to-white'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 tracking-tight ${
              isDark ? 'text-white' : 'text-brand-charcoal'
            }`}>
              Ready to Transform?
            </h2>
            <p className={`text-xl mb-10 leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-brand-gray'
            }`}>
              Whether you need a custom platform, legacy system modernization, or business process
              transformation—let's discuss how we can help.
            </p>
            <a
              href="mailto:srinath@coreshift.ai?subject=Digital%20Transformation%20Inquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-xl font-semibold text-base transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
