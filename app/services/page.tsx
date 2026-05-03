import { SITE_TITLE } from "@/lib/constants";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES, PACKAGES } from "@/lib/services";

export const metadata: Metadata = {
  title: `Services | ${SITE_TITLE}`,
  description:
    "Technical SEO and CRM automation packages for Wesley Chapel & Tampa businesses. Full audits, HubSpot setup, and revenue automation.",
  keywords: [
    "technical SEO",
    "CRM automation",
    "HubSpot",
    "Wesley Chapel",
    "Tampa",
    "lead capture",
  ],
  alternates: {
    canonical: "https://www.amadorwebsolutions.com/services",
  },
};

export default function ServicesListingPage() {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden bg-aws-hero px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(220,36,62,0.08)_0%,transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-semibold tracking-wide text-aws-icon sm:text-lg">
            Strategy-driven packages
          </p>
          <h1 className="font-roboto-slab mt-2 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Services Built for Growth
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90">
            Technical SEO and CRM automation packages designed for local
            businesses in Wesley Chapel, Tampa, and beyond. Clear pricing, clear
            results.
          </p>
          <Button
            variant="accent"
            size="lg"
            className="mt-10 rounded-full px-8 py-6 text-base font-semibold shadow-cta shadow-cta-hover transition-shadow"
            asChild
          >
            <Link href="/contact">Get a Proposal</Link>
          </Button>
        </div>
      </section>

      {/* Package Overview */}
      <section className="bg-section-light px-4 py-20 sm:px-6 sm:py-28 lg:px-8 hidden">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-roboto-slab text-3xl font-bold tracking-tight text-aws-navy sm:text-4xl lg:text-5xl">
              Choose Your Package
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Three clear packages to match your growth stage. Start with
              technical SEO, add CRM automation, or go all-in with the Growth
              Engine.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`card-hover relative flex flex-col rounded-2xl border p-8 shadow-sm ${
                  pkg.featured === true
                    ? "border-aws-accent bg-white ring-2 ring-aws-accent/20"
                    : "border-border/80 bg-white"
                }`}
              >
                {pkg.premium === true && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-aws-accent px-3 py-0.5 text-xs font-semibold text-white">
                    Best Value
                  </span>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="font-roboto-slab text-3xl font-bold text-aws-navy">
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>
                <h3 className="font-roboto-slab mt-2 text-xl font-semibold text-aws-navy">
                  {pkg.name}
                </h3>
                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <Check className="size-4 shrink-0 text-aws-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.featured === true ? "accent" : "outline"}
                  className="mt-8 w-full rounded-full"
                  asChild
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Listing */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-roboto-slab text-3xl font-bold tracking-tight text-aws-navy sm:text-4xl lg:text-5xl">
              Our Services
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Deep-dive into each service. Full details, pricing, and what’s
              included.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="card-hover group flex flex-col rounded-2xl border border-border/80 bg-white p-8 shadow-sm transition-colors hover:border-aws-navy/20"
                >
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-aws-navy/10 text-aws-navy">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="font-roboto-slab mt-6 text-xl font-semibold text-aws-navy group-hover:text-aws-navy-light">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-aws-accent">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-aws-gradient px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-roboto-slab text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Grow?
          </h2>
          <p className="mt-5 text-lg text-white/90">
            Get a tailored proposal for your business. Technical SEO, CRM
            automation, or both—we&apos;ll find the right fit.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="accent"
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold shadow-cta shadow-cta-hover transition-shadow"
              asChild
            >
              <Link href="/contact">Get a Proposal</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white/40 bg-transparent px-8 py-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href="/audit">Free Website Audit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
