"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import CartDropdown from "./cart-dropdown"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black border-b border-amber-900/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 perspective-1000">
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
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-amber-400 transition-colors text-sm font-medium">
              Αρχική
            </Link>
            <div className="relative group">
              <button className="flex items-center text-white hover:text-amber-400 transition-colors text-sm font-medium">
                Προϊόντα
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link
                    href="/products/lyres"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-amber-400"
                  >
                    Ποντιακές Λύρες
                  </Link>
                  <Link
                    href="/products/strings"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-amber-400"
                  >
                    Χορδές
                  </Link>
                  <Link
                    href="/products/accessories"
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800 hover:text-amber-400"
                  >
                    Αξεσουάρ
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/about" className="text-white hover:text-amber-400 transition-colors text-sm font-medium">
              Σχετικά με εμάς
            </Link>
            <Link href="/contact" className="text-white hover:text-amber-400 transition-colors text-sm font-medium">
              Επικοινωνία
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <CartDropdown />
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Phone className="mr-1 h-4 w-4" />
              Επικοινωνία
            </Button>
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3 relative">
              <Link
                href="/"
                className="text-white hover:text-amber-400 py-2 transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Αρχική
              </Link>
              <div className="py-2">
                <div className="flex items-center text-white mb-2 text-sm font-medium">Προϊόντα</div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link
                    href="/products/lyres"
                    className="text-gray-300 hover:text-amber-400 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Ποντιακές Λύρες
                  </Link>
                  <Link
                    href="/products/strings"
                    className="text-gray-300 hover:text-amber-400 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Χορδές
                  </Link>
                  <Link
                    href="/products/accessories"
                    className="text-gray-300 hover:text-amber-400 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Αξεσουάρ
                  </Link>
                </div>
              </div>
              <Link
                href="/about"
                className="text-white hover:text-amber-400 py-2 transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Σχετικά με εμάς
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-amber-400 py-2 transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Επικοινωνία
              </Link>
              <div className="pt-2 flex items-center">
                <CartDropdown />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
