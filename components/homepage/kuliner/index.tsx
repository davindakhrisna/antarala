"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Kuliner = () => {
  return (
    <section className="relative min-h-screen bg-[#F5F1E8] overflow-hidden">
      {/* Main content */}
      <div className="relative z-20 px-6 md:px-12 lg:px-20 pt-16 pb-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 flex items-center gap-4">
            Estetika rasa Indonesia
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </h2>
        </motion.div>

        <div className="flex gap-6">
          {/* Small content - Pepes Ikan */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-80 flex-shrink-0"
          >
            <div className="relative h-96 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="/homepage/kuliner/pepes-ikan.svg"
                alt="Pepes Ikan"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-xl font-bold mb-2">Pepes Ikan</h3>
                <p className="text-white text-sm font-medium underline cursor-pointer hover:text-white/80 transition-colors duration-300">
                  Baca Selengkapnya
                </p>
              </div>
            </div>
          </motion.div>

          {/* Large content - Rumah Makan Bandung with overlay content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex-1 relative"
          >
            <div className="relative h-96 rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src="/homepage/kuliner/rumah-makan-bandung.svg"
                alt="Rumah Makan Bandung"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60" />

              {/* Bottom left title */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Rumah Makan Bandung</h3>
                <p className="text-white text-sm font-medium underline cursor-pointer hover:text-white/80 transition-colors duration-300">
                  Baca Selengkapnya
                </p>
              </div>

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
                  className="text-6xl md:text-xl font-bold text-white mb-4"
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
                  <button className="px-4 py-2 border border-white text-white text-sm font-medium hover:bg-white hover:text-gray-800 transition-colors duration-300 rounded">
                    Baca Selengkapnya
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Kuliner
