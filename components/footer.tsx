"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronUp } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  const navigationLinks = [
    { href: "/daerah", label: "Daerah" },
    { href: "/artikel", label: "Artikel" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ]

  const socialLinks = [
    {
      href: "https://instagram.com",
      label: "Instagram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.072-4.948.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      href: "https://twitter.com",
      label: "Twitter/X",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      href: "https://youtube.com",
      label: "YouTube",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      href: "https://tiktok.com",
      label: "TikTok",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-[#2E342B] text-white relative overflow-x-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6 max-w-full relative z-10">
        <motion.div
          className="mb-4 lg:mb-6 text-left max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight font-light text-balance">
            Belajar memahami <span className="font-bold text-white-300">Indonesia</span> dari
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight font-light text-balance">
            ruang yang <span className="font-bold text-white-300">tak biasa.</span>
          </p>
        </motion.div>

        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-4"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        ></motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center mt-4 lg:mt-6">
          {/* Left - Navigation Links */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <nav className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3">
              {navigationLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-white-300 transition-all duration-300 text-base lg:text-lg font-medium relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Center - Logo */}
          <motion.div
            className="flex justify-center items-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative group">
              <Image
                src="/logo-navbar.svg"
                alt="Antarala"
                width={140}
                height={56}
                quality={100}
                className="filter brightness-0 invert transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg blur-xl transition-opacity duration-300"></div>
            </div>
          </motion.div>

          {/* Right - Social Media Icons */}
          <motion.div
            className="flex justify-center lg:justify-end items-center order-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 p-2 rounded-full hover:bg-white/10"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mt-4 lg:mt-6"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        ></motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center mt-6 lg:mt-8 gap-4 sm:gap-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          {/* Copyright */}
          <div className="text-sm lg:text-base text-gray-300 font-medium">© 2025 ANTARALA. All rights reserved.</div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-3 text-sm lg:text-base hover:text-white transition-all duration-300 group bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 hover:border-green-300/30"
            type="button"
          >
            <span className="font-medium">Kembali ke atas</span>
            <ChevronUp className="w-4 h-4 lg:w-5 lg:h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </footer>
  )
}
