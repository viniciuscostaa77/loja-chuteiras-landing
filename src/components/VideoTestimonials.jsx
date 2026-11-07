import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react'

// Para adicionar mais um vídeo: coloque o arquivo .mp4 em public/,
// copie um bloco { ... } e cole logo abaixo do último.
const videos = [
  {
    src: '/video-thalisson.mp4',
    poster: '',
    jogador: 'THALISSINHO',
    time: 'BREGENZ',
  },
  {
    src: '/videoo.jogadorr4.mp4',
    poster: '',
    jogador: 'CASSIO',
    time: 'FORTALEZA',
  },
  {
    src: '/videoo.jogador7.mp4',
    poster: '',
    jogador: 'KHENDRAN',
    time: 'JUVENTUS SAF',
  },
]

export default function VideoTestimonials() {
  const [index, setIndex] = useState(0)
  const [muted, setMuted] = useState(true)
  const videoRef = useRef(null)
  const touchStart = useRef(null)

  const total = videos.length
  const video = videos[index]

  // Passa pro próximo/anterior. Depois do último volta pro primeiro (loop).
  const next = () => setIndex((i) => (i + 1) % total)
  const prev = () => setIndex((i) => (i - 1 + total) % total)

  // Sempre que troca de vídeo, começa a tocar.
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    el.play().catch(() => {
      // Se o navegador bloquear o som automático, toca mudo.
      el.muted = true
      setMuted(true)
      el.play().catch(() => {})
    })
  }, [index])

  const toggleSound = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setMuted(videoRef.current.muted)
  }

  // Arrastar pro lado no celular troca de vídeo.
  const handleTouchStart = (e) => {
    const t = e.touches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }

  const handleTouchEnd = (e) => {
    const start = touchStart.current
    if (!start) return
    const t = e.changedTouches[0]
    const dx = t.clientX - start.x
    const dy = t.clientY - start.y
    touchStart.current = null
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return
    if (dx < 0) {
      next()
    } else {
      prev()
    }
  }

  return (
    <section className="container-px py-8 sm:py-10">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wide text-mist-400">
        O que os clientes dizem
      </p>

      <div className="mx-auto max-w-xs sm:max-w-sm lg:max-w-md">
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <video
            key={video.src}
            ref={videoRef}
            src={video.src}
            poster={video.poster || undefined}
            autoPlay
            muted={muted}
            loop
            playsInline
            className="aspect-[9/16] w-full rounded-lg border border-ink-700 bg-ink-800 object-cover"
          >
            Seu navegador não suporta vídeo em HTML5.
          </video>

          <button
            type="button"
            onClick={toggleSound}
            aria-label={muted ? 'Ativar som' : 'Silenciar'}
            className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/80 text-paper-50 backdrop-blur-sm transition-colors hover:bg-ink-950"
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="font-display text-xl uppercase tracking-tight text-paper-50">
            {video.jogador}
          </p>
          <p className="text-sm text-mist-400">{video.time}</p>
        </div>

        {total > 1 && (
          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Vídeo anterior"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-600 bg-ink-800 text-paper-50 transition-colors hover:bg-ink-700"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {videos.map((v, i) => (
                <button
                  key={v.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ver vídeo ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-6 bg-flame-450' : 'w-1.5 bg-ink-600'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Próximo vídeo"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-600 bg-ink-800 text-paper-50 transition-colors hover:bg-ink-700"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}