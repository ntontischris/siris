"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingBag, Trash2, ArrowLeft, ChevronRight, RefreshCw } from "lucide-react"

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart()
  const [couponCode, setCouponCode] = useState("")
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false)
  const [couponError, setCouponError] = useState<string | null>(null)
  const [couponDiscount, setCouponDiscount] = useState(0)

  const handleApplyCoupon = () => {
    if (!couponCode) {
      setCouponError("Παρακαλώ εισάγετε έναν κωδικό κουπονιού")
      return
    }

    setIsApplyingCoupon(true)
    setCouponError(null)

    // Simulate coupon validation
    setTimeout(() => {
      if (couponCode.toLowerCase() === "welcome10") {
        setCouponDiscount(subtotal * 0.1) // 10% discount
      } else {
        setCouponError("Μη έγκυρος κωδικός κουπονιού")
        setCouponDiscount(0)
      }
      setIsApplyingCoupon(false)
    }, 1000)
  }

  // Calculate totals
  const vatAmount = subtotal * 0.24
  const totalWithVat = subtotal + vatAmount
  const finalTotal = totalWithVat - couponDiscount

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-8">Καλάθι Αγορών</h1>

        {items.length === 0 ? (
          <div className="bg-gray-900 rounded-lg p-8 text-center border border-gray-800">
            <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-gray-600" />
            <h2 className="text-xl font-semibold text-white mb-2">Το καλάθι σας είναι άδειο</h2>
            <p className="text-gray-400 mb-6">Προσθέστε προϊόντα στο καλάθι σας για να συνεχίσετε</p>
            <Link href="/eshop">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Συνέχεια Αγορών
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
                <div className="p-4 border-b border-gray-800 flex justify-between items-center">
                  <h2 className="font-semibold text-white">Προϊόντα</h2>
                  <button onClick={clearCart} className="text-sm text-gray-400 hover:text-red-500 flex items-center">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Άδειασμα Καλαθιού
                  </button>
                </div>

                <ul className="divide-y divide-gray-800">
                  {items.map((item) => (
                    <li key={item.id} className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-24 h-24 bg-gray-800 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <h3 className="font-medium text-white">{item.name}</h3>
                          <p className="text-gray-400 text-sm mt-1">Κωδικός: PROD-{item.id}</p>

                          <div className="mt-auto pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center text-gray-400 hover:text-white bg-gray-800 rounded-l-md border-r border-gray-700"
                                aria-label="Μείωση ποσότητας"
                              >
                                -
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => {
                                  const val = Number.parseInt(e.target.value)
                                  if (!isNaN(val)) {
                                    updateQuantity(item.id, val)
                                  }
                                }}
                                className="w-12 h-10 sm:h-8 bg-gray-800 text-center text-white border-0 focus:ring-0"
                              />
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center text-gray-400 hover:text-white bg-gray-800 rounded-r-md border-l border-gray-700"
                                aria-label="Αύξηση ποσότητας"
                              >
                                +
                              </button>
                            </div>

                            <div className="flex items-center justify-between sm:justify-end gap-4">
                              <div className="text-right">
                                <div className="text-amber-400 font-medium">{item.price.toFixed(2)}€</div>
                                <div className="text-gray-400 text-sm">
                                  {(item.price * item.quantity).toFixed(2)}€ συνολικά
                                </div>
                              </div>

                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-gray-400 hover:text-red-500"
                                aria-label="Αφαίρεση προϊόντος"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-between">
                <Link href="/eshop">
                  <Button variant="outline" className="border-amber-600 text-amber-400 hover:bg-amber-900/20">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Συνέχεια Αγορών
                  </Button>
                </Link>

                <Button
                  onClick={() => {
                    // Refresh cart items (simulate)
                    const currentItems = [...items]
                    clearCart()
                    setTimeout(() => {
                      currentItems.forEach((item) => updateQuantity(item.id, item.quantity))
                    }, 100)
                  }}
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Ανανέωση Καλαθιού
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden sticky top-24">
                <div className="p-4 border-b border-gray-800">
                  <h2 className="font-semibold text-white">Σύνοψη Παραγγελίας</h2>
                </div>

                <div className="p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Υποσύνολο:</span>
                      <span className="text-white">{subtotal.toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">ΦΠΑ (24%):</span>
                      <span className="text-white">{vatAmount.toFixed(2)}€</span>
                    </div>

                    {couponDiscount > 0 && (
                      <div className="flex justify-between text-green-500">
                        <span>Έκπτωση:</span>
                        <span>-{couponDiscount.toFixed(2)}€</span>
                      </div>
                    )}

                    <div className="pt-3 border-t border-gray-800 flex justify-between font-medium">
                      <span className="text-white">Σύνολο:</span>
                      <span className="text-amber-400 text-lg">{finalTotal.toFixed(2)}€</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="mb-4">
                      <label htmlFor="coupon" className="block text-sm font-medium text-gray-400 mb-1">
                        Κωδικός Κουπονιού
                      </label>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Input
                          id="coupon"
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="π.χ. WELCOME10"
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                        <Button
                          onClick={handleApplyCoupon}
                          disabled={isApplyingCoupon}
                          className="bg-amber-600 hover:bg-amber-700 text-white whitespace-nowrap"
                        >
                          {isApplyingCoupon ? "Έλεγχος..." : "Εφαρμογή"}
                        </Button>
                      </div>
                      {couponError && <p className="mt-1 text-sm text-red-500">{couponError}</p>}
                      {couponDiscount > 0 && (
                        <p className="mt-1 text-sm text-green-500">Το κουπόνι εφαρμόστηκε επιτυχώς!</p>
                      )}
                    </div>

                    <Link href="/checkout">
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                        Ολοκλήρωση Αγοράς
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>

                    <div className="mt-4 text-xs text-gray-500 text-center">
                      Προχωρώντας στην ολοκλήρωση της αγοράς, αποδέχεστε τους{" "}
                      <Link href="/terms" className="text-amber-400 hover:underline">
                        Όρους Χρήσης
                      </Link>{" "}
                      και την{" "}
                      <Link href="/privacy" className="text-amber-400 hover:underline">
                        Πολιτική Απορρήτου
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
