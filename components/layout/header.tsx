"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { locales, localeLabels, type Locale } from "../../lib/i18n";
import { getLocalizedPathname } from "../../lib/routes";
import { Logo } from "../common/Logo";

interface NavLink {
  label: string;
  href: string;
}

interface NavGroup {
  key: string;
  label: string;
  children: NavLink[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    key: "about",
    label: "About",
    children: [
      { label: "About WPA", href: "/about" },
      { label: "Mission & Vision", href: "/mission-vision" },
      { label: "Governance", href: "/governance" },
      { label: "Global Chapters", href: "/chapters" },
    ],
  },
  {
    key: "programs",
    label: "Programs",
    children: [
      { label: "Programs Overview", href: "/what-we-do" },
      { label: "Adoption", href: "/adoption" },
      { label: "Rescue", href: "/rescue" },
      { label: "Donation & Fundraising", href: "/donation" },
      { label: "Awareness & Education", href: "/awareness" },
    ],
  },
  {
    key: "membership",
    label: "Membership",
    children: [
      { label: "Join WPA", href: "/join" },
      { label: "Get Involved / Volunteer", href: "/volunteers" },
    ],
  },
];

const NAV_LINKS: NavLink[] = [
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

function ChevronIcon() {
  return (
    <svg
      className="header__nav-chevron"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function Header() {
  const params = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const locale = (params?.locale as Locale) || "en";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
    setOpenMobileGroup(null);
    setLangMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!langMenuOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLangMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [langMenuOpen]);

  useEffect(() => {
    if (!openMenu) return;
    const handleClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [openMenu]);

  const currentLocaleLabel = localeLabels[locale] ?? locale;

  const handleLocaleChange = (nextLocale: string) => {
    setLangMenuOpen(false);
    if (nextLocale === locale) return;
    const localizedPath = getLocalizedPathname(pathname || "/", nextLocale);
    const query = searchParams?.toString();
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.replace(`${localizedPath}${query ? `?${query}` : ""}${hash}`);
  };

  const isLinkActive = (href: string) => pathname === `/${locale}${href}`;
  const isGroupActive = (group: NavGroup) => group.children.some((child) => isLinkActive(child.href));

  return (
    <>
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="header__inner">
          <Link href={`/${locale}`} className="header__logo">
            <Logo variant="light" priority />
          </Link>

          <nav className="header__nav" ref={navRef}>
            {NAV_GROUPS.map((group) => (
              <div key={group.key} className="header__nav-item">
                <button
                  type="button"
                  className={`header__nav-trigger ${isGroupActive(group) ? "header__nav-trigger--active" : ""}`}
                  aria-haspopup="true"
                  aria-expanded={openMenu === group.key}
                  onClick={() => setOpenMenu(openMenu === group.key ? null : group.key)}
                >
                  {group.label}
                  <ChevronIcon />
                </button>
                {openMenu === group.key && (
                  <div className="header__dropdown" role="menu">
                    {group.children.map((child) => (
                      <Link
                        key={child.href}
                        href={`/${locale}${child.href}`}
                        role="menuitem"
                        className={`header__dropdown-link ${isLinkActive(child.href) ? "header__dropdown-link--active" : ""}`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className={`header__nav-link ${isLinkActive(item.href) ? "header__nav-link--active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <div className="header__lang" ref={langMenuRef}>
              <button
                type="button"
                className="header__lang-btn"
                aria-haspopup="true"
                aria-expanded={langMenuOpen}
                onClick={() => setLangMenuOpen((open) => !open)}
              >
                {currentLocaleLabel}
                <ChevronIcon />
              </button>
              {langMenuOpen && (
                <div className="header__dropdown header__dropdown--lang" role="menu">
                  {locales.map((l) => (
                    <button
                      key={l}
                      type="button"
                      role="menuitem"
                      className={`header__dropdown-link ${l === locale ? "header__dropdown-link--active" : ""}`}
                      onClick={() => handleLocaleChange(l)}
                    >
                      {localeLabels[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link href={`/${locale}/donation`} className="btn btn--primary btn--sm">
              Donate
            </Link>

            <button
              className="header__menu-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileOpen ? "mobile-nav--open" : ""}`}>
        <div className="mobile-nav__backdrop" onClick={() => setMobileOpen(false)} />
        <div className="mobile-nav__drawer">
          <div className="mobile-nav__header">
            <Logo variant="compact" className="mobile-nav__header-logo" />
            <button className="mobile-nav__close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="mobile-nav__links">
            <Link
              href={`/${locale}`}
              className={`mobile-nav__link ${pathname === `/${locale}` || pathname === `/${locale}/` ? "mobile-nav__link--active" : ""}`}
            >
              Home
            </Link>

            {NAV_GROUPS.map((group) => (
              <div key={group.key}>
                <button
                  type="button"
                  className="mobile-nav__group-btn"
                  aria-expanded={openMobileGroup === group.key}
                  onClick={() => setOpenMobileGroup(openMobileGroup === group.key ? null : group.key)}
                >
                  {group.label}
                  <span className="mobile-nav__group-chevron">
                    <ChevronIcon />
                  </span>
                </button>
                {openMobileGroup === group.key && (
                  <div className="mobile-nav__group-panel">
                    {group.children.map((child) => (
                      <Link
                        key={child.href}
                        href={`/${locale}${child.href}`}
                        className={`mobile-nav__sublink ${isLinkActive(child.href) ? "mobile-nav__sublink--active" : ""}`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className={`mobile-nav__link ${isLinkActive(item.href) ? "mobile-nav__link--active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mobile-nav__lang-list" role="group" aria-label="Language">
            {locales.map((l) => (
              <button
                key={l}
                type="button"
                className={`mobile-nav__sublink ${l === locale ? "mobile-nav__sublink--active" : ""}`}
                onClick={() => handleLocaleChange(l)}
              >
                {localeLabels[l]}
              </button>
            ))}
          </div>

          <div className="mobile-nav__bottom">
            <Link href={`/${locale}/donation`} className="btn btn--primary btn--md">
              Donate Now
            </Link>
            <Link href={`/${locale}/volunteers`} className="btn btn--outline btn--md" onClick={() => setMobileOpen(false)}>
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
