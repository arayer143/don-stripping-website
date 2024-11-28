'use client'

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { CheckCircle } from 'lucide-react'

const services = [
  { name: "Design and Layout", description: "Expert design and layout services for your surfaces." },
  { name: "Wheel-stops", description: "Installation of durable wheel-stops for parking areas." },
  { name: "Signs", description: "Custom signage solutions for your property." },
  { name: "ADA compliance", description: "Ensuring your surfaces meet ADA standards." },
  { name: "Basketball courts", description: "Professional basketball court painting and lining." },
  { name: "Tennis and Pickleball courts", description: "Specialized court painting for tennis and pickleball." }
]

export default function Services() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-4">Our Services</h2>
      <p className="text-center text-lg mb-12 text-muted-foreground">
        Don&apos;s Stripping Inc. - Directing you towards success in all your surface needs
      </p>
      <Tabs defaultValue="design" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {services.map((service, index) => (
            <TabsTrigger key={index} value={service.name.toLowerCase().replace(/\s+/g, '-')}>
              {service.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {services.map((service, index) => (
          <TabsContent key={index} value={service.name.toLowerCase().replace(/\s+/g, '-')}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    {service.name}
                  </CardTitle>
                  <p>{service.description}</p>
                </CardHeader>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
