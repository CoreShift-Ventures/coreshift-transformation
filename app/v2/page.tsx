'use client'

import {
  NavigationV2,
  HeroV2,
  CapabilityCardsV2,
  PlatformExplorerV2,
  WhyAgentsV2,
  IndustryVerticalsV2,
  PricingV2,
  FAQV2,
  ExpertiseGroupV2,
  FooterV2,
} from '@/components/v2'

export default function V2Page() {
  return (
    <div className="v2-page">
      <NavigationV2 />
      <main className="min-h-screen" style={{ hyphens: 'none', WebkitHyphens: 'none' }}>
        {/* Hero Section */}
        <HeroV2 />

        {/* Capability Cards */}
        <CapabilityCardsV2 />

        {/* Platform Explorer */}
        <PlatformExplorerV2 />

        {/* Why Agents Section (includes Before/After + Agent Studio + Comparison) */}
        <WhyAgentsV2 />

        {/* Industry Verticals */}
        <IndustryVerticalsV2 />

        {/* Pricing / Engagement Model */}
        <PricingV2 />

        {/* FAQ Section */}
        <FAQV2 />

        {/* Expertise & Group */}
        <ExpertiseGroupV2 />

        {/* Footer */}
        <FooterV2 />
      </main>
    </div>
  )
}
