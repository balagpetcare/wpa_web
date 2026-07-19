import { locales } from "./i18n";

const EXTERNAL_HREF_PATTERN = /^(https?:|mailto:|tel:|#)/i;

/**
 * Replaces only the leading locale segment of a pathname, preserving the rest
 * of the route. Adds the locale if the pathname has none.
 * e.g. getLocalizedPathname("/en/donation/contact", "bn") -> "/bn/donation/contact"
 *      getLocalizedPathname("/rescue", "bn") -> "/bn/rescue"
 */
export function getLocalizedPathname(pathname: string, nextLocale: string): string {
  const parts = (pathname || "/").split("/").filter(Boolean);

  if (parts.length > 0 && (locales as readonly string[]).includes(parts[0])) {
    parts[0] = nextLocale;
  } else {
    parts.unshift(nextLocale);
  }

  return "/" + parts.join("/");
}

/**
 * Builds a locale-aware absolute href, e.g. localizedHref("en", "/contact") -> "/en/contact".
 * Passes through external/anchor links untouched and avoids double locale prefixes
 * (e.g. localizedHref("en", "/en/contact") -> "/en/contact", not "/en/en/contact").
 */
export function localizedHref(locale: string, path: string): string {
  if (EXTERNAL_HREF_PATTERN.test(path)) return path;

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const segments = cleanPath.split("/").filter(Boolean);
  const alreadyLocalized = segments.length > 0 && (locales as readonly string[]).includes(segments[0]);

  return alreadyLocalized ? `/${segments.join("/")}` : `/${locale}${cleanPath}`;
}
