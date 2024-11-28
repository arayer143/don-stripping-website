import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Award, Users, Truck } from 'lucide-react'

export default function AboutContent() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-foreground">About Don&apos;s Stripping Inc.</h1>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-muted-foreground">
            With over 20 years of experience, Don&apos;s Stripping Inc. has been a leader in surface preparation and painting services. Our commitment to quality and customer satisfaction has made us the go-to choice for businesses and homeowners alike.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Experience", icon: Clock, description: "20+ years in the industry" },
            { title: "Quality", icon: Award, description: "Unmatched attention to detail" },
            { title: "Team", icon: Users, description: "Skilled and certified professionals" },
            { title: "Service Area", icon: Truck, description: "Covering the entire South Shore" }
          ].map((item, index) => (
            <Card key={index} className="bg-card text-card-foreground">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <item.icon className="w-5 h-5 mr-2 text-primary" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Our Certifications</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Licensed", "Insured", "DBE Certified", "EPA Lead-Safe Certified"].map((cert, index) => (
              <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}