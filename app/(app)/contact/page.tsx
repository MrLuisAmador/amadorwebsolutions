import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Amador Web Solutions",
  description:
    "Let's improve your website. Submit your project details and get a proposal. Technical SEO, accessibility, development, and platform administration.",
};

const HOW_IT_WORKS = [
  "You submit the form",
  "I review your request",
  "You get a proposal",
  "If it's a fit, we start",
] as const;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="font-roboto-slab text-center text-3xl font-bold text-aws-navy sm:text-4xl">
        Let&apos;s Improve Your Website
      </h1>

      <div className="mx-auto mt-12 grid max-w-4xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <section aria-labelledby="how-it-works-heading">
          <h2
            id="how-it-works-heading"
            className="font-roboto-slab text-xl font-semibold text-aws-navy"
          >
            How this works
          </h2>
          <ul className="mt-4 space-y-3">
            {HOW_IT_WORKS.map((step) => (
              <li
                key={step}
                className="flex items-center gap-3 text-foreground"
              >
                <span
                  className="flex size-6 shrink-0 items-center justify-center rounded-full bg-aws-accent text-white"
                  aria-hidden
                >
                  <Check className="size-3.5" />
                </span>
                {step}
              </li>
            ))}
          </ul>
        </section>

        <ContactForm />
      </div>
    </div>
  );
}
