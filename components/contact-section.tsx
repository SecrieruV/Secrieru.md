"use client"

import { useLanguage } from "@/lib/language-context"
import { useState } from "react"

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyWebsite: "",
    challenge: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setStatus("success")
      setFormData({ fullName: "", workEmail: "", companyWebsite: "", challenge: "" })
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong")
    }
  }

  return (
    <section id="contact" className="py-24 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-accent-blue text-xs tracking-[0.3em] mb-4 font-mono">
              {t.contact.label}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance text-foreground">
              {t.contact.title}
            </h2>
            {status === "success" && (
              <div className="p-4 border border-green-500/50 bg-green-500/10 text-green-400 font-mono text-sm">
                {t.contact.form.success || "Thank you! Your message has been sent successfully."}
              </div>
            )}
            {status === "error" && (
              <div className="p-4 border border-red-500/50 bg-red-500/10 text-red-400 font-mono text-sm">
                {errorMessage}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-1">
            <div className="border-b border-border/50">
              <input
                type="text"
                placeholder={t.contact.form.fullName}
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                className="w-full bg-transparent py-4 text-foreground placeholder:text-muted-foreground focus:outline-none font-mono"
              />
            </div>
            <div className="border-b border-border/50">
              <input
                type="email"
                placeholder={t.contact.form.workEmail}
                value={formData.workEmail}
                onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                required
                className="w-full bg-transparent py-4 text-foreground placeholder:text-muted-foreground focus:outline-none font-mono"
              />
            </div>
            <div className="border-b border-border/50">
              <input
                type="text"
                placeholder={t.contact.form.companyWebsite}
                value={formData.companyWebsite}
                onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                className="w-full bg-transparent py-4 text-foreground placeholder:text-muted-foreground focus:outline-none font-mono"
              />
            </div>
            <div className="border-b border-border/50">
              <textarea
                placeholder={t.contact.form.challenge}
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                rows={3}
                className="w-full bg-transparent py-4 text-foreground placeholder:text-muted-foreground focus:outline-none font-mono resize-none"
              />
            </div>
            <div className="pt-6">
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold px-8 py-4 text-sm tracking-wide transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : t.contact.form.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
