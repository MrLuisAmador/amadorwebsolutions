import { HOW_IT_WORKS } from "@/lib/constants";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Amador Web Solutions",
  description:
    "Let's improve your website. Submit your project details and get a proposal. Technical SEO, accessibility, development, and platform administration.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-section-light">
      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-roboto-slab text-3xl font-bold tracking-tight text-aws-navy sm:text-4xl lg:text-5xl">
            Let&apos;s Improve Your Website
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Share your project details and we&apos;ll send you a tailored proposal. Technical SEO, accessibility, development, and platform administration.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <section
            aria-labelledby="how-it-works-heading"
            className="rounded-2xl border border-border/80 bg-white p-8 shadow-sm"
          >
            <h2
              id="how-it-works-heading"
              className="font-roboto-slab text-lg font-semibold tracking-tight text-aws-navy"
            >
              How this works
            </h2>
            <ul className="mt-6 space-y-4">
              {HOW_IT_WORKS.map((step) => (
                <li
                  key={step}
                  className="flex items-center gap-4 text-foreground"
                >
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-full bg-aws-accent text-white"
                    aria-hidden
                  >
                    <Check className="size-4" />
                  </span>
                  <span className="font-medium">{step}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="rounded-2xl border border-border/80 bg-white p-8 shadow-sm sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
