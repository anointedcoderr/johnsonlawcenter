import Link from "next/link";
import { site } from "@/data/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="container-narrow py-14 md:py-16 grid gap-10 md:grid-cols-4">
        <div>
          <Logo variant="dark" />
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
        <div className="container-narrow py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-cream/65">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
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
            </p>
            <a
              href={site.credit.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat with ${site.credit.name} on WhatsApp`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1FB955] transition-colors whitespace-nowrap"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="currentColor"
              >
                <path d="M19.077 4.928C17.191 3.041 14.683 2 12.012 2 6.495 2 2.02 6.476 2.02 11.993c0 1.764.461 3.484 1.34 5.001L2 22l5.146-1.355a9.97 9.97 0 0 0 4.866 1.247h.004c5.514 0 9.99-4.477 9.99-9.99 0-2.668-1.043-5.176-2.929-7.064Zm-7.065 15.355h-.003a8.29 8.29 0 0 1-4.224-1.158l-.303-.18-3.054.802.815-2.978-.197-.305a8.275 8.275 0 0 1-1.27-4.421c0-4.578 3.722-8.301 8.301-8.301 2.217 0 4.301.864 5.866 2.434a8.246 8.246 0 0 1 2.434 5.873c-.002 4.58-3.724 8.302-8.302 8.302h-.063Zm4.554-6.218c-.25-.125-1.475-.728-1.704-.811-.229-.083-.395-.125-.561.125-.166.25-.645.811-.79.978-.145.166-.291.187-.541.062-.25-.124-1.052-.387-2.005-1.236-.74-.66-1.241-1.475-1.386-1.725-.145-.25-.015-.385.11-.51.112-.111.249-.291.374-.437.124-.146.166-.25.249-.417.083-.166.041-.312-.021-.437-.062-.125-.561-1.353-.769-1.852-.203-.486-.41-.42-.561-.428a10.1 10.1 0 0 0-.479-.009.918.918 0 0 0-.666.312c-.229.25-.873.853-.873 2.079s.894 2.412 1.018 2.578c.125.166 1.76 2.686 4.262 3.768.595.257 1.06.41 1.422.524.598.19 1.142.163 1.572.099.479-.072 1.476-.604 1.683-1.186.208-.582.208-1.081.146-1.186-.062-.104-.229-.166-.479-.291Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
