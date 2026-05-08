'use client';

import { useState, useEffect } from 'react';
import { NavigationV4 } from '@/components/landing-v4/NavigationV4';
import { Footer } from '@/components/landing/Footer';
import { InteractiveFeatureShowcase } from '@/components/landing/InteractiveFeatureShowcase';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Check, ArrowRight, Heart, TrendingUp, CreditCard, Cog } from 'lucide-react';

export default function PlatformPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  const scrollToContact = () => {
    window.location.href = '/contact?intent=blueprint';
  };

  return (
    <>
      <NavigationV4 />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className={`relative pt-32 pb-16 px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
          {/* Subtle background decoration */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-[#ec5f2b]/5' : 'bg-[#ec5f2b]/3'}`} />
            <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-purple-500/5' : 'bg-purple-500/3'}`} />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              {/* Badge */}
              <div className="inline-block mb-4">
                <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#ec5f2b] text-white">
                  Flagship Domain Solution
                </span>
              </div>

              {/* Headline */}
              <h1 className={`text-3xl md:text-4xl font-bold mb-4 leading-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                CoreShift CS Engine<br />
                <span className={`text-2xl md:text-3xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Production-Ready Customer Success Platform</span>
              </h1>

              {/* Subheadline */}
              <p className={`text-base max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Built on the <span className="font-semibold text-[#ec5f2b]">C-OS Framework</span>. Our battle-tested Customer Success platform customized to your exact workflows. See what 80% proven + 20% custom looks like in action.
              </p>
            </motion.div>

            {/* Key Value Props */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-4 mt-12"
            >
              {[
                { stat: '2 Weeks', label: 'Blueprint Sprint' },
                { stat: '8 Weeks', label: 'Full Deploy' },
                { stat: 'End to End', label: 'Strategy. Build. Scale.' }
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
                  <div className={`text-2xl font-bold mb-1 text-[#ec5f2b]`}>
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

        {/* Interactive Feature Showcase */}
        <InteractiveFeatureShowcase />

        {/* What We Build Section */}
        <section className={`py-16 px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4"
              >
                <span className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${
                  isDark ? 'bg-gray-900 text-gray-400 border border-gray-800' : 'bg-gray-100 text-gray-600 border border-gray-200'
                }`}>
                  FROM VISION TO REALITY
                </span>
              </motion.div>
              <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Systems That Power Growth
              </h2>
              <p className={`text-sm max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Purpose-built platforms for every critical workflow in your business
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  icon: Heart,
                  category: 'Customer Function',
                  description: 'Success, Support, and Experience',
                  items: [
                    'AI powered churn prediction and health scoring',
                    'Automated onboarding and lifecycle workflows',
                    'Real time sentiment analysis and alert routing',
                    'Customer journey mapping and touchpoint automation',
                    'Success playbooks and engagement automation'
                  ]
                },
                {
                  icon: TrendingUp,
                  category: 'Revenue Function',
                  description: 'Pipeline, Forecasting, and Growth',
                  items: [
                    'Revenue forecasting and pipeline intelligence',
                    'Lead scoring and automated qualification',
                    'Sales workflow automation and alerts',
                    'Expansion signal detection and routing',
                    'Quote to cash workflow automation'
                  ]
                },
                {
                  icon: CreditCard,
                  category: 'Finance & Billing Function',
                  description: 'Subscription, Revenue, and Compliance',
                  items: [
                    'Automated subscription and billing management',
                    'Revenue recognition and financial reporting',
                    'Payment processing and dunning workflows',
                    'Contract management and renewal tracking',
                    'Tax compliance and audit trail automation'
                  ]
                },
                {
                  icon: Cog,
                  category: 'Your Unique Processes',
                  description: 'Whatever Matters to Your Business',
                  items: [
                    'Strategy, build and automation of your custom process',
                    'Custom integrations with your systems',
                    'Business rule engine and decision automation',
                    'Reporting dashboards and data visualization',
                    'API access for external integrations'
                  ]
                }
              ].map((section, index) => {
                const Icon = section.icon;
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group relative"
                >
                  {/* Gradient glow effect on hover */}
                  <div className={`absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isDark ? 'bg-gradient-to-r from-[#ec5f2b]/20 to-purple-500/20' : 'bg-gradient-to-r from-[#ec5f2b]/10 to-purple-500/10'
                  } blur-sm`} />

                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`relative p-6 rounded-xl transition-all duration-300 ${
                      isDark
                        ? 'bg-gray-900 border border-gray-800 group-hover:border-gray-700'
                        : 'bg-white border border-gray-200 group-hover:border-gray-300 shadow-lg group-hover:shadow-2xl'
                    }`}
                  >
                    {/* Icon with animation */}
                    <motion.div
                      className="mb-5 flex items-center gap-3"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center ${
                        isDark ? 'bg-gray-800' : 'bg-gray-100'
                      } group-hover:bg-gradient-to-br group-hover:from-[#ec5f2b] group-hover:to-[#f97316] transition-all duration-300`}>
                        <Icon className={`w-6 h-6 transition-colors duration-300 ${
                          isDark ? 'text-[#ec5f2b] group-hover:text-white' : 'text-[#ec5f2b] group-hover:text-white'
                        }`} strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className={`text-lg font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                          {section.category}
                        </h3>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {section.description}
                        </p>
                      </div>
                    </motion.div>

                    {/* Separator */}
                    <div className={`h-px mb-4 ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />

                    {/* Items */}
                    <div className="space-y-2.5">
                      {section.items.map((item, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + i * 0.05 }}
                        >
                          <div className="relative flex-shrink-0 w-5 h-5 mr-1 mt-0.5">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ec5f2b] to-[#f97316] opacity-20" />
                            <Check className="relative w-4 h-4 text-[#ec5f2b]" strokeWidth={2.5} />
                          </div>
                          <span className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={`py-16 px-6 ${isDark ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-xl overflow-hidden"
              style={{
                background: isDark
                  ? 'radial-gradient(circle at top, rgba(236, 95, 43, 0.1) 0%, transparent 70%)'
                  : 'radial-gradient(circle at top, rgba(236, 95, 43, 0.05) 0%, transparent 70%)'
              }}
            >
              <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Ready to Transform Your Business?
              </h2>
              <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Start with a 2 week Blueprint Sprint. See your system before you build it.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#ec5f2b] text-white rounded-lg font-semibold text-sm hover:bg-[#d54f20] transition-all hover:scale-105 shadow-lg"
                >
                  Start Your Blueprint Sprint
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
