/** @type {import('next').NextConfig} */

const LOCALES = ["en", "bn", "ar", "fr", "es", "zh", "ru", "de", "ja", "ko"];
const DEFAULT_LOCALE = "en";

// Program/section routes that previously produced broken nested links
// like /donation/contact or /adoption/partners.
const PROGRAM_SEGMENTS = [
  "donation",
  "adoption",
  "rescue",
  "awareness",
  "what-we-do",
  "volunteers",
  "join",
  "campaigns",
  "fundraising",
];

// Top-level destination pages that must always be reached directly,
// never nested under a program segment.
const TOP_LEVEL_TARGETS = ["contact", "partners"];

function buildMalformedNestedRedirects() {
  const redirects = [];

  for (const locale of LOCALES) {
    for (const segment of PROGRAM_SEGMENTS) {
      for (const target of TOP_LEVEL_TARGETS) {
        redirects.push({
          source: `/${locale}/${segment}/${target}`,
          destination: `/${locale}/${target}`,
          permanent: true,
        });
      }
    }
  }

  // Same malformed paths without a locale prefix.
  for (const segment of PROGRAM_SEGMENTS) {
    for (const target of TOP_LEVEL_TARGETS) {
      redirects.push({
        source: `/${segment}/${target}`,
        destination: `/${DEFAULT_LOCALE}/${target}`,
        permanent: true,
      });
    }
  }

  return redirects;
}

function buildBareTopLevelRedirects() {
  // /contact and /partners without a locale prefix -> default locale.
  return TOP_LEVEL_TARGETS.map((target) => ({
    source: `/${target}`,
    destination: `/${DEFAULT_LOCALE}/${target}`,
    permanent: true,
  }));
}

const nextConfig = {
  async redirects() {
    return [...buildMalformedNestedRedirects(), ...buildBareTopLevelRedirects()];
  },
};

module.exports = nextConfig;
