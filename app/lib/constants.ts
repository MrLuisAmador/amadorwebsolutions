import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

// Site
export const SITE_URL = "https://www.amadorwebsolutions.com/";
export const SITE_TITLE = "Amador Web Solutions";
export const SITE_DESCRIPTION =
  "Your website should be your best sales rep. We build strategy-driven websites that convert visitors into leads.";

// Company contact
export const PHONE = "(813) 702-3172";
export const EMAIL = "luis@amadorwebsolutions.com";

// Google Business Profile (get URL from business.google.com → Share)
export const GOOGLE_BUSINESS_PROFILE_URL =
  "https://g.page/amadorwebsolutions";

// Navigation
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const FOOTER_SERVICES = [
  { href: "/services/technical-seo", label: "Technical SEO" },
  { href: "/services/crm-automation", label: "CRM Automation" },
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/accessibility-audit", label: "Technical Accessibility" },
] as const;

export const LEGAL_LINKS = [
  { href: "/terms", label: "Terms of Services" },
  { href: "/privacy", label: "Privacy Policy" },
] as const;

export const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/amadorwebsolutions",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/amadorwebsolutions",
    icon: Instagram,
    label: "Instagram",
  },
  { href: "https://x.com/amadorWS", icon: Twitter, label: "X" },
  {
    href: "https://www.linkedin.com/company/amador-web-solutions",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.youtube.com/@amadorwebsolution",
    icon: Youtube,
    label: "YouTube",
  },
] as const;

// UI
export const MOBILE_MENU_ID = "header-mobile-nav";

// Form styles
export const INPUT_CLASS =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-aws-navy focus:outline-none focus:ring-2 focus:ring-aws-navy/20 transition-colors";

export const TEXTAREA_CLASS = `${INPUT_CLASS} min-h-[100px] resize-y`;

// Contact form options
export const HELP_OPTIONS = [
  "Technical SEO",
  "Technical Accessibility",
  "Website Development",
  "Platform Administration",
  "Website Maintenance",
  "Something else",
] as const;

