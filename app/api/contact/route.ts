import { NextResponse } from "next/server"
import { Resend } from "resend"

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")

const clip = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "")

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Honeypot: pretend success so bots do not retry
    if (clip(body.website, 200)) return NextResponse.json({ success: true })

    const name = clip(body.name, 120)
    const email = clip(body.email, 200)
    const message = clip(body.message, 4000)

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set")
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
    }

    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM || "Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_TO || "vladislav.secrieru@gmail.com",
      replyTo: email,
      subject: `New message from ${name.replace(/[\r\n]+/g, " ")}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message) || "Not provided"}</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
