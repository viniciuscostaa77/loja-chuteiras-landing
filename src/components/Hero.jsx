import loja from '../config/loja.js'

export default function Hero() {
  return (
    <section className="container-px py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex items-center justify-center gap-2.5">
          
          <p className="font-display text-4xl font-extrabold uppercase tracking-tight text-flame-450 sm:text-5xl">
            {loja.nome}
          </p>
        </div>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-mist-400 sm:text-sm">
          
        </p>

        <h1 className="mt-6 whitespace-nowrap font-display text-[clamp(3rem,13vw,7rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-paper-50">
          Seu estilo.
          <br />
          Seu jogo.
          <br />
          <span className="text-flame-450">Seu próximo par.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-mist-400 sm:text-base">
          Os melhores sneakers e chuteiras selecionadas para quem leva
          estilo e performace a serio.
          <br />
          
        </p>
      </div>
    </section>
  )
}