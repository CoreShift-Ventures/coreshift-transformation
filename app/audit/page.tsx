'use client';

import React, { useState, useEffect } from 'react';
import { NavigationV4 } from '@/components/landing-v4/NavigationV4';
import { Footer } from '@/components/landing/Footer';
import { AuditFormSteps } from '@/components/audit/AuditFormSteps';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import {
  ClipboardCheck, ArrowRight, ArrowLeft, TrendingDown, TrendingUp, AlertCircle,
  CheckCircle2, DollarSign, Users, Database, Zap, Target, Clock, Lightbulb,
  Shield, BarChart3, ChevronRight, Check, Activity, Award, Rocket, TrendingDown as LeakIcon
} from 'lucide-react';

export default function AuditPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    // Step 1: Contact Info
    name: '',
    email: '',
    company: '',
    role: '',

    // Step 2: Business Overview
    industry: '',
    teamSize: '',
    businessStage: '',

    // Step 3: Current State
    currentTools: [] as string[],
    processMaturity: '',
    biggestChallenges: [] as string[],
    otherChallenge: '',

    // Step 4: Goals & Timeline
    transformationGoals: [] as string[],
    otherGoal: '',
    timeline: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';
  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === totalSteps) {
      // TODO: Send form data to backend/email service
      console.log('Form submitted:', formData);

      // Redirect to contact/calendly page
      window.location.href = '/contact';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked
    });
  };

  const handleMultiSelect = (field: 'currentTools' | 'biggestChallenges' | 'transformationGoals', value: string) => {
    const currentValues = formData[field];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];

    setFormData({
      ...formData,
      [field]: newValues
    });
  };

  // Calculations
  const arr = parseFloat(formData.arr) || 0;
  const customerCount = parseInt(formData.customerCount) || 0;
  const churnRate = parseFloat(formData.churnRate) || 0;
  const teamSize = parseInt(formData.teamSize) || 0;
  const expansionRate = parseFloat(formData.expansionRate) || 0;
  const avgCSMLoad = parseInt(formData.avgCSMLoad) || 0;

  const annualChurnLoss = arr * (churnRate / 100);
  const preventableChurn = annualChurnLoss * 0.67;
  const potentialExpansion = arr * 0.35;
  const currentExpansion = arr * (expansionRate / 100);
  const missedExpansion = Math.max(0, potentialExpansion - currentExpansion);
  const wastedCSMCost = teamSize * 80000 * 0.5;
  const totalLeak = preventableChurn + missedExpansion;

  // Readiness score (0-1)
  const readinessScore = (() => {
    let score = 0;

    // Score based on tools in place
    if (formData.crmTool && formData.crmTool !== 'none') score += 0.2;
    if (formData.csPlatform && formData.csPlatform !== 'none') score += 0.2;
    if (formData.analyticsTool && formData.analyticsTool !== 'none') score += 0.2;
    if (formData.supportTool && formData.supportTool !== 'none') score += 0.1;

    // Data quality contributes 30%
    const dataQuality = parseInt(formData.dataQuality) || 0;
    score += (dataQuality / 5) * 0.3;

    return Math.max(0.3, score); // Minimum 30% readiness
  })();

  // Health score calculation (0-100) with breakdown
  // Start from 0 and build up based on positive indicators
  const healthScoreBreakdown = (() => {
    let churnScore = 0;
    let expansionScore = 0;
    let efficiencyScore = 0;
    let toolingScore = 0;
    let dataScore = 0;

    // Churn impact (0-30 points): Lower churn is better
    if (churnRate <= 5) churnScore = 30;
    else if (churnRate <= 10) churnScore = 25;
    else if (churnRate <= 15) churnScore = 18;
    else if (churnRate <= 20) churnScore = 10;
    else if (churnRate <= 30) churnScore = 5;

    // Expansion impact (0-25 points): Higher expansion is better
    if (expansionRate >= 35) expansionScore = 25;
    else if (expansionRate >= 25) expansionScore = 20;
    else if (expansionRate >= 15) expansionScore = 12;
    else if (expansionRate >= 10) expansionScore = 7;
    else if (expansionRate >= 5) expansionScore = 3;

    // CSM efficiency (0-20 points): Lower load is better
    if (avgCSMLoad <= 20) efficiencyScore = 20;
    else if (avgCSMLoad <= 30) efficiencyScore = 15;
    else if (avgCSMLoad <= 50) efficiencyScore = 10;
    else if (avgCSMLoad <= 75) efficiencyScore = 5;

    // Tooling maturity (0-15 points)
    const toolCount = [formData.crmTool, formData.csPlatform, formData.analyticsTool, formData.supportTool]
      .filter(tool => tool && tool !== 'none').length;
    if (toolCount >= 4) toolingScore = 15;
    else if (toolCount >= 3) toolingScore = 12;
    else if (toolCount >= 2) toolingScore = 8;
    else if (toolCount >= 1) toolingScore = 4;

    // Data readiness (0-10 points)
    dataScore = Math.round(readinessScore * 10);

    return {
      churn: churnScore,
      expansion: expansionScore,
      efficiency: efficiencyScore,
      tooling: toolingScore,
      data: dataScore,
      total: churnScore + expansionScore + efficiencyScore + toolingScore + dataScore
    };
  })();

  const healthScore = Math.max(0, Math.min(100, healthScoreBreakdown.total));

  const getHealthLevel = (score: number) => {
    if (score >= 80) return { level: 'Healthy', color: 'text-green-500', bg: 'bg-green-500', desc: 'Strong foundation with room for optimization' };
    if (score >= 60) return { level: 'At Risk', color: 'text-yellow-500', bg: 'bg-yellow-500', desc: 'Performing but leaving significant value on the table' };
    return { level: 'Critical', color: 'text-red-500', bg: 'bg-red-500', desc: 'Urgent intervention needed to stop revenue leak' };
  };

  const health = getHealthLevel(healthScore);

  // Recovery potential (conservative)
  const recoveryPotential = {
    churn: preventableChurn * 0.35 * readinessScore,
    expansion: missedExpansion * 0.4 * readinessScore,
    efficiency: wastedCSMCost * 0.6 * readinessScore,
    get total() { return this.churn + this.expansion + this.efficiency; }
  };

  // Maturity level
  const getMaturityLevel = () => {
    const toolCount = [formData.crmTool, formData.csPlatform, formData.analyticsTool, formData.supportTool]
      .filter(tool => tool && tool !== 'none').length;

    const score =
      (toolCount * 15) +
      (formData.crmTool && formData.crmTool !== 'none' ? 15 : 0) +
      (formData.analyticsTool && formData.analyticsTool !== 'none' ? 15 : 0) +
      (parseInt(formData.dataQuality || '0') * 8);

    if (score >= 75) return { level: 'Advanced', modules: ['Platform'], timeline: '4-6 weeks' };
    if (score >= 45) return { level: 'Growing', modules: ['Blueprint', 'Platform'], timeline: '8-12 weeks' };
    return { level: 'Early Stage', modules: ['Blueprint', 'Advisory'], timeline: '12-16 weeks' };
  };

  const maturity = getMaturityLevel();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const stepTitles = [
    { title: 'Contact Info', icon: Users },
    { title: 'Business Overview', icon: BarChart3 },
    { title: 'Current State', icon: Database },
    { title: 'Goals & Timeline', icon: Target }
  ];

  return (
    <>
      <NavigationV4 />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className={`relative pt-32 pb-8 px-6 ${isDark ? 'bg-gradient-to-b from-gray-950 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-3">
                <ClipboardCheck className="w-3.5 h-3.5 text-brand-orange" />
                <span className="text-xs font-semibold text-brand-orange">
                  Pre-Discovery Assessment
                </span>
              </div>

              {/* Headline */}
              <h1 className={`text-2xl md:text-3xl font-bold mb-2 leading-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Business Transformation Readiness
              </h1>

              {/* Subheadline */}
              <p className={`text-sm max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                3-minute assessment to help us prepare for your discovery call
              </p>
            </motion.div>

            {/* Unified Container */}
            <div className="max-w-4xl mx-auto">
              {/* Progress Stepper at Top */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`p-4 rounded-lg mb-6 ${
                  isDark
                    ? 'bg-gray-900/50 border border-gray-800/50'
                    : 'bg-white/50 border border-gray-200/50 backdrop-blur-sm'
                }`}
              >
                {/* Horizontal Progress Steps */}
                <div className="flex items-center justify-between mb-4">
                  {stepTitles.map((step, index) => {
                    const StepIcon = step.icon;
                    const stepNumber = index + 1;
                    const isActive = currentStep === stepNumber;
                    const isCompleted = currentStep > stepNumber;

                    return (
                      <React.Fragment key={stepNumber}>
                        <div className="flex flex-col items-center flex-1">
                          <div className={`w-9 h-9 rounded-full flex items-center justify-center mb-2 transition-all ${
                            isCompleted
                              ? 'bg-green-500 text-white'
                              : isActive
                                ? 'bg-brand-orange text-white shadow-sm'
                                : isDark ? 'bg-gray-800 text-gray-600' : 'bg-gray-100 text-gray-400'
                          }`}>
                            {isCompleted ? <Check className="w-4 h-4" /> : <StepIcon className="w-4 h-4" />}
                          </div>
                          <span className={`text-xs font-semibold text-center leading-tight ${
                            isActive
                              ? isDark ? 'text-gray-100' : 'text-brand-charcoal'
                              : isDark ? 'text-gray-600' : 'text-gray-500'
                          }`}>
                            {step.title}
                          </span>
                        </div>
                        {index < stepTitles.length - 1 && (
                          <div className={`h-[2px] flex-1 mx-2 transition-all ${
                            currentStep > stepNumber
                              ? 'bg-green-500'
                              : isDark ? 'bg-gray-800' : 'bg-gray-200'
                          }`} />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* Progress Bar */}
                <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-gray-800/50' : 'bg-gray-200'}`}>
                  <motion.div
                    className="h-full bg-gradient-to-r from-brand-orange to-orange-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`p-6 rounded-xl ${
                  isDark
                    ? 'bg-gray-900 border border-gray-800'
                    : 'bg-white border border-gray-200 shadow-lg'
                }`}
              >
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Multi-Step Form Content */}
                <AuditFormSteps
                  currentStep={currentStep}
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleCheckboxChange={handleCheckboxChange}
                  handleMultiSelect={handleMultiSelect}
                  isDark={isDark}
                />

                {/* Navigation Buttons */}
                <div className="flex gap-3 pt-4">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handlePrevious}
                      className={`flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-all ${
                        isDark
                          ? 'bg-gray-800 text-white border border-gray-700 hover:border-gray-600'
                          : 'bg-white text-brand-charcoal border border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Previous
                    </button>
                  )}

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-orange text-white rounded-lg font-semibold text-sm hover:bg-brand-orange-dark transition-all"
                    >
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-orange text-white rounded-lg font-semibold text-sm hover:bg-brand-orange-dark transition-all"
                    >
                      Schedule Call
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <p className={`text-xs text-center ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  Secure & confidential
                </p>
              </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        {showResults && (
          <section id="results" className={`py-16 px-6 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`text-center p-12 rounded-2xl ${
                  isDark
                    ? 'bg-gray-900 border border-gray-800'
                    : 'bg-white border border-gray-200 shadow-xl'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>

                <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  Thank You!
                </h2>
                <p className={`text-base max-w-2xl mx-auto mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  We've received your assessment. Our team will review your information and reach out within 24 hours to schedule your discovery call.
                </p>
                <p className={`text-sm mb-8 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  We'll use this information to prepare a customized transformation strategy tailored to your business needs.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-lg font-semibold hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg"
                >
                  Return to Contact
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </>
  );
}
