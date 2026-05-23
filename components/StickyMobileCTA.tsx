import { Phone, MessageSquare } from "lucide-react";
import { site } from "@/data/site";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 md:hidden border-t border-border bg-cream/95 backdrop-blur-sm">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={site.phones.office.tel}
          className="btn btn-primary w-full"
          aria-label={`Call ${site.phones.office.display}`}
        >
          <Phone size={16} aria-hidden /> Call Now
        </a>
        <a
          href={site.phones.text.sms}
          className="btn btn-secondary w-full"
          aria-label={`Text ${site.phones.text.display}`}
        >
          <MessageSquare size={16} aria-hidden /> Text Us
        </a>
      </div>
    </div>
  );
}
