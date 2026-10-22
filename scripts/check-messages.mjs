// Fails the build when ru.json or ro.json is missing a key (or has an extra one) compared with en.json.
import { readFileSync } from "node:fs"

const load = (l) => JSON.parse(readFileSync(new URL(`../messages/${l}.json`, import.meta.url), "utf8"))
const paths = (v, p = "") =>
  Array.isArray(v)
    ? [p + `[${v.length}]`, ...v.flatMap((x, i) => paths(x, `${p}[${i}]`))]
    : v && typeof v === "object"
      ? Object.entries(v).flatMap(([k, x]) => paths(x, p ? `${p}.${k}` : k))
      : [p]

const base = new Set(paths(load("en")))
let bad = false
for (const l of ["no", "ru", "ro"]) {
  const other = new Set(paths(load(l)))
  for (const k of base) if (!other.has(k)) (bad = true), console.error(`${l}: missing ${k}`)
  for (const k of other) if (!base.has(k)) (bad = true), console.error(`${l}: extra ${k}`)
}
if (bad) process.exit(1)
console.log("messages OK: en, no, ru, ro share the same keys")
