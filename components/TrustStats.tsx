import { site } from "@/data/site";

const items = [
  { value: "280+", label: "Five Star Reviews" },
  { value: "40+", label: "Years Legal Experience" },
  { value: "Millions", label: "Recovered for Clients" },
  { value: "Free", label: "Consultations Available" },
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
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {items.map((item) => (
            <li key={item.label}>
              <p
                className={`font-serif text-3xl md:text-4xl ${
                  isDark ? "text-cream" : "text-navy"
                }`}
              >
                {item.value}
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
        <p className="sr-only">
          {site.trust.reviews}. {site.trust.experience}. {site.trust.recovered}.{" "}
          {site.trust.consult}.
        </p>
      </div>
    </section>
  );
}
