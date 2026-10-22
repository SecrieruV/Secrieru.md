import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import { notFound } from "next/navigation"
import { Analytics } from "@vercel/analytics/next"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { ThemeProvider } from "next-themes"
import { routing, ogLocales } from "@/i18n/routing"
import { site } from "@/lib/site"
import "../globals.css"

const geist = Geist({ subsets: ["latin", "cyrillic"], variable: "--font-geist-sans", display: "swap" })

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> }

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "meta" })
  const languages = Object.fromEntries(routing.locales.map((l) => [l, `/${l}`]))

  return {
    metadataBase: new URL(site.domain),
    title: t("title"),
    description: t("description"),
    authors: [{ name: site.name }],
    creator: site.name,
    alternates: { canonical: `/${locale}`, languages: { ...languages, "x-default": `/${routing.defaultLocale}` } },
    openGraph: {
      type: "website",
      locale: ogLocales[locale as keyof typeof ogLocales],
      alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
      url: `${site.domain}/${locale}`,
      title: t("title"),
      description: t("description"),
      siteName: site.name,
    },
    twitter: { card: "summary_large_image", title: t("title"), description: t("description") },
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
        { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-icon.png",
    },
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#1b1d22" },
  ],
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "meta" })

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: `${site.domain}/${locale}`,
    email: site.email,
    description: t("personDescription"),
    address: { "@type": "PostalAddress", addressLocality: "Oslo", addressCountry: "NO" },
    sameAs: [site.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Financial University under the Government of the Russian Federation",
    },
    knowsLanguage: ["en", "ro", "ru", "no", "tr"],
    knowsAbout: ["FP&A", "Financial data architecture", "Management reporting", "Snowflake", "dbt", "Power BI"],
  }

  return (
    <html lang={locale} suppressHydrationWarning className={geist.variable}>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
