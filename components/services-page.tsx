import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Paintbrush, Ruler, Truck, ShieldCheck } from 'lucide-react'

export default function ServicesContent() {
  const services = [
    { title: "Surface Stripping", icon: Paintbrush, description: "Professional removal of old paint and coatings" },
    { title: "Design and Layout", icon: Ruler, description: "Custom design services for parking lots and recreational areas" },
    { title: "Painting", icon: Paintbrush, description: "High-quality painting for asphalt and concrete surfaces" },
    { title: "ADA Compliance", icon: ShieldCheck, description: "Ensuring your surfaces meet ADA standards" },
    { title: "Wheel Stops", icon: Truck, description: "Installation and painting of wheel stops" },
    { title: "Line Striping", icon: Ruler, description: "Precise line striping for parking lots and roads" }
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-foreground">Our Services</h1>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-muted-foreground">
            Don&apos;s Stripping Inc. offers a comprehensive range of surface preparation and painting services. Our expert team ensures top-quality results for every project.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="bg-card text-card-foreground">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <service.icon className="w-5 h-5 mr-2 text-primary" />
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Areas We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["South Shore", "North Shore", "River Parishes", "Houma", "Baton Rouge", "Slidell"].map((area, index) => (
              <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

