'use client';

import React, { useState, useEffect } from 'react';
import { Navigation } from '@/components/shared/Navigation';
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

    // Step 2: Business Metrics
    arr: '',
    customerCount: '',
    churnRate: '',
    expansionRate: '',

    // Step 3: Infrastructure & Operations
    teamSize: '',
    avgCSMLoad: '',
    crmTool: '',
    csPlatform: '',
    analyticsTool: '',
    supportTool: '',
    dataQuality: '',

    // Step 4: Pain Points
    topChallenges: [] as string[],
    urgency: ''
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
      setShowResults(true);
      // Scroll to results
      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
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

  const handleMultiSelect = (field: 'toolsUsed' | 'topChallenges', value: string) => {
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
    { title: 'Business Metrics', icon: BarChart3 },
    { title: 'Infrastructure', icon: Database },
    { title: 'Pain Points', icon: Target }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className={`relative pt-24 pb-8 px-6 ${isDark ? 'bg-gradient-to-b from-gray-950 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
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
                  Revenue Leak Assessment
                </span>
              </div>

              {/* Headline */}
              <h1 className={`text-2xl md:text-3xl font-bold mb-2 leading-tight ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Post-Sales Health Assessment
              </h1>

              {/* Subheadline */}
              <p className={`text-sm max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                4-minute assessment with personalized recommendations
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
                      Get Assessment
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
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  Your Revenue Leak Assessment
                </h2>
                <p className={`text-sm max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Based on your inputs, here's what we found and how CoreShift can help
                </p>
              </motion.div>

              {/* Health Score */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`p-8 rounded-xl mb-8 text-center ${
                  isDark
                    ? 'bg-gray-900 border border-gray-800'
                    : 'bg-white border border-gray-200 shadow-xl'
                }`}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  {healthScore >= 60 ? (
                    <CheckCircle2 className={`w-8 h-8 ${health.color}`} />
                  ) : (
                    <AlertCircle className={`w-8 h-8 ${health.color}`} />
                  )}
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    Post-Sales Health Score
                  </h3>
                </div>

                <div className={`text-6xl font-bold mb-3 ${health.color}`}>
                  {healthScore.toFixed(0)}/100
                </div>
                <div className={`text-lg font-semibold mb-2 ${health.color}`}>
                  {health.level}
                </div>
                <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {health.desc}
                </p>

                <div className={`h-4 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                  <motion.div
                    className={`h-full ${health.bg}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${healthScore}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </motion.div>

              {/* Score Breakdown & Industry Benchmarks */}
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                {/* Score Transparency */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className={`p-6 rounded-xl ${
                    isDark
                      ? 'bg-gray-900 border border-gray-800'
                      : 'bg-white border border-gray-200 shadow-lg'
                  }`}
                >
                  <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    How We Calculated Your Score
                  </h3>

                  <div className="space-y-3">
                    {/* Churn Management */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Churn Management
                        </span>
                        <span className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                          {healthScoreBreakdown.churn}/30
                        </span>
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
                          style={{ width: `${(healthScoreBreakdown.churn / 30) * 100}%` }}
                        />
                      </div>
                      <p className={`text-[10px] mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        Your churn rate: {churnRate}% (Lower is better)
                      </p>
                    </div>

                    {/* Expansion Performance */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Expansion Performance
                        </span>
                        <span className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                          {healthScoreBreakdown.expansion}/25
                        </span>
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-green-600"
                          style={{ width: `${(healthScoreBreakdown.expansion / 25) * 100}%` }}
                        />
                      </div>
                      <p className={`text-[10px] mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        Your expansion rate: {expansionRate}% (Target: 35%)
                      </p>
                    </div>

                    {/* Team Efficiency */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Team Efficiency
                        </span>
                        <span className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                          {healthScoreBreakdown.efficiency}/20
                        </span>
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                          style={{ width: `${(healthScoreBreakdown.efficiency / 20) * 100}%` }}
                        />
                      </div>
                      <p className={`text-[10px] mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        Accounts per CSM: {avgCSMLoad} (Optimal: ≤30)
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Tech Stack Maturity
                        </span>
                        <span className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                          {healthScoreBreakdown.tooling}/15
                        </span>
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-purple-600"
                          style={{ width: `${(healthScoreBreakdown.tooling / 15) * 100}%` }}
                        />
                      </div>
                      <p className={`text-[10px] mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        Tools integrated: {[formData.crmTool, formData.csPlatform, formData.analyticsTool, formData.supportTool].filter(t => t && t !== 'none').length}/4
                      </p>
                    </div>

                    {/* Data Quality */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Data Infrastructure
                        </span>
                        <span className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                          {healthScoreBreakdown.data}/10
                        </span>
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 to-teal-600"
                          style={{ width: `${(healthScoreBreakdown.data / 10) * 100}%` }}
                        />
                      </div>
                      <p className={`text-[10px] mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        Data quality rating: {formData.dataQuality}/5
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Industry Benchmarks */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`p-6 rounded-xl ${
                    isDark
                      ? 'bg-gray-900 border border-gray-800'
                      : 'bg-white border border-gray-200 shadow-lg'
                  }`}
                >
                  <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    Industry Benchmarks: {maturity.level}
                  </h3>

                  <div className="space-y-4">
                    {/* Churn Benchmark */}
                    <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Annual Churn Rate
                        </span>
                        <div className="flex gap-3 items-center">
                          <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>You: {churnRate}%</span>
                          <span className={`text-xs font-bold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Benchmark: {maturity.level === 'Advanced' ? '5-8%' : maturity.level === 'Growing' ? '10-15%' : '15-25%'}
                          </span>
                        </div>
                      </div>
                      <div className="relative h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500/30 to-yellow-500/30" style={{ width: '50%' }} />
                        <div
                          className="absolute top-0 bottom-0 w-1 bg-brand-orange"
                          style={{ left: `${Math.min(churnRate * 2, 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Expansion Benchmark */}
                    <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Expansion Revenue
                        </span>
                        <div className="flex gap-3 items-center">
                          <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>You: {expansionRate}%</span>
                          <span className={`text-xs font-bold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Benchmark: {maturity.level === 'Advanced' ? '30-40%' : maturity.level === 'Growing' ? '20-30%' : '10-20%'}
                          </span>
                        </div>
                      </div>
                      <div className="relative h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-500/30 to-green-500/30" style={{ width: '100%' }} />
                        <div
                          className="absolute top-0 bottom-0 w-1 bg-brand-orange"
                          style={{ left: `${Math.min((expansionRate / 50) * 100, 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* CSM Load Benchmark */}
                    <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Accounts per CSM
                        </span>
                        <div className="flex gap-3 items-center">
                          <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>You: {avgCSMLoad}</span>
                          <span className={`text-xs font-bold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Optimal: 20-30
                          </span>
                        </div>
                      </div>
                      <div className="relative h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                        <div className="absolute inset-y-0 bg-gradient-to-r from-green-500/30 via-yellow-500/30 to-red-500/30" style={{ left: '20%', right: '0' }} />
                        <div
                          className="absolute top-0 bottom-0 w-1 bg-brand-orange"
                          style={{ left: `${Math.min((avgCSMLoad / 100) * 100, 100)}%` }}
                        />
                      </div>
                    </div>

                    <p className={`text-[10px] text-center pt-2 ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
                      Benchmarks based on SaaS companies at {maturity.level} maturity
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Revenue Leak Breakdown */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {/* Total Leak */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`p-6 rounded-xl ${
                    isDark
                      ? 'bg-red-950/30 border border-red-900/50'
                      : 'bg-red-50 border border-red-200'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <LeakIcon className="w-5 h-5 text-red-500" />
                    <h4 className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Total Annual Leak
                    </h4>
                  </div>
                  <div className="text-3xl font-bold text-red-500 mb-2">
                    {formatCurrency(totalLeak)}
                  </div>
                  <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                    Revenue at risk each year
                  </p>
                </motion.div>

                {/* Preventable Churn */}
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
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingDown className="w-5 h-5 text-orange-500" />
                    <h4 className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Preventable Churn
                    </h4>
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {formatCurrency(preventableChurn)}
                  </div>
                  <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                    67% of churn is preventable
                  </p>
                </motion.div>

                {/* Missed Expansion */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className={`p-6 rounded-xl ${
                    isDark
                      ? 'bg-gray-900 border border-gray-800'
                      : 'bg-white border border-gray-200 shadow-lg'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <h4 className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Missed Expansion
                    </h4>
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {formatCurrency(missedExpansion)}
                  </div>
                  <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                    Gap to 35% industry benchmark
                  </p>
                </motion.div>

                {/* Efficiency Loss */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className={`p-6 rounded-xl ${
                    isDark
                      ? 'bg-gray-900 border border-gray-800'
                      : 'bg-white border border-gray-200 shadow-lg'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="w-5 h-5 text-blue-500" />
                    <h4 className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Efficiency Loss
                    </h4>
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    {formatCurrency(wastedCSMCost)}
                  </div>
                  <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                    Wasted in manual CSM work
                  </p>
                </motion.div>
              </div>

              {/* Why This Matters Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={`p-8 rounded-xl mb-8 ${
                  isDark
                    ? 'bg-gray-900 border border-gray-800'
                    : 'bg-white border border-gray-200 shadow-lg'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-6 h-6 text-brand-orange" />
                  <h3 className={`text-xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    Why This Matters
                  </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className={`p-5 rounded-lg ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
                    <TrendingDown className="w-8 h-8 text-orange-500 mb-3" />
                    <h4 className={`text-sm font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      Churn Impact
                    </h4>
                    <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Research shows 67% of churn is preventable with early warning systems and proactive interventions.
                      You're losing <strong>{formatCurrency(preventableChurn)}</strong> that could be saved with predictive analytics
                      and automated health monitoring.
                    </p>
                  </div>

                  <div className={`p-5 rounded-lg ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
                    <TrendingUp className="w-8 h-8 text-green-500 mb-3" />
                    <h4 className={`text-sm font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      Expansion Opportunity
                    </h4>
                    <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Best-in-class companies achieve 35% expansion rates through systematic identification of upsell
                      opportunities. You have <strong>{formatCurrency(missedExpansion)}</strong> in untapped expansion
                      potential that automated signals could unlock.
                    </p>
                  </div>

                  <div className={`p-5 rounded-lg ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
                    <Activity className="w-8 h-8 text-blue-500 mb-3" />
                    <h4 className={`text-sm font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      Efficiency Gains
                    </h4>
                    <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      CSMs spend ~50% of their time on manual tasks that could be automated. That's
                      <strong> {formatCurrency(wastedCSMCost)}</strong> in wasted capacity annually. Automation frees
                      them to focus on strategic customer relationships that drive retention and growth.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Maturity Assessment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className={`p-8 rounded-xl mb-8 ${
                  isDark
                    ? 'bg-gray-900 border border-gray-800'
                    : 'bg-white border border-gray-200 shadow-lg'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-brand-orange" />
                  <h3 className={`text-xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    Your CS Maturity Level: {maturity.level}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className={`text-sm font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      What This Means
                    </h4>
                    <div className="space-y-2">
                      {maturity.level === 'Early Stage' && (
                        <>
                          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <strong>Current State:</strong> You're building CS foundations with limited tooling and data infrastructure.
                          </p>
                          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <strong>Primary Challenge:</strong> Reactive firefighting without visibility into what's driving churn or expansion.
                          </p>
                          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <strong>Next Evolution:</strong> Build systematic processes and infrastructure before scaling.
                          </p>
                        </>
                      )}
                      {maturity.level === 'Growing' && (
                        <>
                          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <strong>Current State:</strong> You have basic CS operations but lack automation and predictive capabilities.
                          </p>
                          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <strong>Primary Challenge:</strong> Data exists but isn't actionable; manual processes limit scale.
                          </p>
                          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <strong>Next Evolution:</strong> Automate workflows and implement predictive analytics to scale efficiently.
                          </p>
                        </>
                      )}
                      {maturity.level === 'Advanced' && (
                        <>
                          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <strong>Current State:</strong> Solid CS infrastructure with good data practices and tooling.
                          </p>
                          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <strong>Primary Challenge:</strong> Optimize existing processes and unlock incremental gains.
                          </p>
                          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <strong>Next Evolution:</strong> Deploy advanced ML models and automation to maximize efficiency.
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className={`text-sm font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      Recovery Potential
                    </h4>
                    <div className="space-y-3">
                      <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Reduced Churn
                          </span>
                          <span className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                            {formatCurrency(recoveryPotential.churn)}
                          </span>
                        </div>
                        <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                          Conservative 12-month impact
                        </p>
                      </div>

                      <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Expansion Growth
                          </span>
                          <span className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                            {formatCurrency(recoveryPotential.expansion)}
                          </span>
                        </div>
                        <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                          New revenue from signals
                        </p>
                      </div>

                      <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-xs font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Efficiency Savings
                          </span>
                          <span className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                            {formatCurrency(recoveryPotential.efficiency)}
                          </span>
                        </div>
                        <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                          Reclaimed CSM capacity
                        </p>
                      </div>

                      <div className={`p-4 rounded-lg border-2 ${isDark ? 'bg-brand-orange/10 border-brand-orange/30' : 'bg-brand-orange/5 border-brand-orange/20'}`}>
                        <div className="flex justify-between items-center">
                          <span className={`text-xs font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                            Total Impact
                          </span>
                          <span className="text-lg font-bold text-brand-orange">
                            {formatCurrency(recoveryPotential.total)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CoreShift Solution Mapping */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className={`p-8 rounded-xl mb-8 ${
                  isDark
                    ? 'bg-gradient-to-br from-brand-orange/20 to-orange-600/20 border border-brand-orange/30'
                    : 'bg-gradient-to-br from-brand-orange/10 to-orange-100 border border-brand-orange/30'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="w-6 h-6 text-brand-orange" />
                  <h3 className={`text-xl font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    Your Recommended Path: {maturity.modules.join(' + ')}
                  </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {/* Blueprint Module */}
                  {maturity.modules.includes('Blueprint') && (
                    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-900/80' : 'bg-white/80'}`}>
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-brand-orange" />
                        <h4 className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                          Transformation Blueprint
                        </h4>
                      </div>
                      <p className={`text-xs mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Custom 90-day roadmap for your CS transformation
                      </p>
                      <ul className={`space-y-2 text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Deep-dive audit of your current state</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Prioritized module recommendations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Implementation timeline & milestones</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Data integration strategy</span>
                        </li>
                      </ul>
                    </div>
                  )}

                  {/* Advisory Module */}
                  {maturity.modules.includes('Advisory') && (
                    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-900/80' : 'bg-white/80'}`}>
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="w-5 h-5 text-brand-orange" />
                        <h4 className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                          Strategic Advisory
                        </h4>
                      </div>
                      <p className={`text-xs mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Hands-on guidance to build CS foundations
                      </p>
                      <ul className={`space-y-2 text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Bi-weekly strategy sessions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Playbook development support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Team training & enablement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Data quality improvement</span>
                        </li>
                      </ul>
                    </div>
                  )}

                  {/* Platform Module */}
                  {maturity.modules.includes('Platform') && (
                    <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-900/80' : 'bg-white/80'}`}>
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="w-5 h-5 text-brand-orange" />
                        <h4 className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                          CoreShift Platform
                        </h4>
                      </div>
                      <p className={`text-xs mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        AI-powered automation for your CS operations
                      </p>
                      <ul className={`space-y-2 text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Churn prediction & early warnings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Expansion opportunity identification</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Automated workflows & playbooks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Real-time health monitoring</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className={`p-6 rounded-lg mb-6 ${isDark ? 'bg-gray-900/80' : 'bg-white/80'}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-brand-orange" />
                    <h4 className={`text-sm font-bold ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      Implementation Timeline
                    </h4>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <div className={`text-xs font-semibold mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Weeks 1-4
                      </div>
                      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        Discovery, data audit, blueprint delivery
                      </p>
                    </div>
                    <div>
                      <div className={`text-xs font-semibold mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Weeks 5-8
                      </div>
                      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        Data integration, model training, playbook setup
                      </p>
                    </div>
                    <div>
                      <div className={`text-xs font-semibold mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Weeks 9+
                      </div>
                      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        Platform deployment, team training, optimization
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-lg font-semibold text-sm hover:bg-brand-orange-dark transition-all hover:scale-105 shadow-lg"
                  >
                    Schedule Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/product"
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105 ${
                      isDark
                        ? 'bg-gray-800 text-white border border-gray-700 hover:border-brand-orange'
                        : 'bg-white text-brand-charcoal border border-gray-200 hover:border-brand-orange shadow-lg'
                    }`}
                  >
                    Explore Platform Modules
                  </a>
                </div>
              </motion.div>

              {/* What You'll Get Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className={`p-8 rounded-xl ${
                  isDark
                    ? 'bg-gray-900 border border-gray-800'
                    : 'bg-white border border-gray-200 shadow-lg'
                }`}
              >
                <h3 className={`text-xl font-bold mb-6 text-center ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  Expected Outcomes (12 Months)
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 ${
                      isDark ? 'bg-green-950/30 text-green-500' : 'bg-green-50 text-green-600'
                    }`}>
                      <TrendingDown className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-green-500 mb-1">
                      -35%
                    </div>
                    <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Reduction in preventable churn through early warnings
                    </div>
                  </div>

                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 ${
                      isDark ? 'bg-blue-950/30 text-blue-500' : 'bg-blue-50 text-blue-600'
                    }`}>
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-blue-500 mb-1">
                      +40%
                    </div>
                    <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Increase in expansion revenue from automated signals
                    </div>
                  </div>

                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 ${
                      isDark ? 'bg-orange-950/30 text-brand-orange' : 'bg-orange-50 text-brand-orange'
                    }`}>
                      <Activity className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-brand-orange mb-1">
                      60%
                    </div>
                    <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Time saved on manual tasks, reclaimed for strategic work
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </>
  );
}
