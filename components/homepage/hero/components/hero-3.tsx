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
    <Parallax speed={25} className="flex">
      <motion.div
        className="flex flex-col justify-center text-start px-12 space-y-8 rounded-l-4xl border-l-8 border-l-amber-100 backdrop-blur-md font-bold z-0"
        initial={{ x: 700, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 68, mass: 0.2, delay: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h1 className="text-5xl hidden xl:block text-white tracking-widest text-center">Melihat <span className="text-[#FFC200]">Indonesia</span> lewat</h1>
        <h1 className="text-5xl hidden xl:block text-white tracking-widest text-center"><span className="text-[#FFC200]">celah</span> yang jarang dibuka</h1>
        <h1 className="text-3xl text-white tracking-widest text-center leading-12 xl:hidden">
          Melihat <span className="text-[#FFC200]">Indonesia</span> lewat <span className="text-[#FFC200]">celah</span> yang jarang dibuka
        </h1>
      </motion.div>

      <motion.div
        className="relative z-11 backdrop-blur-2xl"
        initial={{ x: 160, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6, delay: 0.15 }}
        viewport={{ once: true, margin: "-100px" }}
      >

        <Card className="bg-[#FAF4E1]/30 border-0 text-white rounded-bl-none rounded-tl-none">
          <CardHeader>
            <h1 className="text-3xl md:text-4xl font-bold">Pendahuluan</h1>
            <Separator />
          </CardHeader>
          <CardContent>
            <p className="max-w-md text-sm xl:text-lg">
              Di balik riuhnya arus utama, Indonesia menyimpan ribuan cerita yang nyaris tak terdengar. <span className="font-bold">ANTARALA</span> hadir sebagai ruang kecil yang merawat jejak-jejak itu,
              menghidupkan kembali makna yang tersembunyi, dan mengajak kita melihat Indonesia dari celah yang jarang disingkap
            </p>
          </CardContent>
          <CardFooter>
            <Button
              asChild
              className="py-6 text-md cursor-pointer bg-transparent backdrop-blur-2xl hover:bg-black/15 transition-colors"
            >
              <Link href="/tentang">
                Baca Selengkapnya
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </Parallax >
  )
}

const CardResponsive = () => {
  return (
    <Parallax
      speed={15}
    >
      <motion.div
        className="text-white space-y-6 md:space-y-3 lg:space-y-6 text-center sm:text-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl md:text-4xl leading-12 lg:text-5xl font-bold tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Melihat <span className="text-[#FFC200]">Indonesia</span> lewat <span className="sm:hidden text-[#FFC200]">celah</span> yang jarang dibuka

        </motion.h1>
        <motion.h1
          className="hidden sm:block md:text-4xl lg:text-5xl font-bold tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="text-[#FFC200]">celah</span> yang jarang dibuka
        </motion.h1>
        <motion.h2
          className="text-lg md:text-3xl lg:text-4xl font-medium text-white tracking-widest"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.5
            }
          }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="text-[#FFC200]">Kekayaan</span> budaya dunia ada di tangan kita.
        </motion.h2>
      </motion.div>
    </Parallax>
  )

}

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

      {/* Overlay */}
      <div
        className="lg:hidden absolute inset-0 backdrop-blur-sm pointer-events-none"
        style={{
          background: "linear-gradient(to bottom right, rgba(93, 121, 108, 0.1) 1%, rgba(4, 44, 34, 0.4) 100%)",
        }}
      />

      {/* Main Component */}
      <div className="w-full h-full flex justify-center relative z-10">

        <div className="w-fit relative flex">

          {/* Responsive Card */}
          <div className="relative z-10 lg:hidden">
            <CardResponsive />
          </div>

          {/* Card Float */}
          <div className="hidden lg:inline-block relative z-10">
            <CardFloat />
          </div>

        </div>

      </div>

    </section>
  )
}

export default HeroThird
