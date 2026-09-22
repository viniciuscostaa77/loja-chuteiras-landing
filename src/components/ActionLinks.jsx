import loja from '../config/loja.js'
import { getWhatsappLink, getSiteLink, whatsappMessages } from '../utils/links.js'

const links = [
  {
    title: 'Falar no WhatsApp',
    subtitle: 'Tire dúvidas sobre modelos e tamanhos',
    href: getWhatsappLink(whatsappMessages.duvidaModelo),
    featured: true,
  },
  {
    title: 'Acessar a loja online',
    subtitle: 'Compre sneakers e chuteiras no nosso site',
    href: getSiteLink(),
    featured: false,
  },
  {
    title: 'Acompanhe no Instagram',
    subtitle: loja.instagram,
    href: loja.instagramUrl,
    featured: false,
  },
]

export default function ActionLinks() {
  return (
    <section className="container-px pb-6 sm:pb-10">
      <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-3 sm:gap-3">
        {links.map((link) => (
          
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between px-4 py-3.5 transition-opacity hover:opacity-90 sm:flex-col sm:items-start sm:gap-1 sm:rounded-lg sm:py-4 ${
              link.featured ? 'bg-flame-500 text-ink-950' : 'bg-ink-800 text-paper-50'
            }`}
          >
            <div>
              <p className="text-sm font-bold">{link.title}</p>
              <p className={`text-xs ${link.featured ? 'text-ink-950/70' : 'text-mist-400'}`}>
                {link.subtitle}
              </p>
            </div>
            <span
              aria-hidden="true"
              className={`sm:self-end ${link.featured ? '' : 'text-mist-400'}`}
            >
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}