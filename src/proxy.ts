import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const locale = pathname.startsWith("/en") ? "en" : "es";
  const host = request.headers.get("host") || "";

  const response = NextResponse.next();
  response.headers.set("x-locale", locale);

  if (host.includes("vercel.app")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|og-image.jpg|brand).*)"],
};
