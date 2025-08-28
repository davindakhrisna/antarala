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
    <motion.div
      initial={{ scale: 1.1, opacity: 0, y: 20, rotate: -3 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        y: 0,
        rotate: 5,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 15,
          mass: 0.5,
          delay: 0.1
        }
      }}
      whileHover={{
        rotate: 0,
        transition: {
          type: 'spring',
          stiffness: 200,
          damping: 15
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="origin-center"
    >
      <Card className="bg-[#FFC200] border-0 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-amber-50/30 opacity-0 pointer-events-none"
          initial={{ opacity: 0, scale: 1.4 }}
          whileInView={{
            opacity: [0, 0.4, 0],
            scale: [1.4, 0.9, 1.1],
            transition: {
              duration: 1,
              ease: [0.4, 0, 0.2, 1],
              times: [0, 0.6, 1],
              delay: 0.2
            }
          }}
          viewport={{ once: true }}
        />
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
    </motion.div>
  )
}

{/* Hero Section */ }
const HeroSecond = () => {

  return (
    <section
      className="relative p-8 md:p-18 overflow-hidden min-h-screen flex flex-initial items-center bg-black"
    >
      {/* Image Here */}
      <Parallax
        speed={-20}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/homepage/hero/hero2.png"
          alt="Indonesia Richness and Beautiful Landscape"
          fill
          quality={100}
          className="object-cover"
          priority
        />
      </Parallax>

      {/* Gradient */}
      <div
        className="absolute inset-0 backdrop-blur-sm pointer-events-none"
        style={{
          background: "linear-gradient(to bottom right, rgba(93, 121, 108, 0.1) 1%, rgba(4, 44, 34, 0.4) 100%)",
        }}
      />

      {/* Main Component */}
      <Parallax speed={12} className="w-full h-full container mx-auto px-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between relative z-10">

        {/* Card Float */}
        <div className="w-full lg:w-3/10 flex justify-center lg:justify-start mb-12 lg:mb-0">
          <Parallax speed={10} className="hidden lg:block">
            <CardFloat />
          </Parallax>
        </div>

        {/* Main Content */}
        <Parallax speed={-5} className="w-full lg:w-7/12 space-y-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <motion.h1
            className="text-3xl md:text-5xl text-white font-bold"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.3
              }
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="text-[#FFC200]">Bukan</span> arus UTAMA.
          </motion.h1>

          <motion.h1
            className="text-3xl md:text-5xl text-white font-bold"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.4
              }
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            Justru <span className="text-[#FFC200]">di sanalah</span> <span>MAKNA</span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-whitetext-white"
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
            <span className="text-[#FFC200]">Indonesia</span> tak hanya yang kau tahu.
          </motion.h2>
        </Parallax>
      </Parallax>

    </section >
  )
}

export default HeroSecond
