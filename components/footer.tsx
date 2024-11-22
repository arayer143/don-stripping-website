import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">StripeRight</h3>
            <p className="text-sm text-muted-foreground">
              Professional concrete striping and marking services for all your needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm hover:underline">About Us</a></li>
              <li><a href="#services" className="text-sm hover:underline">Our Services</a></li>
              <li><a href="#contact" className="text-sm hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} StripeRight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
