"use client"
import { Button } from "@/components/ui/button"
import { useIsland } from "@/components/daerah/island-context"
import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { createClient } from "@/prismicio"

// Ubah class IslandInfo untuk menerima UID yang dinamis
class IslandInfo {
  name: string
  paragraph: string
  uid: string | null
  image: string
  imageMini: string
  constructor(name: string, paragraph: string, uid: string | null, image: string, imageMini: string) {
    this.name = name
    this.paragraph = paragraph
    this.uid = uid
    this.image = image
    this.imageMini = imageMini
  }
  
  // Getter untuk link yang dinamis
  get link() {
    return this.uid ? `/bacaan/${this.uid}` : "#";
  }
}

// Data statis untuk setiap pulau, tanpa UID
const islandData: Record<string, { name: string; paragraph: string; image: string; imageMini: string }> = {
  Sumatra: {
    name: "Lawang Borotan",
    paragraph: "Lawang Borotan bukan sekadar gerbang tua, tapi titik sunyi di mana sejarah Palembang berubah arah. Di sinilah Sultan Mahmud Badaruddin II melangkah menuju pengasingan, meninggalkan jejak terakhir kejayaan kesultanan yang kini hanya bergema dalam ingatan.",
    image: "/daerah/asset/sumatra/image.svg",
    imageMini: "/daerah/asset/sumatra/mini-image.svg"
  },
  Jawa: {
    name: "Situs Trowulan",
    paragraph: "Trowulan bukan sekadar tanah tua yang menyimpan bata merah dan pecahan keramik. Ia adalah sisa napas dari sebuah peradaban yang pernah bermimpi besar, membentangkan pengaruh hingga ke seantero Nusantara.",
    image: "/daerah/asset/jawa/image.svg",
    imageMini: "/daerah/asset/jawa/mini-image.svg"
  },
  Kalimantan: {
    name: "Keraton Matan",
    paragraph: "Keraton Matan adalah peninggalan dari Kerajaan Tanjungpura, yang diyakini sebagai salah satu kerajaan Melayu tertua di Kalimantan Barat, berdiri sejak abad ke-8 Masehi, kerajaan ini memeluk Islam dan berganti nama menjadi Kerajaan Matan.",
    image: "/daerah/asset/kalimantan/image.svg",
    imageMini: "/daerah/asset/kalimantan/mini-image.png"
  },
  Bali: {
    name: "Gereja Palasari",
    paragraph: "Gereja ini bernama lengkap Gereja Hati Kudus Yesus Palasari, terletak di Dusun Palasari, Desa Ekasari, Kecamatan Melaya, Kabupaten Jembrana, Bali Barat. Meski berada di wilayah mayoritas Hindu, gereja ini menjadi simbol kerukunan antarumat beragama yang kuat.",
    image: "/daerah/asset/bali/image.svg",
    imageMini: "/daerah/asset/bali/mini-image.svg"
  },
  Sulawesi: {
    name: "Makam Tandano",
    paragraph: "Makam Kyai Mojo terletak di Desa Wulauan, Kecamatan Tondano Utara, di atas bukit bernama Tondata, sekitar 1 km dari pusat kota Tondano. Dikelilingi pepohonan rindang dan suasana sunyi.",
    image: "/daerah/asset/sulawesi/image.svg",
    imageMini: "/daerah/asset/sulawesi/mini-image.svg"
  },
  Papua: {
    name: "Pulau Mansinan",
    paragraph: "Pulau ini menjadi titik awal masuknya kekristenan di Papua pada tahun 1855, saat dua misionaris Jerman, Carl Wilhelm Ottow dan Johann Gottlob Geissler mendarat dan mulai menyebarkan ajaran.",
    image: "/daerah/asset/papua/image.svg",
    imageMini: "/daerah/asset/papua/mini-image.svg"
  },
  NTT: {
    name: "Situs Laratunka",
    paragraph: "Larantuka adalah kota kecil di pesisir timur Pulau Flores yang menjadi pusat penyebaran agama Katolik sejak abad ke-16. Nama \"Larantuka\" diyakini berasal dari kata \"lara\" (penderitaan) dan \"tuka\" (penggantian), melambangkan pergulatan spiritual masyarakat lokal saat menerima ajaran baru dari misionaris Portugis.",
    image: "/daerah/asset/ntt/image.svg",
    imageMini: "/daerah/asset/ntt/mini-image.svg"
  },
  NTB: {
    name: "Taman Mayura",
    paragraph: "Taman Mayura dibangun pada tahun 1744 M oleh Raja A.A. Made Karangasem dari Kerajaan Bali yang berkuasa di Lombok saat itu. Pada tahun 1866, taman direnovasi dan diberi nama \"Mayura,\" yang berarti burung merak dalam bahasa Sanskerta. Nama ini dipilih karena merak dipercaya mampu mengusir ular yang sering muncul di taman.",
    image: "/daerah/asset/ntb/image.svg",
    imageMini: "/daerah/asset/ntb/mini-image.svg"
  },
}

