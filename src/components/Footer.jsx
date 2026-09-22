import loja from '../config/loja.js'
import { getWhatsappLink, whatsappMessages } from '../utils/links.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="container-px flex flex-col items-center justify-between gap-3 border-t border-ink-700 py-6 text-xs text-mist-400 sm:flex-row">
      <span>© {year} {loja.nome}</span>
      <a
        href={getWhatsappLink(whatsappMessages.geral)}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-paper-50"
      >
        Fale com a gente pelo WhatsApp ↗
      </a>
    </footer>
  )
}
