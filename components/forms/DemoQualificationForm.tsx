/* eslint-disable */
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { ArrowRight, ArrowLeft, Check, X, Calendar } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  linkedinUrl: string;
  title: string;
  role: string;
  interest: string;
  intent: string;
}

const roles = [
  { value: 'executive', label: 'C-Suite / VP', isDecisionMaker: true },
  { value: 'director', label: 'Director', isDecisionMaker: true },
  { value: 'manager', label: 'Manager', isDecisionMaker: true },
  { value: 'team-lead', label: 'Team Lead', isDecisionMaker: false },
  { value: 'individual', label: 'Individual Contributor', isDecisionMaker: false },
  { value: 'other', label: 'Other', isDecisionMaker: false }
];

const interests = [
  { value: 'evaluate', label: 'Evaluating for my organization', qualified: true },
  { value: 'implement', label: 'Ready to implement', qualified: true },
  { value: 'learning', label: 'Just learning / exploring', qualified: false },
  { value: 'academic', label: 'Academic / Research', qualified: false }
];

const intents = [
  'Replace existing Post-sales Platform',
  'First Post-sales Platform',
  'Supplement current tools',
  'Build internal CS infrastructure',
  'Understand pricing and features',
  'General inquiry'
];

export function DemoQualificationForm({ onClose }: { onClose: () => void }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(1);
  const [isQualified, setIsQualified] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    linkedinUrl: '',
    title: '',
    role: '',
    interest: '',
    intent: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<FormData> = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
      if (!formData.company.trim()) newErrors.company = 'Company is required';
    }

    if (currentStep === 2) {
      if (!formData.title.trim()) newErrors.title = 'Title is required';
      if (!formData.role) newErrors.role = 'Role selection is required';
    }

    if (currentStep === 3) {
      if (!formData.interest) newErrors.interest = 'Please select your interest';
      if (!formData.intent) newErrors.intent = 'Please select what you\'d like to discuss';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setErrors({});
  };

  const handleSubmit = () => {
    if (!validateStep(step)) return;

    // Check if lead is qualified
    const selectedRole = roles.find(r => r.value === formData.role);
    const selectedInterest = interests.find(i => i.value === formData.interest);

    const qualified = Boolean(selectedRole?.isDecisionMaker && selectedInterest?.qualified);
    setIsQualified(qualified);

    // Store form data (you can add API call here)
    console.log('Form submitted:', formData);
    console.log('Qualified:', qualified);

    // Move to thank you page
    setStep(4);
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const progressPercentage = (step / 4) * 100;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full max-w-2xl rounded-2xl shadow-2xl ${
            isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'
          }`}
        >
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-lg transition-colors ${
            isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-gray-200' : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress bar */}
        <div className={`h-1 rounded-t-2xl overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
          <motion.div
            className="h-full bg-gradient-to-r from-brand-orange to-brand-orange-dark"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
              {step === 4 ? 'Thank You!' : 'Book a Demo'}
            </h2>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
              {step === 4 ? 'We appreciate your interest' : `Step ${step} of 3 - Help us understand your needs`}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : isDark
                        ? 'bg-gray-800 border-gray-700 text-gray-100 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange'
                    } outline-none`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : isDark
                        ? 'bg-gray-800 border-gray-700 text-gray-100 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange'
                    } outline-none`}
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    Company *
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => updateFormData('company', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      errors.company
                        ? 'border-red-500 focus:ring-red-500'
                        : isDark
                        ? 'bg-gray-800 border-gray-700 text-gray-100 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange'
                    } outline-none`}
                    placeholder="Acme Inc."
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    LinkedIn URL <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    value={formData.linkedinUrl}
                    onChange={(e) => updateFormData('linkedinUrl', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      isDark
                        ? 'bg-gray-800 border-gray-700 text-gray-100 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange'
                    } outline-none`}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2: Role & Title */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    Your Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => updateFormData('title', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      errors.title
                        ? 'border-red-500 focus:ring-red-500'
                        : isDark
                        ? 'bg-gray-800 border-gray-700 text-gray-100 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange'
                    } outline-none`}
                    placeholder="e.g., VP of Customer Success"
                  />
                  {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    Which best describes your role? *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {roles.map((role) => (
                      <button
                        key={role.value}
                        type="button"
                        onClick={() => updateFormData('role', role.value)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          formData.role === role.value
                            ? 'border-brand-orange bg-brand-orange/10'
                            : isDark
                            ? 'border-gray-700 hover:border-gray-600 bg-gray-800'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-medium ${
                            formData.role === role.value
                              ? 'text-brand-orange'
                              : isDark ? 'text-gray-200' : 'text-gray-700'
                          }`}>
                            {role.label}
                          </span>
                          {formData.role === role.value && (
                            <Check className="w-4 h-4 text-brand-orange" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                </div>
              </motion.div>
            )}

            {/* Step 3: Interest & Intent */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <label className={`block text-sm font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    What brings you to CoreShift? *
                  </label>
                  <div className="space-y-2">
                    {interests.map((interest) => (
                      <button
                        key={interest.value}
                        type="button"
                        onClick={() => updateFormData('interest', interest.value)}
                        className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                          formData.interest === interest.value
                            ? 'border-brand-orange bg-brand-orange/10'
                            : isDark
                            ? 'border-gray-700 hover:border-gray-600 bg-gray-800'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-medium ${
                            formData.interest === interest.value
                              ? 'text-brand-orange'
                              : isDark ? 'text-gray-200' : 'text-gray-700'
                          }`}>
                            {interest.label}
                          </span>
                          {formData.interest === interest.value && (
                            <Check className="w-4 h-4 text-brand-orange" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.interest && <p className="text-red-500 text-xs mt-1">{errors.interest}</p>}
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                    What would you like to discuss? *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {intents.map((intent) => (
                      <button
                        key={intent}
                        type="button"
                        onClick={() => updateFormData('intent', intent)}
                        className={`p-3 rounded-lg border-2 text-left transition-all ${
                          formData.intent === intent
                            ? 'border-brand-orange bg-brand-orange/10'
                            : isDark
                            ? 'border-gray-700 hover:border-gray-600 bg-gray-800'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {formData.intent === intent && (
                            <Check className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                          )}
                          <span className={`text-xs font-medium ${
                            formData.intent === intent
                              ? 'text-brand-orange'
                              : isDark ? 'text-gray-200' : 'text-gray-700'
                          }`}>
                            {intent}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.intent && <p className="text-red-500 text-xs mt-1">{errors.intent}</p>}
                </div>
              </motion.div>
            )}

            {/* Step 4: Thank You */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center py-8"
              >
                {isQualified ? (
                  <div className="space-y-6">
                    <div className={`w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto ${isDark ? 'bg-green-900/30' : 'bg-green-100'}`}>
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                        Thank you for your interest, {formData.name.split(' ')[0]}!
                      </h3>
                      <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                        Based on your inputs, we'd love to schedule a personalized demo with you.
                      </p>
                    </div>
                    <a
                      href="https://calendly.com/your-calendly-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white font-semibold hover:shadow-lg transition-all"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Book Your Demo on Calendly</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${isDark ? 'bg-brand-orange/20' : 'bg-brand-orange/10'}`}>
                      <Check className="w-8 h-8 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                        Thanks for your interest, {formData.name.split(' ')[0]}!
                      </h3>
                      <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                        Based on your inputs, we think you'd benefit more from exploring our community resources first. Join our community to learn more about CoreShift and connect with other CS professionals.
                      </p>
                    </div>
                    <div className="grid gap-4 max-w-md mx-auto">
                      <a
                        href="https://skool.com/your-community-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                          isDark
                            ? 'border-2 border-gray-700 text-gray-200 hover:border-brand-orange hover:text-brand-orange'
                            : 'border-2 border-brand-border text-brand-charcoal hover:border-brand-orange hover:text-brand-orange'
                        }`}
                      >
                        <span>Join our Skool Community</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="https://substack.com/your-newsletter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                          isDark
                            ? 'border-2 border-gray-700 text-gray-200 hover:border-brand-orange hover:text-brand-orange'
                            : 'border-2 border-brand-border text-brand-charcoal hover:border-brand-orange hover:text-brand-orange'
                        }`}
                      >
                        <span>Subscribe to our Newsletter</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation buttons */}
          {step < 4 && (
            <div className="flex items-center justify-between mt-8 gap-4">
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                    isDark
                      ? 'bg-gray-800 hover:bg-gray-700 text-gray-200'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                    isDark
                      ? 'text-gray-400 hover:text-gray-200'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Cancel
                </button>
              )}

              {step < 3 ? (
                <button
                  onClick={handleNext}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                >
                  Submit
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </motion.div>
      </div>
    </div>
  );
}
