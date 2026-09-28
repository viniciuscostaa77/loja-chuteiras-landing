// Para usar os vídeos reais: coloque os arquivos .mp4 dentro da pasta
// public/ (ex: public/depoimento-1.mp4) e ajuste o "src" de cada vídeo
// abaixo. O "poster" é a imagem de capa exibida antes do play.
const videos = [
  {
    label: 'Depoimento 1',
    src: '/depoimento-1.mp4',
    poster: '',
  },

]

export default function VideoTestimonials() {
  return (
    <section className="container-px py-8 sm:py-10">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wide text-mist-400">
        O que os clientes dizem
      </p>

      <div className="mx-auto grid max-w-xs grid-cols-2 gap-4 sm:max-w-sm lg:max-w-md">
        {videos.map((video) => (
          <div key={video.label}>
            <video
              src={video.src}
              poster={video.poster || undefined}
              controls
              playsInline
              className="aspect-[9/16] w-full rounded-lg border border-ink-700 bg-ink-800 object-cover"
            >
              Seu navegador não suporta vídeo em HTML5.
            </video>
            <p className="mt-2 text-center text-xs font-medium text-paper-50">{video.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
