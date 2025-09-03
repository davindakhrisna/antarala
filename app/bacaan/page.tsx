// app/page.tsx or app/article/page.tsx

import Image from 'next/image';

const Page1 = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#f5f5f5] py-6 px-4 md:px-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#333] mb-2">
            Gereja Palasari
          </h1>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Gereja Palasari, atau secara resmi dikenal sebagai Gereja Hati Kudus Paskah, adalah bangunan ibadah Katolik yang berada di Desa Palasari, Desa Elastar, Kecamatan Melayu, Kabupaten Jembrana, Bali Barat. Gereja ini merupakan hasil ekulturatif yang lebih antara arsitektur Papua, bergaya gothic dan estetika tradisional Bali. Dirancang oleh Pastor Simon Bui SVD, seorang tokoh yang sangat terkenal dalam dunia arsitektur religi di Indonesia, gereja ini mulai dibangun pada tahun 1958 oleh tokoh Haji Aibek O.Corn.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
        {/* First Section - Makare-kare */}
        <div className="mb-12">
          <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/homepage/hero/hero.png"
              alt="Makare-kare"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#333] mb-4">
              Makare-kare
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Makare-kare, atau yang lebih dikenal sebagai Inerang Iwakan, adalah ritual adat khas Desa Tampuan, Payunggangan, Kabupaten Kuningan, Bali Timur. Macam ini merupakan bagian dari rangkaian Sash Sentuh, yaitu perayaan keagamaan beberapa hari setelah upacara ngelaw srikan tuhan pada bulan sabtu dalam kalender lokal Tampuan, biasanya jatuh sekitar bulan Juni. Tradisi ini dilakukan sebagai bentuk penghormatan kepada Dewa Indra, dewa penguasa dalam kepercayaan Hindu. Dalam pelaksanaannya, para pria, baik yang masih muda maupun sudah tua, harus membawa alat-alat seperti keris, sarung, serta lainnya. Ritual ini juga melibatkan tarian-tarian tradisional yang penuh makna.
            </p>
          </div>
        </div>

        {/* Second Section - Rujak Bulung */}
        <div className="mb-12">
          <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/homepage/hero/hero.png"
              alt="Rujak Bulung"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#333] mb-4">
              Rujak Bulung
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Rujak Bulung adalah kuliner khas Bali yang menyegarkan dan terbuat dari bahan utama berupa bulung (tumpul laut). Minuman ini memiliki rasa yang unik karena campuran antara manis, asam, dan pedas. Rujak Bulung ini biasanya disajikan dengan tambahan irisan buah-buahan segar seperti mangga, jeruk, nanas, dan terkadang ditambahkan serutan kelapa muda. Minuman ini sangat populer di tengah-tengah masyarakat Bali, terutama saat musim panas tiba. Selain rasanya yang segar, Rujak Bulung juga dikenal sebagai minuman yang mengandung banyak nutrisi dan sangat baik untuk kesehatan tubuh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1
