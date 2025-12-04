'use client';

import React, { useState, useEffect } from 'react';
import { NavigationV4 } from '@/components/landing-v4/NavigationV4';
import { Footer } from '@/components/landing/Footer';
import { AuditFormSteps } from '@/components/audit/AuditFormSteps';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import {
  ClipboardCheck, ArrowRight, ArrowLeft,
  Users, Database, Target, BarChart3, Check
} from 'lucide-react';

export default function AuditPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

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

        <Footer />
      </main>
    </>
  );
}
