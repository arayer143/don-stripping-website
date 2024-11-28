'use client'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { Star, Clock } from 'lucide-react'

const reasons = [
  { title: "20 years of experience", content: "Two decades of expertise in surface stripping and painting." },
  { title: "DBE", content: "Certified Disadvantaged Business Enterprise." },
  { title: "Licensed", content: "Fully licensed to operate in all our service areas." },
  { title: "Fully Insured", content: "Comprehensive insurance coverage for your peace of mind." },
  { title: "Professional", content: "Committed to the highest standards of professionalism." },
  { title: "Locally owned", content: "Deeply rooted in the local community." },
  { title: "Family operated", content: "A family business that treats clients like family." },
  { title: "Free Estimates", content: "Transparent pricing with no obligation estimates." }
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-4">Why Choose Don&apos;s Stripping Inc.?</h2>
      <p className="text-center text-lg mb-12 text-muted-foreground">
        We&apos;re directing you towards success with our expertise and commitment
      </p>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="mr-2 h-5 w-5 text-primary" />
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Learn More</AccordionTrigger>
                    <AccordionContent>
                      {reason.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-12 text-center">
        <p className="text-xl font-semibold flex items-center justify-center">
          <Clock className="mr-2 h-6 w-6 text-primary animate-spin" />
          We work when you need us.
        </p>
      </div>
    </section>
  )
}
