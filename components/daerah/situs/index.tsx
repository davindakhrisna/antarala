"use client"

import { Button } from "@/components/ui/button"
import { useIsland } from "@/components/daerah/island-context"
import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"

class IslandInfo {
  name: string
  paragraph: string
  link: string
  image: string
  imageMini: string

  constructor(name: string, paragraph: string, link: string, image: string, imageMini: string) {
    this.name = name
    this.paragraph = paragraph
    this.link = link
    this.image = image
    this.imageMini = imageMini
  }
}

const islandInfos: Record<string, IslandInfo> = {
  Sumatra: new IslandInfo(
    "Lawang Borotan",
    "Lawang Borotan bukan sekadar gerbang tua, tapi titik sunyi di mana sejarah Palembang berubah arah. Di sinilah Sultan Mahmud Badaruddin II melangkah menuju pengasingan, meninggalkan jejak terakhir kejayaan kesultanan yang kini hanya bergema dalam ingatan.",
    "/bacaan/{uid}",
    "/daerah/asset/sumatra/image.svg",
    "/daerah/asset/sumatra/mini-image.svg"
  ),
  Jawa: new IslandInfo(
    "Situs Trowulan",
    "Trowulan bukan sekadar tanah tua yang menyimpan bata merah dan pecahan keramik. Ia adalah sisa napas dari sebuah peradaban yang pernah bermimpi besar, membentangkan pengaruh hingga ke seantero Nusantara.",
    "/bacaan/{uid}",
    "/daerah/asset/jawa/image.svg",
    "/daerah/asset/jawa/mini-image.svg"
  ),
  Kalimantan: new IslandInfo(
    "Keraton Matan",
    "Keraton Matan adalah peninggalan dari Kerajaan Tanjungpura, yang diyakini sebagai salah satu kerajaan Melayu tertua di Kalimantan Barat, berdiri sejak abad ke-8 Masehi, kerajaan ini memeluk Islam dan berganti nama menjadi Kerajaan Matan.",
    "/bacaan/{uid}",
    "/daerah/asset/kalimantan/image.svg",
    "/daerah/asset/kalimantan/mini-image.png"
  ),
  Bali: new IslandInfo(
    "Gereja Palasari",
    "Gereja ini bernama lengkap Gereja Hati Kudus Yesus Palasari, terletak di Dusun Palasari, Desa Ekasari, Kecamatan Melaya, Kabupaten Jembrana, Bali Barat. Meski berada di wilayah mayoritas Hindu, gereja ini menjadi simbol kerukunan antarumat beragama yang kuat.",
    "/bacaan/{uid}",
    "/daerah/asset/bali/image.svg",
    "/daerah/asset/bali/mini-image.svg"
  ),
  Sulawesi: new IslandInfo(
    "Makam Tandano",
    "Makam Kyai Mojo terletak di Desa Wulauan, Kecamatan Tondano Utara, di atas bukit bernama Tondata, sekitar 1 km dari pusat kota Tondano. Dikelilingi pepohonan rindang dan suasana sunyi.",
    "/bacaan/{uid}",
    "/daerah/asset/sulawesi/image.svg",
    "/daerah/asset/sulawesi/mini-image.svg"
  ),
  Papua: new IslandInfo(
    "Pulau Mansinan",
    "Pulau ini menjadi titik awal masuknya kekristenan di Papua pada tahun 1855, saat dua misionaris Jerman, Carl Wilhelm Ottow dan Johann Gottlob Geissler mendarat dan mulai menyebarkan ajaran.",
    "/bacaan/{uid}",
    "/daerah/asset/papua/image.svg",
    "/daerah/asset/papua/mini-image.svg"
  ),
  NTT: new IslandInfo(
    "Situs Laratunka",
    "Larantuka adalah kota kecil di pesisir timur Pulau Flores yang menjadi pusat penyebaran agama Katolik sejak abad ke-16. Nama “Larantuka” diyakini berasal dari kata “lara” (penderitaan) dan “tuka” (penggantian), melambangkan pergulatan spiritual masyarakat lokal saat menerima ajaran baru dari misionaris Portugis.",
    "/bacaan/{uid}",
    "/daerah/asset/ntt/image.svg",
    "/daerah/asset/ntt/mini-image.svg"
  ),
  NTB: new IslandInfo(
    "Taman Mayura",
    "Taman Mayura dibangun pada tahun 1744 M oleh Raja A.A. Made Karangasem dari Kerajaan Bali yang berkuasa di Lombok saat itu. Pada tahun 1866, taman direnovasi dan diberi nama “Mayura,” yang berarti burung merak dalam bahasa Sanskerta. Nama ini dipilih karena merak dipercaya mampu mengusir ular yang sering muncul di taman.",
    "/bacaan/{uid}",
    "/daerah/asset/ntb/image.svg",
    "/daerah/asset/ntb/mini-image.svg"
  ),
}

const Situs = () => {
  const { selected } = useIsland()
  const info = selected ? islandInfos[selected] : undefined

  return info ? (
    <section className="p-12 sm:p-24 bg-[#FAF4E1]">
      <div className="flex flex-col-reverse xl:flex-row justify-center px-12 xl:px-24 p-8 items-center gap-2 md:gap-12">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 md:space-y-7 max-w-3xl text-center lg:text-start"
        >
          <h1 className="text-3xl sm:text-6xl xl:text-8xl font-bold tracking-wide text-[#6A705B]">
            {info ? info.name : "Pilih salah satu pulau"}
          </h1>
          <p className="text-lg sm:text-2xl text-muted-foreground text-justify lg:text-start">
            {info
              ? info.paragraph
              : "Klik tombol pulau di atas untuk menampilkan deskripsi singkat tentang pulau tersebut."}
          </p>
          <Button asChild className="bg-[#677059] hover:bg-[#354025] px-8 text-sm md:text-xl xl:text-2xl md:py-6" disabled={!info}>
            <Link href={info.link}>Baca Selengkapnya</Link>
          </Button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative flex justify-center items-center w-10/10 lg:pl-24 mb-8 md:mb-0 lg:w-auto lg:justify-end"
        >
          <Image
            src={info.image}
            width={1}
            height={1}
            alt="Image Situs"
            className="w-full md:w-10/10 lg:min-h-[586px] lg:min-w-[426px] lg:py-20"
          />
          <Image
            src={info.imageMini}
            width={200}
            height={150}
            alt="Image Situs Kecil"
            className="w-5/10 sm:w-3/10 md:w-5/12 object-fit border-16 border-[#FAF4E1] hidden lg:block absolute bottom-0 rounded-full lg:left-0"
          />
        </motion.div>

      </div>
    </section>
  ) : null
}

export default Situs
