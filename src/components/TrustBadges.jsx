import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import loja from '../config/loja.js'

const countries = [
  { code: 'br', name: 'Brasil', region: 'América do Sul' },
  { code: 'us', name: 'Estados Unidos', region: 'América do Norte' },
  { code: 'cl', name: 'Chile', region: 'América do Sul' },
  { code: 'ar', name: 'Argentina', region: 'América do Sul' },
  { code: 'es', name: 'Espanha', region: 'Europa' },
  { code: 'pt', name: 'Portugal', region: 'Europa' },
  { code: 'at', name: 'Áustria', region: 'Europa' },
  { code: 'de', name: 'Alemanha', region: 'Europa' },
]

export default function TrustBadges() {
  const scrollRef = useRef(null)
  const [thumb, setThumb] = useState({ width: 100, left: 0 })

  const updateThumb = () => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    const widthPct = Math.min(100, (clientWidth / scrollWidth) * 100)
    const maxScroll = scrollWidth - clientWidth
    const leftPct = maxScroll > 0 ? (scrollLeft / maxScroll) * (100 - widthPct) : 0
    setThumb({ width: widthPct, left: leftPct })
  }

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const amount = direction === 'left' ? -320 : 320
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section className="container-px py-8 sm:py-10">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-flame-450">
          {loja.nome} pelo mundo 🌎
        </p>
        <p className="mt-2 font-display text-4xl uppercase tracking-tight text-paper-50 sm:text-5xl">
          <span className="font-semibold text-flame-450">8 países.</span>  UMA SÓ ONE.
        </p>
        <p className="mt-1 text-sm text-mist-400">
           Do Brasil para além das fronteiras.
        </p>
      </div>

      <div
        ref={scrollRef}
        onScroll={updateThumb}
        className="mt-6 flex gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {countries.map((country) => (
          <div
            key={country.name}
            className="flex min-w-[150px] shrink-0 flex-col items-center gap-2.5 rounded-xl2 border border-ink-600 bg-ink-800 px-5 py-6 text-center shadow-lg"
          >
            <img
              src={`https://flagcdn.com/w80/${country.code}.png`}
              alt={`Bandeira de ${country.name}`}
              className="h-9 w-14 rounded object-cover shadow-sm"
              onLoad={updateThumb}
            />
            <p className="font-display text-base uppercase text-paper-50">{country.name}</p>
            <p className="text-xs text-mist-400">{country.region}</p>
             <span className="mt-1 h-0.5 w-6 rounded-full bg-flame-450" aria-hidden="true" />
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.15em] text-mist-500">
        Deslize para explorar
      </p>

      <div className="relative mx-auto mt-2 h-1 w-40 overflow-hidden rounded-full bg-ink-700">
        <div
          className="absolute inset-y-0 rounded-full bg-flame-450 transition-all duration-150"
          style={{ width: `${thumb.width}%`, left: `${thumb.left}%` }}
        />
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scroll('left')}
          aria-label="Ver países anteriores"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-600 bg-ink-800 text-paper-50 transition-colors hover:bg-ink-700"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scroll('right')}
          aria-label="Ver mais países"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-600 bg-ink-800 text-paper-50 transition-colors hover:bg-ink-700"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}