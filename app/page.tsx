
import { CTASection } from '@/components/CTA-section'
import { Footer } from '@/components/footer'
import About from '@/components/Home-Page/about-section'
import Hero from '@/components/Home-Page/hero'
import Services from '@/components/Home-Page/services-section'
import WhyChooseUs from '@/components/Home-Page/Why-us-section'
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
      <Hero />
   <About />
   <Services />
      <WhyChooseUs />
      
      
      <CTASection />
  
    
      <Footer />
    </main>
  )
}

