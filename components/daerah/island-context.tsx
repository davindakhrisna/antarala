"use client"

import React, { createContext, useContext, useState } from "react"

export type IslandKey =
  | "Sumatra"
  | "Jawa"
  | "Kalimantan"
  | "Bali"
  | "Sulawesi"
  | "Papua"
  | "NTT"
  | "NTB"

interface IslandContextValue {
  selected: IslandKey | null
  setSelected: (key: IslandKey) => void
}

const IslandContext = createContext<IslandContextValue | undefined>(undefined)

export const IslandProvider = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState<IslandKey | null>(null)

  return (
    <IslandContext.Provider value={{ selected, setSelected }}>
      {children}
    </IslandContext.Provider>
  )
}

export const useIsland = () => {
  const ctx = useContext(IslandContext)
  if (!ctx) throw new Error("useIsland must be used within IslandProvider")
  return ctx
}
