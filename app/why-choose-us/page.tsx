import type { Metadata } from "next";
import { ShieldCheck, Clock, IndianRupee, Sparkles, Users, Award, HeartHandshake, MapPin } from "lucide-react";
import { Breadcrumbs, CtaBand, SectionHeader } from "@/components/Section";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";

import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata({
title: "Why Choose Swaruhi Travels - Safe, Reliable & Premium Travel",
      description:
        "Verified drivers, well-maintained vehicles, transparent pricing and 24×7 support - see why families, tourists and corporates choose Swaruhi Travels for pan-India travel.",
      path: "/why-choose-us",
});

const items = [
  { icon: ShieldCheck, t: "Verified & trained drivers", d: "Background-checked, uniformed and courteous chauffeurs." },
  { icon: Sparkles, t: "Sanitised, well-kept vehicles", d: "Deep-cleaning and safety checks before every dispatch." },
  { icon: IndianRupee, t: "Transparent pricing", d: "Itemised quotes with no last-minute surcharges." },
  { icon: Clock, t: "24 × 7 availability", d: "Round-the-clock booking and airport pickups." },
  { icon: Users, t: "Family & group friendly", d: "Child-friendly seating, group-sized Tempo Travellers." },
  { icon: Award, t: "Premium experience", d: "Clean interiors, punctuality, service you can trust." },
  { icon: HeartHandshake, t: "Personal support", d: "Real people on WhatsApp and phone, not chatbots." },
  { icon: MapPin, t: "Deep local expertise", d: "Native knowledge of Mumbai, Ahmedabad and top routes." },
];

export default function Why() {
  return (
    <>
      <section className="section-navy py-14">
        <div className="container-x">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Why Choose Us", path: "/why-choose-us" }]} />
          <h1 className="mt-3 font-display text-4xl md:text-5xl text-cream">Why Choose Swaruhi Travels</h1>
          <p className="mt-4 max-w-2xl text-cream/80">
            We combine premium service with dependable operations so your family, guests
            and team travel safely - every single time.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          <SectionHeader eyebrow="Our Promise" title="Eight reasons travellers choose us" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map(({ icon: Icon, t, d }) => (
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

      <CtaBand />
    </>
  );
}
