"use client"

import Image from "next/image"
import Link from "next/link"
import { isProductHidden } from "@/lib/hidden-products"

type ProductCardProps = {
  id: string
  name: string
  description: string
  price?: number
  oldPrice?: number
  image: string
  badge?: {
    text: string
    color: "amber" | "green" | "blue"
  }
  slug: string
}

export default function ProductCard({ id, name, description, price, oldPrice, image, badge, slug }: ProductCardProps) {
  if (isProductHidden(slug)) return null

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
    <Link href={`/products/${slug}`} className="block h-full">
      <article
        className="group relative h-full flex flex-col overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg shadow-black/40 hover:shadow-[0_12px_40px_-8px_rgba(212,160,23,0.35)] transition-all duration-500 transform hover:-translate-y-1.5 border border-amber-900/30 hover:border-amber-500/60 focus-within:ring-2 focus-within:ring-amber-400 cursor-pointer"
        role="article"
        aria-labelledby={`product-${id}-title`}
      >
        {/* Badge */}
        {badge && (
          <div
            className={`absolute top-2 sm:top-3 left-2 sm:left-3 z-10 ${getBadgeColor()} text-white text-xs font-bold px-2 py-1 rounded-full shadow-md`}
          >
            {badge.text}
          </div>
        )}

        <div className="aspect-square relative overflow-hidden card-shine">
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
            aria-hidden="true"
          ></div>
          <Image
            src={image || "/placeholder.svg"}
            width={400}
            height={400}
            alt={`Εικόνα προϊόντος: ${name}`}
            className="object-contain p-4 transition-transform duration-700 ease-out transform group-hover:scale-105"
          />
        </div>

        <div className="p-3 sm:p-4 lg:p-5 relative flex flex-col flex-1">
          <div className="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-t from-gray-900 to-transparent"></div>

          <h3
            id={`product-${id}-title`}
            className="font-semibold text-sm sm:text-base lg:text-lg text-amber-400 group-hover:text-amber-300 transition-colors duration-300 line-clamp-2"
          >
            {name}
          </h3>

          <p className="text-xs sm:text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300 line-clamp-2 sm:line-clamp-3">
            {description}
          </p>

          <div className="mt-auto pt-4">
            {/* Price area */}
            <div className="flex flex-col">
              {price !== undefined ? (
                <>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-amber-300 font-bold text-sm sm:text-base lg:text-lg">{price.toFixed(2)}€</span>
                    {oldPrice !== undefined && (
                      <span className="text-xs sm:text-sm text-gray-500 line-through">{oldPrice.toFixed(2)}€</span>
                    )}
                  </div>
                </>
              ) : (
                <span className="text-amber-400 font-semibold text-sm sm:text-base">Κατόπιν επικοινωνίας</span>
              )}
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
