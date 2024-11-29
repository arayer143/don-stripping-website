'use client'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CheckCircle, Clock, Shield, Truck, PaintBucket, HardHat, FileText, Droplet, Building } from 'lucide-react'

const services = [
  { 
    title: "Surface Preparation", 
    icon: PaintBucket,
    content: "Our expert team uses state-of-the-art equipment to thoroughly clean and prepare concrete surfaces, ensuring optimal adhesion for new coatings or treatments.",
    features: ["High-pressure washing", "Chemical cleaning", "Mechanical abrasion", "Dust-free grinding"]
  },
  { 
    title: "Coating Removal", 
    icon: HardHat,
    content: "We specialize in removing old, damaged, or unwanted coatings from concrete surfaces, restoring them to their original state or preparing them for new applications.",
    features: ["Paint stripping", "Epoxy removal", "Urethane coating removal", "Environmentally friendly methods"]
  },
  { 
    title: "Concrete Repair", 
    icon: Truck,
    content: "Our skilled technicians can repair cracks, spalls, and other damage to concrete surfaces, ensuring a smooth and durable foundation for new coatings or treatments.",
    features: ["Crack injection", "Spall repair", "Joint sealing", "Concrete resurfacing"]
  }
]

const reasons = [
  { title: "20 years of experience", content: "Two decades of expertise in surface stripping and concrete restoration." },
  { title: "Certified professionals", content: "Our team is certified in the latest concrete treatment techniques and safety protocols." },
  { title: "State-of-the-art equipment", content: "We use cutting-edge technology for efficient and effective concrete stripping." },
  { title: "Eco-friendly solutions", content: "Our processes and products are selected with environmental considerations in mind." },
  { title: "Customized approach", content: "We tailor our services to meet the specific needs of each project and client." },
  { title: "Timely project completion", content: "We respect your time and strive to complete projects within agreed-upon timeframes." },
  { title: "Comprehensive insurance", content: "Full coverage for peace of mind throughout the project duration." },
  { title: "Free, detailed estimates", content: "Transparent pricing with no hidden costs or obligations." }
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4">Why Choose Don&apos;s Stripping Inc.?</h2>
        <p className="text-center text-lg mb-12 text-muted-foreground">
          We&apos;re directing you towards success with our expertise and commitment to quality concrete services.
        </p>

        <Tabs defaultValue="services" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="services">Our Services</TabsTrigger>
            <TabsTrigger value="reasons">Why Us</TabsTrigger>
            <TabsTrigger value="info">Additional Info</TabsTrigger>
          </TabsList>
          <TabsContent value="services">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <service.icon className="mr-2 h-5 w-5 text-primary" />
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4">{service.content}</p>
                    <div className="mt-auto">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside text-sm">
                        {service.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reasons">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((reason, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{reason.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="info">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <FileText className="mr-2 h-5 w-5 text-primary" />
                    Estimate Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Don&apos;s Striping, Inc. provides free estimates based on:
                  </p>
                  <ul className="list-disc list-inside text-sm mt-2">
                    <li>Architectural plans</li>
                    <li>Drawings</li>
                    <li>Google Earth photos</li>
                    <li>On-site meetings</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Droplet className="mr-2 h-5 w-5 text-primary" />
                    Paint Type
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We use Sherwin Williams Setfast Premium Zone Marking Paint in oil or latex base as needed. Safety Data Sheets (SDS) are provided upon request.
                  </p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Building className="mr-2 h-5 w-5 text-primary" />
                    Insurance Coverage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Don&apos;s Striping, Inc. is fully licensed and insured, carrying:
                  </p>
                  <ul className="list-disc list-inside text-sm mt-2">
                    <li>Worker&apos;s Compensation insurance</li>
                    <li>$1,000,000 auto insurance</li>
                    <li>$2,000,000 general liability insurance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Badge variant="outline" className="text-lg py-2 px-4 mb-4">
            <Shield className="mr-2 h-5 w-5 text-primary" />
            Licensed & Insured
          </Badge>
          <p className="text-xl font-semibold flex items-center justify-center">
            <Clock className="mr-2 h-6 w-6 text-primary" />
            We work when you need us, ensuring minimal disruption to your operations.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
