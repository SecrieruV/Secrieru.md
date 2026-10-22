// Language-independent facts about each case. All text lives in messages/*.json under cases.<slug>.
export const cases = [
  { slug: "25-legal-entities", hasMyRole: true, stack: "Snowflake, SQL, Python, Power BI, Oracle FCCS" },
  { slug: "sales-funnel", hasMyRole: false, stack: null },
  { slug: "ai-reporting", hasMyRole: false, stack: "dbt, DuckDB, Postgres, Python, Next.js, Claude API" },
  {
    slug: "cahul-map",
    hasMyRole: false,
    stack: "TypeScript, Preact, MapLibre GL, Python, Cloudflare Pages",
    liveUrl: "https://cahulmap.pages.dev",
  },
] as const satisfies readonly {
  slug: string
  hasMyRole: boolean
  stack: string | null
  liveUrl?: string
}[]

export type CaseSlug = (typeof cases)[number]["slug"]
