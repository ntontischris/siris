import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

const inter = Inter({ subsets: ["latin", "greek"] })

export const metadata = {
  title: "Σιριστατίδης Θεόδωρος | Παραδοσιακά Όργανα",
  description: "Χειροποίητες ποντιακές λύρες από τον μάστορα Θεόδωρο Σιριστατίδη",
  keywords: "ποντιακή λύρα, παραδοσιακά όργανα, χειροποίητα όργανα, Σιριστατίδης, Θεσσαλονίκη",
  authors: [{ name: "Σιριστατίδης Θεόδωρος" }],
  creator: "Σιριστατίδης Θεόδωρος",
  publisher: "Σιριστατίδης Θεόδωρος",
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/images/logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Σιριστατίδης Θεόδωρος | Παραδοσιακά Όργανα",
    description: "Χειροποίητες ποντιακές λύρες από τον μάστορα Θεόδωρο Σιριστατίδη",
    url: "https://siristatidis.gr",
    siteName: "Σιριστατίδης Θεόδωρος",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Σιριστατίδης Θεόδωρος - Παραδοσιακά Όργανα",
      },
    ],
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Σιριστατίδης Θεόδωρος | Παραδοσιακά Όργανα",
    description: "Χειροποίητες ποντιακές λύρες από τον μάστορα Θεόδωρο Σιριστατίδη",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="el" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.png" sizes="any" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="theme-color" content="#d97706" />
        <meta name="msapplication-TileColor" content="#d97706" />
        <meta name="msapplication-TileImage" content="/images/logo.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <Chatbot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
