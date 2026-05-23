import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceAreaBlock from "@/components/ServiceAreaBlock";
import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/SectionHeader";
import { serviceAreas } from "@/data/serviceAreas";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Service Areas | Gloucester, Mathews, Middlesex, Virginia",
  description:
    "Johnson Law Center serves Gloucester, Mathews, Middlesex, and other Virginia courts with experienced personal injury representation.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <Hero
        eyebrow="Service Areas"
        headline="Serving Gloucester, Mathews, Middlesex, and Virginia Courts"
        subtext="Local presence across the Middle Peninsula and active representation in courts throughout Virginia."
      />

      <section className="section">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="Where We Practice"
            heading="Local representation across the region"
          />
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {serviceAreas.map((area) => (
              <ServiceAreaBlock key={area.name} area={area} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream border-y border-border">
        <div className="container-narrow grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="eyebrow">Legal Help in Your Area</p>
            <h2 className="mt-2 text-navy">Legal help for accident and injury matters</h2>
            <span className="divider-rule" />
            <p className="prose-legal text-ink">
              Johnson Law Center has decades of experience handling vehicle
              accidents, motorcycle and boating incidents, and personal injury
              matters tied to the Middle Peninsula and surrounding courts. We
              represent clients across the region with the same focus and care.
            </p>
          </div>
          <div className="card">
            <p className="eyebrow">Office</p>
            <h3 className="mt-2 text-navy">{site.name}</h3>
            <span className="divider-rule" />
            <address className="not-italic text-[0.95rem] text-ink leading-relaxed">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postal}
            </address>
            <ul className="mt-4 space-y-1 text-sm text-ink">
              <li>Office: <a className="hover:text-gold-dark" href={site.phones.office.tel}>{site.phones.office.display}</a></li>
              <li>Text: <a className="hover:text-gold-dark" href={site.phones.text.sms}>{site.phones.text.display}</a></li>
            </ul>
            <div
              role="img"
              aria-label="Map placeholder for Gloucester, Virginia office"
              className="mt-5 aspect-[4/3] rounded-md border border-border overflow-hidden relative bg-ivory"
            >
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(11,27,43,0.08), rgba(184,134,43,0.08)), repeating-linear-gradient(45deg, transparent 0 12px, rgba(102,112,133,0.10) 12px 13px)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-muted">Map placeholder · Gloucester, VA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
