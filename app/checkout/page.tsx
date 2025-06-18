"use client"

import Link from "next/link"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CheckoutPage() {
  const { itemCount } = useCart()

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-8">Ολοκλήρωση Αγοράς</h1>

        {itemCount === 0 ? (
          <div className="bg-gray-900 rounded-lg p-8 text-center border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-2">Το καλάθι σας είναι άδειο</h2>
            <p className="text-gray-400 mb-6">Προσθέστε προϊόντα στο καλάθι σας για να συνεχίσετε</p>
            <Link href="/eshop">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Μετάβαση στο Κατάστημα
              </Button>
            </Link>
          </div>
        ) : (
          <div className="bg-gray-900 rounded-lg p-8 text-center border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-2">Σελίδα σε Κατασκευή</h2>
            <p className="text-gray-400 mb-6">
              Η σελίδα ολοκλήρωσης αγοράς είναι υπό κατασκευή. Σύντομα θα μπορείτε να ολοκληρώσετε την παραγγελία σας.
            </p>
            <Link href="/cart">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Επιστροφή στο Καλάθι
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
