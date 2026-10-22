"use client"

import { useEffect, useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import { Link, usePathname } from "@/i18n/navigation"
import { routing, localeNames } from "@/i18n/routing"

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
}

function SunIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg {...iconProps}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function ThemeToggle() {
  const t = useTranslations("nav")
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const dark = mounted && resolvedTheme === "dark"
  const nextLabel = dark ? t("themeLight") : t("themeDark")

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={t("themeSwitch", { mode: nextLabel.toLowerCase() })}
      title={t("themeSwitch", { mode: nextLabel.toLowerCase() })}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted hover:text-foreground"
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

function LanguageSwitcher() {
  const t = useTranslations("nav")
  const current = useLocale()
  const pathname = usePathname()

  return (
    <ul aria-label={t("language")} className="flex items-center gap-2 text-sm">
      {routing.locales.map((l) => (
        <li key={l}>
          <Link
            href={pathname}
            locale={l}
            hrefLang={l}
            aria-current={l === current ? "true" : undefined}
            className={l === current ? "font-semibold text-foreground" : "text-muted hover:text-foreground"}
          >
            {localeNames[l]}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function Header() {
  const t = useTranslations("nav")
  const links = [
    { href: "/#work", label: t("work") },
    { href: "/#experience", label: t("experience") },
    { href: "/#working-together", label: t("together") },
    { href: "/#contact", label: t("contact") },
  ] as const

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:px-6">
        <Link href="/" className="font-semibold tracking-tight">
          Vladislav Secrieru
        </Link>
        <nav aria-label={t("main")} className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-muted hover:text-foreground">
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  )
}
