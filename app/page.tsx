import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">The Local Bar And Kitchen</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#menu" className="text-sm font-medium hover:underline underline-offset-4">
              Menu
            </Link>
            <Link href="#reservations" className="text-sm font-medium hover:underline underline-offset-4">
              Reservations
            </Link>
            <Link href="#events" className="text-sm font-medium hover:underline underline-offset-4">
              Events
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex">Book a Table</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[70vh] w-full overflow-hidden">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="The Local Bar And Kitchen - Cozy restaurant interior with ambient lighting and happy customers"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">The Local Bar And Kitchen</h1>
              <p className="text-xl md:text-2xl mb-8">Where Food Meets Vibe</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#menu">View Menu</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                  <Link href="#reservations">Book a Table</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-12 bg-muted">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Delicious food from our menu"
                    width={300}
                    height={200}
                    className="rounded-md mb-4 object-cover"
                  />
                  <h2 className="text-2xl font-bold mb-2">Our Menu</h2>
                  <p className="mb-4 text-muted-foreground">Explore our delicious selection of food and drinks</p>
                  <Button variant="outline" asChild>
                    <Link href="#menu">View Menu</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Reserved table with elegant setting"
                    width={300}
                    height={200}
                    className="rounded-md mb-4 object-cover"
                  />
                  <h2 className="text-2xl font-bold mb-2">Reservations</h2>
                  <p className="mb-4 text-muted-foreground">Book your table online for a seamless dining experience</p>
                  <Button variant="outline" asChild>
                    <Link href="#reservations">Book a Table</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Special event at our restaurant"
                    width={300}
                    height={200}
                    className="rounded-md mb-4 object-cover"
                  />
                  <h2 className="text-2xl font-bold mb-2">Events</h2>
                  <p className="mb-4 text-muted-foreground">Check out our upcoming events and special nights</p>
                  <Button variant="outline" asChild>
                    <Link href="#events">View Events</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Opening Hours & Location Section */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Opening Hours</h2>
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-medium">When to Visit Us</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span>11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span>11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>12:00 PM - 9:00 PM</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href="#reservations">Make a Reservation</Link>
                </Button>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Find Us</h2>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="font-medium">Our Location</span>
                </div>
                <p className="mb-4">123 Main Street, Anytown, ST 12345</p>
                <div className="h-[250px] bg-muted rounded-md overflow-hidden relative mb-4">
                  <Image
                    src="/placeholder.svg?height=250&width=500&text=Google+Map"
                    alt="Map location of The Local Bar And Kitchen"
                    fill
                    className="object-cover"
                  />
                </div>
                <Button variant="outline" asChild>
                  <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Feed Preview */}
        <section className="py-12 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6 text-center">Follow Us on Instagram</h2>
            <p className="text-center text-muted-foreground mb-8">@thelocalbarandkitchen</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="aspect-square relative overflow-hidden rounded-md">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Instagram+Post+${item}`}
                    alt={`Instagram post ${item}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                  <span>View Instagram</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience The Local?</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join us for great food, amazing drinks, and unforgettable moments. Book your table now or order online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="#reservations">Book a Table</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="#order">Order Online</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-12 border-t">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">The Local Bar And Kitchen</h3>
              <p className="text-muted-foreground mb-4">Where Food Meets Vibe</p>
              <div className="flex space-x-4">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <address className="not-italic text-muted-foreground">
                <p>123 Main Street</p>
                <p>Anytown, ST 12345</p>
                <p className="mt-2">Phone: (555) 123-4567</p>
                <p>Email: info@thelocalbarandkitchen.com</p>
              </address>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Mon - Thu:</span>
                  <span>11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Fri - Sat:</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>12:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} The Local Bar And Kitchen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
