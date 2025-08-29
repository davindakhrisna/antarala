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
      "Gunung Slamet adalah gunung berapi aktif bertipe stratovolcano yang terletak di Jawa Tengah, Indonesia. Dengan ketinggian sekitar 3.432 meter di atas permukaan laut.",
    image: "/destinations/slamet.png",
    number: "02",
    description2:
      "Bentang alam Indonesia bukan sekadar lanskap, melainkan ruang hidup yang membentuk budaya, mitos, dan cara pandang masyarakatnya.",
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
      "Raja Ampat adalah surga laut Indonesia dengan pulau eksotis dan tempat di mana alam, budaya, dan spiritualitas berpadu dalam keheningan yang agung.",
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
      "Danau Toba adalah mahakarya alam salah satu danau vulkanik terbesar di dunia yang menyimpan jejak letusan purba, budaya Batak, dan lanskap yang memukau.",
    image: "/destinations/toba.png",
    description2: "",
    number: "01",
    cardPosition: "right",
  },
]

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? destinations.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const destination = destinations[currentIndex]

  return (
    <section className="min-h-[100vh] bg-[#FAF4E1] p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 tracking-wide">
            JELAJAHI INDONESIA
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-2 max-w-2xl mx-auto">
            Ada apa aja sih di negara tercinta kita? Yuk jelajahi Indonesia bersama Antarala
          </p>
        </div>

        {/* Teks di atas gambar */}
        <div className="flex items-center gap-2 text-black font-semibold text-base sm:text-lg lg:text-xl mb-3">
          <span>Bentang makna Indonesia</span>
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </div>

        {/* Carousel */}
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
          {/* Vertical Text hanya di Gn. Slamet */}
          <AnimatePresence>
            {destination.name === "Gn. Slamet" && (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute left-[-60px] top-1/2 -translate-y-1/2 -rotate-90 origin-center z-20 hidden lg:block"
              >
                <h1 className="text-lg xl:text-xl font-bold text-black whitespace-nowrap">
                  {destination.name}, {destination.location}
                </h1>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Images & Cards */}
          <div
            ref={carouselRef}
            className="relative flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {destinations.map((dest) => (
              <div key={dest.id} className="min-w-full relative">
                <div className="relative h-[260px] sm:h-[340px] md:h-[400px] lg:h-[440px] rounded-xl overflow-hidden">
                  <Image
                    src={dest.image || "/placeholder.png"}
                    alt={dest.name}
                    fill
                    className="object-cover"
                    quality={100}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

                  {/* Info Card */}
                  <div
                    className={`absolute bg-black/80 backdrop-blur-md border border-white/20 text-white rounded-xl p-4 w-[200px] sm:w-[240px] md:w-[280px] shadow-lg
                    ${dest.cardPosition === "left" ? "bottom-4 left-4" : "bottom-4 right-4"}`}
                  >
                    <h3 className="text-lg md:text-xl font-bold mb-2">{dest.name}</h3>
                    <p className="text-sm md:text-base leading-relaxed mb-3">{dest.description}</p>
                    <Button
                      variant="default"
                      size="sm"
                      className="rounded px-3 py-1 text-sm border border-white bg-transparent text-white hover:bg-white/10 transition"
                    >
                      Baca Selengkapnya
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-3 gap-2">
            {/* Prev button */}
            <button onClick={prevSlide} className="text-gray-400 hover:text-black transition p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Line indicator */}
            <div className="flex gap-2">
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

            {/* Next button */}
            <button onClick={nextSlide} className="text-gray-400 hover:text-black transition p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
