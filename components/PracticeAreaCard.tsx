import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PracticeArea } from "@/data/practiceAreas";

type Props = {
  area: Pick<PracticeArea, "slug" | "title" | "shortLabel" | "cardSummary">;
};

export default function PracticeAreaCard({ area }: Props) {
  return (
    <Link
      href={`/practice-areas/${area.slug}`}
      className="card card-lift group flex flex-col h-full"
    >
      <h3 className="font-serif text-xl text-navy">{area.shortLabel}</h3>
      <span className="divider-rule" />
      <p className="text-ink/90 text-[0.95rem] leading-relaxed flex-1">
        {area.cardSummary}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-gold-dark">
        Learn more
        <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
