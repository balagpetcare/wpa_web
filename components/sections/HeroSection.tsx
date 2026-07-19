"use client";

import { useCallback, useEffect, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroSlidesEn, type HeroFeatureChip, type HeroSlide, type HeroStat, type TrustBadge } from "../../lib/content";

interface HeroSectionProps {
  locale: string;
  slides: HeroSlide[];
  trustBadges: TrustBadge[];
}

const ROTATE_MS = 6500;
const DEFAULT_BG = "/images/home/hero-global-animal-welfare.webp";
const DEFAULT_BG_MOBILE = "/images/home/hero-global-animal-welfare-mobile.webp";

type ResolvedHeroSlide = Omit<HeroSlide, "title" | "description" | "backgroundImage" | "primaryCta"> & {
  title: string;
  description: string;
  backgroundImage: string;
  primaryCta: {
    label: string;
    href: string;
  };
};

function resolveSlide(slide: HeroSlide): ResolvedHeroSlide {
  return {
    ...slide,
    title: slide.title ?? slide.headline ?? "",
    description: slide.description ?? slide.body ?? "",
    backgroundImage: slide.backgroundImage ?? DEFAULT_BG,
    backgroundImageMobile: slide.backgroundImageMobile ?? slide.backgroundImage ?? DEFAULT_BG_MOBILE,
    primaryCta: slide.primaryCta ?? {
      label: slide.ctaLabel ?? "Learn More",
      href: slide.ctaHref ?? "/what-we-do",
    },
    secondaryCta:
      slide.secondaryCta ??
      (slide.secondaryCtaLabel && slide.secondaryCtaHref
        ? {
            label: slide.secondaryCtaLabel,
            href: slide.secondaryCtaHref,
          }
        : undefined),
  };
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {direction === "left" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 6.5v11l9-5.5-9-5.5z" />
    </svg>
  );
}

function SlideMedia({
  slide,
  active,
  reduceMotion,
  failedImages,
  failedVideos,
  onImageError,
  onVideoError,
}: {
  slide: ResolvedHeroSlide;
  active: boolean;
  reduceMotion: boolean;
  failedImages: Record<string, boolean>;
  failedVideos: Record<string, boolean>;
  onImageError: (id: string) => void;
  onVideoError: (id: string) => void;
}) {
  const imageFailed = failedImages[slide.id];
  const videoFailed = failedVideos[slide.id];
  const showVideo = slide.videoSrc && !videoFailed;

  return (
    <div className="home-hero__media" aria-hidden="true">
      {showVideo ? (
        <video
          key={slide.id}
          className="home-hero__video"
          poster={slide.videoPoster ?? slide.backgroundImage}
          autoPlay={active && !reduceMotion}
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => onVideoError(slide.id)}
        >
          <source src={slide.videoSrc} type="video/mp4" />
        </video>
      ) : !imageFailed ? (
        <>
          <Image
            src={slide.backgroundImage}
            alt=""
            fill
            priority={active}
            className="home-hero__image home-hero__image--desktop"
            sizes="(max-width: 767px) 100vw, 1280px"
            style={{ objectFit: "cover", objectPosition: slide.imagePosition ?? "center center" }}
            onError={() => onImageError(slide.id)}
          />
          <Image
            src={slide.backgroundImageMobile ?? slide.backgroundImage}
            alt=""
            fill
            priority={active}
            className="home-hero__image home-hero__image--mobile"
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: slide.mobileImagePosition ?? slide.imagePosition ?? "center center" }}
            onError={() => onImageError(slide.id)}
          />
        </>
      ) : (
        <div className="home-hero__media-fallback" />
      )}
      <div className={`home-hero__overlay home-hero__overlay--${slide.preset}`} />
    </div>
  );
}

function SlideActions({
  locale,
  slide,
}: {
  locale: string;
  slide: ResolvedHeroSlide;
}) {
  return (
    <div className="home-hero__actions">
      <Link href={`/${locale}${slide.primaryCta.href}`} className="btn btn--primary btn--lg">
        {slide.primaryCta.label}
      </Link>
      {slide.secondaryCta && (
        <Link href={`/${locale}${slide.secondaryCta.href}`} className="btn btn--outline-light btn--lg">
          {slide.secondaryCta.label}
        </Link>
      )}
    </div>
  );
}

