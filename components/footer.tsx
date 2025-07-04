"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-amber-900/30 text-gray-300" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Logo and About */}
          <section aria-labelledby="about-heading">
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
                  <h3 id="about-heading" className="text-amber-400 font-bold text-lg">
                    Σιριστατίδης
                  </h3>
                  <p className="text-gray-400 text-xs">Παραδοσιακά Όργανα</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Χειροποίητες ποντιακές λύρες από τον μάστορα Θεόδωρο Σιριστατίδη, με σεβασμό στην παράδοση και αγάπη για
                την τέχνη.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-3 pt-2">
                <a
                  href="https://www.facebook.com/profile.php?id=100010951200627&locale=el_GR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-900/20"
                  aria-label="Επισκεφθείτε τη σελίδα μας στο Facebook (ανοίγει σε νέο παράθυρο)"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/siristatidis_theodoros/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors p-2 rounded-full hover:bg-pink-900/20"
                  aria-label="Επισκεφθείτε τη σελίδα μας στο Instagram (ανοίγει σε νέο παράθυρο)"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.tiktok.com/@siristatidis_theodoros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
                  aria-label="Επισκεφθείτε τη σελίδα μας στο TikTok (ανοίγει σε νέο παράθυρο)"
                >
                  <TikTokIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.youtube.com/@Siristatidis-theodoros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400 transition-colors p-2 rounded-full hover:bg-red-900/20"
                  aria-label="Επισκεφθείτε τη σελίδα μας στο YouTube (ανοίγει σε νέο παράθυρο)"
                >
                  <Youtube className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

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
                <Link
                  href="/#products-section"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
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
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">Επικοινωνία</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a
                  href="https://maps.google.com/?q=Κύπρου+12,+Σταυρούπολη,+Θεσσαλονίκη"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Κύπρου 12, Σταυρούπολη, Θεσσαλονίκη
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+306946278589" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                  +30 694 627 8589
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:siristatidistheo@gmail.com"
                  className="text-sm text-gray-400 hover:text-amber-400 transition-colors"
                >
                  siristatidistheo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 lg:mt-10 pt-4 lg:pt-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-0 flex flex-col sm:flex-row items-center">
            <span className="mr-1">&copy; {currentYear} SCG.</span>
            <span className="mr-1">Created by</span>
            <a
              href="https://naic.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 mx-1"
            >
              naic.gr
            </a>
            <span>. Όλα τα δικαιώματα διατηρούνται.</span>
          </p>
          <div className="flex space-x-4">
            <Link href="/contact" className="text-xs text-gray-500 hover:text-amber-400 transition-colors">
              Επικοινωνία
            </Link>
            <Link href="/about" className="text-xs text-gray-500 hover:text-amber-400 transition-colors">
              Σχετικά με εμάς
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
