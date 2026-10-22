import { ImageResponse } from "next/og"
import en from "@/messages/en.json"
import ru from "@/messages/ru.json"
import ro from "@/messages/ro.json"

export const alt = "Vladislav Secrieru"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const messages = { en, ru, ro } as const

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const m = (messages[locale as keyof typeof messages] ?? en).meta

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#fbfaf8",
          color: "#1b1d22",
        }}
      >
        <div style={{ fontSize: 84, fontWeight: 700 }}>Vladislav Secrieru</div>
        <div style={{ fontSize: 40, marginTop: 24 }}>{m.ogTagline}</div>
        <div style={{ fontSize: 30, marginTop: 40, color: "#2a55c4" }}>{m.ogStatus}</div>
      </div>
    ),
    size,
  )
}
