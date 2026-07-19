import { PageHero } from "../../../components/common/PageHero";
import { PageCta } from "../../../components/common/PageCta";
import { IconCardGrid } from "../../../components/common/IconCardGrid";
import { Timeline } from "../../../components/common/Timeline";
import { Section, SectionHeader } from "../../../components/sections/Section";
import { getPagesContent } from "../../../lib/pagesContent";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function GovernancePage({ params }: PageProps) {
  const { locale } = await params;
  const { governance } = getPagesContent(locale);

  return (
    <>
      <PageHero
        eyebrow={governance.hero.eyebrow}
        title={governance.hero.title}
        subtitle={governance.hero.subtitle}
        primaryCta={{ label: governance.hero.primaryLabel, href: `/${locale}${governance.hero.primaryHref}` }}
        secondaryCta={{ label: governance.hero.secondaryLabel, href: `/${locale}${governance.hero.secondaryHref}` }}
      />

      <Section variant="white">
        <div className="container">
          <SectionHeader eyebrow={governance.intro.eyebrow} title={governance.intro.title} center={false} />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px" }}>
            {governance.intro.paragraphs.map((paragraph, index) => (
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
            eyebrow={governance.structure.eyebrow}
            title={governance.structure.title}
            subtitle={governance.structure.subtitle}
          />
          <IconCardGrid items={governance.structure.items} columns={3} />
        </div>
      </Section>

      <Section variant="navy">
        <div className="container">
          <SectionHeader
            eyebrow={governance.accountability.eyebrow}
            title={governance.accountability.title}
            subtitle={governance.accountability.subtitle}
          />
          <IconCardGrid items={governance.accountability.items} columns={4} cardVariant="card--navy" />
        </div>
      </Section>

      <Section variant="white">
        <div className="container">
          <SectionHeader eyebrow={governance.flow.eyebrow} title={governance.flow.title} subtitle={governance.flow.subtitle} />
          <Timeline steps={governance.flow.steps} />
        </div>
      </Section>

      <PageCta
        title={governance.cta.title}
        subtitle={governance.cta.subtitle}
        primaryLabel={governance.cta.primaryLabel}
        primaryHref={`/${locale}${governance.cta.primaryHref}`}
        secondaryLabel={governance.cta.secondaryLabel}
        secondaryHref={`/${locale}${governance.cta.secondaryHref}`}
      />
    </>
  );
}
