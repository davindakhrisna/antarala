"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"

interface DestinationData {
  id: number
  name: string
  location: string
  description: string
  description2: string
  image: string
  number: string
  cardPosition: "left" | "right"
}

const destinations: DestinationData[] = [
  {
    id: 1,
    name: "Gn. Slamet",
    location: "Jawa Tengah",
    description:
      "Gunung Slamet adalah gunung berapi aktif bertipe stratovolcano yang terletak di Jawa Tengah, Indonesia.",
    image: "/destinations/slamet.png",
    number: "02",
    description2:
      "Bentang alam Indonesia bukan sekadar lanskap, melainkan ruang hidup yang membentuk budaya, mitos, dan cara pandang masyarakatnya. Dari gunung yang menjulang hingga laut yang menyimpan cerita leluhur, setiap lekuk tanah menyimpan jejak spiritual dan sejarah yang tak tertulis.",
    cardPosition: "right",
  },
  {
    id: 2,
    name: "Pantai Bali",
    location: "Bali",
    description:
      "Pantai Bali membentang sebagai surga tropis yang memadukan pasir putih, ombak biru, dan jejak spiritual dalam setiap hembusan anginnya.",
    image: "/destinations/bali.png",
    number: "04",
    description2: "",
    cardPosition: "left",
  },
  {
    id: 3,
    name: "Matang Kaladan",
    location: "Kalimantan Selatan",
    description:
      "Bukit Matang Kaladan memandang dunia dari ketinggian yang tenang, di mana danau, hutan, dan langit saling menyapa dalam diam.",
    image: "/destinations/matang.png",
    number: "05",
    description2: "",
    cardPosition: "right",
  },
  {
    id: 4,
    name: "Raja Ampat",
    location: "Papua Barat",
    description:
      "Raja Ampat adalah surga laut Indonesia dengan pulau eksotis dan tempat di mana alam berpadu dalam keheningan yang agung.",
    image: "/destinations/rajaampat.png",
    number: "03",
    description2: "",
    cardPosition: "left",
  },
  {
    id: 5,
    name: "Danau Toba",
    location: "Sumatra Utara",
    description:
      "Danau Toba adalah mahakarya alam salah satu danau vulkanik terbesar di dunia yang menyimpan jejak letusan purba.",
    image: "/destinations/toba.png",
    description2: "",
    number: "01",
    cardPosition: "right",
  },
]

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const carouselRef = useRef<HTMLDivElement>(null)

  const goToSlide = (index: number, dir: "left" | "right") => {
    setDirection(dir)
    setCurrentIndex(index)
  }

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % destinations.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1))
  const goToSlide = (index: number) => setCurrentIndex(index)

  const destination = destinations[currentIndex]

  return (
    <section className="min-h-[70vh] bg-[#FAF4E1] p-2 sm:p-3 lg:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-4 lg:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2 tracking-wide">
            JELAJAHI INDONESIA
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-3 lg:mb-4 max-w-2xl mx-auto">
            Ada apa aja sih di negara tercinta kita? Yuk jelajahi Indonesia bersama Antarala
          </p>
          <div className="flex items-center justify-start gap-1 text-sm sm:text-base lg:text-lg font-bold text-black">
            <span>Bentang makna Indonesia</span>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 mt-1" />
          </div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
          {/* Vertical Text hanya di Gn. Slamet */}
          <AnimatePresence>
            {currentIndex === 0 && (
              <motion.div
                key="vertical-text"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute left-[-100px] top-[50%] -translate-y-1/2 -rotate-90 origin-center z-10 hidden lg:block"
              >
                <h1 className="text-lg xl:text-xl font-bold text-black whitespace-nowrap">
                  {destination.name}, {destination.location}
                </h1>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="relative flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {destinations.map((dest, index) => (
              <div key={dest.id} className="min-w-full flex-shrink-0 flex justify-center relative">
                {/* Image */}
                <div className="relative h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] w-full max-w-[820px] mx-auto rounded-xl overflow-hidden">
                  <Image
                    src={dest.image || "/placeholder.png"}
                    alt={dest.name}
                    fill
                    className="object-cover"
                    quality={100}
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent" />

                  {/* Card kiri khusus slide pertama */}
                  {index === 0 && (
                    <div className="absolute top-1/2 left-3 sm:left-4 lg:left-6 text-white z-20 -translate-y-1/2">
                      <div className="text-sm lg:text-base font-light opacity-80">{dest.number}</div>
                      <div className="w-px h-6 lg:h-8 bg-white/60 mt-1"></div>
                      <div className="text-xs lg:text-sm mt-1 font-normal">Bentang Alam</div>
                      <div className="mt-1 w-32 sm:w-40 lg:w-52 text-xs lg:text-sm text-white/80 leading-relaxed">
                        {dest.description2}
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`absolute rounded-lg bg-black/80 backdrop-blur-sm border border-white/20 text-white 
                  p-3 md:p-4 w-[200px] sm:w-[240px] md:w-[300px] z-20
                  ${
                    dest.cardPosition === "left"
                      ? "top-1/2 left-3 -translate-y-1/2"
                      : "bottom-4 right-3 lg:bottom-6 lg:right-6"
                  }`}
                >
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2">{dest.name}</h3>
                  <p className="text-xs sm:text-sm md:text-base mb-3 leading-relaxed">{dest.description}</p>
                  <Button
                    variant="default"
                    size="sm"
                    className="px-3 py-1 rounded text-xs sm:text-sm border border-white bg-transparent text-white hover:bg-white/10 transition"
                  >
                    Baca Selengkapnya
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-3 lg:mt-5 gap-2">
            <button onClick={prevSlide} className="text-gray-400 hover:text-black transition p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-1">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-6 lg:w-8 bg-black" : "w-3 lg:w-4 bg-gray-500"
                  }`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="text-gray-400 hover:text-black transition p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarouselSection
