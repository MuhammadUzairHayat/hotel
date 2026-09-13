import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";

// Brand icons were removed from lucide-react, so we render them inline
// to keep the social set visually consistent.
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Amenities", href: "/amenities" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

// TikTok isn't in lucide, so a small inline mark keeps the set consistent.
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.5c-1.3.1-2.5-.3-3.6-.9v5.9c0 3.2-2.4 5.6-5.5 5.6a5.4 5.4 0 0 1-5.4-5.5c0-3.1 2.6-5.6 5.9-5.3v2.6c-.4-.1-.8-.2-1.2-.2-1.5 0-2.6 1.2-2.6 2.7 0 1.5 1.1 2.6 2.6 2.6 1.5 0 2.7-1.1 2.7-2.9V3h3.1Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background-dark text-white">
      <div className="container-lux py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl">{site.name}</span>
            <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.35em] text-gold-light">
              Hotel · Swat Valley
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              A luxury boutique mountain retreat where warm hospitality meets
              the peaceful beauty of Swat Valley.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-gold-light">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-gold-light">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${site.phoneHref}`} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-gold-light">
              Social
            </h4>
            <div className="mt-5 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-white/20 p-2.5 text-white/70 transition hover:border-primary hover:text-primary"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-white/20 p-2.5 text-white/70 transition hover:border-primary hover:text-primary"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={site.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="rounded-full border border-white/20 p-2.5 text-white/70 transition hover:border-primary hover:text-primary"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border-dark pt-8 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {site.fullName}. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
