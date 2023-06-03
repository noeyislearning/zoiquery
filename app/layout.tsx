
/** Stylesheets */
import "@/assets/css/core.css"

/** Fonts */
import { Rubik } from "next/font/google"
const fonts = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: "Zoiquery - SQL Generator",
  description: 'Zoiquery provides a comprehensive toolkit for constructing SQL statements programmatically, eliminating the need for manual query building and enhancing productivity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fonts.className}>{children}</body>
    </html>
  )
}