import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="container-narrow py-14 md:py-16 grid gap-10 md:grid-cols-4">
        <div>
          <p className="font-serif text-xl font-bold text-cream">
            {site.name}
          </p>
          <span className="divider-rule" />
          <address className="not-italic text-sm leading-7 text-cream/85">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.region} {site.address.postal}
          </address>
          <ul className="mt-4 space-y-1 text-sm text-cream/85">
            <li>
              Office:{" "}
              <a
                href={site.phones.office.tel}
                className="hover:text-gold"
              >
                {site.phones.office.display}
              </a>
            </li>
            <li>
              Text:{" "}
              <a href={site.phones.text.sms} className="hover:text-gold">
                {site.phones.text.display}
              </a>
            </li>
            <li>
              Email:{" "}
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Quick Links</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/85">
            <li><Link href="/" className="hover:text-gold">Home</Link></li>
            <li><Link href="/about" className="hover:text-gold">About</Link></li>
            <li><Link href="/practice-areas" className="hover:text-gold">Practice Areas</Link></li>
            <li><Link href="/reviews" className="hover:text-gold">Reviews</Link></li>
            <li><Link href="/service-areas" className="hover:text-gold">Service Areas</Link></li>
            <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Practice</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/85">
            <li><Link href="/practice-areas/personal-injury" className="hover:text-gold">Personal Injury</Link></li>
            <li><Link href="/practice-areas/car-accidents" className="hover:text-gold">Car Accidents</Link></li>
            <li><Link href="/practice-areas/truck-accidents" className="hover:text-gold">Truck Accidents</Link></li>
            <li><Link href="/practice-areas/motorcycle-accidents" className="hover:text-gold">Motorcycle Accidents</Link></li>
            <li><Link href="/practice-areas/boating-accidents" className="hover:text-gold">Boating Accidents</Link></li>
            <li><Link href="/practice-areas/wrongful-death" className="hover:text-gold">Wrongful Death</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Legal</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/85">
            <li><Link href="/privacy-policy" className="hover:text-gold">Privacy Policy</Link></li>
            <li><Link href="/legal-disclaimer" className="hover:text-gold">Legal Disclaimer</Link></li>
          </ul>
          <p className="mt-6 text-xs text-cream/60 leading-relaxed">
            Past results do not guarantee future outcomes. Information on this
            site is for general informational purposes only and is not legal
            advice.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-narrow py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-cream/65">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="leading-relaxed">
            Website built by{" "}
            <span className="text-cream">{site.credit.name}</span>
            {" · "}
            <a
              href={`mailto:${site.credit.email}`}
              className="hover:text-gold"
            >
              {site.credit.email}
            </a>
            {" · WhatsApp "}
            <a
              href={site.credit.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              {site.credit.whatsappDisplay}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
