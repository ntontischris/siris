"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

type ProductCardProps = {
  id: string
  name: string
  description: string
  price: number
  oldPrice?: number
  image: string
  badge?: {
    text: string
    color: "amber" | "green" | "blue"
  }
  slug: string
}

export default function ProductCard({ id, name, description, price, oldPrice, image, badge, slug }: ProductCardProps) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      image,
      quantity: 1,
    })

    setIsAdded(true)

    // Reset the added state after 2 seconds
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  const getBadgeColor = () => {
    switch (badge?.color) {
      case "green":
        return "bg-green-600"
      case "blue":
        return "bg-blue-600"
      default:
        return "bg-amber-600"
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-800 hover:border-amber-900/40">
      {/* Badge */}
      {badge && (
        <div
          className={`absolute top-3 left-3 z-10 ${getBadgeColor()} text-white text-xs font-bold px-2 py-1 rounded-full shadow-md`}
        >
          {badge.text}
        </div>
      )}

      <Link href={`/products/${slug}`} className="block">
        <div className="aspect-square relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <Image
            src={image || "/placeholder.svg"}
            width={400}
            height={400}
            alt={name}
            className="object-contain p-4 transition-all duration-500 transform group-hover:scale-110"
          />
        </div>
      </Link>

      <div className="p-4 sm:p-5 relative">
        <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-t from-gray-900 to-transparent"></div>

        <Link href={`/products/${slug}`} className="block">
          <h3 className="font-semibold text-base sm:text-lg text-amber-400 group-hover:text-amber-300 transition-colors duration-300">
            {name}
          </h3>

          <p className="text-xs sm:text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
            {description}
          </p>
        </Link>

        <div className="mt-4 flex justify-between items-center">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-sm sm:text-base">{price.toFixed(2)}€</span>
              {oldPrice && <span className="text-xs text-gray-500 line-through">{oldPrice.toFixed(2)}€</span>}
            </div>
            <span className="text-xs text-gray-500">Με ΦΠΑ</span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleAddToCart}
            className={`text-amber-400 hover:text-amber-300 hover:bg-amber-950/70 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-2 transition-all duration-300 border ${
              isAdded ? "border-green-700/50 bg-green-950/70" : "border-amber-800/30 hover:border-amber-700/50"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="mr-1 h-3.5 w-3.5" />
                <span className="hidden xs:inline">Προστέθηκε</span>
              </>
            ) : (
              <>
                <ShoppingBag className="mr-1 h-3.5 w-3.5" />
                <span className="hidden xs:inline">Αγορά</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
