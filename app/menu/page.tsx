import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function MenuPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">The Local Bar And Kitchen</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/menu" className="text-sm font-medium underline underline-offset-4">
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
        {/* Menu Header */}
        <section className="bg-muted py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-2"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to Home
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold">THE LOCAL MENU</h1>
                <p className="text-muted-foreground mt-2">Featuring the best local ingredients and craft beverages</p>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download PDF Menu
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline" className="bg-background">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span> Vegetarian (V)
              </Badge>
              <Badge variant="outline" className="bg-background">
                <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" /> Popular Item
              </Badge>
            </div>
          </div>
        </section>

        {/* Menu Content */}
        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="burgers" className="w-full">
              <TabsList className="w-full justify-start mb-8 overflow-auto">
                <TabsTrigger value="burgers">Burgers</TabsTrigger>
                <TabsTrigger value="chef-choice">Chef Choice</TabsTrigger>
                <TabsTrigger value="pizza">Pizza</TabsTrigger>
                <TabsTrigger value="salad">Salad</TabsTrigger>
                <TabsTrigger value="basket">Basket</TabsTrigger>
                <TabsTrigger value="share">Share</TabsTrigger>
                <TabsTrigger value="kids">Kids Meals</TabsTrigger>
                <TabsTrigger value="drinks">Drinks</TabsTrigger>
              </TabsList>

              {/* Burgers */}
              <TabsContent value="burgers">
                <div className="grid gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">🍔 BURGERS</h2>
                    <p className="text-muted-foreground mb-6">All served with chips</p>
                    <div className="grid gap-6">
                      <div className="flex flex-col md:flex-row gap-4 bg-muted/50 p-4 rounded-lg">
                        <div className="md:w-1/4 flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=150&width=200&text=Local+Burger"
                            alt="The Local Burger"
                            width={200}
                            height={150}
                            className="rounded-md object-cover w-full h-auto"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-semibold">The Local Burger</h3>
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            </div>
                            <span className="font-medium">R125</span>
                          </div>
                          <p className="text-muted-foreground mt-1">
                            Local's classic beef, chicken or veg patty stacked with bacon and cheese.
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between items-start p-4">
                        <div>
                          <h3 className="text-lg font-semibold">Cheesy Cape Burger</h3>
                          <p className="text-muted-foreground mt-1">
                            Beef, chicken or veg patty with a slice of cheese, chutney and tomato.
                          </p>
                        </div>
                        <span className="font-medium">R135</span>
                      </div>

                      <div className="flex justify-between items-start p-4 bg-muted/50 rounded-lg">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold">The Big Daddy</h3>
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          </div>
                          <p className="text-muted-foreground mt-1">
                            Double beef or veg patty with rocket, jalapeños, cheese and fried onion.
                          </p>
                        </div>
                        <span className="font-medium">R145</span>
                      </div>

                      <div className="flex justify-between items-start p-4">
                        <div>
                          <h3 className="text-lg font-semibold">The Cheesy Buddy</h3>
                          <p className="text-muted-foreground mt-1">
                            Single patty (beef, chicken or veg) topped with cheese, lettuce and our special house sauce.
                          </p>
                        </div>
                        <span className="font-medium">R115</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Chef Choice */}
              <TabsContent value="chef-choice">
                <div className="grid gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">👨‍🍳 THE CHEF CHOICE</h2>
                    <div className="grid gap-6">
                      <div className="flex flex-col md:flex-row gap-4 bg-muted/50 p-4 rounded-lg">
                        <div className="md:w-1/4 flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=150&width=200&text=Chicken+Schnitzel"
                            alt="Chicken Schnitzel"
                            width={200}
                            height={150}
                            className="rounded-md object-cover w-full h-auto"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-semibold">Chicken Schnitzel</h3>
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            </div>
                            <span className="font-medium">R99</span>
                          </div>
                          <p className="text-muted-foreground mt-1">
                            With our famous schnitzel sauce served with chips and side salad.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Pizza */}
              <TabsContent value="pizza">
                <div className="grid gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">🍕 PIZZA</h2>
                    <div className="grid gap-6">
                      <div className="flex justify-between items-start p-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold">Margarita</h3>
                            <Badge variant="outline" className="text-xs">
                              V
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mt-1">Cherry tomatoes, basil & cheese.</p>
                        </div>
                        <span className="font-medium">R80</span>
                      </div>

                      <div className="flex justify-between items-start p-4 bg-muted/50 rounded-lg">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold">Nice to Meat You</h3>
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          </div>
                          <p className="text-muted-foreground mt-1">
                            Cherry tomatoes, onion, pepper, bacon, chicken, salami & cheese.
                          </p>
                        </div>
                        <span className="font-medium">R165</span>
                      </div>

                      <div className="flex justify-between items-start p-4">
                        <div>
                          <h3 className="text-lg font-semibold">Abacobeef</h3>
                          <p className="text-muted-foreground mt-1">Fresh avocado and cheese.</p>
                        </div>
                        <span className="font-medium">R135</span>
                      </div>

                      <div className="flex justify-between items-start p-4">
                        <div>
                          <h3 className="text-lg font-semibold">Cheese Cheese Baby</h3>
                          <p className="text-muted-foreground mt-1">Mozzarella, blue cheese and feta.</p>
                        </div>
                        <span className="font-medium">R115</span>
                      </div>

                      <div className="flex justify-between items-start p-4">
                        <div>
                          <h3 className="text-lg font-semibold">Champignon</h3>
                          <p className="text-muted-foreground mt-1">Mushrooms, feta and cheese.</p>
                        </div>
                        <span className="font-medium">R120</span>
                      </div>

                      <div className="flex justify-between items-start p-4">
                        <div>
                          <h3 className="text-lg font-semibold">Pineapple Express</h3>
                          <p className="text-muted-foreground mt-1">Pineapple, jalapeños, cheese and rocket.</p>
                        </div>
                        <span className="font-medium">R120</span>
                      </div>

                      <div className="flex justify-between items-start p-4">
                        <div>
                          <h3 className="text-lg font-semibold">Aloha – Hawaiian</h3>
                          <p className="text-muted-foreground mt-1">Ham and pineapple.</p>
                        </div>
                        <span className="font-medium">R90</span>
                      </div>

                      <div className="flex justify-between items-start p-4">
                        <div>
                          <h3 className="text-lg font-semibold">PIMENTA</h3>
                          <p className="text-muted-foreground mt-1">Pepperoni, jalapeños and cheese.</p>
                        </div>
                        <span className="font-medium">R120</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Salad */}
              <TabsContent value="salad">
                <div className="grid gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">🥗 SALAD</h2>
                    <div className="grid gap-6">
                      <div className="flex justify-between items-start p-4">
                        <div>
                          <h3 className="text-lg font-semibold">Greek</h3>
                          <p className="text-muted-foreground mt-1">
                            Romaine lettuce, cucumber, olives, red onion, tomato, feta and house vinaigrette.
                          </p>
                        </div>
                        <span className="font-medium">R80</span>
                      </div>

                      <div className="flex justify-between items-start p-4 bg-muted/50 rounded-lg">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold">Chicken Salad</h3>
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          </div>
                          <p className="text-muted-foreground mt-1">
                            Grilled chicken, fresh greens, cherry tomatoes, onion and vinaigrette.
                          </p>
                        </div>
                        <span className="font-medium">R105</span>
                      </div>

                      <div className="flex justify-between items-start p-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold">Vegan Delight Salad</h3>
                            <Badge variant="outline" className="text-xs">
                              V
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mt-1">
                            Greens, chickpeas, carrots, cherry tomatoes, cucumber, onion and vegan dressing.
                          </p>
                        </div>
                        <span className="font-medium">R85</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Basket */}
              <TabsContent value="basket">
                <div className="grid gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">🧺 BASKET</h2>
                    <p className="text-muted-foreground mb-6">All baskets are served with sweet chili sauce</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex justify-between items-center p-3 border rounded-md">
                        <span>Nibbles (Ribs)</span>
                        <span className="font-medium">R45</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-md">
                        <span>Chicken Strips</span>
                        <span className="font-medium">R45</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-md">
                        <span>3 x Jalapeño Poppers</span>
                        <span className="font-medium">R45</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-md">
                        <span>3 x Chicken Wings</span>
                        <span className="font-medium">R45</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-md">
                        <span>6 x Mozzarella Sticks</span>
                        <span className="font-medium">R50</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-md">
                        <span>4 x Spring Rolls</span>
                        <span className="font-medium">R50</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-md">
                        <span>4 x Chicken Samoosas</span>
                        <span className="font-medium">R50</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-md">
                        <span>4 x Spinach & Cheese Risoles</span>
                        <span className="font-medium">R50</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-md">
                        <span>Onion Rings</span>
                        <span className="font-medium">R25</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-md">
                        <span>Local Meat Balls</span>
                        <span className="font-medium">R45</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-md">
                        <span>Chips with Seasoning</span>
                        <span className="font-medium">R35</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Share */}
              <TabsContent value="share">
                <div className="grid gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">🔥 SHARE</h2>
                    <div className="grid gap-6">
                      <div className="flex flex-col md:flex-row gap-4 bg-muted/50 p-4 rounded-lg">
                        <div className="md:w-1/4 flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=150&width=200&text=Nachos"
                            alt="Nachos"
                            width={200}
                            height={150}
                            className="rounded-md object-cover w-full h-auto"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-semibold">Nachos</h3>
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            </div>
                            <span className="font-medium">R89</span>
                          </div>
                          <p className="text-muted-foreground mt-1">
                            Corn chips, sour cream, salsa, topped with nacho cheese and jalapeños.
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between items-start p-4">
                        <div>
                          <h3 className="text-lg font-semibold">4 x Tacos</h3>
                          <p className="text-muted-foreground mt-1">
                            Soft or crispy taco shells. Served with soft or crispy shell filled with spicy chicken,
                            shredded lettuce, house salsa and mayo.
                          </p>
                        </div>
                        <span className="font-medium">R120</span>
                      </div>

                      <div className="flex justify-between items-start p-4">
                        <div>
                          <h3 className="text-lg font-semibold">Wings Platter (8 pieces)</h3>
                          <p className="text-muted-foreground mt-1">Choose from sweet chili, BBQ or hot sauce.</p>
                        </div>
                        <span className="font-medium">R105</span>
                      </div>

                      <div className="flex flex-col md:flex-row gap-4 bg-muted/50 p-4 rounded-lg">
                        <div className="md:w-1/4 flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=150&width=200&text=Mixed+Basket"
                            alt="Mixed Basket"
                            width={200}
                            height={150}
                            className="rounded-md object-cover w-full h-auto"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-semibold">Mixed Basket (16 pieces)</h3>
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            </div>
                            <span className="font-medium">R145</span>
                          </div>
                          <p className="text-muted-foreground mt-1">
                            Mozzarella sticks, jalapeño poppers, onion rings, meatballs, chicken strips. Comes with
                            sweet chili & BBQ sauce.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Kids Meals */}
              <TabsContent value="kids">
                <div className="grid gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">🍔 KIDS MEALS</h2>
                    <p className="text-muted-foreground mb-6">Under 12 only</p>
                    <div className="grid gap-6">
                      <div className="flex justify-between items-start p-4">
                        <div>
                          <h3 className="text-lg font-semibold">Chicken Strips and Chips</h3>
                        </div>
                        <span className="font-medium">R45</span>
                      </div>

                      <div className="flex justify-between items-start p-4">
                        <div>
                          <h3 className="text-lg font-semibold">Pizza – Regina</h3>
                          <p className="text-muted-foreground mt-1">Bacon & mushroom</p>
                        </div>
                        <span className="font-medium">R65</span>
                      </div>

                      <div className="flex justify-between items-start p-4">
                        <div>
                          <h3 className="text-lg font-semibold">Kids Burger</h3>
                          <p className="text-muted-foreground mt-1">Beef or chicken patty, chips</p>
                        </div>
                        <span className="font-medium">R65</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Drinks */}
              <TabsContent value="drinks">
                <div className="grid gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6">🥤 MILKSHAKES</h2>
                    <div className="grid gap-6">
                      <div className="flex justify-between items-start p-4">
                        <div>
                          <h3 className="text-lg font-semibold">Regular</h3>
                          <p className="text-muted-foreground mt-1">
                            Flavours: Strawberry, Chocolate, Bubble-Gum, Apple
                          </p>
                        </div>
                        <span className="font-medium">R42</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-6">🍻 DRINKS</h2>
                    <div className="grid gap-6">
                      <div className="flex flex-col md:flex-row gap-4 bg-muted/50 p-4 rounded-lg">
                        <div className="md:w-1/4 flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=150&width=200&text=Beer+Tower"
                            alt="Beer Tower"
                            width={200}
                            height={150}
                            className="rounded-md object-cover w-full h-auto"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-semibold">Beer Tower</h3>
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            </div>
                          </div>
                          <p className="text-muted-foreground mt-1">
                            2.5L of your favourite beer to your table. Ask your waiter about the beer tower deal!
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between items-start p-4">
                        <div>
                          <h3 className="text-lg font-semibold">Local Signature Rum Mix</h3>
                          <p className="text-muted-foreground mt-1">House rum, fresh pineapple and citrus.</p>
                        </div>
                        <span className="font-medium">R80</span>
                      </div>

                      <div className="flex justify-between items-start p-4">
                        <div>
                          <h3 className="text-lg font-semibold">Local Spritz</h3>
                          <p className="text-muted-foreground mt-1">White wine, soda, orange juice and citrus twist.</p>
                        </div>
                        <span className="font-medium">R85</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Chef's Recommendations */}
        <section className="py-12 bg-muted">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Chef's Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=The+Big+Daddy"
                    alt="The Big Daddy"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">The Big Daddy</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Double beef or veg patty with rocket, jalapeños, cheese and fried onion.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        Veg Option
                      </Badge>
                    </div>
                    <span className="font-medium">R145</span>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Mixed+Basket"
                    alt="Mixed Basket"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary text-primary-foreground">Great for Sharing</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Mixed Basket (16 pieces)</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Mozzarella sticks, jalapeño poppers, onion rings, meatballs, chicken strips. Comes with sweet chili
                    & BBQ sauce.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-medium">R145</span>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Nice+to+Meat+You"
                    alt="Nice to Meat You Pizza"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary text-primary-foreground">Customer Favorite</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Nice to Meat You</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Cherry tomatoes, onion, pepper, bacon, chicken, salami & cheese.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-medium">R165</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12">
          <div className="container text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to join us?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience our delicious menu in person. Make a reservation or stop by during our opening hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#reservations">Book a Table</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="tel:0615376371">Call Us: 061 537 6371</Link>
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
                <Link
                  href="https://instagram.com/thelocalbarandkitchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                <Link
                  href="https://facebook.com/thelocalbarandkitchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <address className="not-italic text-muted-foreground">
                <p>The Local Bar And Kitchen</p>
                <p className="mt-2">Phone: 061 537 6371</p>
                <p>Email: info@thelocalbarandkitchen.com</p>
              </address>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Make a booking</h3>
              <p className="text-muted-foreground mb-4">Call us or follow us on social media</p>
              <Button asChild>
                <Link href="tel:0615376371">📞 061 537 6371</Link>
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">Instagram/Facebook: @thelocalbarandkitchen</p>
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
