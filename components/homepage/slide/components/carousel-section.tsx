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
  description2?: string
  image: string
  number: string
  cardPosition: "left" | "right"
  verticalText?: boolean
}

const destinations: DestinationData[] = [
  {
    id: 1,
    name: "Gn. Slamet",
    location: "Jawa Tengah",
    description:
      "Gunung Slamet adalah gunung berapi aktif bertipe stratovolcano yang terletak di Jawa Tengah, Indonesia. Dengan ketinggian sekitar 3.432 meter di atas permukaan laut.",
    image: "/destinations/slamet.svg",
    number: "02",
    description2:
      "Bentang alam Indonesia bukan sekadar lanskap, melainkan ruang hidup yang membentuk budaya, mitos, dan cara pandang masyarakatnya.",
    cardPosition: "right",
    verticalText: true,
  },
  {
    id: 2,
    name: "Pantai Bali",
    location: "Bali",
    description:
      "Pantai Bali membentang sebagai surga tropis yang memadukan pasir putih, ombak biru, dan jejak spiritual dalam setiap hembusan anginnya.",
    image: "/destinations/bali.svg",
    number: "04",
    cardPosition: "left",
  },
  {
    id: 3,
    name: "Matang Kaladan",
    location: "Kalimantan Selatan",
    description:
      "Bukit Matang Kaladan memandang dunia dari ketinggian yang tenang, di mana danau, hutan, dan langit saling menyapa dalam diam.",
    image: "/destinations/matang.svg",
    number: "05",
    cardPosition: "right",

  },
  {
    id: 4,
    name: "Raja Ampat",
    location: "Papua Barat",
    description:
      "Raja Ampat adalah surga laut Indonesia dengan pulau eksotis dan tempat di mana alam, budaya, dan spiritualitas berpadu dalam keheningan yang agung.",
    image: "/destinations/rajaampat.svg",
    number: "03",
    cardPosition: "left",
  },
  {
    id: 5,
    name: "Danau Toba",
    location: "Sumatra Utara",
    description:
      "Danau Toba adalah mahakarya alam salah satu danau vulkanik terbesar di dunia yang menyimpan jejak letusan purba, budaya Batak, dan lanskap yang memukau.",
    image: "/destinations/toba.svg",
    number: "01",
    cardPosition: "right",
  },
]

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % destinations.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1))
  const goToSlide = (index: number) => setCurrentIndex(index)

  const destination = destinations[currentIndex]

  return (
    <section className="bg-[#FAF4E1] flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 lg:p-10">
      <div className="py-24 max-w-6xl mx-auto w-full space-y-8">
        {/* Heading */}
        <motion.header
          className="text-center space-y-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            JELAJAHI INDONESIA
          </motion.h1>
          <motion.p
            className="text-gray-700 text-md md:text-lg lg:text-lg max-w-2xl lg:max-w-4xl mx-auto px-2"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ada apa aja sih di negara tercinta kita? Yuk jelajahi Indonesia bersama Antarala
          </motion.p>
        </motion.header>

        <div>
          {/* Subtitle */}
          <motion.div
            className="flex items-center gap-1 sm:gap-2 text-black font-semibold text-sm mb-6 sm:mb-8 px-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-xl md:text-2xl lg:text-3xl">Bentang makna Indonesia</span>
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          </motion.div>

          {/* Carousel Container with extra space for cards */}
          <div className="relative">
            {/* Vertical Text - Positioned outside the carousel container */}
            <AnimatePresence>
              {destination.verticalText && (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.6 }}
                  className="absolute left-[-230px] top-65 -translate-y-1/2 -rotate-90 origin-center z-20 hidden xl:block"
                >
                  <h1 className="text-3xl font-bold text-black whitespace-nowrap">
                    {destination.name}, {destination.location}
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Carousel */}
            <motion.div
              className="relative w-full overflow-hidden rounded-xl shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div
                ref={carouselRef}
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {destinations.map((dest) => (
                  <div key={dest.id} className="min-w-full relative">
                    <div className="relative h-[200px] sm:h-[220px] md:h-[300px] lg:h-[420px] xl:h-[500px]">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      >
                        <Image
                          src={dest.image}
                          alt={dest.name}
                          fill
                          priority
                          className="object-cover"
                          quality={100}
                        />
                      </motion.div>

                      {/* Overlay number & description2 - Hidden on mobile */}
                      {dest.description2 && (
                        <motion.div
                          className="absolute left-2 sm:left-4 md:left-10 lg:left-20 bottom-2 sm:bottom-4 md:bottom-10 lg:bottom-20 
               max-w-[120px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] 
               text-white drop-shadow-lg hidden sm:block"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, amount: 0.3 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        >
                          {/* Bagian nomor + garis + dot */}
                          <div className="flex-col items-start hidden lg:flex">
                            {/* Number */}
                            <motion.p
                              className="text-sm sm:text-base md:text-xl font-bold mb-1 -ml-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: false, amount: 0.3 }}
                              transition={{ duration: 0.6, delay: 0.6 }}
                            >
                              {dest.number}
                            </motion.p>

                            {/* Garis animasi */}
                            <motion.div
                              className="w-[1px] bg-white origin-top relative"
                              initial={{ scaleY: 0 }}
                              whileInView={{ scaleY: 1 }}
                              viewport={{ once: false, amount: 0.3 }}
                              transition={{ duration: 0.8, delay: 0.8 }}
                              style={{ height: "40px" }} // tinggi garis
                            >
                              {/* Dot animasi */}
                              <motion.div
                                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: 1.2, type: "spring", stiffness: 120 }}
                              />
                            </motion.div>
                          </div>
                          {/* Judul */}
                          <motion.p
                            className="mt-4 text-base sm:text-lg md:text-xl font-bold"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 1.3 }}
                          >
                            Bentang Alam
                          </motion.p>


                          {/* Isi teks deskripsi */}
                          <motion.p
                            className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                          >
                            {dest.description2}
                          </motion.p>
                        </motion.div>
                      )}


                      {/* Info Card - Consistent styling with responsive scaling */}
                      <motion.div
                        className={`absolute bg-[#282626] text-[#F4EEDC] backdrop-blur-sm rounded-2xl p-5 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]
    ${dest.cardPosition === "left"
                            ? "left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 scale-75 sm:scale-85 md:scale-95 lg:scale-100"
                            : "right-2 sm:right-4 md:right-6 bottom-4 sm:bottom-4 lg:bottom-[-40px] scale-75 sm:scale-85 md:scale-95 lg:scale-100"}
    w-[320px]`}
                        initial={{
                          opacity: 0,
                          ...(dest.cardPosition === "left"
                            ? { y: 50 }   // dari bawah
                            : { y: -50 }) // dari atas
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                          type: "spring",   // pakai spring animation
                          stiffness: 60,    // kekakuan (semakin tinggi, semakin cepat)
                          damping: 18,      // redam pantulan
                          bounce: 0.15,      // seberapa mantul
                          delay: 0.4        // jeda sebelum animasi jalan
                        }}
                      >
                        <motion.h3
                          className="text-xl md:text-2xl font-bold mb-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, amount: 0.3 }}
                          transition={{ duration: 0.6, delay: 1.1 }}
                        >
                          {dest.name}
                        </motion.h3>
                        <motion.p
                          className="text-sm md:text-base leading-relaxed mb-4 line-clamp-3 sm:line-clamp-4 md:line-clamp-none"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, amount: 0.3 }}
                          transition={{ duration: 0.6, delay: 1.2 }}
                        >
                          {dest.description}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, amount: 0.3 }}
                          transition={{ duration: 0.6, delay: 1.3 }}
                        >
                          <Button
                            size="sm"
                            variant="ghost"
                            className="rounded-md border border-white text-white hover:bg-white/20 hover:text-white transition text-sm w-full sm:w-auto"
                          >
                            Baca Selengkapnya
                          </Button>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation - Responsive with adjusted positioning */}
              <motion.div
                className="flex items-center justify-center py-3 sm:py-3 gap-2 sm:gap-3 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.button
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                  className="p-1 sm:p-2 text-gray-400 hover:text-black transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                <div className="flex gap-1 sm:gap-2">
                  {destinations.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-[2px] sm:h-[3px] rounded-full transition-all duration-300 ${index === currentIndex ? "w-4 sm:w-6 md:w-8 bg-black" : "w-2 sm:w-3 bg-gray-400"
                        }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: 1.3 + (index * 0.1) }}
                    />
                  ))}
                </div>
                <motion.button
                  onClick={nextSlide}
                  aria-label="Next Slide"
                  className="p-1 sm:p-2 text-gray-400 hover:text-black transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarouselSection
