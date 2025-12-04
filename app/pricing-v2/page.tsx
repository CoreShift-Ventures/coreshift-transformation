import PricingSection from '@/components/landing-v4/PricingSection'
import { NavigationV4 } from '@/components/landing-v4/NavigationV4'
import { Footer } from '@/components/landing/Footer'

export const metadata = {
  title: 'Pricing | CoreShift - Business Systems Architecture',
  description: 'Transparent pricing for Blueprint Sprint, Systems & Automation, and Fractional COO services. Clarity in 2 weeks. Systems in 8 weeks. Growth forever.',
}

export default function PricingV2Page() {
  return (
    <main className="min-h-screen" style={{ hyphens: 'none', WebkitHyphens: 'none', msHyphens: 'none' }}>
      <NavigationV4 />
      <PricingSection />
      <Footer />
    </main>
  )
}
