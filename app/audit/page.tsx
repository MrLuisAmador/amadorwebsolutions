import type { Metadata } from "next";
import { AuditForm } from "./AuditForm";

export const metadata: Metadata = {
  title: "Website Audit | Amador Web Solutions",
  description:
    "Request a free website audit. We analyze your site's code, structure, and performance for SEO, accessibility, and conversion opportunities.",
};

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-section-light">
      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="font-roboto-slab text-3xl font-bold tracking-tight text-aws-navy sm:text-4xl lg:text-5xl">
            Free Website Audit
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            We analyze your site&apos;s code, structure, and performance for SEO, accessibility, and conversion opportunities.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-md">
          <div className="rounded-2xl border border-border/80 bg-white p-8 shadow-sm sm:p-10">
            <AuditForm />
          </div>
        </div>
      </section>
    </div>
  );
}
