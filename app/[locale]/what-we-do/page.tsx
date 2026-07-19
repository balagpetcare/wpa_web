import { PageHero } from "../../../components/common/PageHero";
import { PageCta } from "../../../components/common/PageCta";
import { IconCardGrid } from "../../../components/common/IconCardGrid";
import { Section, SectionHeader } from "../../../components/sections/Section";
import { getProgramsContent } from "../../../lib/programsContent";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function WhatWeDoPage({ params }: PageProps) {
  const { locale } = await params;
  const { overview } = getProgramsContent(locale);

  return (
    <>
      <PageHero
        eyebrow={overview.hero.eyebrow}
        title={overview.hero.title}
        subtitle={overview.hero.subtitle}
        primaryCta={{ label: overview.hero.primaryLabel, href: `/${locale}${overview.hero.primaryHref}` }}
        secondaryCta={{ label: overview.hero.secondaryLabel, href: `/${locale}${overview.hero.secondaryHref}` }}
      />

      <Section variant="white">
        <div className="container">
          <SectionHeader eyebrow={overview.intro.eyebrow} title={overview.intro.title} center={false} />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px" }}>
            {overview.intro.paragraphs.map((paragraph, index) => (
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
            eyebrow={overview.programs.eyebrow}
            title={overview.programs.title}
            subtitle={overview.programs.subtitle}
          />
          <IconCardGrid
            items={overview.programs.items.map((item) => ({
              ...item,
              href: item.href ? `/${locale}${item.href}` : undefined,
            }))}
            columns={4}
          />
        </div>
      </Section>

      <PageCta
        title={overview.cta.title}
        subtitle={overview.cta.subtitle}
        primaryLabel={overview.cta.primaryLabel}
        primaryHref={`/${locale}${overview.cta.primaryHref}`}
        secondaryLabel={overview.cta.secondaryLabel}
        secondaryHref={`/${locale}${overview.cta.secondaryHref}`}
      />
    </>
  );
}
