import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import ReviewCard from "@/components/ReviewCard";
import JsonLd from "@/components/JsonLd";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "William E. Johnson, Esq. | Johnson Law Center",
  description:
    "Experienced personal injury representation in Gloucester, VA. William E. Johnson, Esq. represents clients across Gloucester, Mathews, Middlesex, and Virginia courts.",
};

const focus = [
  "Personal injury matters",
  "Car and tractor trailer accidents",
  "Motorcycle accidents",
  "Boating accidents",
  "Wrongful death",
  "Insurance negotiation and litigation when needed",
];

export default function AttorneyPage() {
  const attorneyLd = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: site.attorney.name,
    worksFor: { "@type": "LegalService", name: site.name },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
    },
    telephone: site.phones.office.display,
    email: site.email,
    url: `${site.url}/attorney/${site.attorney.slug}`,
  };

  return (
    <>
      <Hero
        eyebrow="Attorney"
        headline={site.attorney.name}
        subtext="Experienced legal representation for injured clients across Gloucester, Mathews, Middlesex, and Virginia courts."
      />

      <section className="section">
        <div className="container-narrow grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 prose-legal">
            <p className="eyebrow">Professional Biography</p>
            <h2 className="mt-2 text-navy">Forty plus years of experience focused on injury matters</h2>
            <span className="divider-rule" />
            <p>
              {site.attorney.name} has represented injured clients and families
              for more than four decades, with focus on personal injury and
              accident matters across the Middle Peninsula and Virginia courts.
              The practice is built on direct communication, local presence,
              and steady representation through every stage of a case.
            </p>
            <p>
              Clients value clear answers and honest guidance about what to
              expect. Whether a case settles through negotiation or requires a
              firmer step, the goal is the same. Pursue a fair outcome and
              protect the client&apos;s interests.
            </p>
            <p>
              For families dealing with the loss of a loved one, the firm
              approaches each matter with respect, care, and clear
              communication. We help families seek accountability and
              understand their legal options.
            </p>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="card">
              <p className="eyebrow">Practice Focus</p>
              <h3 className="mt-2 text-navy">Areas of representation</h3>
              <span className="divider-rule" />
              <ul className="mt-2 space-y-2 text-ink text-[0.95rem]">
                {focus.map((f) => (
                  <li key={f} className="pl-4 relative leading-relaxed">
                    <span aria-hidden className="absolute left-0 top-3 w-1.5 h-1.5 rounded-full bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <p className="eyebrow">Credentials and Admissions</p>
              <h3 className="mt-2 text-navy">For confirmation</h3>
              <span className="divider-rule" />
              <p className="text-[0.95rem] text-ink leading-relaxed">
                Content to be confirmed before launch.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-cream border-y border-border">
        <div className="container-narrow grid md:grid-cols-2 gap-10">
          <div>
            <p className="eyebrow">Client Communication</p>
            <h2 className="mt-2 text-navy">How {site.attorney.name} works with clients</h2>
            <span className="divider-rule" />
            <p className="prose-legal text-ink">
              The first step is to listen. Each case begins with a free
              consultation where the attorney reviews the facts and explains
              what options may be available. From there, clients hear from the
              attorney handling the case, not from a layer of intake staff.
            </p>
          </div>
          <div>
            <p className="eyebrow">Local Court Representation</p>
            <h2 className="mt-2 text-navy">Across Virginia courts</h2>
            <span className="divider-rule" />
            <p className="prose-legal text-ink">
              The firm represents clients in matters tied to Gloucester,
              Mathews, Middlesex, and other Virginia courts. Knowing how cases
              move in this region is part of providing steady representation.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow">Client Feedback</p>
          <h2 className="mt-2 text-navy">Review highlights</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <ReviewCard key={r.author} review={r} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Request a free consultation"
        body="Tell us what happened. We will review the facts and help you understand your next step."
      />

      <JsonLd data={attorneyLd} id="attorney-ld" />
    </>
  );
}
