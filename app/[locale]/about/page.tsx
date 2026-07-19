import { PageHero } from "../../../components/common/PageHero";
import { PageCta } from "../../../components/common/PageCta";
import { IconCardGrid } from "../../../components/common/IconCardGrid";
import { Section, SectionHeader } from "../../../components/sections/Section";
import { getPagesContent } from "../../../lib/pagesContent";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const { about } = getPagesContent(locale);

  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        subtitle={about.hero.subtitle}
        primaryCta={{ label: about.hero.primaryLabel, href: `/${locale}${about.hero.primaryHref}` }}
        secondaryCta={{ label: about.hero.secondaryLabel, href: `/${locale}${about.hero.secondaryHref}` }}
      />

      <Section variant="white">
        <div className="container">
          <SectionHeader eyebrow={about.intro.eyebrow} title={about.intro.title} center={false} />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px" }}>
            {about.intro.paragraphs.map((paragraph, index) => (
              <p key={index} className="card__desc" style={{ fontSize: "1.0625rem" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="light">
        <div className="container">
          <SectionHeader eyebrow={about.values.eyebrow} title={about.values.title} subtitle={about.values.subtitle} />
          <IconCardGrid items={about.values.items} columns={3} />
        </div>
      </Section>

      <Section variant="navy">
        <div className="container">
          <SectionHeader eyebrow={about.trust.eyebrow} title={about.trust.title} subtitle={about.trust.subtitle} />
          <IconCardGrid items={about.trust.items} columns={3} cardVariant="card--navy" />
        </div>
      </Section>

      <Section variant="white">
        <div className="container">
          <SectionHeader
            eyebrow={about.stakeholders.eyebrow}
            title={about.stakeholders.title}
            subtitle={about.stakeholders.subtitle}
          />
          <IconCardGrid items={about.stakeholders.items} columns={4} />
        </div>
      </Section>

      <PageCta
        title={about.cta.title}
        subtitle={about.cta.subtitle}
        primaryLabel={about.cta.primaryLabel}
        primaryHref={`/${locale}${about.cta.primaryHref}`}
        secondaryLabel={about.cta.secondaryLabel}
        secondaryHref={`/${locale}${about.cta.secondaryHref}`}
      />
    </>
  );
}
