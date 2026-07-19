import { PageHero } from "../../../components/common/PageHero";
import { PageCta } from "../../../components/common/PageCta";
import { IconCardGrid } from "../../../components/common/IconCardGrid";
import { Timeline } from "../../../components/common/Timeline";
import { Section, SectionHeader } from "../../../components/sections/Section";
import { getGetInvolvedContent } from "../../../lib/getInvolvedContent";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function JoinPage({ params }: PageProps) {
  const { locale } = await params;
  const { membership } = getGetInvolvedContent(locale);

  return (
    <>
      <PageHero
        eyebrow={membership.hero.eyebrow}
        title={membership.hero.title}
        subtitle={membership.hero.subtitle}
        primaryCta={{ label: membership.hero.primaryLabel, href: `/${locale}${membership.hero.primaryHref}` }}
        secondaryCta={{ label: membership.hero.secondaryLabel, href: `/${locale}${membership.hero.secondaryHref}` }}
      />

      <Section variant="white">
        <div className="container">
          <SectionHeader eyebrow={membership.intro.eyebrow} title={membership.intro.title} center={false} />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px" }}>
            {membership.intro.paragraphs.map((paragraph, index) => (
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
            eyebrow={membership.audiences.eyebrow}
            title={membership.audiences.title}
            subtitle={membership.audiences.subtitle}
          />
          <IconCardGrid items={membership.audiences.items} columns={4} />
        </div>
      </Section>

      <Section variant="navy">
        <div className="container">
          <SectionHeader
            eyebrow={membership.benefits.eyebrow}
            title={membership.benefits.title}
            subtitle={membership.benefits.subtitle}
          />
          <IconCardGrid items={membership.benefits.items} columns={4} cardVariant="card--navy" />
        </div>
      </Section>

      <Section variant="white">
        <div className="container">
          <SectionHeader
            eyebrow={membership.howToJoin.eyebrow}
            title={membership.howToJoin.title}
            subtitle={membership.howToJoin.subtitle}
          />
          <Timeline steps={membership.howToJoin.steps} />
        </div>
      </Section>

      <PageCta
        title={membership.cta.title}
        subtitle={membership.cta.subtitle}
        primaryLabel={membership.cta.primaryLabel}
        primaryHref={`/${locale}${membership.cta.primaryHref}`}
        secondaryLabel={membership.cta.secondaryLabel}
        secondaryHref={`/${locale}${membership.cta.secondaryHref}`}
      />
    </>
  );
}
