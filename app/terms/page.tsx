'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { NavigationV4 } from '@/components/landing-v4/NavigationV4'
import { Footer } from '@/components/landing/Footer'

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className={`text-sm mb-12 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            Last updated: December 2025
          </p>

          <div className={`prose prose-sm max-w-none ${isDark ? 'prose-invert' : ''}`}>
            <section className="mb-10">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Agreement to Terms
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                By accessing or using the CoreShift website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Services
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                CoreShift Ventures LLP provides business transformation consulting, custom software development, and operational systems design services. Specific terms for individual projects will be outlined in separate service agreements.
              </p>
            </section>

            <section className="mb-10">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Use of Website
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website. Prohibited behavior includes:
              </p>
              <ul className={`list-disc pl-6 space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Transmitting malicious code or harmful content</li>
                <li>Using automated systems to access the website without permission</li>
                <li>Misrepresenting your identity or affiliation</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Intellectual Property
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                All content on this website, including text, graphics, logos, and software, is the property of CoreShift Ventures LLP and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Disclaimer
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                The information on this website is provided "as is" without any warranties, express or implied. We do not guarantee that the website will be error-free, secure, or continuously available. Case studies and results shown are examples and individual outcomes may vary.
              </p>
            </section>

            <section className="mb-10">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Limitation of Liability
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                To the fullest extent permitted by law, CoreShift Ventures LLP shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Third-Party Links
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites. We encourage you to review their terms and policies.
              </p>
            </section>

            <section className="mb-10">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Governing Law
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
              </p>
            </section>

            <section className="mb-10">
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Changes to Terms
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-100' : 'text-brand-charcoal'}`}>
                Contact Us
              </h2>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <a href="mailto:contact@cshift.io" className="text-[#ec5f2b] hover:underline">
                  contact@cshift.io
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
