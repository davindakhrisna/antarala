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

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % destinations.length, "right")
  }

  const prevSlide = () => {
    goToSlide(
      currentIndex === 0 ? destinations.length - 1 : currentIndex - 1,
      "left"
    )
  }

  // Handle scroll wheel
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }

  const destination = destinations[currentIndex]

  return (
    <div
      className="relative w-full max-w-6xl mx-auto mt-16 overflow-hidden"
      onWheel={handleWheel}
    >
      {/* Vertical Text (hanya di slide pertama) */}
      <AnimatePresence mode="wait">
        {currentIndex === 0 && (
          <motion.div
            key={destination.id}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
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
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ x: direction === "right" ? 200 : -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === "right" ? -200 : 200, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative flex gap-10"
          >
            <div className="min-w-full flex-shrink-0 relative px-3">
              {/* Image Container */}
              <div className="relative h-[550px] w-[1080px] mx-auto rounded-3xl overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.png"}
                  alt={destination.name}
                  fill
                  className="object-cover object-center"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                {/* Card kiri hanya di slide pertama */}
                {currentIndex === 0 && (
                  <div className="absolute top-50 left-10 text-white z-20">
                    <div className="text-xl font-light opacity-80">
                      {destination.number}
                    </div>
                    <div className="w-px h-16 bg-white/60 mt-4"></div>
                    <div className="text-3xl mt-4 font-normal">
                      Bentang Alam
                    </div>
                    <div className="mt-2 w-90 text-sm text-white/80">
                      {destination.description2}
                    </div>
                  </div>
                )}
              </div>

              {/* Content Card Dinamis dengan animasi */}
              <motion.div
                key={destination.id + "-card"}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`absolute rounded-lg bg-black/80 backdrop-blur-sm border border-white/20 text-white p-6 w-[300px] z-20
                  ${destination.cardPosition === "left"
                    ? "top-1/2 left-14 -translate-y-1/2"
                    : "bottom-[-30px] right-[60px]"
                  }`}
              >
                <h3 className="text-3xl font-bold mb-2">
                  {destination.name}
                </h3>
                <p className="text-sm mb-4 leading-relaxed">
                  {destination.description}
                </p>
                <Button
                  variant="default"
                  size="sm"
                  className="p-6 cursor-pointer rounded-2xl text-md border border-white bg-transparent text-white hover:bg-white/10 transition"
                >
                  Baca Selengkapnya
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation → hanya indikator garis */}
        <div className="flex items-center justify-center mt-8 gap-2">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                goToSlide(index, index > currentIndex ? "right" : "left")
              }
              className={`h-[3px] rounded-full transition-all duration-300 ${index === currentIndex
                  ? "w-10 bg-black"
                  : "w-4 bg-gray-500"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarouselSection
