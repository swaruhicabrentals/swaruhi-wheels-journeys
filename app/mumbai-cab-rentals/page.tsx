import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Plane, Building2, Landmark } from "lucide-react";
import { Breadcrumbs, CtaBand, SectionHeader } from "@/components/Section";
import { InquiryForm } from "@/components/InquiryForm";
import { FAQList } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
const mumbaiImg = "/assets/swaruhi-travels-mumbai-office-bandra-worli-sea-link.webp";

const faqs = [
  { q: "Which areas in Mumbai do you cover?",
    a: "We provide travel services across the entire Mumbai city, Navi Mumbai and Thane." },
  { q: "Do you offer Mumbai airport cab service?",
    a: "Yes, we offer 24×7 airport transfers with meet and greet on request. Book in advance for guaranteed punctual pickup." },
  { q: "What outstation trips are popular from Mumbai?",
    a: "Pune, Lonavala, Khandala, Nashik, Shirdi, Mahabaleshwar, Alibaug and Goa are our most requested outstation trips from Mumbai." },
  { q: "Can I book a cab rental near me in Mumbai for immediate travel?",
    a: "Yes, subject to availability. Call or WhatsApp us with your pickup location and time, and most requests are confirmed within minutes." },
];

import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata({
title: "Mumbai Office: Cab Rental, Airport, Outstation and Tours",
      description:
        "Swaruhi Travels offers cab rental, Tempo Traveller rental, airport transfers and outstation cabs across Mumbai. Serving Andheri, Bandra, South Mumbai, Thane and Navi Mumbai. 24×7 booking.",
      path: "/mumbai-cab-rentals",
});

export default function Mumbai() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Mumbai Office", path: "/mumbai-cab-rentals" },
          ]),
          serviceJsonLd({
            name: "Mumbai Cab Rentals",
            description:
              "Cab rentals, airport transfers, Tempo Traveller rentals and outstation travel from the Mumbai office.",
            areaServed: ["India", "Mumbai"],
          }),
          faqJsonLd(faqs),
        ]}
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={mumbaiImg} alt="Mumbai Bandra Worli Sea Link and skyline"
            width={1280} height={720} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 to-navy/60" />
        </div>
        <div className="container-x py-16 md:py-20 text-cream">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Mumbai Office", path: "/mumbai-cab-rentals" }]} />
          <h1 className="mt-3 font-display text-4xl md:text-5xl">Mumbai Office</h1>
          <p className="mt-4 max-w-2xl text-cream/85">
            Reliable cab rentals, Tempo Traveller rentals, airport transfers and outstation
            cabs across Mumbai, from South Mumbai and Bandra to Andheri, Thane and Navi Mumbai.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
          <div>
            <SectionHeader eyebrow="Mumbai" title="Your local base for travel across India" />
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Mumbai runs on time, and so do we. Whether it's an early morning
              <Link href="/services/cab-rentals" className="text-gold-deep hover:underline mx-1">cab rental in Mumbai</Link>
              for a client meeting, a family weekend to Lonavala, or a
              <Link href="/services/tempo-traveller-rentals" className="text-gold-deep hover:underline mx-1">Tempo Traveller</Link>
              for a wedding baraat, our fleet and drivers are ready across the city.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Plane, t: "Mumbai Airport Transfers", d: "T1 & T2 pickups and drops, 24×7." },
                { icon: Landmark, t: "Local City Rentals", d: "8hr / 10hr / 12hr packages across MMR." },
                { icon: MapPin, t: "Outstation Cabs", d: "Pune, Lonavala, Nashik, Shirdi, Goa & more." },
                { icon: Building2, t: "Corporate Travel", d: "Monthly billing for teams and executives." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="card-elegant">
                  <Icon className="text-gold-deep" />
                  <h3 className="mt-3 font-display text-lg text-navy-deep">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>

          </div>

          <InquiryForm compact />
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container-x">
          <SectionHeader eyebrow="Mumbai FAQs" title="What Mumbai travellers ask us" />
          <div className="mt-8"><FAQList items={faqs} /></div>
        </div>
      </section>

      <CtaBand title="Book a Mumbai cab now" />
    </>
  );
}
