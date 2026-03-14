"use client"

import { useLanguage } from "@/lib/language-context"

export function InsightSection() {
  const { t } = useLanguage()

  return (
    <section id="insight" className="py-24 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent-blue text-xs tracking-[0.3em] mb-4 font-mono">
          {t.insight.label}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-balance max-w-3xl text-foreground">
          {t.insight.title}
        </h2>

        <div className="max-w-3xl space-y-6">
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.insight.description1}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {t.insight.description2}
          </p>
          <p className="text-foreground font-medium leading-relaxed border-l-2 border-accent-blue pl-4">
            {t.insight.description3}
          </p>
        </div>
      </div>
    </section>
  )
}
