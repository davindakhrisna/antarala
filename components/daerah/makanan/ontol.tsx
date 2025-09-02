
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
