// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Rocket, Briefcase, Settings, Target, TrendingUp, BarChart3, Zap, Users, Shield, Heart, AlertTriangle, Activity } from 'lucide-react';
import Image from 'next/image';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  screenshot: string;
}

interface Path {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  features: Feature[];
  impact: string;
}

export function TransformationPaths() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [imageError, setImageError] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  // Auto-rotate features every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % paths[activeTab].features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTab]);

  // Reset feature when tab changes
  useEffect(() => {
    setActiveFeature(0);
  }, [activeTab]);

  const paths: Path[] = [
    {
      icon: Rocket,
      title: 'Sales Process Transformation',
      subtitle: 'Convert 30% more leads',
      features: [
        {
          icon: Target,
          title: 'Expansion Opportunity Detection',
          description: 'Automatically identify upsell and cross-sell signals based on product usage, company growth indicators, and engagement patterns.',
          screenshot: '/screenshots/expansion-signals.png'
        },
        {
          icon: BarChart3,
          title: 'Predictive Revenue Forecasting',
          description: 'ML models forecast MRR, churn risk, and expansion revenue with 95% accuracy, giving executives confidence in pipeline projections.',
          screenshot: '/screenshots/revenue-forecasting.png'
        },
        {
          icon: TrendingUp,
          title: 'Pipeline Visibility',
          description: 'Track $2M+ expansion pipeline in real-time with clear visibility into deal stages, risk factors, and expected close dates.',
          screenshot: '/screenshots/expansion-signals.png'
        }
      ],
      impact: '30-50% faster sales cycles, 25%+ better conversion'
    },
    {
      icon: Briefcase,
      title: 'Operations Process Transformation',
      subtitle: 'Save 15-20 hours/week per team',
      features: [
        {
          icon: Zap,
          title: 'Automated Workflows',
          description: 'Automate QBRs, renewal prep, health check triggers, and routine touchpoints - saving 20+ hours per team weekly.',
          screenshot: '/screenshots/csm-automation.png'
        },
        {
          icon: Users,
          title: 'Smart Task Management',
          description: 'Priority-based task routing with ARR-weighted visibility, ensuring your team focuses on highest-impact accounts first.',
          screenshot: '/screenshots/compliance-tracking.png'
        },
        {
          icon: Shield,
          title: 'Playbook Library',
          description: 'Battle-tested playbooks with step-by-step guides for onboarding, adoption, renewal, and expansion - proven by 20+ years of experience.',
          screenshot: '/screenshots/csm-automation.png'
        }
      ],
      impact: '15-20 hours saved/week per team, 40% faster execution'
    },
    {
      icon: Target,
      title: 'Customer Success Process Transformation',
      subtitle: 'Reduce churn by 40%',
      features: [
        {
          icon: Heart,
          title: 'AI-Powered Health Scoring',
          description: 'Real-time health scores analyzing usage patterns, engagement metrics, and sentiment to identify at-risk customers 90 days before churn.',
          screenshot: '/screenshots/churn-prediction.png'
        },
        {
          icon: AlertTriangle,
          title: 'Early Warning Alerts',
          description: 'Automated alerts when customer health drops below threshold, with recommended playbooks and actions to prevent churn.',
          screenshot: '/screenshots/customer-segmentation.png'
        },
        {
          icon: Activity,
          title: 'Usage Pattern Analysis',
          description: 'Track feature adoption, login frequency, and engagement trends to surface declining usage before it becomes critical.',
          screenshot: '/screenshots/churn-prediction.png'
        }
      ],
      impact: '40% churn reduction, 2x expansion revenue'
    },
    {
      icon: Settings,
      title: 'Custom Process Transformation',
      subtitle: 'Your process, your advantage',
      features: [
        {
          icon: Target,
          title: 'Custom Workflow Automation',
          description: 'Build automation tailored to YOUR unique process - not generic solutions that force you to change how you work.',
          screenshot: '/screenshots/expansion-signals.png'
        },
        {
          icon: BarChart3,
          title: 'AI-Powered Decision Support',
          description: 'Smart recommendations based on your data patterns, helping you make better decisions faster.',
          screenshot: '/screenshots/revenue-forecasting.png'
        },
        {
          icon: Activity,
          title: 'Real-time Analytics & Insights',
          description: 'Custom dashboards and metrics that matter to YOUR business, with actionable insights from your data.',
          screenshot: '/screenshots/churn-prediction.png'
        }
      ],
      impact: 'Defined by your specific bottlenecks and opportunities'
    }
  ];

  const activePath = paths[activeTab];
  const Icon = activePath.icon;

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
            Which Business Process
            <br />
            <span className="text-[#ec5f2b]">Needs Transformation?</span>
          </motion.h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {paths.map((path, index) => {
            const PathIcon = path.icon;
            const isActive = activeTab === index;

            return (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec5f2b] focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-brand-orange text-white shadow-lg'
                    : isDark
                    ? 'bg-gray-900 text-gray-300 border border-gray-800 hover:border-gray-700 focus-visible:ring-offset-black'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 focus-visible:ring-offset-white'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <PathIcon className="w-5 h-5" />
                <span className="hidden md:inline">{path.title}</span>
                <span className="md:hidden">{path.title.split(' ')[0]}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Interactive Features Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* LEFT: Features with timer */}
            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ec5f2b] to-[#d94f1f] rounded-xl shadow-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {activePath.title}
                  </h3>
                  <p className="text-sm text-[#ec5f2b] font-semibold">{activePath.subtitle}</p>
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-6">
                {activePath.features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  const isActive = activeFeature === index;

                  return (
                    <div
                      key={index}
                      className={`relative transition-all duration-500 cursor-pointer ${
                        isActive ? 'opacity-100' : 'opacity-40'
                      }`}
                      onClick={() => setActiveFeature(index)}
                    >
                      {/* Timer bar */}
                      {isActive && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-[#ec5f2b] rounded-full"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 5, ease: 'linear' }}
                          style={{ transformOrigin: 'top' }}
                        />
                      )}

                      <div className="pl-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-2.5 rounded-lg flex-shrink-0 ${
                            isActive ? 'bg-[#ec5f2b]' : isDark ? 'bg-gray-800' : 'bg-gray-100'
                          } transition-colors duration-300`}>
                            <FeatureIcon
                              className={`w-5 h-5 ${isActive ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-600'}`}
                              strokeWidth={2}
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className={`text-base font-bold mb-2 ${
                              isActive
                                ? 'text-[#ec5f2b]'
                                : isDark ? 'text-gray-300' : 'text-gray-700'
                            } transition-colors duration-300`}>
                              {feature.title}
                            </h4>
                            <p className={`text-sm leading-relaxed ${
                              isActive
                                ? isDark ? 'text-gray-300' : 'text-gray-700'
                                : isDark ? 'text-gray-500' : 'text-gray-500'
                            } transition-colors duration-300`}>
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Impact badge */}
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                <h4 className={`text-sm font-semibold mb-1 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Business Impact</h4>
                <p className="text-sm text-[#ec5f2b] font-bold">{activePath.impact}</p>
              </div>
            </div>

            {/* RIGHT: Screenshot display */}
            <div className="relative lg:sticky lg:top-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${activeFeature}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className={`relative rounded-2xl overflow-hidden ${
                    isDark ? 'shadow-2xl shadow-black/50' : 'shadow-2xl shadow-gray-400/20'
                  } border ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                    <div className="relative aspect-[16/10] bg-gradient-to-br from-gray-900 to-gray-800">
                      {activePath.features[activeFeature].screenshot && !imageError[activePath.features[activeFeature].screenshot] ? (
                        <Image
                          src={activePath.features[activeFeature].screenshot}
                          alt={`${activePath.features[activeFeature].title} - Screenshot`}
                          fill
                          className="object-cover"
                          onError={() => {
                            setImageError(prev => ({...prev, [activePath.features[activeFeature].screenshot]: true}));
                          }}
                          priority={activeFeature === 0}
                        />
                      ) : (
                        // Placeholder
                        <div className="w-full h-full bg-gradient-to-br from-[#ec5f2b]/20 via-gray-900 to-gray-800 flex items-center justify-center">
                          <div className="text-center p-8">
                            {(() => {
                              const PlaceholderIcon = activePath.features[activeFeature].icon;
                              return <PlaceholderIcon className="w-20 h-20 text-[#ec5f2b]/40 mx-auto mb-4" strokeWidth={1} />;
                            })()}
                            <p className="text-gray-500 text-sm">Screenshot coming soon</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
