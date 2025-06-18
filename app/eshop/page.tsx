import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ProductCard from "@/components/product-card"

// Updated product data based on the spreadsheet
const products = [
  {
    id: "cascha-guitar",
    name: "Κιθάρα Cascha για Αρχάριους",
    description: "Σε τρεις διαφορετικές αποχρώσεις από ξύλο Maoni, κάπακι έλατο",
    price: 175,
    image: "/images/cascha-guitar.png",
    badge: { text: "Για Αρχάριους", color: "blue" },
    slug: "cascha-guitar",
    category: "instruments",
  },
  {
    id: "cascha-violin-set",
    name: "Βιολιά Cascha 1/4, 3/4, 4/4",
    description: "Από σχεδίαση κάπακι έλατο Cascha, διαθέσιμα σε διάφορα μεγέθη",
    price: 239,
    image: "/images/cascha-violin-set.png",
    badge: { text: "Πλήρες Σετ", color: "amber" },
    slug: "cascha-violin-set",
    category: "instruments",
  },
  {
    id: "saz-oud",
    name: "Παραδοσιακό Χειροποίητο Ουτι",
    description: "Κάπακι έλατο, λάμος, ταστιέρα χοράερα από Maoni, μάρκα SAZ OYTI",
    price: 49,
    image: "/images/saz-oud.png",
    badge: { text: "Χειροποίητο", color: "amber" },
    slug: "saz-oud",
    category: "traditional",
  },
  {
    id: "lyre-case-single",
    name: "Βαλίτσα Ποντιακής Λύρας - Μονή",
    description: "Μονή θήκη για ποντιακή λύρα, υψηλής ποιότητας προστασία",
    price: 75,
    image: "/images/lyre-case-single.png",
    badge: { text: "Προστασία", color: "blue" },
    slug: "lyre-case-single",
    category: "cases",
  },
  {
    id: "lyre-case-double",
    name: "Βαλίτσα Ποντιακής Λύρας - Διπλή",
    description: "Διπλή θήκη για ποντιακή λύρα, ιδανική για επαγγελματίες",
    price: 95,
    image: "/images/lyre-case-double.png",
    badge: { text: "Επαγγελματική", color: "amber" },
    slug: "lyre-case-double",
    category: "cases",
  },
  {
    id: "boss-tu3-tuner",
    name: "Πεταλάκι Boss TU-3",
    description: "Χρωματικό πεταλάκι κουρδιστήρι, επαγγελματική ποιότητα",
    price: 100,
    image: "/images/boss-tu3-tuner.png",
    badge: { text: "Boss", color: "blue" },
    slug: "boss-tu3-tuner",
    category: "pedals",
  },
  {
    id: "boss-ge7-equalizer",
    name: "Πεταλάκι Boss GE-7",
    description: "Equalizer πεταλάκι με 7-band γραφικό equalizer",
    price: 115,
    image: "/images/boss-ge7-equalizer.png",
    badge: { text: "Boss", color: "blue" },
    slug: "boss-ge7-equalizer",
    category: "pedals",
  },
  // Κρατάμε και μερικά από τα παλιά προϊόντα
  {
    id: "galli-013",
    name: "Χορδή Galli 0,13",
    description: "Χορδή ακριβείας για ηλεκτρικά και ακουστικά όργανα",
    price: 1,
    image: "/images/galli-013.jpeg",
    badge: { text: "Δημοφιλές", color: "amber" },
    slug: "galli-013",
    category: "strings",
  },
  {
    id: "galli-set",
    name: "Σετ χορδές Galli 0,14 - LA - LA",
    description: "Πλήρες σετ χορδών για ποντιακή λύρα",
    price: 10.5,
    oldPrice: 12,
    image: "/images/galli-set.jpeg",
    badge: { text: "Προσφορά", color: "green" },
    slug: "galli-set",
    category: "strings",
  },
  {
    id: "horsehair-white",
    name: "Τρίχες Μογγολίας λευκό χρώμα",
    description: "Υψηλής ποιότητας τρίχες για δοξάρι",
    price: 7,
    image: "/images/horsehair-white.jpeg",
    slug: "horsehair-white",
    category: "accessories",
  },
]

// Updated product categories
const categories = [
  { name: "Όλα τα Προϊόντα", slug: "" },
  { name: "Όργανα", slug: "instruments" },
  { name: "Παραδοσιακά", slug: "traditional" },
  { name: "Θήκες - Βαλίτσες", slug: "cases" },
  { name: "Πεταλάκια", slug: "pedals" },
  { name: "Χορδές", slug: "strings" },
  { name: "Αξεσουάρ", slug: "accessories" },
]

export default function EshopPage() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-4">E-shop</h1>
          <p className="text-gray-400">
            Ανακαλύψτε την πλούσια συλλογή μας από όργανα, αξεσουάρ και παραδοσιακά όργανα
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden sticky top-24">
              <div className="p-4 border-b border-gray-800">
                <h2 className="font-semibold text-white">Κατηγορίες</h2>
              </div>
              <ul className="divide-y divide-gray-800">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <Link
                      href={`/eshop${category.slug ? `/${category.slug}` : ""}`}
                      className="block p-4 text-gray-300 hover:bg-gray-800 hover:text-amber-400 transition-colors"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/eshop/all" className="inline-flex items-center text-amber-400 hover:text-amber-300">
                Δείτε όλα τα προϊόντα
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
