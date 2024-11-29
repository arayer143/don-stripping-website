'use client'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { PaintBucket, Ruler, Truck, ShieldCheck, Paintbrush, RouteIcon as Road } from 'lucide-react'

const services = [
  { 
    name: "Parking Lot Striping", 
    description: "Precise line marking for parking spaces, handicap zones, and traffic flow indicators.",
    icon: Road
  },
  { 
    name: "Asphalt Sealcoating", 
    description: "Protective sealant application to extend the life of your asphalt surfaces.",
    icon: PaintBucket
  },
  { 
    name: "Concrete Sealing", 
    description: "Application of sealants to protect concrete surfaces from wear and staining.",
    icon: Paintbrush
  },
  { 
    name: "ADA Compliance", 
    description: "Ensuring your surfaces meet all current ADA standards and regulations.",
    icon: ShieldCheck
  },
  { 
    name: "Pavement Marking", 
    description: "Clear and durable markings for roads, bike lanes, and pedestrian crossings.",
    icon: Ruler
  },
  { 
    name: "Thermoplastic Application", 
    description: "Long-lasting, highly visible markings for high-traffic areas.",
    icon: Truck
  }
]

export default function Services() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4">Our Services</h2>
        <p className="text-center text-lg mb-12 text-muted-foreground">
          Don&apos;s Stripping Inc. - Delivering excellence in concrete and asphalt surface solutions
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
