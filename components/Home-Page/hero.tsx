'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] [mask-image:radial-gradient(white,transparent_70%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block text-primary text-center">Don&apos;s Stripping Inc.</span>
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
             
              </span>
            </h1>
            <p className="mb-6 text-lg sm:text-xl font-semibold text-muted-foreground">
              Directing you towards success in every line and surface
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="group w-full sm:w-auto">
                Get a Free Estimate
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Our Services
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl relative">
              <Image
                src="/don striping.webp"
                alt="Don's Stripping Inc. in action"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover"
              />
            </div>
            <motion.div 
              className="mt-6 md:absolute md:-bottom-6 md:-left-6 md:right-6 bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="font-bold text-lg mb-2 text-card-foreground">Why Choose Us?</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {['20+ Years Experience', 'Licensed & Insured', 'Quality Guaranteed'].map((item, index) => (
                  <li key={index} className="flex items-center text-card-foreground">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

