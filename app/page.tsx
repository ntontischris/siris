import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Music, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import ImageCarousel from "@/components/image-carousel"
import ShowcaseCarousel from "@/components/showcase-carousel"
import ContactSection from "@/components/contact-section"
import ProductCard from "@/components/product-card"

export default function Home() {
  return (
    <div className="bg-black text-white">
      <div className="container px-4 sm:px-6 mx-auto">
        {/* Hero Section - βελτιωμένο για κινητά */}
        <section className="relative py-10 md:py-16 lg:py-24">
          <div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex flex-col items-center lg:items-start space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-2 md:mb-4 perspective-1000">
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

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-amber-400">
                Παραδοσιακά Όργανα <br />
                <span className="text-white">Υψηλής Τέχνης</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl">
                Χειροποίητες ποντιακές λύρες από τον μάστορα Θεόδωρο Σιριστατίδη, με σεβασμό στην παράδοση και αγάπη για
                την τέχνη.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white border-0 text-sm sm:text-base">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Δείτε τις Λύρες μας
                </Button>
                <Button
                  variant="outline"
                  className="border-amber-600 text-amber-400 hover:bg-amber-900/20 text-sm sm:text-base"
                >
                  <Music className="mr-2 h-4 w-4" />Η Τέχνη μας
                </Button>
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

        {/* Showcase Carousel Section - βελτιωμένο για κινητά */}
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

        {/* E-shop Section - Ενημερωμένα προϊόντα */}
        <section className="py-10 sm:py-12 md:py-16 border-t border-amber-900/30">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400">E-shop</h2>
            <p className="text-sm sm:text-base text-gray-400 mt-2">
              Όργανα, χορδές και αξεσουάρ για μουσικούς κάθε επιπέδου
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            <ProductCard
              id="cascha-guitar"
              name="Κιθάρα Cascha για Αρχάριους"
              description="Σε τρεις διαφορετικές αποχρώσεις από ξύλο Maoni, κάπακι έλατο"
              price={175}
              image="/images/cascha-guitar.png"
              badge={{ text: "Για Αρχάριους", color: "blue" }}
              slug="cascha-guitar"
            />
            <ProductCard
              id="cascha-violin-set"
              name="Βιολιά Cascha 1/4, 3/4, 4/4"
              description="Από σχεδίαση κάπακι έλατο Cascha, διαθέσιμα σε διάφορα μεγέθη"
              price={239}
              image="/images/cascha-violin-set.png"
              badge={{ text: "Πλήρες Σετ", color: "amber" }}
              slug="cascha-violin-set"
            />
            <ProductCard
              id="saz-oud"
              name="Παραδοσιακό Χειροποίητο Ουτι"
              description="Κάπακι έλατο, λάμος, ταστιέρα χοράερα από Maoni, μάρκα SAZ OYTI"
              price={49}
              image="/images/saz-oud.png"
              badge={{ text: "Χειροποίητο", color: "amber" }}
              slug="saz-oud"
            />
            <ProductCard
              id="boss-tu3-tuner"
              name="Πεταλάκι Boss TU-3"
              description="Χρωματικό πεταλάκι κουρδιστήρι, επαγγελματική ποιότητα"
              price={100}
              image="/images/boss-tu3-tuner.png"
              badge={{ text: "Boss", color: "blue" }}
              slug="boss-tu3-tuner"
            />
            <ProductCard
              id="lyre-case-single"
              name="Βαλίτσα Ποντιακής Λύρας - Μονή"
              description="Μονή θήκη για ποντιακή λύρα, υψηλής ποιότητας προστασία"
              price={75}
              image="/images/lyre-case-single.png"
              badge={{ text: "Προστασία", color: "blue" }}
              slug="lyre-case-single"
            />
            <ProductCard
              id="lyre-case-double"
              name="Βαλίτσα Ποντιακής Λύρας - Διπλή"
              description="Διπλή θήκη για ποντιακή λύρα, ιδανική για επαγγελματίες"
              price={95}
              image="/images/lyre-case-double.png"
              badge={{ text: "Επαγγελματική", color: "amber" }}
              slug="lyre-case-double"
            />
            <ProductCard
              id="boss-ge7-equalizer"
              name="Πεταλάκι Boss GE-7"
              description="Equalizer πεταλάκι με 7-band γραφικό equalizer"
              price={115}
              image="/images/boss-ge7-equalizer.png"
              badge={{ text: "Boss", color: "blue" }}
              slug="boss-ge7-equalizer"
            />
            <ProductCard
              id="galli-set"
              name="Σετ χορδές Galli 0,14 - LA - LA"
              description="Πλήρες σετ χορδών για ποντιακή λύρα"
              price={10.5}
              oldPrice={12}
              image="/images/galli-set.jpeg"
              badge={{ text: "Προσφορά", color: "green" }}
              slug="galli-set"
            />
          </div>

          <div className="text-center mt-6 sm:mt-8 md:mt-12">
            <Link
              href="/eshop"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 text-sm sm:text-base"
            >
              Δείτε όλα τα προϊόντα
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  )
}
