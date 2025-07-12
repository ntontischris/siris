"use client"

import Image from "next/image"
import Link from "next/link"
import { Music, Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import ImageCarousel from "@/components/image-carousel"
import ShowcaseCarousel from "@/components/showcase-carousel"
import ProductCard from "@/components/product-card"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Έλεγχος αν υπάρχει hash στο URL
    if (window.location.hash === "#products-section") {
      setTimeout(() => {
        const productsSection = document.getElementById("products-section")
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: "smooth" })
        }
      }, 100) // Μικρή καθυστέρηση για να φορτώσει η σελίδα
    }
  }, [])
  return (
    <>
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-600 text-white px-4 py-2 rounded z-50"
      >
        Μετάβαση στο κύριο περιεχόμενο
      </a>

      <main id="main-content" className="bg-black text-white">
        <div className="container px-4 sm:px-6 mx-auto">
          {/* Hero Section */}
          <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24" aria-labelledby="hero-heading">
            <div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="flex flex-col items-center lg:items-start space-y-6 md:space-y-8 text-center lg:text-left">
                <div className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 mb-4 md:mb-6 perspective-1000 mx-auto lg:mx-0">
                  <div className="w-full h-full animate-logo-spin transform-style-3d">
                    <Image
                      src="/images/logo.png"
                      alt="Siristatidis Theodoros Logo"
                      width={256}
                      height={256}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <h1
                  id="hero-heading"
                  className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-amber-400 leading-tight"
                >
                  Παραδοσιακά Όργανα <br />
                  <span className="text-white">Υψηλής Τέχνης</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl">
                  Χειροποίητες ποντιακές λύρες από τον μάστορα Θεόδωρο Σιριστατίδη, με σεβασμό στην παράδοση και αγάπη
                  για την τέχνη.
                </p>

                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 w-full xs:w-auto">
                  <Link href="/contact" aria-label="Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white border-0 text-sm sm:text-base w-full sm:w-auto">
                      <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                      Επικοινωνήστε μαζί μας
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="border-amber-600 text-amber-400 hover:bg-amber-900/20 text-sm sm:text-base w-full sm:w-auto bg-transparent"
                    >
                      <Music className="mr-2 h-4 w-4" />Η Τέχνη μας
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative block">
                <div className="absolute -top-10 -left-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-amber-600/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-amber-600/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <ImageCarousel />
                </div>
              </div>
            </div>
          </section>

          {/* Showcase Carousel Section */}
          <section className="py-10 sm:py-12 md:py-16 border-t border-amber-900/20">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400">Η Τέχνη της Ποντιακής Λύρας</h2>
              <p className="text-sm sm:text-base text-gray-400 mt-2 sm:mt-3 max-w-2xl mx-auto">
                Ανακαλύψτε τη λεπτομέρεια και την τεχνική πίσω από κάθε χειροποίητο όργανο
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <ShowcaseCarousel />
            </div>
          </section>

          {/* Products Section - E-shop με δεδομένα από το spreadsheet */}
          <section
            id="products-section"
            className="py-10 sm:py-12 md:py-16 border-t border-amber-900/30"
            aria-labelledby="products-heading"
            role="region"
          >
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 id="products-heading" className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400">
                Τα Προϊόντα μας
              </h2>
              <p className="text-sm sm:text-base text-gray-400 mt-2">
                Όργανα, χορδές και αξεσουάρ για μουσικούς κάθε επιπέδου
              </p>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {/* Κιθάρες Cascha */}
              <ProductCard
                id="cascha-guitars"
                name="Κιθάρες Cascha για Αρχάριους"
                description="Πλήρες σετ κιθάρας με θήκη, κουρδιστήρι, αξεσουάρ και δωρεάν μαθήματα"
                price={199}
                image="/images/cascha-guitar-sunburst.jpg"
                badge={{ text: "Για Αρχάριους", color: "blue" }}
                slug="cascha-guitar"
              />

              {/* Βιολιά Cascha */}
              <ProductCard
                id="cascha-violins"
                name="Βιολιά Cascha 1/4, 1/2 3/4, 4/4"
                description="Βιολιά από σχεδίαση κάπακι έλατο Cascha, διαθέσιμα σε διάφορα μεγέθη"
                price={299}
                image="/images/violin-cascha-new.jpg"
                badge={{ text: "Πλήρες Σετ", color: "amber" }}
                slug="cascha-violin-set"
              />

              {/* Ουτι SAZ OYTI */}
              <ProductCard
                id="saz-oud-traditional"
                name="Παραδοσιακό Χειροποίητο Ουτι"
                description="Κάπακι έλατο, λάμος, ταστιέρα χοράερα από Maoni, μάρκα SAZ OYTI"
                price={599}
                image="/images/oud-traditional-new.jpg"
                badge={{ text: "Χειροποίητο", color: "amber" }}
                slug="saz-oud"
              />

              {/* Βαλίτσα Ποντιακής Λύρας */}
              <ProductCard
                id="lyre-case-pontiac"
                name="Βαλίτσα Ποντιακής Λύρας"
                description="Διπλή θήκη για ποντιακή λύρα, υψηλής ποιότητας προστασία"
                price={90}
                image="/images/lyre-case-olympos.jpg"
                badge={{ text: "Προστασία", color: "blue" }}
                slug="lyre-case-single"
              />

              {/* Βαλίτσα Ποντιακής Λύρας - Μονή OLYMPUS */}
              <ProductCard
                id="lyre-case-single-olympus"
                name="OLYMPUS LC-100 - Θήκη Ποντιακής Λύρας Μονή"
                description="Σκληρή θήκη-βαλίτσα με λουρί ώμου, εξαιρετική προστασία και ελαφριά κατασκευή"
                price={75}
                image="/images/lyre-case-single-olympus.jpeg"
                badge={{ text: "OLYMPUS", color: "blue" }}
                slug="lyre-case-single-olympus"
              />

              {/* Κρατάμε και μερικά από τα παλιά προϊόντα */}
              <ProductCard
                id="boss-tu3-tuner"
                name="Πεταλάκι Boss TU-3"
                description="Χρωματικό πεταλάκι κουρδιστήρι, επαγγελματική ποιότητα"
                price={100}
                image="/images/boss-tu3-new.jpg"
                badge={{ text: "Boss", color: "blue" }}
                slug="boss-tu3-tuner"
              />

              <ProductCard
                id="boss-ge7-equalizer"
                name="Πεταλάκι Boss GE-7"
                description="Equalizer πεταλάκι με 7-band γραφικό equalizer"
                price={115}
                image="/images/boss-ge7-new.jpg"
                badge={{ text: "Boss", color: "blue" }}
                slug="boss-ge7-equalizer"
              />

              <ProductCard
                id="galli-set"
                name="Σετ χορδές Galli"
                description="Πλήρες σετ χορδών για ποντιακή λύρα, υψηλής ποιότητας"
                price={10.5}
                oldPrice={12}
                image="/images/galli-set.jpeg"
                badge={{ text: "Προσφορά", color: "green" }}
                slug="galli-set"
              />

              <ProductCard
                id="horsehair-white"
                name="Τρίχες Δοξαριού"
                description="Τρίχες Μογγολίας για άριστο ήχο, λευκές και μαύρες"
                image="/images/horsehair-white.jpeg"
                badge={{ text: "Ποιότητα", color: "amber" }}
                slug="horsehair-white"
              />
            </div>

            <div className="text-center mt-8 sm:mt-10 md:mt-12">
              <p className="text-gray-400 mb-4">
                Ενδιαφέρεστε για κάποιο από τα προϊόντα μας; Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες και
                τιμές.
              </p>
              <Link href="/contact">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Phone className="mr-2 h-4 w-4" />
                  Επικοινωνήστε για Παραγγελία
                </Button>
              </Link>
            </div>
          </section>

          {/* Contact Information Section - Στατικά Στοιχεία */}
          <section className="py-12 sm:py-16 border-t border-amber-900/30">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400">Επικοινωνία</h2>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
                Βρείτε μας και επικοινωνήστε μαζί μας για οποιαδήποτε ερώτηση ή παραγγελία
              </p>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {/* Phone */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 text-center">
                <div className="w-12 h-12 bg-amber-900/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Phone className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-amber-400 mb-2">Τηλέφωνο</h3>
                <p className="text-gray-400 text-sm mb-3">Καλέστε μας για άμεση εξυπηρέτηση</p>
                <a href="tel:+306946278589" className="text-white hover:text-amber-400 transition-colors font-medium">
                  +30 694 627 8589
                </a>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 text-center">
                <div className="w-12 h-12 bg-amber-900/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Mail className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-amber-400 mb-2">Email</h3>
                <p className="text-gray-400 text-sm mb-3">Στείλτε μας email οποιαδήποτε στιγμή</p>
                <a
                  href="mailto:siristatidistheo@gmail.com"
                  className="text-white hover:text-amber-400 transition-colors font-medium"
                >
                  siristatidistheo@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 text-center">
                <div className="w-12 h-12 bg-amber-900/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-amber-400 mb-2">Διεύθυνση</h3>
                <p className="text-gray-400 text-sm mb-3">Επισκεφθείτε το κατάστημά μας</p>
                <a
                  href="https://maps.google.com/?q=Κύπρου+12,+Σταυρούπολη,+Θεσσαλονίκη"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-amber-400 transition-colors text-sm"
                >
                  Κύπρου 12
                  <br />
                  Σταυρούπολη, Θεσσαλονίκη
                </a>
              </div>

              {/* Hours */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 text-center">
                <div className="w-12 h-12 bg-amber-900/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-amber-400 mb-2">Ώρες Λειτουργίας</h3>
                <p className="text-gray-400 text-sm mb-3">Είμαστε ανοιχτά</p>
                <div className="text-white text-sm space-y-1">
                  <p>Δευτέρα - Παρασκευή</p>
                  <p>Πρωί: 9:00 - 15:00</p>
                  <p>Απόγευμα: 18:00 - 21:00</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
