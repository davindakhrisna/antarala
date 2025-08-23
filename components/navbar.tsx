"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Public } from "@mui/icons-material"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [position, setPosition] = useState("EN")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-[#282626]/50' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo-navbar.svg"
              alt="Antarala"
              width={100}
              height={40}
              quality={100}
              priority
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/daerah" className="text-[#F3F8F4] hover:text-[#F3F8B9] transition-colors">
              Daerah
            </a>
            <a href="/artikel" className="text-[#F3F8F4] hover:text-[#F3F8B9] transition-colors">
              Artikel
            </a>
            <a href="#services" className="text-[#F3F8F4] hover:text-[#F3F8B9] transition-colors">
              Services
            </a>
            <a href="#contact" className="text-[#F3F8F4] hover:text-[#F3F8B9] transition-colors">
              Contact
            </a>
          </div>

          {/* Right Side - Language & Search */}
          <div className="flex items-center space-x-3">

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <Public className="h-4 w-4 text-[#F3F8F4]" />
                  <span className="text-[#F3F8F4]">{position}</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                  <DropdownMenuRadioItem value="EN" className="cursor-pointer">English</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="ID" className="cursor-pointer">Indonesia</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Separator */}
            <div className="h-6 w-px bg-white" />

            {/* Search */}
            <div className="flex items-center">
              <Link href="/artikel">
                <Search className="h-4 w-4 text-[#F3F8F4]" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
