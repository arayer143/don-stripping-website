'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-foreground">Contact Us</h1>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-muted-foreground">
            Get in touch with Don&apos;s Stripping Inc. for all your surface preparation and painting needs. We&apos;re here to help!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span>info@donsstripping.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                <span>123 Main St, Anytown, USA 12345</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
