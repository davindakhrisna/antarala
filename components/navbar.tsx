"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Public } from "@mui/icons-material"
import { useState, useEffect } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

function Sidebar({ language, onLanguageChange }: { language: string, onLanguageChange: (lang: string) => void }) {
  const [isOpen, setIsOpen] = useState(false)

  const navigationLinks = [
    { href: "/daerah", label: "Daerah" },
    { href: "/artikel", label: "Artikel" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="flex justify-center items-center text-[#F3F8F4]">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="border-l w-3/7 md:w-2/7 border-gray-700">
        <SheetHeader>
          <SheetTitle className="hidden">Antarala</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <div className="flex-1">
            <nav className="text-end space-y-2">
              {navigationLinks.map((link) => (
                <SheetClose key={link.href} asChild>
                  <Link
                    href={link.href}
                    className="block px-4 py-2 text-lg hover:text-green-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}

              <Separator />

              <div className="flex flex-col space-y-2">
                <Link href="/artikel" className="px-4 py-2 text-lg space-x-2 flex justify-end" onClick={() => setIsOpen(false)}>
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex space-x-2 text-lg py-2 px-4 justify-end hover:bg-gray-700">
                      <Public className="h-5 w-5" />
                      <span>{language}</span>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#282626] border-gray-700 text-[#F3F8F4]">
                    <DropdownMenuRadioGroup value={language} onValueChange={onLanguageChange}>
                      <DropdownMenuRadioItem value="EN" className="cursor-pointer hover:bg-gray-700">
                        English
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="ID" className="cursor-pointer hover:bg-gray-700">
                        Indonesia
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>
          </div>

          <SheetFooter className="mt-auto py-4">
            <Separator />
            <div className="w-full text-center text-sm text-gray-400">
              © {new Date().getFullYear()} Antarala. All rights reserved.
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default function Navbar() {
  const [language, setLanguage] = useState("EN")
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
      <div className="container mx-auto px-8">
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
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/daerah" className="text-[#F3F8F4] hover:text-white transition-colors">
              Daerah
            </a>
            <a href="/artikel" className="text-[#F3F8F4] hover:text-white transition-colors">
              Artikel
            </a>
            <a href="#services" className="text-[#F3F8F4] hover:text-white transition-colors">
              Services
            </a>
            <a href="#contact" className="text-[#F3F8F4] hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Right Side - Language & Search */}
          <div className="hidden lg:flex items-center space-x-4">

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <Public className="h-4 w-4 text-[#F3F8F4]" />
                  <span className="text-[#F3F8F4]">{language}</span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
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
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sidebar language={language} onLanguageChange={setLanguage} />
          </div>
        </div>
      </div>
    </nav>
  )
}
