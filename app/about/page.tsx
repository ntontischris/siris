import Image from "next/image"
import { Award, Clock, Users, PenToolIcon as Tool } from "lucide-react"
import CraftsmanshipSlider from "@/components/craftsmanship-slider"

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 border-b border-amber-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/texture.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400 mb-4">Η Τέχνη και το Πάθος μας</h1>
            <p className="text-lg text-gray-300 mb-8">
              Ο Θεόδωρος Σιριστατίδης ασχολείται με την κατασκευή ποντιακής λύρας από το 2004, συνεχίζοντας ένα μονοπάτι
              που του άνοιξαν ο παππούς και ο πατέρας του. Με τα χαρίσματα, τις γνώσεις και τις αξίες που του
              μεταδόθηκαν, φροντίζει κάθε λύρα σαν να είναι μοναδική.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-6">Η Ιστορία μας</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Στο εργαστήριό μας συνεχίζουμε με αγάπη και σεβασμό την οικογενειακή παράδοση στην κατασκευή και
                  επισκευή της ποντιακής λύρας. Με μεράκι και προσοχή στη λεπτομέρεια, δημιουργούμε χειροποίητες λύρες
                  που ξεχωρίζουν για την ποιότητα και τον αυθεντικό τους ήχο. Στόχος μας είναι να τιμήσουμε τη μουσική
                  μας κληρονομιά και να προσφέρουμε όργανα που θα ταξιδεύουν την ποντιακή παράδοση στις καρδιές των
                  ανθρώπων.
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
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl border border-amber-900/30 hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer">
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

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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

      {/* Craftsmanship Image Slider Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-4">Η Τέχνη της Κατασκευής</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ανακαλύψτε τη διαδικασία κατασκευής μέσα από εικόνες από το εργαστήριό μας
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <CraftsmanshipSlider />
          </div>
        </div>
      </section>
    </div>
  )
}
