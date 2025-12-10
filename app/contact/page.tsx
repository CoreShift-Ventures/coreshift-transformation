'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { NavigationV4 } from '@/components/landing-v4/NavigationV4';
import { Footer } from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';

// Map URL intent to dropdown value
const intentToInterest: Record<string, string> = {
  'blueprint': 'Blueprint Sprint',
  'build': 'Systems & Automation',
  'advisory': 'Fractional COO'
};

function ContactForm() {
  const { theme } = useTheme();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Get intent from URL parameter
  const urlIntent = searchParams?.get('intent') || 'blueprint';
  const defaultInterest = intentToInterest[urlIntent] || 'Blueprint Sprint';

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: defaultInterest,
    challenge: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Update interest when URL changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      interest: intentToInterest[urlIntent] || 'Blueprint Sprint'
    }));
  }, [urlIntent]);

  // Load Calendly widget script
  useEffect(() => {
    if (showCalendly && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [showCalendly]);

  const isDark = mounted && theme === 'dark';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Import the Server Action dynamically
      const { submitContactForm } = await import('@/app/actions/contact');

      // Map interest back to intent
      const intentMap: Record<string, string> = {
        'Blueprint Sprint': 'blueprint',
        'Systems & Automation': 'build',
        'Fractional COO': 'advisory'
      };

      // Submit to Supabase with simplified form data
      const result = await submitContactForm({
        intent: (intentMap[formData.interest] || 'blueprint') as 'blueprint' | 'build' | 'advisory',
        name: formData.name,
        email: formData.email,
        company: formData.company,
        role: formData.role,
        interest: formData.interest,
        challenge: formData.challenge
      });

      if (!result.success) {
        setSubmitError(result.error || 'Failed to submit form');
        setIsSubmitting(false);
        return;
      }

      // Show Calendly section on success
      setShowCalendly(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.company && formData.role && formData.interest && formData.challenge;

  return (
    <main className={`min-h-screen ${isDark ? 'bg-black' : 'bg-[#faf8f5]'}`}>
      <section className="pt-28 pb-16 px-6 md:px-10">
        <div className="max-w-lg mx-auto">
          {!showCalendly ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Premium Form Card */}
              <div className={`relative rounded-2xl overflow-hidden ${
                isDark
                  ? 'bg-gray-900 border border-gray-800'
                  : 'bg-white border border-gray-200 shadow-2xl shadow-gray-200/50'
              }`}>
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec5f2b] via-[#ff7849] to-[#ec5f2b]" />

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h1 className={`text-2xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                      Let's Talk
                    </h1>
                    <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      We'll respond within 24 hours
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Two Column Row */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className={`block text-xs font-semibold mb-1.5 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Name <span className="text-[#ec5f2b]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-3 py-2.5 rounded-lg border text-sm transition-all ${
                            isDark
                              ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-[#ec5f2b] focus:bg-gray-800'
                              : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#ec5f2b] focus:bg-white'
                          } focus:outline-none focus:ring-2 focus:ring-[#ec5f2b]/20`}
                          placeholder="Your name"
                        />
                      </div>

                      {/* Role */}
                      <div>
                        <label className={`block text-xs font-semibold mb-1.5 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Role <span className="text-[#ec5f2b]">*</span>
                        </label>
                        <input
                          type="text"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          required
                          className={`w-full px-3 py-2.5 rounded-lg border text-sm transition-all ${
                            isDark
                              ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-[#ec5f2b] focus:bg-gray-800'
                              : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#ec5f2b] focus:bg-white'
                          } focus:outline-none focus:ring-2 focus:ring-[#ec5f2b]/20`}
                          placeholder="CEO, COO, etc."
                        />
                      </div>
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Work Email <span className="text-[#ec5f2b]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-3 py-2.5 rounded-lg border text-sm transition-all ${
                          isDark
                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-[#ec5f2b] focus:bg-gray-800'
                            : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#ec5f2b] focus:bg-white'
                        } focus:outline-none focus:ring-2 focus:ring-[#ec5f2b]/20`}
                        placeholder="you@company.com"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Company <span className="text-[#ec5f2b]">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-3 py-2.5 rounded-lg border text-sm transition-all ${
                          isDark
                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-[#ec5f2b] focus:bg-gray-800'
                            : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#ec5f2b] focus:bg-white'
                        } focus:outline-none focus:ring-2 focus:ring-[#ec5f2b]/20`}
                        placeholder="Your company name"
                      />
                    </div>

                    {/* Interest Dropdown */}
                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        I'm interested in <span className="text-[#ec5f2b]">*</span>
                      </label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-3 py-2.5 rounded-lg border text-sm transition-all ${
                          isDark
                            ? 'bg-gray-800 border-gray-700 text-white focus:border-[#ec5f2b]'
                            : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#ec5f2b] focus:bg-white'
                        } focus:outline-none focus:ring-2 focus:ring-[#ec5f2b]/20`}
                      >
                        <option value="Blueprint Sprint">Blueprint Sprint</option>
                        <option value="Systems & Automation">Systems & Automation</option>
                        <option value="Fractional COO">Fractional COO</option>
                      </select>
                    </div>

                    {/* Operational Challenge */}
                    <div>
                      <label className={`block text-xs font-semibold mb-1.5 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Biggest operational challenge <span className="text-[#ec5f2b]">*</span>
                      </label>
                      <textarea
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className={`w-full px-3 py-2.5 rounded-lg border text-sm transition-all resize-none ${
                          isDark
                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-[#ec5f2b] focus:bg-gray-800'
                            : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#ec5f2b] focus:bg-white'
                        } focus:outline-none focus:ring-2 focus:ring-[#ec5f2b]/20`}
                        placeholder="What's blocking your growth?"
                      />
                    </div>

                    {/* Error Message */}
                    {submitError && (
                      <div className={`p-3 rounded-lg text-sm ${
                        isDark
                          ? 'bg-red-900/20 border border-red-800 text-red-400'
                          : 'bg-red-50 border border-red-200 text-red-600'
                      }`}>
                        {submitError}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting || !isFormValid}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ec5f2b] text-white rounded-lg font-semibold text-sm transition-all hover:bg-[#d94f1f] hover:shadow-lg hover:shadow-[#ec5f2b]/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
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
                          Book My Strategy Call
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Trust Note */}
              <p className={`text-center text-xs mt-4 ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
                Your information is secure and never shared.
              </p>
            </motion.div>
          ) : (
            /* Thank You + Calendly Section */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Success Card */}
              <div className={`relative rounded-2xl overflow-hidden ${
                isDark
                  ? 'bg-gray-900 border border-gray-800'
                  : 'bg-white border border-gray-200 shadow-2xl shadow-gray-200/50'
              }`}>
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-green-400 to-green-500" />

                <div className="p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7 text-green-500" />
                  </div>
                  <h1 className={`text-xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                    Thanks! Pick a time that works.
                  </h1>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Schedule your free strategy call below.
                  </p>
                </div>
              </div>

              {/* Calendly Embed */}
              <div className={`rounded-2xl overflow-hidden ${
                isDark
                  ? 'bg-gray-900 border border-gray-800'
                  : 'bg-white border border-gray-200 shadow-xl'
              }`}>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/srinath-cshift/strategy-session"
                  style={{ minWidth: '320px', height: '650px' }}
                />
              </div>

              {/* Alternative Contact */}
              <div className={`text-center p-4 rounded-xl ${
                isDark ? 'bg-gray-900/50 border border-gray-800' : 'bg-gray-50'
              }`}>
                <p className={`text-xs mb-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  Prefer email?
                </p>
                <a
                  href="mailto:contact@cshift.io"
                  className="text-sm text-[#ec5f2b] hover:text-[#d94f1f] transition-colors inline-flex items-center gap-1.5 font-medium"
                >
                  <Mail className="w-3.5 h-3.5" />
                  contact@cshift.io
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}

export default function ContactPage() {
  return (
    <>
      <NavigationV4 />
      <Suspense fallback={
        <main className="min-h-screen bg-[#faf8f5]">
          <section className="pt-28 pb-16 px-6 md:px-10">
            <div className="max-w-lg mx-auto">
              <div className="animate-pulse bg-white rounded-2xl p-8 shadow-xl">
                <div className="h-6 bg-gray-200 rounded w-32 mx-auto mb-8"></div>
                <div className="space-y-4">
                  <div className="h-10 bg-gray-100 rounded"></div>
                  <div className="h-10 bg-gray-100 rounded"></div>
                  <div className="h-10 bg-gray-100 rounded"></div>
                  <div className="h-20 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>
          </section>
        </main>
      }>
        <ContactForm />
      </Suspense>
      <Footer />
    </>
  );
}
