
import { CTASection } from '@/components/CTA-section'
import { Footer } from '@/components/footer'

import { Navbar } from '@/components/navbar'
import ServicesContent from '@/components/services-page'

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

<ServicesContent />

      <CTASection />
  
    
      <Footer />
    </main>
  )
}
