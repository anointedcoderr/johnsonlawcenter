import type { Metadata } from "next";
import { Phone, MessageSquare, Mail, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import ConsultationForm from "@/components/ConsultationForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Free Consultation | Johnson Law Center Gloucester, VA",
  description:
    "Request a free consultation with Johnson Law Center. Call, text, or email our office in Gloucester, VA. Confidential and no obligation.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        headline="Request a Free Consultation"
        subtext="Tell us what happened. Johnson Law Center will review the facts, explain your options, and help you understand your next step."
      />

      <section className="section">
        <div className="container-narrow grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <ConsultationForm />
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="card">
              <p className="eyebrow">Office</p>
              <h2 className="mt-2 text-navy">{site.name}</h2>
              <span className="divider-rule" />
              <ul className="space-y-3 text-[0.95rem] text-ink">
                <li className="flex items-start gap-3">
                  <Phone size={18} aria-hidden className="text-gold mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">Office</p>
                    <a className="hover:text-gold-dark font-medium text-navy" href={site.phones.office.tel}>
                      {site.phones.office.display}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageSquare size={18} aria-hidden className="text-gold mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">Text or cell</p>
                    <a className="hover:text-gold-dark font-medium text-navy" href={site.phones.text.sms}>
                      {site.phones.text.display}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} aria-hidden className="text-gold mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">Email</p>
                    <a className="hover:text-gold-dark font-medium text-navy" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} aria-hidden className="text-gold mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">Address</p>
                    <address className="not-italic font-medium text-navy">
                      {site.address.street}
                      <br />
                      {site.address.city}, {site.address.region} {site.address.postal}
                    </address>
                  </div>
                </li>
              </ul>
            </div>

            <div
              role="img"
              aria-label="Map placeholder showing Gloucester, Virginia office location"
              className="aspect-[4/3] rounded-md border border-border overflow-hidden relative bg-cream"
            >
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(11,27,43,0.08), rgba(184,134,43,0.08)), repeating-linear-gradient(45deg, transparent 0 14px, rgba(102,112,133,0.10) 14px 15px)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-sm text-muted">
                Map placeholder
              </div>
            </div>

            <p className="text-xs text-muted leading-relaxed">
              Your information is confidential. Submitting this form or
              contacting the firm does not create an attorney-client
              relationship.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
