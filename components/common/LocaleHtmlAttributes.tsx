"use client";

import { useEffect } from "react";
import { isRtlLocale } from "../../lib/i18n";

/**
 * The root <html> tag lives in app/layout.tsx, above the [locale] segment,
 * so it can't read the active locale at render time. This syncs
 * lang/dir on the client once the locale is known.
 */
export function LocaleHtmlAttributes({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtlLocale(locale) ? "rtl" : "ltr";
  }, [locale]);

  return null;
}
