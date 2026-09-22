export default function Hero() {
  return (
    <section className="container-px pb-6 sm:pb-8">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-flame-500">
            <span className="h-px w-4 bg-flame-500" aria-hidden="true" />
            Sneakers &amp; chuteiras
          </p>

          <h1 className="font-display text-4xl font-extrabold uppercase leading-[1.02] text-paper-50 sm:text-5xl lg:text-6xl">
            Seu estilo.
            <br />
            Seu jogo.
            <br />
            <span className="text-flame-500">
              Seu próximo
              <br />
              par.
            </span>
          </h1>

          <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist-400 sm:text-base">
            Da rua ao campo, encontre o seu par.
            <br />
            Escolha por onde começar.
          </p>
        </div>

        {/* As 3 fotos juntas, num só grupo */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3">
          <div className="relative row-span-2 overflow-hidden rounded-lg border border-ink-700">
            <img
              src="https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=700&q=80"
              alt="Chuteira em destaque"
              className="h-full w-full object-cover"
            />
            <span className="absolute left-2 top-2 bg-ink-950 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-paper-50 sm:px-2.5 sm:py-1.5 sm:text-[10px]">
              Da rua ao campo.
            </span>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=80"
            alt="Chuteira em campo"
            className="aspect-square w-full rounded-lg border border-ink-700 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=500&q=80"
            alt="Detalhe de sneaker"
            className="aspect-square w-full rounded-lg border border-ink-700 object-cover"
          />
        </div>
      </div>
    </section>
  )
}