"use client"

import { useIsland } from "@/components/daerah/island-context"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

class IslandInfo {
  name: string
  paragraphName: string
  paragraph: string
  paragraph2: string
  paragraph3: string
  image: string
  image2: string
  image3: string


  constructor(name: string, paragraphName: string, paragraph: string, paragraph2: string, paragraph3: string, image: string, image2: string, image3: string) {
    this.name = name
    this.paragraphName = paragraphName
    this.paragraph = paragraph
    this.paragraph2 = paragraph2
    this.paragraph3 = paragraph3
    this.image = image
    this.image2 = image2
    this.image3 = image3
  }
}

const islandInfos: Record<string, IslandInfo> = {
  Sumatra: new IslandInfo(
    "Pacu Jawi",
    "Adalah tradisi perlombaan sapi yang dilakukan di sawah berlumpur setelah musim panen.",
    "Tradisi ini telah berlangsung selama berabad-abad di Kabupaten Tanah Datar, khususnya di empat kecamatan: Pariangan, Rambatan, Lima Kaum, dan Sungai Tarab.",
    "Yang dinilai bukan kecepatan, melainkan kelurusan lari sapi, jika sapi bisa diarahkan lurus di medan berlumpur, maka manusia pun harus bisa berjalan lurus dalam hidup.",
    "Sepasang sapi berlari tanpa lawan tanding, dikendalikan oleh seorang joki yang berdiri di atas alat kayu menyerupai bajak sambil memegang ekor sapi.",
    "/daerah/asset/sumatra/1.svg",
    "/daerah/asset/sumatra/2.svg",
    "/daerah/asset/sumatra/3.svg",
  ),
  Jawa: new IslandInfo(
    "Wayang Kulit",
    "Wayang kulit adalah salah satu bentuk seni pertunjukan tertua dan paling khas di Indonesia, terutama di Jawa.",
    "Tarian perang dalam pertunjukan wayang kulit merupakan representasi visual dari duel atau konflik antar tokoh yang sedang berseteru. Biasanya tarian ini muncul dalam lakon-lakon besar seperti Mahabharata atau Ramayana.",
    "Wayang kulit bukan hanya seni pertunjukan, tapi warisan budaya yang telah diakui dunia. Pada tahun 2008, UNESCO menetapkan kesenian wayang sebagai Warisan Budaya Tak Benda milik Indonesia.",
    "Dalang adalah tokoh utama dalam pertunjukan wayang kulit. Ia menggerakkan tokoh, mengisi suara, dan menyampaikan cerita dengan iringan gamelan.",
    "/daerah/asset/jawa/1.svg",
    "/daerah/asset/jawa/2.svg",
    "/daerah/asset/jawa/3.svg",
  ),
  Kalimantan: new IslandInfo(
    "Tari Hudoq",
    "Merupakan bentuk komunikasi antara manusia dan roh leluhur, roh pelindung, serta roh hama yang diyakini memengaruhi hasil pertanian.",
    "Nama Hudoq berasal dari istilah lokal yang berarti “menjelma.”",
    "Salah satu mitos asal-usul Tari Hudoq berasal dari kisah Halaeng Heboung, putra Raja Hajaeng dari Kampung Laham Kejin. Dalam pencarian mandau yang hilang, ia bertemu makhluk gaib Selo Sen Yaeng, menikahinya, dan mengadakan pertunjukan bersama roh-roh gaib.",
    "Ciri khas utama Tari Hudoq adalah penggunaan topeng kayu berbentuk binatang, manusia, dan makhluk gaib. Kostum penari terbuat dari daun pisang dan kulit kayu, melambangkan kesuburan dan kesejukan alam.",
    "/daerah/asset/kalimantan/1.svg",
    "/daerah/asset/kalimantan/2.svg",
    "/daerah/asset/kalimantan/3.svg",
  ),
  Bali: new IslandInfo(
    "Mekare-Kare",
    "Dalam ritual ini, para lelaki bertarung satu lawan satu menggunakan pandan berduri sebagai senjata dan tameng anyaman rotan sebagai pelindung.",
    "Mekare-Kare bukan sekadar pertarungan fisik, melainkan ritus penghormatan kepada Dewa Indra, dewa perang dan pelindung umat manusia.",
    "Tradisi ini merupakan bagian dari upacara Ngusaba Sambah, yang digelar setiap tahun oleh masyarakat Bali Aga (Bali asli).",
    "Mekare-Kare adalah ruang pembentukan karakter dan solidaritas. Ia mengajarkan bahwa rasa sakit bukan untuk dendam, tapi untuk pengabdian.",
    "/daerah/asset/bali/1.svg",
    "/daerah/asset/bali/2.svg",
    "/daerah/asset/bali/3.svg",
  ),
  Sulawesi: new IslandInfo(
    "Ma’nene",
    "Ritual membersihkan dan mengganti pakaian jenazah leluhur yang telah menjadi mumi.",
    "Tradisi ini diperkirakan telah berlangsung sejak abad ke-9, berakar dari kepercayaan Aluk Todolo (jalan leluhur), sistem spiritual asli Toraja.",
    "Ma’nene’ berasal dari kata dalam bahasa Toraja yang berarti “merawat” atau “membungkus kembali.”",
    "Tradisi ini adalah ritual penghormatan kepada leluhur dengan cara mengeluarkan jenazah dari makam, membersihkannya, mengganti pakaiannya, dan mengadakan doa serta jamuan keluarga.",
    "/daerah/asset/sulawesi/1.svg",
    "/daerah/asset/sulawesi/2.svg",
    "/daerah/asset/sulawesi/3.svg",
  ),
  Papua: new IslandInfo(
    "Iki Palek",
    "Iki Palek adalah tradisi memotong ruas jari sebagai bentuk ungkapan duka mendalam atas kehilangan anggota keluarga.",
    "Iki Palek bukan sekadar ritual ekstrem, tapi arsip emosional yang menyimpan cara pandang masyarakat Papua tentang kesedihan, cinta, dan pengorbanan.",
    "Jari tangan dianggap sebagai simbol kesatuan, harmoni, dan kekuatan keluarga.",
    "Potongan jari menjadi penanda jumlah anggota keluarga yang telah meninggal, dan bentuk kesetiaan spiritual terhadap mereka.",
    "/daerah/asset/papua/1.svg",
    "/daerah/asset/papua/2.svg",
    "/daerah/asset/papua/3.svg",
  ),
  NTT: new IslandInfo(
    "Tradisi Lamakera",
    "Kegiatan berburu paus dan pari secara tradisional yang dilakukan oleh masyarakat di Desa Lamakera, Pulau Lembata, Nusa Tenggara Timur.",
    "Tradisi Lamakera adalah warisan maritim yang hidup di pesisir timur Pulau Solor, Nusa Tenggara Timur, di mana laut bukan sekadar sumber penghidupan, melainkan ruang spiritual dan identitas kolektif.",
    "Daging hasil buruan dibagi - bagikan kepada seluruh masyarakat kampung dan juga diperdagangkan di pasar tradisional untuk mendapatkan kebutuhan pokok lainnya.",
    "Tradisi ini dilakukan secara turun-temurun dengan menggunakan alat tradisional seperti tombak dan tempuling, serta mengikuti aturan adat yang ketat untuk menjaga kelestarian dan keberlanjutan.",
    "/daerah/asset/ntt/1.svg",
    "/daerah/asset/ntt/2.svg",
    "/daerah/asset/ntt/3.svg",
  ),
  NTB: new IslandInfo(
    "Presean",
    "Tradisi duel antara dua pria menggunakan rotan dan tameng, dilakukan sebagai simbol keberanian dan pengendalian emosi.",
    "Presean adalah tradisi bela diri adat khas suku Sasak di Lombok, Nusa Tenggara Barat, yang menyatukan keberanian, kendali emosi, dan nilai persaudaraan dalam satu arena.",
    "Presean adalah arsip hidup tentang keberanian, kendali emosi, dan solidaritas komunitas. Ia mengajarkan bahwa kekuatan sejati bukan pada pukulan, tapi pada kemampuan untuk menghormati lawan dan menjaga martabat diri.",
    "Pertarungan dipimpin oleh pakembar, semacam wasit adat yang menjaga etika dan batas emosi.",
    "/daerah/asset/ntb/1.svg",
    "/daerah/asset/ntb/2.svg",
    "/daerah/asset/ntb/3.svg",
  ),
}

