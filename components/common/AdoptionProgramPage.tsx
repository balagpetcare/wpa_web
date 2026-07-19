import Link from "next/link";
import { ImageWithFallback } from "./ImageWithFallback";
import { Section, SectionHeader } from "../sections/Section";
import type { ProgramPageContent } from "../../lib/programsContent";

const adoptionImageManifest = {
  hero: "/images/programs/adoption/adoption-hero.webp",
  introStoryboard: "/images/programs/adoption/adoption-intro-storyboard.webp",
  step1: "/images/programs/adoption/adoption-step-1-verified-listing.webp",
  step2: "/images/programs/adoption/adoption-step-2-application.webp",
  step3: "/images/programs/adoption/adoption-step-3-screening.webp",
  step4: "/images/programs/adoption/adoption-step-4-safe-handover.webp",
  step5: "/images/programs/adoption/adoption-step-5-post-support.webp",
  participants: "/images/programs/adoption/adoption-participants.webp",
  impactBanner: "/images/programs/adoption/adoption-impact-banner.webp",
  trustSafety: "/images/programs/adoption/adoption-trust-safety.webp",
  relatedRescue: "/images/programs/adoption/adoption-related-rescue.webp",
  relatedAwareness: "/images/programs/adoption/adoption-related-awareness.webp",
  relatedDonation: "/images/programs/adoption/adoption-related-donation.webp",
  ctaBackground: "/images/programs/adoption/adoption-cta-background.webp",
} as const;

const introFlowLabels = [
  "Pet Listed",
  "Application Submitted",
  "Screening Review",
  "Safe Handover",
  "Lifelong Support",
];

const participantIcons = ["RS", "RO", "PA", "VP"] as const;

const verificationFramework = [
  {
    icon: "🐾",
    title: "Verified Pet Profile",
    description: "Health notes, age, behavior, and vaccination status confirmed before a listing goes live.",
  },
  {
    icon: "🔍",
    title: "Owner & Rescuer Screening",
    description: "Trusted submitters and rescue partners are checked before they can list an animal.",
  },
  {
    icon: "🏡",
    title: "Adopter Readiness",
    description: "Home readiness and responsibility confirmation help match pets with the right family.",
  },
  {
    icon: "🤝",
    title: "Safe Handover Plan",
    description: "A guided meeting, agreed timing, and transfer checklist keep every handover secure.",
  },
  {
    icon: "📋",
    title: "Documentation Trail",
    description: "Adoption notes, signed agreement, and transparent records for every completed match.",
  },
  {
    icon: "📞",
    title: "Post-Adoption Follow-Up",
    description: "Our team checks in after the pet settles into its new home to confirm all is well.",
  },
  {
    icon: "🚨",
    title: "Rescue Team Support",
    description: "Special cases get direct escalation support from the WPA rescue team.",
  },
  {
    icon: "💛",
    title: "Donation & Care Link",
    description: "Urgent adoption cases are connected with donation and care support programs.",
  },
];

