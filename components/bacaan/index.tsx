// app/bacaan/page.tsx
"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { createClient } from "@/prismicio"
import { asText } from "@prismicio/client"

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
  const [activeTag, setActiveTag] = useState<string>("Semua")

  useEffect(() => {
    const fetchData = async () => {
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

      // kumpulin semua kategori dari artikel
      const allTags = Array.from(new Set(mapped.flatMap((a) => a.categories)))
      setTags(["Semua", ...allTags])
    }

    fetchData()
  }, [])

  // filter artikel
  const filteredArticles =
    activeTag === "Semua"
      ? articles
      : articles.filter((a) => a.categories.includes(activeTag))

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF4E1" }}>
      <div className="w-full px-6 sm:px-8 lg:px-16 py-25">
        {/* Header and Tags Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* Left side - Title and Tags */}
          <div className="flex-1 lg:max-w-4xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6 lg:mb-8">
              Bacaan
            </h1>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTag(tag)}
                  className={`px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-sm text-xs sm:text-sm font-medium transition-all ${
                    activeTag === tag
                      ? "bg-black text-white"
                      : "bg-[#252E18] text-white hover:opacity-80"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Kartu info kanan atas */}
          <div className="hidden lg:flex flex-shrink-0 ml-8">
            <div
              className="w-80 h-68 p-6 rounded-lg shadow-lg flex flex-col justify-center transform rotate-3 hover:rotate-1 transition-transform duration-300"
              style={{ backgroundColor: "#252E18" }}
            >
              <div className="text-white">
                <div className="mb-4">
                  <img
                    src="/logo-navbar.svg"
                    alt="Antarala"
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

        {/* List Artikel */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {filteredArticles.map((article, index) => (
            <div
              key={article.id}
              className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start"
            >
              {/* Gambar */}
              {article.imageUrl && (
                <div className="flex-shrink-0 w-full lg:w-auto">
                  <Link href={`/bacaan/${article.uid}`}>
                    <div className="relative w-full h-48 sm:h-64 lg:w-[560px] lg:h-[360px] rounded-lg overflow-hidden">
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                </div>
              )}

              {/* Konten artikel */}
              <div className="flex-1 lg:pt-4">
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {article.categories.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 sm:px-3 py-1 rounded-sm text-white text-xs sm:text-sm font-medium"
                      style={{ backgroundColor: "#252E18" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={`/bacaan/${article.uid}`}>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4 leading-tight hover:underline">
                    {article.title}
                  </h3>
                </Link>

                <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
