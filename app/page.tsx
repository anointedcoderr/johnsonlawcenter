import Link from "next/link";
import { Phone, Scale, BadgeCheck, MessagesSquare, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import SectionHeader from "@/components/SectionHeader";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import AttorneyPreview from "@/components/AttorneyPreview";
import ReviewCard from "@/components/ReviewCard";
import ConsultationForm from "@/components/ConsultationForm";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { practiceAreas } from "@/data/practiceAreas";
import { reviews, reviewNote } from "@/data/reviews";
import { site } from "@/data/site";

const reasons = [
  { icon: Scale, title: "Direct legal guidance", body: "Clear answers from the attorney handling your case. No layers of intake. No long delays." },
  { icon: MapPin, title: "Local Virginia representation", body: "Based in Gloucester. Active in Mathews, Middlesex, and Virginia courts." },
  { icon: BadgeCheck, title: "Experience with injury matters", body: "40+ years of legal experience focused on accident and injury cases." },
  { icon: MessagesSquare, title: "Clear communication", body: "Straightforward updates from your first consultation through resolution." },
];

const steps = [
  {
    n: "01",
    title: "Tell Us What Happened",
    body: "Share the details of your accident, injury, or legal concern during a free consultation.",
  },
  {
    n: "02",
    title: "We Review Your Options",
    body: "We look at the facts, explain your possible next steps, and help you understand what may be available.",
  },
  {
    n: "03",
    title: "We Pursue the Best Possible Outcome",
    body: "We work to protect your interests and pursue fair compensation through negotiation or litigation when needed.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        variant="home"
        eyebrow="Personal Injury & Accident Law"
        headline="Injured in Virginia? Get Trusted Legal Help Today."
        subtext="Johnson Law Center helps injured clients across Gloucester, Mathews, Middlesex, and Virginia courts pursue fair compensation with clear guidance, local experience, and strong legal representation."
        showPrimaryCTAs
      />

      <TrustStats variant="light" />

      <section className="section">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="Practice Areas"
            heading="Representation Built Around Your Situation"
            lede="We focus on accident and injury matters across the Middle Peninsula and Virginia courts."
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {practiceAreas.map((area, i) => (
              <Reveal key={area.slug} delay={i * 80}>
                <PracticeAreaCard area={area} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/practice-areas" className="btn btn-secondary">
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-cream border-y border-border">
        <div className="container-narrow grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader
              eyebrow="Why Clients Choose Johnson Law Center"
              heading="Experience, presence, and clear answers when it matters."
            />
            <p className="prose-legal mt-4 text-ink">
              Injured clients across Gloucester, Mathews, Middlesex, and
              Virginia courts come to Johnson Law Center for direct
              representation and steady communication. We focus on the facts of
              your case and work toward a fair outcome.
            </p>
          </div>
          <ul className="space-y-4">
            {reasons.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <span className="shrink-0 w-10 h-10 rounded-md bg-navy text-cream flex items-center justify-center">
                  <Icon size={18} aria-hidden />
                </span>
                <div>
                  <h3 className="font-serif text-lg text-navy">{title}</h3>
                  <p className="text-ink text-[0.95rem] leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="How We Work"
            heading="A clear three step process"
          />
          <ol className="mt-10 grid md:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <Reveal key={step.n} as="li" delay={i * 100} className="card flex flex-col">
                <p className="font-serif text-3xl text-gold">{step.n}</p>
                <h3 className="mt-2 font-serif text-xl text-navy">{step.title}</h3>
                <span className="divider-rule" />
                <p className="text-ink text-[0.95rem] leading-relaxed">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <AttorneyPreview />

      <section className="section bg-cream border-y border-border">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="Client Reviews"
            heading="Trusted by Injured Clients Across Virginia"
            lede="A small selection of feedback from clients of the firm."
          />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <Reveal key={review.author} delay={i * 100}>
                <ReviewCard review={review} />
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted max-w-2xl">{reviewNote}</p>
          <div className="mt-6">
            <Link href="/reviews" className="btn btn-secondary">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="Service Areas"
            heading="Local Representation Across the Middle Peninsula"
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {site.serviceAreas.map((area) => (
              <li
                key={area}
                className="px-4 py-2 rounded-md border border-border bg-cream text-sm font-medium text-navy"
              >
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-ink leading-relaxed">
            Johnson Law Center represents clients throughout Gloucester County
            and the surrounding region, with experience in Virginia courts for
            accident and injury matters.
          </p>
          <div className="mt-6">
            <Link href="/service-areas" className="btn btn-secondary">
              See All Service Areas
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container-narrow grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className="eyebrow text-gold">Free Consultation</p>
            <h2 className="mt-2 text-cream">Request a Free Consultation</h2>
            <span className="divider-rule" />
            <p className="mt-3 text-cream/85 leading-relaxed max-w-xl">
              You do not have to handle insurance calls, medical bills, or
              legal uncertainty alone. Tell us what happened and Johnson Law
              Center will help you understand your next step.
            </p>
            <ul className="mt-8 space-y-3 text-cream/85 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} aria-hidden className="text-gold" />
                <a href={site.phones.office.tel} className="hover:text-gold">
                  Office {site.phones.office.display}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} aria-hidden className="text-gold" />
                <a href={site.phones.text.sms} className="hover:text-gold">
                  Text {site.phones.text.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </li>
              <li className="text-cream/70">
                {site.address.street}, {site.address.city}, {site.address.region}{" "}
                {site.address.postal}
              </li>
            </ul>
          </div>
          <div className="text-ink">
            <ConsultationForm />
          </div>
        </div>
      </section>

      <CTASection variant="ivory" heading="Ready to talk?" />
    </>
  );
}
