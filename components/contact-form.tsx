"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"

type Status = "idle" | "loading" | "success" | "error"

const field =
  "w-full rounded-md border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted"

export function ContactForm() {
  const t = useTranslations("contact.form")
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setStatus("loading")
    setError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error || "failed")
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
      setError(t("error"))
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-describedby="form-status">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm">
          {t("name")}
        </label>
        <input id="name" name="name" required maxLength={120} autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm">
          {t("email")}
        </label>
        <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm">
          {t("message")}
        </label>
        <textarea id="message" name="message" rows={4} maxLength={4000} className={field} />
      </div>
      {/* Honeypot: hidden from people, filled by bots */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90 disabled:opacity-50"
      >
        {status === "loading" ? t("sending") : t("send")}
      </button>
      <p id="form-status" role="status" className="text-sm">
        {status === "success" && t("success")}
        {status === "error" && <span className="text-red-700 dark:text-red-400">{error}</span>}
      </p>
    </form>
  )
}
