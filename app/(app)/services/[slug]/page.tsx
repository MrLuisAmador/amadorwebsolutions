import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getServiceBySlug,
  getServiceSlugs,
} from "@/lib/services";

const siteTitle = "Amador Web Solutions";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | ${siteTitle}`,
    description: service.description,
    alternates: {
      canonical: `https://www.amadorwebsolutions.com/services/${service.slug}`,
    },
  };
}

function ServiceBlock({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: readonly string[];
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-xl border border-border/80 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-aws-navy/10 text-aws-navy">
          <Icon className="size-5" />
        </div>
        <h3 className="font-roboto-slab text-lg font-semibold text-aws-navy">
          {title}
        </h3>
      </div>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-muted-foreground">
            <span className="mt-1.5 size-2 shrink-0 rounded-full bg-aws-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden bg-aws-hero px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(220,36,62,0.08)_0%,transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            ← Back to Services
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-white">
              <Icon className="size-7" />
            </div>
            <div>
              <h1 className="font-roboto-slab text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-3 text-lg text-white/90">{service.description}</p>
            </div>
          </div>
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

      {/* Content */}
      <section className="bg-section-light px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
            <div className="lg:max-w-md">
              <div>
                <h2 className="font-roboto-slab text-lg font-semibold text-aws-navy">
                  Who it&apos;s for
                </h2>
                <ul className="mt-4 space-y-2">
                  {service.whoItFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <Target className="mt-0.5 size-4 shrink-0 text-aws-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 rounded-xl border border-border/80 bg-white p-6 shadow-sm">
                <h3 className="font-roboto-slab font-semibold text-aws-navy">
                  Pricing
                </h3>
                <p className="mt-2 text-muted-foreground">
                  <strong className="text-foreground">
                    {service.pricing.option1.label}:
                  </strong>{" "}
                  {service.pricing.option1.value}
                </p>
                <p className="mt-3 text-muted-foreground">
                  <strong className="text-foreground">
                    {service.pricing.option2.label}:
                  </strong>{" "}
                  {service.pricing.option2.value}
                </p>
                {service.pricing.note && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.pricing.note}
                  </p>
                )}
              </div>
            </div>
            <div className="flex-1 grid gap-6 sm:grid-cols-2">
              {service.blocks.map((block) => (
                <ServiceBlock
                  key={block.title}
                  title={block.title}
                  items={block.items}
                  icon={block.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-aws-gradient px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-roboto-slab text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-5 text-lg text-white/90">
            Get a tailored proposal for {service.title}.
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
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
