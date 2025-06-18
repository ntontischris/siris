"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, X, ChevronRight, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { useOnClickOutside } from "@/hooks/use-click-outside"

export default function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const { items, itemCount, subtotal, removeItem, updateQuantity } = useCart()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useOnClickOutside(dropdownRef, () => setIsOpen(false))

  // Close dropdown when pressing escape
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        className="text-white hover:text-amber-400 hover:bg-gray-800 relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Καλάθι αγορών"
      >
        <ShoppingBag className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[calc(100vw-2rem)] sm:w-80 max-w-[320px] bg-gray-900 border border-gray-800 rounded-md shadow-lg z-50 overflow-hidden">
          <div className="p-3 border-b border-gray-800 flex justify-between items-center">
            <h3 className="font-medium text-white">Καλάθι Αγορών</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white" aria-label="Κλείσιμο">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {items.length === 0 ? (
              <div className="p-4 text-center text-gray-400">
                <ShoppingBag className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>Το καλάθι σας είναι άδειο</p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-800">
                {items.map((item) => (
                  <li key={item.id} className="p-3 flex gap-3">
                    <div className="w-16 h-16 bg-gray-800 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-white truncate">{item.name}</h4>
                      <div className="mt-1 flex items-center justify-between">
                        <div className="flex items-center">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-white bg-gray-800 rounded"
                            aria-label="Μείωση ποσότητας"
                          >
                            -
                          </button>
                          <span className="mx-2 text-sm text-white">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-white bg-gray-800 rounded"
                            aria-label="Αύξηση ποσότητας"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-sm font-medium text-amber-400">{item.price.toFixed(2)}€</span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 self-center"
                      aria-label="Αφαίρεση προϊόντος"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <>
              <div className="p-3 border-t border-gray-800">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-400">Υποσύνολο:</span>
                  <span className="font-medium text-white">{subtotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-400">ΦΠΑ (24%):</span>
                  <span className="font-medium text-white">{(subtotal * 0.24).toFixed(2)}€</span>
                </div>
                <div className="flex justify-between items-center font-medium">
                  <span className="text-white">Σύνολο:</span>
                  <span className="text-amber-400 text-lg">{(subtotal * 1.24).toFixed(2)}€</span>
                </div>
              </div>

              <div className="p-3 border-t border-gray-800 flex flex-col gap-2">
                <Link href="/cart" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Προβολή Καλαθιού</Button>
                </Link>
                <Link href="/checkout" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full border-amber-600 text-amber-400 hover:bg-amber-900/20">
                    Ολοκλήρωση Αγοράς
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
