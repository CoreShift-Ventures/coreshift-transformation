'use client';

import { Navigation } from '@/components/shared/Navigation';
import { ProductHero } from '@/components/product/ProductHero';
import { InteractiveFeatureShowcase } from '@/components/product/InteractiveFeatureShowcase';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />

      {/* Hero with Scroll-based Zoom */}
      <ProductHero />

      {/* Interactive Feature Showcase */}
      <InteractiveFeatureShowcase />

      {/* Social Proof Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Trusted by Revenue Teams
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Join companies that have recovered millions in hidden revenue
            </motion.p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
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
                className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#ec5f2b] mb-2">
                  {item.stat}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-12 shadow-xl max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ec5f2b] to-[#d14d1f] rounded-full flex-shrink-0" />
              <div>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 italic">
                  "CoreShift helped us identify $3.2M in at-risk revenue and gave our CSM team the tools to save 85% of those accounts. The ROI was immediate."
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Sarah Chen</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">VP of Customer Success, TechCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Built for Scale,
                <br />
                <span className="text-[#ec5f2b]">Designed for Speed</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 dark:text-gray-300 mb-8"
              >
                Enterprise-grade infrastructure that handles millions of data points while keeping your team moving fast.
              </motion.p>

              <div className="space-y-4">
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
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-[#ec5f2b]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#ec5f2b]" strokeWidth={2} />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
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
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-[#ec5f2b] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">Technical diagram placeholder</p>
                  <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">Add architecture or integration diagram</p>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ec5f2b]">99.9%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Uptime SLA</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ec5f2b]">SOC 2</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Type II Certified</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#ec5f2b] to-[#d14d1f]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Stop the Leak?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-8"
          >
            Get your free revenue leak audit in 3 minutes. No credit card required.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-white text-[#ec5f2b] rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 inline-flex items-center gap-2 shadow-xl"
          >
            Start Your Free Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
