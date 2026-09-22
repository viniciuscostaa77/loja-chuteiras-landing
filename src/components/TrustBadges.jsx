const badges = [
  { value: '+500', label: 'pares entregues' },
  { value: 'Resposta rápida', label: 'no WhatsApp' },
  { value: 'Todo o Brasil', label: 'envio garantido' },
]

export default function TrustBadges() {
  return (
    <section className="container-px py-2">
      <div className="grid grid-cols-3 divide-x divide-ink-700 border-y border-ink-700">
        {badges.map((badge) => (
          <div key={badge.label} className="px-2 py-4 text-center sm:py-5">
            <p className="text-sm font-bold text-flame-500 sm:text-base">{badge.value}</p>
            <p className="mt-0.5 text-[11px] text-mist-400 sm:text-xs">{badge.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
