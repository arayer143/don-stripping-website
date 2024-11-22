import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">About StripeRight</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Story</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Founded in 2005, StripeRight has been providing top-quality concrete striping and marking services for over 15 years.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We strive to deliver precise, durable, and visually appealing striping solutions that enhance safety and organization in various environments.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Our Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                With a team of skilled professionals and state-of-the-art equipment, we ensure every project meets the highest standards of quality and compliance.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
