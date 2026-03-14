"use client"

import { useLanguage } from "@/lib/language-context"
import { Check } from "lucide-react"

export function CaseStudySection() {
  const { t } = useLanguage()

  return (
    <section id="case" className="py-24 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-accent-blue text-xs tracking-[0.3em] mb-4 font-mono">
          {t.caseStudy.label}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-balance text-foreground">
          {t.caseStudy.title}
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* The Situation */}
          <div className="border border-border/50 p-8">
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              {t.caseStudy.situationTitle}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.caseStudy.situationDescription}
            </p>
            <ul className="space-y-3 mb-6">
              {t.caseStudy.situationList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-accent-blue mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-foreground text-sm font-medium">
              {t.caseStudy.situationConclusion}
            </p>
          </div>

          {/* The Transformation */}
          <div className="border border-border/50 p-8">
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              {t.caseStudy.transformationTitle}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.caseStudy.transformationDescription}
            </p>
            <p className="text-foreground text-sm font-medium mb-4">
              {t.caseStudy.transformationSubtitle}
            </p>
            <ul className="space-y-3">
              {t.caseStudy.transformationList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-accent-blue mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* The Impact */}
          <div className="border border-accent-blue/50 p-8 bg-accent-blue/5">
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              {t.caseStudy.impactTitle}
            </h3>
            <ul className="space-y-4">
              {t.caseStudy.impactList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-accent-blue flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
