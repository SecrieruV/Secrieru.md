"use client"

import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent-blue text-xs tracking-[0.3em] mb-4 font-mono">
          {t.about.label}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-balance text-foreground">
          {t.about.title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.description2}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.description3}
            </p>
          </div>

          <div>
            <ul className="space-y-4">
              {t.about.credentials.map((credential, idx) => (
                <li key={idx} className="flex items-start gap-3 text-foreground">
                  <span className="text-accent-blue mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                  {credential}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
