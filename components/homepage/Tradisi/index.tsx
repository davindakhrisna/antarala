"use client"
import { motion } from "motion/react"

export default function Tradisi() {
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
      <div className="relative z-10 h-full flex items-center justify-between px-8 lg:px-16">
        {/* Left Side Content */}
        <div className="flex-1 max-w-2xl">
          {/* Main Title */}
          <motion.h1
            className="text-white text-4xl lg:text-5xl font-bold mb-12 flex items-center gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Rupa tradisi Indonesia
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.h1>

          {/* Content Card */}
          <motion.div
            className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h2
              className="text-white text-3xl lg:text-4xl font-bold mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Seni Tradisi
            </motion.h2>

            <motion.p
              className="text-white/90 text-base lg:text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Jelajahi Budaya dan Tradisi di Indonesia yang memiliki seni indah disetiap sudut NUSANTARA yang bahkan
              terlupakan oleh ruang dan waktu.
            </motion.p>

            <motion.button
              className="border border-white/50 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Baca Selengkapnya
            </motion.button>
          </motion.div>
        </div>

        {/* Right Side Content - Animated Number Section */}
        <div className="flex-shrink-0 text-right text-white ml-8">
          <div className="flex flex-col items-center">
            <motion.div
              className="text-6xl lg:text-xl font-bold mb-4"
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
              className="w-px bg-white mx-auto mb-6"
              initial={{ height: 0 }}
              whileInView={{ height: "4rem" }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
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
            className="text-xl lg:text-2xl font-semibold mb-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Tradisi dan Budaya
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-white/80 text-sm lg:text-base max-w-xs leading-relaxed"
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
