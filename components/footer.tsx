"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-16 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-foreground font-medium mb-4">{t.footer.company}</p>
        <p className="text-muted-foreground text-sm mb-2">{t.footer.services}</p>
        <p className="text-muted-foreground text-sm mb-2">{t.footer.contact}</p>
        <p className="text-muted-foreground text-sm">{t.footer.location}</p>
      </div>
    </footer>
  )
}
