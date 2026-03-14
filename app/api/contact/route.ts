import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, workEmail, companyWebsite, challenge } = body

    // Validate required fields
    if (!fullName || !workEmail) {
      return NextResponse.json(
        { error: "Full name and email are required" },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(workEmail)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "vladislav.secrieru@gmail.com",
      replyTo: workEmail,
      subject: `New inquiry from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0066FF;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${workEmail}">${workEmail}</a></p>
            <p><strong>Company Website:</strong> ${companyWebsite || "Not provided"}</p>
            <p><strong>Challenge:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 4px;">${challenge || "Not provided"}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Sent from your website contact form at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
