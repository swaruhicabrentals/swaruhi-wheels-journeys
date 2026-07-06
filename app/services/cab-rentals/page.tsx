import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Breadcrumbs, CtaBand, SectionHeader } from "@/components/Section";
import { InquiryForm } from "@/components/InquiryForm";
import { FAQList } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/seo";
const heroCar = "/assets/hero-car.jpg";

const faqs = [
  { q: "What's the difference between local and outstation cab rental?",
    a: "Local rentals are billed by hours and kilometres inside city limits. Outstation rentals cover intercity or return trips with per-day and per-km pricing plus driver allowance." },
  { q: "Do you offer one-way cab rentals?",
    a: "Yes, we offer one-way outstation cabs between popular routes like Mumbai-Pune, Ahmedabad-Vadodara, Mumbai-Nashik and more." },
  { q: "Is fuel included in the cab rental price?",
    a: "Standard packages include fuel within a defined kilometre limit. Toll, parking and state permit charges are billed extra as applicable." },
  { q: "Can I book a cab near me for immediate travel?",
    a: "Yes, subject to vehicle availability. Call or WhatsApp us for the fastest confirmation." },
];

import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata({
title: "Cab Rental Across India - Local & Outstation Cabs",
      description:
        "Book chauffeur-driven cab rental across India from Swaruhi Travels. Hatchback, sedan and SUV options for local, airport, outstation and corporate travel. Transparent pricing, 24×7 support.",
      path: "/services/cab-rentals",
});

export default function CarRentals() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Cab Rentals", path: "/services/cab-rentals" },
          ]),
          serviceJsonLd({
            name: "Cab Rentals",
            description:
              "Chauffeur-driven cab rentals across India for local, airport, outstation and corporate travel.",
          }),
          faqJsonLd(faqs),
        ]}
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={heroCar} alt="Premium sedan on an open highway"
            width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 to-navy/50" />
        </div>
        <div className="container-x py-16 md:py-20 text-cream">
          <Breadcrumbs items={[
            { name: "Home", path: "/" }, { name: "Services", path: "/services" },
            { name: "Cab Rentals", path: "/services/cab-rentals" },
          ]} />
          <h1 className="mt-3 font-display text-4xl md:text-5xl">
            Cab Rental Across India
          </h1>
          <p className="mt-4 max-w-2xl text-cream/85">
            Chauffeur-driven hatchbacks, sedans and SUVs for local runs, airport transfers,
            outstation trips and corporate travel - all at transparent, upfront prices.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeader eyebrow="Cab Rentals" title="Rent a cab with driver, without surprises" />
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Whether you need a quick hatchback for a Mumbai airport transfer or a
                comfortable Innova for a Pune weekend trip, Swaruhi Travels offers
                dependable chauffeur-driven cab rental across India, coordinated from our Mumbai and Ahmedabad offices.
              </p>
              <p>
                Our fleet is regularly serviced and deep-cleaned. Every driver is
                verified, uniformed and experienced on local city routes as well as
                popular outstation highways - so you sit back and enjoy the ride.
              </p>
            </div>

            <h2 className="mt-10 font-display text-2xl text-navy-deep">Popular rental packages</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "4 hours / 40 km local",
                "8 hours / 80 km local",
                "Full-day 12 hours / 120 km",
                "Airport pickup & drop",
                "Outstation one-way",
                "Outstation round-trip",
                "Monthly corporate cab",
                "Wedding day car",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-gold-deep" /> {p}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-2xl text-navy-deep">Popular outstation routes</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Mumbai → Pune · Lonavala · Nashik · Shirdi · Mahabaleshwar · Goa &nbsp;·&nbsp;
              Ahmedabad → Vadodara · Statue of Unity · Saputara · Dwarka · Mount Abu · Udaipur
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/fleet" className="btn-navy">See fleet</Link>
              <Link href="/services/tour-packages" className="btn-outline-gold">Tour packages</Link>
            </div>
          </div>

          <InquiryForm compact />
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container-x">
          <SectionHeader eyebrow="FAQs" title="Cab rental - common questions" />
          <div className="mt-8"><FAQList items={faqs} /></div>
        </div>
      </section>

      <CtaBand title="Need a cab rental today?" />
    </>
  );
}
