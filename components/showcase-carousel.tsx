"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Image data with zoom and pan configurations
const images = [
  {
    src: "/images/lyre1.jpeg",
    alt: "Παραδοσιακή ποντιακή λύρα",
    caption: "Χειροποίητο σώμα από επιλεγμένο ξύλο",
    zoomEffect: "in",
    panDirection: "right",
  },
  {
    src: "/images/lyre2.jpeg",
    alt: "Λεπτομέρεια ποντιακής λύρας",
    caption: "Μοναδικό φινίρισμα με φυσικά έλαια",
    zoomEffect: "out",
    panDirection: "left",
  },
  {
    src: "/images/lyre3.jpeg",
    alt: "Ποντιακή λύρα με χορδές",
    caption: "Επαγγελματική λύρα έτοιμη για παράσταση",
    zoomEffect: "in",
    panDirection: "up",
  },
  {
    src: "/images/lyre4.jpeg",
    alt: "Σκαλιστή κεφαλή λύρας",
    caption: "Χειροποίητη σκαλιστή διακόσμηση",
    zoomEffect: "out",
    panDirection: "down",
  },
  {
    src: "/images/lyre5.jpeg",
    alt: "Μηχανισμός κουρδίσματος",
    caption: "Μηχανισμός ακριβείας για τέλειο κούρδισμα",
    zoomEffect: "in",
    panDirection: "diagonal",
  },
  {
    src: "/images/lyre6.jpeg",
    alt: "Πλήρης όψη ποντιακής λύρας",
    caption: "Συνδυασμός παράδοσης και σύγχρονης τεχνικής",
    zoomEffect: "out",
    panDirection: "center",
  },
]

export default function ShowcaseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  // Handle navigation with transition state
  function navigateWithTransition(newIndex) {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex(newIndex)

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 1000) // Match with CSS transition duration
  }

  // Navigation functions
  function goToPrevious() {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
    navigateWithTransition(newIndex)
  }

  function goToNext() {
    const newIndex = (currentIndex + 1) % images.length
    navigateWithTransition(newIndex)
  }

  function goToSpecific(index) {
    if (index === currentIndex) return
    navigateWithTransition(index)
  }

  // Handle touch events for mobile
  function handleTouchStart(e) {
    setIsPaused(true)
    const touchStartX = e.touches[0].clientX
    const touchStartY = e.touches[0].clientY

    function handleTouchEnd(e) {
      const touchEndX = e.changedTouches[0].clientX
      const touchEndY = e.changedTouches[0].clientY

      // Calculate horizontal and vertical distance
      const diffX = touchStartX - touchEndX
      const diffY = touchStartY - touchEndY

      // If horizontal swipe is greater than vertical and greater than 50px
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          // Swipe left, go next
          goToNext()
        } else {
          // Swipe right, go previous
          goToPrevious()
        }
      }

      document.removeEventListener("touchend", handleTouchEnd)
      setTimeout(() => {
        setIsPaused(false)
      }, 1000)
    }

    document.addEventListener("touchend", handleTouchEnd)
  }

  // Handle mouse events for pausing
  function handleMouseEnter() {
    setIsPaused(true)
  }

  function handleMouseLeave() {
    setIsPaused(false)
  }

  // Auto-advance slides
  useEffect(() => {
    if (isPaused || isTransitioning) return

    timerRef.current = setTimeout(() => {
      goToNext()
    }, 6000)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [currentIndex, isPaused, isTransitioning])

  // Get zoom and pan class names based on image configuration
  function getZoomPanClasses(image) {
    let zoomClass = ""
    let panClass = ""

    // Zoom classes
    if (image.zoomEffect === "in") {
      zoomClass = "zoom-in-effect"
    } else if (image.zoomEffect === "out") {
      zoomClass = "zoom-out-effect"
    }

    // Pan classes
    switch (image.panDirection) {
      case "right":
        panClass = "pan-right-effect"
        break
      case "left":
        panClass = "pan-left-effect"
        break
      case "up":
        panClass = "pan-up-effect"
        break
      case "down":
        panClass = "pan-down-effect"
        break
      case "diagonal":
        panClass = "pan-diagonal-effect"
        break
      case "center":
        panClass = "pan-center-effect"
        break
      default:
        panClass = ""
    }

    return `${zoomClass} ${panClass}`
  }

  return (
    <div
      className="relative w-full overflow-hidden bg-black rounded-lg shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      {/* Main carousel container - improved aspect ratio for mobile */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/9]">
        {/* Subtle golden frame */}
        <div className="absolute inset-0 border-[2px] sm:border-[3px] border-amber-600/40 rounded-lg z-30 pointer-events-none"></div>

        {/* Images */}
        <div className="relative w-full h-full">
          {images.map((image, index) => {
            const isActive = index === currentIndex
            const zoomPanClasses = getZoomPanClasses(image)

            return (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out
                  ${isActive ? "opacity-100 z-20" : "opacity-0 z-10"}`}
                aria-hidden={!isActive}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <div className={`w-full h-full ${isActive ? zoomPanClasses : ""}`}>
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
                      className="object-contain"
                      priority={index === 0 || index === currentIndex}
                    />
                  </div>
                </div>

                {/* Caption overlay - positioned at bottom with gradient background */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 md:p-5
                    transform transition-transform duration-700 ease-out
                    ${isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                >
                  <p className="text-sm sm:text-base md:text-lg font-medium text-amber-400">{image.caption}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Navigation arrows - smaller on mobile */}
        <button
          className={`absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-40 p-1 sm:p-2 rounded-full
            bg-black/40 hover:bg-black/60 text-white border border-amber-600/30
            transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400
            ${isTransitioning ? "opacity-50 cursor-not-allowed" : "opacity-90"}`}
          onClick={goToPrevious}
          disabled={isTransitioning}
          aria-label="Προηγούμενη εικόνα"
          type="button"
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" />
        </button>

        <button
          className={`absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-40 p-1 sm:p-2 rounded-full
            bg-black/40 hover:bg-black/60 text-white border border-amber-600/30
            transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400
            ${isTransitioning ? "opacity-50 cursor-not-allowed" : "opacity-90"}`}
          onClick={goToNext}
          disabled={isTransitioning}
          aria-label="Επόμενη εικόνα"
          type="button"
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8" />
        </button>
      </div>

      {/* Dot indicators - smaller on mobile */}
      <div className="flex justify-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-black border-t border-amber-900/30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSpecific(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300
              ${index === currentIndex ? "bg-amber-400 scale-110" : "bg-gray-600 hover:bg-gray-500"}`}
            aria-label={`Μετάβαση στην εικόνα ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
            type="button"
          />
        ))}
      </div>

      {/* Progress bar */}
      {!isPaused && !isTransitioning && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800 z-30">
          <div
            className="h-full bg-amber-500 transition-all ease-linear"
            style={{
              width: "100%",
              transitionDuration: "6000ms",
            }}
          />
        </div>
      )}
    </div>
  )
}
