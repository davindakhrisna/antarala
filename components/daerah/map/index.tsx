import Image from "next/image"
import { Button } from "@/components/ui/button"

const Map = () => {
  return (
    <section
      className="relative p-8 md:p-18 bg-[#FAF4E1] justify-center overflow-hidden min-h-screen flex items-center"
    >

      <div className="flex flex-col text-center justify-center space-y-6 items-center w-full max-w-3xl">
        <Image
          src="/daerah/map.svg"
          alt="Antarala"
          quality={100}
          width={800}
          height={600}
          priority
          className="mx-auto pointer-events-none w-full h-full"
        />

        <h1 className="text-5xl font-bold tracking-wider">Beberapa Pulau di Indonesia</h1>
        <p>Indonesia adalah negeri kepulauan yang membentang luas dari barat ke timur, menyimpan ribuan pulau dengan karakter, bahasa, dan tradisi yang berbeda. Setiap pulau bukan hanya daratan, tapi ruang hidup yang membentuk cara pandang, rasa, dan hubungan manusia dengan alam. Di antara laut yang memisahkan, tumbuh budaya yang saling menyambung, menjadikan Indonesia bukan satu cerita, melainkan ribuan narasi yang berjalan berdampingan.</p>
        <div className="grid grid-cols-4 gap-x-6 gap-2">
          <Button className="text-lg py-4 px-18 cursor-pointer">Sumatra</Button>
          <Button className="text-lg py-4 px-18 cursor-pointer">Jawa</Button>
          <Button className="text-lg py-4 px-18 cursor-pointer">Kalimantan</Button>
          <Button className="text-lg py-4 px-18 cursor-pointer">Bali</Button>
          <Button className="text-lg py-4 px-18 cursor-pointer">Sulawesi</Button>
          <Button className="text-lg py-4 px-18 cursor-pointer">Papua</Button>
          <Button className="text-lg py-4 px-18 cursor-pointer">NTT</Button>
          <Button className="text-lg py-4 px-18 cursor-pointer">NTB</Button>
        </div>
      </div>

    </section >
  )
}

export default Map
