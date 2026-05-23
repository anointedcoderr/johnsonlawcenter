"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ as FAQItem } from "@/data/faqs";

type Props = {
  items: FAQItem[];
  heading?: string;
};

export default function FAQ({ items, heading = "Frequently Asked Questions" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="section">
      <div className="container-narrow">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-2 text-navy">{heading}</h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {items.map((item, i) => {
            const open = openIndex === i;
            const id = `faq-${i}`;
            return (
              <div key={i}>
                <button
                  type="button"
                  className="w-full py-5 flex items-center justify-between gap-4 text-left"
                  aria-expanded={open}
                  aria-controls={id}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span className="font-serif text-lg text-navy">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    aria-hidden
                    className={`transition-transform shrink-0 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={id}
                  hidden={!open}
                  className="pb-5 text-ink leading-relaxed text-[0.97rem] max-w-3xl"
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
