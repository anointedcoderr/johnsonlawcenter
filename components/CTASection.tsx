import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/data/site";

type Props = {
  heading?: string;
  body?: string;
  variant?: "dark" | "ivory";
};

export default function CTASection({
  heading = "Request a Free Consultation",
  body = "You do not have to handle insurance calls, medical bills, or legal uncertainty alone. Tell us what happened and Johnson Law Center will help you understand your next step.",
  variant = "dark",
}: Props) {
  const isDark = variant === "dark";
  return (
    <section className={isDark ? "section-dark" : "section bg-cream border-y border-border"}>
      <div className="container-narrow py-14 md:py-20 text-center">
        <p className={`eyebrow ${isDark ? "text-gold" : ""}`}>Free Consultation</p>
        <h2 className={`mt-2 ${isDark ? "text-cream" : "text-navy"}`}>{heading}</h2>
        <p
          className={`mt-4 mx-auto max-w-2xl leading-relaxed ${
            isDark ? "text-cream/85" : "text-ink"
          }`}
        >
          {body}
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/contact"
            className={`btn ${isDark ? "btn-primary" : "btn-primary"}`}
          >
            Request a Free Consultation
          </Link>
          <a
            href={site.phones.office.tel}
            className={`btn ${isDark ? "btn-on-dark" : "btn-secondary"}`}
          >
            <Phone size={16} aria-hidden />
            Call {site.phones.office.display}
          </a>
        </div>
      </div>
    </section>
  );
}
