"use client"

import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0066FF" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Network lines */}
          <g stroke="url(#lineGradient)" strokeWidth="0.5" fill="none">
            <line x1="600" y1="100" x2="900" y2="200" />
            <line x1="900" y1="200" x2="1100" y2="150" />
            <line x1="900" y1="200" x2="950" y2="400" />
            <line x1="950" y1="400" x2="1100" y2="350" />
            <line x1="950" y1="400" x2="800" y2="500" />
            <line x1="800" y1="500" x2="600" y2="450" />
            <line x1="600" y1="450" x2="400" y2="550" />
            <line x1="400" y1="550" x2="200" y2="500" />
            <line x1="400" y1="550" x2="500" y2="700" />
            <line x1="500" y1="700" x2="700" y2="750" />
            <line x1="700" y1="750" x2="900" y2="700" />
            <line x1="900" y1="700" x2="1050" y2="600" />
            <line x1="1050" y1="600" x2="950" y2="400" />
            <line x1="200" y1="300" x2="400" y2="350" />
            <line x1="400" y1="350" x2="600" y2="450" />
            <line x1="100" y1="600" x2="200" y2="500" />
          </g>
          {/* Nodes */}
          <g fill="#0066FF">
            <circle cx="600" cy="100" r="3" />
            <circle cx="900" cy="200" r="4" />
            <circle cx="1100" cy="150" r="3" />
            <circle cx="950" cy="400" r="4" />
            <circle cx="1100" cy="350" r="3" />
            <circle cx="800" cy="500" r="3" />
            <circle cx="600" cy="450" r="4" />
            <circle cx="400" cy="550" r="3" />
            <circle cx="200" cy="500" r="3" />
            <circle cx="500" cy="700" r="3" />
            <circle cx="700" cy="750" r="4" />
            <circle cx="900" cy="700" r="3" />
            <circle cx="1050" cy="600" r="3" />
            <circle cx="200" cy="300" r="3" />
            <circle cx="400" cy="350" r="3" />
            <circle cx="100" cy="600" r="3" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 max-w-4xl text-balance text-foreground">
          {t.hero.title}
        </h1>

        <div className="space-y-6 max-w-2xl mb-10">
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.hero.description1}
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.hero.description2}
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.hero.description3}
          </p>
        </div>

        <a
          href="#contact"
          className="inline-block bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold px-8 py-4 text-sm tracking-wide transition-colors"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  )
}
