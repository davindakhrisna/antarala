
"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Globe, X } from "lucide-react"

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            <a href="/daerah" className="text-foreground hover:text-primary transition-colors">
              Daerah
            </a>
            <a href="/artikel" className="text-foreground hover:text-primary transition-colors">
              Artikel
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Right Side - Language & Search */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <div className="flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2 animate-in slide-in-from-right-2 duration-200">
                  <Input type="search" placeholder="Search..." className="w-48" autoFocus />
                  <Button variant="ghost" size="icon" onClick={toggleSearch} className="h-9 w-9">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button variant="ghost" size="icon" onClick={toggleSearch} className="h-9 w-9">
                  <Search className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>🇺🇸 English</DropdownMenuItem>
                <DropdownMenuItem>🇪🇸 Español</DropdownMenuItem>
                <DropdownMenuItem>🇫🇷 Français</DropdownMenuItem>
                <DropdownMenuItem>🇩🇪 Deutsch</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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
