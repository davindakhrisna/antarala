"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

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
      "Gunung Slamet adalah gunung berapi aktif bertipe stratovolcano yang terletak di Jawa Tengah, Indonesia. Dengan ketinggian sekitar 3.432 meter di atas permukaan laut, ia merupakan gunung tertinggi di Jawa Tengah.",
    image: "/destinations/slamet.png",
    number: "02",
    description2:
      "Bentang alam Indonesia bukan sekadar lanskap, melainkan ruang hidup yang membentuk budaya, mitos, dan cara pandang masyarakatnya. Dari gunung yang menjulang hingga laut yang menyimpan cerita leluhur, setiap lekuk tanah menyimpan jejak spiritual dan sejarah yang tak tertulis.",
    cardPosition: "right",
  },
  {
    id: 2,
    name: "Danau Toba",
    location: "Sumatra Utara",
    description:
      "Danau Toba adalah mahakarya alam salah satu danau vulkanik terbesar di dunia yang menyimpan jejak letusan purba, budaya Batak, dan lanskap yang memukau.",
    image: "/destinations/toba.png",
    description2: "",
    number: "01",
    cardPosition: "right",
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
    name: "Matang Kaladan",
    location: "Kalimantan Selatan",
    description:
      "Bukit Matang Kaladan memandang dunia dari ketinggian yang tenang, di mana danau, hutan, dan langit saling menyapa dalam diam.",
    image: "/destinations/matang.png",
    number: "05",
    description2: "",
    cardPosition: "right",
  },
]

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index)
    if (scrollContainerRef.current) {
      const scrollAmount = index * scrollContainerRef.current.clientWidth
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % destinations.length
    scrollToIndex(nextIndex)
  }

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? destinations.length - 1 : currentIndex - 1
    scrollToIndex(prevIndex)
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-16 overflow-hidden">
      {/* Vertical Text (Hanya muncul di slide pertama) */}
      {currentIndex === 0 && (
        <div className="absolute left-[-110px] top-[50%] -translate-y-1/2 -rotate-90 origin-center z-10 hidden md:block">
          <h1 className="text-3xl font-bold text-black whitespace-nowrap">
            {destinations[currentIndex].name}, {destinations[currentIndex].location}
          </h1>
        </div>
      )}

      {/* Main Carousel Container */}
      <div className="md:ml-24">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-hidden scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="min-w-full flex-shrink-0 relative"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative h-[550px] w-full mx-auto rounded-3xl overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.png"}
                  alt={destination.name}
                  fill
                  className="object-cover"
                  quality={100}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                {/* Content Card Kiri (Hanya muncul di slide pertama) */}
                {currentIndex === 0 && (
                  <div className="absolute top-10 left-10 text-white">
                    <div className="text-xl font-light opacity-80">
                      {destinations[currentIndex].number}
                    </div>
                    <div className="w-px h-16 bg-white/60 mt-4"></div>
                    <div className="text-xl mt-4 font-normal">Bentang Alam</div>
                    <div className="mt-2 w-72 text-sm text-white/80">
                      {destination.description2}
                    </div>
                  </div>
                )}

                {/* Content Card Kanan (Posisi dinamis) */}
                <div
                  className={`absolute bottom-8 max-w-sm rounded-lg bg-black/80 backdrop-blur-sm border border-white/20 text-black p-6 w-[450px] 
                  ${
                    destination.cardPosition === "left"
                      ? "left-8"
                      : "right-8"
                  }`}
                >
                  <h3 className="text-3xl text-white font-bold mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-white mb-4 leading-relaxed">
                    {destination.description}
                  </p>
                  <Button
                    variant="default"
                    size="sm"
                    className="p-6 cursor-pointer rounded-2xl text-md border border-white bg-transparent text-white hover:bg-white/10 transition"
                  >
                    Baca Selengkapnya
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Controls */}
        <div className="flex items-center justify-center mt-8 gap-4">
          {/* Dots Indicator */}
          <div className="flex gap-2">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-12 h-1 rounded-full transition-colors ${
                  index === currentIndex ? "bg-black" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselSection