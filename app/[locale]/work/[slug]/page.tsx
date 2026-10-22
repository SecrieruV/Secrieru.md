import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Header } from "@/components/header"
import { Link } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { cases } from "@/lib/cases"
import { site } from "@/lib/site"

type Props = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => cases.map((c) => ({ locale, slug: c.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const c = cases.find((x) => x.slug === slug)
  if (!c) return {}
  const t = await getTranslations({ locale, namespace: `cases.${c.slug}` })
  const languages = Object.fromEntries(routing.locales.map((l) => [l, `/${l}/work/${slug}`]))
  return {
    title: `${t("title")} | ${site.name}`,
    description: t("summary"),
    alternates: { canonical: `/${locale}/work/${slug}`, languages },
    openGraph: { title: t("title"), description: t("summary"), url: `${site.domain}/${locale}/work/${slug}` },
  }
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="mb-3 text-lg font-semibold">{title}</h2>
      {children}
    </section>
  )
}

export default async function CasePage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const c = cases.find((x) => x.slug === slug)
  if (!c) notFound()

  const t = await getTranslations()
  const k = `cases.${c.slug}`
  const did = t.raw(`${k}.did`) as string[]
  const result = t.raw(`${k}.result`) as string[]

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Link href="/#work" className="text-sm text-muted hover:text-foreground">
          {t("work.back")}
        </Link>
        <article>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">{t(`${k}.title`)}</h1>
          <p className="mt-2 text-muted">{t(`${k}.role`)}</p>

          <Block title={t("case.context")}>
            <p className="prose-line">{t(`${k}.context`)}</p>
          </Block>
          <Block title={t("case.did")}>
            <ul className="prose-line list-disc space-y-2 pl-5">
              {did.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </Block>
          {c.hasMyRole && (
            <Block title={t("case.myRole")}>
              <p className="prose-line">{t(`${k}.myRoleText`)}</p>
            </Block>
          )}
          <Block title={t("case.result")}>
            <ul className="prose-line list-disc space-y-2 pl-5">
              {result.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </Block>
          {"liveUrl" in c && (
            <p className="mt-6">
              <a href={c.liveUrl} target="_blank" rel="noopener" className="text-accent underline underline-offset-2">
                {t("case.visit")}
              </a>
            </p>
          )}
          {c.stack && (
            <Block title={t("case.stack")}>
              <p>{c.stack}</p>
            </Block>
          )}
        </article>

        <div className="mt-14 border-t border-border pt-8">
          <p className="mb-4">{t("case.talk")}</p>
          <a
            href={site.calendar15}
            className="inline-block rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90"
          >
            {t("case.book")}
          </a>
        </div>
      </main>
    </>
  )
}
