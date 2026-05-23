import { site } from "@/data/site";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

type Item =
  | { kind: "count"; end: number; suffix: string; label: string }
  | { kind: "text"; value: string; label: string };

const items: Item[] = [
  { kind: "count", end: 280, suffix: "+", label: "Five Star Reviews" },
  { kind: "count", end: 40, suffix: "+", label: "Years Legal Experience" },
  { kind: "text", value: "Millions", label: "Recovered for Clients" },
  { kind: "text", value: "Free", label: "Consultations Available" },
];

type Props = {
  variant?: "dark" | "light";
};

export default function TrustStats({ variant = "light" }: Props) {
  const isDark = variant === "dark";
  return (
    <section
      className={
        isDark
          ? "section-dark border-y border-white/10"
          : "border-y border-border bg-cream"
      }
    >
      <div className="container-narrow py-10 md:py-12">
        <Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {items.map((item) => (
              <li key={item.label}>
                <p
                  className={`font-serif text-3xl md:text-4xl ${
                    isDark ? "text-cream" : "text-navy"
                  }`}
                >
                  {item.kind === "count" ? (
                    <CountUp end={item.end} suffix={item.suffix} />
                  ) : (
                    item.value
                  )}
                </p>
                <p
                  className={`mt-1 text-xs md:text-sm uppercase tracking-[0.12em] ${
                    isDark ? "text-cream/75" : "text-muted"
                  }`}
                >
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
        <p className="sr-only">
          {site.trust.reviews}. {site.trust.experience}. {site.trust.recovered}.{" "}
          {site.trust.consult}.
        </p>
      </div>
    </section>
  );
}
