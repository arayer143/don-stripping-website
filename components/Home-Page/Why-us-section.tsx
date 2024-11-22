import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Palette, Users } from 'lucide-react'

export function WhyChooseUsSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose StripeRight?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CheckCircle className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Quality Assurance</CardTitle>
            </CardHeader>
            <CardContent>
              We use premium materials and advanced techniques to ensure long-lasting, vibrant striping that withstands heavy use and weather conditions.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Clock className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Timely Completion</CardTitle>
            </CardHeader>
            <CardContent>
              Our efficient team works diligently to complete projects on schedule, minimizing disruption to your operations.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Palette className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Customization</CardTitle>
            </CardHeader>
            <CardContent>
              We offer a wide range of colors and designs to meet your specific needs and comply with local regulations.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="w-8 h-8 mb-2 text-primary" />
              <CardTitle>Expert Team</CardTitle>
            </CardHeader>
            <CardContent>
              Our experienced professionals are knowledgeable in ADA compliance and industry best practices for optimal results.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

