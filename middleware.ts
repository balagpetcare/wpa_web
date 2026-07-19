import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["en", "bn", "ar", "fr", "es", "zh", "ru", "de", "ja", "ko"] as const;
const DEFAULT_LOCALE = "en";

function getPreferredLocale(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language") || "";

  // Parse languages sorted by quality
  const languages = acceptLang
    .split(",")
    .map((entry) => {
      const [tag, q = "1"] = entry.trim().split(";q=");
      return { tag: tag.toLowerCase().slice(0, 2), q: Number(q) || 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const lang of languages) {
    if ((SUPPORTED_LOCALES as readonly string[]).includes(lang.tag)) {
      return lang.tag;
    }
  }

  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only handle root path
  if (pathname !== "/") {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/"],
};
