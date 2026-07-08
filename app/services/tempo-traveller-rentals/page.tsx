import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Breadcrumbs, CtaBand, SectionHeader } from "@/components/Section";
import { InquiryForm } from "@/components/InquiryForm";
import { FAQList } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "@/lib/seo";
const tempoImg = "/assets/tempo-traveller.jpg";

const faqs = [
  { q: "How many seaters do you offer in Tempo Traveller?",
    a: "We offer 12, 17, 21 and 23 seater Tempo Travellers with pushback seats, AC and ample luggage space." },
  { q: "Is Tempo Traveller good for weddings?",
    a: "Yes. Tempo Travellers are ideal for baraat, guest pickups from railway stations and airports, and multi city wedding events." },
  { q: "Can we hire a Tempo Traveller for a Shirdi or Statue of Unity tour?",
    a: "Absolutely. We run regular group tours from Mumbai to Shirdi, and from Ahmedabad to Statue of Unity, Somnath and Dwarka." },
  { q: "Is the driver allowance separate?",
    a: "For outstation Tempo Traveller trips, a standard driver allowance is charged in addition to per kilometre pricing and shared upfront in the quote." },
];

import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata({
title: "Tempo Traveller Rental Across India: 12, 17, 21 and 23 Seater",
      description:
        "Book 12, 17, 21 and 23 seater Tempo Traveller rental across India for family tours, weddings, corporate groups and outstation trips. AC, pushback seats, experienced drivers.",
      path: "/services/tempo-traveller-rentals",
});

export default function Tempo() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Tempo Traveller Rentals", path: "/services/tempo-traveller-rentals" },
          ]),
          serviceJsonLd({
            name: "Tempo Traveller Rentals",
            description:
              "12, 17, 21 and 23 seater Tempo Traveller rentals across India for family tours, weddings, corporate groups and outstation trips.",
          }),
          faqJsonLd(faqs),
        ]}
      />
      <section className="section-navy py-14">
        <div className="container-x">
          <Breadcrumbs items={[
            { name: "Home", path: "/" }, { name: "Services", path: "/services" },
            { name: "Tempo Traveller Rentals", path: "/services/tempo-traveller-rentals" },
          ]} />
          <h1 className="mt-3 font-display text-4xl md:text-5xl text-cream">
            Tempo Traveller Rental Across India
          </h1>
          <p className="mt-4 max-w-2xl text-cream/80">
            12, 17, 21 and 23 seater Tempo Travellers for families, wedding groups, corporate
            offsites and temple tours with AC, pushback seats and experienced drivers.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
          <div>
            <Image src={tempoImg} alt="White 12 seater Tempo Traveller parked at a scenic viewpoint"
              width={1280} height={800} loading="lazy"
              className="rounded-2xl object-cover shadow-elegant" />

            <h2 className="mt-10 font-display text-2xl text-navy-deep">Perfect for every group</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Family and multi generation trips",
                "Wedding baraat and guest transport",
                "Temple & pilgrimage tours",
                "Corporate offsites & team outings",
                "School and college excursions",
                "Airport pickups for large groups",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-gold-deep" /> {p}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-2xl text-navy-deep">Onboard comfort</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-muted-foreground">
              {[
                "AC with adjustable vents", "Pushback reclining seats",
                "Ample luggage space", "Music system & charging points",
                "Reading lights & curtains", "First aid kit on board",
              ].map((p) => <li key={p} className="flex items-center gap-2"><Check size={16} className="text-gold-deep" /> {p}</li>)}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services/tour-packages" className="btn-navy">See tour packages</Link>
              <Link href="/fleet" className="btn-outline-gold">Full fleet</Link>
            </div>
          </div>

          <InquiryForm compact />
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container-x">
          <SectionHeader eyebrow="FAQs" title="Tempo Traveller common questions" />
          <div className="mt-8"><FAQList items={faqs} /></div>
        </div>
      </section>

      <CtaBand title="Planning a group trip?" />
    </>
  );
}
