import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Parallax } from 'react-scroll-parallax'
import React from 'react';
import { motion } from 'motion/react';

{/* Card Floater */ }
const CardFloat = () => {
  const CardLead = "backdrop-blur-lg border border-white/20 bg-[#FAF4E1] "
  const text = "Di balik riuhnya arus utama, Indonesia menyimpan ribuan cerita yang nyaris tak terdengar. Antarala hadir sebagai ruang kecil yang merawat jejak-jejak itu, menghidupkan kembali makna yang tersembunyi, dan mengajak kita melihat Indonesia dari celah yang jarang disingkap";
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [showCard, setShowCard] = React.useState(false);
  const [animationComplete, setAnimationComplete] = React.useState(false);

  React.useEffect(() => {
    // Start the sequence after component mounts
    const timer1 = setTimeout(() => setShowCard(true), 1000); // Start showing card after 1s
    const timer2 = setTimeout(() => setAnimationComplete(true), 2000); // Start typing after 2s

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  React.useEffect(() => {
    if (!animationComplete) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 20);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, animationComplete]);

  return (
    <div className="absolute right-0 -bottom-5/7">
      <div className="flex flex-col items-end-safe gap-3">
        {/* Hero Lead */}
        <div className="flex flex-col items-center w-fit">
          <motion.h1
            className="font-bold text-lg text-[#F3F8F4]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            01
          </motion.h1>

          <motion.div
            className={`w-px ${CardLead}`}
            initial={{ height: 0 }}
            animate={{ height: '10.5rem' }} // h-42 = 10.5rem
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.4, 0, 0.2, 1]
            }}
          />

          <motion.div
            className={`h-2 w-2 rounded-full ${CardLead}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showCard ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onAnimationComplete={() => setAnimationComplete(true)}
        >
          <Card
            className="max-w-md backdrop-blur-lg px-6 lg:py-2 xl:py-4 rounded-4xl bg-[#FAF4E1] border border-white/20 overflow-hidden"
            style={{ borderBottomRightRadius: "84px", borderTopRightRadius: "0px" }}
          >
            <div className="flex items-center justify-center space-x-4 h-full">
              <motion.div
                className="w-px bg-black/70"
                initial={{ height: 0 }}
                animate={{ height: '5.5rem' }} // lg:min-h-22 = 5.5rem
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                  ease: [0.4, 0, 0.2, 1]
                }}
              />
              <div className="py-2">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <CardHeader className="pl-1">
                    <h3 className="text-lg font-semibold text-black">Pendahuluan</h3>
                  </CardHeader>
                  <CardContent className="pl-1">
                    <p className="text-xs xl:text-sm text-black whitespace-pre-line">
                      {displayText}
                      <span className="animate-pulse">|</span>
                    </p>
                  </CardContent>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

{/* Hero Section */ }
const HeroFirst = () => {

  return (
    <section
      className="relative p-8 md:p-18 overflow-hidden min-h-screen flex items-center bg-black"
    >
      {/* Image Here */}
      <Parallax
        speed={-20}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/homepage/hero/hero.png"
          alt="Indonesia Richness and Beautiful Landscape"
          fill
          quality={100}
          className="object-cover"
          priority
        />
      </Parallax>

      {/* Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom right, rgba(40, 38, 38, 0.3), rgba(45, 51, 17, 0.4))",
        }}
      />

      {/* Main Component */}
      <div className="w-full h-full flex flex-row  relative z-10">
        <Parallax
          speed={15}
        >
          <motion.div
            className="text-white space-y-6 md:space-y-3 lg:space-y-6 text-center md:text-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Ruang kecil untuk <span className="sm:hidden">cerita besar Indonesia</span>
            </motion.h1>
            <motion.h1
              className="hidden sm:block md:text-4xl lg:text-5xl font-bold tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              cerita besar Indonesia
            </motion.h1>
            <motion.h2
              className="text-xl md:text-xl lg:text-2xl font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Belajar memahami Indonesia dari ruang yang tak biasa
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex justify-center items-center sm:justify-start sm:items-start"
            >
              <Link href="/daerah">
                <Button
                  className="p-3 md:p-6 cursor-pointer rounded-4xl text-sm lg:text-md border border-white backdrop-blur-xs bg-transparent text-white hover:bg-white/10 transition"
                >
                  Mulai Menjelajah
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Parallax>

        {/* Card Float */}
        <div className="hidden lg:inline-block">
          <CardFloat />
        </div>
      </div>

    </section>
  )
}

export default HeroFirst
