"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const INPUT_CLASS =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-aws-navy focus:outline-none focus:ring-2 focus:ring-aws-navy/20 transition-colors";

type Status = "idle" | "submitting" | "success" | "error";

export function AuditForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-6", className)}
      noValidate
    >
      <div>
        <label htmlFor="audit-email" className="block text-base font-semibold text-aws-navy">
          Email <span className="text-aws-accent">*</span>
        </label>
        <input
          id="audit-email"
          name="email"
          type="email"
          required
          placeholder="Email"
          className={INPUT_CLASS}
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor="audit-website" className="block text-base font-semibold text-aws-navy">
          Website <span className="text-aws-accent">*</span>
        </label>
        <input
          id="audit-website"
          name="website"
          type="url"
          required
          placeholder="Web URL goes here"
          className={INPUT_CLASS}
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor="audit-business" className="block text-base font-semibold text-aws-navy">
          Business
        </label>
        <input
          id="audit-business"
          name="business"
          type="text"
          placeholder="Business Name"
          className={INPUT_CLASS}
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor="audit-name" className="block text-base font-semibold text-aws-navy">
          Full Name
        </label>
        <input
          id="audit-name"
          name="fullName"
          type="text"
          placeholder="Full Name"
          className={INPUT_CLASS}
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor="audit-phone" className="block text-base font-semibold text-aws-navy">
          Phone
        </label>
        <input
          id="audit-phone"
          name="phone"
          type="tel"
          placeholder="Phone"
          className={INPUT_CLASS}
          disabled={status === "submitting"}
        />
      </div>

      <Button
        type="submit"
        className="w-full rounded-full bg-aws-navy py-6 font-semibold text-white shadow-sm transition-colors hover:bg-aws-navy-light"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Submitting…" : "Request free audit"}
      </Button>

      {status === "success" && (
        <p className="text-center text-base font-medium text-green-600" role="status">
          Thank you. We&apos;ll be in touch soon to schedule your audit.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-base font-medium text-aws-accent" role="alert">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