export const BUDGET_OPTIONS = [
  { value: "", label: "Select budget range" },
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 – $15,000" },
  { value: "15k-30k", label: "$15,000 – $30,000" },
  { value: "30k-plus", label: "$30,000+" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const START_OPTIONS = [
  { value: "", label: "Select timeline" },
  { value: "asap", label: "ASAP" },
  { value: "1-month", label: "Within 1 month" },
  { value: "3-months", label: "Within 3 months" },
  { value: "exploring", label: "Just exploring" },
] as const;

// Contact page
export const HOW_IT_WORKS = [
  "You submit the form",
  "I review your request",
  "You get a proposal",
  "If it's a fit, we start",
] as const;

// Legal pages
export const PRIVACY_LAST_UPDATED = "December 2026";
export const TERMS_LAST_UPDATED = "December 2025";

// Home page – strategy features
export const STRATEGY_FEATURES = [
  {
    image: "/images/tmpkzoqwnr6.webp",
    title: "Technical Insight",
    description:
      "We audit your site's code, structure, and performance to uncover SEO, accessibility, and conversion issues that directly impact growth.",
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

// Home page – bullets
export const CONVERSION_BULLETS = [
  "Technical SEO & Performance – Optimize your site for search engines and fast, smooth experiences",
  "Accessible & Engaging Design – Build trust and usability for all users",
  "CRM-Integrated Lead Capture – Automatically track, nurture, and convert leads",
];

export const SCALE_BULLETS = [
  "Integrated Tracking & Analytics – Capture every lead and conversion in real time",
  "Technical Optimization – Clean, maintainable code for speed, reliability, and SEO",
  "CRM-Connected Growth – Automate follow-ups and scale lead management effortlessly",
];

export const GROWTH_BULLETS = [
  "Advanced Analytics – Track website performance, engagement, and lead conversions effortlessly",
  "Seamless Integrations – Connect your website with tracking systems, CRM platforms, and other tools for a unified experience",
  "Automated Lead Capture & Follow-Up – Streamline processes and ensure no opportunity is missed.",
];

// Home page – testimonials
export const TESTIMONIALS = [
  {
    quote:
      "If you're looking for someone who knows what they're doing and actually listens? Yeah… Amador Web Solutions is that agency.. Highly recommend — he leveled up my whole website & funnel.",
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
      "This software has been a game-changer for our operations. The automated workflows and real-time data tracking have saved us hours of manual work and streamlined our processes. Since using it, we've grown our revenue by 45% in just three months.",
    name: "Adam Asbury",
    title: "President of Love Pop Miami",
  },
];

// Home page – FAQ
export const FAQ_ITEMS = [
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
    a: "Absolutely. We perform technical SEO audits and implement improvements to your site's code, metadata, and structure to improve visibility and attract qualified traffic.",
  },
  {
    q: "What is an accessibility audit, and why is it important?",
    a: "An accessibility audit ensures your website is usable by all visitors, including those with disabilities. It's essential for compliance, improving user experience, and expanding your potential audience.",
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

// Home page – images
export const HERO_IMAGE = "/images/tmpz577vvgf.webp";
export const LEADS_IMAGE = "/images/tmp71kqxegx.webp";
export const SCALE_IMAGE = "/images/tmpaaghhrf1.webp";
export const GROWTH_IMAGE = "/images/tmpq8k9lgha.webp";

// Services – Technical SEO
export const TECHNICAL_SEO_WHO = [
  "Businesses already getting traffic but not converting",
  "Businesses with WordPress, Shopify, Wix, Next.js, etc.",
  "Local businesses in Wesley Chapel / Tampa",
  "Agencies that need a technical partner",
] as const;

export const TECHNICAL_SEO_AUDIT = [
  "Core Web Vitals",
  "Page speed (mobile + desktop)",
  "Crawl errors",
  "Indexing issues",
  "Sitemap & robots.txt review",
  "Redirect audit",
  "Canonical issues",
  "Structured data review",
  "Internal linking review",
] as const;

export const TECHNICAL_SEO_ONSITE = [
  "Title tag optimization",
  "Meta descriptions",
  "Header structure cleanup",
  "Image optimization",
  "Schema implementation",
  "XML sitemap optimization",
] as const;

export const TECHNICAL_SEO_TRACKING = [
  "Google Search Console",
  "GA4",
  "Conversion tracking",
  "Event tracking",
] as const;

export const TECHNICAL_SEO_MAINTENANCE = [
  "Fix new crawl errors",
  "Monitor indexing",
  "Monitor page speed",
  "Schema updates",
  "Reporting dashboard",
] as const;

// Services – CRM
export const CRM_WHO = [
  "Service businesses",
  "Realtors",
  "Contractors",
  "Medical clinics",
  "Agencies",
  "Local businesses in Wesley Chapel / Tampa",
] as const;

export const CRM_SETUP = [
  "HubSpot pipeline creation",
  "Deal stages",
  "Contact properties",
  "Custom fields",
  "Tags & segmentation",
] as const;

export const CRM_LEAD_CAPTURE = [
  "Website forms integration",
  "Chat widgets",
  "Landing pages",
  "Call tracking",
] as const;

export const CRM_AUTOMATION = [
  "Lead assignment automation",
  "Email follow-up sequences",
  "Missed call text back",
  "Appointment reminders",
  "Sales task automation",
  "Deal stage triggers",
] as const;

export const CRM_REPORTING = [
  "Revenue dashboard",
  "Pipeline tracking",
  "Lead source tracking",
  "Conversion rate tracking",
] as const;

export const CRM_OPTIMIZATION = [
  "Workflow improvements",
  "A/B testing",
  "Sales process improvements",
  "Funnel optimization",
] as const;

// Services – Web Development
export const WEB_DEV_WHO = [
  "Businesses needing a new website or redesign",
  "Startups and small businesses",
  "Local businesses in Wesley Chapel / Tampa",
  "Companies wanting a modern, fast, SEO-ready site",
] as const;

export const WEB_DEV_BUILD = [
  "Custom website design and development",
  "Responsive, mobile-first layouts",
  "SEO-ready code and structure",
  "Fast performance (Core Web Vitals)",
  "Accessibility built in",
  "CMS integration (WordPress, Payload, etc.)",
] as const;

export const WEB_DEV_DELIVERY = [
  "Template-based builds for cost efficiency",
  "Fully custom websites and web apps",
  "Ongoing maintenance and support",
  "Design-to-code implementation",
] as const;

// Services – Accessibility Audit & Fixes
export const ACCESSIBILITY_WHO = [
  "Businesses concerned about compliance (ADA, WCAG)",
  "Government and public sector",
  "Healthcare and education",
  "E-commerce and SaaS companies",
  "Any business wanting to reach more users",
] as const;

export const ACCESSIBILITY_AUDIT = [
  "WCAG 2.1 AA compliance review",
  "Screen reader compatibility",
  "Keyboard navigation",
  "Color contrast and focus indicators",
  "Form labels and error handling",
  "Semantic HTML and ARIA",
] as const;

export const ACCESSIBILITY_FIXES = [
  "Remediation of accessibility issues",
  "Code fixes and component updates",
  "Documentation and training",
  "Re-audit to verify compliance",
] as const;
