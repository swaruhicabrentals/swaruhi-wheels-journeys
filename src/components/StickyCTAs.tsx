import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function StickyCTAs() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:bottom-6 md:right-6">
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-105 transition-transform"
      >
        <MessageCircle size={26} />
      </a>
      <a
        href={SITE.phoneHref}
        aria-label="Call Swaruhi Travels"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy-deep shadow-gold hover:scale-105 transition-transform"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
