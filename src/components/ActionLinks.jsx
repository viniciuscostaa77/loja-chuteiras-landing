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
    title: `Acompanhe no Instagram`,
    subtitle: loja.instagram,
    href: loja.instagramUrl,
    featured: false,
  },
]

export default function ActionLinks() {
  return (
    <section className="container-px pb-6 sm:pb-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Botões empilhados */}
        <div className="flex flex-col gap-0.5">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-4 py-3 transition-opacity hover:opacity-90 ${
                link.featured ? 'bg-flame-500 text-ink-950' : 'bg-ink-800 text-paper-50'
              }`}
            >
              <div>
                <p className="text-sm font-bold">{link.title}</p>
                <p className={`text-xs ${link.featured ? 'text-ink-950/70' : 'text-mist-400'}`}>
                  {link.subtitle}
                </p>
              </div>
              <span aria-hidden="true" className={link.featured ? '' : 'text-mist-400'}>
                ↗
              </span>
            </a>
          ))}
        </div>

        {/* Mosaico de fotos */}
        <div className="grid grid-cols-2 grid-rows-2 gap-1.5">
          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=80"
            alt="Chuteira em campo"
            className="row-span-2 h-full w-full rounded-md object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=400&q=80"
            alt="Detalhe de chuteira"
            className="h-full w-full rounded-md object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=400&q=80"
            alt="Sneaker em destaque"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  )
}
