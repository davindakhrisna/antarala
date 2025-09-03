import Image from "next/image"
import { Card } from "@/components/ui/card";

interface ArtikelProps {
  imageSitus: string;
  titleSitus: string;
  paragraphSitus: string;
  imageTradisi: string;
  imageTradisi2: string;
  titleTradisi: string;
  paragraphTradisi: string;
  imageMakanan: string;
  titleMakanan: string;
  paragraphMakanan: string;
}

const Artikel = ({
  imageSitus,
  titleSitus,
  paragraphSitus,
  imageTradisi,
  imageTradisi2,
  titleTradisi,
  paragraphTradisi,
  imageMakanan,
  titleMakanan,
  paragraphMakanan,
}: ArtikelProps) => {
  return (
    <section className="w-full overflow-x-hidden">

      {/* Situs */}
      <div className="p-8 py-32 md:p-16 lg:p-24 bg-[#F2EDDA] text-[#676F59] xl:p-32 flex flex-col-reverse xl:flex-row items-center justify-center xl:gap-16">

        <div className="w-full xl:flex-1 min-w-0 px-8 lg:px-0 lg:max-w-3xl xl:max-w-lg 2xl:max-w-3xl pt-12 xl:pt-0">
          <h1 className="text-4xl xl:text-5xl 2xl:text-7xl font-bold text-center sm:text-justify">{titleSitus}</h1>
          <p className="mt-4 text-md md:text-xl text-justify">{paragraphSitus}</p>
        </div>

        <div className="w-full xl:flex-1 min-w-0 h-64 xl:h-96 relative overflow-hidden rounded-2xl">
          <Image
            src={imageSitus}
            alt={titleSitus}
            fill
            sizes="(min-width: 1280px) 50vw, 100vw"
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Tradisi */}
      <div className="text-[#F2EDDA] p-8 py-32 md:p-16 min-h-screen relative gap-16 lg:p-24 bg-[#242D17] xl:p-32 flex flex-col items-center justify-center">
        <div className="w-full h-64 xl:h-96 absolute inset-0 xl:relative xl:inset-auto xl:rounded-2xl">
          <Image
            src={imageTradisi}
            alt={titleTradisi}
            fill
            sizes="(max-width: 1280px)"
            className="object-cover blur-xl xl:blur-none object-center xl:rounded-2xl"
            priority
          />
        </div>

        <div className="flex flex-col xl:flex-row-reverse items-center justify-center w-full xl:w-auto gap-16">

          <div className="w-full xl:w-5/12 h-[300px] lg:h-[400px] xl:h-[500px]">
            <div className="h-full relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0">
                <Image
                  src={imageTradisi2}
                  alt={titleTradisi}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="w-full xl:w-8/12 min-w-0">
            <div className="px-8 lg:px-0">
              <h1 className="text-4xl xl:text-5xl 2xl:text-7xl font-bold text-center sm:text-justify">{titleTradisi}</h1>
              <p className="mt-4 text-md md:text-xl text-justify">{paragraphTradisi}</p>
            </div>
          </div>

        </div>
      </div>

      {/* Makanan */}
      <div className="p-8 py-32 md:p-16 lg:p-24 bg-[#F2EDDA] text-[#676F59] relative xl:p-32 flex flex-col-reverse xl:flex-row-reverse items-center justify-center xl:gap-16">

        <div className="w-full xl:flex-1 min-w-0 px-8 lg:px-0 lg:max-w-3xl xl:max-w-lg 2xl:max-w-3xl pt-64 xl:pt-0">
          <h1 className="text-4xl xl:text-5xl 2xl:text-7xl font-bold text-center sm:text-justify">{titleMakanan}</h1>
          <p className="mt-4 text-md md:text-xl text-justify">{paragraphMakanan}</p>
        </div>

        <div className="w-full xl:w-5/12 absolute xl:relative top-0 h-[200px] lg:h-[300px] xl:h-[400px]">
          <div className="h-full relative overflow-hidden xl:rounded-2xl">
            <div className="absolute inset-0">
              <Image
                src={imageMakanan}
                alt={titleMakanan}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Artikel
