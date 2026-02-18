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
        className="bg-aws-navy px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-roboto-slab text-5xl font-bold leading-tight text-white sm:text-6xl">
              Your Website Should Be Your Best Sales Rep
            </h1>
            <ul className="mt-6 max-w-xl text-lg text-white list-disc list-inside space-y-5">
              <li>
                We build fast, accessible, SEO-ready websites connected to a CRM
                system designed to capture and convert leads — not just display
                content.
              </li>
              <li>
                Amador Web Solutions engineers websites with technical SEO,
                accessibility compliance, and automation built in from day one.
              </li>
            </ul>
            <Button
              variant="accent"
              size="lg"
              className="mt-8 rounded-full text-lg px-7 py-4"
              asChild
            >
              <Link href="/audit">Get a Free Website Audit</Link>
            </Button>
          </div>

          <div className="relative w-full flex-1 max-w-lg aspect-4/3 lg:aspect-auto lg:min-h-[493px]">
            <Image
              src={HERO_IMAGE}
              alt="Partnership and business growth"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section
        id="services"
        className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="font-roboto-slab text-center md:text-5xl font-bold text-aws-navy sm:text-4xl">
            Strategy Built Into the Website – Not Bolted On Later
          </h3>
          <p className="mx-auto mt-4 text-lg text-center text-aws-accent">
            A high-performing website isn’t just about looks. It’s about
            technical decisions that improve visibility, accessibility, and
            conversions from day one. We design and engineer every site with
            your users, search engines, and CRM working together.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {STRATEGY_FEATURES.map(({ image, title, description }) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex items-center justify-center">
                <Image
                  src={image}
                  alt=""
                  width={108}
                  height={108}
                  className=""
                />
              </div>
              <h3 className="font-roboto-slab mt-4 font-semibold text-aws-navy text-xl">
                {title}
              </h3>
              <p className="mt-2 text-aws-accent">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leads Conversion – illustration left, text right */}
      <section className="bg-aws-navy px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2.5 lg:flex-row">
          <div className="relative w-full flex-1 aspect-4/3">
            <Image
              src={LEADS_IMAGE}
              alt="Data and conversion focus"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-roboto-slab uppercase font-normal text-white text-xl mb-5">
              Enhance Engagement
            </h2>
            <h3 className="font-roboto-slab font-bold text-white text-5xl mb-5">
              Turn Visitors into Leads That Convert
            </h3>
            <p className="mb-10 text-white text-lg">
              Your website isn’t just traffic—it’s a lead-generating engine. We
              help you capture, engage, and convert visitors into actionable
              opportunities for your business.
            </p>
            <h4 className="font-roboto-slab font-bold text-white text-xl">
              Data-Driven Engagement that Works
            </h4>
            <ul className="mt-3 space-y-2 text-lg">
              {CONVERSION_BULLETS.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-2 text-white/90"
                >
                  <span className="size-2 rounded-full bg-aws-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Scale Smarter – text left, illustration right */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-roboto-slab text-3xl font-bold text-aws-navy sm:text-4xl">
              Scale Smarter, Connect Faster
            </h2>
            <p className="mt-6 text-muted-foreground">
              Your website and CRM should do more than just exist—they should
              capture leads, track performance, and adapt as your business
              evolves. We build systems that integrate data, optimize
              engagement, and fuel scalable growth.
            </p>
            <p className="mt-6 font-semibold text-aws-navy">
              Seamless Data & Integration
            </p>
            <p>
              Connect your website with analytics tools, tracking systems, and
              CRM workflows to get an unified view of your leads and
              performance.
            </p>
            <ul className="mt-3 space-y-2 text-lg">
              {SCALE_BULLETS.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span className="size-2 rounded-full bg-aws-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full flex-1 max-w-lg aspect-[4/3] lg:min-h-[320px]">
            <Image
              src={SCALE_IMAGE}
              alt="Team collaboration and integrations"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="bg-aws-navy px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-roboto-slab text-center text-3xl font-bold text-white sm:text-4xl">
            Amplify Your Brand with Social Media Power
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/90">
            Social media is more than just posting—it's about creating
            meaningful connections, building trust, and driving real engagement.
            With the right strategy, your brand can reach the right audience,
            spark conversations, and convert followers into loyal customers.
            Let’s take your social presence to the next level!
          </p>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="font-roboto-slab font-semibold text-white">
                Maximize Your Impact with Social Media
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Engage, connect, and grow your audience with powerful social
                media strategies. Leverage data-driven insights and creative
                content to build a loyal community, increase brand awareness,
                and drive real conversions.
              </p>
              <div className="mt-6 space-y-4">
                <Image
                  src="/images/tmpz30zxx68.webp"
                  alt="Social Media"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="mt-6 space-y-4">
                <Image
                  src="/images/tmpz30zxx68.webp"
                  alt="Social Media"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="font-roboto-slab font-semibold text-white">
                Grow Your Brand, One Post at a Time
              </h3>
              <p className="mt-4 text-sm text-white/80">
                Social media is the key to unlocking brand visibility and
                engagement. With the right content and strategy, you can turn
                followers into customers and conversations into conversions.
              </p>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-12 text-white">
            <div className="text-center">
              <p className="text-3xl font-bold">89k</p>
              <p className="text-sm text-white/80">
                Satisfied customers leveraging data-driven marketing strategies.
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">76%</p>
              <p className="text-sm text-white/80">
                Increase in engagement through AI-powered insights.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="flex items-center gap-1 text-3xl font-bold">
                4.93
                <Star className="size-6 fill-aws-icon text-aws-icon" />
              </p>
              <p className="text-sm text-white/80">
                Average customer rating, proving our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Smarter, Grow Faster – illustration left, text right */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="relative w-full flex-1 max-w-lg aspect-[4/3] lg:min-h-[320px]">
            <Image
              src={GROWTH_IMAGE}
              alt="Growth and data-driven strategy"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-roboto-slab text-3xl font-bold text-aws-navy sm:text-4xl">
              Work Smarter, Grow Faster
            </h2>
            <p className="mt-6 text-muted-foreground">
              Leverage technical SEO, accessible design, and CRM-driven
              automation to streamline your website’s workflow and capture more
              leads. With real-time insights and integrated tracking, managing
              and growing your business has never been easier.
            </p>
            <p className="mt-6 font-semibold text-aws-navy">
              Unlock Every Feature, No Limits
            </p>
            <ul className="mt-3 space-y-2 text-lg">
              {GROWTH_BULLETS.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span className="size-2 rounded-full bg-aws-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
            <Button variant="accent" className="mt-8" asChild>
              <Link href="/blog">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-aws-navy px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-roboto-slab text-center text-3xl font-bold text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/90">
            Our websites and CRM-integrated solutions help businesses capture
            leads, optimize performance, and grow efficiently. But don’t just
            take our word for it—hear directly from the clients we’ve helped
            succeed!
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(({ quote, name, title }) => (
              <div
                key={name}
                className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <p className="text-white/95">{quote}</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-aws-navy-light text-lg font-semibold text-white">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-white">{name}</p>
                    <p className="text-sm text-white/70">{title}</p>
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
        className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-roboto-slab text-center text-3xl font-bold text-aws-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-aws-accent">
            We understand you may have questions before starting your website or
            lead-generation project. Here are answers to some of the most common
            questions about our services, audits, and technical solutions.
          </p>
          <Accordion type="single" className="mt-12 space-y-2">
            {FAQ_ITEMS.map(({ q, a }, i) => (
              <AccordionItem key={q} value={`faq-${i}`}>
                <div className="overflow-hidden rounded-lg border border-aws-navy">
                  <AccordionTrigger
                    value={`faq-${i}`}
                    className="w-full bg-aws-navy px-5 py-4 text-left text-white hover:bg-aws-navy-light [&>span]:text-white"
                  >
                    {q}
                  </AccordionTrigger>
                  <AccordionContent
                    value={`faq-${i}`}
                    className="border-t border-aws-navy bg-white px-5 pb-4 pt-3"
                  >
                    <p className="text-muted-foreground">{a}</p>
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
