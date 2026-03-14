"use client"

import { useLanguage } from "@/lib/language-context"

export function ProblemSection() {
  const { t } = useLanguage()

  return (
    <section id="problem" className="py-24 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent-blue text-xs tracking-[0.3em] mb-4 font-mono">
          {t.problem.label}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-balance max-w-3xl text-foreground">
          {t.problem.title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.problem.description1}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.problem.description2}
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">
              {t.problem.symptomsTitle}
            </h3>
            <ul className="space-y-3">
              {t.problem.symptoms.map((symptom, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-accent-blue mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                  {symptom}
                </li>
              ))}
            </ul>
            <p className="text-foreground font-medium mt-8 border-l-2 border-accent-blue pl-4">
              {t.problem.conclusion}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
