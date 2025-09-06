"use client"

import { motion, useTransform, useScroll, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
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
    "Pulau Jawa",
    "Pulau Jawa adalah ruang padat yang menyimpan jejak peradaban, dari kerajaan tua hingga kota-kota yang terus tumbuh.",
    "Jawa",
    "Pulau Jawa terletak di bagian selatan Indonesia, membentang dari barat ke timur di antara Selat Sunda dan Selat Bali. Di utara berbatasan dengan Laut Jawa, sementara di selatan menghadap langsung ke Samudra Hindia.",
    "/daerah/asset/jawa/slide1.svg",
    "Candi Prambanan",
    "/daerah/asset/jawa/slide2.svg",
    "Gunung Bromo",
    "/daerah/asset/jawa/slide3.svg",
    "Pantai Pangandaran",
    "Pulau Jawa adalah pusat kehidupan Indonesia yang menyatukan sejarah panjang, budaya yang beragam, dan dinamika sosial yang terus bergerak. Letaknya yang strategis menjadikannya episentrum pemerintahan, ekonomi, dan pendidikan sejak masa kerajaan hingga era modern."
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

const Example = () => {
  const { selected } = useIsland()
  const info = selected ? islandInfos[selected] : undefined
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!info) {
    return null;
  }

  if (!isMounted) {
    return (
      <div className="bg-[#333E24] h-[250vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="flex h-screen">
            {/* Static version for SSR */}
            <div className="w-screen h-screen flex flex-col-reverse xl:flex-row justify-center items-center px-4 sm:px-6 lg:px-8 xl:px-14 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
                <Card className="w-full py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24 bg-[#FAF4E1] text-[#333E24] transform rotate-0 xl:rotate-2 shadow-2xl">
                  <CardContent className="space-y-4 sm:space-y-6 lg:space-y-8 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold underline leading-tight">{info.cardName}</h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">{info.cardParagraph}</p>
                  </CardContent>
                </Card>
              </div>
              <div className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl xl:max-w-3xl text-[#FAF4E1] space-y-4 sm:space-y-6 lg:space-y-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight">{info.name}</h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">{info.paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#333E24]">
      <HorizontalScrollCarousel info={info} />
    </div>
  );
};

const HorizontalScrollCarousel = ({ info }: { info: IslandInfo }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  
  // Individual slide refs for animations
  const slide1Ref = useRef(null);
  const slide2Ref = useRef(null);
  const slide3Ref = useRef(null);
  
  // Check if slides are in view
  const slide1InView = useInView(slide1Ref, { once: true, margin: "-100px" });
  const slide2InView = useInView(slide2Ref, { once: true, margin: "-100px" });
  const slide3InView = useInView(slide3Ref, { once: true, margin: "-100px" });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-67%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-[#333E24]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex sticky top-0 h-screen">

          {/* 1 */}
          <div ref={slide1Ref} className="w-screen h-screen flex flex-col-reverse xl:flex-row justify-center items-center px-4 sm:px-6 lg:px-8 xl:px-14 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotate: 0, scale: 0.8 }}
              animate={slide1InView ? { opacity: 1, x: 0, rotate: 12, scale: 1 } : { opacity: 0, x: -100, rotate: 0, scale: 0.8 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl"
            >
              <Card className="w-full py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24 bg-[#FAF4E1] text-[#333E24] transform rotate-0 xl:rotate-2 shadow-2xl">
                <CardContent className="space-y-4 sm:space-y-6 lg:space-y-8 px-4 sm:px-6 lg:px-8">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold underline leading-tight">{info.cardName}</h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">{info.cardParagraph}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Text */}
            <motion.div
              className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl xl:max-w-3xl text-[#FAF4E1] space-y-4 sm:space-y-6 lg:space-y-8"
              initial={{ opacity: 0, x: 100, y: 50 }}
              animate={slide1InView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 100, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight">{info.name}</h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">{info.paragraph}</p>
            </motion.div>

          </div>

          {/* 2 */}
          <div ref={slide2Ref} className="w-screen h-screen relative px-4 sm:px-6 lg:px-8 flex flex-col xl:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8">

            {/* Card 1 */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
              initial={{ opacity: 0, x: -150, y: 50, scale: 0.8 }}
              animate={slide2InView ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x: -150, y: 50, scale: 0.8 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg py-4 sm:py-6 bg-[#FAF4E1] text-[#333E24] transform rotate-2 sm:rotate-4 lg:rotate-8 shadow-xl">
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
                    <Image
                      src={info.image1}
                      alt="Antarala"
                      fill
                      className="object-cover rounded-lg"
                      priority
                      quality={100}
                    />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-center">{info.paragraphImg1}</p>
                </CardContent>
              </Card>

              <motion.svg 
                width="145" 
                height="102" 
                viewBox="0 0 145 102" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="hidden sm:block"
                initial={{ opacity: 0, scale: 0 }}
                animate={slide2InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              >
                <path d="M87.5731 70.5L88.4255 65.5732L87.5731 70.5ZM145 78.5L98.3005 44.552L92.2505 101.969L145 78.5ZM3.96777 4L0.888642 7.93941C3.4511 9.94228 5.84488 11.8689 8.08256 13.7225L11.2722 9.87201L14.4618 6.02151C12.1476 4.10451 9.67996 2.11865 7.0469 0.06059L3.96777 4ZM25.1459 22.2582L21.6554 25.8382C26.9315 30.9824 30.7585 35.3728 33.6266 39.1339L37.6025 36.1021L41.5784 33.0703C38.3801 28.876 34.22 24.1223 28.6365 18.6783L25.1459 22.2582ZM47.1678 52.0357L42.6817 54.2437C44.0724 57.0693 45.5645 60.0284 48.063 62.6171C50.6378 65.2849 53.9565 67.2547 58.5938 68.9589L60.3185 64.2658L62.0433 59.5727C58.308 58.2 56.4609 56.9186 55.2583 55.6726C53.9793 54.3474 53.0823 52.7299 51.6538 49.8277L47.1678 52.0357ZM78.3464 68.8155L77.3916 73.7235C80.2131 74.2724 83.3123 74.8371 86.7207 75.4268L87.5731 70.5L88.4255 65.5732C85.0683 64.9924 82.0395 64.4403 79.3013 63.9076L78.3464 68.8155ZM87.5731 70.5L86.7207 75.4268C91.9896 76.3384 96.7699 77.1371 101.108 77.8376L101.905 72.9016L102.702 67.9655C98.4035 67.2714 93.6603 66.4789 88.4255 65.5732L87.5731 70.5Z" fill="#FAF4E1" />
              </motion.svg>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={slide2InView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg py-4 sm:py-6 bg-[#FAF4E1] text-[#333E24] transform -rotate-2 sm:-rotate-4 lg:-rotate-8 shadow-xl">
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
                    <Image
                      src={info.image2}
                      alt="Antarala"
                      fill
                      className="object-cover rounded-lg"
                      priority
                      quality={100}
                    />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-center">{info.paragraphImg2}</p>
                </CardContent>
              </Card>

              <motion.svg 
                width="193" 
                height="124" 
                viewBox="0 0 193 124" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="hidden sm:block"
                initial={{ opacity: 0, scale: 0 }}
                animate={slide2InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              >
                <path d="M56.4342 41.265L54.5137 36.6485L56.4342 41.265ZM193.006 44.3286L154.883 0.97L136.395 55.6648L193.006 44.3286ZM5.00402 122.268L9.79572 123.696C10.7751 120.41 12.0432 116.552 13.5757 112.33L8.87583 110.624L4.17596 108.918C2.58256 113.307 1.25208 117.351 0.212322 120.84L5.00402 122.268ZM18.3573 87.9681L22.8684 90.1245C26.3089 82.927 30.2105 75.7486 34.4765 69.2618L30.2989 66.5145L26.1214 63.7671C21.5474 70.7222 17.4294 78.3157 13.8462 85.8117L18.3573 87.9681ZM46.1099 47.812L49.3498 51.6204C52.3762 49.0457 55.3879 47.1157 58.3547 45.8814L56.4342 41.265L54.5137 36.6485C50.3722 38.3714 46.4859 40.9277 42.8701 44.0037L46.1099 47.812ZM56.4342 41.265L58.3547 45.8814C62.0573 44.3411 65.6816 42.8921 69.2528 41.5501L67.4939 36.8697L65.7351 32.1893C62.0324 33.5807 58.298 35.0742 54.5137 36.6485L56.4342 41.265ZM90.1933 29.7773L91.3467 34.6425C98.8248 32.8695 106.265 31.7672 113.9 31.4986L113.725 26.5017L113.549 21.5047C105.168 21.7996 97.0696 23.0084 89.0398 24.9122L90.1933 29.7773ZM137.412 28.2328L136.53 33.1544C140.15 33.803 143.863 34.6456 147.688 35.6998L149.016 30.8795L150.345 26.0592C146.237 24.9271 142.226 24.0157 138.294 23.3112L137.412 28.2328ZM149.016 30.8795L147.688 35.6998C151.846 36.846 155.505 37.8696 158.74 38.7881L160.106 33.9783L161.472 29.1685C158.209 28.2419 154.525 27.2114 150.345 26.0592L149.016 30.8795Z" fill="#FAF4E1" />
              </motion.svg>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
              initial={{ opacity: 0, x: 150, y: -50, scale: 0.8 }}
              animate={slide2InView ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x: 150, y: -50, scale: 0.8 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg py-4 sm:py-6 bg-[#FAF4E1] text-[#333E24] transform rotate-2 sm:rotate-4 lg:rotate-12 shadow-xl">
                <CardContent className="space-y-4 sm:space-y-6">
                  <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
                    <Image
                      src={info.image3}
                      alt="Antarala"
                      fill
                      className="object-cover rounded-lg"
                      priority
                      quality={100}
                    />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-center">{info.paragraphImg3}</p>
                </CardContent>
              </Card>
            </motion.div>

          </div>

          {/* 3 */}
          <div ref={slide3Ref} className="w-screen h-screen relative px-4 sm:px-6 lg:px-8 flex flex-col xl:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-24">

            <motion.div
              className="backdrop-blur-lg border border-white/20 bg-[#FAF4E1] w-32 sm:w-48 md:w-56 lg:w-64 h-px"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={slide3InView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <motion.div
              className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={slide3InView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-justify text-[#FAF4E1] leading-relaxed">
                {info.paragraphSlide}
              </p>
            </motion.div>

            <motion.div
              className="backdrop-blur-lg border border-white/20 bg-[#FAF4E1] w-32 sm:w-48 md:w-56 lg:w-64 h-px"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={slide3InView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            />

          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Example