const Budaya = () => {
  const { selected } = useIsland()
  const info = selected ? islandInfos[selected] : undefined

  return info ? (
    <section className="p-0 bg-[#FAF4E1]">
      <div className="hidden lg:grid  grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 lg:gap-6 ">

        {/* 1 */}
        <div className="hidden rounded-r-2xl md:flex relative overflow-hidden items-end py-6">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={info.image}
              alt={info.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <CardFooter className="relative z-10 text-[#F4EEDC]">
            <p className="text-lg p-4">{info.paragraph}</p>
          </CardFooter>
        </div>

        {/* 2 */}
        <div>

          <Card className="h-86 flex mb-4 p-4 justify-center bg-gradient-to-tr from-[#403024] to-[#8F582F] text-[#F4EEDC]">
            <CardHeader>
              <h1 className="text-2xl sm:text-5xl xl:text-6xl font-bold">{info.name}</h1>
            </CardHeader>
            <CardFooter>
              <p className="text-lg">{info.paragraphName}</p>
            </CardFooter>
          </Card>

          <Card className="flex md:hidden relative overflow-hidden justify-end">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={info.image}
                alt={info.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <CardFooter className="relative z-10 text-[#F4EEDC]">
              <p className="text-lg p-4">{info.paragraph}</p>
            </CardFooter>
          </Card>

          <Card className="relative lg:h-96 overflow-hidden flex justify-end">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={info.image2}
                alt={info.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
              <div className="backdrop-blur-sm absolute h-full w-full"></div>
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <CardFooter className="relative z-10 text-[#F4EEDC]">
              <p className="text-lg p-4">{info.paragraph2}</p>
            </CardFooter>
          </Card>

          <Card className="md:hidden relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={info.image3}
                alt={info.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <CardFooter className="relative z-10 text-[#F4EEDC]">
              <p className="text-lg p-4">{info.paragraph3}</p>
            </CardFooter>
          </Card>
        </div>

        {/* 3 */}
        <div className="rounded-l-2xl hidden md:flex relative overflow-hidden items-end py-6">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={info.image3}
              alt={info.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <CardFooter className="relative z-10 text-[#F4EEDC]">
            <p className="text-lg p-4">{info.paragraph3}</p>
          </CardFooter>
        </div>

      </div>

      <div className="lg:hidden flex-col w-full justify-center items-center">

        <div className="py-12 w-full px-18 flex flex-col justify-center bg-gradient-to-tr from-[#403024] to-[#8F582F] text-[#F4EEDC]">
          <CardHeader>
            <h1 className="text-2xl sm:text-5xl xl:text-6xl font-bold">{info.name}</h1>
          </CardHeader>
          <CardContent>
            <p className="text-md sm:text-xl">{info.paragraphName}</p>
          </CardContent>
        </div>

        <div className="py-8 w-full px-18 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={info.image2}
              alt={info.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute backdrop-blur-sm inset-0 bg-black/40" />
          </div>
          <CardFooter className="relative z-10 text-[#F4EEDC]">
            <p className="text-md sm:text-xl">{info.paragraph2}</p>
          </CardFooter>
        </div>

        <div className="py-8 w-full px-18 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={info.image}
              alt={info.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute backdrop-blur-sm inset-0 bg-black/40" />
          </div>
          <CardFooter className="relative z-10 text-[#F4EEDC]">
            <p className="text-md sm:text-xl">{info.paragraph}</p>
          </CardFooter>
        </div>

        <div className="py-8 w-full px-18 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={info.image3}
              alt={info.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute backdrop-blur-sm inset-0 bg-black/40" />
          </div>
          <CardFooter className="relative z-10 text-[#F4EEDC]">
            <p className="text-md sm:text-xl">{info.paragraph3}</p>
          </CardFooter>
        </div>


      </div>
    </section >
  ) : null
}

export default Budaya
