import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Paintbrush, Ruler, ShieldCheck, Truck } from 'lucide-react'

export function ServicesSection() {
  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <Paintbrush className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Parking Lot Striping</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Clear and durable line markings for efficient parking space organization.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Ruler className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Road Marking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                High-visibility road markings for improved traffic flow and safety.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <ShieldCheck className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Safety Markings</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Specialized markings for hazard areas, fire lanes, and pedestrian crossings.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Truck className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Warehouse Striping</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Customized floor markings for efficient warehouse organization and safety.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}