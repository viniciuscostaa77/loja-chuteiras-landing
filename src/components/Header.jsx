import loja from '../config/loja.js'

export default function Header() {
  return (
    <header className="container-px flex items-center justify-between py-6 sm:py-8">
      <div className="inline-flex flex-col bg-flame-500 px-3 py-1.5 leading-none text-ink-950">
        <span className="text-sm font-extrabold tracking-tight">{loja.nome}</span>
        <span className="text-[9px] font-semibold uppercase tracking-wide">{loja.tagline}</span>
      </div>

      <a
        href={loja.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm text-mist-400 transition-colors hover:text-paper-50"
      >
        {loja.instagram}
        <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}
