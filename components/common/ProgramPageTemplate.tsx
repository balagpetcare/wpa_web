import { PageHero } from "./PageHero";
import { PageCta } from "./PageCta";
import { IconCardGrid } from "./IconCardGrid";
import { Timeline } from "./Timeline";
import { Section, SectionHeader } from "../sections/Section";
import type { ProgramPageContent } from "../../lib/programsContent";

export function ProgramPageTemplate({ locale, content }: { locale: string; content: ProgramPageContent }) {
  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        primaryCta={{ label: content.hero.primaryLabel, href: `/${locale}${content.hero.primaryHref}` }}
        secondaryCta={{ label: content.hero.secondaryLabel, href: `/${locale}${content.hero.secondaryHref}` }}
      />

      <Section variant="white">
        <div className="container">
          <SectionHeader eyebrow={content.intro.eyebrow} title={content.intro.title} center={false} />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px" }}>
            {content.intro.paragraphs.map((paragraph, index) => (
              <p key={index} className="card__desc" style={{ fontSize: "1.0625rem" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="light">
        <div className="container">
          <SectionHeader
            eyebrow={content.howItWorks.eyebrow}
            title={content.howItWorks.title}
            subtitle={content.howItWorks.subtitle}
          />
          <Timeline steps={content.howItWorks.steps} />
        </div>
      </Section>

      <Section variant="white">
        <div className="container">
          <SectionHeader
            eyebrow={content.participants.eyebrow}
            title={content.participants.title}
            subtitle={content.participants.subtitle}
          />
          <IconCardGrid items={content.participants.items} columns={4} />
        </div>
      </Section>

      <Section variant="navy">
        <div className="container">
          <SectionHeader
            eyebrow={content.benefits.eyebrow}
            title={content.benefits.title}
            subtitle={content.benefits.subtitle}
          />
          <IconCardGrid items={content.benefits.items} columns={4} cardVariant="card--navy" />
        </div>
      </Section>

      <Section variant="light">
        <div className="container">
          <SectionHeader eyebrow={content.trust.eyebrow} title={content.trust.title} subtitle={content.trust.subtitle} />
          <IconCardGrid items={content.trust.items} columns={3} />
        </div>
      </Section>

      <Section variant="white">
        <div className="container">
          <SectionHeader eyebrow={content.related.eyebrow} title={content.related.title} />
          <IconCardGrid
            items={content.related.items.map((item) => ({ ...item, href: item.href ? `/${locale}${item.href}` : undefined }))}
            columns={3}
          />
        </div>
      </Section>

      <PageCta
        title={content.cta.title}
        subtitle={content.cta.subtitle}
        primaryLabel={content.cta.primaryLabel}
        primaryHref={`/${locale}${content.cta.primaryHref}`}
        secondaryLabel={content.cta.secondaryLabel}
        secondaryHref={`/${locale}${content.cta.secondaryHref}`}
      />
    </>
  );
}
