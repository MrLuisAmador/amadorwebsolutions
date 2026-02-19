import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const siteUrl = "https://www.amadorwebsolutions.com/";
const siteTitle = "Amador Web Solutions";
const siteDescription =
  "Your website should be your best sales rep. We build strategy-driven websites that convert visitors into leads.";

export const metadata: Metadata = {
  title: `Home | ${siteTitle}`,
  description: siteDescription,
  keywords: ["web development", "marketing", "SEO", "conversion", "web design"],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const STRATEGY_FEATURES = [
  {
    image: "/images/tmpkzoqwnr6.webp",
    title: "Technical Insight",
    description:
      "We audit your site’s code, structure, and performance to uncover SEO, accessibility, and conversion issues that directly impact growth.",
  },
  {
    image: "/images/tmp1k7k4i1f.webp",
    title: "Accessibility-First Development",
    description:
      "We build and fix websites to meet accessibility best practices, improving usability for all users while reducing legal and compliance risk.",
  },
  {
    image: "/images/tmpf7_dz92j.webp",
    title: "SEO-Ready Architecture",
    description:
      "From clean code to proper metadata and site structure, we engineer websites that search engines can crawl, understand, and rank effectively.",
  },
  {
    image: "/images/tmpz27lt39w.webp",
    title: "Conversion & CRM Integration",
    description:
      "We connect your website directly to a CRM platform to capture leads, track user behavior, and automate follow-ups — so no opportunity gets missed.",
  },
];

const CONVERSION_BULLETS = [
  "Technical SEO & Performance – Optimize your site for search engines and fast, smooth experiences",
  "Accessible & Engaging Design – Build trust and usability for all users",
  "CRM-Integrated Lead Capture – Automatically track, nurture, and convert leads",
];

const SCALE_BULLETS = [
  "Integrated Tracking & Analytics – Capture every lead and conversion in real time",
  "Technical Optimization – Clean, maintainable code for speed, reliability, and SEO",
  "CRM-Connected Growth – Automate follow-ups and scale lead management effortlessly",
];

const GROWTH_BULLETS = [
  "Advanced Analytics – Track website performance, engagement, and lead conversions effortlessly",
  "Seamless Integrations – Connect your website with tracking systems, CRM platforms, and other tools for a unified experience",
  "Automated Lead Capture & Follow-Up – Streamline processes and ensure no opportunity is missed.",
];

const TESTIMONIALS = [
  {
    quote:
      "If you’re looking for someone who knows what they’re doing and actually listens? Yeah… Amador Web Solutions is that agency.. Highly recommend — he leveled up my whole website & funnel.",
    name: "Angelica M Lazo",
    title: "CEO of She Is On Demand",
  },
  {
    quote:
      "Extremely knowledgeable in his craft and helped my business scale. Highly recommend to use for your business",
    name: "Joseph Asante",
    title: "CEO of Cardinal Point Aviation",
  },
  {
    quote:
      "This software has been a game-changer for our operations. The automated workflows and real-time data tracking have saved us hours of manual work and streamlined our processes. Since using it, we’ve grown our revenue by 45% in just three months.",
    name: "Adam Asbury",
    title: "President of Love Pop Miami",
  },
];

const FAQ_ITEMS = [
  {
    q: "What platforms do you build websites on?",
    a: "We build websites on modern platforms and frameworks. Depending on your needs, we offer fast, template-based builds for cost efficiency or fully custom websites and web applications for flexibility and performance.",
  },
  {
    q: "Do you handle ongoing website maintenance?",
    a: "Yes! We provide maintenance, updates, code changes, and design-to-code enhancements to keep your website secure, fast, and fully optimized.",
  },
  {
    q: "Can you help my site rank higher in search engines?",
    a: "Absolutely. We perform technical SEO audits and implement improvements to your site’s code, metadata, and structure to improve visibility and attract qualified traffic.",
  },
  {
    q: "What is an accessibility audit, and why is it important?",
    a: "An accessibility audit ensures your website is usable by all visitors, including those with disabilities. It’s essential for compliance, improving user experience, and expanding your potential audience.",
  },
  {
    q: "How does CRM integration work?",
    a: "We connect your website to a CRM platform that captures leads, tracks user behavior, and automates follow-ups, ensuring no opportunity is missed and your marketing is always actionable.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Timeline depends on the complexity. Template-based builds can take a few weeks, while fully custom websites or web apps take longer to ensure quality, speed, and scalability.",
  },
  {
    q: "Can I choose what type of audit I want?",
    a: "Yes! When you request a free website audit, you can select either an SEO audit, an accessibility audit, or both, depending on what you want to prioritize first",
  },
  {
    q: "Do you provide analytics and performance tracking?",
    a: "Yes. We integrate tools to track website performance, user engagement, and lead conversions so you can make data-driven decisions and optimize your growth.",
  },
];

const HERO_IMAGE = "/images/tmpz577vvgf.webp";
const LEADS_IMAGE = "/images/tmp71kqxegx.webp";
const SCALE_IMAGE = "/images/tmpaaghhrf1.webp";
const GROWTH_IMAGE = "/images/tmpq8k9lgha.webp";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero */}
      <section
        id="hero"
        className="relative overflow-hidden bg-aws-hero px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(220,36,62,0.08)_0%,transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-14 lg:flex-row lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <p className="font-semibold tracking-wide text-aws-icon sm:text-lg">
              Strategy-driven web development
            </p>
            <h1 className="font-roboto-slab mt-2 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Website Should Be Your Best Sales Rep
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
              We build fast, accessible, SEO-ready websites connected to your
              CRM—engineered to capture and convert leads from day one, not just
              display content.
            </p>
            <Button
              variant="accent"
              size="lg"
              className="mt-10 rounded-full px-8 py-6 text-base font-semibold shadow-cta shadow-cta-hover transition-shadow"
              asChild
            >
              <Link href="/audit">Get a Free Website Audit</Link>
            </Button>
          </div>
          <div className="relative w-full flex-1 max-w-lg shrink-0">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-white/5 shadow-2xl ring-1 ring-white/10 lg:aspect-auto lg:min-h-[420px]">
              <Image
                src={HERO_IMAGE}
                alt="Partnership and business growth"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section
        id="services"
        className="bg-section-light px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-roboto-slab text-3xl font-bold tracking-tight text-aws-navy sm:text-4xl lg:text-5xl">
              Strategy Built In—Not Bolted On Later
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A high-performing site is built on technical decisions that
              improve visibility, accessibility, and conversions from day one.
              We design every site so users, search engines, and your CRM work
              together.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STRATEGY_FEATURES.map(({ image, title, description }) => (
              <div
                key={title}
                className="card-hover group rounded-2xl border border-border/80 bg-white p-6 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-aws-navy/5 ring-1 ring-aws-navy/10">
                  <Image
                    src={image}
                    alt=""
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-roboto-slab mt-5 text-lg font-semibold text-aws-navy">
                  {title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leads Conversion */}
      <section className="relative bg-aws-gradient px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row lg:gap-20">
          <div className="relative w-full flex-1 overflow-hidden rounded-2xl ring-1 ring-white/10">
            <div className="relative aspect-4/3 lg:aspect-auto lg:min-h-[360px]">
              <Image
                src={LEADS_IMAGE}
                alt="Data and conversion focus"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <p className="text-base font-semibold uppercase tracking-widest text-aws-icon">
              Enhance Engagement
            </p>
            <h2 className="font-roboto-slab mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Turn Visitors into Leads That Convert
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              Your website isn’t just traffic—it’s a lead-generating engine. We
              help you capture, engage, and convert visitors into actionable
              opportunities.
            </p>
            <p className="font-roboto-slab mt-8 text-lg font-semibold text-white">
              Data-Driven Engagement
            </p>
            <ul className="mt-4 space-y-3">
              {CONVERSION_BULLETS.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-white/90"
                >
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-aws-accent" />
                  <span className="text-left">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Scale Smarter */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-roboto-slab text-3xl font-bold tracking-tight text-aws-navy sm:text-4xl">
              Scale Smarter, Connect Faster
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Your website and CRM should capture leads, track performance, and
              adapt as you grow. We build systems that integrate data, optimize
              engagement, and fuel scalable growth.
            </p>
            <p className="font-roboto-slab mt-8 text-lg font-semibold text-aws-navy">
              Seamless Data & Integration
            </p>
            <p className="mt-2 text-muted-foreground">
              Connect your website with analytics, tracking, and CRM workflows
              for a unified view of leads and performance.
            </p>
            <ul className="mt-5 space-y-3">
              {SCALE_BULLETS.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-aws-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full flex-1 max-w-lg overflow-hidden rounded-2xl border border-border/80 shadow-lg">
            <div className="relative aspect-4/3 lg:min-h-[320px]">
              <Image
                src={SCALE_IMAGE}
                alt="Team collaboration and integrations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="bg-aws-gradient px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-roboto-slab text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Amplify Your Brand with Social Media
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-white/90">
            Create meaningful connections, build trust, and drive real
            engagement. With the right strategy, your brand can reach the right
            audience and convert followers into loyal customers.
          </p>
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="card-hover rounded-2xl border border-white/10 bg-white p-8 backdrop-blur-sm">
              <h3 className="font-roboto-slab text-lg font-semibold text-aws-navy">
                Maximize Your Impact with Social Media
              </h3>
              <p className="mt-3 text-base leading-relaxed text-black">
                Engage, connect, and grow your audience with data-driven
                strategies and creative content—building a loyal community and
                driving real conversions.
              </p>
              <div className="mt-6 flex justify-center">
                <Image
                  src="/images/tmp7ygor25c.webp"
                  alt=""
                  width={430}
                  height={287}
                  className="opacity-90"
                />
              </div>
            </div>
            <div className="card-hover rounded-2xl border border-white/10 bg-white p-8 backdrop-blur-sm">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/images/tmpxwp8bu0r.webp"
                  alt=""
                  width={430}
                  height={287}
                  className="opacity-90"
                />
              </div>
              <h3 className="font-roboto-slab text-lg font-semibold text-aws-navy">
                Grow Your Brand, One Post at a Time
              </h3>
              <p className="mt-3 text-base leading-relaxed text-black">
                Unlock brand visibility and engagement. With the right content
                and strategy, turn followers into customers and conversations
                into conversions.
              </p>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div className="text-center">
              <p className="font-roboto-slab text-4xl font-bold text-white">
                89k
              </p>
              <p className="mt-1 text-base text-white/75">
                Satisfied customers with data-driven strategies
              </p>
            </div>
            <div className="text-center">
              <p className="font-roboto-slab text-4xl font-bold text-aws-icon">
                76%
              </p>
              <p className="mt-1 text-base text-white/75">
                Increase in engagement with targeted insights
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="flex items-center gap-1 font-roboto-slab text-4xl font-bold text-white">
                4.93
                <Star
                  className="size-7 fill-aws-icon text-aws-icon"
                  aria-hidden
                />
              </p>
              <p className="mt-1 text-base text-white/75">
                Average customer rating
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Smarter, Grow Faster */}
      <section className="bg-section-light px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row lg:gap-20">
          <div className="relative w-full flex-1 max-w-lg overflow-hidden rounded-2xl border border-border/80 shadow-lg">
            <div className="relative aspect-4/3 lg:min-h-[320px]">
              <Image
                src={GROWTH_IMAGE}
                alt="Growth and data-driven strategy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-roboto-slab text-3xl font-bold tracking-tight text-aws-navy sm:text-4xl">
              Work Smarter, Grow Faster
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Leverage technical SEO, accessible design, and CRM-driven
              automation to streamline your workflow and capture more leads.
              Real-time insights and integrated tracking make growth easier.
            </p>
            <p className="font-roboto-slab mt-8 text-lg font-semibold text-aws-navy">
              Unlock Every Feature, No Limits
            </p>
            <ul className="mt-5 space-y-3">
              {GROWTH_BULLETS.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-aws-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Button
              variant="accent"
              size="lg"
              className="mt-8 rounded-full px-6"
              asChild
            >
              <Link href="/blog">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-aws-gradient px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-roboto-slab text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-white/90">
            Our websites and CRM solutions help businesses capture leads and
            grow. Hear from the clients we’ve helped succeed.
          </p>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(({ quote, name, title }) => (
              <div
                key={name}
                className="card-hover rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <p className="text-base leading-relaxed text-white/95">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-aws-navy-light font-semibold text-white ring-2 ring-white/20">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{name}</p>
                    <p className="text-base text-white/70">{title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="about"
        className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-roboto-slab text-center text-3xl font-bold tracking-tight text-aws-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-muted-foreground">
            Answers to common questions about our services, audits, and
            technical solutions.
          </p>
          <Accordion type="single" className="mt-12 space-y-3">
            {FAQ_ITEMS.map(({ q, a }, i) => (
              <AccordionItem
                key={q}
                value={`faq-${i}`}
                className="rounded-xl border border-border bg-muted/30 px-4 transition-colors hover:bg-muted/50"
              >
                <AccordionTrigger
                  value={`faq-${i}`}
                  className="py-5 text-left font-semibold text-aws-navy hover:no-underline [&[data-state=open]>span]:rotate-180"
                >
                  {q}
                </AccordionTrigger>
                <AccordionContent value={`faq-${i}`} className="pb-5 pt-0">
                  <p className="text-muted-foreground">{a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
