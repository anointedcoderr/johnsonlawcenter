import { MapPin } from "lucide-react";
import type { ServiceArea } from "@/data/serviceAreas";

type Props = {
  area: ServiceArea;
};

export default function ServiceAreaBlock({ area }: Props) {
  return (
    <article className="card flex gap-4 items-start">
      <div className="shrink-0 w-10 h-10 rounded-md bg-navy text-cream flex items-center justify-center">
        <MapPin size={18} aria-hidden />
      </div>
      <div>
        <h3 className="font-serif text-lg text-navy">{area.name}</h3>
        <p className="mt-1 text-[0.95rem] leading-relaxed text-ink/90">{area.blurb}</p>
      </div>
    </article>
  );
}
