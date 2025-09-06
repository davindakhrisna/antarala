"use client"

import { useIsland } from "@/components/daerah/island-context"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

class IslandInfo {
  cardName: string
  cardParagraph: string
  name: string
  paragraph: string

  image1: string
  paragraphImg1: string
  image2: string
  paragraphImg2: string
  image3: string
  paragraphImg3: string

  paragraphSlide: string

  constructor(cardName: string, cardParagraph: string, name: string, paragraph: string, image1: string, paragraphImg1: string, image2: string, paragraphImg2: string, image3: string, paragraphImg3: string, paragraphSlide: string) {
    this.cardName = cardName
    this.cardParagraph = cardParagraph
    this.name = name
    this.paragraph = paragraph
    this.image1 = image1
    this.paragraphImg1 = paragraphImg1
    this.image2 = image2
    this.paragraphImg2 = paragraphImg2
    this.image3 = image3
    this.paragraphImg3 = paragraphImg3
    this.paragraphSlide = paragraphSlide
  }
}

const islandInfos: Record<string, IslandInfo> = {
  Sumatra: new IslandInfo(
    "Pulau Sumatra",
    "Pulau Sumatra adalah bentang luas yang menyimpan denyut alam dan sejarah, dari kerajaan maritim hingga hutan tropis yang masih berbisik.",
    "SUMATRA",
    "Pulau Sumatra adalah pulau terbesar keenam di dunia dan terletak di sisi barat Indonesia, menghadap langsung ke Samudra Hindia. Dengan luas sekitar 473.481 km².",
    "/daerah/asset/sumatra/slide1.svg",
    "Istana Bung Hatta",
    "/daerah/asset/sumatra/slide2.svg",
    "Museum Negara Sumatra",
    "/daerah/asset/sumatra/slide3.svg",
    "Tjong A Fie Mansion",
    "Pulau Sumatra adalah ruang luas yang menjadi nadi barat Indonesia, menyatukan kekayaan alam, sejarah maritim, dan keberagaman budaya yang mendalam. Letaknya yang strategis di jalur Selat Malaka menjadikannya poros penting dalam pergerakan ekonomi dan budaya, menjembatani masa lalu dan masa kini dalam lanskap yang terus berubah."
  ),
  Jawa: new IslandInfo(
    "Pulau Sumatra",
    "Pulau Sumatra adalah bentang luas yang menyimpan denyut alam dan sejarah, dari kerajaan maritim hingga hutan tropis yang masih berbisik.",
    "Sumatra",
    "Pulau Sumatra adalah pulau terbesar keenam di dunia dan terletak di sisi barat Indonesia, menghadap langsung ke Samudra Hindia. Dengan luas sekitar 473.481 km².",
    "/daerah/asset/sumatra/slide1.svg",
    "Istana Bung Hatta",
    "/daerah/asset/sumatra/slide2.svg",
    "Museum Negara Sumatra",
    "/daerah/asset/sumatra/slide3.svg",
    "Tjong A Fie Mansion",
    "Pulau Sumatra adalah ruang luas yang menjadi nadi barat Indonesia, menyatukan kekayaan alam, sejarah maritim, dan keberagaman budaya yang mendalam. Letaknya yang strategis di jalur Selat Malaka menjadikannya poros penting dalam pergerakan ekonomi dan budaya, menjembatani masa lalu dan masa kini dalam lanskap yang terus berubah."

  ),
  Kalimantan: new IslandInfo(
    "Pulau Sumatra",
    "Pulau Sumatra adalah bentang luas yang menyimpan denyut alam dan sejarah, dari kerajaan maritim hingga hutan tropis yang masih berbisik.",
    "Sumatra",
    "Pulau Sumatra adalah pulau terbesar keenam di dunia dan terletak di sisi barat Indonesia, menghadap langsung ke Samudra Hindia. Dengan luas sekitar 473.481 km².",
    "/daerah/asset/sumatra/slide1.svg",
    "Istana Bung Hatta",
    "/daerah/asset/sumatra/slide2.svg",
    "Museum Negara Sumatra",
    "/daerah/asset/sumatra/slide3.svg",
    "Tjong A Fie Mansion",
    "Pulau Sumatra adalah ruang luas yang menjadi nadi barat Indonesia, menyatukan kekayaan alam, sejarah maritim, dan keberagaman budaya yang mendalam. Letaknya yang strategis di jalur Selat Malaka menjadikannya poros penting dalam pergerakan ekonomi dan budaya, menjembatani masa lalu dan masa kini dalam lanskap yang terus berubah."

  ),
  Bali: new IslandInfo(
    "Pulau Sumatra",
    "Pulau Sumatra adalah bentang luas yang menyimpan denyut alam dan sejarah, dari kerajaan maritim hingga hutan tropis yang masih berbisik.",
    "Sumatra",
    "Pulau Sumatra adalah pulau terbesar keenam di dunia dan terletak di sisi barat Indonesia, menghadap langsung ke Samudra Hindia. Dengan luas sekitar 473.481 km².",
    "/daerah/asset/sumatra/slide1.svg",
    "Istana Bung Hatta",
    "/daerah/asset/sumatra/slide2.svg",
    "Museum Negara Sumatra",
    "/daerah/asset/sumatra/slide3.svg",
    "Tjong A Fie Mansion",
    "Pulau Sumatra adalah ruang luas yang menjadi nadi barat Indonesia, menyatukan kekayaan alam, sejarah maritim, dan keberagaman budaya yang mendalam. Letaknya yang strategis di jalur Selat Malaka menjadikannya poros penting dalam pergerakan ekonomi dan budaya, menjembatani masa lalu dan masa kini dalam lanskap yang terus berubah."

  ),
  Sulawesi: new IslandInfo(
    "Pulau Sumatra",
    "Pulau Sumatra adalah bentang luas yang menyimpan denyut alam dan sejarah, dari kerajaan maritim hingga hutan tropis yang masih berbisik.",
    "Sumatra",
    "Pulau Sumatra adalah pulau terbesar keenam di dunia dan terletak di sisi barat Indonesia, menghadap langsung ke Samudra Hindia. Dengan luas sekitar 473.481 km².",
    "/daerah/asset/sumatra/slide1.svg",
    "Istana Bung Hatta",
    "/daerah/asset/sumatra/slide2.svg",
    "Museum Negara Sumatra",
    "/daerah/asset/sumatra/slide3.svg",
    "Tjong A Fie Mansion",
    "Pulau Sumatra adalah ruang luas yang menjadi nadi barat Indonesia, menyatukan kekayaan alam, sejarah maritim, dan keberagaman budaya yang mendalam. Letaknya yang strategis di jalur Selat Malaka menjadikannya poros penting dalam pergerakan ekonomi dan budaya, menjembatani masa lalu dan masa kini dalam lanskap yang terus berubah."

  ),
  Papua: new IslandInfo(
    "Pulau Sumatra",
    "Pulau Sumatra adalah bentang luas yang menyimpan denyut alam dan sejarah, dari kerajaan maritim hingga hutan tropis yang masih berbisik.",
    "Sumatra",
    "Pulau Sumatra adalah pulau terbesar keenam di dunia dan terletak di sisi barat Indonesia, menghadap langsung ke Samudra Hindia. Dengan luas sekitar 473.481 km².",
    "/daerah/asset/sumatra/slide1.svg",
    "Istana Bung Hatta",
    "/daerah/asset/sumatra/slide2.svg",
    "Museum Negara Sumatra",
    "/daerah/asset/sumatra/slide3.svg",
    "Tjong A Fie Mansion",
    "Pulau Sumatra adalah ruang luas yang menjadi nadi barat Indonesia, menyatukan kekayaan alam, sejarah maritim, dan keberagaman budaya yang mendalam. Letaknya yang strategis di jalur Selat Malaka menjadikannya poros penting dalam pergerakan ekonomi dan budaya, menjembatani masa lalu dan masa kini dalam lanskap yang terus berubah."

  ),
  NTT: new IslandInfo(
    "Pulau Sumatra",
    "Pulau Sumatra adalah bentang luas yang menyimpan denyut alam dan sejarah, dari kerajaan maritim hingga hutan tropis yang masih berbisik.",
    "Sumatra",
    "Pulau Sumatra adalah pulau terbesar keenam di dunia dan terletak di sisi barat Indonesia, menghadap langsung ke Samudra Hindia. Dengan luas sekitar 473.481 km².",
    "/daerah/asset/sumatra/slide1.svg",
    "Istana Bung Hatta",
    "/daerah/asset/sumatra/slide2.svg",
    "Museum Negara Sumatra",
    "/daerah/asset/sumatra/slide3.svg",
    "Tjong A Fie Mansion",
    "Pulau Sumatra adalah ruang luas yang menjadi nadi barat Indonesia, menyatukan kekayaan alam, sejarah maritim, dan keberagaman budaya yang mendalam. Letaknya yang strategis di jalur Selat Malaka menjadikannya poros penting dalam pergerakan ekonomi dan budaya, menjembatani masa lalu dan masa kini dalam lanskap yang terus berubah."

  ),
  NTB: new IslandInfo(
    "Pulau Sumatra",
    "Pulau Sumatra adalah bentang luas yang menyimpan denyut alam dan sejarah, dari kerajaan maritim hingga hutan tropis yang masih berbisik.",
    "Sumatra",
    "Pulau Sumatra adalah pulau terbesar keenam di dunia dan terletak di sisi barat Indonesia, menghadap langsung ke Samudra Hindia. Dengan luas sekitar 473.481 km².",
    "/daerah/asset/sumatra/slide1.svg",
    "Istana Bung Hatta",
    "/daerah/asset/sumatra/slide2.svg",
    "Museum Negara Sumatra",
    "/daerah/asset/sumatra/slide3.svg",
    "Tjong A Fie Mansion",
    "Pulau Sumatra adalah ruang luas yang menjadi nadi barat Indonesia, menyatukan kekayaan alam, sejarah maritim, dan keberagaman budaya yang mendalam. Letaknya yang strategis di jalur Selat Malaka menjadikannya poros penting dalam pergerakan ekonomi dan budaya, menjembatani masa lalu dan masa kini dalam lanskap yang terus berubah."

  ),
}

const Slide1 = ({ info }: { info: IslandInfo }) => {
  return (
      <div className="min-h-screen px-6 flex flex-col-reverse xl:flex-row justify-center items-center h-full w-full gap-12 md:gap-24">

        {/* Card */}
        <div>
        <Card className="max-w-lg w-full py-10 sm:py-16 xl:py-24 bg-[#FAF4E1] text-[#333E24] transform rotate-0 xl:rotate-12">
          <CardContent className="space-y-8">
            <h1 className="text-3xl lg:text-5xl font-bold underline">{info.cardName}</h1>
            <p className="text-lg lg:text-2xl">{info.cardParagraph}</p>
          </CardContent>
        </Card>
        </div>
        

        {/* Text */}
        <div className="max-w-2xl text-[#FAF4E1] space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold">{info.name}</h1>
          <p className="text-lg lg:text-2xl">{info.paragraph}</p>
        </div>

      </div>
  )
}

const Slider = () => {
  const { selected } = useIsland()
  const info = selected ? islandInfos[selected] : undefined
  return info ? (
    <section id="slider" className="min-h-screen bg-[#333E24]">

      {/* 1 */}
      <Slide1 info={info} />

    </section>
  ) : null
}

export default Slider
