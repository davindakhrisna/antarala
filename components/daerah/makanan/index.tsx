"use client"
import { Button } from "@/components/ui/button"
import { useIsland } from "@/components/daerah/island-context"
import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { createClient } from "@/prismicio"

// Ubah class IslandInfo untuk menerima UID dan section yang dinamis
class IslandInfo {
  name: string
  paragraph: string
  image: string
  uid: string | null
  section: string
  constructor(name: string, paragraph: string, image: string, uid: string | null, section: string = "makanan") {
    this.name = name
    this.paragraph = paragraph
    this.image = image
    this.uid = uid
    this.section = section
  }
  
  // Getter untuk link yang dinamis dengan anchor
  get link() {
    return this.uid ? `/bacaan/${this.uid}#${this.section}` : "#";
  }
}

// Data statis untuk setiap pulau, tanpa UID
const islandData: Record<string, { name: string; paragraph: string; image: string }> = {
  Sumatra: {
    name: "Kue Asidah",
    paragraph: "Kue Asidah berasal dari pengaruh kuliner Timur Tengah, khususnya kue asida, yang kemudian diadaptasi oleh masyarakat Melayu Riau. Dahulu, kue ini disajikan khusus untuk para raja di Indragiri.",
    image: "/daerah/asset/sumatra/makanan.svg"
  },
  Jawa: {
    name: "Sate Karak",
    paragraph: "Sate Karak adalah makanan khas Surabaya yang sederhana, hidangan ini menggunakan ketan hitam sebagai bahan utama, disajikan dengan karak (kerupuk nasi kering), serundeng kelapa, dan taburan kacang tumbuk.",
    image: "/daerah/asset/jawa/makanan.svg"
  },
  Kalimantan: {
    name: "Mandai",
    paragraph: "Mandai adalah makanan tradisional khas Kalimantan Selatan dan Kalimantan Tengah, terutama dari masyarakat Banjar dan Dayak, yang terbuat dari kulit buah cempedak yang difermentasi.",
    image: "/daerah/asset/kalimantan/makanan.svg"
  },
  Bali: {
    name: "Rujak Bulung",
    paragraph: "Rujak Bulung adalah rujak khas Bali yang menggunakan rumput laut segar sebagai bahan utama, bukan buah-buahan seperti rujak pada umumnya. Hidangan ini berasal dari pesisir Bali, terutama daerah Jembrana dan Pantai Serangan, dan menjadi camilan favorit masyarakat lokal.",
    image: "/daerah/asset/bali/makanan.svg"
  },
  Sulawesi: {
    name: "Kasuami",
    paragraph: "Kasuami (juga disebut Kasoami, Soami, atau Katula) adalah makanan pokok masyarakat Buton, Muna, dan Wakatobi yang terbuat dari singkong parut yang dikukus. Di daerah kepulauan yang sulit menanam padi, kasuami menjadi pengganti nasi yang tahan lama dan mudah dibawa bepergian.",
    image: "/daerah/asset/sulawesi/makanan.svg"
  },
  Papua: {
    name: "Aunu Senebre",
    paragraph: "Aunu Senebre adalah makanan tradisional dari pesisir Papua Selatan, terutama dikenal di wilayah Biak dan sekitarnya. Hidangan ini terdiri dari ikan teri nasi yang digoreng, lalu dicampur dengan parutan kelapa dan irisan daun talas, kemudian dikukus hingga matang.",
    image: "/daerah/asset/papua/makanan.svg"
  },
  NTT: {
    name: "Rumpu Rampe",
    paragraph: "Rumpu Rampe adalah hidangan sayur khas NTT yang terdiri dari beragam sayuran lokal seperti daun pepaya, bunga pepaya, daun kelor, jantung pisang, daun singkong, dan buah pepaya muda.",
    image: "/daerah/asset/ntt/makanan.svg"
  },
  NTB: {
    name: "Ayam Rarang",
    paragraph: "Ayam Rarang adalah hidangan khas suku Sasak yang berasal dari Desa Rarang, Kecamatan Sakra Timur, Lombok Timur. Diperkenalkan oleh Inaq Dellah pada tahun 1976 melalui rumah makan legendarisnya.",
    image: "/daerah/asset/ntb/makanan.svg"
  },
}

