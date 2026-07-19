import { PageHero } from "../../../components/common/PageHero";
import { PageCta } from "../../../components/common/PageCta";
import { IconCardGrid } from "../../../components/common/IconCardGrid";
import { Timeline } from "../../../components/common/Timeline";
import { Section, SectionHeader } from "../../../components/sections/Section";
import { getGetInvolvedContent } from "../../../lib/getInvolvedContent";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function VolunteersPage({ params }: PageProps) {
  const { locale } = await params;
  const { volunteer } = getGetInvolvedContent(locale);

  return (
    <>
      <PageHero
        eyebrow={volunteer.hero.eyebrow}
        title={volunteer.hero.title}
        subtitle={volunteer.hero.subtitle}
        primaryCta={{ label: volunteer.hero.primaryLabel, href: `/${locale}${volunteer.hero.primaryHref}` }}
        secondaryCta={{ label: volunteer.hero.secondaryLabel, href: `/${locale}${volunteer.hero.secondaryHref}` }}
      />

      <Section variant="white">
        <div className="container">
          <SectionHeader eyebrow={volunteer.intro.eyebrow} title={volunteer.intro.title} center={false} />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px" }}>
            {volunteer.intro.paragraphs.map((paragraph, index) => (
              <p key={index} className="card__desc" style={{ fontSize: "1.0625rem" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="light">
        <div className="container">
          <SectionHeader eyebrow={volunteer.roles.eyebrow} title={volunteer.roles.title} subtitle={volunteer.roles.subtitle} />
          <IconCardGrid items={volunteer.roles.items} columns={3} />
        </div>
      </Section>

      <Section variant="white">
        <div className="container">
          <SectionHeader
            eyebrow={volunteer.howToStart.eyebrow}
            title={volunteer.howToStart.title}
            subtitle={volunteer.howToStart.subtitle}
          />
          <Timeline steps={volunteer.howToStart.steps} />
        </div>
      </Section>

      <PageCta
        title={volunteer.cta.title}
        subtitle={volunteer.cta.subtitle}
        primaryLabel={volunteer.cta.primaryLabel}
        primaryHref={`/${locale}${volunteer.cta.primaryHref}`}
        secondaryLabel={volunteer.cta.secondaryLabel}
        secondaryHref={`/${locale}${volunteer.cta.secondaryHref}`}
      />
    </>
  );
}
