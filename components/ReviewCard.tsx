import { Star } from "lucide-react";
import type { Review } from "@/data/reviews";

type Props = {
  review: Review;
};

export default function ReviewCard({ review }: Props) {
  return (
    <figure className="card flex flex-col gap-4 h-full">
      <div className="flex items-center gap-1 text-gold" aria-label={`${review.rating} star rating`}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" strokeWidth={0} aria-hidden />
        ))}
      </div>
      <blockquote className="text-ink leading-relaxed text-[0.97rem]">
        &ldquo;{review.excerpt}&rdquo;
      </blockquote>
      <figcaption className="mt-auto pt-2 border-t border-border text-sm font-semibold text-navy">
        {review.author}
      </figcaption>
    </figure>
  );
}
