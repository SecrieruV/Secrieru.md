"use client"

import { useLanguage } from "@/lib/language-context"

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section id="cta" className="py-24 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent-blue text-xs tracking-[0.3em] mb-4 font-mono">
          {t.cta.label}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-balance text-foreground">
          {t.cta.title}
        </h2>

        <div className="max-w-2xl space-y-6 mb-10">
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.cta.description1}
          </p>
          <p className="text-foreground font-medium leading-relaxed">
            {t.cta.description2}
          </p>
        </div>

        <a
          href="#contact"
          className="inline-block bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold px-8 py-4 text-sm tracking-wide transition-colors"
        >
          {t.cta.button}
        </a>
      </div>
    </section>
  )
}
