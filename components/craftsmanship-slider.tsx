"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

const images = [
  {
    src: "/images/craftsman1.jpg",
    alt: "Διαδικασία κατασκευής λύρας",
    caption: "Λεπτομερής χειροτεχνία με αγάπη για την παράδοση",
  },
  {
    src: "/images/craftsman2.jpg",
    alt: "Μέτρηση με ακρίβεια",
    caption: "Κάθε χιλιοστό μετράει για τον τέλειο ήχο",
  },
  {
    src: "/images/craftsman3.jpg",
    alt: "Εργασία με μηχανήματα ακριβείας",
    caption: "Συνδυασμός παραδοσιακών και σύγχρονων τεχνικών",
  },
  {
    src: "/images/craftsman4.jpg",
    alt: "Επεξεργασία ξύλου",
    caption: "Επιλογή των καλύτερων υλικών για κάθε λύρα",
  },
  {
    src: "/images/craftsman5.jpg",
    alt: "Ο μάστορας με μια λύρα",
    caption: "Ο Θεόδωρος Σιριστατίδης και το έργο του",
  },
]

export default function CraftsmanshipSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Ken Burns effects
  const getKenBurnsEffect = (index: number) => {
    const effects = [
      "animate-ken-burns-zoom-pan-right",
      "animate-ken-burns-zoom-pan-left",
      "animate-ken-burns-zoom-in",
      "animate-ken-burns-zoom-out",
      "animate-ken-burns-pan-diagonal",
    ]
    return effects[index % effects.length]
  }

  // Auto-play functionality
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    if (isPlaying && !isTransitioning) {
      intervalRef.current = setInterval(() => {
        goToNext()
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, isTransitioning, currentIndex])

  const handleTransition = (callback: () => void) => {
    setIsTransitioning(true)
    callback()
    setTimeout(() => {
      setIsTransitioning(false)
    }, 800)
  }

  const goToNext = () => {
    if (isTransitioning) return
    handleTransition(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    })
  }

  const goToPrevious = () => {
    if (isTransitioning) return
    handleTransition(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    })
  }

  const goToSpecific = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    handleTransition(() => {
      setCurrentIndex(index)
    })
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main slider container */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border-2 border-amber-600/30 shadow-2xl">
        {/* Images */}
        {images.map((image, index) => {
          const isActive = index === currentIndex
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-800 ease-in-out ${
                isActive ? "opacity-100 z-20" : "opacity-0 z-10"
              }`}
            >
              <div className={`w-full h-full relative overflow-hidden ${isActive ? getKenBurnsEffect(index) : ""}`}>
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
                  className="object-contain p-4 sm:p-6 lg:p-8"
                  priority={index === 0}
                />
              </div>

              {/* Caption overlay */}
              <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 transform transition-all duration-800 ${
                  isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <p className="text-sm sm:text-base lg:text-lg font-medium text-amber-300">{image.caption}</p>
              </div>
            </div>
          )
        })}

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          disabled={isTransitioning}
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 text-white border border-amber-600/30 transition-all duration-300 disabled:opacity-50"
          aria-label="Προηγούμενη εικόνα"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <button
          onClick={goToNext}
          disabled={isTransitioning}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 text-white border border-amber-600/30 transition-all duration-300 disabled:opacity-50"
          aria-label="Επόμενη εικόνα"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Play/Pause button */}
        <button
          onClick={togglePlayPause}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 z-30 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white border border-amber-600/30 transition-all duration-300"
          aria-label={isPlaying ? "Παύση" : "Αναπαραγωγή"}
        >
          {isPlaying ? <Pause className="h-4 w-4 sm:h-5 sm:w-5" /> : <Play className="h-4 w-4 sm:h-5 sm:w-5" />}
        </button>

        {/* Image counter */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-30 px-3 py-1 rounded-full bg-black/50 text-white text-sm border border-amber-600/30">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center space-x-2 sm:space-x-3 mt-4 sm:mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSpecific(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-amber-400 scale-125" : "bg-gray-500 hover:bg-gray-400"
            }`}
            aria-label={`Μετάβαση στην εικόνα ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      {isPlaying && !isTransitioning && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 z-30">
          <div
            className="h-full bg-amber-500 transition-all ease-linear"
            style={{
              width: "100%",
              transitionDuration: "5000ms",
            }}
          />
        </div>
      )}
    </div>
  )
}
