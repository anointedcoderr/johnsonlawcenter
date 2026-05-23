import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Legal Disclaimer",
  description: "Legal disclaimer for the Johnson Law Center website.",
};

export default function LegalDisclaimerPage() {
  return (
    <>
      <Hero
        eyebrow="Legal"
        headline="Legal Disclaimer"
        subtext="Information about how to use the content of this website."
      />

      <section className="section">
        <div className="container-narrow max-w-3xl prose-legal">
          <h2 className="text-navy">General information only</h2>
          <span className="divider-rule" />
          <p>
            Information on this website is for general informational purposes
            only. It is not legal advice. Reading the content on this site
            does not create an attorney-client relationship.
          </p>

          <h2 className="text-navy mt-10">No attorney-client relationship</h2>
          <span className="divider-rule" />
          <p>
            Contacting Johnson Law Center through this website, by phone, by
            text, or by email does not by itself create an attorney-client
            relationship. A relationship is formed only through a signed
            engagement agreement after a conflict check.
          </p>

          <h2 className="text-navy mt-10">Past results</h2>
          <span className="divider-rule" />
          <p>
            Past results do not guarantee future outcomes. Each case is
            evaluated on its own facts. Examples or statements about past
            matters do not indicate that similar results will be achieved in
            other cases.
          </p>

          <h2 className="text-navy mt-10">Final review required</h2>
          <span className="divider-rule" />
          <p>
            This page is provided as a placeholder. Final review by the law
            firm is required before publication.
          </p>
        </div>
      </section>

      <CTASection variant="ivory" heading="Speak with our office" />
    </>
  );
}
