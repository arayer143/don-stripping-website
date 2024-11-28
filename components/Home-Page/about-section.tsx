'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Clock } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4">About Don&apos;s Stripping Inc.</h2>
        <p className="text-center text-lg mb-12 text-muted-foreground">
          Directing you towards success since 2003
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2 h-5 w-5 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              To provide top-quality surface stripping and painting services, ensuring customer satisfaction and success in every project we undertake.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Our Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              Our experienced professionals are dedicated to delivering excellence in every aspect of our work, from design to execution.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-primary" />
                Our Commitment
              </CardTitle>
            </CardHeader>
            <CardContent>
              We are committed to using the latest techniques and materials to ensure durability, safety, and aesthetic appeal in all our projects.
            </CardContent>
          </Card>
        </div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Meet Our Founder</CardTitle>
              <CardDescription>The driving force behind Don&apos;s Stripping Inc.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row items-center gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/dons-logo.webp" alt="Don" />
                <AvatarFallback>DN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold mb-2">Don&apos;s Stripping</h3>
                <p className="text-muted-foreground mb-4">
                  With over 20 years of experience in the industry, Don&apos;s has built a reputation for quality, reliability, and innovation in surface stripping and painting.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">20+ Years Experience</Badge>
                  <Badge variant="outline">Industry Leader</Badge>
                  <Badge variant="outline">Community Advocate</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Button asChild size="lg" className="group">
            <Link href="/contact">
              Get in touch with us today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
