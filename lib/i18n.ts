export const locales = ["en", "bn", "ar", "fr", "es", "zh", "ru", "de", "ja", "ko"] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  bn: "বাংলা",
  ar: "العربية",
  fr: "Français",
  es: "Español",
  zh: "中文",
  ru: "Русский",
  de: "Deutsch",
  ja: "日本語",
  ko: "한국어",
};

export const rtlLocales: readonly Locale[] = ["ar"];

export function isRtlLocale(locale: string): boolean {
  return (rtlLocales as readonly string[]).includes(locale);
}

