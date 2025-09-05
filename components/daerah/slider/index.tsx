
import { useIsland } from "@/components/daerah/island-context"

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

const Slider = () => {
  return (
    <div className="min-h-screen bg-[#333E24]">test</div>
  )
}

export default Slider