export function AdoptionProgramPage({ locale, content }: { locale: string; content: ProgramPageContent }) {
  return (
    <>
      <section className="adoption-hero">
        <ImageWithFallback
          src={adoptionImageManifest.hero}
          alt="Adoption program hero visual"
          label="adoption-hero.webp"
          className="adoption-hero__media"
          imgClassName="adoption-hero__image"
        />
        <div className="adoption-hero__overlay" />
        <div className="adoption-hero__content container">
          <div className="adoption-hero__panel">
            <span className="badge badge--white">ADOPTION PROGRAM</span>
            <h1 className="adoption-hero__title">Verified Adoption, From First Match to Forever Home</h1>
            <p className="adoption-hero__desc">{content.hero.subtitle}</p>
            <div className="btn-group">
              <Link href={`/${locale}${content.hero.primaryHref}`} className="btn btn--white btn--lg">
                {content.hero.primaryLabel}
              </Link>
              <Link href={`/${locale}${content.hero.secondaryHref}`} className="btn btn--outline-light btn--lg">
                {content.hero.secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section variant="white" className="adoption-section adoption-section--pullup">
        <div className="container adoption-container">
          <div className="adoption-intro">
            <div className="adoption-intro__copy">
              <SectionHeader eyebrow={content.intro.eyebrow} title="A Verified Path to a Responsible Home" center={false} />
              <div className="adoption-richtext">
                {content.intro.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="adoption-intro__visual">
              <ImageWithFallback
                src={adoptionImageManifest.introStoryboard}
                alt="Storyboard showing the adoption journey"
                label="adoption-intro-storyboard.webp"
                className="adoption-frame adoption-frame--storyboard"
                imgClassName="adoption-frame__img"
              />
              <div className="adoption-mini-flow" aria-label="Adoption process summary">
                {introFlowLabels.map((label) => (
                  <div key={label} className="adoption-mini-flow__item">
                    <span className="adoption-mini-flow__dot" aria-hidden="true" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="light" className="adoption-section">
        <div className="container adoption-container">
          <SectionHeader
            eyebrow={content.howItWorks.eyebrow}
            title="From Verified Listing to Safe Handover"
            subtitle={content.howItWorks.subtitle}
          />
          <div className="adoption-steps" aria-label="Five-step adoption process">
            {content.howItWorks.steps.map((step) => {
              const imageKey = `step${step.number}` as keyof typeof adoptionImageManifest;
              return (
                <article key={step.number} className="adoption-step-card">
                  <div className="adoption-step-card__connector" aria-hidden="true">
                    <span className="adoption-step-card__badge">{step.number}</span>
                  </div>
                  <ImageWithFallback
                    src={adoptionImageManifest[imageKey]}
                    alt={`${step.title} visual`}
                    label={adoptionImageManifest[imageKey].split("/").pop() ?? step.title}
                    className="adoption-step-card__media"
                    imgClassName="adoption-step-card__img"
                  />
                  <div className="adoption-step-card__body">
                    <p className="adoption-step-card__eyebrow">Step {step.number}</p>
                    <h3 className="adoption-step-card__title">{step.title}</h3>
                    <p className="adoption-step-card__desc">{step.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section variant="light" className="adoption-section">
        <div className="container adoption-container">
          <SectionHeader
            eyebrow="Verification framework"
            title="What Makes Every Adoption Verified"
            subtitle="Every pet, adopter, rescuer, and handover is supported by a clear, documented, and safety-first process."
          />
          <div className="adoption-verification-grid">
            {verificationFramework.map((item) => (
              <article key={item.title} className="card adoption-verification-card">
                <div className="card__icon" aria-hidden="true">
                  <span>{item.icon}</span>
                </div>
                <h3 className="card__title">{item.title}</h3>
                <p className="card__desc">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="white" className="adoption-section">
        <div className="container adoption-container">
          <div className="adoption-participants">
            <div className="adoption-participants__content">
              <SectionHeader
                eyebrow={content.participants.eyebrow}
                title="Adoption Involves Every Part of the Network"
                subtitle={content.participants.subtitle}
                center={false}
              />
              <div className="adoption-participants__grid">
                {content.participants.items.map((item, index) => (
                  <article key={item.title} className="card adoption-participant-card">
                    <div className="card__icon" aria-hidden="true">
                      {participantIcons[index] ?? item.icon}
                    </div>
                    <h3 className="card__title">{item.title}</h3>
                    <p className="card__desc">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
            <ImageWithFallback
              src={adoptionImageManifest.participants}
              alt="Participants across the adoption network"
              label="adoption-participants.webp"
              className="adoption-frame adoption-frame--participants"
              imgClassName="adoption-frame__img"
            />
          </div>
        </div>
      </Section>

      <section className="section section-navy adoption-section adoption-impact">
        <ImageWithFallback
          src={adoptionImageManifest.impactBanner}
          alt="Adoption impact background visual"
          label="adoption-impact-banner.webp"
          className="adoption-impact__media"
          imgClassName="adoption-impact__img"
        />
        <div className="adoption-impact__overlay" />
        <div className="container adoption-container adoption-impact__content">
          <SectionHeader
            eyebrow={content.benefits.eyebrow}
            title="Why Verified Adoption Matters"
            subtitle={content.benefits.subtitle}
          />
          <div className="grid-4">
            {content.benefits.items.map((item) => (
              <article key={item.title} className="card card--navy adoption-impact-card">
                <div className="card__icon">
                  <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                </div>
                <h3 className="card__title">{item.title}</h3>
                <p className="card__desc">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section variant="light" className="adoption-section">
        <div className="container adoption-container">
          <div className="adoption-trust">
            <div>
              <SectionHeader eyebrow={content.trust.eyebrow} title="Built-In Safeguards for Every Adoption" center={false} />
              <div className="grid-3">
                {content.trust.items.map((item) => (
                  <article key={item.title} className="card adoption-trust-card">
                    <div className="card__icon">
                      <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                    </div>
                    <h3 className="card__title">{item.title}</h3>
                    <p className="card__desc">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
            <ImageWithFallback
              src={adoptionImageManifest.trustSafety}
              alt="Trust and safety illustration for adoption safeguards"
              label="adoption-trust-safety.webp"
              className="adoption-frame adoption-frame--trust"
              imgClassName="adoption-frame__img"
            />
          </div>
        </div>
      </Section>

      <Section variant="white" className="adoption-section">
        <div className="container adoption-container">
          <SectionHeader eyebrow={content.related.eyebrow} title={content.related.title} />
          <div className="grid-3 adoption-related-grid">
            {content.related.items.map((item, index) => {
              const imageSources = [
                adoptionImageManifest.relatedRescue,
                adoptionImageManifest.relatedAwareness,
                adoptionImageManifest.relatedDonation,
              ];
              const imageSrc = imageSources[index];

              return (
                <Link key={item.title} href={`/${locale}${item.href ?? "/what-we-do"}`} className="adoption-related-card">
                  <ImageWithFallback
                    src={imageSrc}
                    alt={`${item.title} program preview`}
                    label={imageSrc.split("/").pop() ?? item.title}
                    className="adoption-related-card__media"
                    imgClassName="adoption-related-card__img"
                  />
                  <div className="adoption-related-card__body">
                    <div className="card__icon">
                      <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                    </div>
                    <h3 className="card__title">{item.title}</h3>
                    <p className="card__desc">{item.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      <section className="adoption-cta">
        <ImageWithFallback
          src={adoptionImageManifest.ctaBackground}
          alt="Adoption call to action background"
          label="adoption-cta-background.webp"
          className="adoption-cta__media"
          imgClassName="adoption-cta__img"
        />
        <div className="adoption-cta__overlay" />
        <div className="container adoption-cta__content">
          <div className="adoption-cta__panel">
            <h2 className="adoption-cta__title">Ready to Give a Rescued Animal a Home?</h2>
            <p className="adoption-cta__desc">{content.cta.subtitle}</p>
            <div className="btn-group btn-group--center">
              <Link href={`/${locale}${content.cta.primaryHref}`} className="btn btn--primary btn--lg">
                {content.cta.primaryLabel}
              </Link>
              <Link href={`/${locale}${content.cta.secondaryHref}`} className="btn btn--outline-light btn--lg">
                {content.cta.secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
