import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["en", "ru", "ro"],
  defaultLocale: "en",
  localePrefix: "always",
})

export type Locale = (typeof routing.locales)[number]

export const localeNames: Record<Locale, string> = { en: "EN", ru: "RU", ro: "RO" }
export const ogLocales: Record<Locale, string> = { en: "en_US", ru: "ru_RU", ro: "ro_RO" }
