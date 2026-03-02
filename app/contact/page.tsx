'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { NavigationV2 } from '@/components/v2/NavigationV2';
import { FooterV2 } from '@/components/v2/FooterV2';

// Map URL intent to dropdown value
const intentToInterest: Record<string, string> = {
  // Blueprint-specific intents
  'invoice-reconciliation': 'Invoice & AP/AR Automation',
  'grn-reconciliation': 'Invoice & AP/AR Automation',
  'bank-reconciliation': 'Invoice & AP/AR Automation',
  'expense-report': 'Invoice & AP/AR Automation',
  'vendor-portal': 'Vendor & Supply Chain Ops',
  'po-grn-matching': 'Vendor & Supply Chain Ops',
  'investor-reporting': 'Investor & Board Reporting',
  'board-pack': 'Investor & Board Reporting',
  'churn-risk': 'Customer Success & Renewals',
  'renewal-tracker': 'Customer Success & Renewals',
  'vehicle-compliance': 'Compliance & Validation',
  'sap-query': 'ERP & Data Queries',
  // Category-level intents
  'finance': 'Invoice & AP/AR Automation',
  'supply-chain': 'Vendor & Supply Chain Ops',
  'reporting': 'Investor & Board Reporting',
  'customer-success': 'Customer Success & Renewals',
  'compliance': 'Compliance & Validation',
  'erp': 'ERP & Data Queries',
  'other': 'Other',
};

