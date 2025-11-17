'use client';

import { useState, useEffect } from 'react';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/landing/Footer';
import { ProductHero } from '@/components/product/ProductHero';
import { InteractiveFeatureShowcase } from '@/components/product/InteractiveFeatureShowcase';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { ArrowRight, Check } from 'lucide-react';

export default function ProductPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero with Scroll-based Zoom */}
        <ProductHero />

        {/* Interactive Feature Showcase */}
        <InteractiveFeatureShowcase />

        {/* Social Proof Section */}
        <section className={`py-16 px-6 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
              >
                Trusted by Revenue Teams
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Join companies that have recovered millions in hidden revenue
              </motion.p>
            </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-5 mb-10">
            {[
              { stat: '40%', label: 'Average Churn Reduction' },
              { stat: '25%', label: 'NRR Increase' },
              { stat: '$2M+', label: 'Avg. Expansion Pipeline' },
              { stat: '20hrs', label: 'Saved per CSM/Week' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`text-center p-5 rounded-xl ${
                  isDark
                    ? 'bg-gray-900 border border-gray-800'
                    : 'bg-white border border-gray-200 shadow-lg'
                }`}
              >
                <div className="text-2xl font-bold text-brand-orange mb-1">
                  {item.stat}
                </div>
                <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-xl p-8 max-w-4xl mx-auto ${
              isDark
                ? 'bg-gray-900 border border-gray-800'
                : 'bg-white border border-gray-200 shadow-lg'
            }`}
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-orange-600 rounded-full flex-shrink-0" />
              <div>
                <p className={`text-sm mb-4 italic ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  "CoreShift helped us identify $3.2M in at-risk revenue and gave our CSM team the tools to save 85% of those accounts. The ROI was immediate."
                </p>
                <div>
                  <div className={`font-semibold text-sm ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>Sarah Chen</div>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>VP of Customer Success, TechCorp</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className={`py-16 px-6 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
              >
                Built for Scale,{' '}
                <span className="text-brand-orange">Designed for Speed</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`text-sm mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Enterprise-grade infrastructure that handles millions of data points while keeping your team moving fast.
              </motion.p>

              <div className="space-y-3">
                {[
                  'Real-time data sync from Salesforce, HubSpot, Stripe',
                  'ML models trained on 500M+ customer interactions',
                  'SOC 2 Type II, GDPR, HIPAA compliant',
                  '99.9% uptime SLA with dedicated support',
                  'Custom integrations via REST API & webhooks',
                  'Single sign-on (SSO) with SAML 2.0'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <div className="w-5 h-5 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-orange" strokeWidth={2} />
                    </div>
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`aspect-square rounded-xl flex items-center justify-center ${
                isDark
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800'
                  : 'bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200'
              }`}>
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-brand-orange rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Technical diagram placeholder</p>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className={`absolute -top-4 -right-4 rounded-lg p-3 shadow-lg ${
                  isDark
                    ? 'bg-gray-800 border border-gray-700'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-orange">99.9%</div>
                  <div className={`text-[10px] ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Uptime SLA</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className={`absolute -bottom-4 -left-4 rounded-lg p-3 shadow-lg ${
                  isDark
                    ? 'bg-gray-800 border border-gray-700'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-orange">SOC 2</div>
                  <div className={`text-[10px] ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Type II Certified</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 px-6 ${isDark ? 'bg-brand-orange/10' : 'bg-gradient-to-br from-brand-orange/5 to-orange-100/50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}
          >
            Ready to Stop the Leak?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-sm mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Get your free revenue leak audit in 3 minutes. No credit card required.
          </motion.p>
          <motion.a
            href="/audit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-lg font-semibold text-base hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg"
          >
            Start Your Free Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </motion.a>
        </div>
      </section>

      <Footer />
      </main>
    </>
  );
}
