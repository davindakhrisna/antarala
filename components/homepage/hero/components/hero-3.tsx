import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Parallax } from 'react-scroll-parallax'
import React from 'react';
import { motion } from 'motion/react';
import { Separator } from "@/components/ui/separator";

{/* Card Floater */ }
const CardFloat = () => {

  return (
    <Card>
      <CardHeader>
        <h1 className="text-3xl md:text-3xl font-bold">Pendahuluan</h1>
        <Separator className="bg-black" />
      </CardHeader>
      <CardContent>
        <p className="max-w-md text-md xl:text-lg">
          Di balik riuhnya arus utama, Indonesia menyimpan ribuan cerita yang nyaris tak terdengar. <span className="font-bold">ANTARALA</span> hadir sebagai ruang kecil yang merawat jejak-jejak itu,
          menghidupkan kembali makna yang tersembunyi, dan mengajak kita melihat Indonesia dari celah yang jarang disingkap
        </p>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          variant="ghost"
          className="py-6 text-md border-1 border-black cursor-pointer hover:bg-amber-300 transition-colors"
        >
          <Link href="/tentang">
            Baca Selengkapnya
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const CardResponsive = () => { }

{/* Hero Section */ }
const HeroThird = () => {

  return (
    <section
      className="relative p-8 md:p-18 overflow-hidden min-h-screen flex items-center bg-black"
    >
      {/* Image Here */}
      <Parallax
        speed={-20}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/homepage/hero/hero3.svg"
          alt="Indonesia Richness and Beautiful Landscape"
          fill
          quality={100}
          className="object-cover"
          priority
        />
      </Parallax>

      {/* Main Component */}
      <div className="w-full h-full flex flex-row  relative z-10">
        <Parallax
          speed={15}
        >
          <motion.div
            className="text-white space-y-6 md:space-y-3 lg:space-y-6 text-center md:text-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Ruang kecil untuk <span className="sm:hidden">cerita besar Indonesia</span>
            </motion.h1>
            <motion.h1
              className="hidden sm:block md:text-4xl lg:text-5xl font-bold tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              cerita besar Indonesia
            </motion.h1>
            <motion.h2
              className="text-xl md:text-xl lg:text-2xl font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Belajar memahami Indonesia dari ruang yang tak biasa
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex justify-center items-center sm:justify-start sm:items-start"
            >
              <Link href="/daerah">
                <Button
                  className="p-3 md:p-6 cursor-pointer rounded-4xl text-sm lg:text-md border border-white backdrop-blur-xs bg-transparent text-white hover:bg-white/10 transition"
                >
                  Mulai Menjelajah
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Parallax>

        {/* Card Float */}
        <div className="hidden lg:inline-block">
          <CardFloat />
        </div>
      </div>

    </section>
  )
}

export default HeroThird
