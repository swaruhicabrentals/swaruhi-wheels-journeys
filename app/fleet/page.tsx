import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";
import { Breadcrumbs, CtaBand, SectionHeader } from "@/components/Section";
import { FLEET } from "@/lib/content";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
const innovaImg = "/assets/fleet-innova.jpg";
const sedanImg = "/assets/fleet-sedan.jpg";
const hatchImg = "/assets/fleet-hatchback.jpg";
const tempoImg = "/assets/tempo-traveller.jpg";

const IMG: Record<string, string> = {
  hatchback: hatchImg, sedan: sedanImg, innova: innovaImg, tempo: tempoImg,
};

import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata({
title: "Our Fleet — Hatchback, Sedan, SUV & Tempo Traveller Rentals",
      description:
        "Explore Swaruhi Travels' clean, well-maintained fleet: hatchbacks, premium sedans, Innova SUVs and 12/17-seater Tempo Travellers for city, outstation and tour travel.",
      path: "/fleet",
});

export default function Fleet() {
  return (
    <>
      <section className="section-navy py-14">
        <div className="container-x">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Fleet", path: "/fleet" }]} />
          <h1 className="mt-3 font-display text-4xl md:text-5xl text-cream">Our Fleet</h1>
          <p className="mt-4 max-w-2xl text-cream/80">
            A curated line-up of hatchbacks, sedans, SUVs and Tempo Travellers — all
            regularly serviced, deep-cleaned and ready for city or outstation travel.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          <SectionHeader eyebrow="Vehicles" title="Choose the right vehicle for your trip" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FLEET.map((f) => (
              <article key={f.slug} className="card-elegant p-0 overflow-hidden">
                <Image
                  src={IMG[f.image] ?? sedanImg}
                  alt={`${f.name} — ${f.ideal}`}
                  loading="lazy" width={1024} height={704}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl text-navy-deep">{f.name}</h3>
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <Users size={14} /> {f.capacity}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    <span className="font-medium text-navy-deep">Ideal for:</span> {f.ideal}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <span className="font-medium text-navy-deep">Examples:</span> {f.examples}
                  </p>
                  <Link href="/contact" className="mt-5 inline-flex btn-outline-gold text-sm">Get Quote</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Not sure which vehicle you need?" subtitle="Tell us your route and group size — we'll recommend the best fit." />
    </>
  );
}
