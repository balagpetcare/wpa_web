import { PageHero } from "../../../components/common/PageHero";
import { PageCta } from "../../../components/common/PageCta";
import { IconCardGrid } from "../../../components/common/IconCardGrid";
import { Timeline } from "../../../components/common/Timeline";
import { Section, SectionHeader } from "../../../components/sections/Section";
import { getPagesContent } from "../../../lib/pagesContent";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function MissionVisionPage({ params }: PageProps) {
  const { locale } = await params;
  const { missionVision } = getPagesContent(locale);

  return (
    <>
      <PageHero
        eyebrow={missionVision.hero.eyebrow}
        title={missionVision.hero.title}
        subtitle={missionVision.hero.subtitle}
        primaryCta={{ label: missionVision.hero.primaryLabel, href: `/${locale}${missionVision.hero.primaryHref}` }}
        secondaryCta={{ label: missionVision.hero.secondaryLabel, href: `/${locale}${missionVision.hero.secondaryHref}` }}
      />

      <Section variant="white">
        <div className="container">
          <div className="grid-2">
            <div className="card card--flat">
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--brand)",
                  margin: "0 0 8px",
                }}
              >
                {missionVision.mission.eyebrow}
              </p>
              <h2 className="card__title" style={{ fontSize: "1.375rem" }}>{missionVision.mission.title}</h2>
              <p className="card__desc" style={{ fontSize: "1rem" }}>{missionVision.mission.text}</p>
            </div>
            <div className="card card--flat">
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--brand)",
                  margin: "0 0 8px",
                }}
              >
                {missionVision.vision.eyebrow}
              </p>
              <h2 className="card__title" style={{ fontSize: "1.375rem" }}>{missionVision.vision.title}</h2>
              <p className="card__desc" style={{ fontSize: "1rem" }}>{missionVision.vision.text}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="light">
        <div className="container">
          <SectionHeader
            eyebrow={missionVision.values.eyebrow}
            title={missionVision.values.title}
            subtitle={missionVision.values.subtitle}
          />
          <IconCardGrid items={missionVision.values.items} columns={4} />
        </div>
      </Section>

      <Section variant="white">
        <div className="container">
          <SectionHeader
            eyebrow={missionVision.principles.eyebrow}
            title={missionVision.principles.title}
            subtitle={missionVision.principles.subtitle}
          />
          <Timeline steps={missionVision.principles.steps} />
        </div>
      </Section>

      <PageCta
        title={missionVision.cta.title}
        subtitle={missionVision.cta.subtitle}
        primaryLabel={missionVision.cta.primaryLabel}
        primaryHref={`/${locale}${missionVision.cta.primaryHref}`}
        secondaryLabel={missionVision.cta.secondaryLabel}
        secondaryHref={`/${locale}${missionVision.cta.secondaryHref}`}
      />
    </>
  );
}
