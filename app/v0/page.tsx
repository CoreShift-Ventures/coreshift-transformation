'use client';

import { useState } from 'react';
import { HeroSection } from '@/components/landing/HeroSection';
import { ChallengeSection } from '@/components/landing/ChallengeSection';
import { ApproachSection } from '@/components/landing/ApproachSection';
import { GoalsWorkflowSection } from '@/components/landing/GoalsWorkflowSection';
import { LiveDemoSection } from '@/components/landing/LiveDemoSection';
import { ProcessFlowSection } from '@/components/landing/ProcessFlowSection';
import { TransformationOverview } from '@/components/landing/TransformationOverview';
import { PricingSection } from '@/components/landing/PricingSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { Footer } from '@/components/landing/Footer';
import { DemoOptionsModal } from '@/components/modals/DemoOptionsModal';
import { InstantAccessForm } from '@/components/forms/InstantAccessForm';
import { DemoQualificationForm } from '@/components/forms/DemoQualificationForm';

export default function V0Home() {
  const [showDemoOptions, setShowDemoOptions] = useState(false);
  const [showInstantAccess, setShowInstantAccess] = useState(false);
  const [showGuidedDemo, setShowGuidedDemo] = useState(false);

  const handleRequestDemo = () => {
    setShowDemoOptions(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ChallengeSection />
      <ApproachSection />
      <GoalsWorkflowSection />
      <LiveDemoSection onRequestDemo={handleRequestDemo} />
      <ProcessFlowSection />
      <TransformationOverview />
      <PricingSection />
      <FAQSection />
      <ContactSection />
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
  );
}
