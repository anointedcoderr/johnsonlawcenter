import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/SectionHeader";
import { practiceAreas } from "@/data/practiceAreas";

export const metadata: Metadata = {
  title: "Practice Areas | Johnson Law Center Gloucester, VA",
  description:
    "Practice areas at Johnson Law Center include personal injury, car accidents, truck accidents, motorcycle accidents, boating accidents, and wrongful death.",
};

const why = [
  {
    title: "Quick legal guidance matters",
    body: "Early steps can affect medical care, insurance communication, and the evidence available later. A free consultation helps you understand what to do next.",
  },
  {
    title: "How the firm helps",
    body: "We listen to the facts, communicate with insurance representatives, gather records, and work toward a fair outcome for the injury you sustained.",
  },
];

export default function PracticeAreasPage() {
  return (
    <>
      <Hero
        eyebrow="Practice Areas"
        headline="Personal Injury and Accident Representation in Virginia"
        subtext="Johnson Law Center helps injured clients and families understand their options after serious accidents, vehicle collisions, boating injuries, and wrongful death matters."
      />

      <section className="section">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="Areas of Practice"
            heading="How we help injured clients"
            lede="Each practice area covers the kind of representation we offer and the issues we see most often in the region."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {practiceAreas.map((area) => (
              <PracticeAreaCard key={area.slug} area={area} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream border-y border-border">
        <div className="container-narrow grid md:grid-cols-2 gap-10">
          {why.map((w) => (
            <article key={w.title}>
              <h2 className="text-navy">{w.title}</h2>
              <span className="divider-rule" />
              <p className="prose-legal text-ink">{w.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
