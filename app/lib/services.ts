import {
  ACCESSIBILITY_AUDIT,
  ACCESSIBILITY_FIXES,
  ACCESSIBILITY_WHO,
  CRM_AUTOMATION,
  CRM_LEAD_CAPTURE,
  CRM_OPTIMIZATION,
  CRM_REPORTING,
  CRM_SETUP,
  CRM_WHO,
  TECHNICAL_SEO_AUDIT,
  TECHNICAL_SEO_MAINTENANCE,
  TECHNICAL_SEO_ONSITE,
  TECHNICAL_SEO_TRACKING,
  TECHNICAL_SEO_WHO,
  WEB_DEV_BUILD,
  WEB_DEV_DELIVERY,
  WEB_DEV_WHO,
} from "@/lib/constants";
import type { LucideIcon } from "lucide-react";
import {
  Search,
  Users,
  BarChart3,
  Settings,
  Zap,
  Mail,
  Code2,
  Accessibility,
} from "lucide-react";

export interface ServiceBlock {
  title: string;
  items: readonly string[];
  icon: LucideIcon;
}

export interface ServiceConfig {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  whoItFor: readonly string[];
  blocks: ServiceBlock[];
  pricing: {
    option1: { label: string; value: string };
    option2: { label: string; value: string };
    note?: string;
  };
}

export const SERVICES: ServiceConfig[] = [
  {
    slug: "technical-seo",
    title: "Technical SEO Package",
    description:
      "Full technical audits, on-site optimization, tracking setup, and monthly maintenance. Built for businesses that want to rank higher and convert better.",
    icon: Search,
    whoItFor: TECHNICAL_SEO_WHO,
    blocks: [
      { title: "Full Technical SEO Audit", items: TECHNICAL_SEO_AUDIT, icon: BarChart3 },
      { title: "On-Site Optimization", items: TECHNICAL_SEO_ONSITE, icon: Settings },
      { title: "Tracking Setup", items: TECHNICAL_SEO_TRACKING, icon: Zap },
      { title: "Monthly Technical Maintenance", items: TECHNICAL_SEO_MAINTENANCE, icon: BarChart3 },
    ],
    pricing: {
      option1: {
        label: "Audit only",
        value: "$750 – $1,500 one-time (depends on site size)",
      },
      option2: {
        label: "Ongoing retainer",
        value: "$1,000 – $2,500/month",
      },
      note: "Small local businesses: $1,000–$1,500/mo · Ecommerce/SaaS: $2,000–$3,000/mo",
    },
  },
  {
    slug: "crm-automation",
    title: "CRM Automation Package",
    description:
      "HubSpot setup, lead capture, automation workflows, and revenue dashboards. Recurring income for you, scalable growth for your clients.",
    icon: Users,
    whoItFor: CRM_WHO,
    blocks: [
      { title: "CRM Setup", items: CRM_SETUP, icon: Settings },
      { title: "Lead Capture System", items: CRM_LEAD_CAPTURE, icon: Mail },
      { title: "Automation Workflows", items: CRM_AUTOMATION, icon: Zap },
      { title: "Reporting Dashboard", items: CRM_REPORTING, icon: BarChart3 },
      { title: "Ongoing Optimization", items: CRM_OPTIMIZATION, icon: Settings },
    ],
    pricing: {
      option1: {
        label: "Setup fee",
        value: "$1,500 – $5,000 one-time (based on complexity)",
      },
      option2: {
        label: "Monthly retainer",
        value: "$800 – $2,500/month",
      },
      note: "Managing automations, campaigns, and reporting: typically $1,000+/month",
    },
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Modern, fast, SEO-ready websites built for conversion. From template-based builds to fully custom web applications—we deliver sites that perform.",
    icon: Code2,
    whoItFor: WEB_DEV_WHO,
    blocks: [
      {
        title: "What We Build",
        items: WEB_DEV_BUILD,
        icon: Code2,
      },
      {
        title: "Delivery Options",
        items: WEB_DEV_DELIVERY,
        icon: Settings,
      },
    ],
    pricing: {
      option1: {
        label: "Template-based",
        value: "From $3,000 – $8,000 (faster turnaround)",
      },
      option2: {
        label: "Custom website",
        value: "$8,000 – $25,000+ (based on scope)",
      },
      note: "Timeline: template builds in weeks, custom sites in 2–4 months depending on complexity.",
    },
  },
  {
    slug: "accessibility-audit",
    title: "Accessibility Audit & Fixes",
    description:
      "Ensure your website is usable by all visitors. We audit for WCAG compliance, fix issues, and help you reduce legal risk while expanding your audience.",
    icon: Accessibility,
    whoItFor: ACCESSIBILITY_WHO,
    blocks: [
      {
        title: "Accessibility Audit",
        items: ACCESSIBILITY_AUDIT,
        icon: BarChart3,
      },
      {
        title: "Remediation & Fixes",
        items: ACCESSIBILITY_FIXES,
        icon: Settings,
      },
    ],
    pricing: {
      option1: {
        label: "Audit only",
        value: "$500 – $1,500 (depends on site size)",
      },
      option2: {
        label: "Audit + remediation",
        value: "$1,500 – $5,000+ (based on scope of fixes)",
      },
      note: "Ongoing monitoring and maintenance available. Essential for ADA compliance and WCAG 2.1 AA.",
    },
  },
];

export interface PackageConfig {
  name: string;
  price: string;
  period: string;
  includes: readonly string[];
  featured?: boolean;
  premium?: boolean;
}

export const PACKAGES: PackageConfig[] = [
  {
    name: "Technical Growth",
    price: "$1,250",
    period: "/month",
    includes: [
      "Technical SEO",
      "Tracking",
      "Monthly reporting",
      "Performance monitoring",
      "Speed optimization",
    ],
  },
  {
    name: "Revenue Automation",
    price: "$1,500",
    period: "/month",
    featured: true,
    includes: [
      "CRM setup",
      "Pipeline automation",
      "Email sequences",
      "Lead capture optimization",
      "Revenue dashboards",
    ],
  },
  {
    name: "Growth Engine",
    price: "$2,500",
    period: "–$3,500/month",
    premium: true,
    includes: [
      "Technical SEO",
      "CRM automation",
      "Conversion optimization",
      "Landing pages",
      "Monthly strategy calls",
    ],
  },
] as const;

export function getServiceBySlug(slug: string): ServiceConfig | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
