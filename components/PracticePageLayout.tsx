import Hero from "./Hero";
import FAQ from "./FAQ";
import CTASection from "./CTASection";
import JsonLd from "./JsonLd";
import type { PracticeArea } from "@/data/practiceAreas";
import type { FAQ as FAQItem } from "@/data/faqs";

type Props = {
  area: PracticeArea;
  faqs: FAQItem[];
};

export default function PracticePageLayout({ area, faqs }: Props) {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Hero
        eyebrow={area.hero.eyebrow}
        headline={area.hero.headline}
        subtext={area.hero.subtext}
      />

      <section className="section">
        <div className="container-narrow grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            {area.sections.map((section) => (
              <article key={section.heading}>
                <h2 className="text-navy">{section.heading}</h2>
                <span className="divider-rule" />
                <p className="prose-legal text-ink">{section.body}</p>
              </article>
            ))}

            {area.bullets && (
              <article>
                <h2 className="text-navy">{area.bullets.heading}</h2>
                <span className="divider-rule" />
                <ul className="mt-2 grid sm:grid-cols-2 gap-2 text-ink">
                  {area.bullets.items.map((item) => (
                    <li
                      key={item}
                      className="pl-4 relative leading-relaxed"
                    >
                      <span
                        aria-hidden
                        className="absolute left-0 top-3 w-1.5 h-1.5 rounded-full bg-gold"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )}
          </div>

          <aside className="lg:col-span-1">
            <div className="card sticky top-28">
              <p className="eyebrow">Free Consultation</p>
              <h3 className="mt-2 text-navy">Talk to a lawyer</h3>
              <span className="divider-rule" />
              <p className="text-[0.95rem] text-ink leading-relaxed">
                Tell us what happened. We will review the facts, explain your
                options, and help you understand what may be available.
              </p>
              <a href="/contact" className="btn btn-primary w-full mt-4">
                Request Consultation
              </a>
              <a href="tel:18046941111" className="btn btn-secondary w-full mt-3">
                Call 804-694-1111
              </a>
              <p className="mt-4 text-xs text-muted leading-relaxed">
                Past results do not guarantee future outcomes. Each case is
                evaluated on its own facts.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <FAQ items={faqs} />
      <CTASection />
      <JsonLd data={faqLd} id={`faq-ld-${area.slug}`} />
    </>
  );
}
