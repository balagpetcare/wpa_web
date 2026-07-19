import { PageHero } from "../../../components/common/PageHero";
import { PageCta } from "../../../components/common/PageCta";
import { IconCardGrid } from "../../../components/common/IconCardGrid";
import { Timeline } from "../../../components/common/Timeline";
import { Section, SectionHeader } from "../../../components/sections/Section";
import { getGetInvolvedContent } from "../../../lib/getInvolvedContent";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function PartnersPage({ params }: PageProps) {
  const { locale } = await params;
  const { partners } = getGetInvolvedContent(locale);

  return (
    <>
      <PageHero
        eyebrow={partners.hero.eyebrow}
        title={partners.hero.title}
        subtitle={partners.hero.subtitle}
        primaryCta={{ label: partners.hero.primaryLabel, href: `/${locale}${partners.hero.primaryHref}` }}
        secondaryCta={{ label: partners.hero.secondaryLabel, href: `/${locale}${partners.hero.secondaryHref}` }}
      />

      <Section variant="white">
        <div className="container">
          <SectionHeader eyebrow={partners.intro.eyebrow} title={partners.intro.title} center={false} />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px" }}>
            {partners.intro.paragraphs.map((paragraph, index) => (
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
            eyebrow={partners.categories.eyebrow}
            title={partners.categories.title}
            subtitle={partners.categories.subtitle}
          />
          <IconCardGrid items={partners.categories.items} columns={4} />
        </div>
      </Section>

      <Section variant="white">
        <div className="container">
          <SectionHeader eyebrow={partners.process.eyebrow} title={partners.process.title} subtitle={partners.process.subtitle} />
          <Timeline steps={partners.process.steps} />
        </div>
      </Section>

      <PageCta
        title={partners.cta.title}
        subtitle={partners.cta.subtitle}
        primaryLabel={partners.cta.primaryLabel}
        primaryHref={`/${locale}${partners.cta.primaryHref}`}
        secondaryLabel={partners.cta.secondaryLabel}
        secondaryHref={`/${locale}${partners.cta.secondaryHref}`}
      />
    </>
  );
}
