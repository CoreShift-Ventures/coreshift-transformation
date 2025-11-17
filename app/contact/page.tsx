'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { NavigationV4 } from '@/components/landing-v4/NavigationV4';
import { Footer } from '@/components/landing/Footer';
import { AuditFormSteps } from '@/components/audit/AuditFormSteps';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import type { FormIntent } from '@/lib/supabase';
import {
  ClipboardCheck,
  ArrowRight,
  ArrowLeft,
  Check,
  Calendar,
  Mail,
  MessageSquare,
  Send,
  Target,
  Briefcase
} from 'lucide-react';

export default function ContactPage() {
  const { theme } = useTheme();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showCalendly, setShowCalendly] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Get intent from URL parameter, default to 'blueprint'
  const intent: FormIntent = (searchParams?.get('intent') as FormIntent) || 'blueprint';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === totalSteps) {
      setIsSubmitting(true);
      setSubmitError(null);

      try {
        // Import the Server Action dynamically
        const { submitContactForm } = await import('@/app/actions/contact');

        // Submit to Supabase
        const result = await submitContactForm({
          intent,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          industry: formData.industry,
          team_size: formData.teamSize,
          business_stage: formData.businessStage,
          current_tools: formData.currentTools,
          process_maturity: formData.processMaturity,
          biggest_challenges: formData.biggestChallenges,
          other_challenge: formData.otherChallenge,
          transformation_goals: formData.transformationGoals,
          other_goal: formData.otherGoal,
          timeline: formData.timeline
        });

        if (!result.success) {
          setSubmitError(result.error || 'Failed to submit form');
          setIsSubmitting(false);
          return;
        }

        // Show Calendly section on success
        setShowCalendly(true);

        // Scroll to What to Expect section
        setTimeout(() => {
          document.getElementById('what-to-expect')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } catch (error) {
        console.error('Submission error:', error);
        setSubmitError('An unexpected error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
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
    { title: 'Contact Info', icon: ClipboardCheck },
    { title: 'Business Overview', icon: ClipboardCheck },
    { title: 'Current State', icon: ClipboardCheck },
    { title: 'Goals & Timeline', icon: ClipboardCheck }
  ];

  return (
    <>
      <NavigationV4 />
      <main className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'}`}>
        {/* Header */}
        <section className="pt-32 pb-12 px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              {/* Intent Badge */}
              <div className="flex justify-center mb-6">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
                  intent === 'advisory'
                    ? isDark
                      ? 'bg-purple-900/20 border-purple-800 text-purple-400'
                      : 'bg-purple-50 border-purple-200 text-purple-600'
                    : isDark
                      ? 'bg-brand-orange/10 border-brand-orange/20 text-brand-orange'
                      : 'bg-brand-orange/10 border-brand-orange/20 text-brand-orange'
                }`}>
                  {intent === 'advisory' ? (
                    <>
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm font-semibold">Fractional COO Consultation</span>
                    </>
                  ) : (
                    <>
                      <Target className="w-4 h-4" />
                      <span className="text-sm font-semibold">Strategy & Blueprint Assessment</span>
                    </>
                  )}
                </div>
              </div>

              <h1 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                {intent === 'advisory'
                  ? 'Fractional COO Readiness Assessment'
                  : 'Business Transformation Readiness'}
              </h1>
              <p className={`text-sm max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                {intent === 'advisory'
                  ? '3-minute assessment to help us understand your strategic needs'
                  : '3-minute assessment to help us prepare for your discovery call'}
              </p>
            </motion.div>

            {!showCalendly ? (
              <div className="space-y-8">
                {/* Step Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    {stepTitles.map((step, index) => {
                      const stepNumber = index + 1;
                      const isActive = currentStep === stepNumber;
                      const isCompleted = currentStep > stepNumber;
                      const StepIcon = step.icon;

                      return (
                        <React.Fragment key={stepNumber}>
                          <div className="flex flex-col items-center gap-2 flex-1">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                              isCompleted
                                ? 'bg-green-500 text-white'
                                : isActive
                                  ? isDark ? 'bg-brand-orange text-white' : 'bg-brand-orange text-white'
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
                      intent={intent}
                    />

                    {/* Error Message */}
                    {submitError && (
                      <div className={`p-4 rounded-lg border ${
                        isDark
                          ? 'bg-red-900/20 border-red-800 text-red-400'
                          : 'bg-red-50 border-red-200 text-red-600'
                      }`}>
                        <p className="text-sm font-medium">{submitError}</p>
                      </div>
                    )}

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
                          disabled={isSubmitting}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-orange text-white rounded-lg font-semibold text-sm hover:bg-brand-orange-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Submitting...
                            </>
                          ) : (
                            <>
                              Continue to Booking
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    <p className={`text-xs text-center ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      Secure & confidential
                    </p>
                  </form>
                </motion.div>
              </div>
            ) : (
              /* What to Expect + Calendly Section */
              <div id="what-to-expect" className="space-y-8">
                {/* What to Expect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`rounded-2xl border p-8 ${
                    isDark
                      ? 'bg-gray-900/50 border-gray-800'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="max-w-3xl mx-auto">
                    <h2 className={`text-xl font-bold mb-6 text-center ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      What to Expect
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ec5f2b] to-[#d94f1f] flex items-center justify-center mx-auto mb-3">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <h3 className={`text-sm font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                          30-Minute Discovery Call
                        </h3>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          We'll learn about your business, current processes, and transformation goals
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ec5f2b] to-[#d94f1f] flex items-center justify-center mx-auto mb-3">
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <h3 className={`text-sm font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                          No Pressure Assessment
                        </h3>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          We'll provide honest feedback on whether our solution is a good fit for you
                        </p>
                      </div>

                      <div className="text-center">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ec5f2b] to-[#d94f1f] flex items-center justify-center mx-auto mb-3">
                          <Send className="w-6 h-6 text-white" />
                        </div>
                        <h3 className={`text-sm font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                          Next Steps Roadmap
                        </h3>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          If there's a fit, we'll outline a clear path to your Strategy & Blueprint phase
                        </p>
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border text-center ${
                      isDark
                        ? 'bg-gray-950 border-gray-800'
                        : 'bg-white border-gray-200'
                    }`}>
                      <p className={`text-xs font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-brand-charcoal'}`}>
                        Prefer to email us directly?
                      </p>
                      <a
                        href="mailto:contact@cshift.io"
                        className="text-sm text-[#ec5f2b] hover:text-[#d94f1f] transition-colors inline-flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        contact@cshift.io
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Calendly Embed */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`rounded-2xl border overflow-hidden ${
                    isDark
                      ? 'bg-gray-900/50 border-gray-800'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="p-8">
                    <h2 className={`text-xl font-bold mb-6 text-center ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      Schedule Your Discovery Call
                    </h2>

                    {/* Calendly embed placeholder */}
                    <div className={`rounded-lg border-2 border-dashed p-12 text-center ${
                      isDark ? 'border-gray-700 bg-gray-950' : 'border-gray-300 bg-gray-50'
                    }`}>
                      <Calendar className={`w-12 h-12 mx-auto mb-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
                      <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Calendly widget will be embedded here
                      </p>
                      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        Add your Calendly embed code to replace this placeholder
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
