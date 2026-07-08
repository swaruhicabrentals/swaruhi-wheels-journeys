import type { Metadata } from "next";
import Link from "next/link";
import { Car, Bus, Map, Plane, Briefcase, Heart } from "lucide-react";
import { Breadcrumbs, CtaBand, SectionHeader } from "@/components/Section";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";

import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata({
title: "Travel Services: Cab and Tempo Rentals, Tours, Airport and Corporate Cabs",
      description:
        "Full service travel across India from Swaruhi Travels: local and outstation cab rentals, Tempo Traveller rentals, curated tour packages, airport transfers, corporate cabs and wedding fleets.",
      path: "/services",
});

const services = [
  { icon: Car, title: "Cab Rentals", to: "/services/cab-rentals",
    desc: "Hourly, daily, and outstation cars with chauffeurs, including hatchbacks, sedans and SUVs." },
  { icon: Bus, title: "Tempo Traveller Rentals", to: "/services/tempo-traveller-rentals",
    desc: "12, 17, 21 and 23 seater Tempo Travellers for groups, weddings and long distance tours." },
  { icon: Map, title: "Tour Packages", to: "/services/tour-packages",
    desc: "Handcrafted one day and multi day tour packages across India." },
  { icon: Plane, title: "Airport Transfers", to: "/contact",
    desc: "Punctual BOM and AMD airport pickups and drops, with meet and greet on request." },
  { icon: Briefcase, title: "Corporate Travel", to: "/contact",
    desc: "Monthly billing, dedicated cabs, employee transport and executive travel programs." },
  { icon: Heart, title: "Wedding & Event Fleets", to: "/contact",
    desc: "Decorated cars, guest transport and multiple vehicle fleets for weddings and events." },
];

export default function Services() {
  return (
    <>
      <section className="section-navy py-14">
        <div className="container-x">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} />
          <h1 className="mt-3 font-display text-4xl md:text-5xl text-cream">Our Travel Services</h1>
          <p className="mt-4 max-w-2xl text-cream/80">
            Whatever your travel need, from city commute and outstation trip to wedding
            fleet or complete tour, we have a service and vehicle tailored for it.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          <SectionHeader eyebrow="What We Offer" title="Six ways we help you travel" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc, to }) => (
              <Link key={title} href={to} className="card-elegant group block">
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
