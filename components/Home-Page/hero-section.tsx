import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Concrete striping in action"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Professional Concrete Striping Solutions
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
          Enhance safety and organization with our expert striping services for parking lots, warehouses, and more.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="text-lg px-8">
            Get a Free Quote
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 bg-white bg-opacity-10 hover:bg-opacity-20">
            Our Services
          </Button>
        </div>
      </div>
    </section>
  )
}

