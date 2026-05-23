"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { site } from "@/data/site";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={[
        "sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b transition-colors",
        scrolled ? "border-border" : "border-transparent",
      ].join(" ")}
    >
      <div className="container-narrow flex items-center justify-between py-4 md:py-5">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-lg md:text-xl font-bold text-navy">
            Johnson Law Center
          </span>
          <span className="text-[0.7rem] md:text-xs uppercase tracking-[0.18em] text-muted">
            Gloucester, VA
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
          {site.nav.map((item) => {
            if (item.children) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(true)}
                  onMouseLeave={() => setOpenDropdown(false)}
                >
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-[0.95rem] font-medium text-ink hover:text-navy"
                    aria-haspopup="menu"
                    aria-expanded={openDropdown}
                  >
                    {item.label}
                    <ChevronDown size={16} aria-hidden />
                  </Link>
                  {openDropdown && (
                    <div
                      role="menu"
                      className="absolute left-0 top-full pt-3"
                    >
                      <div className="min-w-[240px] bg-cream border border-border rounded-md shadow-[0_8px_24px_rgba(11,27,43,0.08)] py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            role="menuitem"
                            className="block px-4 py-2 text-[0.92rem] text-ink hover:text-navy hover:bg-ivory"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className="text-[0.95rem] font-medium text-ink hover:text-navy"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={site.phones.office.tel}
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold-dark"
          >
            <Phone size={16} aria-hidden />
            {site.phones.office.display}
          </a>
          <Link href="/contact" className="btn btn-primary text-sm">
            Free Consultation
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-border bg-cream"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(true)}
        >
          <span aria-hidden className="flex flex-col gap-1.5">
            <span className="block w-5 h-0.5 bg-navy" />
            <span className="block w-5 h-0.5 bg-navy" />
            <span className="block w-5 h-0.5 bg-navy" />
          </span>
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
