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
    <div className="flex">
      <motion.div
        className="flex flex-col justify-center text-start px-12 space-y-8 rounded-l-4xl border-l-8 border-l-amber-100 backdrop-blur-md font-bold z-0"
        initial={{ x: 700, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 68, mass: 0.2, delay: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h1 className="text-5xl text-white tracking-widest">Melihat <span className="text-[#FFC200]">Indonesia</span> lewat</h1>
        <h1 className="text-5xl text-white tracking-widest"><span className="text-[#FFC200]">celah</span> yang jarang dibuka</h1>
      </motion.div>

      <motion.div
        className="relative backdrop-blur-md z-11"
        initial={{ x: 160, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6, delay: 0.15 }}
        viewport={{ once: true, margin: "-100px" }}
      >

        <Card className="bg-[#FAF4E1]/30 border-0 text-white">
          <CardHeader>
            <h1 className="text-4xl font-bold">Pendahuluan</h1>
            <Separator />
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
      </motion.div>
    </div>
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
      <div className="w-full h-full flex justify-center relative z-10">

        <div className="w-fit relative flex">



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
