"use client"
import Link from "next/link"
import { motion } from "motion/react"

export default function Tradisi() {
  const CardLead = "backdrop-blur-lg border border-white/20 bg-[#FAF4E1] "

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/tradisi/tradisi_bali.svg')`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Left Side Content */}
        <div className="flex-1 max-w-2xl">
          {/* Main Title */}
          <motion.h1
              className="text-white flex justify-center md:justify-start text-xl sm:text-xl md:text-2xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 items-center gap-2 sm:gap-4 whitespace-nowrap"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
          >
              <Link href="/daerah">Rupa tradisi Indonesia</Link>
              <Link href="/daerah">
              <svg className="hidden md:block w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              </Link>
            
          </motion.h1>

          {/* Content Card */}
          <motion.div
            className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 lg:p-8 max-w-full md:max-w-lg lg:max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h2
              className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Seni Tradisi
            </motion.h2>
            <motion.p
              className="text-white/90 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Jelajahi Budaya dan Tradisi di Indonesia yang memiliki seni indah disetiap sudut NUSANTARA yang bahkan
              terlupakan oleh ruang dan waktu.
            </motion.p>
            <Link href="/daerah">
            <motion.button
              className="border border-white/50 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-white/10 transition-colors duration-300 text-sm sm:text-base"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Baca Selengkapnya
            </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Right Side Content - Animated Number Section - Hidden on mobile */}
        <div className="flex-shrink-0 text-right text-white ml-4 sm:ml-6 md:ml-8 lg:ml-8 hidden sm:block">
          <div className="flex flex-col items-center">
            <motion.div
              className="text-xl sm:text-xl md:text-xl lg:text-xl font-bold mb-4"
              initial={{ opacity: 0, x: 50, scale: 0.5 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
            >
              03
            </motion.div>
            <motion.div
              className={`w-px ${CardLead}`}
              initial={{ height: 0 }}
              animate={{ height: '3.5rem' }} // h-42 = 10.5rem
              whileInView={{ height: "3.5rem" }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
            />

            <motion.div
              className="h-2 w-2 rounded-full bg-white mb-6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </div>

          {/* Section Title */}
          <motion.h3
            className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold mb-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Tradisi dan Budaya
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-white/80 text-sm sm:text-base max-w-xs leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Budaya dan tradisi bukan sekedar warisan, melainkan cara hidup yang membentuk rasa, nilai, dan identitas
            suatu bangsa. Di setiap sudut Nusantara, tradisi tumbuh dari tanah, waktu, dan rasa kolektif.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
