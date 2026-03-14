"use client"

import { useLanguage } from "@/lib/language-context"

export function ApproachSection() {
  const { t } = useLanguage()

  return (
    <section id="approach" className="py-24 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent-blue text-xs tracking-[0.3em] mb-4 font-mono">
          {t.approach.label}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-balance text-foreground">
          {t.approach.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.approach.steps.map((step) => (
            <div
              key={step.number}
              className="border border-border/50 p-8 hover:border-border transition-colors"
            >
              <span className="text-accent-blue text-3xl font-bold mb-4 block">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
