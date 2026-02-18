import type { Metadata } from "next";
import { AuditForm } from "./AuditForm";

export const metadata: Metadata = {
  title: "Website Audit | Amador Web Solutions",
  description:
    "Request a free website audit. We analyze your site's code, structure, and performance for SEO, accessibility, and conversion opportunities.",
};

export default function AuditPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="font-roboto-slab text-center text-3xl font-bold text-aws-navy sm:text-4xl">
        Website Audit
      </h1>
      <AuditForm className="mx-auto mt-12 max-w-md" />
    </div>
  );
}
