import { CookieConsentPopup } from '@/components/cookie-consent-popup'
import { CTASection } from '@/components/CTA-section'
import { Footer } from '@/components/footer'
import { AboutSection } from '@/components/Home-Page/about-section'
import { HeroSection } from '@/components/Home-Page/hero-section'
import { ServicesSection } from '@/components/Home-Page/services-section'
import { WhyChooseUsSection } from '@/components/Home-Page/Why-us-section'
import { Navbar } from '@/components/navbar'

import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: 'My Page',
    description: 'This is a blank page with metadata.',
  }
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CTASection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CookieConsentPopup />
      <Footer />
    </main>
  )
}

