import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Parallax } from 'react-scroll-parallax';

{/* Card Floater */ }
const CardFloat = () => {
  const CardLead = "backdrop-blur-lg border border-white/20 bg-[#FAF4E1] "

  return (
    <div className="absolute right-0 -bottom-2/6">
      <div className="flex flex-col items-end-safe gap-3">

        {/* Hero Lead */}
        <div className="flex flex-col items-center w-fit">
          <h1 className="font-bold text-lg text-[#FAF4E1]">01</h1>
          <div className={`w-px h-32 ${CardLead}`} />
          <div className={`h-2 w-2 rounded-full ${CardLead}`} />
        </div>

        {/* Hero Card*/}
        <Card
          className="max-w-md backdrop-blur-lg px-6 py-4 rounded-4xl bg-[#FAF4E1] border border-white/20 overflow-hidden"
          style={{ borderBottomRightRadius: "84px", borderTopRightRadius: "0px" }}
        >
          <div className="flex items-center justify-center space-x-4 h-full">
            <div className="min-h-22 w-px bg-black/70" />
            <div className="py-2">
              <CardHeader className="pl-1">
                <h3 className="text-lg font-semibold text-black">Pendahuluan</h3>
              </CardHeader>
              <CardContent className="pl-1">
                <p className="text-xs text-black">
                  Di balik riuhnya arus utama, Indonesia menyimpan ribuan cerita yang nyaris tak terdengar.
                  <span className="font-bold"> Antarala </span> hadir sebagai ruang kecil yang merawat jejak-jejak itu,
                  menghidupkan kembali makna yang tersembunyi,dan mengajak kita melihat Indonesia dari celah yang jarang disingkap
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

{/* Hero Section */ }
const HeroFirst = () => {

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
          src="/homepage/hero/hero.png"
          alt="Indonesia Richness and Beautiful Landscape"
          fill
          quality={100}
          className="object-cover"
          priority
        />
      </Parallax>

      {/* Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom right, rgba(40, 38, 38, 0.3), rgba(45, 51, 17, 0.4))",
        }}
      />

      {/* Main Component */}
      <div className="w-full h-full flex flex-row relative z-10">
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

export default HeroFirst
