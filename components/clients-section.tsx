"use client"

import { useLanguage } from "@/lib/language-context"

export function ClientsSection() {
  const { t } = useLanguage()

  return (
    <section id="clients" className="py-24 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent-blue text-xs tracking-[0.3em] mb-4 font-mono">
          {t.clients.label}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-balance text-foreground">
          {t.clients.title}
        </h2>

        <div className="max-w-3xl">
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            {t.clients.description}
          </p>

          <ul className="space-y-3 mb-8">
            {t.clients.criteria.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                <span className="text-accent-blue mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-foreground font-medium border-l-2 border-accent-blue pl-4">
            {t.clients.conclusion}
          </p>
        </div>
      </div>
    </section>
  )
}
