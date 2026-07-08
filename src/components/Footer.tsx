import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

const logoImg = "/assets/swaruhi-travels-logo-circular.png";

const cols = [
  {
    title: "Services",
    links: [
      { to: "/services/cab-rentals", label: "Cab Rentals" },
      { to: "/services/tempo-traveller-rentals", label: "Tempo Traveller Rentals" },
      { to: "/services/tour-packages", label: "Tour Packages" },
    ],
  },
  {
    title: "Offices",
    links: [
      { to: "/mumbai-cab-rentals", label: "Mumbai" },
      { to: "/ahmedabad-cab-rentals", label: "Ahmedabad" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/why-choose-us", label: "Why Choose Us" },
      { to: "/faq", label: "FAQs" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="section-navy mt-20 pt-16 pb-8">
      <div className="container-x grid gap-10 lg:grid-cols-4">
        <div>
          <Image
            src={logoImg}
            alt="Swaruhi Travels"
            width={160}
            height={160}
            className="h-20 w-20 rounded-full object-cover"
          />
          <p className="mt-4 text-sm text-cream/75 leading-relaxed">
            Reliable cab rentals, Tempo Traveller rentals and tour packages across
            India, coordinated from our Mumbai and Ahmedabad offices.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-gold">
              <Phone size={16} className="text-gold" /> {SITE.phone}
            </a>
            <a href={SITE.emailHref} className="flex items-center gap-2 hover:text-gold">
              <Mail size={16} className="text-gold" /> {SITE.email}
            </a>
            <div className="flex items-start gap-2 text-cream/80">
              <MapPin size={16} className="text-gold mt-0.5" />
              <span>{SITE.addressMumbai} - {SITE.addressAhmedabad}</span>
            </div>
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="font-display text-lg text-gold">{c.title}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {c.links.map((l) => (
                <li key={l.to}>
                  <Link href={l.to} className="text-cream/80 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-x mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/60">
        <p>Copyright {new Date().getFullYear()} Swaruhi Travels. All rights reserved.</p>
        <p>{SITE.hours} - Service across India from Mumbai & Ahmedabad offices</p>
      </div>
    </footer>
  );
}
