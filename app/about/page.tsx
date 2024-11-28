
import AboutContent from '@/components/about-page'
import { CTASection } from '@/components/CTA-section'
import { Footer } from '@/components/footer'

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

<AboutContent />

      <CTASection />
  
    
      <Footer />
    </main>
  )
}
