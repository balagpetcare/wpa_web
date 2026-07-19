/**
 * Validates every locale dictionary against the `en` (canonical) dictionary
 * for each content module: same key structure, no empty values, no
 * placeholder/HTML-tag mismatches. Run with:
 *   npx tsx scripts/validate-i18n.ts
 */
import { locales } from "../lib/i18n";
import { getHomeContent } from "../lib/content";
import { getPagesContent } from "../lib/pagesContent";
import { getProgramsContent } from "../lib/programsContent";
import { getGetInvolvedContent } from "../lib/getInvolvedContent";
import { getImpactAndTrustContent } from "../lib/impactContent";
import { getNewsContent } from "../lib/newsContent";

type Getter = (locale: string) => unknown;

const MODULES: { name: string; getter: Getter }[] = [
  { name: "content.ts (Home)", getter: getHomeContent },
  { name: "pagesContent.ts", getter: getPagesContent },
  { name: "programsContent.ts", getter: getProgramsContent },
  { name: "getInvolvedContent.ts", getter: getGetInvolvedContent },
  { name: "impactContent.ts", getter: getImpactAndTrustContent },
  { name: "newsContent.ts", getter: getNewsContent },
];

// Route/href-like or non-prose leaf keys we intentionally skip for
// "empty value" and "placeholder" checks (paths, ids, icons, numeric stats).
const SKIP_EMPTY_CHECK_KEYS = new Set([
  "href",
  "id",
  "icon",
  "image",
  "backgroundImage",
  "backgroundImageMobile",
  "videoSrc",
  "videoPoster",
  "preset",
  "imagePosition",
  "mobileImagePosition",
]);

const PLACEHOLDER_PATTERN = /\{\{[^}]*\}\}/g;
const HTML_TAG_PATTERN = /<\/?[a-zA-Z][a-zA-Z0-9]*[^>]*>/g;

interface Issue {
  module: string;
  locale: string;
  path: string;
  type: "missing-key" | "extra-key" | "empty-value" | "placeholder-mismatch" | "html-tag-mismatch";
  detail: string;
}

const issues: Issue[] = [];

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function normalizeTags(tags: string[]): string[] {
  return tags.map((t) => t.replace(/\s+/g, " ").trim()).sort();
}

function compare(module: string, locale: string, path: string, enValue: unknown, localeValue: unknown) {
  if (localeValue === undefined) {
    issues.push({ module, locale, path, type: "missing-key", detail: "key missing in locale dictionary" });
    return;
  }

  if (Array.isArray(enValue)) {
    if (!Array.isArray(localeValue)) {
      issues.push({ module, locale, path, type: "missing-key", detail: "expected array" });
      return;
    }
    if (enValue.length !== localeValue.length) {
      issues.push({
        module,
        locale,
        path,
        type: "missing-key",
        detail: `array length mismatch: en=${enValue.length} ${locale}=${localeValue.length}`,
      });
    }
    const len = Math.min(enValue.length, localeValue.length);
    for (let i = 0; i < len; i++) {
      compare(module, locale, `${path}[${i}]`, enValue[i], localeValue[i]);
    }
    return;
  }

  if (isPlainObject(enValue)) {
    if (!isPlainObject(localeValue)) {
      issues.push({ module, locale, path, type: "missing-key", detail: "expected object" });
      return;
    }
    const enKeys = Object.keys(enValue);
    const localeKeys = Object.keys(localeValue);
    for (const key of enKeys) {
      compare(module, locale, path ? `${path}.${key}` : key, enValue[key], localeValue[key]);
    }
    for (const key of localeKeys) {
      if (!enKeys.includes(key)) {
        issues.push({ module, locale, path: path ? `${path}.${key}` : key, type: "extra-key", detail: "key not present in en" });
      }
    }
    return;
  }

  if (typeof enValue === "string") {
    const leafKey = path.split(/[.[]/).pop()?.replace(/\]$/, "") ?? "";
    const skipEmpty = SKIP_EMPTY_CHECK_KEYS.has(leafKey);

    if (typeof localeValue !== "string") {
      issues.push({ module, locale, path, type: "missing-key", detail: "expected string" });
      return;
    }

    if (!skipEmpty) {
      if (localeValue.trim() === "") {
        issues.push({ module, locale, path, type: "empty-value", detail: "translated value is empty" });
      }

      const enPlaceholders = normalizeTags(enValue.match(PLACEHOLDER_PATTERN) ?? []);
      const localePlaceholders = normalizeTags(localeValue.match(PLACEHOLDER_PATTERN) ?? []);
      if (JSON.stringify(enPlaceholders) !== JSON.stringify(localePlaceholders)) {
        issues.push({
          module,
          locale,
          path,
          type: "placeholder-mismatch",
          detail: `en=${JSON.stringify(enPlaceholders)} ${locale}=${JSON.stringify(localePlaceholders)}`,
        });
      }

      const enTags = normalizeTags(enValue.match(HTML_TAG_PATTERN) ?? []);
      const localeTags = normalizeTags(localeValue.match(HTML_TAG_PATTERN) ?? []);
      if (JSON.stringify(enTags) !== JSON.stringify(localeTags)) {
        issues.push({
          module,
          locale,
          path,
          type: "html-tag-mismatch",
          detail: `en=${JSON.stringify(enTags)} ${locale}=${JSON.stringify(localeTags)}`,
        });
      }
    }
  }
}

for (const { name, getter } of MODULES) {
  const en = getter("en");
  for (const locale of locales) {
    if (locale === "en") continue;
    const localeContent = getter(locale);
    compare(name, locale, "", en, localeContent);
  }
}

if (issues.length === 0) {
  console.log("i18n validation passed: all locale dictionaries match en key structure, no empty values, no placeholder/tag mismatches.");
  process.exit(0);
}

console.log(`i18n validation found ${issues.length} issue(s):\n`);
const byModule = new Map<string, Issue[]>();
for (const issue of issues) {
  const list = byModule.get(issue.module) ?? [];
  list.push(issue);
  byModule.set(issue.module, list);
}

for (const [module, moduleIssues] of byModule) {
  console.log(`\n=== ${module} (${moduleIssues.length} issue(s)) ===`);
  for (const issue of moduleIssues.slice(0, 100)) {
    console.log(`  [${issue.locale}] ${issue.type} at "${issue.path}": ${issue.detail}`);
  }
  if (moduleIssues.length > 100) {
    console.log(`  ... and ${moduleIssues.length - 100} more`);
  }
}

process.exit(1);
