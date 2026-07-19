import { PageHero } from "../../../components/common/PageHero";
import { PageCta } from "../../../components/common/PageCta";
import { IconCardGrid } from "../../../components/common/IconCardGrid";
import { StatGrid } from "../../../components/common/StatGrid";
import { Section, SectionHeader } from "../../../components/sections/Section";
import { getImpactAndTrustContent } from "../../../lib/impactContent";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ImpactPage({ params }: PageProps) {
  const { locale } = await params;
  const { impact } = getImpactAndTrustContent(locale);

  return (
    <>
      <PageHero
        eyebrow={impact.hero.eyebrow}
        title={impact.hero.title}
        subtitle={impact.hero.subtitle}
        primaryCta={{ label: impact.hero.primaryLabel, href: `/${locale}${impact.hero.primaryHref}` }}
        secondaryCta={{ label: impact.hero.secondaryLabel, href: `/${locale}${impact.hero.secondaryHref}` }}
      />

      <Section variant="white">
        <div className="container">
          <SectionHeader eyebrow={impact.intro.eyebrow} title={impact.intro.title} center={false} />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px" }}>
            {impact.intro.paragraphs.map((paragraph, index) => (
              <p key={index} className="card__desc" style={{ fontSize: "1.0625rem" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="navy">
        <div className="container">
          <SectionHeader eyebrow={impact.metrics.eyebrow} title={impact.metrics.title} subtitle={impact.metrics.subtitle} />
          <StatGrid items={impact.metrics.items} cardVariant="card--navy" />
        </div>
      </Section>

      <Section variant="light">
        <div className="container">
          <SectionHeader
            eyebrow={impact.howMeasured.eyebrow}
            title={impact.howMeasured.title}
            subtitle={impact.howMeasured.subtitle}
          />
          <IconCardGrid items={impact.howMeasured.items} columns={4} />
        </div>
      </Section>

      <PageCta
        title={impact.cta.title}
        subtitle={impact.cta.subtitle}
        primaryLabel={impact.cta.primaryLabel}
        primaryHref={`/${locale}${impact.cta.primaryHref}`}
        secondaryLabel={impact.cta.secondaryLabel}
        secondaryHref={`/${locale}${impact.cta.secondaryHref}`}
        extraCtas={impact.cta.extraCtas?.map((c) => ({ label: c.label, href: `/${locale}${c.href}` }))}
      />
    </>
  );
}
