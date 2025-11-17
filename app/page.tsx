'use client'

import { NavigationV4 } from '@/components/landing-v4/NavigationV4'
import HeroV4 from '@/components/landing-v4/HeroV4'
import { TrustTicker } from '@/components/landing-v3/TrustTicker'
import WhatWeDoSection from '@/components/landing-v4/WhatWeDoSection'
import WhyThisMattersSection from '@/components/landing-v4/WhyThisMattersSection'
import WhyCoreShiftSection from '@/components/landing-v4/WhyCoreShiftSection'
import EveryOtherOptionSection from '@/components/landing-v4/EveryOtherOptionSection'
import FAQSectionV4 from '@/components/landing-v4/FAQSectionV4'
import FinalCTAV4 from '@/components/landing-v4/FinalCTAV4'
import { Footer } from '@/components/landing/Footer'

export default function Home() {
  return (
    <>
      <NavigationV4 />
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroV4 />

        {/* Trust Ticker - Founder Credibility */}
        <TrustTicker />

        {/* What We Do - 3 Services */}
        <WhatWeDoSection />

        {/* Why This Matters - Problem/Impact */}
        <WhyThisMattersSection />

        {/* Why CoreShift - Differentiators */}
        <WhyCoreShiftSection />

        {/* Every Other Option - Problem/Cost */}
        <EveryOtherOptionSection />

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
