import { getTranslations, setRequestLocale } from "next-intl/server"
import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact-form"
import { Link } from "@/i18n/navigation"
import { cases } from "@/lib/cases"
import { site } from "@/lib/site"

const btnPrimary =
  "inline-block rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90"
const btnSecondary = "inline-block rounded-md border border-border px-5 py-2.5 text-sm font-medium hover:bg-surface"
const textLink = "text-accent underline underline-offset-2"

type Experience = { company: string; role: string; place: string; dates: string; text: string }
type Offer = { title: string; text: string }
type Faq = { q: string; a: string }

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="border-t border-border py-16">
      <h2 id={`${id}-h`} className="mb-8 text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations()

  const experience = t.raw("experience.items") as Experience[]
  const offers = t.raw("together.offers") as Offer[]
  const faq = t.raw("faq.items") as Faq[]

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        <section aria-labelledby="hero-h" className="py-16 sm:py-24">
          <h1 id="hero-h" className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Vladislav Secrieru
          </h1>
          <p className="mt-4 max-w-2xl text-xl sm:text-2xl">{t("hero.subline")}</p>
          <p className="prose-line mt-6 text-muted">{t("hero.body")}</p>
          <p className="mt-4 font-medium">{t("hero.status")}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className={btnPrimary}>
              {t("hero.seeWork")}
            </a>
            {site.cvUrl && (
              <a href={site.cvUrl} className={btnSecondary}>
                {t("hero.cv")}
              </a>
            )}
            <a href={site.calendar15} className={btnSecondary}>
              {t("hero.book")}
            </a>
            <a href={site.linkedin} className={btnSecondary} rel="me noopener" target="_blank">
              {t("hero.linkedin")}
            </a>
          </div>
        </section>

        <Section id="work" title={t("work.title")}>
          <ul className="grid gap-4 md:grid-cols-2">
            {cases.map((c) => (
              <li key={c.slug} className="relative rounded-lg border border-border p-5 hover:bg-surface">
                <p className="text-sm text-muted">{t(`cases.${c.slug}.label`)}</p>
                <h3 className="mt-2 text-lg font-semibold leading-snug">
                  <Link href={`/work/${c.slug}`} className="after:absolute after:inset-0">
                    {t(`cases.${c.slug}.title`)}
                  </Link>
                </h3>
                <p className="mt-3 text-sm text-muted">{t(`cases.${c.slug}.summary`)}</p>
                <p className="mt-4 text-sm font-medium text-accent">{t("work.read")}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-lg border border-border p-5">
            <p className="text-sm text-muted">{t("work.north40.label")}</p>
            <h3 className="mt-1 font-semibold">{t("work.north40.title")}</h3>
            <p className="prose-line mt-2 text-sm text-muted">{t("work.north40.summary")}</p>
          </div>
        </Section>

        <Section id="experience" title={t("experience.title")}>
          <ol className="space-y-8">
            {experience.map((e) => (
              <li key={e.company}>
                <h3 className="font-semibold">
                  {e.company}, {e.role}
                </h3>
                <p className="text-sm text-muted">
                  {e.place ? `${e.place}, ` : ""}
                  {e.dates}
                </p>
                <p className="prose-line mt-2">{e.text}</p>
              </li>
            ))}
          </ol>
          <dl className="mt-10 grid gap-4 text-sm sm:grid-cols-2">
            {(["education", "acca", "languages", "tools"] as const).map((k) => (
              <div key={k}>
                <dt className="font-semibold">{t(`experience.${k}Label`)}</dt>
                <dd className="text-muted">{t(`experience.${k}`)}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="working-together" title={t("together.title")}>
          <p className="prose-line">{t("together.intro")}</p>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {offers.map((o) => (
              <li key={o.title} className="rounded-lg border border-border p-5">
                <h3 className="font-semibold">{o.title}</h3>
                <p className="mt-2 text-sm text-muted">{o.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <h3 className="font-semibold">{t("together.fitTitle")}</h3>
            <p className="prose-line mt-2 text-sm text-muted">{t("together.fit")}</p>
          </div>
          <a href={site.calendar30} className={`${btnPrimary} mt-8`}>
            {t("together.book")}
          </a>
        </Section>

        <Section id="faq" title={t("faq.title")}>
          <div className="prose-line divide-y divide-border border-y border-border">
            {faq.map((f) => (
              <details key={f.q} className="py-4">
                <summary className="cursor-pointer font-medium">{f.q}</summary>
                <p className="mt-2 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section id="contact" title={t("contact.title")}>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-3">
              <p>
                {t("contact.email")}:{" "}
                <a href={`mailto:${site.email}`} className={textLink}>
                  {site.email}
                </a>
              </p>
              <p>
                {t("contact.linkedin")}:{" "}
                <a href={site.linkedin} className={textLink} rel="me noopener" target="_blank">
                  linkedin.com/in/vladislav-secrieru
                </a>
              </p>
              <p>
                {t("contact.calendar")}:{" "}
                <a href={site.calendar15} className={textLink}>
                  {t("contact.min15")}
                </a>{" "}
                {t("contact.or")}{" "}
                <a href={site.calendar30} className={textLink}>
                  {t("contact.min30")}
                </a>
              </p>
              <p className="text-muted">{t("contact.location")}</p>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>
      <footer className="border-t border-border py-8 text-sm text-muted">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">{t("footer.text")}</div>
      </footer>
    </>
  )
}
