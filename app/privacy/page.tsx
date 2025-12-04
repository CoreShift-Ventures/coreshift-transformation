'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { NavigationV4 } from '@/components/landing-v4/NavigationV4'
import { Footer } from '@/components/landing/Footer'

export default function PrivacyPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && theme === 'dark'

  return (
    <main className={`min-h-screen ${isDark ? 'bg-black' : 'bg-white'}`}>
      <NavigationV4 />

      <div className="pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-brand-charcoal'}`}>
            Privacy Policy
          </h1>
          <p className={`text-sm mb-12 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            Last updated: December 2025
          </p>

          <div className={`prose prose-sm max-w-none ${isDark ? 'prose-invert' : ''}`}>
            <section className="mb-10">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Overview
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                CoreShift Ventures LLP ("CoreShift", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Information We Collect
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                We collect information you provide directly to us, including:
              </p>
              <ul className={`list-disc pl-6 space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>Name and contact information (email address)</li>
                <li>Company name and role</li>
                <li>Messages and inquiries submitted through our contact forms</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                How We Use Your Information
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                We use the information we collect to:
              </p>
              <ul className={`list-disc pl-6 space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you information about our services that may interest you</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Data Storage & Security
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                We implement industry-standard security measures to protect your personal information, including encryption in transit and at rest. Our infrastructure providers maintain SOC 2 compliance and follow best practices for data protection.
              </p>
            </section>

            <section className="mb-10">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Data Sharing
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only with service providers who assist us in operating our website and conducting our business, and who agree to keep this information confidential.
              </p>
            </section>

            <section className="mb-10">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Your Rights
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                You have the right to:
              </p>
              <ul className={`list-disc pl-6 space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Cookies
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Our website uses essential cookies to ensure proper functionality. We do not use tracking or advertising cookies. Your theme preference (light/dark mode) is stored locally on your device.
              </p>
            </section>

            <section className="mb-10">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Contact Us
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <a href="mailto:contact@cshift.io" className="text-[#ec5f2b] hover:underline">
                  contact@cshift.io
                </a>
              </p>
            </section>

            <section>
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Changes to This Policy
              </h2>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
