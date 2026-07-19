"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Logo } from "../common/Logo";
import type { Locale } from "../../lib/i18n";

const footerNav = {
  organization: [
    { label: "About WPA", href: "/about" },
    { label: "Mission & Vision", href: "/mission-vision" },
    { label: "Governance", href: "/governance" },
    { label: "Global Chapters", href: "/chapters" },
  ],
  programs: [
    { label: "Programs Overview", href: "/what-we-do" },
    { label: "Adoption", href: "/adoption" },
    { label: "Rescue", href: "/rescue" },
    { label: "Donation & Fundraising", href: "/donation" },
    { label: "Awareness & Education", href: "/awareness" },
  ],
  getInvolved: [
    { label: "Join WPA", href: "/join" },
    { label: "Volunteer", href: "/volunteers" },
    { label: "Partners", href: "/partners" },
  ],
  resources: [
    { label: "Our Impact", href: "/impact" },
    { label: "Transparency", href: "/transparency" },
    { label: "Public Reports", href: "/reports" },
    { label: "News", href: "/news" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const trustBadges = [
  { icon: "🔒", label: "Verified Partner Network" },
  { icon: "📊", label: "Public Fund Usage Reports" },
  { icon: "🧾", label: "Receipted Donations" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const params = useParams();
  const locale = (params?.locale as Locale) || "en";

  return (
    <footer className="footer">
      {/* Donate CTA Strip */}
      <div className="footer__cta">
        <div className="footer__cta-inner">
          <div className="footer__cta-text">
            <div className="footer__cta-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" opacity="0.9">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div>
              <p className="footer__cta-title">Support Animal Welfare</p>
              <p className="footer__cta-sub">Your contribution helps rescue, care, and educate.</p>
            </div>
          </div>
          <div className="footer__cta-actions">
            <Link href={`/${locale}/donation`} className="btn btn--primary btn--sm">
              Donate Now
            </Link>
            <Link href={`/${locale}/volunteers`} className="btn btn--outline-light btn--sm">
              Get Involved
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__body">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <Logo variant="dark" />
            </div>
            <p className="footer__desc">
              A global animal welfare network connecting pet owners, veterinarians, clinics, shelters, NGOs,
              volunteers, and donors — coordinating rescue, adoption, vaccination, and education worldwide
              through a transparent, verified platform.
            </p>
            <div className="footer__trust">
              {trustBadges.map((badge) => (
                <span key={badge.label} className="badge badge--white">
                  <span aria-hidden="true">{badge.icon}</span>
                  {badge.label}
                </span>
              ))}
            </div>
            <div className="footer__socials">
              <a href="#" className="footer__social-link" aria-label="Facebook">F</a>
              <a href="#" className="footer__social-link" aria-label="YouTube">Y</a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">L</a>
              <a href="#" className="footer__social-link" aria-label="Instagram">I</a>
            </div>
          </div>

          {/* Organization */}
          <div>
            <h3 className="footer__heading">Organization</h3>
            <ul className="footer__links">
              {footerNav.organization.map((link) => (
                <li key={link.label}>
                  <Link href={`/${locale}${link.href}`}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="footer__heading">Programs</h3>
            <ul className="footer__links">
              {footerNav.programs.map((link) => (
                <li key={link.label}>
                  <Link href={`/${locale}${link.href}`}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="footer__heading">Get Involved</h3>
            <ul className="footer__links">
              {footerNav.getInvolved.map((link) => (
                <li key={link.label}>
                  <Link href={`/${locale}${link.href}`}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="footer__heading">Resources</h3>
            <ul className="footer__links">
              {footerNav.resources.map((link) => (
                <li key={link.label}>
                  <Link href={`/${locale}${link.href}`}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer__heading">Contact</h3>
            <div className="footer__contacts">
              <div className="footer__contact-item">
                <div className="footer__contact-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="footer__contact-label">Hotline</p>
                  <p className="footer__contact-value">
                    <a href="tel:+1234567890">+1 (234) 567-890</a>
                  </p>
                </div>
              </div>
              <div className="footer__contact-item">
                <div className="footer__contact-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="footer__contact-label">Email</p>
                  <p className="footer__contact-value">
                    <a href="mailto:info@wpa.org">info@wpa.org</a>
                  </p>
                </div>
              </div>
              <div className="footer__contact-item">
                <div className="footer__contact-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
                <div>
                  <p className="footer__contact-label">Partnership & Media</p>
                  <p className="footer__contact-value">
                    <Link href={`/${locale}/contact`}>Contact form &rarr;</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p>&copy; {year} World Pet Association. All rights reserved.</p>
        <div className="footer__legal">
          {footerNav.legal.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
