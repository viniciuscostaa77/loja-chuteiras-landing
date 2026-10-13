import { useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

const video = {
  src: '/video-thalisson.mp4',
  poster: '',
  jogador: 'Thalissinho',
  time: 'Atleta profissional do  Bregenz',
}

export default function VideoTestimonials() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  const toggleSound = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setMuted(videoRef.current.muted)
  }

  return (
    <section className="container-px py-8 sm:py-10">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wide text-mist-400">
        O que os clientes dizem
      </p>

      <div className="mx-auto max-w-xs sm:max-w-sm lg:max-w-md">
        <div className="relative">
          <video
            ref={videoRef}
            src={video.src}
            poster={video.poster || undefined}
            autoPlay
            muted
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
      </div>
    </section>
  )
}