import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Award, Clock, Users, PenToolIcon as Tool, ChevronRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 border-b border-amber-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400 mb-4">Η Τέχνη και το Πάθος μας</h1>
            <p className="text-lg text-gray-300 mb-8">
              Από το 1985, η οικογένεια Σιριστατίδη δημιουργεί χειροποίητες ποντιακές λύρες με σεβασμό στην παράδοση και
              αγάπη για τη μουσική.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-6">Η Ιστορία μας</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Η ιστορία μας ξεκινά το 1985, όταν ο Θεόδωρος Σιριστατίδης, με καταγωγή από τον Πόντο, αποφάσισε να
                  αφιερώσει τη ζωή του στη διατήρηση της μουσικής παράδοσης του Πόντου μέσα από την κατασκευή
                  παραδοσιακών λυρών.
                </p>
                <p>
                  Με γνώσεις που μεταφέρθηκαν από γενιά σε γενιά και με συνεχή έρευνα και εξέλιξη, καταφέραμε να
                  συνδυάσουμε την παραδοσιακή τεχνογνωσία με σύγχρονες τεχνικές, δημιουργώντας όργανα εξαιρετικής
                  ποιότητας και μοναδικού ήχου.
                </p>
                <p>
                  Σήμερα, το εργαστήριό μας έχει εξελιχθεί σε ένα σύγχρονο κατάστημα που προσφέρει όχι μόνο χειροποίητες
                  λύρες, αλλά και μια μεγάλη γκάμα από χορδές και αξεσουάρ για όλα τα έγχορδα όργανα, εξυπηρετώντας
                  μουσικούς από όλη την Ελλάδα και το εξωτερικό.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">Επικοινωνήστε μαζί μας</Button>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl border border-amber-900/30">
                <Image
                  src="/images/craftsman5.jpg"
                  alt="Ο Θεόδωρος Σιριστατίδης στο εργαστήριό του"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-amber-300 font-medium">Ο Θεόδωρος Σιριστατίδης στο εργαστήριό του</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-600/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-950 to-black border-y border-amber-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-4">Οι Αξίες μας</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Η φιλοσοφία μας βασίζεται σε αρχές που διέπουν κάθε πτυχή της δουλειάς μας
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-amber-900/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-900/20 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-amber-400 mb-2">Ποιότητα</h3>
              <p className="text-gray-400">
                Επιλέγουμε τα καλύτερα υλικά και εφαρμόζουμε αυστηρά πρότυπα ποιότητας σε κάθε στάδιο της κατασκευής.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-amber-900/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-900/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-amber-400 mb-2">Παράδοση</h3>
              <p className="text-gray-400">
                Διατηρούμε ζωντανές τις παραδοσιακές τεχνικές κατασκευής που έχουν περάσει από γενιά σε γενιά.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-amber-900/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-900/20 rounded-full flex items-center justify-center mb-4">
                <Tool className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-amber-400 mb-2">Καινοτομία</h3>
              <p className="text-gray-400">
                Αναζητούμε συνεχώς νέους τρόπους βελτίωσης των οργάνων μας, συνδυάζοντας την παράδοση με τη σύγχρονη
                τεχνολογία.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-amber-900/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-amber-900/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-amber-400 mb-2">Εξυπηρέτηση</h3>
              <p className="text-gray-400">
                Προσφέρουμε προσωπική εξυπηρέτηση και υποστήριξη σε κάθε πελάτη, πριν και μετά την αγορά.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-lg border border-amber-900/30">
                    <Image
                      src="/images/craftsman1.jpg"
                      alt="Διαδικασία κατασκευής λύρας"
                      width={300}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg border border-amber-900/30">
                    <Image
                      src="/images/craftsman3.jpg"
                      alt="Λεπτομέρεια κατασκευής"
                      width={300}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-6">
                  <div className="rounded-lg overflow-hidden shadow-lg border border-amber-900/30">
                    <Image
                      src="/images/craftsman2.jpg"
                      alt="Επεξεργασία ξύλου"
                      width={300}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg border border-amber-900/30">
                    <Image
                      src="/images/craftsman4.jpg"
                      alt="Τελικό φινίρισμα"
                      width={300}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-600/20 rounded-full blur-2xl -z-10"></div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-6">Η Τέχνη της Κατασκευής</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Κάθε λύρα που βγαίνει από το εργαστήριό μας είναι αποτέλεσμα πολλών ωρών προσεκτικής χειροτεχνίας. Η
                  διαδικασία ξεκινά με την επιλογή του κατάλληλου ξύλου, το οποίο πρέπει να έχει συγκεκριμένες ιδιότητες
                  για να παράγει τον επιθυμητό ήχο.
                </p>
                <p>
                  Στη συνέχεια, το ξύλο σκαλίζεται με ακρίβεια για να δημιουργηθεί το σώμα της λύρας, ενώ ιδιαίτερη
                  προσοχή δίνεται στο πάχος του ηχείου, που επηρεάζει καθοριστικά την ποιότητα του ήχου. Η διαδικασία
                  ολοκληρώνεται με το φινίρισμα, που προστατεύει το όργανο και αναδεικνύει την ομορφιά του ξύλου.
                </p>
                <p>
                  Κάθε λύρα είναι μοναδική, με τη δική της προσωπικότητα και ηχητικό χαρακτήρα, αντανακλώντας τόσο την
                  παράδοση όσο και την προσωπική μας σφραγίδα ως κατασκευαστές.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/products/lyres">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">Δείτε τις Λύρες μας</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-shop Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black to-gray-950 border-t border-amber-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-6">Το E-shop μας</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Πέρα από την κατασκευή παραδοσιακών λυρών, το κατάστημά μας διαθέτει μια πλούσια γκάμα προϊόντων για
                  μουσικούς κάθε επιπέδου.
                </p>
                <p>
                  Στο e-shop μας θα βρείτε υψηλής ποιότητας χορδές για όλα τα έγχορδα όργανα, από τις κλασικές χορδές
                  Galli για λύρες και βιολιά, μέχρι εξειδικευμένες χορδές για παραδοσιακά όργανα.
                </p>
                <p>
                  Επιπλέον, προσφέρουμε μια μεγάλη ποικιλία από αξεσουάρ, όπως τρίχες για δοξάρια, ρετσίνια, θήκες
                  μεταφοράς, και πολλά άλλα είδη που καλύπτουν κάθε ανάγκη του σύγχρονου μουσικού.
                </p>
                <p>
                  Όλα τα προϊόντα μας επιλέγονται με αυστηρά κριτήρια ποιότητας και προσφέρονται σε ανταγωνιστικές
                  τιμές, με γρήγορη αποστολή σε όλη την Ελλάδα.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/eshop">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Επισκεφθείτε το E-shop
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-amber-900/40 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-square relative overflow-hidden rounded-md mb-3">
                    <Image
                      src="/images/galli-013.jpeg"
                      alt="Χορδές Galli"
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-amber-400 font-medium text-sm">Χορδές Galli</h3>
                  <p className="text-gray-400 text-xs mt-1">Υψηλής ποιότητας χορδές για όλα τα έγχορδα</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-amber-900/40 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-square relative overflow-hidden rounded-md mb-3">
                    <Image
                      src="/images/galli-set.jpeg"
                      alt="Σετ Χορδών"
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-amber-400 font-medium text-sm">Σετ Χορδών</h3>
                  <p className="text-gray-400 text-xs mt-1">Ολοκληρωμένα σετ για ποντιακή λύρα</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-amber-900/40 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-square relative overflow-hidden rounded-md mb-3">
                    <Image
                      src="/images/horsehair-white.jpeg"
                      alt="Τρίχες Δοξαριού"
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-amber-400 font-medium text-sm">Τρίχες Δοξαριού</h3>
                  <p className="text-gray-400 text-xs mt-1">Τρίχες Μογγολίας για άριστο ήχο</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-amber-900/40 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-square relative overflow-hidden rounded-md mb-3">
                    <Image
                      src="/images/galli-la.jpeg"
                      alt="Ειδικές Χορδές"
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-amber-400 font-medium text-sm">Ειδικές Χορδές</h3>
                  <p className="text-gray-400 text-xs mt-1">Εξειδικευμένες χορδές για κάθε όργανο</p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-32 h-32 bg-amber-600/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 border-t border-amber-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-4">Τι Λένε για Εμάς</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Η εμπιστοσύνη των πελατών μας είναι η μεγαλύτερη επιβράβευση για τη δουλειά μας
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-800 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-900/30 rounded-full flex items-center justify-center text-amber-400 font-bold text-lg">
                  ΓΚ
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-medium">Γιώργος Καραγιαννίδης</h3>
                  <p className="text-gray-400 text-sm">Επαγγελματίας Λυράρης</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Παίζω με λύρα Σιριστατίδη εδώ και 15 χρόνια. Η ποιότητα κατασκευής και ο ήχος είναι απαράμιλλα. Κάθε
                φορά που χρειάζομαι χορδές ή συντήρηση, η εξυπηρέτηση είναι άμεση και επαγγελματική."
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-800 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-900/30 rounded-full flex items-center justify-center text-amber-400 font-bold text-lg">
                  ΜΠ
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-medium">Μαρία Παπαδοπούλου</h3>
                  <p className="text-gray-400 text-sm">Καθηγήτρια Μουσικής</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Συστήνω τις λύρες Σιριστατίδη σε όλους τους μαθητές μου. Η σχέση ποιότητας-τιμής είναι εξαιρετική και
                το e-shop τους έχει ό,τι χρειάζεται ένας μουσικός, με γρήγορη παράδοση σε όλη την Ελλάδα."
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-800 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-900/30 rounded-full flex items-center justify-center text-amber-400 font-bold text-lg">
                  ΔΤ
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-medium">Δημήτρης Τσακιρίδης</h3>
                  <p className="text-gray-400 text-sm">Συλλέκτης Παραδοσιακών Οργάνων</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Έχω στη συλλογή μου τρεις λύρες Σιριστατίδη διαφορετικών εποχών. Η προσοχή στη λεπτομέρεια και η
                συνέπεια στην ποιότητα είναι εμφανείς σε κάθε μία από αυτές. Πραγματικά έργα τέχνης."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-950 to-black border-t border-amber-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-6">
              Ανακαλύψτε την Τέχνη της Ποντιακής Λύρας
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Είτε είστε επαγγελματίας μουσικός, είτε μόλις ξεκινάτε το ταξίδι σας στην παραδοσιακή μουσική, είμαστε εδώ
              για να σας προσφέρουμε τα καλύτερα προϊόντα και την καλύτερη εξυπηρέτηση.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/products/lyres">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full sm:w-auto">
                  Δείτε τις Λύρες μας
                </Button>
              </Link>
              <Link href="/eshop">
                <Button
                  variant="outline"
                  className="border-amber-600 text-amber-400 hover:bg-amber-900/20 w-full sm:w-auto"
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Επισκεφθείτε το E-shop
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" className="text-white hover:text-amber-400 hover:bg-gray-800 w-full sm:w-auto">
                  Επικοινωνία
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
