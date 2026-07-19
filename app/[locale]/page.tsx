import { HeroSection } from "../../components/sections/HeroSection";
import {
  ImpactStatsSection,
  CoreProgramsSection,
  HowItWorksSection,
  SplitHighlightSection,
  StakeholderCollaborationSection,
  TransparencySection,
  GlobalNetworkMapSection,
  FaqTeaserSection,
  FinalCtaSection,
} from "../../components/sections/HomepageSections";
import { getHomeContent } from "../../lib/content";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const content = getHomeContent(locale);

  return (
    <>
      <HeroSection locale={locale} slides={content.hero.slides} trustBadges={content.hero.trustBadges} />
      <ImpactStatsSection content={content.impactStats} />
      <CoreProgramsSection locale={locale} content={content.corePrograms} />
      <HowItWorksSection locale={locale} content={content.howItWorks} />
      <SplitHighlightSection locale={locale} />
      <StakeholderCollaborationSection locale={locale} content={content.globalCollaboration} />
      <TransparencySection locale={locale} content={content.transparency} />
      <GlobalNetworkMapSection locale={locale} />
      <FaqTeaserSection locale={locale} />
      <FinalCtaSection locale={locale} content={content.finalCta} />
    </>
  );
}
