import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Amador Web Solutions",
  description:
    "How Amador Web Solutions collects, uses, discloses, and protects your information. Data practices for our website and services.",
};

const LAST_UPDATED = "December 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-section-light">
      <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <header className="text-center">
          <h1 className="font-roboto-slab text-3xl font-bold tracking-tight text-aws-navy sm:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        <p className="mt-10 text-lg leading-relaxed text-foreground">
          Amador Web Solutions is a web development and technical services
          agency. This Privacy Policy outlines how we collect, use, disclose,
          and protect your information when you use our website or engage our
          services. By using our website or services, you agree to the terms of
          this policy.
        </p>

        <div className="mt-14 space-y-14">
          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              1. Information We Collect
            </h2>
            <p className="mt-3 text-foreground">
              We collect personal and non-personal information as described
              below.
            </p>

            <h3 className="mt-5 font-semibold tracking-tight text-aws-navy">
              1.1 Information You Provide to Us
            </h3>
            <ul className="mt-2 list-inside list-disc space-y-1 text-foreground">
              <li>
                <strong>Contact information:</strong> Name, email address, phone
                number, business name
              </li>
              <li>
                <strong>Project information:</strong> Website details, technical
                requirements, and other information you share about your
                project
              </li>
              <li>
                <strong>Platform access:</strong> With your permission, we may
                access or receive data from tools you use, including but not
                limited to: Google Analytics, Google Tag Manager, HubSpot,
                Facebook Pixel / Meta Business tools, and CRM platforms such as
                Go High Level
              </li>
              <li>
                <strong>Payment information:</strong> Payment details are
                handled securely through third-party processors (e.g., Stripe).
                We do not store your full payment information on our systems.
              </li>
            </ul>

            <h3 className="mt-5 font-semibold tracking-tight text-aws-navy">
              1.2 Automatically Collected Information
            </h3>
            <p className="mt-2 text-foreground">
              When you visit our website or use our services, we may
              automatically collect:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-foreground">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited</li>
              <li>Referring website</li>
              <li>Time spent on pages or media</li>
            </ul>
            <p className="mt-2 text-foreground">
              This information is collected through standard analytics and
              technical tools.
            </p>

            <h3 className="mt-5 font-semibold tracking-tight text-aws-navy">
              1.3 Cookies and Tracking Technologies
            </h3>
            <p className="mt-2 text-foreground">
              We use cookies, pixels, and similar tracking technologies (e.g.,
              Google Analytics, Google Tag Manager, HubSpot) to analyze behavior,
              improve site functionality, and measure conversion and marketing
              performance. You can manage cookie preferences through your
              browser settings.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              2. How We Use Your Information
            </h2>
            <p className="mt-3 text-foreground">
              We use the information we collect to:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-foreground">
              <li>
                Provide technical SEO, accessibility, web development, and
                platform administration services
              </li>
              <li>Communicate with you about projects and inquiries</li>
              <li>Improve our services and user experience</li>
              <li>Troubleshoot technical issues</li>
              <li>Maintain security and prevent fraud</li>
              <li>Track marketing and conversion performance</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              3. How We Share Your Information
            </h2>
            <p className="mt-3 text-foreground">
              We do not sell your personal information. We may share your
              information with trusted third parties as described below.
            </p>

            <h3 className="mt-5 font-semibold tracking-tight text-aws-navy">
              3.1 Service Providers
            </h3>
            <p className="mt-2 text-foreground">
              We may share information with service providers who assist in
              operating our business and delivering services, including:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-foreground">
              <li>Google Analytics and Google Tag Manager</li>
              <li>Hosting platforms (e.g., Wix, Go High Level, Vercel)</li>
              <li>Email and marketing tools (e.g., Mailchimp, ConvertKit)</li>
              <li>Payment processors (e.g., Stripe)</li>
            </ul>
            <p className="mt-2 text-foreground">
              These providers have their own privacy policies and use your
              information in accordance with those policies and our
              instructions.
            </p>

            <h3 className="mt-5 font-semibold tracking-tight text-aws-navy">
              3.2 Legal Requirements
            </h3>
            <p className="mt-2 text-foreground">
              We may disclose your information if required by law, court order,
              or government request, or when we believe disclosure is necessary
              to protect our rights, your safety, or the safety of others.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              4. Data Security
            </h2>
            <p className="mt-3 text-foreground">
              We implement reasonable security measures to protect your
              information. However, no method of transmission over the internet
              or electronic storage is completely secure. We encourage you to
              use secure access methods (e.g., strong passwords, secure
              connections) when sharing account access or sensitive information
              with us.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              5. Data Retention
            </h2>
            <p className="mt-3 text-foreground">
              We retain your information only for as long as necessary to
              fulfill our projects and service agreements and to maintain
              records for legal or regulatory obligations. You may request
              deletion of your personal data, subject to applicable law and our
              need to retain certain information for legal or operational
              purposes.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              6. Your Rights
            </h2>
            <p className="mt-3 text-foreground">
              Depending on your location, you may have the right to:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-foreground">
              <li>Access the personal data we hold about you</li>
              <li>Correct or update your information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for tracking or analytics cookies</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p className="mt-2 text-foreground">
              To exercise these rights or ask questions about your data, please
              contact us using the information at the bottom of this policy.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              7. Third-Party Websites
            </h2>
            <p className="mt-3 text-foreground">
              Our website may contain links to external websites. We are not
              responsible for the privacy practices of those sites. We encourage
              you to read their privacy policies before providing any personal
              information.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              8. International Data Transfers
            </h2>
            <p className="mt-3 text-foreground">
              If you are located outside the United States, your information may
              be transferred to and processed in the United States or other
              countries where our service providers operate. By using our
              website or services, you consent to such transfer and processing.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              9. Children&apos;s Privacy
            </h2>
            <p className="mt-3 text-foreground">
              We do not knowingly collect or process personal information from
              children under 13. If you believe a child has provided us with
              personal information, please contact us and we will take steps to
              delete such information.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              10. Changes to This Policy
            </h2>
            <p className="mt-3 text-foreground">
              We may update this Privacy Policy from time to time. We will post
              the revised policy on this page and update the &quot;Last
              updated&quot; date. Your continued use of our website or services
              after changes constitutes acceptance of the updated policy. We
              encourage you to review this page periodically.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              11. Contact Us
            </h2>
            <p className="mt-3 text-foreground">
              For questions about this Privacy Policy or to submit a request
              regarding your personal data, please contact:
            </p>
            <p className="mt-2 text-foreground">
              <strong>Amador Web Solutions</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:support@amadorwebsolutions.com"
                className="text-aws-navy underline transition-[text-decoration] hover:no-underline"
              >
                support@amadorwebsolutions.com
              </a>
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
