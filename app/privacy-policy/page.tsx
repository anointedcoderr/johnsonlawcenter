import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Johnson Law Center.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero
        eyebrow="Legal"
        headline="Privacy Policy"
        subtext="How Johnson Law Center handles information collected through this website."
      />

      <section className="section">
        <div className="container-narrow max-w-3xl prose-legal">
          <p className="eyebrow">Last Updated</p>
          <p>This policy is provided as a placeholder and is subject to final legal review before publication.</p>

          <h2 className="text-navy mt-10">Information collected</h2>
          <span className="divider-rule" />
          <p>
            Johnson Law Center may collect information you choose to share
            through contact forms, email, phone, or text. This typically
            includes name, contact details, and a brief description of your
            legal matter.
          </p>

          <h2 className="text-navy mt-10">Contact form data</h2>
          <span className="divider-rule" />
          <p>
            Information submitted through the consultation form is used to
            respond to your request and discuss your legal matter. It is not
            sold or shared with unrelated third parties.
          </p>

          <h2 className="text-navy mt-10">Analytics and cookies</h2>
          <span className="divider-rule" />
          <p>
            This website may use analytics tools and cookies to understand how
            visitors use the site. Analytics data is reviewed in aggregate and
            is not used to identify individual visitors for marketing
            purposes.
          </p>

          <h2 className="text-navy mt-10">How information is used</h2>
          <span className="divider-rule" />
          <p>
            Information collected is used to respond to inquiries, evaluate
            potential cases, communicate with current and prospective clients,
            and operate the website. We take reasonable steps to protect the
            information you share with us.
          </p>

          <h2 className="text-navy mt-10">Contact</h2>
          <span className="divider-rule" />
          <p>
            Questions about this policy may be directed to {site.name} at{" "}
            <a className="hover:text-gold-dark" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            {" "}or by phone at{" "}
            <a className="hover:text-gold-dark" href={site.phones.office.tel}>
              {site.phones.office.display}
            </a>
            .
          </p>

          <p className="text-sm text-muted mt-10">
            Note: This privacy policy is a placeholder. Final review by counsel
            is required before launch.
          </p>
        </div>
      </section>

      <CTASection variant="ivory" heading="Talk to our office" />
    </>
  );
}
