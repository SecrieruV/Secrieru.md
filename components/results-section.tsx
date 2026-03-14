"use client"

import { useLanguage } from "@/lib/language-context"

export function ResultsSection() {
  const { t } = useLanguage()

  return (
    <section id="results" className="py-24 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent-blue text-xs tracking-[0.3em] mb-4 font-mono">
          {t.results.label}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-balance text-foreground">
          {t.results.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {t.results.items.map((item, idx) => (
            <div
              key={idx}
              className="border border-border/50 p-8 hover:border-border transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
