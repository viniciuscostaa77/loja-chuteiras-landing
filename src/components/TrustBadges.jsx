import { useRef } from 'react'
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

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const amount = direction === 'left' ? -320 : 320
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section className="container-px py-8 sm:py-10">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-flame-500">
          {loja.nome} pelo mundo 
        </p>
        <p className="mt-2 font-display text-2xl uppercase text-paper-50 sm:text-3xl">
          Do Brasil para novos destinos.
        </p>
        <p className="mt-1 text-sm text-mist-400">
          8 países já fazem parte da nossa história.
        </p>
      </div>

      <div
        ref={scrollRef}
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
            />
            <p className="font-display text-base uppercase text-paper-50">{country.name}</p>
            <p className="text-xs text-mist-400">{country.region}</p>
          </div>
        ))}
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