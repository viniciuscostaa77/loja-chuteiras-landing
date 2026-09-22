export default function Hero() {
  return (
    <section className="container-px pb-6 sm:pb-10">
      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-10">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-flame-500">
            <span className="h-px w-4 bg-flame-500" aria-hidden="true" />
            Sneakers &amp; chuteiras
          </p>

          <h1 className="font-display text-4xl font-extrabold uppercase leading-[1.02] text-paper-50 sm:text-5xl lg:text-6xl">            Seu estilo.
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

        <div className="relative overflow-hidden rounded-lg border border-ink-700">
          <img
            src="https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=900&q=80"
            alt="Chuteira em destaque"
            className="aspect-[4/3] w-full object-cover sm:aspect-square"
          />
          <span className="absolute left-3 top-3 bg-ink-950 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wide text-paper-50">
            Da rua ao campo.
          </span>
        </div>
      </div>
    </section>
  )
}