function SlideStats({ stats }: { stats?: HeroStat[] }) {
  if (!stats?.length) return null;

  return (
    <div className="home-hero__stats">
      {stats.map((stat) => (
        <div key={`${stat.value}-${stat.label}`} className="home-hero__stat">
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

function SlideChips({
  locale,
  chips,
}: {
  locale: string;
  chips?: HeroFeatureChip[];
}) {
  if (!chips?.length) return null;

  return (
    <div className="home-hero__chips">
      {chips.map((chip) =>
        chip.href ? (
          <Link key={chip.label} href={`/${locale}${chip.href}`} className="home-hero__chip">
            <span aria-hidden="true">{chip.icon}</span>
            {chip.label}
          </Link>
        ) : (
          <span key={chip.label} className="home-hero__chip">
            <span aria-hidden="true">{chip.icon}</span>
            {chip.label}
          </span>
        )
      )}
    </div>
  );
}

function SlideHeading({
  slide,
}: {
  slide: ResolvedHeroSlide;
}) {
  return (
    <>
      <div className="home-hero__meta">
        {slide.badgeText && <span className="home-hero__badge">{slide.badgeText}</span>}
        <p className="home-hero__eyebrow">{slide.eyebrow}</p>
      </div>
      <h1 className="home-hero__title">{slide.title}</h1>
      <p className="home-hero__description">{slide.description}</p>
    </>
  );
}

function SlideContent({
  locale,
  slide,
  trustBadges,
}: {
  locale: string;
  slide: ResolvedHeroSlide;
  trustBadges: TrustBadge[];
}) {
  const chips = slide.featureChips?.length ? slide.featureChips : trustBadges;

  switch (slide.preset) {
    case "story-panels":
      return (
        <div className="home-hero__layout home-hero__layout--story">
          <div className="home-hero__intro">
            <SlideHeading slide={slide} />
            <SlideActions locale={locale} slide={slide} />
          </div>
          <div className="home-hero__story-grid">
            {slide.storyCards?.map((card, index) => (
              <article key={card.id} className="home-hero__story-card">
                {card.image && (
                  <div className="home-hero__story-card-media">
                    <Image src={card.image} alt="" fill sizes="(max-width: 767px) 100vw, 25vw" style={{ objectFit: "cover" }} />
                  </div>
                )}
                <div className="home-hero__story-card-overlay" />
                <div className="home-hero__story-card-content">
                  <p className="home-hero__story-index">{String(index + 1).padStart(2, "0")}</p>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      );

    case "corporate-impact":
      return (
        <div className="home-hero__layout home-hero__layout--corporate">
          <div className="home-hero__intro">
            <SlideHeading slide={slide} />
            <SlideActions locale={locale} slide={slide} />
            <SlideStats stats={slide.stats} />
          </div>
          <aside className="home-hero__impact-panel">
            <div className="home-hero__impact-map" aria-hidden="true" />
            <div className="home-hero__impact-meta">
              <p>{slide.impactPanel?.eyebrow}</p>
              <div className="home-hero__impact-list">
                {slide.impactPanel?.stats.map((stat) => (
                  <div key={stat.label} className="home-hero__impact-stat">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              {slide.impactPanel?.ctaHref && slide.impactPanel?.ctaLabel && (
                <Link href={`/${locale}${slide.impactPanel.ctaHref}`} className="btn btn--outline-light btn--md">
                  {slide.impactPanel.ctaLabel}
                </Link>
              )}
            </div>
          </aside>
        </div>
      );

    case "full-width":
      return (
        <div className="home-hero__layout home-hero__layout--full">
          <div className="home-hero__intro">
            <SlideHeading slide={slide} />
            <SlideActions locale={locale} slide={slide} />
            <SlideChips locale={locale} chips={chips} />
          </div>
          <aside className="home-hero__floating-panel">
            <p className="home-hero__panel-eyebrow">{slide.impactPanel?.eyebrow ?? "Impact Snapshot"}</p>
            <SlideStats stats={slide.impactPanel?.stats ?? slide.stats} />
            {slide.impactPanel?.ctaHref && slide.impactPanel?.ctaLabel && (
              <Link href={`/${locale}${slide.impactPanel.ctaHref}`} className="btn btn--primary btn--md home-hero__panel-action">
                {slide.impactPanel.ctaLabel}
              </Link>
            )}
          </aside>
        </div>
      );

    case "video-background":
      return (
        <div className="home-hero__layout home-hero__layout--video">
          <div className="home-hero__intro">
            <SlideHeading slide={slide} />
            <SlideActions locale={locale} slide={slide} />
            <SlideChips locale={locale} chips={chips} />
          </div>
          <div className="home-hero__video-prompt" aria-hidden="true">
            <span className="home-hero__video-button">
              <PlayIcon />
            </span>
          </div>
        </div>
      );

    case "clean-white":
      return (
        <div className="home-hero__layout home-hero__layout--clean">
          <div className="home-hero__intro">
            <SlideHeading slide={slide} />
            <SlideActions locale={locale} slide={slide} />
          </div>
        </div>
      );

    case "dark-overlay":
    default:
      return (
        <div className="home-hero__layout home-hero__layout--overlay">
          <div className="home-hero__intro">
            <SlideHeading slide={slide} />
            <SlideActions locale={locale} slide={slide} />
            <SlideChips locale={locale} chips={chips} />
          </div>
        </div>
      );
  }
}

export function HeroSection({ locale, slides, trustBadges }: HeroSectionProps) {
  const configuredSlides = slides.length > 0 ? slides : heroSlidesEn;
  const resolvedSlides = configuredSlides.map(resolveSlide);
  const count = resolvedSlides.length;
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [failedVideos, setFailedVideos] = useState<Record<string, boolean>>({});

  const goTo = useCallback(
    (index: number) => {
      setActive(((index % count) + count) % count);
    },
    [count]
  );

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion || isPaused || count <= 1) return;
    const id = window.setInterval(next, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [count, isPaused, next, reduceMotion]);

  const handleImageError = useCallback((id: string) => {
    setFailedImages((prevState) => ({ ...prevState, [id]: true }));
  }, []);

  const handleVideoError = useCallback((id: string) => {
    setFailedVideos((prevState) => ({ ...prevState, [id]: true }));
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      }
      if (event.key === "Home") {
        event.preventDefault();
        goTo(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        goTo(count - 1);
      }
    },
    [count, goTo, next, prev]
  );

  return (
    <section className="home-hero-shell">
      <section
        className="home-hero"
        aria-label="Homepage hero carousel"
        aria-roledescription="carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div className="home-hero__slides">
          {resolvedSlides.map((slide, index) => {
            const isActive = index === active;

            return (
              <article
                key={slide.id}
                className={`home-hero__slide ${isActive ? "home-hero__slide--active" : "home-hero__slide--inactive"}`}
                data-preset={slide.preset}
                aria-hidden={!isActive}
                aria-label={`${index + 1} of ${count}: ${slide.title}`}
                aria-roledescription="slide"
              >
                <SlideMedia
                  slide={slide}
                  active={isActive}
                  reduceMotion={reduceMotion}
                  failedImages={failedImages}
                  failedVideos={failedVideos}
                  onImageError={handleImageError}
                  onVideoError={handleVideoError}
                />
                <div className="home-hero__content">
                  <SlideContent locale={locale} slide={slide} trustBadges={trustBadges} />
                </div>
              </article>
            );
          })}
        </div>

        {count > 1 && (
          <>
            <button type="button" className="home-hero__control home-hero__control--prev" onClick={prev} aria-label="Show previous slide">
              <ChevronIcon direction="left" />
            </button>
            <button type="button" className="home-hero__control home-hero__control--next" onClick={next} aria-label="Show next slide">
              <ChevronIcon direction="right" />
            </button>

            <div className="home-hero__pagination" role="tablist" aria-label="Hero slides">
              {resolvedSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                  className={`home-hero__dot ${index === active ? "home-hero__dot--active" : ""}`}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </section>
  );
}
