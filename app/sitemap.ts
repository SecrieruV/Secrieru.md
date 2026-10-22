import type { MetadataRoute } from "next"
import { routing } from "@/i18n/routing"
import { cases } from "@/lib/cases"
import { site } from "@/lib/site"

const entry = (path: string, priority: number): MetadataRoute.Sitemap =>
  routing.locales.map((locale) => ({
    url: `${site.domain}/${locale}${path}`,
    changeFrequency: "monthly",
    priority,
    alternates: {
      languages: Object.fromEntries(routing.locales.map((l) => [l, `${site.domain}/${l}${path}`])),
    },
  }))

export default function sitemap(): MetadataRoute.Sitemap {
  return [...entry("", 1), ...cases.flatMap((c) => entry(`/work/${c.slug}`, 0.8))]
}
