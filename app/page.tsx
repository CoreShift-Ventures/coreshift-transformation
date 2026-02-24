'use client'

import { NavigationV4 } from '@/components/landing-v4/NavigationV4'
import HeroV4 from '@/components/landing-v4/HeroV4'
import { TrustTicker } from '@/components/landing-v3/TrustTicker'
import { CommandCenterTicker } from '@/components/landing-v4/CommandCenterTicker'
import EveryOtherOptionSection from '@/components/landing-v4/EveryOtherOptionSection'
import CaseStudiesSection from '@/components/landing-v4/CaseStudiesSection'
import WhatWeDoSection from '@/components/landing-v4/WhatWeDoSection'
import FAQSectionV4 from '@/components/landing-v4/FAQSectionV4'
import FinalCTAV4 from '@/components/landing-v4/FinalCTAV4'
import { Footer } from '@/components/landing/Footer'

export default function Home() {
  return (
    <>
      <NavigationV4 />
      <main className="min-h-screen" style={{ hyphens: 'none', WebkitHyphens: 'none', msHyphens: 'none' }}>
        {/* Hero Section */}
        <HeroV4 />

        {/* Trust Ticker - Stats + Founder Credibility */}
        <TrustTicker />

        {/* Command Center Live Ticker */}
        <CommandCenterTicker />

        {/* The Gap - Why AI Alone Isn't Enough */}
        <EveryOtherOptionSection />

        {/* Agents Portfolio */}
        <CaseStudiesSection />

        {/* How It Works - Process */}
        <WhatWeDoSection />

        {/* FAQ */}
        <FAQSectionV4 />

        {/* Final CTA */}
        <FinalCTAV4 />

        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}
