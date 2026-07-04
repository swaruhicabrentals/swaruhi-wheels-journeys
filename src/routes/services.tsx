import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, Bus, Map, Plane, Briefcase, Heart } from "lucide-react";
import { Breadcrumbs, CtaBand, SectionHeader } from "@/components/Section";
import { pageMeta, jsonLdScript, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: pageMeta({
      title: "Travel Services — Car & Tempo Rentals, Tours, Airport & Corporate Cabs",
      description:
        "Full-service travel from Swaruhi Travels: local & outstation car rentals, Tempo Traveller rentals, curated tour packages, airport transfers, corporate cabs and wedding fleets in Mumbai and Ahmedabad.",
      path: "/services",
    }),
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [jsonLdScript(breadcrumbJsonLd([
      { name: "Home", path: "/" }, { name: "Services", path: "/services" },
    ]))],
  }),
});

const services = [
  { icon: Car, title: "Car Rentals", to: "/car-rentals",
    desc: "Hourly, daily, and outstation chauffeur-driven cars — hatchbacks, sedans and SUVs." },
  { icon: Bus, title: "Tempo Traveller Rentals", to: "/tempo-traveller-rentals",
    desc: "12- and 17-seater Tempo Travellers for groups, weddings and long-distance tours." },
  { icon: Map, title: "Tour Packages", to: "/tour-packages",
    desc: "Handcrafted single-day and multi-day tour packages from Mumbai and Ahmedabad." },
  { icon: Plane, title: "Airport Transfers", to: "/contact",
    desc: "On-time BOM and AMD airport pickups and drops — meet & greet on request." },
  { icon: Briefcase, title: "Corporate Travel", to: "/contact",
    desc: "Monthly billing, dedicated cabs, employee transport and executive travel programs." },
  { icon: Heart, title: "Wedding & Event Fleets", to: "/contact",
    desc: "Decorated cars, guest transport and multi-vehicle fleets for weddings and events." },
];

function Services() {
  return (
    <>
      <section className="section-navy py-14">
        <div className="container-x">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
          <h1 className="mt-3 font-display text-4xl md:text-5xl text-cream">Our Travel Services</h1>
          <p className="mt-4 max-w-2xl text-cream/80">
            Whatever your travel need — city commute, outstation trip, wedding fleet or
            complete tour — we have a service and vehicle tailored for it.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          <SectionHeader eyebrow="What We Offer" title="Six ways we help you travel" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc, to }) => (
              <Link key={title} to={to} className="card-elegant group block">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-xl text-navy-deep">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <span className="mt-4 inline-flex text-sm font-semibold text-gold-deep">Get Quote →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
