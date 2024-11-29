import { Facebook, Instagram, Twitter, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Don&apos;s Stripping Inc.</h3>
            <p className="text-sm text-muted-foreground">
              Providing top-quality surface stripping and painting services since 2003. Directing you towards success in every line and surface.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p className="text-sm text-muted-foreground mb-2">123 Main St, Anytown, USA 12345</p>
            <div className="space-y-2 flex flex-col items-center">
              <Button variant="outline" asChild size="sm" className="w-auto">
                <a href="tel:+11234567890" className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  (123) 456-7890
                </a>
              </Button>
              <Button variant="outline" asChild size="sm" className="w-auto">
                <a href="mailto:info@donsstripping.com" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  info@donsstripping.com
                </a>
              </Button>
            </div>
            <h4 className="text-md font-semibold mt-4 mb-2">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Don&apos;s Stripping Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
