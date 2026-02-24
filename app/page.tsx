'use client'

import { NavigationV4 } from '@/components/landing-v4/NavigationV4'
import HeroV4 from '@/components/landing-v4/HeroV4'
import { TrustTicker } from '@/components/landing-v3/TrustTicker'
import { CommandCenterTicker } from '@/components/landing-v4/CommandCenterTicker'
import WhoThisIsForSection from '@/components/landing-v4/WhoThisIsForSection'
import EveryOtherOptionSection from '@/components/landing-v4/EveryOtherOptionSection'
import WhatWeDoSection from '@/components/landing-v4/WhatWeDoSection'
import CaseStudiesSection from '@/components/landing-v4/CaseStudiesSection'
import WhyThisMattersSection from '@/components/landing-v4/WhyThisMattersSection'
import WhyCoreShiftSection from '@/components/landing-v4/WhyCoreShiftSection'
import CoreShiftDifferenceSection from '@/components/landing-v4/CoreShiftDifferenceSection'
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

        {/* Who This Is For - Target Audience */}
        <WhoThisIsForSection />

        {/* Every Other Option - Problem/Cost (moved up) */}
        <EveryOtherOptionSection />

        {/* Why CoreShift - Credibility (moved up for early trust) */}
        <WhyCoreShiftSection />

        {/* Case Studies Section */}
        <CaseStudiesSection />

        {/* What We Do - How We Work */}
        <WhatWeDoSection />

        {/* Why This Matters - Problem/Impact */}
        <WhyThisMattersSection />

        {/* CoreShift Difference Panel */}
        <CoreShiftDifferenceSection />

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
