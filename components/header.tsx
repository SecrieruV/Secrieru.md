"use client"

import { useLanguage, type Language } from "@/lib/language-context"

export function Header() {
  const { language, setLanguage, t } = useLanguage()

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
    { code: "ro", label: "RO" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-foreground font-medium tracking-widest text-sm">
          VLADISLAV SECRIERU
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#approach" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">
            {t.nav.approach}
          </a>
          <a href="#case" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">
            {t.nav.caseStudies}
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">
            {t.nav.about}
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide">
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-1 text-sm">
          {languages.map((lang, idx) => (
            <span key={lang.code} className="flex items-center">
              <button
                onClick={() => setLanguage(lang.code)}
                className={`transition-colors ${
                  language === lang.code
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {lang.label}
              </button>
              {idx < languages.length - 1 && (
                <span className="text-muted-foreground mx-1">/</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
