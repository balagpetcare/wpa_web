import { PageHero } from "../../../components/common/PageHero";
import { PageCta } from "../../../components/common/PageCta";
import { IconCardGrid } from "../../../components/common/IconCardGrid";
import { Timeline } from "../../../components/common/Timeline";
import { Section, SectionHeader } from "../../../components/sections/Section";
import { getImpactAndTrustContent } from "../../../lib/impactContent";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function TransparencyPage({ params }: PageProps) {
  const { locale } = await params;
  const { transparency } = getImpactAndTrustContent(locale);

  return (
    <>
      <PageHero
        eyebrow={transparency.hero.eyebrow}
        title={transparency.hero.title}
        subtitle={transparency.hero.subtitle}
        primaryCta={{ label: transparency.hero.primaryLabel, href: `/${locale}${transparency.hero.primaryHref}` }}
        secondaryCta={{ label: transparency.hero.secondaryLabel, href: `/${locale}${transparency.hero.secondaryHref}` }}
      />

      <Section variant="white">
        <div className="container">
          <SectionHeader eyebrow={transparency.intro.eyebrow} title={transparency.intro.title} center={false} />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px" }}>
            {transparency.intro.paragraphs.map((paragraph, index) => (
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
            eyebrow={transparency.fundFlow.eyebrow}
            title={transparency.fundFlow.title}
            subtitle={transparency.fundFlow.subtitle}
          />
          <Timeline steps={transparency.fundFlow.steps} />
        </div>
      </Section>

      <Section variant="white">
        <div className="container">
          <SectionHeader
            eyebrow={transparency.donorConfidence.eyebrow}
            title={transparency.donorConfidence.title}
            subtitle={transparency.donorConfidence.subtitle}
          />
          <IconCardGrid items={transparency.donorConfidence.items} columns={4} />
        </div>
      </Section>

      <Section variant="navy">
        <div className="container">
          <SectionHeader
            eyebrow={transparency.trustFeatures.eyebrow}
            title={transparency.trustFeatures.title}
            subtitle={transparency.trustFeatures.subtitle}
          />
          <IconCardGrid items={transparency.trustFeatures.items} columns={3} cardVariant="card--navy" />
        </div>
      </Section>

      <PageCta
        title={transparency.cta.title}
        subtitle={transparency.cta.subtitle}
        primaryLabel={transparency.cta.primaryLabel}
        primaryHref={`/${locale}${transparency.cta.primaryHref}`}
        secondaryLabel={transparency.cta.secondaryLabel}
        secondaryHref={`/${locale}${transparency.cta.secondaryHref}`}
        extraCtas={transparency.cta.extraCtas?.map((c) => ({ label: c.label, href: `/${locale}${c.href}` }))}
      />
    </>
  );
}
