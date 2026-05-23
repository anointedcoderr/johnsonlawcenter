"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { X, Phone, MessageSquare } from "lucide-react";
import { site } from "@/data/site";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) onClose();
    // close on route change, regardless of how it was triggered
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div
      id="mobile-menu"
      className={[
        "fixed inset-0 z-50 xl:hidden transition-opacity duration-200",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-navy/55"
        onClick={onClose}
        aria-hidden
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        tabIndex={-1}
        className={[
          "absolute right-0 top-0 h-full w-[88%] max-w-sm bg-cream shadow-xl outline-none flex flex-col",
          "transition-transform duration-200",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <span className="font-serif text-lg font-bold text-navy">
            Johnson Law Center
          </span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-ivory"
            aria-label="Close menu"
          >
            <X size={20} aria-hidden />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4">
          <ul className="space-y-1 text-[1.05rem]">
            <li>
              <Link href="/" className="block py-2 font-medium text-navy">Home</Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 font-medium text-navy">About</Link>
            </li>
            <li>
              <Link href="/practice-areas" className="block py-2 font-medium text-navy">Practice Areas</Link>
              <ul className="ml-3 pl-3 border-l border-border space-y-1 mt-1 mb-2">
                {site.nav
                  .find((n) => n.label === "Practice Areas")
                  ?.children?.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block py-1.5 text-[0.95rem] text-ink"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
            <li>
              <Link href="/reviews" className="block py-2 font-medium text-navy">Reviews</Link>
            </li>
            <li>
              <Link href="/service-areas" className="block py-2 font-medium text-navy">Service Areas</Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 font-medium text-navy">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="border-t border-border p-5 space-y-3">
          <Link href="/contact" className="btn btn-primary w-full">
            Free Consultation
          </Link>
          <div className="grid grid-cols-2 gap-3">
            <a href={site.phones.office.tel} className="btn btn-secondary w-full">
              <Phone size={16} aria-hidden /> Call Now
            </a>
            <a href={site.phones.text.sms} className="btn btn-secondary w-full">
              <MessageSquare size={16} aria-hidden /> Text Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
