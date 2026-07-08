import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Users, Award, HeartHandshake } from "lucide-react";
import { SectionHeader, CtaBand, Breadcrumbs } from "@/components/Section";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";
const familyImg = "/assets/family-travel.jpg";

import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata({
title: "About Swaruhi Travels: Travel Partner Across India",
      description:
        "Swaruhi Travels began in Mumbai and has grown into a trusted travel brand serving Mumbai, Ahmedabad and journeys across India with reliable vehicles and personal service.",
      path: "/about",
});

export default function About() {
  return (
    <>
      <section className="section-navy py-14">
        <div className="container-x">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }]} />
          <h1 className="mt-3 font-display text-4xl md:text-5xl text-cream">About Swaruhi Travels</h1>
          <p className="mt-4 max-w-2xl text-cream/80">
            A modern travel service built on reliability, safety and warmth. We help families,
            tourists and companies move confidently across India.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-2 items-center">
          <Image
            src={familyImg}
            alt="Family preparing for a road trip in a rental SUV"
            loading="lazy" width={1280} height={800}
            className="rounded-2xl object-cover shadow-elegant"
          />
          <div>
            <SectionHeader eyebrow="Our Story" title="Built on trust, driven by service" />
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Swaruhi Travels began in Mumbai with a single car and a simple belief
                that every customer deserves a comfortable, reliable, and memorable
                travel experience.
              </p>
              <p>
                Founded by <span className="font-medium text-navy-deep">Nikhil Dhuri</span>,
                our journey has been built on trust, consistency, and the relationships
                we have formed with every traveller along the way. What started as a
                small venture has grown into a trusted travel brand with an expanding
                presence in Mumbai and Ahmedabad.
              </p>
              <p>
                Today, we have a wide network of well maintained vehicles, including
                sedans, SUVs, cabs, and Tempo Travellers, serving airport transfers,
                corporate travel, weddings, local sightseeing, and outstation journeys.
                We also curate personalised tour packages, thoughtfully designed to
                match every traveller's interests, schedule, and budget.
              </p>
              <p>
                As we continue to grow, our commitment remains the same: to deliver
                exceptional service, genuine hospitality, and travel experiences our
                customers can rely on, every time they choose Swaruhi Travels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container-x">
          <SectionHeader eyebrow="What We Stand For" title="Values that shape every ride" align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, t: "Safety First", d: "Verified drivers and serviced vehicles." },
              { icon: Users, t: "People Centric", d: "Warm service for families, tourists and corporates." },
              { icon: Award, t: "Premium Standards", d: "Clean interiors, punctual pickups, courteous drivers." },
              { icon: HeartHandshake, t: "Transparent Pricing", d: "Itemised quotes, no hidden surcharges." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="card-elegant">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy text-gold">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-lg text-navy-deep">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid gap-8 md:grid-cols-3 text-center">
          {[
            { k: "5,000+", v: "Happy travellers" },
            { k: "50+", v: "Vehicles in operation" },
            { k: "2", v: "Offices · Mumbai & Ahmedabad" },
          ].map((s) => (
            <div key={s.v} className="card-elegant">
              <div className="font-display text-4xl text-gold-deep">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title={`Travel with ${SITE.name} today`} />
    </>
  );
}
