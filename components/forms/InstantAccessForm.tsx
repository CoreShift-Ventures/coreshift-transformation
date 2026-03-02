/* eslint-disable */
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { X, ArrowRight, Check, Mail, Sparkles } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
}

interface InstantAccessFormProps {
  onClose: () => void;
}

export function InstantAccessForm({ onClose }: InstantAccessFormProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  const validateEmail = (email: string): boolean => {
    const businessEmailDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com'];
    const domain = email.split('@')[1]?.toLowerCase();

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return false;
    }

    // Check if it's a common personal email domain
    if (domain && businessEmailDomains.includes(domain)) {
      return false;
    }

    return true;
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please use your business email';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call (replace with actual API endpoint)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      // TODO: Replace with actual API call
      // await fetch('/api/request-demo-access', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      console.log('Instant access requested:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ email: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

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
          className={`relative w-full max-w-lg rounded-2xl shadow-2xl ${
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

        <div className="p-8">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Header */}
                <div className="mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-dark flex items-center justify-center mb-4 shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    Get Instant Access
                  </h2>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                    We'll send you a unique demo link to explore CoreShift at your own pace
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
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
                      disabled={isSubmitting}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                      Business Email *
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
                      disabled={isSubmitting}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      Please use your work email (not Gmail, Yahoo, etc.)
                    </p>
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
                      disabled={isSubmitting}
                    />
                    {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Demo Access</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {/* Trust indicators */}
                  <div className={`flex items-center justify-center gap-4 text-xs pt-4 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    <div className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-green-600" />
                      <span>14-day access</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-green-600" />
                      <span>No credit card</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-green-600" />
                      <span>Full features</span>
                    </div>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-8"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${isDark ? 'bg-green-900/30' : 'bg-green-100'}`}>
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                  Check Your Email!
                </h3>
                <p className={`text-sm mb-6 max-w-md mx-auto ${isDark ? 'text-gray-400' : 'text-brand-gray'}`}>
                  We've sent your unique demo access link to <strong className="text-brand-orange">{formData.email}</strong>
                </p>
                <div className={`p-4 rounded-lg mb-6 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-200'}`}>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <strong>What's next?</strong><br />
                    1. Check your inbox (and spam folder)<br />
                    2. Click the secure link in the email<br />
                    3. Start exploring CoreShift features
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white font-semibold hover:shadow-lg transition-all"
                >
                  Got it!
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      </div>
    </div>
  );
}
