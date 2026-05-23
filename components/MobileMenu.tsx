"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Phone, MessageSquare, ChevronDown } from "lucide-react";
import { site } from "@/data/site";
import Logo from "./Logo";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

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
    // close on route change, no matter how it was triggered
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      // collapse the practice areas submenu whenever the drawer closes
      // so it opens fresh next time
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPracticeOpen(false);
    }
  }, [open]);

  if (!mounted) return null;

  const menu = (
    <div
      id="mobile-menu"
      className={[
        "fixed inset-0 z-[60] xl:hidden transition-opacity duration-200",
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
          "transition-transform duration-200 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <Logo variant="light" />
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
              <button
                type="button"
                className="w-full flex items-center justify-between py-2 font-medium text-navy"
                aria-expanded={practiceOpen}
                aria-controls="mobile-practice-sublist"
                onClick={() => setPracticeOpen((v) => !v)}
              >
                <span>Practice Areas</span>
                <ChevronDown
                  size={18}
                  aria-hidden
                  className={`transition-transform duration-200 ${
                    practiceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {practiceOpen && (
                <ul
                  id="mobile-practice-sublist"
                  className="ml-3 pl-3 border-l border-border space-y-1 mt-1 mb-2"
                >
                  <li>
                    <Link
                      href="/practice-areas"
                      className="block py-1.5 text-[0.95rem] font-medium text-navy"
                    >
                      View all practice areas
                    </Link>
                  </li>
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
              )}
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

  return createPortal(menu, document.body);
}
