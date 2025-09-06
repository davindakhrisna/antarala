"use client"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { createClient } from "@/prismicio"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Kuliner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [pepesIkanUid, setPepesIkanUid] = useState<string | null>(null)
  const [rotiGOUid, setRotiGoUid] = useState<string | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      const client = createClient();
      try {
        // Ambil artikel dengan UID "pepesikan"
        const doc = await client.getByUID("article", "pepesikan", );
        if (doc) {
          setPepesIkanUid(doc.uid);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const client = createClient();
      try {
        // Ambil artikel dengan UID "pepesikan"
        const doc = await client.getByUID("article", "rotigo", );
        if (doc) {
          setRotiGoUid(doc.uid);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };
    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Handle touch events for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    const currentX = e.touches[0].clientX
    const diff = startX - currentX

    // If swipe is significant enough, change slide
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left, go to next slide
        nextSlide()
      } else {
        // Swiped right, go to previous slide
        prevSlide()
      }
      setIsDragging(false)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <section className="relative bg-[#F5F1E8] overflow-hidden">
      {/* Main content */}
      <div className="relative z-20 px-4 sm:px-6 md:px-12 lg:px-20 pt-20 pb-20 md:pt-35 md:pb-35">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 md:mb-12"
        >
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 flex items-center gap-2 sm:gap-4">
            <Link href="/bacaan">Estetika rasa Indonesia</Link>
             <Link href="/bacaan">
             <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
             </Link>
          </h2>
        </motion.div>

        {/* Desktop Layout - No Slider */}
        <div className="hidden lg:flex gap-6">
          {/* Small content - Pepes Ikan */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-80 flex-shrink-0"
          >
            <div className="relative h-96 rounded-lg overflow-hidden group cursor-pointer">
              {/* Clickable overlay to match 'Baca Selengkapnya' */}
              <Link href={`/bacaan/${pepesIkanUid ?? ''}`} aria-label="Lihat Pepes Ikan" className="absolute inset-0 z-10" />
              <Image
                src="/homepage/kuliner/pepes-ikan.svg"
                alt="Pepes Ikan"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-xl font-bold mb-2">Pepes Ikan</h3>
                  <Link href={`/bacaan/${pepesIkanUid}`}>
                    <p className="text-white text-sm font-medium underline cursor-pointer hover:text-white/80 transition-colors duration-300">
                      Baca Selengkapnya
                    </p>
                  </Link>
              </div>
            </div>
          </motion.div>

          {/* Large content - Toko Roti Go Purwokerto with overlay content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex-1 relative"
          >
            <div className="relative h-96 rounded-lg overflow-hidden group cursor-pointer">
              {/* Clickable overlay to match 'Baca Selengkapnya' */}
              <Link href={`/bacaan/${rotiGOUid ?? ''}`} aria-label="Lihat Toko Roti Go Purwokerto" className="absolute inset-0 z-10" />
              <Image
                src="/homepage/kuliner/rotigo.svg"
                alt="Roti Go"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60" />

              {/* Bottom left title */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Toko Roti Go Purwokerto</h3>
                <Link href={`/bacaan/${rotiGOUid}`}>
                <p className="text-white text-sm font-medium underline cursor-pointer hover:text-white/80 transition-colors duration-300">
                  Baca Selengkapnya
                </p>
                </Link>
                
              </div>

              {/* Right side content */}
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
                {/* Number at top */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8,
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  }}
                  className="hidden xl:block text-xl font-bold text-white mb-4"
                >
                  04
                </motion.div>

                {/* Vertical line below number */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "3rem" }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                  className="w-0.5 bg-white mb-3 hidden xl:block"
                />

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.2,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="w-2 h-2 bg-white hidden xl:block rounded-full mb-4"
                />

                {/* Text content below line */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                  className="text-right hidden xl:block"
                >
                  <h4 className="text-lg font-bold text-white mb-2">Kuliner Nusantara</h4>
                  <p className="text-sm text-white/90 max-w-xs leading-relaxed mb-3">
                    Cita rasa autentik Indonesia yang memukau lidah, dari hidangan tradisional hingga kreasi modern yang
                    menggugah selera.
                  </p>
                  <button className="px-4 py-2 border border-white text-white text-sm font-medium hover:bg-white hover:text-gray-800 transition-colors duration-300 rounded cursor-pointer">
                    Baca Selengkapnya
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tablet Layout - Smaller Components */}
        <div className="hidden md:flex lg:hidden gap-4">
          {/* Small content - Pepes Ikan */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-56 flex-shrink-0"
          >
            <div className="relative h-72 rounded-lg overflow-hidden group cursor-pointer">
              {/* Clickable overlay */}
              <Link href={`/bacaan/${pepesIkanUid ?? ''}`} aria-label="Lihat Pepes Ikan" className="absolute inset-0 z-10" />
              <Image
                src="/homepage/kuliner/pepes-ikan.svg"
                alt="Pepes Ikan"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-lg font-bold mb-2">Pepes Ikan</h3>
                <Link href={`/bacaan/${pepesIkanUid}`}>
                    <p className="text-white text-sm font-medium underline cursor-pointer hover:text-white/80 transition-colors duration-300">
                      Baca Selengkapnya
                    </p>
                  </Link>
              </div>
            </div>
          </motion.div>

          {/* Large content - Toko Roti Go Purwokerto with overlay content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex-1 relative"
          >
            <div className="relative h-72 rounded-lg overflow-hidden group cursor-pointer">
              {/* Clickable overlay */}
              <Link href={`/bacaan/${rotiGOUid ?? ''}`} aria-label="Lihat Toko Roti Go Purwokerto" className="absolute inset-0 z-10" />
              <Image
                src="/homepage/kuliner/rotigo.svg"
                alt="Roti Go"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60" />

              {/* Bottom left title */}
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-xl font-bold mb-2">Toko Roti Go Purwokerto</h3>
                <Link href={`/bacaan/${rotiGOUid}`}>
                <p className="text-white text-sm font-medium underline cursor-pointer hover:text-white/80 transition-colors duration-300">
                  Baca Selengkapnya
                </p>
                </Link>
              </div>

              {/* Right side content */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
                {/* Number at top */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8,
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  }}
                  className="hidden xl:block text-xl font-bold text-white mb-3"
                >
                  04
                </motion.div>

                {/* Vertical line below number */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "2.5rem" }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                  className="hidden xl:block w-0.5 bg-white mb-2"
                />

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.2,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="w-1.5 h-1.5 bg-white hidden xl:block rounded-full mb-3"
                />

                {/* Text content below line */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                  className="text-right hidden xl:block"
                >
                  <h4 className="text-base font-bold text-white mb-2">Kuliner Nusantara</h4>
                  <p className="text-xs text-white/90 max-w-[180px] leading-relaxed mb-2">
                    Cita rasa autentik Indonesia yang memukau lidah, dari hidangan tradisional hingga kreasi modern.
                  </p>
                  <button className="px-3 py-1.5 border border-white text-white text-xs font-medium hover:bg-white hover:text-gray-800 transition-colors duration-300 rounded">
                    Baca Selengkapnya
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout - With Slider */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-lg">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Slide 1 - Pepes Ikan */}
              <div className="min-w-full">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
                    <Link href={`/bacaan/${pepesIkanUid ?? ''}`} aria-label="Lihat Pepes Ikan" className="absolute inset-0 z-10" />
                    <Image
                      src="/homepage/kuliner/pepes-ikan.svg"
                      alt="Pepes Ikan"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-white text-xl font-bold mb-2">Pepes Ikan</h3>
                      <Link href={`/bacaan/${pepesIkanUid}`}>
                        <p className="text-white text-sm font-medium underline cursor-pointer hover:text-white/80 transition-colors duration-300">
                           Baca Selengkapnya
                        </p>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Slide 2 - Toko Roti Go Purwokerto */}
              <div className="min-w-full">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                  <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
                    <Link href={`/bacaan/${rotiGOUid ?? ''}`} aria-label="Lihat Toko Roti Go Purwokerto" className="absolute inset-0 z-10" />
                    <Image
                      src="/homepage/kuliner/rotigo.svg"
                      alt="Roti Go"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60" />

                    {/* Bottom left title */}
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-white text-xl font-bold mb-2">Toko Roti Go Purwokerto</h3>
                     <Link href={`/bacaan/${rotiGOUid}`}>
                        <p className="text-white text-sm font-medium underline cursor-pointer hover:text-white/80 transition-colors duration-300">
                          Baca Selengkapnya
                        </p>
                      </Link>
                    </div>

                    {/* Right side content - Hidden on mobile */}
                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex-col items-center hidden sm:flex">
                      {/* Number at top */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.8,
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        }}
                        className="text-xl font-bold text-white mb-4"
                      >
                        04
                      </motion.div>

                      {/* Vertical line below number */}
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "3rem" }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                        className="w-0.5 bg-white mb-3"
                      />

                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                          duration: 0.4,
                          delay: 1.2,
                          type: "spring",
                          stiffness: 300,
                        }}
                        className="w-2 h-2 bg-white rounded-full mb-4"
                      />

                      {/* Text content below line */}
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                        className="text-right"
                      >
                        <h4 className="text-lg font-bold text-white mb-2">Kuliner Nusantara</h4>
                        <p className="text-sm text-white/90 max-w-xs leading-relaxed mb-3">
                          Cita rasa autentik Indonesia yang memukau lidah, dari hidangan tradisional hingga kreasi modern yang
                          menggugah selera.
                        </p>
                        <button className="px-4 py-2 border border-white text-white text-sm font-medium hover:bg-white hover:text-gray-800 transition-colors duration-300 rounded cursor-pointer">
                          Baca Selengkapnya
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Slider Navigation */}
            <div className="flex justify-center mt-4 space-x-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 text-gray-800" />
              </button>
              <div className="flex space-x-1">
                {[0, 1].map((index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 cursor-pointer ${currentSlide === index ? "bg-gray-800" : "bg-gray-400"
                      }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Kuliner
