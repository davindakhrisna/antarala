import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Parallax } from 'react-scroll-parallax';

{/* Card Floater */ }
const CardFloat = () => {

  return (
    <Card className="max-w-md">
      <CardHeader>
        <h3 className="text-lg font-semibold text-black">Pendahuluan</h3>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-black">
          Di balik riuhnya arus utama, Indonesia menyimpan ribuan cerita yang nyaris tak terdengar.
          <span className="font-bold"> Antarala </span> hadir sebagai ruang kecil yang merawat jejak-jejak itu,
          menghidupkan kembali makna yang tersembunyi,dan mengajak kita melihat Indonesia dari celah yang jarang disingkap
        </p>
      </CardContent>
    </Card>
  )
}

{/* Hero Section */ }
const HeroSecond = () => {
  return (
    <section
      className="relative p-18 overflow-hidden min-h-screen min-w-screen flex flex-initial items-center bg-black"
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
          className="object-cover blur-xs"
          priority
        />
      </Parallax>

      {/* Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom right, rgba(93, 121, 108, 0.1) 1%, rgba(4, 44, 34, 0.4) 100%)",
        }}
      />

      {/* Main Component */}
      <div className="w-full h-full flex flex-row pt-28 relative z-10">
        <div className="text-white space-y-6">
          <h1 className="text-5xl font-bold tracking-widest">Ruang kecil untuk</h1>
          <h1 className="text-5xl font-bold tracking-widest">cerita besar Indonesia</h1>
          <h2 className="text-2xl font-medium">Belajar memahami Indonesia dari ruang yang tak biasa</h2>
          <Link href="/daerah">
            <Button
              className="p-7 cursor-pointer rounded-4xl text-md border border-white backdrop-blur-xs bg-transparent text-white hover:bg-white/10 transition"
            >
              Mulai Menjelajah
            </Button>
          </Link>

        </div>

        {/* Card Float */}
        <div className="hidden sm:inline-block">
          <CardFloat />
        </div>
      </div>

    </section>
  )
}

export default HeroSecond
