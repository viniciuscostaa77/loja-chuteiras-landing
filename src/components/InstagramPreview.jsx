import loja from '../config/loja.js'

const posts = [
  'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=300&q=80',
]

export default function InstagramPreview() {
  return (
    <section className="container-px pb-8 sm:pb-10">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-wide text-mist-400">
        Siga no Instagram
      </p>

      <div className="grid grid-cols-4 gap-1.5">
        {posts.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Post do Instagram da loja"
            className="aspect-square w-full rounded-md object-cover"
          />
        ))}
        <a
          href={loja.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex aspect-square w-full items-center justify-center rounded-md border border-ink-700 bg-ink-800 text-xs font-semibold text-flame-500 transition-colors hover:bg-ink-700"
        >
          + ver
        </a>
      </div>
    </section>
  )
}
