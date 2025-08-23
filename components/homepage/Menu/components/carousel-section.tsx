"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

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
    <div className="relative w-full max-w-6xl mx-auto mt-16 overflow-hidden">
      {/* Vertical Text dengan animasi */}
      <AnimatePresence>
        {currentIndex === 0 && (
          <motion.div
            key="vertical-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute left-[-160px] top-[50%] -translate-y-1/2 -rotate-90 origin-center z-10 hidden md:block"
          >
            <h1 className="text-3xl font-bold text-black whitespace-nowrap">
              {destination.name}, {destination.location}
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Carousel Container */}
      <div className="md:ml-14">
        <div
          ref={carouselRef}
          className="relative flex transition-transform duration-1000 ease-in-out gap-10"
          style={{ transform: `translateX(-${currentIndex * (100 + 6)}%)` }}
        >
          {destinations.map((dest, index) => (
            <div
              key={dest.id}
              className="min-w-full flex-shrink-0 relative px-3"
            >
              {/* Image Container */}
              <div className="relative h-[550px] w-[1085px] mx-auto rounded-3xl overflow-hidden">
                <Image
                  src={dest.image || "/placeholder.png"}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(${(currentIndex - index) * 30}%)` }}
                  quality={100}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                {/* Card kiri hanya di slide pertama */}
                {index === 0 && (
                  <div className="absolute top-50 left-15 text-white z-20">
                    <div className="text-xl font-light opacity-80">{dest.number}</div>
                    <div className="w-px h-16 bg-white/60 mt-4"></div>
                    <div className="text-xl mt-4 font-normal">Bentang Alam</div>
                    <div className="mt-2 w-72 text-sm text-white/80">{dest.description2}</div>
                  </div>
                )}
              </div>

              {/* Content Card Dinamis */}
              <div
                className={`absolute rounded-lg bg-black/80 backdrop-blur-sm border border-white/20 text-white p-6 w-[300px] z-20
                ${
                  dest.cardPosition === "left"
                    ? "top-1/2 left-25 -translate-y-1/2"
                    : "bottom-[-50px] right-[90px]"
                }`}
              >
                <h3 className="text-3xl font-bold mb-2">{dest.name}</h3>
                <p className="text-sm mb-4 leading-relaxed">{dest.description}</p>
                <Button
                  variant="default"
                  size="sm"
                  className="p-6 cursor-pointer rounded-2xl text-md border border-white bg-transparent text-white hover:bg-white/10 transition"
                >
                  Baca Selengkapnya
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        {/* Navigation */}
<div className="flex items-center justify-center mt-8 gap-4">
  {/* Prev button */}
  <button onClick={prevSlide} className="text-gray-400 hover:text-black transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  {/* Line-style indicator */}
  <div className="flex gap-2">
    {destinations.map((_, index) => (
      <button
        key={index}
        onClick={() => goToSlide(index)}
        className={`h-[3px] rounded-full transition-all duration-300 ${
          index === currentIndex
            ? "w-10 bg-black"   // aktif → garis lebih panjang & hitam
            : "w-4 bg-gray-500" // tidak aktif → garis lebih pendek & abu
        }`}
      />
    ))}
  </div>

  {/* Next button */}
  <button onClick={nextSlide} className="text-gray-400 hover:text-black transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>

      </div>
    </div>
  )
}

export default CarouselSection