function ContactForm() {
  const searchParams = useSearchParams();
  const [showCalendly, setShowCalendly] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Get intent from URL parameter
  const urlIntent = searchParams?.get('intent') || '';
  const defaultInterest = intentToInterest[urlIntent] || '';

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: defaultInterest,
    challenge: ''
  });

  // Update interest when URL changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      interest: intentToInterest[urlIntent] || ''
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

      // Submit to Supabase with simplified form data
      // All operation types map to 'blueprint' intent for the backend
      const result = await submitContactForm({
        intent: 'blueprint' as 'blueprint' | 'build' | 'advisory',
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
    <main className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#f5f7fa]" />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            radial-gradient(ellipse 200% 100% at 50% 100%, rgba(200, 210, 240, 0.6) 0%, transparent 60%),
            radial-gradient(ellipse 150% 80% at 50% 95%, rgba(180, 195, 235, 0.5) 0%, transparent 50%),
            radial-gradient(ellipse 100% 50% at 50% 90%, rgba(160, 180, 230, 0.4) 0%, transparent 40%)
          `
        }}
      />

      <section className="relative z-10 pt-28 pb-16 px-6 md:px-10">
        <div className="max-w-lg mx-auto">
          {!showCalendly ? (
            <div className="animate-fadeIn">
              {/* Premium Form Card */}
              <div className="relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4d65ff] via-[#7c8cff] to-[#4d65ff]" />

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <p className="text-[10px] font-medium text-[#888] uppercase tracking-[2.5px] mb-3">
                      Get Started
                    </p>
                    <h1 className="font-space text-[28px] font-medium text-[#1a1a1a] tracking-[-0.02em] mb-2">
                      Deploy Your First Agent
                    </h1>
                    <p className="text-[13px] text-[#666]">
                      We'll respond within 24 hours
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Two Column Row */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-[10px] font-semibold mb-1.5 uppercase tracking-[1px] text-[#666]">
                          Name <span className="text-[#4d65ff]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2.5 rounded-lg border text-[13px] transition-all bg-white/50 border-[#e0e0e0] text-[#1a1a1a] placeholder-[#999] focus:border-[#4d65ff] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4d65ff]/20"
                          placeholder="Your name"
                        />
                      </div>

                      {/* Role */}
                      <div>
                        <label className="block text-[10px] font-semibold mb-1.5 uppercase tracking-[1px] text-[#666]">
                          Role <span className="text-[#4d65ff]">*</span>
                        </label>
                        <input
                          type="text"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2.5 rounded-lg border text-[13px] transition-all bg-white/50 border-[#e0e0e0] text-[#1a1a1a] placeholder-[#999] focus:border-[#4d65ff] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4d65ff]/20"
                          placeholder="CEO, COO, etc."
                        />
                      </div>
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-[10px] font-semibold mb-1.5 uppercase tracking-[1px] text-[#666]">
                        Work Email <span className="text-[#4d65ff]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 rounded-lg border text-[13px] transition-all bg-white/50 border-[#e0e0e0] text-[#1a1a1a] placeholder-[#999] focus:border-[#4d65ff] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4d65ff]/20"
                        placeholder="you@company.com"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-[10px] font-semibold mb-1.5 uppercase tracking-[1px] text-[#666]">
                        Company <span className="text-[#4d65ff]">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 rounded-lg border text-[13px] transition-all bg-white/50 border-[#e0e0e0] text-[#1a1a1a] placeholder-[#999] focus:border-[#4d65ff] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4d65ff]/20"
                        placeholder="Your company name"
                      />
                    </div>

                    {/* Operation Type Dropdown */}
                    <div>
                      <label className="block text-[10px] font-semibold mb-1.5 uppercase tracking-[1px] text-[#666]">
                        Operation Type <span className="text-[#4d65ff]">*</span>
                      </label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2.5 rounded-lg border text-[13px] transition-all bg-white/50 border-[#e0e0e0] text-[#1a1a1a] focus:border-[#4d65ff] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4d65ff]/20"
                      >
                        <option value="">Select an operation type</option>
                        <option value="Invoice & AP/AR Automation">Invoice & AP/AR Automation (reconciliation, payments)</option>
                        <option value="Vendor & Supply Chain Ops">Vendor & Supply Chain Ops (portals, GRN, PO matching)</option>
                        <option value="Investor & Board Reporting">Investor & Board Reporting (fund ops, board packs)</option>
                        <option value="Customer Success & Renewals">Customer Success & Renewals (churn, pipeline)</option>
                        <option value="Compliance & Validation">Compliance & Validation (licences, audits)</option>
                        <option value="ERP & Data Queries">ERP & Data Queries (SAP, self service access)</option>
                        <option value="Other">Other / Not sure yet</option>
                      </select>
                    </div>

                    {/* Operational Challenge */}
                    <div>
                      <label className="block text-[10px] font-semibold mb-1.5 uppercase tracking-[1px] text-[#666]">
                        Biggest operational challenge <span className="text-[#4d65ff]">*</span>
                      </label>
                      <textarea
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full px-3 py-2.5 rounded-lg border text-[13px] transition-all resize-none bg-white/50 border-[#e0e0e0] text-[#1a1a1a] placeholder-[#999] focus:border-[#4d65ff] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4d65ff]/20"
                        placeholder="What's blocking your growth?"
                      />
                    </div>

                    {/* Error Message */}
                    {submitError && (
                      <div className="p-3 rounded-lg text-[13px] bg-red-50 border border-red-200 text-red-600">
                        {submitError}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting || !isFormValid}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1a1a1a] text-white rounded-lg text-[11px] font-semibold uppercase tracking-[1.5px] transition-all hover:bg-[#4d65ff] hover:shadow-lg hover:shadow-[#4d65ff]/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:bg-[#1a1a1a]"
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
                          <span>→</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Trust Note */}
              <p className="text-center text-[11px] mt-4 text-[#888]">
                Your information is secure and never shared.
              </p>
            </div>
          ) : (
            /* Thank You + Calendly Section */
            <div className="animate-fadeIn space-y-6">
              {/* Success Card */}
              <div className="relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#22c55e] via-[#4ade80] to-[#22c55e]" />

                <div className="p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#22c55e]/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-[#22c55e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h1 className="font-space text-[22px] font-medium text-[#1a1a1a] tracking-[-0.02em] mb-2">
                    Thanks! Pick a time that works.
                  </h1>
                  <p className="text-[13px] text-[#666]">
                    Schedule your free strategy call below.
                  </p>
                </div>
              </div>

              {/* Calendly Embed */}
              <div className="rounded-2xl overflow-hidden bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/srinath-cshift/strategy-session"
                  style={{ minWidth: '320px', height: '650px' }}
                />
              </div>

              {/* Alternative Contact */}
              <div className="text-center p-4 rounded-xl bg-white/50 border border-[#e5e5e5]">
                <p className="text-[11px] mb-1 text-[#888]">
                  Prefer email?
                </p>
                <a
                  href="mailto:contact@cshift.io"
                  className="text-[13px] text-[#4d65ff] hover:text-[#1a1a1a] transition-colors inline-flex items-center gap-1.5 font-medium"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  contact@cshift.io
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </main>
  );
}

export default function ContactPage() {
  return (
    <>
      <NavigationV2 />
      <Suspense fallback={
        <main className="min-h-screen bg-[#f5f7fa]">
          <section className="pt-28 pb-16 px-6 md:px-10">
            <div className="max-w-lg mx-auto">
              <div className="animate-pulse bg-white/80 rounded-2xl p-8 shadow-xl">
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
      <FooterV2 />
    </>
  );
}
