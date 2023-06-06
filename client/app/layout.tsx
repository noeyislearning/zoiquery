import React from "react";

/** Stylesheets */
import "@/assets/css/core.css"

/** Fonts */
import { Inter } from "next/font/google"
const globalFont = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Zoiquery - SQL Generator",
  description: 'Zoiquery provides a comprehensive toolkit for constructing SQL statements programmatically, eliminating the need for manual query building and enhancing productivity.',
}

/** Components */
import Navbar from "@/components/layouts/Navbar/Navbar";
import Footer from "@/components/layouts/Footer/Footer";

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
        <Footer />
      </body>
    </html>
  )
}