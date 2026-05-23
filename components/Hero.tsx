import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/data/site";

type Props = {
  eyebrow?: string;
  headline: string;
  subtext: string;
  showPrimaryCTAs?: boolean;
  variant?: "home" | "page";
};

export default function Hero({
  eyebrow,
  headline,
  subtext,
  showPrimaryCTAs = false,
  variant = "page",
}: Props) {
  if (variant === "home") {
    return (
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-navy"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top right, rgba(184,134,43,0.45), transparent 55%), radial-gradient(ellipse at bottom left, rgba(255,253,248,0.06), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%221%22 height=%221%22><rect width=%221%22 height=%221%22 fill=%22%23ffffff%22/></svg>')",
          }}
        />
        <div className="relative container-narrow py-20 md:py-28">
          <div className="max-w-2xl">
            {eyebrow && <p className="eyebrow text-gold">{eyebrow}</p>}
            <h1 className="mt-3 text-cream">{headline}</h1>
            <p className="mt-5 text-cream/85 text-lg leading-relaxed max-w-xl">
              {subtext}
            </p>
            {showPrimaryCTAs && (
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact" className="btn btn-primary">
                  Request a Free Consultation
                </Link>
                <a
                  href={site.phones.office.tel}
                  className="btn btn-on-dark"
                >
                  <Phone size={16} aria-hidden />
                  Call {site.phones.office.display}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate bg-navy text-cream">
      <div className="container-narrow py-16 md:py-24">
        {eyebrow && <p className="eyebrow text-gold">{eyebrow}</p>}
        <h1 className="mt-3 text-cream max-w-3xl">{headline}</h1>
        <p className="mt-5 text-cream/85 text-lg leading-relaxed max-w-2xl">
          {subtext}
        </p>
      </div>
    </section>
  );
}
