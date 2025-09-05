"use client"

import { Button } from "@/components/ui/button"
import { useIsland } from "@/components/daerah/island-context"
import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"

class IslandInfo {
  name: string
  paragraph: string
  image: string
  link: string


  constructor(name: string, paragraph: string, image: string, link: string) {
    this.name = name
    this.paragraph = paragraph
    this.image = image
    this.link = link
  }
}

const islandInfos: Record<string, IslandInfo> = {
  Sumatra: new IslandInfo(
    "Kue Asidah",
    "Kue Asidah berasal dari pengaruh kuliner Timur Tengah, khususnya kue asida, yang kemudian diadaptasi oleh masyarakat Melayu Riau. Dahulu, kue ini disajikan khusus untuk para raja di Indragiri.",
    "/daerah/asset/sumatra/makanan.svg",
    "/article/{uid}"
  ),
  Jawa: new IslandInfo(
    "Sate Karak",
    "Sate Karak adalah makanan khas Surabaya yang sederhana, hidangan ini menggunakan ketan hitam sebagai bahan utama, disajikan dengan karak (kerupuk nasi kering), serundeng kelapa, dan taburan kacang tumbuk.",
    "/daerah/asset/jawa/makanan.svg",
    "/article/{uid}"
  ),
  Kalimantan: new IslandInfo(
    "Mandai",
    "Mandai adalah makanan tradisional khas Kalimantan Selatan dan Kalimantan Tengah, terutama dari masyarakat Banjar dan Dayak, yang terbuat dari kulit buah cempedak yang difermentasi.",
    "/daerah/asset/kalimantan/makanan.svg",
    "/article/{uid}"
  ),
  Bali: new IslandInfo(
    "Rujak Bulung",
    "Rujak Bulung adalah rujak khas Bali yang menggunakan rumput laut segar sebagai bahan utama, bukan buah-buahan seperti rujak pada umumnya. Hidangan ini berasal dari pesisir Bali, terutama daerah Jembrana dan Pantai Serangan, dan menjadi camilan favorit masyarakat lokal.",
    "/daerah/asset/bali/makanan.svg",
    "/article/{uid}"
  ),
  Sulawesi: new IslandInfo(
    "Kasuami",
    "Kasuami (juga disebut Kasoami, Soami, atau Katula) adalah makanan pokok masyarakat Buton, Muna, dan Wakatobi yang terbuat dari singkong parut yang dikukus. Di daerah kepulauan yang sulit menanam padi, kasuami menjadi pengganti nasi yang tahan lama dan mudah dibawa bepergian.",
    "/daerah/asset/sulawesi/makanan.svg",
    "/article/{uid}"
  ),
  Papua: new IslandInfo(
    "Aunu Senebre",
    "Aunu Senebre adalah makanan tradisional dari pesisir Papua Selatan, terutama dikenal di wilayah Biak dan sekitarnya. Hidangan ini terdiri dari ikan teri nasi yang digoreng, lalu dicampur dengan parutan kelapa dan irisan daun talas, kemudian dikukus hingga matang.",
    "/daerah/asset/papua/makanan.svg",
    "/article/{uid}"
  ),
  NTT: new IslandInfo(
    "Rumpu Rampe",
    "Rumpu Rampe adalah hidangan sayur khas NTT yang terdiri dari beragam sayuran lokal seperti daun pepaya, bunga pepaya, daun kelor, jantung pisang, daun singkong, dan buah pepaya muda.",
    "/daerah/asset/ntt/makanan.svg",
    "/article/{uid}"
  ),
  NTB: new IslandInfo(
    "Ayam Rarang",
    "Ayam Rarang adalah hidangan khas suku Sasak yang berasal dari Desa Rarang, Kecamatan Sakra Timur, Lombok Timur. Diperkenalkan oleh Inaq Dellah pada tahun 1976 melalui rumah makan legendarisnya.",
    "/daerah/asset/ntb/makanan.svg",
    "/article/{uid}"
  ),
}

const Situs = () => {
  const { selected } = useIsland()
  const info = selected ? islandInfos[selected] : undefined

  return info ? (
    <section className="p-12 sm:p-24 sm:!py-14 bg-[#FAF4E1]">
      <div className="flex flex-col xl:flex-row justify-center px-12 xl:px-24 p-8 items-center gap-2 md:gap-12">

        {/* Image - kept on the left for larger screens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex justify-center items-center w-full xl:pr-18 mb-8 md:mb-0 lg:w-auto xl:justify-start"
        >
          <Image
            src={info.image}
            width={1}
            height={1}
            alt="Gambar Makanan Khas"
            className="w-full md:w-10/10  xl:w-lg xl:py-20"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="space-y-6 md:space-y-7 max-w-3xl text-center lg:text-start"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-wide text-[#6A705B]">
            {info ? info.name : "Pilih salah satu pulau"}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl 2xl:text-2xl text-muted-foreground text-justify lg:text-start">
            {info
              ? info.paragraph
              : "Klik tombol pulau di atas untuk menampilkan deskripsi singkat tentang pulau tersebut."}
          </p>
          <Button asChild className="bg-[#677059] hover:bg-[#354025] px-8 text-sm md:text-xl xl:text-2xl md:py-6" disabled={!info}>
            <Link href={info.link}>Baca Selengkapnya</Link>
          </Button>
        </motion.div>

      </div>
    </section>
  ) : null
}

export default Situs
