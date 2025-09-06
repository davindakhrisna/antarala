"use client"

import { useIsland } from "@/components/daerah/island-context"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"

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
    <div className="min-h-screen px-6 flex flex-col-reverse xl:flex-row justify-center items-center h-full w-full gap-12 md:gap-24 xl:px-14">

      {/* Card */}
      <div>
        <Card className="max-w-lg w-fit py-10 sm:py-16 2xl:py-24 bg-[#FAF4E1] text-[#333E24] transform rotate-0 xl:rotate-12">
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

const Slide2 = ({ info }: { info: IslandInfo }) => {
  return (
    <div className="min-h-screen relative px-6 lg:py-24 flex flex-col-reverse xl:flex-row justify-center items-center h-full w-full gap-4">

      {/* Card 1 */}
      <div className="flex space-x-6 items-center">
        <Card className="max-w-md w-fit py-6 bg-[#FAF4E1] text-[#333E24] transform rotate-8">
          <CardContent className="space-y-8">
            <Image
              src="/daerah/asset/sumatra/image.svg"
              alt="Antarala"
              width={220}
              height={100}
              className="w-fit h-64"
              priority
            />
            <p className="text-lg font-bold text-center">{info.paragraphImg1}</p>
          </CardContent>
        </Card>

        <svg width="145" height="102" viewBox="0 0 145 102" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
          <path d="M87.5731 70.5L88.4255 65.5732L87.5731 70.5ZM145 78.5L98.3005 44.552L92.2505 101.969L145 78.5ZM3.96777 4L0.888642 7.93941C3.4511 9.94228 5.84488 11.8689 8.08256 13.7225L11.2722 9.87201L14.4618 6.02151C12.1476 4.10451 9.67996 2.11865 7.0469 0.06059L3.96777 4ZM25.1459 22.2582L21.6554 25.8382C26.9315 30.9824 30.7585 35.3728 33.6266 39.1339L37.6025 36.1021L41.5784 33.0703C38.3801 28.876 34.22 24.1223 28.6365 18.6783L25.1459 22.2582ZM47.1678 52.0357L42.6817 54.2437C44.0724 57.0693 45.5645 60.0284 48.063 62.6171C50.6378 65.2849 53.9565 67.2547 58.5938 68.9589L60.3185 64.2658L62.0433 59.5727C58.308 58.2 56.4609 56.9186 55.2583 55.6726C53.9793 54.3474 53.0823 52.7299 51.6538 49.8277L47.1678 52.0357ZM78.3464 68.8155L77.3916 73.7235C80.2131 74.2724 83.3123 74.8371 86.7207 75.4268L87.5731 70.5L88.4255 65.5732C85.0683 64.9924 82.0395 64.4403 79.3013 63.9076L78.3464 68.8155ZM87.5731 70.5L86.7207 75.4268C91.9896 76.3384 96.7699 77.1371 101.108 77.8376L101.905 72.9016L102.702 67.9655C98.4035 67.2714 93.6603 66.4789 88.4255 65.5732L87.5731 70.5Z" fill="#FAF4E1" />
        </svg>
      </div>



      {/* Card 2 */}
      <div className="flex items-center">
        <Card className="max-w-md w-fit py-6 bg-[#FAF4E1] text-[#333E24] transform -rotate-8">
          <CardContent className="space-y-8">
            <Image
              src="/daerah/asset/sumatra/image.svg"
              alt="Antarala"
              width={220}
              height={100}
              className="w-fit h-64"
              priority
            />
            <p className="text-lg font-bold text-center">{info.paragraphImg2}</p>
          </CardContent>
        </Card>

        <svg width="193" height="124" viewBox="0 0 193 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56.4342 41.265L54.5137 36.6485L56.4342 41.265ZM193.006 44.3286L154.883 0.97L136.395 55.6648L193.006 44.3286ZM5.00402 122.268L9.79572 123.696C10.7751 120.41 12.0432 116.552 13.5757 112.33L8.87583 110.624L4.17596 108.918C2.58256 113.307 1.25208 117.351 0.212322 120.84L5.00402 122.268ZM18.3573 87.9681L22.8684 90.1245C26.3089 82.927 30.2105 75.7486 34.4765 69.2618L30.2989 66.5145L26.1214 63.7671C21.5474 70.7222 17.4294 78.3157 13.8462 85.8117L18.3573 87.9681ZM46.1099 47.812L49.3498 51.6204C52.3762 49.0457 55.3879 47.1157 58.3547 45.8814L56.4342 41.265L54.5137 36.6485C50.3722 38.3714 46.4859 40.9277 42.8701 44.0037L46.1099 47.812ZM56.4342 41.265L58.3547 45.8814C62.0573 44.3411 65.6816 42.8921 69.2528 41.5501L67.4939 36.8697L65.7351 32.1893C62.0324 33.5807 58.298 35.0742 54.5137 36.6485L56.4342 41.265ZM90.1933 29.7773L91.3467 34.6425C98.8248 32.8695 106.265 31.7672 113.9 31.4986L113.725 26.5017L113.549 21.5047C105.168 21.7996 97.0696 23.0084 89.0398 24.9122L90.1933 29.7773ZM137.412 28.2328L136.53 33.1544C140.15 33.803 143.863 34.6456 147.688 35.6998L149.016 30.8795L150.345 26.0592C146.237 24.9271 142.226 24.0157 138.294 23.3112L137.412 28.2328ZM149.016 30.8795L147.688 35.6998C151.846 36.846 155.505 37.8696 158.74 38.7881L160.106 33.9783L161.472 29.1685C158.209 28.2419 154.525 27.2114 150.345 26.0592L149.016 30.8795Z" fill="#FAF4E1" />
        </svg>
      </div>



      {/* Card 3 */}
      <div>
        <Card className="max-w-md w-fit py-6 bg-[#FAF4E1] text-[#333E24] transform rotate-12">
          <CardContent className="space-y-8">
            <Image
              src="/daerah/asset/sumatra/image.svg"
              alt="Antarala"
              width={220}
              height={100}
              className="w-fit h-64"
              priority
            />
            <p className="text-lg font-bold text-center">{info.paragraphImg3}</p>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

const Slide3 = ({ info }: { info: IslandInfo }) => {
  return (
    <div className="min-h-screen relative px-6 lg:py-24 flex flex-col-reverse xl:flex-row justify-center items-center h-full w-full gap-4">

      {/*  Text */}
      <div className="flex space-x-6 items-center">
        <Card className="max-w-md w-fit py-6 bg-[#FAF4E1] text-[#333E24] transform rotate-8">
          <CardContent className="space-y-8">
            <Image
              src="/daerah/asset/sumatra/image.svg"
              alt="Antarala"
              width={220}
              height={100}
              className="w-fit h-64 filter brightness-0 invert border-2 border-[#333E24] rounded-2xl"
              priority
            />
            <p className="text-lg font-bold text-center">{info.paragraphImg1}</p>
          </CardContent>
        </Card>

        <svg width="145" height="102" viewBox="0 0 145 102" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
          <path d="M87.5731 70.5L88.4255 65.5732L87.5731 70.5ZM145 78.5L98.3005 44.552L92.2505 101.969L145 78.5ZM3.96777 4L0.888642 7.93941C3.4511 9.94228 5.84488 11.8689 8.08256 13.7225L11.2722 9.87201L14.4618 6.02151C12.1476 4.10451 9.67996 2.11865 7.0469 0.06059L3.96777 4ZM25.1459 22.2582L21.6554 25.8382C26.9315 30.9824 30.7585 35.3728 33.6266 39.1339L37.6025 36.1021L41.5784 33.0703C38.3801 28.876 34.22 24.1223 28.6365 18.6783L25.1459 22.2582ZM47.1678 52.0357L42.6817 54.2437C44.0724 57.0693 45.5645 60.0284 48.063 62.6171C50.6378 65.2849 53.9565 67.2547 58.5938 68.9589L60.3185 64.2658L62.0433 59.5727C58.308 58.2 56.4609 56.9186 55.2583 55.6726C53.9793 54.3474 53.0823 52.7299 51.6538 49.8277L47.1678 52.0357ZM78.3464 68.8155L77.3916 73.7235C80.2131 74.2724 83.3123 74.8371 86.7207 75.4268L87.5731 70.5L88.4255 65.5732C85.0683 64.9924 82.0395 64.4403 79.3013 63.9076L78.3464 68.8155ZM87.5731 70.5L86.7207 75.4268C91.9896 76.3384 96.7699 77.1371 101.108 77.8376L101.905 72.9016L102.702 67.9655C98.4035 67.2714 93.6603 66.4789 88.4255 65.5732L87.5731 70.5Z" fill="#FAF4E1" />
        </svg>
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
      <Slide2 info={info} />

    </section>
  ) : null
}

export default Slider
