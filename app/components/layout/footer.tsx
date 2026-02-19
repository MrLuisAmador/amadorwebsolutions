import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const COMPANY_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
] as const;

const SERVICES = [
  { href: "/#services", label: "Technical SEO" },
  { href: "/#services", label: "Technical Accessibility" },
  { href: "/#services", label: "Website Development" },
  { href: "/#services", label: "Platform Administration" },
] as const;

const LEGAL_LINKS = [
  { href: "/terms", label: "Terms of Services" },
  { href: "/privacy", label: "Privacy Policy" },
] as const;

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/amadorwebsolutions",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/amadorwebsolutions",
    icon: Instagram,
    label: "Instagram",
  },
  { href: "https://x.com/amadorWS", icon: Twitter, label: "X" },
  {
    href: "https://www.linkedin.com/company/amador-web-solutions",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/@amadorwebsolution",
    icon: Youtube,
    label: "YouTube",
  },
] as const;

const PHONE = "(813) 702-3172";
const EMAIL = "amadorwebsolutions@gmail.com";

export function Footer() {
  return (
    <footer className="font-sans bg-aws-gradient text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Link
              href="/"
              className="inline-block"
              aria-label="Amador Web Solutions – Home"
            >
              <Image
                src="/images/amadorwebsolutions-dark.png"
                alt=""
                width={140}
                height={40}
                className="w-auto"
              />
            </Link>
          </div>

          <div>
            <h4 className="font-roboto-slab text-base font-semibold uppercase tracking-wider text-white/90">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-base text-white/80 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-roboto-slab text-base font-semibold uppercase tracking-wider text-white/90">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-base text-white/80 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-roboto-slab text-base font-semibold uppercase tracking-wider text-white/90">
              Legal
            </h4>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-base text-white/80 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-roboto-slab text-base font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h4>
            <p className="mt-4 text-base text-white/80">
              Phone:{" "}
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="transition-colors hover:text-white"
              >
                {PHONE}
              </a>
            </p>
            <p className="mt-1 text-base text-white/80">
              Email:{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="transition-colors hover:text-white"
              >
                {EMAIL}
              </a>
            </p>
            <div className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 hover:scale-105"
                  aria-label={label}
                >
                  <Icon className="size-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/20 pt-10 text-center text-sm text-white/70">
          © Copyright Amador Web Solutions 2026. All rights reserved
        </div>
      </div>
    </footer>
  );
}
