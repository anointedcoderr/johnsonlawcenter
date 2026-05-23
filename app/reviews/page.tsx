import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ReviewCard from "@/components/ReviewCard";
import CTASection from "@/components/CTASection";
import { reviews, reviewNote } from "@/data/reviews";

export const metadata: Metadata = {
  title: "Client Reviews | Johnson Law Center",
  description:
    "Read reviews from clients of Johnson Law Center. 280+ five star reviews from clients across Gloucester and Virginia.",
};

export default function ReviewsPage() {
  return (
    <>
      <Hero
        eyebrow="Reviews"
        headline="Trusted by Clients Across Gloucester and Virginia"
        subtext="Feedback from clients shapes how we work. We are grateful for the trust our clients place in the firm during difficult times."
      />

      <section className="section">
        <div className="container-narrow grid md:grid-cols-3 gap-5 items-stretch">
          <div className="card md:col-span-1">
            <p className="eyebrow">Google Reviews</p>
            <h2 className="mt-2 text-navy">280+ five star reviews</h2>
            <span className="divider-rule" />
            <p className="text-ink text-[0.95rem] leading-relaxed">
              Johnson Law Center has received more than 280 five star Google
              reviews from clients across the region.
            </p>
            <a
              href="https://www.google.com/search?q=Johnson+Law+Center+Gloucester+VA+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary mt-5 w-full"
            >
              View Google Reviews
            </a>
            <p className="mt-4 text-xs text-muted leading-relaxed">
              Replace this link with the live Google Business Profile URL
              before launch.
            </p>
          </div>

          <div className="md:col-span-2 grid sm:grid-cols-2 gap-5">
            {reviews.map((r) => (
              <ReviewCard key={r.author} review={r} />
            ))}
          </div>
        </div>

        <div className="container-narrow mt-10">
          <p className="text-xs text-muted max-w-2xl leading-relaxed">{reviewNote}</p>
        </div>
      </section>

      <CTASection
        heading="See if we can help with your situation"
        body="Tell us what happened. Consultations are free and confidential."
      />
    </>
  );
}
