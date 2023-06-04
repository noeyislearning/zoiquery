import React from "react";

/** Stylesheets */
import "@/assets/css/core.css"

/** Fonts */
import { Rubik } from "next/font/google"
const globalFont = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: "Zoiquery - SQL Generator",
  description: 'Zoiquery provides a comprehensive toolkit for constructing SQL statements programmatically, eliminating the need for manual query building and enhancing productivity.',
}

/** Components */
import Navbar from "@/components/layouts/Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-gray-950 text-white">
      <body className={globalFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}