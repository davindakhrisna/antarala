import { ChevronRight } from "lucide-react"
import CarouselSection from "./components/carousel-section"

const Menu = () => {
  return (
    <section className="min-h-screen bg-[#FAF4E1] p-8 md:p-16">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4 tracking-wide">JELAJAHI INDONESIA</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Ada apa aja sih di negara tercinta kita? Yuk jelajahi Indonesia bersama Antarala
          </p>

          <div className="flex items-center justify-left gap-2 text-xl md:text-4xl font-bold text-black">
            <span>Bentang makna Indonesia</span>
            <ChevronRight className="w-10 h-10 mt-2" />
          </div>
        </div>

        {/* Carousel Section */}
        <CarouselSection />
      </div>
    </section>
  )
}

export default Menu