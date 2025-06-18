import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-amber-900/30 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="Σιριστατίδης Θεόδωρος Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-amber-400 font-bold text-lg">Σιριστατίδης</h3>
                <p className="text-gray-400 text-xs">Παραδοσιακά Όργανα</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Χειροποίητες ποντιακές λύρες από τον μάστορα Θεόδωρο Σιριστατίδη, με σεβασμό στην παράδοση και αγάπη για
              την τέχνη.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">Γρήγορη Πλοήγηση</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Αρχική
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Προϊόντα
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Σχετικά με εμάς
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Επικοινωνία
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Όροι Χρήσης
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Πολιτική Απορρήτου
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">Προϊόντα</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/lyres" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Ποντιακές Λύρες
                </Link>
              </li>
              <li>
                <Link href="/products/strings" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Χορδές
                </Link>
              </li>
              <li>
                <Link
                  href="/products/accessories"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Αξεσουάρ
                </Link>
              </li>
              <li>
                <Link href="/products/new" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Νέες Αφίξεις
                </Link>
              </li>
              <li>
                <Link href="/products/offers" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Προσφορές
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">Επικοινωνία</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">Οδός Παραδοσιακών Οργάνων 123, 54321, Θεσσαλονίκη</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                <a href="tel:+302310123456" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                  +30 2310 123 456
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                <a
                  href="mailto:info@siristatidis.gr"
                  className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                >
                  info@siristatidis.gr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Σιριστατίδης Θεόδωρος. Με επιφύλαξη παντός δικαιώματος.
          </p>
          <div className="flex space-x-4">
            <Link href="/terms" className="text-xs text-gray-500 hover:text-amber-400 transition-colors">
              Όροι Χρήσης
            </Link>
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-amber-400 transition-colors">
              Πολιτική Απορρήτου
            </Link>
            <Link href="/shipping" className="text-xs text-gray-500 hover:text-amber-400 transition-colors">
              Αποστολές
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