// Mapping dari nama pulau ke tag yang diharapkan di Prismic
const islandToTagMap: Record<string, string> = {
  Sumatra: "Sumatra",
  Jawa: "Jawa",
  Kalimantan: "Kalimantan",
  Bali: "Bali",
  Sulawesi: "Sulawesi",
  Papua: "Papua",
  NTT: "NTT",
  NTB: "NTB",
}

const Situs = () => {
  const { selected } = useIsland()
  const [islandInfos, setIslandInfos] = useState<Record<string, IslandInfo>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUids = async () => {
      try {
        const client = createClient()
        const newIslandInfos: Record<string, IslandInfo> = {}
        
        // Ambil semua dokumen tipe "article"
        const allArticles = await client.getAllByType("article")
        console.log("All articles:", allArticles.map(a => ({ 
          uid: a.uid, 
          title: a.data.title, 
          tags: a.tags 
        })))
        
        // Ambil UID untuk setiap pulau
        for (const [island, tag] of Object.entries(islandToTagMap)) {
          try {
            console.log(`Looking for article with tag: ${tag}`)
            
            // Cari artikel yang sesuai berdasarkan tag
            const article = allArticles.find(doc => {
              // Periksa apakah dokumen memiliki tag yang sesuai
              return doc.tags && doc.tags.includes(tag)
            })
            
            if (article) {
              console.log(`Found article for ${island}:`, article.uid)
              const data = islandData[island]
              newIslandInfos[island] = new IslandInfo(
                data.name,
                data.paragraph,
                article.uid, // Gunakan UID dari Prismic
                data.image,
                data.imageMini
              )
            } else {
              console.warn(`No article found for ${island} with tag: ${tag}`)
              // Fallback jika dokumen tidak ditemukan
              const data = islandData[island]
              newIslandInfos[island] = new IslandInfo(
                data.name,
                data.paragraph,
                null, // UID null
                data.image,
                data.imageMini
              )
            }
          } catch (err) {
            console.error(`Error processing article for ${island}:`, err)
            // Fallback jika terjadi error
            const data = islandData[island]
            newIslandInfos[island] = new IslandInfo(
              data.name,
              data.paragraph,
              null, // UID null
              data.image,
              data.imageMini
            )
          }
        }
        
        setIslandInfos(newIslandInfos)
      } catch (err) {
        console.error("Error in fetchUids:", err)
        setError("Failed to load data from Prismic")
      } finally {
        setLoading(false)
      }
    }

    fetchUids()
  }, [])

  const info = selected && !loading ? islandInfos[selected] : undefined

  if (loading) {
    return (
      <section className="p-12 sm:p-24 bg-[#FAF4E1] flex justify-center items-center">
        <div>Loading...</div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="p-12 sm:p-24 bg-[#FAF4E1] flex justify-center items-center">
        <div>Error: {error}</div>
      </section>
    )
  }

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
            {info.name}
          </h1>
          <p className="text-lg sm:text-2xl text-muted-foreground text-justify lg:text-start">
            {info.paragraph}
          </p>
          <Button 
            asChild 
            className="bg-[#677059] hover:bg-[#354025] px-8 text-sm md:text-xl xl:text-2xl md:py-6" 
            disabled={!info.uid}
          >
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