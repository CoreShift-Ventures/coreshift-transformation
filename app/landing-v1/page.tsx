'use client';

import { useState } from 'react';
import { Navigation } from '@/components/shared/Navigation';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProductVideoSection } from '@/components/landing/ProductVideoSection';
import { ThreePathSection } from '@/components/landing/ThreePathSection';
import { HostingComparisonTable } from '@/components/landing/HostingComparisonTable';
import { BlueprintCredibilitySection } from '@/components/landing/BlueprintCredibilitySection';
import { ProblemAmplificationSection } from '@/components/landing/ProblemAmplificationSection';
import { RevenueLeakCalculator } from '@/components/landing/RevenueLeakCalculator';
import { PathDecisionTreeSection } from '@/components/landing/PathDecisionTreeSection';
import { PricingTransparencySection } from '@/components/landing/PricingTransparencySection';
import { TransformationFAQSection } from '@/components/landing/TransformationFAQSection';
import { ChallengeSection } from '@/components/landing/ChallengeSection';
import { WhyUsSection } from '@/components/landing/WhyUsSection';
import { CompetitivePositioningSection } from '@/components/landing/CompetitivePositioningSection';
import { ApproachSection } from '@/components/landing/ApproachSection';
import { InvestmentOwnershipSection } from '@/components/landing/InvestmentOwnershipSection';
import { LiveDemoSection } from '@/components/landing/LiveDemoSection';
import { UrgencyCTASection } from '@/components/landing/UrgencyCTASection';
import { FAQSection } from '@/components/landing/FAQSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { Footer } from '@/components/landing/Footer';
import { DemoOptionsModal } from '@/components/modals/DemoOptionsModal';
import { InstantAccessForm } from '@/components/forms/InstantAccessForm';
import { DemoQualificationForm } from '@/components/forms/DemoQualificationForm';

export default function Home() {
  const [showDemoOptions, setShowDemoOptions] = useState(false);
  const [showInstantAccess, setShowInstantAccess] = useState(false);
  const [showGuidedDemo, setShowGuidedDemo] = useState(false);

  const handleRequestDemo = () => {
    setShowDemoOptions(true);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* New Transformation Landing Flow */}
        <HeroSection />
        <ProductVideoSection />
        <ThreePathSection />
        <HostingComparisonTable />
        <BlueprintCredibilitySection />
        <ProblemAmplificationSection />
        <RevenueLeakCalculator />
        <PathDecisionTreeSection />
        <PricingTransparencySection />
        <TransformationFAQSection />

        {/* Original Sections - Keep for Now */}
        <section id="competitive">
          <CompetitivePositioningSection />
        </section>
        <section id="approach">
          <ApproachSection />
        </section>
        <section id="pricing">
          <InvestmentOwnershipSection />
        </section>
        <section id="demo">
          <LiveDemoSection onRequestDemo={handleRequestDemo} />
        </section>
        <section id="urgency">
          <UrgencyCTASection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />

      {/* Global Modals */}
      <DemoOptionsModal
        isOpen={showDemoOptions}
        onClose={() => setShowDemoOptions(false)}
        onSelectInstantAccess={() => {
          setShowDemoOptions(false);
          setShowInstantAccess(true);
        }}
        onSelectGuidedDemo={() => {
          setShowDemoOptions(false);
          setShowGuidedDemo(true);
        }}
      />

      {showInstantAccess && (
        <InstantAccessForm onClose={() => setShowInstantAccess(false)} />
      )}

        {showGuidedDemo && (
          <DemoQualificationForm onClose={() => setShowGuidedDemo(false)} />
        )}
      </main>
    </>
  );
}
