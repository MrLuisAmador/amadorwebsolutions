import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Services | Amador Web Solutions",
  description:
    "Terms of Services governing the use of Amador Web Solutions website and services. Services provided, client responsibilities, payments, and more.",
};

const LAST_UPDATED = "December 2025";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-section-light">
      <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <header className="text-center">
          <h1 className="font-roboto-slab text-3xl font-bold tracking-tight text-aws-navy sm:text-4xl lg:text-5xl">
            Terms of Services
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        <p className="mt-10 text-lg leading-relaxed text-foreground">
          Welcome to Amador Web Solutions. These Terms of Services (&quot;Terms&quot;)
          govern your use of our website and the services we provide. By engaging
          our services or using this site, you agree to these Terms. Please read
          them carefully.
        </p>

        <div className="mt-14 space-y-14">
          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              1. Services Provided
            </h2>
            <p className="mt-3 text-foreground">
              Amador Web Solutions offers the following services, which may be
              agreed upon in a separate statement of work or proposal:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-foreground">
              <li>Technical SEO</li>
              <li>Accessibility services (audits and remediation)</li>
              <li>Website Development (Web, UI, UX)</li>
              <li>Platform Administration (API integrations, CRM, analytics)</li>
              <li>Website maintenance and support</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              2. Client Responsibilities
            </h2>
            <p className="mt-3 text-foreground">
              You agree to provide timely and accurate project information,
              content, and feedback. For projects requiring access to your
              systems, you will grant necessary access (e.g., Google Analytics,
              Google Tag Manager, hosting, or CMS) as reasonably requested. You
              are responsible for maintaining the security of your accounts and
              credentials. You represent that you have the right to provide any
              materials, content, or assets you supply and that our use of them
              in performing the services does not infringe any third-party
              rights.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              3. Payments
            </h2>
            <p className="mt-3 text-foreground">
              Payments are processed via Stripe, GoCardless, or other agreed
              methods. A deposit of 50% of the project fee is typically required
              before work begins, unless otherwise agreed in writing. Failure to
              pay invoices when due may result in suspension of work and, after
              notice, termination of the engagement. You remain responsible for
              all amounts due for work performed up to the date of termination.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              4. Confidentiality
            </h2>
            <p className="mt-3 text-foreground">
              We protect your confidential information and project details. We
              will not disclose your business information, strategies, or
              deliverables to third parties except as necessary to perform the
              services or as required by law. Confidentiality obligations
              survive termination of our engagement.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              5. Project Timelines
            </h2>
            <p className="mt-3 text-foreground">
              Any timelines or deadlines provided are estimates and are not
              guaranteed. Delays may occur due to factors including but not
              limited to: late provision of content or materials, delayed
              approvals, scope changes, or dependency on third-party services.
              We will communicate proactively if timelines are at risk.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              6. Work Product and Property
            </h2>
            <h3 className="mt-4 font-semibold tracking-tight text-aws-navy">6.1 Client Ownership</h3>
            <p className="mt-2 text-foreground">
              Upon full payment, you own the final work product specifically
              created for your project (e.g., custom designs, copy, and
              project-specific code delivered as part of the agreed scope).
            </p>
            <h3 className="mt-4 font-semibold tracking-tight text-aws-navy">6.2 Developer Ownership</h3>
            <p className="mt-2 text-foreground">
              Amador Web Solutions retains all rights in its tools, methodologies,
              proprietary code, templates, and reusable components. We may use
              such materials in other projects. Pre-existing or open-source
              components used in your project remain under their respective
              licenses.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              7. Third-Party Services
            </h2>
            <p className="mt-3 text-foreground">
              Our work may integrate with third-party services (e.g., Google
              Analytics, CRM platforms, payment processors). We are not
              responsible for changes to, discontinuation of, or limitations
              imposed by those services. You are responsible for complying with
              their terms and for any fees they charge.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              8. Website Hosting &amp; Platforms
            </h2>
            <p className="mt-3 text-foreground">
              Where agreed, Amador Web Solutions may provide or arrange hosting
              for your website. Hosting terms, uptime, and support are as set
              forth in the applicable agreement. If you use your own hosting or
              platform, you are responsible for its configuration, security, and
              compliance with our technical requirements.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              9. Design Revisions
            </h2>
            <p className="mt-3 text-foreground">
              The number of design or copy revision rounds is as specified in
              your proposal or statement of work. Additional revisions may be
              available for an additional fee. Approval of designs or content
              constitutes acceptance for the purposes of moving the project
              forward unless otherwise agreed in writing.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              10. Warranty
            </h2>
            <p className="mt-3 text-foreground">
              We warrant that the services will be performed in a professional
              manner consistent with industry standards. We do not warrant
              uninterrupted or error-free operation of third-party hosting,
              platforms, or software. We are not responsible for downtime,
              data loss, or issues arising from factors outside our reasonable
              control, including third-party services, your equipment, or your
              use of the deliverables.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              11. Confidentiality (Mutual)
            </h2>
            <p className="mt-3 text-foreground">
              Both parties agree to keep confidential any non-public information
              disclosed during the engagement. This includes, but is not limited
              to: login credentials, business models, strategies, client data,
              and project details. Such information will be used only for the
              purpose of performing the services and will not be disclosed to
              third parties except as necessary or as required by law.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              12. Limitation of Liability
            </h2>
            <p className="mt-3 text-foreground">
              To the maximum extent permitted by law, Amador Web Solutions&apos;
              total liability for any claims arising out of or related to these
              Terms or the services shall not exceed the amount you paid for the
              services giving rise to the claim in the twelve (12) months
              preceding the claim. We are not liable for indirect, incidental,
              special, consequential, or punitive damages, including loss of
              profits, data, or business opportunity.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              13. Termination
            </h2>
            <p className="mt-3 text-foreground">
              Either party may terminate the engagement in accordance with the
              terms of the applicable statement of work or proposal. We may
              suspend or terminate services for non-payment, material breach, or
              if continuing would violate law or our policies. Upon termination,
              you will pay for all work performed and for any non-cancellable
              commitments we have made on your behalf. Sections that by their
              nature should survive (e.g., confidentiality, limitation of
              liability, ownership) will survive termination.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              14. Changes to Terms
            </h2>
            <p className="mt-3 text-foreground">
              Amador Web Solutions may update these Terms from time to time. We
              will post the revised Terms on this page and update the &quot;Last
              updated&quot; date. Your continued use of our services or website
              after changes constitutes acceptance of the revised Terms. We
              encourage you to review this page periodically.
            </p>
          </section>

          <section className="rounded-2xl border border-border/60 bg-white p-8 shadow-sm">
            <h2 className="font-roboto-slab text-lg font-bold tracking-tight text-aws-navy">
              15. Contact Information
            </h2>
            <p className="mt-3 text-foreground">
              For questions about these Terms or our services, please contact:
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
