import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Menu - The Local Bar And Kitchen",
  description: "Explore our delicious menu featuring burgers, pizza, craft cocktails, and local favorites.",
  keywords: "restaurant menu, bar menu, craft cocktails, burgers, pizza, The Local Bar And Kitchen",
}

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
