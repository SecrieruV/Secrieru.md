import { NextResponse, type NextRequest } from "next/server"
import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

const intl = createMiddleware(routing)

// Browsers send nb/nn for Norwegian; the site uses /no, so send those visitors there on first arrival.
export default function proxy(request: NextRequest) {
  const first = (request.headers.get("accept-language") ?? "").split(",")[0].trim().toLowerCase()
  if (request.nextUrl.pathname === "/" && !request.cookies.has("NEXT_LOCALE") && /^(nb|nn|no)(-|$)/.test(first)) {
    return NextResponse.redirect(new URL("/no", request.url))
  }
  return intl(request)
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
