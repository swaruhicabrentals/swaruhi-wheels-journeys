import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CtaBand, SectionHeader } from "@/components/Section";
import { TOUR_PACKAGES } from "@/lib/content";
import { pageMeta, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";
const lonavalaImg = "/assets/swaruhi-travels-tour-package-lonavala.webp";
const shirdiImg = "/assets/tour-shirdi.jpg";
const statueImg = "/assets/tour-statue-unity.jpg";
import { InquiryForm } from "@/components/InquiryForm";

const IMG: Record<string, string> = {
  lonavala: lonavalaImg, shirdi: shirdiImg, "statue-unity": statueImg,
};

import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata({
title: "Tour Packages Across India: Family, Weekend and Pilgrimage Tours",
      description:
        "Curated tour packages across India by Swaruhi Travels. Mumbai to Lonavala, Shirdi, Mahabaleshwar, Ratnagiri and Goa, plus Ahmedabad to Dwarka, Somnath, Statue of Unity, Girnar and Kutch.",
      path: "/services/tour-packages",
});

export default function Tours() {
  const mumbai = TOUR_PACKAGES.filter((t) => t.from === "Mumbai");
  const ahmedabad = TOUR_PACKAGES.filter((t) => t.from === "Ahmedabad");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Tour Packages", path: "/services/tour-packages" },
          ]),
          serviceJsonLd({
            name: "Tour Packages",
            description:
              "Curated tour packages across India with cab or Tempo Traveller, driver and itinerary planning.",
          }),
        ]}
      />
      <section className="section-navy py-14">
        <div className="container-x">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Tour Packages", path: "/services/tour-packages" }]} />
          <h1 className="mt-3 font-display text-4xl md:text-5xl text-cream">
            Tour Packages Across India
          </h1>
          <p className="mt-4 max-w-2xl text-cream/80">
            Weekend getaways, pilgrimage tours and family holidays, designed and driven
            by our local team. Every package includes vehicle, driver, fuel and itinerary help.
          </p>
        </div>
      </section>

      <PackageGroup title="From Mumbai" items={mumbai} />
      <PackageGroup title="From Ahmedabad" items={ahmedabad} tone="alt" />

      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
          <div>
            <SectionHeader eyebrow="Custom Tours" title="Don't see your dream trip? We'll design it." />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Tell us the destination, dates and group size, and we'll craft a custom itinerary
              with the right vehicle, comfortable stops and transparent pricing. Popular
              custom requests include Konkan beaches, Rajasthan road trips, Kerala circuits
              and multi city Gujarat tours.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="btn-navy">Plan my tour</Link>
              <Link href="/services/tempo-traveller-rentals" className="btn-outline-gold">Group vehicles</Link>
            </div>
          </div>
          <InquiryForm compact />
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function PackageGroup({
  title, items, tone,
}: { title: string; items: typeof TOUR_PACKAGES; tone?: "alt" }) {
  return (
    <section className={`py-16 ${tone === "alt" ? "bg-muted/50" : ""}`}>
      <div className="container-x">
        <SectionHeader eyebrow="Tour Packages" title={title} />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <article key={t.slug} className="card-elegant p-0 overflow-hidden">
              <Image
                src={IMG[t.image] ?? lonavalaImg}
                alt={t.title}
                loading="lazy" width={1024} height={704}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-display text-lg text-navy-deep">{t.title}</h3>
                <Link href="/contact" className="mt-4 inline-flex btn-outline-gold text-sm">Get Quote</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
