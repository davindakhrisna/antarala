"use client"
import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Card {
  id: number
  content: string
  type: "image" | "text"
  matched: boolean
  flipped: boolean
  pairId: number
}

const GameLayout: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false)
  const [cards, setCards] = useState<Card[]>([])
  const [selectedCards, setSelectedCards] = useState<number[]>([])
  const [matches, setMatches] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [showAttemptsPopup, setShowAttemptsPopup] = useState(false)
  const [popupTimer, setPopupTimer] = useState<NodeJS.Timeout | null>(null)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  useEffect(() => {
    if (gameStarted) {
      initializeGame()
    }
  }, [gameStarted])

  useEffect(() => {
    if (matches === 10 && gameStarted) {
      setShowAttemptsPopup(true)

      if (popupTimer) clearTimeout(popupTimer)
      const timer = setTimeout(() => {
        setShowAttemptsPopup(false)
        setGameCompleted(true)
      }, 5000)
      setPopupTimer(timer)
    }

    return () => {
      if (popupTimer) clearTimeout(popupTimer)
    }
  }, [matches, gameStarted])

  const initializeGame = () => {
    const gameContent = [
      { image: "/game/image1.svg", text: "Candi Borobudur" },
      { image: "/game/image2.svg", text: "Grogol" },
      { image: "/game/image3.svg", text: "Kue Asidah" },
      { image: "/game/image4.svg", text: "Rujak Bulung" },
      { image: "/game/image5.svg", text: "Rumpu Rampe" },
      { image: "/game/image6.svg", text: "Sate Buntel" },
      { image: "/game/image7.svg", text: "Komodo" },
      { image: "/game/image8.svg", text: "Patung GWK" },
      { image: "/game/image9.svg", text: "Monas" },
      { image: "/game/image10.svg", text: "Candi Prambanan" },
    ]

    const newCards: Card[] = []
    let idCounter = 0

    gameContent.forEach((item, index) => {
      newCards.push({
        id: idCounter++,
        content: item.image,
        type: "image",
        matched: false,
        flipped: false,
        pairId: index,
      })
      newCards.push({
        id: idCounter++,
        content: item.text,
        type: "text",
        matched: false,
        flipped: false,
        pairId: index,
      })
    })

    const shuffled = [...newCards].sort(() => Math.random() - 0.5)
    setCards(shuffled)
    setMatches(0)
    setAttempts(0)
    setSelectedCards([])
    setGameCompleted(false)
    setShowAttemptsPopup(false)
    setImageErrors({})
  }

  const handleCardClick = (cardId: number) => {
    if (selectedCards.length === 2) return

    const card = cards.find((c) => c.id === cardId)
    if (!card || card.flipped || card.matched) return

    const newCards = cards.map((c) =>
      c.id === cardId ? { ...c, flipped: true } : c
    )
    setCards(newCards)

    const newSelected = [...selectedCards, cardId]
    setSelectedCards(newSelected)

    if (newSelected.length === 2) {
      checkMatch(newSelected)
    }
  }

  const checkMatch = (selected: number[]) => {
    setAttempts((prev) => prev + 1)

    const [first, second] = selected.map((id) => cards.find((c) => c.id === id))

    if (!first || !second) return

    const isMatch = first.pairId === second.pairId && first.type !== second.type

    setTimeout(() => {
      if (isMatch) {
        const newCards = cards.map((c) =>
          c.id === first.id || c.id === second.id
            ? { ...c, matched: true }
            : c
        )
        setCards(newCards)
        setMatches((prev) => prev + 1)
      } else {
        const newCards = cards.map((c) =>
          c.id === first.id || c.id === second.id
            ? { ...c, flipped: false }
            : c
        )
        setCards(newCards)
      }
      setSelectedCards([])
    }, 1000)
  }

  const handleImageError = (cardId: number) => {
    setImageErrors((prev) => ({ ...prev, [cardId]: true }))
  }

  const handlePlayAgain = () => {
    initializeGame()
  }

  const handleBackToHome = () => {
    setGameCompleted(false)
    setGameStarted(false)
  }

  if (gameCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
        <div className="rounded-lg p-8 max-w-md mx-4 text-center shadow-xl bg-transparent border-4 border-dashed border-[#2C351F]">
          <h2 className="text-4xl font-bold text-[#2C351F] mb-6">Terima kasih,</h2>
          <p className="text-[#2C351F] mb-8 leading-relaxed">
            telah membuka satu per satu cerita kecil dari Indonesia. Semoga setiap kartu yang kamu balik, meninggalkan
            rasa yang tak mudah dilupakan. - <span className="font-semibold">Antarala</span>
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={handlePlayAgain}
              className="bg-[#2C351F] text-white cursor-pointer px-6 py-3 rounded-lg hover:bg-[#3a4426] transition-colors"
            >
              Main lagi
            </Button>
            <Button
              onClick={handleBackToHome}
              className="bg-[#2C351F] cursor-pointer text-white px-6 py-3 hover:bg-[#3a4426] rounded-lg transition-colors"
            >
              Kembali ke halaman awal
            </Button>
          </div>
        </div>
      </div>
    )
  }

  if (gameStarted) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-amber-50 to-orange-50">
        {/* Attempts Popup */}
        {showAttemptsPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            <div className="relative bg-white rounded-lg p-8 max-w-md mx-4 text-center shadow-xl border-4 border-dashed border-gray-400 animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Permainan Selesai!</h3>
              <p className="text-gray-600 mb-6">
                Selamat! Anda telah menyelesaikan permainan dengan <span className="font-semibold">{attempts} percobaan</span>.
              </p>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Game Grid */}
        <div className="container p-6 md:p-18 mx-auto overflow-hidden">
          <div className="max-w-3xl mx-auto grid grid-cols-5 gap-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="relative !rounded-lg aspect-square cursor-pointer transform transition hover:scale-105"
                onClick={() => handleCardClick(card.id)}
              >
                <div className={`card-container ${card.flipped || card.matched ? "flipped" : ""}`}>
                  {/* Card Back */}
                  <div className="card-face card-back flex justify-center items-center">
                    <span className="text-4xl md:text-6xl text-white/80 font-serif italic">t</span>
                  </div>

                  {/* Card Front */}
                  <div className="card-face card-front !rounded-lg">
                    {card.type === "image" ? (
                      <div className="w-full h-full flex items-center justify-center">
                        {imageErrors[card.id] ? (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 p-2">
                            <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xs text-gray-500 text-center">Gambar tidak tersedia</span>
                          </div>
                        ) : (
                          <Image
                            src={card.content}
                            alt="Indonesian landmark"
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                            onError={() => handleImageError(card.id)}
                          />
                        )}
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center rounded-lg bg-gradient-to-br from-[#252E18] to-[#3a4426] p-3">
                        <span className="text-white text-xs md:text-lg lg:text-xl font-semibold text-center leading-tight">
                          {card.content}
                        </span>
                      </div>
                    )}
                    {card.matched && (
                      <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom styles for 3D card flip */}
        <style jsx>{`
          .card-container {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: transform 0.6s;
            perspective: 1000px;
          }
          
          .card-container.flipped {
            transform: rotateY(180deg);
          }
          
          .card-face {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .card-back {
            background: linear-gradient(135deg, #252E18, #3a4426);
            z-index: 2;
          }
          
          .card-front {
            background: white;
            transform: rotateY(180deg);
            z-index: 1;
          }
          
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            animation: fade-in 0.5s ease-out;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br to-orange-50">
      <div className="flex items-center justify-center min-h-screen p-8 xl:-rotate-1">
        <div className="relative border-16 border-dashed border-[#676F59]" style={{ width: "1312px", maxWidth: "100vw", height: "625px", maxHeight: "90vh" }}>

          {/* main game board */}
          <div className="hidden xl:flex absolute inset-4 bg-[#252E18] rounded overflow-hidden">
            <div
              className="relative w-full h-full flex items-center justify-between px-28"
              style={{ transform: "perspective(1200px) rotateY(-5deg)" }}
            >
              {/* Left Side - Title */}
              <div className="flex-1" style={{ transform: "rotateY(5deg)" }}>
                <div className="mb-4">
                  <Image
                    src="/logo-navbar.svg"
                    alt="Antarala"
                    width={220}
                    height={100}
                    className="w-xl h-20 md:h-24 filter brightness-0 invert"
                    priority
                  />
                </div>
                <p className="text-white/90 text-2xl font-light tracking-wider ml-2">Mini Game</p>
              </div>

              {/* Right Side - Instructions Card */}
              <div className="relative rotate-4">
                <div className="absolute inset-0 bg-black/30 rounded-lg transform translate-x-3 translate-y-3" />
                <div className="relative bg-amber-50 rounded-lg p-8 w-96 transform hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800 border-b-2 border-gray-400 pb-3">Petunjuk</h2>
                  <p className="text-base text-gray-700 leading-relaxed mb-6">
                    Permainan flip kartu ini menguji konsentrasi untuk mencari dan mencocokkan gambar dengan teks yang
                    sesuai. Temukan pasangan yang tepat dengan cepat dan raih skor tertinggi. Hindari kesalahan beruntun
                    agar tidak terkena penalti bantuan <span className="font-semibold italic">EFYD (E-Fi-Ye-De)</span>.
                  </p>
                  <Button
                    onClick={() => setGameStarted(true)}
                    className="cursor-pointer w-full bg-[#252E18] text-white py-6 rounded-lg font-semibold hover:bg-[#3a4426] text-lg transform transition hover:scale-105"
                  >
                    Mulai Mainkan
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* main game board - mobile */}
          <div className="absolute xl:hidden flex flex-col items-stretch inset-4 bg-[#252E18] rounded overflow-hidden text-center">
            <div className="flex-1 flex flex-col justify-center items-center p-4">
              <div className="mb-4">
                <Image
                  src="/logo-navbar.svg"
                  alt="Antarala"
                  width={180}
                  height={80}
                  className="sm:w-sm filter brightness-0 invert"
                  priority
                />
              </div>
              <p className="text-white/90 text-2xl font-light tracking-wider">Mini Game</p>
            </div>
            <div className="flex-1 flex py-10 flex-col justify-center items-center bg-black/50 p-6">
              <div className="space-y-6">
                <h1 className="text-2xl sm:text-4xl font-semibold text-amber-50">Petunjuk</h1>
                <p className="text-amber-50 text-justify text-sm sm:text-lg max-w-md">
                  Permainan flip kartu ini mengajak kamu untuk menebak dan mengenali kekayaan Indonesia melalui tiga kategori utama: tempat, budaya, dan kuliner. Selamat bermain! - <span className="font-bold">Antarala</span>
                </p>
                <Button
                  onClick={() => setGameStarted(true)}
                  className="cursor-pointer bg-amber-50 text-[#252E18] w-full py-3 rounded-lg font-semibold hover:bg-amber-100 text-lg transition"
                >
                  Mulai Mainkan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameLayout
