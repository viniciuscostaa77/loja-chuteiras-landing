import { MessageCircle, ShoppingBag, Instagram as InstagramIcon } from 'lucide-react'
import loja from '../config/loja.js'
import { getWhatsappLink, getSiteLink, whatsappMessages } from '../utils/links.js'

const links = [
  {
    title: 'COMPRE AGORA',
    subtitle: 'Acesse nosso site oficial',
    href: getSiteLink(),
    featured: true,
    icon: ShoppingBag,
  },
  {
    title: 'INSTAGRAM',
    subtitle: "Acompanhe nossos lançamentos",
    href: loja.instagramUrl,
    featured: false,
    icon: InstagramIcon,
  },
  {
    title: 'WHATSAPP',
    subtitle: 'Fale com nosso atendimento',
    href: getWhatsappLink(whatsappMessages.duvidaModelo),
    featured: false,
    icon: MessageCircle,
  },
]

export default function ActionLinks() {
  return (
    <section className="container-px pb-6 sm:pb-10">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between rounded-xl2 px-4 py-3.5 transition-opacity hover:opacity-90 sm:flex-col sm:items-start sm:gap-1 sm:py-4 ${
                            link.featured
                ? 'bg-flame-450 text-ink-950'
                : 'bg-ink-800 text-paper-50'
            }`}
          >
            <div>
              <div className="flex items-center gap-2">
                <link.icon className="h-4 w-4 shrink-0" strokeWidth={2.2} />
                <p className="font-body text-sm font-bold">{link.title}</p>
              </div>

              <p
                className={`font-body mt-0.5 text-xs ${
                  link.featured ? 'text-ink-950/70' : 'text-mist-400'
                }`}
              >
                {link.subtitle}
              </p>
            </div>

            <span
              aria-hidden="true"
              className={`sm:self-end ${
                link.featured ? '' : 'text-mist-400'
              }`}
            >
              ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}