"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black border-b border-amber-900/30 sticky top-0 z-50" role="banner">
      <nav className="container mx-auto px-4 sm:px-6" role="navigation" aria-label="Κύρια πλοήγηση">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 perspective-1000">
              <div className="w-full h-full animate-logo-spin transform-style-3d">
                <Image
                  src="/images/logo.png"
                  alt="Σιριστατίδης Θεόδωρος Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-amber-400 font-bold text-lg leading-tight">Σιριστατίδης</h1>
              <p className="text-gray-400 text-xs">Παραδοσιακά Όργανα</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6" role="menubar">
            <Link
              href="/"
              className="text-white hover:text-amber-400 transition-colors text-sm font-medium"
              role="menuitem"
              aria-current="page"
            >
              Αρχική
            </Link>
            <Link
              href="/#products-section"
              className="text-white hover:text-amber-400 transition-colors text-sm font-medium"
              role="menuitem"
            >
              Προϊόντα
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-amber-400 transition-colors text-sm font-medium"
              role="menuitem"
            >
              Σχετικά με εμάς
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-amber-400 transition-colors text-sm font-medium"
              role="menuitem"
            >
              Επικοινωνία
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="tel:+306946278589">
              <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm">
                <Phone className="mr-1 h-4 w-4" />
                Επικοινωνία
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-gray-900 border-t border-gray-800 absolute top-full left-0 right-0 z-50"
          role="menu"
          aria-label="Κινητό μενού"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4" role="menubar">
              <Link
                href="/"
                className="text-white hover:text-amber-400 py-2 transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
              >
                Αρχική
              </Link>
              <Link
                href="/#products-section"
                className="text-white hover:text-amber-400 py-2 transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
              >
                Προϊόντα
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-amber-400 py-2 transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
              >
                Σχετικά με εμάς
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-amber-400 py-2 transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
              >
                Επικοινωνία
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
