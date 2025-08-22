import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

{/* Card Floater */ }
const CardFloat = () => {
  return (
    <Card
      className="
      max-w-md absolute bottom-0 right-0 backdrop-blur-lg px-8 
      rounded-4xl bg-[#FAF4E1] border border-white/20 overflow-hidden
      "
      style={{ borderBottomRightRadius: "84px", borderTopRightRadius: "0px" }}
    >
      <div className="flex flex-row items-center space-x-4 h-full">
        <div className="min-h-26 w-px bg-black/70" />
        <div className="py-2">
          <CardHeader className="pl-3">
            <h3 className="text-lg font-semibold text-black">Lorem Ipsum Dolor Sit Amet</h3>
          </CardHeader>
          <CardContent className="pl-3">
            <p className="text-xs text-black">
              Lorem Ipsum Dolor Sit Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}

const Hero = () => {
  return (
    <section
      className="relative p-18 overflow-hidden min-h-screen min-w-screen flex flex-initial items-center bg-black"
    >
      {/* Image Here */}
      <Image
        src="/homepage/hero.png"
        alt="Indonesia Richness and Beautiful Landscape"
        fill
        quality={100}
        className="object-cover"
        priority
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom right, rgba(40, 38, 38, 0.3), rgba(45, 51, 17, 0.4))",
        }}
      />

      {/* Main Component */}
      <div className="w-full h-full flex flex-row pt-32 relative z-10">
        <div className="text-white space-y-6">
          <h1 className="text-5xl font-bold tracking-widest">Ruang kecil untuk</h1>
          <h1 className="text-5xl font-bold tracking-widest">cerita besar Indonesia</h1>
          <h2 className="text-2xl font-medium">Belajar memahami Indonesia dari ruang yang tak biasa</h2>
          <Link href="/daerah" className="inline-block">
            <Button
              variant="outline"
              className="p-7 cursor-pointer rounded-4xl text-md border-white bg-transparent text-white hover:bg-white/10 transition"
            >
              Mulai Menjelajah
            </Button>
          </Link>

        </div>

        {/* Card Float */}
        <CardFloat />
      </div>

    </section>
  )
}

export default Hero
