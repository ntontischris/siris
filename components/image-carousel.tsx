"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Οι φωτογραφίες που θα χρησιμοποιηθούν στο καρουζέλ
const images = [
  {
    src: "/images/craftsman1.jpg",
    alt: "Ο τεχνίτης εργάζεται σε μια λύρα",
    caption: "Λεπτομερής χειροτεχνία με αγάπη για την παράδοση",
    zoomType: "in", // zoom in
  },
  {
    src: "/images/craftsman2.jpg",
    alt: "Μέτρηση με ακρίβεια",
    caption: "Κάθε χιλιοστό μετράει για τον τέλειο ήχο",
    zoomType: "out", // zoom out
  },
  {
    src: "/images/craftsman3.jpg",
    alt: "Εργασία με μηχανήματα ακριβείας",
    caption: "Συνδυασμός παραδοσιακών και σύγχρονων τεχνικών",
    zoomType: "in", // zoom in
  },
  {
    src: "/images/craftsman4.jpg",
    alt: "Επεξεργασία ξύλου",
    caption: "Επιλογή των καλύτερων υλικών για κάθε λύρα",
    zoomType: "out", // zoom out
  },
  {
    src: "/images/craftsman5.jpg",
    alt: "Ο μάστορας με μια λύρα",
    caption: "Ο Θεόδωρος Σιριστατίδης και το έργο του",
    zoomType: "in", // zoom in
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef(null)

  // Λειτουργία αυτόματης εναλλαγής
  useEffect(() => {
    // Καθαρισμός προηγούμενου interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    // Δημιουργία νέου interval αν δεν είναι σε hover και δεν γίνεται μετάβαση
    if (!isHovering && !isTransitioning) {
      intervalRef.current = setInterval(() => {
        handleTransition(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        })
      }, 4000) // Αλλαγή κάθε 4 δευτερόλεπτα
    }

    // Καθαρισμός κατά την αποσύνδεση
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovering, isTransitioning])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious()
      } else if (event.key === "ArrowRight") {
        goToNext()
      } else if (event.key === " " || event.key === "Enter") {
        setIsHovering(!isHovering)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isHovering])

  // Χειρισμός μετάβασης
  const handleTransition = (callback) => {
    setIsTransitioning(true)
    callback()
    // Επαναφορά κατάστασης μετάβασης μετά την ολοκλήρωση του animation
    setTimeout(() => {
      setIsTransitioning(false)
    }, 600)
  }

  // Πλοήγηση στην προηγούμενη εικόνα
  const goToPrevious = () => {
    if (isTransitioning) return
    handleTransition(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    })
  }

  // Πλοήγηση στην επόμενη εικόνα
  const goToNext = () => {
    if (isTransitioning) return
    handleTransition(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    })
  }

  // Πλοήγηση σε συγκεκριμένη εικόνα
  const goToSpecific = (index) => {
    if (isTransitioning || index === currentIndex) return
    handleTransition(() => {
      setCurrentIndex(index)
    })
  }

  // Χειρισμός touch events για κινητές συσκευές
  const handleTouchStart = (e) => {
    setIsHovering(true)
    const touchStartX = e.touches[0].clientX
    const touchStartY = e.touches[0].clientY

    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX
      const touchEndY = e.changedTouches[0].clientY

      // Υπολογισμός οριζόντιας και κάθετης απόστασης
      const diffX = touchStartX - touchEndX
      const diffY = touchStartY - touchEndY

      // Αν η οριζόντια κίνηση είναι μεγαλύτερη από την κάθετη και μεγαλύτερη από 50px
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          // Swipe αριστερά, επόμενη εικόνα
          goToNext()
        } else {
          // Swipe δεξιά, προηγούμενη εικόνα
          goToPrevious()
        }
      }

      document.removeEventListener("touchend", handleTouchEnd)
      setTimeout(() => {
        setIsHovering(false)
      }, 1000)
    }

    document.addEventListener("touchend", handleTouchEnd)
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg shadow-xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={handleTouchStart}
      role="region"
      aria-label="Καρουζέλ εικόνων τεχνίτη"
      aria-live="polite"
    >
      {/* Εφέ φόντου */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-black/40 z-10"></div>

      {/* Εικόνες - βελτιωμένη αναλογία διαστάσεων για κινητά */}
      <div className="relative w-full aspect-[3/4] xs:aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/10] xl:h-[500px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-600 ease-in-out
              ${index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"}`}
          >
            <div
              className={`w-full h-full relative rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex && image.zoomType === "in"
                  ? "animate-ken-burns-in"
                  : index === currentIndex && image.zoomType === "out"
                    ? "animate-ken-burns-out"
                    : ""
              } ${index === currentIndex ? "shadow-amber-glow hover:shadow-amber-glow-intense" : ""}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 1200px"
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* Λεζάντα - μικρότερη σε κινητά */}
            <div
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 lg:p-6 text-white z-30
              transform transition-transform duration-1000 ease-out
              ${index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-8 sm:translate-y-10 opacity-0"}`}
            >
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium text-amber-300">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Κουμπιά πλοήγησης - μικρότερα σε κινητά */}
      <button
        type="button"
        className="absolute left-2 sm:left-3 lg:left-4 top-1/2 -translate-y-1/2 bg-black/50 border-amber-600/30 hover:bg-black/70 text-amber-400 z-30 p-1.5 sm:p-2 lg:p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
        onClick={goToPrevious}
        aria-label="Προηγούμενη εικόνα στο καρουζέλ"
        tabIndex={0}
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" aria-hidden="true" />
      </button>

      <button
        type="button"
        className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 border-amber-600/30 hover:bg-black/70 text-amber-400 z-30 p-1 sm:p-2 rounded-full"
        onClick={goToNext}
        aria-label="Επόμενη εικόνα"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>

      {/* Ένδειξη τελειών - μικρότερη σε κινητά */}
      <div className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSpecific(index)}
            className={`w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 
              ${index === currentIndex ? "bg-amber-400 scale-125" : "bg-gray-400/50 hover:bg-gray-300/70"}`}
            aria-label={`Μετάβαση στην εικόνα ${index + 1}`}
          />
        ))}
      </div>

      {/* Μπάρα προόδου */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gray-800 z-30">
        <div
          className="h-full bg-amber-500 transition-all ease-linear"
          style={{
            width: isHovering || isTransitioning ? "0%" : "100%",
            transitionDuration: isHovering || isTransitioning ? "0ms" : "4000ms",
          }}
        />
      </div>
    </div>
  )
}
