"use client"

import { useEffect, useState } from "react"
import HeroFirst from "@/components/homepage/hero/components/hero-1"
import HeroSecond from "@/components/homepage/hero/components/hero-2"
import HeroThird from "@/components/homepage/hero/components/hero-3"

const Hero = () => {
  const [selectedHero, setSelectedHero] = useState<number | null>(null)
  
  useEffect(() => {
    // Get the current hero index from session storage or default to 1
    const currentHero = typeof window !== 'undefined' 
      ? parseInt(sessionStorage.getItem('currentHero') || '1')
      : 1
    
    // Calculate the next hero (1 → 2 → 3 → 1 → ...)
    const nextHero = (currentHero % 3) + 1
    
    // Update session storage with the next hero
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('currentHero', nextHero.toString())
    }
    
    setSelectedHero(currentHero)
  }, [])
  
  if (!selectedHero) return <div className="h-screen w-full bg-gray-100" />
  
  switch(selectedHero) {
    case 1:
      return <HeroFirst />
    case 2:
      return <HeroSecond />
    case 3:
      return <HeroThird />
    default:
      return <HeroFirst />
  }
}

export default Hero
