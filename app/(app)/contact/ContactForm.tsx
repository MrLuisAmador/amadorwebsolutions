"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const INPUT_CLASS =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-aws-navy focus:outline-none focus:ring-2 focus:ring-aws-navy/20 transition-colors";

const TEXTAREA_CLASS = `${INPUT_CLASS} min-h-[100px] resize-y`;

const HELP_OPTIONS = [
  "Technical SEO",
  "Technical Accessibility",
  "Website Development",
  "Platform Administration",
  "Website Maintenance",
  "Something else",
] as const;

const BUDGET_OPTIONS = [
  { value: "", label: "Select budget range" },
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 – $15,000" },
  { value: "15k-30k", label: "$15,000 – $30,000" },
  { value: "30k-plus", label: "$30,000+" },
  { value: "unsure", label: "Not sure yet" },
] as const;

const START_OPTIONS = [
  { value: "", label: "Select timeline" },
  { value: "asap", label: "ASAP" },
  { value: "1-month", label: "Within 1 month" },
  { value: "3-months", label: "Within 3 months" },
  { value: "exploring", label: "Just exploring" },
] as const;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
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
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="contact-fullName" className="block text-base font-semibold text-aws-navy">
          Full Name <span className="text-aws-accent">*</span>
        </label>
        <input
          id="contact-fullName"
          name="fullName"
          type="text"
          required
          placeholder="Full Name"
          className={INPUT_CLASS}
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-base font-semibold text-aws-navy">
          Email <span className="text-aws-accent">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="Email"
          className={INPUT_CLASS}
          disabled={status === "submitting"}
        />
        <p className="mt-1.5 text-base text-muted-foreground">
          I reply within 24 hours
        </p>
      </div>

      <div>
        <label htmlFor="contact-website" className="block text-base font-semibold text-aws-navy">
          Website URL <span className="text-aws-accent">*</span>
        </label>
        <input
          id="contact-website"
          name="websiteUrl"
          type="url"
          required
          placeholder="Website URL"
          className={INPUT_CLASS}
          disabled={status === "submitting"}
        />
      </div>

      <fieldset>
        <legend className="block text-base font-semibold text-aws-navy">
          What are you looking for help with?
        </legend>
        <div className="mt-3 space-y-2">
          {HELP_OPTIONS.map((option) => (
            <label
              key={option}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-xl border border-border px-4 py-3 transition-colors has-checked:border-aws-navy has-checked:bg-aws-navy/5"
              )}
            >
              <input
                type="radio"
                name="helpWith"
                value={option}
                className="size-4 border-border text-aws-navy focus:ring-aws-navy"
                disabled={status === "submitting"}
              />
              <span className="text-base font-medium">{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="contact-goal" className="block text-base font-semibold text-aws-navy">
          What&apos;s the main goal of this project?
        </label>
        <textarea
          id="contact-goal"
          name="goal"
          placeholder="More leads, faster site, better design, etc."
          className={TEXTAREA_CLASS}
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor="contact-budget" className="block text-base font-semibold text-aws-navy">
          Estimated budget <span className="text-aws-accent">*</span>
        </label>
        <select
          id="contact-budget"
          name="budget"
          required
          className={cn(INPUT_CLASS, "appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%236b7280%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27M6 9l6 6 6-6%27/%3E%3C/svg%3E')] bg-size-[1.25rem] bg-position-[right_0.5rem_center] bg-no-repeat pr-10")}
          disabled={status === "submitting"}
        >
          {BUDGET_OPTIONS.map(({ value, label }) => (
            <option key={value || "placeholder"} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-start" className="block text-base font-semibold text-aws-navy">
          When do you want to start?
        </label>
        <select
          id="contact-start"
          name="startWhen"
          className={cn(INPUT_CLASS, "appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%236b7280%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27M6 9l6 6 6-6%27/%3E%3C/svg%3E')] bg-size-[1.25rem] bg-position-[right_0.5rem_center] bg-no-repeat pr-10")}
          disabled={status === "submitting"}
        >
          {START_OPTIONS.map(({ value, label }) => (
            <option key={value || "placeholder"} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-details" className="block text-base font-semibold text-aws-navy">
          Additional details (optional)
        </label>
        <textarea
          id="contact-details"
          name="additionalDetails"
          className={TEXTAREA_CLASS}
          disabled={status === "submitting"}
        />
      </div>

      <Button
        type="submit"
        className="w-full rounded-full bg-aws-navy py-6 font-semibold text-white shadow-sm transition-colors hover:bg-aws-navy-light"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>

      {status === "success" && (
        <p className="text-center text-base font-medium text-green-600" role="status">
          Thanks! I&apos;ll get back to you within 24 hours.
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
