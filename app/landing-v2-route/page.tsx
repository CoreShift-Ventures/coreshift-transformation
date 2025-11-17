'use client';

import { Navigation } from '@/components/landing-v2/Navigation';
import { TransformationHeroV2 } from '@/components/landing-v2/TransformationHeroV2';
import { TransformationExpertise } from '@/components/landing-v2/TransformationExpertise';
import { ProcessGapSection } from '@/components/landing-v2/ProcessGapSection';
import { CoreShiftDifference } from '@/components/landing-v2/CoreShiftDifference';
import { TransformationPaths } from '@/components/landing-v2/TransformationPaths';
import { HowItWorks } from '@/components/landing-v2/HowItWorks';
import { CaseStudies } from '@/components/landing-v2/CaseStudies';
import { TechnologyStack } from '@/components/landing-v2/TechnologyStack';
import { WhyTransformationFails } from '@/components/landing-v2/WhyTransformationFails';
import { FAQSectionV2 } from '@/components/landing-v2/FAQSectionV2';
import { FinalCTA } from '@/components/landing-v2/FinalCTA';
import { Footer } from '@/components/landing/Footer';

export default function LandingV2() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero - Business Process Transformation */}
        <TransformationHeroV2 />

        {/* Transformation Expertise & Trust */}
        <TransformationExpertise />

        {/* The Process Transformation Gap */}
        <ProcessGapSection />

        {/* The CoreShift Difference */}
        <CoreShiftDifference />

        {/* Process Transformation Paths */}
        <TransformationPaths />

        {/* How Business Process Transformation Works */}
        <section id="how-it-works">
          <HowItWorks />
        </section>

        {/* Real Process Transformations */}
        <section id="case-studies">
          <CaseStudies />
        </section>

        {/* Enterprise-Grade Technology Stack */}
        <TechnologyStack />

        {/* Why Process Transformation Fails */}
        <WhyTransformationFails />

        {/* FAQ */}
        <section id="faq">
          <FAQSectionV2 />
        </section>

        {/* Final CTA */}
        <FinalCTA />

        <Footer />
      </main>
    </>
  );
}
