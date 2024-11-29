'use client'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { PenTool, Ruler, SignpostBig, Accessibility, BellIcon as Ball, SquareIcon } from 'lucide-react'

const services = [
  { 
    name: "Design and Layout", 
    description: "Expert design and layout services for parking lots, roads, and recreational areas.",
    icon: PenTool
  },
  { 
    name: "Wheel-stops", 
    description: "Installation and painting of durable wheel-stops for parking areas.",
    icon: Ruler
  },
  { 
    name: "Signs", 
    description: "Custom signage solutions including handicap parking, directional signs, and more.",
    icon: SignpostBig
  },
  { 
    name: "ADA compliance", 
    description: "Ensuring your surfaces meet all current ADA standards and regulations.",
    icon: Accessibility
  },
  { 
    name: "Basketball courts", 
    description: "Professional basketball court design, painting, and line marking.",
    icon: Ball
  },
  { 
    name: "Tennis and Pickleball courts", 
    description: "Specialized court painting and lining for tennis and pickleball facilities.",
    icon: SquareIcon
  }
]

export default function Services() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4">Our Services</h2>
        <p className="text-center text-lg mb-12 text-muted-foreground">
          Don&apos;s Stripping Inc. - Delivering excellence in surface marking and recreational court solutions
        </p>
        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <service.icon className="mr-2 h-5 w-5 text-primary" />
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}