'use client'

import { Navigation } from '@/components/landing-v2/Navigation'
import { TransformationHeroV3 } from '@/components/landing-v3/TransformationHeroV3'
import { TrustTicker } from '@/components/landing-v3/TrustTicker'
import { UniversalProblems } from '@/components/landing-v3/UniversalProblems'
import ProcessSolutionsGrid from '@/components/landing-v3/ProcessSolutionsGrid'
import { CustomTransformationCallout } from '@/components/landing-v3/CustomTransformationCallout'
import { AIIntelligenceSection } from '@/components/landing-v3/AIIntelligenceSection'
import TransformationApproach from '@/components/landing-v3/TransformationApproach'
import FAQSection from '@/components/landing-v3/FAQSection'
import { Footer } from '@/components/landing/Footer'

export default function LandingV3Page() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero - V3.1 Content with V2 Styling */}
        <TransformationHeroV3 />

        {/* Trust Ticker - Simple text bar */}
        <TrustTicker />

        {/* Universal Problems - Pain points */}
        <UniversalProblems />

        {/* Process Solutions Grid - V3.1 New Component */}
        <ProcessSolutionsGrid />

        {/* Custom Transformation Callout */}
        <CustomTransformationCallout />

        {/* AI Intelligence Layer */}
        <AIIntelligenceSection />

        {/* Transformation Approach */}
        <TransformationApproach />

        {/* FAQ Section */}
        <FAQSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}
