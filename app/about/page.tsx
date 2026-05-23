import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import AttorneyPreview from "@/components/AttorneyPreview";
import CTASection from "@/components/CTASection";
import TrustStats from "@/components/TrustStats";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Johnson Law Center | Gloucester, VA Injury Law Firm",
  description:
    "Johnson Law Center serves individuals and families across Gloucester, Mathews, Middlesex, and Virginia courts with experienced personal injury representation.",
};

const pillars = [
  {
    title: "Local Virginia presence",
    body:
      "Based in Gloucester and active across the Middle Peninsula and Virginia courts. We know the local roads, waterways, and how cases move in this region.",
  },
  {
    title: "Client first approach",
    body:
      "Each case is handled with care for the person behind the file. We listen, ask questions, and keep you involved in the path forward.",
  },
  {
    title: "Clear communication",
    body:
      "You hear from the attorney handling your case. No layers of intake staff between you and the answers you need.",
  },
  {
    title: "Free consultation",
    body:
      "There is no fee to talk through your situation. We tell you honestly whether we can help and what your options may look like.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        headline="Local Legal Representation Built on Experience and Trust"
        subtext="Johnson Law Center serves individuals and families across Gloucester, Mathews, Middlesex, and Virginia courts."
      />

      <section className="section">
        <div className="container-narrow grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 prose-legal">
            <p className="eyebrow">About the Firm</p>
            <h2 className="mt-2 text-navy">
              A firm built around accident and injury matters in Virginia
            </h2>
            <span className="divider-rule" />
            <p>
              Johnson Law Center focuses on helping people who have been
              injured understand their rights, deal with uncertainty, and
              pursue fair compensation. The firm has built a reputation in the
              region for direct guidance and steady representation.
            </p>
            <p>
              We represent injured clients in car accidents, truck accidents,
              motorcycle accidents, boating accidents, personal injury matters,
              and wrongful death claims. Each case is reviewed on its facts and
              handled with care.
            </p>
            <p>
              Whether you live in Gloucester, the surrounding counties, or
              elsewhere in Virginia, we are here to talk through what happened
              and help you understand your next step.
            </p>
          </div>
          <aside className="lg:col-span-5">
            <div className="card">
              <p className="eyebrow">Quick Facts</p>
              <h3 className="mt-2 text-navy">{site.name}</h3>
              <span className="divider-rule" />
              <ul className="space-y-3 text-sm text-ink">
                <li><strong className="text-navy">Location:</strong> {site.address.city}, {site.address.region}</li>
                <li><strong className="text-navy">Address:</strong> {site.address.street}, {site.address.city}, {site.address.region} {site.address.postal}</li>
                <li><strong className="text-navy">Office:</strong> <a className="hover:text-gold-dark" href={site.phones.office.tel}>{site.phones.office.display}</a></li>
                <li><strong className="text-navy">Text:</strong> <a className="hover:text-gold-dark" href={site.phones.text.sms}>{site.phones.text.display}</a></li>
                <li><strong className="text-navy">Email:</strong> <a className="hover:text-gold-dark" href={`mailto:${site.email}`}>{site.email}</a></li>
                <li><strong className="text-navy">Consultations:</strong> Always free</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <TrustStats variant="dark" />

      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow">What Sets Us Apart</p>
          <h2 className="mt-2 text-navy">How we work</h2>
          <span className="divider-rule" />
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {pillars.map((p) => (
              <article key={p.title} className="card">
                <h3 className="font-serif text-xl text-navy">{p.title}</h3>
                <span className="divider-rule" />
                <p className="text-ink text-[0.95rem] leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AttorneyPreview />

      <section className="section bg-cream border-y border-border">
        <div className="container-narrow text-center">
          <p className="eyebrow">Speak With Our Office</p>
          <h2 className="mt-2 text-navy">Have a question about your situation?</h2>
          <p className="mt-3 max-w-2xl mx-auto text-ink leading-relaxed">
            Call or text our office. Consultations are free and confidential.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn btn-primary">
              Request a Free Consultation
            </Link>
            <a href={site.phones.office.tel} className="btn btn-secondary">
              Call {site.phones.office.display}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
