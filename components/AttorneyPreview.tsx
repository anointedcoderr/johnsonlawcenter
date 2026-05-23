import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";

export default function AttorneyPreview() {
  return (
    <section className="section bg-ivory">
      <div className="container-narrow grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="md:col-span-5">
          <div
            className="aspect-[4/5] rounded-md border border-border overflow-hidden relative bg-navy"
            aria-hidden
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(184,134,43,0.18) 0%, rgba(11,27,43,0) 60%), radial-gradient(ellipse at 60% 40%, rgba(255,253,248,0.08), transparent 60%)",
              }}
            />
            <div className="absolute bottom-0 inset-x-0 p-6 text-cream">
              <p className="eyebrow text-gold">Attorney</p>
              <p className="mt-2 font-serif text-2xl text-cream">
                {site.attorney.name}
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <p className="eyebrow">Meet the Attorney</p>
          <h2 className="mt-2 text-navy">Meet {site.attorney.name}</h2>
          <span className="divider-rule" />
          <p className="prose-legal mt-2 text-ink">
            With more than 40 years of legal experience, {site.attorney.name}{" "}
            represents injured clients and families across Gloucester, Mathews,
            Middlesex, and Virginia courts. Johnson Law Center is built on local
            trust, direct communication, and experienced legal guidance when
            the outcome matters.
          </p>
          <Link
            href={`/attorney/${site.attorney.slug}`}
            className="mt-6 inline-flex items-center gap-2 font-semibold text-navy hover:text-gold-dark"
          >
            View Attorney Profile
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
