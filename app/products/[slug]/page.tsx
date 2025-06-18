"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingBag, Check, Star, Truck, Shield, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

// This would normally come from a database or API
const getProductBySlug = (slug: string) => {
  // Sample product data - in a real app, this would be fetched from an API
  const products = {
    // Υπάρχοντα προϊόντα
    "galli-013": {
      id: "galli-013",
      name: "Χορδή Galli 0,13",
      description:
        "Χορδή ακριβείας για ηλεκτρικά και ακουστικά όργανα. Κατασκευασμένη από υψηλής ποιότητας υλικά για καθαρό και δυνατό ήχο. Ιδανική για ποντιακή λύρα και άλλα παραδοσιακά όργανα.",
      longDescription: `
        <p>Η χορδή Galli 0,13 είναι μια επαγγελματική χορδή ακριβείας, σχεδιασμένη ειδικά για παραδοσιακά έγχορδα όργανα όπως η ποντιακή λύρα.</p>
        <p>Κατασκευασμένη από υψηλής ποιότητας κράμα μετάλλων, προσφέρει εξαιρετική αντοχή και διάρκεια ζωής, διατηρώντας παράλληλα την ποιότητα του ήχου για μεγάλο χρονικό διάστημα.</p>
        <p>Χαρακτηριστικά:</p>
        <ul>
          <li>Διάμετρος: 0,13mm</li>
          <li>Υλικό: Ειδικό κράμα μετάλλων</li>
          <li>Ιδανική για: Ποντιακή λύρα, παραδοσιακά έγχορδα</li>
          <li>Χαρακτηριστικός ήχος: Καθαρός και δυνατός</li>
        </ul>
      `,
      price: 1,
      image: "/images/galli-013.jpeg",
      gallery: ["/images/galli-013.jpeg", "/images/galli-013-alt.jpeg", "/images/galli-strings-set.jpeg"],
      inStock: true,
      rating: 4.8,
      reviewCount: 24,
      sku: "GALLI-013",
      category: "strings",
    },
    // Νέα προϊόντα
    "cascha-guitar": {
      id: "cascha-guitar",
      name: "Κιθάρα Cascha για Αρχάριους",
      description:
        "Ακουστική κιθάρα ιδανική για αρχάριους, σε τρεις διαφορετικές αποχρώσεις από ξύλο Maoni με κάπακι έλατο.",
      longDescription: `
        <p>Η κιθάρα Cascha είναι ιδανική για αρχάριους που θέλουν να ξεκινήσουν το μουσικό τους ταξίδι με ένα ποιοτικό όργανο.</p>
        <p>Κατασκευασμένη από επιλεγμένο ξύλο Maoni με κάπακι από έλατο, προσφέρει εξαιρετική ποιότητα ήχου και άνεση στο παίξιμο.</p>
        <p>Χαρακτηριστικά:</p>
        <ul>
          <li>Σώμα: Ξύλο Maoni</li>
          <li>Κάπακι: Έλατο</li>
          <li>Διαθέσιμες αποχρώσεις: 3 διαφορετικές</li>
          <li>Ιδανική για: Αρχάριους μουσικούς</li>
          <li>Μάρκα: Cascha</li>
        </ul>
      `,
      price: 175,
      image: "/images/cascha-guitar.png",
      gallery: ["/images/cascha-guitar.png"],
      inStock: true,
      rating: 4.5,
      reviewCount: 12,
      sku: "CASCHA-GTR-001",
      category: "instruments",
    },
    "cascha-violin-set": {
      id: "cascha-violin-set",
      name: "Βιολιά Cascha 1/4, 3/4, 4/4",
      description: "Βιολιά Cascha διαθέσιμα σε διάφορα μεγέθη (1/4, 3/4, 4/4) από σχεδίαση με κάπακι έλατο.",
      longDescription: `
        <p>Τα βιολιά Cascha προσφέρουν εξαιρετική ποιότητα κατασκευής και ήχου για μουσικούς κάθε επιπέδου.</p>
        <p>Διαθέσιμα σε τρία διαφορετικά μεγέθη για να καλύψουν τις ανάγκες παιδιών και ενηλίκων.</p>
        <p>Χαρακτηριστικά:</p>
        <ul>
          <li>Μεγέθη: 1/4, 3/4, 4/4</li>
          <li>Κάπακι: Έλατο</li>
          <li>Σχεδίαση: Παραδοσιακή</li>
          <li>Μάρκα: Cascha</li>
          <li>Περιλαμβάνει: Βιολί, δοξάρι, θήκη</li>
        </ul>
      `,
      price: 239,
      image: "/images/cascha-violin-set.png",
      gallery: ["/images/cascha-violin-set.png"],
      inStock: true,
      rating: 4.7,
      reviewCount: 8,
      sku: "CASCHA-VLN-SET",
      category: "instruments",
    },
    "saz-oud": {
      id: "saz-oud",
      name: "Παραδοσιακό Χειροποίητο Ουτι",
      description: "Χειροποίητο ουτι με κάπακι έλατο, λάμος και ταστιέρα χοράερα από Maoni, μάρκα SAZ OYTI.",
      longDescription: `
        <p>Το παραδοσιακό χειροποίητο ουτι SAZ OYTI είναι ένα εξαιρετικό όργανο για τους λάτρεις της παραδοσιακής μουσικής.</p>
        <p>Κατασκευασμένο με παραδοσιακές τεχνικές από έμπειρους τεχνίτες.</p>
        <p>Χαρακτηριστικά:</p>
        <ul>
          <li>Κάπακι: Έλατο</li>
          <li>Πλάτη και πλευρές: Λάμος</li>
          <li>Ταστιέρα: Χοράερα από Maoni</li>
          <li>Μάρκα: SAZ OYTI</li>
          <li>Κατασκευή: Χειροποίητη</li>
        </ul>
      `,
      price: 49,
      image: "/images/saz-oud.png",
      gallery: ["/images/saz-oud.png"],
      inStock: true,
      rating: 4.9,
      reviewCount: 15,
      sku: "SAZ-OYTI-001",
      category: "traditional",
    },
    "lyre-case-single": {
      id: "lyre-case-single",
      name: "Βαλίτσα Ποντιακής Λύρας - Μονή",
      description: "Μονή θήκη για ποντιακή λύρα, προσφέρει υψηλής ποιότητας προστασία για το όργανό σας.",
      longDescription: `
        <p>Η μονή βαλίτσα για ποντιακή λύρα προσφέρει την ιδανική προστασία για το όργανό σας κατά τη μεταφορά και αποθήκευση.</p>
        <p>Κατασκευασμένη από ανθεκτικά υλικά με εσωτερική επένδυση για μέγιστη προστασία.</p>
        <p>Χαρακτηριστικά:</p>
        <ul>
          <li>Τύπος: Μονή θήκη</li>
          <li>Υλικό: Ανθεκτικό εξωτερικό κέλυφος</li>
          <li>Εσωτερικό: Μαλακή επένδυση</li>
          <li>Χειρολαβές: Εργονομικές</li>
          <li>Κλείσιμο: Ασφαλές με κλιπ</li>
        </ul>
      `,
      price: 75,
      image: "/images/lyre-case-single.png",
      gallery: ["/images/lyre-case-single.png"],
      inStock: true,
      rating: 4.6,
      reviewCount: 22,
      sku: "LYRE-CASE-S",
      category: "cases",
    },
    "lyre-case-double": {
      id: "lyre-case-double",
      name: "Βαλίτσα Ποντιακής Λύρας - Διπλή",
      description:
        "Διπλή θήκη για ποντιακή λύρα, ιδανική για επαγγελματίες μουσικούς που χρειάζονται να μεταφέρουν δύο όργανα.",
      longDescription: `
        <p>Η διπλή βαλίτσα για ποντιακή λύρα είναι η ιδανική λύση για επαγγελματίες μουσικούς που χρειάζονται να μεταφέρουν δύο όργανα ταυτόχρονα.</p>
        <p>Προσφέρει εξαιρετική προστασία και πρακτικότητα στη μεταφορά.</p>
        <p>Χαρακτηριστικά:</p>
        <ul>
          <li>Τύπος: Διπλή θήκη</li>
          <li>Χωρητικότητα: 2 ποντιακές λύρες</li>
          <li>Υλικό: Ανθεκτικό εξωτερικό κέλυφος</li>
          <li>Εσωτερικό: Διαχωριστικά με μαλακή επένδυση</li>
          <li>Ιδανική για: Επαγγελματίες μουσικούς</li>
        </ul>
      `,
      price: 95,
      image: "/images/lyre-case-double.png",
      gallery: ["/images/lyre-case-double.png"],
      inStock: true,
      rating: 4.8,
      reviewCount: 18,
      sku: "LYRE-CASE-D",
      category: "cases",
    },
    "boss-tu3-tuner": {
      id: "boss-tu3-tuner",
      name: "Πεταλάκι Boss TU-3",
      description: "Χρωματικό πεταλάκι κουρδιστήρι Boss TU-3, επαγγελματική ποιότητα για ακριβές κούρδισμα.",
      longDescription: `
        <p>Το Boss TU-3 είναι ένα από τα πιο δημοφιλή και αξιόπιστα πεταλάκια κουρδιστήρι στον κόσμο.</p>
        <p>Προσφέρει εξαιρετική ακρίβεια και ταχύτητα στο κούρδισμα, ιδανικό για live εμφανίσεις και studio.</p>
        <p>Χαρακτηριστικά:</p>
        <ul>
          <li>Τύπος: Χρωματικό κουρδιστήρι</li>
          <li>Μάρκα: Boss</li>
          <li>Μοντέλο: TU-3</li>
          <li>Ακρίβεια: ±1 cent</li>
          <li>Οθόνη: LED με υψηλή ορατότητα</li>
          <li>Τροφοδοσία: 9V DC ή μπαταρία</li>
        </ul>
      `,
      price: 100,
      image: "/images/boss-tu3-tuner.png",
      gallery: ["/images/boss-tu3-tuner.png"],
      inStock: true,
      rating: 4.9,
      reviewCount: 45,
      sku: "BOSS-TU3",
      category: "pedals",
    },
    "boss-ge7-equalizer": {
      id: "boss-ge7-equalizer",
      name: "Πεταλάκι Boss GE-7",
      description: "Equalizer πεταλάκι Boss GE-7 με 7-band γραφικό equalizer για πλήρη έλεγχο του ήχου σας.",
      longDescription: `
        <p>Το Boss GE-7 είναι ένα επαγγελματικό 7-band γραφικό equalizer που σας επιτρέπει να διαμορφώσετε τον ήχο σας με ακρίβεια.</p>
        <p>Ιδανικό για κιθαρίστες που θέλουν πλήρη έλεγχο των συχνοτήτων του ήχου τους.</p>
        <p>Χαρακτηριστικά:</p>
        <ul>
          <li>Τύπος: 7-band γραφικό equalizer</li>
          <li>Μάρκα: Boss</li>
          <li>Μοντέλο: GE-7</li>
          <li>Συχνότητες: 100Hz, 200Hz, 400Hz, 800Hz, 1.6kHz, 3.2kHz, 6.4kHz</li>
          <li>Εύρος: ±15dB ανά band</li>
          <li>Level slider για συνολικό έλεγχο</li>
        </ul>
      `,
      price: 115,
      image: "/images/boss-ge7-equalizer.png",
      gallery: ["/images/boss-ge7-equalizer.png"],
      inStock: true,
      rating: 4.7,
      reviewCount: 32,
      sku: "BOSS-GE7",
      category: "pedals",
    },
    // Κρατάμε και το υπάρχον galli-set
    "galli-set": {
      id: "galli-set",
      name: "Σετ χορδές Galli 0,14 - LA - LA",
      description: "Πλήρες σετ χορδών για ποντιακή λύρα",
      longDescription: `
        <p>Το πλήρες σετ χορδών Galli για ποντιακή λύρα περιλαμβάνει όλες τις απαραίτητες χορδές για το όργανό σας.</p>
        <p>Το σετ αποτελείται από μία χορδή Galli 0,14 και δύο χορδές LA, ειδικά επιλεγμένες για να προσφέρουν τον αυθεντικό ήχο της ποντιακής λύρας.</p>
        <p>Περιεχόμενα σετ:</p>
        <ul>
          <li>1 x Χορδή Galli 0,14mm</li>
          <li>2 x Χορδές LA (A) για βιολί</li>
        </ul>
      `,
      price: 10.5,
      oldPrice: 12,
      image: "/images/galli-set.jpeg",
      gallery: ["/images/galli-set.jpeg", "/images/galli-014.jpeg", "/images/galli-la.jpeg"],
      inStock: true,
      rating: 5,
      reviewCount: 18,
      sku: "GALLI-SET-01",
      category: "strings",
    },
  }

  return products[slug as keyof typeof products] || null
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isAdded, setIsAdded] = useState(false)

  if (!product) {
    return (
      <div className="bg-black text-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="bg-gray-900 rounded-lg p-8 text-center border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-2">Το προϊόν δεν βρέθηκε</h2>
            <p className="text-gray-400 mb-6">Το προϊόν που αναζητάτε δεν είναι διαθέσιμο ή δεν υπάρχει.</p>
            <Link href="/eshop">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Επιστροφή στο Κατάστημα
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    })

    setIsAdded(true)

    // Reset the added state after 2 seconds
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-400 hover:text-amber-400">
              Αρχική
            </Link>
            <span className="mx-2 text-gray-600">/</span>
            <Link href="/eshop" className="text-gray-400 hover:text-amber-400">
              E-shop
            </Link>
            <span className="mx-2 text-gray-600">/</span>
            <Link href={`/eshop/${product.category}`} className="text-gray-400 hover:text-amber-400">
              {product.category === "strings"
                ? "Χορδές"
                : product.category === "accessories"
                  ? "Αξεσουάρ"
                  : product.category === "lyres"
                    ? "Ποντιακές Λύρες"
                    : "Προϊόντα"}
            </Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-amber-400">{product.name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
              <div className="aspect-square relative">
                <Image
                  src={product.gallery[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {product.gallery.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-2">
                {product.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`bg-gray-900 rounded-md overflow-hidden border ${
                      selectedImage === index ? "border-amber-600" : "border-gray-800"
                    }`}
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} - Εικόνα ${index + 1}`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-2">{product.name}</h1>

            {/* Ratings */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "text-amber-400 fill-amber-400"
                        : i < product.rating
                          ? "text-amber-400 fill-amber-400 opacity-50"
                          : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-400">
                {product.rating} ({product.reviewCount} κριτικές)
              </span>
            </div>

            <p className="text-gray-300 mb-6">{product.description}</p>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">{product.price.toFixed(2)}€</span>
                {product.oldPrice && (
                  <span className="text-lg text-gray-500 line-through">{product.oldPrice.toFixed(2)}€</span>
                )}
              </div>
              <span className="text-sm text-gray-500">Συμπεριλαμβάνεται ΦΠΑ 24%</span>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  product.inStock ? "bg-green-900/30 text-green-400" : "bg-red-900/30 text-red-400"
                }`}
              >
                {product.inStock ? "Διαθέσιμο" : "Εξαντλημένο"}
              </span>
              <span className="ml-2 text-sm text-gray-400">SKU: {product.sku}</span>
            </div>

            {/* Add to Cart */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center text-gray-400 hover:text-white bg-gray-800 rounded-l-md border-r border-gray-700"
                    aria-label="Μείωση ποσότητας"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => {
                      const val = Number.parseInt(e.target.value)
                      if (!isNaN(val) && val > 0) {
                        setQuantity(val)
                      }
                    }}
                    className="w-16 h-12 sm:h-10 bg-gray-800 text-center text-white border-0 focus:ring-0"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center text-gray-400 hover:text-white bg-gray-800 rounded-r-md border-l border-gray-700"
                    aria-label="Αύξηση ποσότητας"
                  >
                    +
                  </button>
                </div>

                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 ${
                    isAdded ? "bg-green-700 hover:bg-green-800" : "bg-amber-600 hover:bg-amber-700"
                  } text-white`}
                >
                  {isAdded ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Προστέθηκε στο Καλάθι
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Προσθήκη στο Καλάθι
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                  <Truck className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Δωρεάν Αποστολή</h3>
                  <p className="text-sm text-gray-400">Για παραγγελίες άνω των 30€</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Εύκολη Επιστροφή</h3>
                  <p className="text-sm text-gray-400">Επιστροφή εντός 14 ημερών</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Εγγύηση Ποιότητας</h3>
                  <p className="text-sm text-gray-400">Όλα τα προϊόντα μας είναι ελεγμένα</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-12">
          <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-800">
              <h2 className="text-xl font-semibold text-amber-400">Περιγραφή Προϊόντος</h2>
            </div>
            <div
              className="p-4 sm:p-6 prose prose-invert max-w-none prose-headings:text-amber-400 prose-a:text-amber-400"
              dangerouslySetInnerHTML={{ __html: product.longDescription }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
