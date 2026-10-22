import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["no", "en", "ro", "ru"],
  defaultLocale: "en",
  localePrefix: "always",
})

export type Locale = (typeof routing.locales)[number]

export const localeNames: Record<Locale, string> = { no: "NO", en: "EN", ro: "RO", ru: "RU" }
export const ogLocales: Record<Locale, string> = { no: "nb_NO", en: "en_US", ro: "ro_RO", ru: "ru_RU" }
