// app/bacaan/page.tsx
"use client"

import React, { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { createClient } from "@/prismicio"
import { asText } from "@prismicio/client"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

type Article = {
  id: string
  uid: string | null
  title: string
  description: string
  imageUrl: string | null
  categories: string[]
}

export default function BacaanPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [tagCounts, setTagCounts] = useState<Record<string, number>>({})
  const [search, setSearch] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const client = createClient()
        const docs = await client.getAllByType("article", {
          orderings: [{ field: "document.first_publication_date", direction: "desc" }],
        })

        const mapped: Article[] = docs.map((doc) => ({
          id: doc.id,
          uid: doc.uid,
          title: asText(doc.data.title) || "Tanpa Judul",
          description: asText(doc.data.description) || "Tidak ada konten.",
          imageUrl: doc.data.heroimage?.url ?? null,
          categories: doc.tags ?? [],
        }))

        setArticles(mapped)

        // kumpulin semua kategori dari artikel + hitung jumlahnya
        const counts: Record<string, number> = {}
        mapped.forEach((a) => {
          if (a.categories.length === 0) {
            counts["Tanpa Kategori"] = (counts["Tanpa Kategori"] || 0) + 1
          } else {
            a.categories.forEach((c) => {
              counts[c] = (counts[c] || 0) + 1
            })
          }
        })
        const allTags = Array.from(new Set(["Tanpa Kategori", ...mapped.flatMap((a) => a.categories)])).filter(
          Boolean
        ) as string[]
        setTags(["Semua", ...allTags])
        setTagCounts({ Semua: mapped.length, ...counts })
      } catch (e: any) {
        setError("Gagal memuat data. Coba muat ulang halaman.")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // filter artikel (by multiple tags + search) dengan memo untuk performa
  const filteredArticles = useMemo(() => {
    // jika tidak ada tag dipilih -> sama dengan "Semua"
    const hasSelection = selectedTags.length > 0

    let byTag = articles
    if (hasSelection) {
      const includesNoCategory = selectedTags.includes("Tanpa Kategori")
      const otherTags = selectedTags.filter((t) => t !== "Tanpa Kategori")

      byTag = articles.filter((a) => {
        const hasNoCat = (a.categories?.length || 0) === 0
        const matchNoCat = includesNoCategory && hasNoCat
        const matchOther = otherTags.length > 0 && otherTags.some((t) => a.categories.includes(t))
        return matchNoCat || matchOther
      })
    }

    if (!search.trim()) return byTag
    const q = search.toLowerCase()
    return byTag.filter(
      (a) => a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q)
    )
  }, [articles, selectedTags, search])

  // handler toggle tag
  const toggleTag = (tag: string) => {
    if (tag === "Semua") {
      setSelectedTags([])
      return
    }
    setSelectedTags((prev) => {
      const exists = prev.includes(tag)
      if (exists) {
        return prev.filter((t) => t !== tag)
      }
      return [...prev, tag]
    })
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4E1" }}>
      <div className="w-full px-6 sm:px-8 lg:px-16 py-25">
        {/* Header and Tags Section */}
        <div className="flex flex-col relative lg:flex-row lg:justify-between items-center gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* Left side - Title and Tags */}
          <div className="space-y-6 flex-1 lg:max-w-4xl">
            <div className="flex space-x-4 items-center">

              <h1 className="h-fit text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                Bacaan
              </h1>

              {/* Search */}
              <div className="relative max-w-xl">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Cari dari judul/deskripsi"
                  className="w-full rounded-xl border border-[#252E18]/25 bg-[#F2EDDA] px-4 py-2 pr-10 text-sm sm:text-base text-black placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#252E18] focus:border-[#252E18]"
                  aria-label="Cari artikel"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">
                  <Search className="w-4 h-4" />
                </span>
              </div>

            </div>


            {/* Tag chips (multi-select) */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-thin pb-2 sm:pb-0 flex-wrap overflow-visible sm:gap-3">
              {tags.map((tag, index) => {
                const isAll = tag === "Semua"
                const active = isAll ? selectedTags.length === 0 : selectedTags.includes(tag)
                return (
                  <Button
                    key={index}
                    onClick={() => toggleTag(tag)}
                    aria-pressed={active}
                    className={`whitespace-nowrap px-3 lg:px-4 py-1.5 cursor-pointer text-xs sm:text-sm font-medium transition-all border ${
                      active
                        ? "bg-black text-white border-black shadow"
                        : "bg-[#252E18] text-white border-[#252E18] hover:opacity-90"
                    }`}
                  >
                    {tag}
                  </Button>
                )
              })}

              {selectedTags.length > 0 && (
                <Button
                  onClick={() => setSelectedTags([])}
                  className="ml-2 whitespace-nowrap px-3 py-1.5 cursor-pointer text-xs sm:text-sm font-medium border border-[#252E18] text-[#252E18] bg-transparent hover:bg-[#252E18] hover:text-white"
                  aria-label="Reset filter tag"
                >
                  Reset
                </Button>
              )}
            </div>
          </div>

          {/* Kartu info kanan atas */}
          <div className="hidden lg:flex items-center justify-center flex-shrink-0 ml-8 lg:self-center">
            <div
              className="w-80 h-68 p-6 rounded-lg shadow-lg flex flex-col justify-center transform rotate-3 hover:rotate-1 transition-transform duration-300"
              style={{ backgroundColor: "#252E18" }}
            >
              <div className="text-white">
                <div className="mb-4">
                  <Image
                    src="/logo-navbar.svg"
                    alt="Antarala"
                    width={1}
                    height={1}
                    priority
                    quality={100}
                    className="h-8 w-auto filter brightness-0 invert"
                  />
                  <div className="w-60 border-b-2 border-white mt-1"></div>
                </div>
                <p className="text-sm leading-relaxed opacity-90">
                  Jelajahi keindahan nusantara, temukan budaya yang beragam, dan
                  rasakan pengalaman tak terlupakan di setiap sudut Indonesia
                  yang menawan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* States */}
        {loading && (
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 animate-pulse">
                <div className="relative w-full h-48 sm:h-64 lg:w-[560px] lg:h-[360px] rounded-lg bg-black/10" />
                <div className="flex-1 space-y-3 lg:pt-4">
                  <div className="flex gap-2">
                    <div className="h-6 w-16 rounded bg-black/10" />
                    <div className="h-6 w-24 rounded bg-black/10" />
                  </div>
                  <div className="h-6 w-2/3 rounded bg-black/10" />
                  <div className="h-4 w-full rounded bg-black/10" />
                  <div className="h-4 w-5/6 rounded bg-black/10" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && !loading && (
          <div className="rounded-md border border-red-300 bg-red-50 p-4 text-red-800">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            {/* List Artikel */}
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              {filteredArticles.length === 0 ? (
                <div className="text-center text-gray-600 py-16">
                  Tidak ada artikel yang cocok dengan filter saat ini.
                </div>
              ) : (
                filteredArticles.map((article, index) => (
                  <div
                    key={article.id}
                    className="group flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start lg:items-stretch"
                  >
                    {/* Gambar */}
                    <div className="flex-shrink-0 w-full lg:w-auto">
                      <Link href={`/bacaan/${article.uid}`}>
                        <div className="relative w-full h-48 sm:h-64 lg:w-[560px] lg:h-[360px] rounded-lg overflow-hidden">
                          {article.imageUrl ? (
                            <Image
                              src={article.imageUrl}
                              alt={article.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                              priority={index === 0}
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 text-black/60">
                              Tidak ada gambar
                            </div>
                          )}
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>
                      </Link>
                    </div>

                    {/* Konten artikel */}
                    <div className="flex-1 lg:pt-0 lg:min-h-[360px] flex flex-col">
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                        {(article.categories.length > 0 ? article.categories : ["Tanpa Kategori"])?.map(
                          (tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 sm:px-3 py-1 rounded-sm text-white text-xs sm:text-sm font-medium"
                              style={{ backgroundColor: "#252E18" }}
                            >
                              {tag}
                            </span>
                          )
                        )}
                      </div>

                      <Link href={`/bacaan/${article.uid}`}>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4 leading-tight group-hover:underline">
                          {article.title}
                        </h3>
                      </Link>

                      <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed line-clamp-4">
                        {article.description}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

