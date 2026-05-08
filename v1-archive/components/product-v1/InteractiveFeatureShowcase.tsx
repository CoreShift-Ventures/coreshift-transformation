'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Target, Zap, Users, BarChart3, Shield, Heart, AlertTriangle, Activity } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  screenshot: string;
}

interface FeatureSection {
  id: string;
  heading: string;
  subheading: string;
  features: Feature[];
}

const sections: FeatureSection[] = [
  {
    id: 'health-retention',
    heading: 'Customer Health & Retention',
    subheading: 'Predict churn before it happens and take proactive action',
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
    ]
  },
  {
    id: 'revenue-expansion',
    heading: 'Revenue Growth & Expansion',
    subheading: 'Surface upsell opportunities and maximize account value',
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
        description: 'Track $2M+ expansion pipeline in real-time with clear visibility into deal stages, risk factor, and expected close dates.',
        screenshot: '/screenshots/expansion-signals.png'
      }
    ]
  },
  {
    id: 'team-productivity',
    heading: 'Team Productivity & Automation',
    subheading: 'Free your CSMs from manual work and focus on customers',
    features: [
      {
        icon: Zap,
        title: 'Automated Workflows',
        description: 'Automate QBRs, renewal prep, health check triggers, and routine touchpoints - saving 20+ hours per CSM weekly.',
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
        description: 'Battle-tested playbooks with step-by-step guides for onboarding, adoption, renewal, and expansion - proven by 20+ years of CS experience.',
        screenshot: '/screenshots/csm-automation.png'
      }
    ]
  }
];

function FeatureSectionComponent({ section, isDark }: { section: FeatureSection; isDark: boolean }) {
  const [activeFeature, setActiveFeature] = useState(0);
  const [imageError, setImageError] = useState<{[key: string]: boolean}>({});

  // Auto-rotate features every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % section.features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [section.features.length]);

  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
      {/* LEFT: Feature list with timer */}
      <div className="space-y-8">
        {/* Section heading */}
        <div>
          <h3 className={`text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {section.heading}
          </h3>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {section.subheading}
          </p>
        </div>

        {/* Features - paragraph style like Custify */}
        <div className="space-y-6">
          {section.features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === index;

            return (
              <div
                key={index}
                className={`relative transition-all duration-500 ${
                  isActive ? 'opacity-100' : 'opacity-40'
                }`}
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

                <div className="pl-6 cursor-pointer" onClick={() => setActiveFeature(index)}>
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-lg flex-shrink-0 ${
                      isActive ? 'bg-[#ec5f2b]' : isDark ? 'bg-gray-800' : 'bg-gray-100'
                    } transition-colors duration-300`}>
                      <Icon
                        className={`w-5 h-5 ${isActive ? 'text-white' : isDark ? 'text-gray-400' : 'text-gray-600'}`}
                        strokeWidth={2}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-bold mb-2 ${
                        isActive
                          ? 'text-[#ec5f2b]'
                          : isDark ? 'text-gray-300' : 'text-gray-700'
                      } transition-colors duration-300`}>
                        {feature.title}
                      </h4>
                      <p className={`text-base leading-relaxed ${
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
      </div>

      {/* RIGHT: Screenshot display with transitions */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${section.id}-${activeFeature}`}
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
                {section.features[activeFeature].screenshot && !imageError[section.features[activeFeature].screenshot] ? (
                  <Image
                    src={section.features[activeFeature].screenshot}
                    alt={`${section.features[activeFeature].title} - Screenshot`}
                    fill
                    className="object-cover"
                    onError={() => {
                      setImageError(prev => ({...prev, [section.features[activeFeature].screenshot]: true}));
                    }}
                    priority={activeFeature === 0}
                  />
                ) : (
                  // Placeholder
                  <div className="w-full h-full bg-gradient-to-br from-[#ec5f2b]/20 via-gray-900 to-gray-800 flex items-center justify-center">
                    <div className="text-center p-8">
                      {(() => {
                        const PlaceholderIcon = section.features[activeFeature].icon;
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
    </div>
  );
}

export function InteractiveFeatureShowcase() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <section className={`py-24 px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-5 leading-[1.1] tracking-[-0.02em] ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
            Everything You Need to<br />
            <span className="text-[#ec5f2b]">Stop Revenue Leak</span>
          </h2>
          <p className={`text-base max-w-2xl mx-auto font-light ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
            Proactively manage customers and ensure success in real-time
          </p>
        </motion.div>

        {/* Feature Sections */}
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <FeatureSectionComponent section={section} isDark={isDark} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
