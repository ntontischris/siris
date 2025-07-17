import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

// TikTok icon component (since it's not in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
  </svg>
)

export default function ContactPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 border-b border-amber-900/30 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400 mb-4">Επικοινωνήστε μαζί μας</h1>
            <p className="text-lg text-gray-300 mb-8">
              Βρείτε μας και επικοινωνήστε μαζί μας για οποιαδήποτε ερώτηση ή παραγγελία που έχετε.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-16">
            {/* Phone */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 hover:border-amber-900/40 transition-all duration-300 transform hover:-translate-y-1 text-center group">
              <div className="w-12 h-12 bg-amber-900/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-amber-900/30 transition-colors">
                <Phone className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Τηλέφωνο</h3>
              <p className="text-gray-400 text-sm mb-3">Καλέστε μας για άμεση εξυπηρέτηση</p>
              <a
                href="tel:+306946278589"
                className="text-white hover:text-amber-400 transition-colors font-medium text-lg"
              >
                +30 694 627 8589
              </a>
              <div className="mt-3">
                <a href="tel:+306946278589">
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                    Κλήση Τώρα
                  </Button>
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 hover:border-amber-900/40 transition-all duration-300 transform hover:-translate-y-1 text-center group">
              <div className="w-12 h-12 bg-amber-900/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-amber-900/30 transition-colors">
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
              <div className="mt-3">
                <a href="mailto:siristatidistheo@gmail.com">
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                    Αποστολή Email
                  </Button>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 hover:border-amber-900/40 transition-all duration-300 transform hover:-translate-y-1 text-center group">
              <div className="w-12 h-12 bg-amber-900/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-amber-900/30 transition-colors">
                <MapPin className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Διεύθυνση</h3>
              <p className="text-gray-400 text-sm mb-3">Επισκεφθείτε το κατάστημά μας</p>
              <a
                href="https://maps.google.com/?q=Κύπρου+12,+Σταυρούπολη,+Θεσσαλονίκη"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-amber-400 transition-colors text-sm block"
              >
                Κύπρου 12
                <br />
                Σταυρούπολη, Θεσσαλονίκη
              </a>
              <div className="mt-3">
                <a
                  href="https://maps.google.com/?q=Κύπρου+12,+Σταυρούπολη,+Θεσσαλονίκη"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                    Δείτε στο Χάρτη
                  </Button>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 hover:border-amber-900/40 transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="w-12 h-12 bg-amber-900/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Ώρες Λειτουργίας</h3>
              <p className="text-gray-400 text-sm mb-3">Είμαστε ανοιχτά</p>
              <div className="text-white text-sm space-y-1">
                <p>Δευτέρα - Παρασκευή </p>
                <p>Πρωί: 9:00 - 15:00</p>
                <p>Απόγευμα: 18:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-amber-400 mb-4">Ακολουθήστε μας</h2>
              <p className="text-gray-300">Μείνετε ενημερωμένοι με τα νέα μας και τις δημιουργίες μας</p>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100010951200627&locale=el_GR"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6 border border-blue-800 hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1 text-center group"
              >
                <div className="w-12 h-12 bg-blue-700/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-700/30 transition-colors">
                  <Facebook className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Facebook</h3>
                <p className="text-gray-300 text-sm">Δείτε τις δημιουργίες μας</p>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/siristatidis_theodoros/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-pink-900 to-purple-800 rounded-xl p-6 border border-pink-800 hover:border-pink-600 transition-all duration-300 transform hover:-translate-y-1 text-center group"
              >
                <div className="w-12 h-12 bg-pink-700/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-pink-700/30 transition-colors">
                  <Instagram className="h-6 w-6 text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold text-pink-400 mb-2">Instagram</h3>
                <p className="text-gray-300 text-sm">Φωτογραφίες & Stories</p>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@siristatidis_theodoros"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-1 text-center group"
              >
                <div className="w-12 h-12 bg-gray-700/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-gray-700/30 transition-colors">
                  <TikTokIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">TikTok</h3>
                <p className="text-gray-300 text-sm">Βίντεο κατασκευής</p>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@Siristatidis-theodoros"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl p-6 border border-red-800 hover:border-red-600 transition-all duration-300 transform hover:-translate-y-1 text-center group"
              >
                <div className="w-12 h-12 bg-red-700/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-red-700/30 transition-colors">
                  <Youtube className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">YouTube</h3>
                <p className="text-gray-300 text-sm">Εκπαιδευτικά βίντεο</p>
              </a>
            </div>
          </div>

          {/* Google Maps Integration */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
            {/* About Our Service */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-800">
              <h2 className="text-xl font-semibold text-amber-400 mb-4">Η Εξυπηρέτησή μας</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Στο κατάστημά μας θα βρείτε εξειδικευμένη συμβουλή για την επιλογή του κατάλληλου οργάνου που
                  ταιριάζει στις ανάγκες σας.
                </p>
                <p>
                  Προσφέρουμε προσωπική εξυπηρέτηση και υποστήριξη σε κάθε πελάτη, πριν και μετά την αγορά, καθώς και
                  τεχνική υποστήριξη για όλα τα όργανα.
                </p>
                <p>
                  Απαντάμε σε όλες τις επικοινωνίες εντός 24 ωρών και είμαστε πάντα διαθέσιμοι για να σας βοηθήσουμε.
                </p>
              </div>

              <div className="mt-6 flex flex-col xs:flex-row gap-3 sm:gap-4">
                <a href="tel:+306946278589">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full sm:w-auto">
                    <Phone className="mr-2 h-4 w-4" />
                    Κλήση Τώρα
                  </Button>
                </a>
                <a href="mailto:siristatidistheo@gmail.com">
                  <Button
                    variant="outline"
                    className="border-amber-600 text-amber-400 hover:bg-amber-900/20 w-full sm:w-auto bg-transparent"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Αποστολή Email
                  </Button>
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-800">
              <div className="p-4 border-b border-gray-800 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-amber-400">Βρείτε μας</h3>
                <a
                  href="https://maps.google.com/?q=Κύπρου+12,+Σταυρούπολη,+Θεσσαλονίκη"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 text-sm"
                >
                  Άνοιγμα στο Google Maps →
                </a>
              </div>
              <div className="aspect-video relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.2!2d22.9363448!3d40.6685623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838f41ab58e8b%3A0x1234567890abcdef!2sKyprou+12%2C+Stavroupoli+564+30%2C+Greece!5e0!3m2!1sen!2sgr!4v1640995200000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-b-xl"
                ></iframe>
              </div>
              <div className="p-4 bg-gray-800">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Κύπρου 12, Σταυρούπολη</p>
                    <p className="text-gray-400 text-sm">Θεσσαλονίκη, Ελλάδα</p>
                    <p className="text-gray-500 text-xs mt-1">Εύκολη πρόσβαση με μέσα μαζικής μεταφοράς</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
