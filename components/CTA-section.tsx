import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Space?</h2>
        <p className="mb-8 text-lg">
          Get in touch with us today for a free consultation and quote on your striping project.
        </p>
        <Button variant="secondary" size="lg">
          Get Your Free Quote
        </Button>
      </div>
    </section>
  )
}

