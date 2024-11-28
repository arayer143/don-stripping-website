'use client'

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { MapPin } from 'lucide-react'

const areas = [
  "South Shore",
  "North Shore",
  "River Parishes",
  "Houma",
  "Baton Rouge",
  "Slidell"
]

export default function CoverageArea() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-4">Our Coverage Area</h2>
      <p className="text-center text-lg mb-8">
        Don&apos;s Stripping Inc. is directing you towards success in the following areas:
      </p>
      <motion.div 
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {areas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Badge variant="secondary" className="text-lg py-2 px-4">
              <MapPin className="mr-2 h-5 w-5 text-primary" />
              <span>{area}</span>
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

