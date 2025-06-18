import { Mail, Phone, MapPin, Clock } from "lucide-react"
import ContactForm from "./contact-form"

export default function ContactSection() {
  return (
    <section className="py-12 sm:py-16 border-t border-amber-900/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400">Επικοινωνήστε μαζί μας</h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Είμαστε εδώ για να απαντήσουμε σε κάθε ερώτησή σας σχετικά με τα προϊόντα και τις υπηρεσίες μας
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-amber-400 mb-4">Στοιχεία Επικοινωνίας</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Διεύθυνση</p>
                    <p className="text-gray-400 mt-1">Οδός Παραδοσιακών Οργάνων 123, 54321, Θεσσαλονίκη</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Τηλέφωνο</p>
                    <a
                      href="tel:+302310123456"
                      className="text-gray-400 hover:text-amber-400 transition-colors mt-1 block"
                    >
                      +30 2310 123 456
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a
                      href="mailto:info@siristatidis.gr"
                      className="text-gray-400 hover:text-amber-400 transition-colors mt-1 block"
                    >
                      info@siristatidis.gr
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Ώρες Λειτουργίας</p>
                    <p className="text-gray-400 mt-1">Δευτέρα - Παρασκευή: 9:00 - 17:00</p>
                    <p className="text-gray-400">Σάββατο: 10:00 - 14:00</p>
                    <p className="text-gray-400">Κυριακή: Κλειστά</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-800">
              <div className="aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <p className="text-gray-400 text-center px-4">
                    Εδώ θα εμφανιζόταν ο χάρτης με την τοποθεσία του καταστήματος
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-amber-400 mb-6">Στείλτε μας μήνυμα</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