// Mapping dari nama pulau ke nama makanan yang diharapkan di Prismic
const islandToFoodNameMap: Record<string, string> = {
  Sumatra: "Kue Asidah",
  Jawa: "Sate Karak",
  Kalimantan: "Mandai",
  Bali: "Rujak Bulung",
  Sulawesi: "Kasuami",
  Papua: "Aunu Senebre",
  NTT: "Rumpu Rampe",
  NTB: "Ayam Rarang",
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
          title_makanan: a.data.title_makanan,
          tags: a.tags 
        })))
        
        // Ambil UID untuk setiap pulau
        for (const [island, foodName] of Object.entries(islandToFoodNameMap)) {
          try {
            console.log(`Looking for article with title_makanan: ${foodName}`)
            
            // Cari artikel yang sesuai berdasarkan title_makanan dan tag
            const article = allArticles.find(doc => {
              // Periksa apakah dokumen memiliki tag yang sesuai
              const hasCorrectTag = doc.tags && doc.tags.includes(islandToTagMap[island])
              
              // Akses field title_makanan dengan tipe Rich Text
              const titleText = doc.data.title_makanan?.[0]?.text || ""
              const hasCorrectTitle = titleText.toLowerCase() === foodName.toLowerCase()
              
              return hasCorrectTag && hasCorrectTitle
            })
            
            if (article) {
              console.log(`Found article for ${island}:`, article.uid)
              const data = islandData[island]
              newIslandInfos[island] = new IslandInfo(
                data.name,
                data.paragraph,
                data.image,
                article.uid, // Gunakan UID dari Prismic
                "makanan" // Tambahkan section untuk makanan
              )
            } else {
              console.warn(`No article found for ${island} with title_makanan: ${foodName}`)
              // Fallback jika dokumen tidak ditemukan
              const data = islandData[island]
              newIslandInfos[island] = new IslandInfo(
                data.name,
                data.paragraph,
                data.image,
                null, // UID null
                "makanan" // Tetap tambahkan section meskipun UID null
              )
            }
          } catch (err) {
            console.error(`Error processing article for ${island}:`, err)
            // Fallback jika terjadi error
            const data = islandData[island]
            newIslandInfos[island] = new IslandInfo(
              data.name,
              data.paragraph,
              data.image,
              null, // UID null
              "makanan" // Tetap tambahkan section meskipun UID null
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
      <section className="p-12 sm:p-24 bg-[#F2EDDA] flex justify-center items-center">
        <div>Loading...</div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="p-12 sm:p-24 bg-[#F2EDDA] flex justify-center items-center">
        <div>Error: {error}</div>
      </section>
    )
  }

  return info ? (
    <section id="makanan" className="p-8 py-32 md:p-16 lg:p-24 bg-[#F2EDDA] text-[#676F59] relative xl:p-32 flex flex-col-reverse xl:flex-row-reverse items-center justify-center xl:gap-16">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="w-full xl:flex-1 min-w-0 px-8 lg:px-0 lg:max-w-3xl xl:max-w-lg 2xl:max-w-3xl pt-64 xl:pt-0"
      >
        <h1 className="text-4xl xl:text-5xl 2xl:text-7xl font-bold text-center sm:text-justify">{info.name}</h1>
        <p className="mt-4 text-md md:text-xl text-justify">{info.paragraph}</p>
        <Button 
          asChild 
          className="mt-8 bg-[#677059] hover:bg-[#354025] px-8 text-sm md:text-xl xl:text-2xl md:py-6" 
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
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full xl:w-5/12 absolute xl:relative top-0 h-[200px] lg:h-[300px] xl:h-[400px]"
      >
        <div className="h-full relative overflow-hidden xl:rounded-2xl">
          <div className="absolute inset-0">
            <Image
              src={info.image}
              alt={info.name}
              fill
              sizes="(min-width: 1280px) 50vw, 100vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  ) : null
}

export default Situs