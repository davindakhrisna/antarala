"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { motion } from "motion/react"

const Map = () => {
  // Current top map layer, updated on hover over any region button
  const [currentUrl, setCurrentUrl] = useState("/daerah/map.svg")
  // Keep previous url mounted briefly to crossfade out
  const [prevUrl, setPrevUrl] = useState<string | null>(null)
  const [isCrossfading, setIsCrossfading] = useState(false)
  const button = "text-sm bg-[#677059] md:text-lg px-7 md:px-12 md:py-5 font-medium cursor-pointer transition-transform duration-200 hover:scale-[1.04] active:scale-95"

  // Clear previous layer after fade completes
  useEffect(() => {
    if (!isCrossfading) return
    const t = setTimeout(() => {
      setPrevUrl(null)
      setIsCrossfading(false)
    }, 500) // match CSS duration-500
    return () => clearTimeout(t)
  }, [isCrossfading])

  const swapTo = (nextUrl: string) => {
    if (nextUrl === currentUrl) return
    setPrevUrl(currentUrl)
    setCurrentUrl(nextUrl)
    setIsCrossfading(true)
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative p-8 md:p-18 bg-[#FAF4E1] justify-center overflow-hidden min-h-screen flex items-center"
    >
      <div className="flex flex-col lg:text-center justify-center items-center w-full">
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full max-w-4xl my-8 md:my-0 h-[140px] md:h-[380px] lg:h-[400px]"
        >
          {/* Crossfade stack: previous (fading out) and current (fading in) */}
          {prevUrl && (
            <motion.div
              key={`prev-${prevUrl}`}
              className="absolute inset-0 z-10"
              initial={{ opacity: 1 }}
              animate={{ opacity: isCrossfading ? 0 : 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src={prevUrl}
                alt="Peta Indonesia"
                quality={100}
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          )}

          <motion.div
            key={`curr-${currentUrl}`}
            className="absolute inset-0 z-10"
            initial={{ opacity: prevUrl ? 0 : 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={currentUrl}
              alt="Peta Indonesia"
              quality={100}
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          {/* Base/reference layer below with soft visibility */}
          <Image
            src="/daerah/map.svg"
            alt="Peta Indonesia"
            quality={100}
            fill
            priority
            className={`absolute inset-0 z-0 opacity-45 object-contain pointer-events-none`}
          />
        </motion.div>

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="max-w-3xl space-y-4"
        >
          <h1 className="text-xl md:text-4xl font-bold tracking-wider">Beberapa Pulau di Indonesia</h1>
          <p className="text-sm sm:text-lg">
            Indonesia adalah negeri kepulauan yang membentang luas dari barat ke timur, menyimpan ribuan pulau dengan karakter, bahasa, dan tradisi yang berbeda. Setiap pulau bukan hanya daratan, tapi ruang hidup yang membentuk cara pandang, rasa, dan hubungan manusia dengan alam. Di antara laut yang memisahkan, tumbuh budaya yang saling menyambung, menjadikan Indonesia bukan satu cerita, melainkan ribuan narasi yang berjalan berdampingan.
          </p>
          <div className="flex flex-row row-end-4 gap-2 justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
              className="flex flew-row flex-wrap lg:justify-center gap-3 sm:gap-4"
            >
              <Button className={button} onMouseOver={() => swapTo("/daerah/Sumatra.svg")}>
                Sumatra
              </Button>
              <Button className={button} onMouseOver={() => swapTo("/daerah/Jawa.svg")}>
                Jawa
              </Button>
              <Button className={button} onMouseOver={() => swapTo("/daerah/Kalimantan.svg")}>
                Kalimantan
              </Button>
              <Button className={button} onMouseOver={() => swapTo("/daerah/Bali.svg")}>
                Bali
              </Button>
              <Button className={button} onMouseOver={() => swapTo("/daerah/Sulawesi.svg")}>
                Sulawesi
              </Button>
              <Button className={button} onMouseOver={() => swapTo("/daerah/Papua.svg")}>
                Papua
              </Button>
              <Button className={button} onMouseOver={() => swapTo("/daerah/NTT.svg")}>
                NTT
              </Button>
              <Button className={button} onMouseOver={() => swapTo("/daerah/NTB.svg")}>
                NTB
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </motion.section>
  )
}

export default Map
