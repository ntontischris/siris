"use client"

import Image from "next/image"

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
}

export default function ProductCard({ id, name, description, price, oldPrice, image, badge }: ProductCardProps) {
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
    <article
      className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-800 hover:border-amber-900/40 focus-within:ring-2 focus-within:ring-amber-400"
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

      <div className="aspect-square relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          aria-hidden="true"
        ></div>
        <Image
          src={image || "/placeholder.svg"}
          width={400}
          height={400}
          alt={`Εικόνα προϊόντος: ${name}`}
          className="object-contain p-4 transition-all duration-500 transform group-hover:scale-110"
        />
      </div>

      <div className="p-3 sm:p-4 lg:p-5 relative">
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

        <div className="mt-4">
          {/* Price area */}
          <div className="flex flex-col">
            {price !== undefined ? (
              <>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-white font-bold text-sm sm:text-base lg:text-lg">{price.toFixed(2)}€</span>
                  {oldPrice !== undefined && (
                    <span className="text-xs sm:text-sm text-gray-500 line-through">{oldPrice.toFixed(2)}€</span>
                  )}
                </div>
                <span className="text-xs text-gray-500">Με ΦΠΑ</span>
              </>
            ) : (
              <span className="text-amber-400 font-semibold text-sm sm:text-base">Κατόπιν επικοινωνίας</span>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
