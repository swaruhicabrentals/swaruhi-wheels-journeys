import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Car, Bus, Map, ShieldCheck, Clock, IndianRupee,
  Sparkles, Users, Star, Phone, MapPin,
} from "lucide-react";

const heroCar = "/assets/hero-car.jpg";
const tempoImg = "/assets/tempo-traveller.jpg";
const familyImg = "/assets/family-travel.jpg";
const interiorImg = "/assets/interior.jpg";
const mumbaiImg = "/assets/mumbai.jpg";
const ahmedabadImg = "/assets/ahmedabad.jpg";
const innovaImg = "/assets/fleet-innova.jpg";
const sedanImg = "/assets/fleet-sedan.jpg";
const hatchImg = "/assets/fleet-hatchback.jpg";
const lonavalaImg = "/assets/tour-lonavala.jpg";
const statueImg = "/assets/tour-statue-unity.jpg";
const shirdiImg = "/assets/tour-shirdi.jpg";

import { InquiryForm } from "@/components/InquiryForm";
import { CtaBand, SectionHeader } from "@/components/Section";
import { FAQList } from "@/components/FAQ";
import { HOMEPAGE_FAQS, REVIEWS } from "@/lib/content";
import { SITE } from "@/lib/site";
import {
  breadcrumbJsonLd, faqJsonLd, pageMeta, serviceJsonLd,
} from "@/lib/seo";

import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata({
title: `${SITE.name} — Pan-India Cab Rentals, Tempo Traveller & Tour Packages`,
      description:
        "Book reliable cab rentals, Tempo Traveller rentals and curated tour packages across India, coordinated from our Mumbai and Ahmedabad offices. Clean vehicles, experienced drivers, transparent pricing.",
      path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FleetShowcase />
      <PopularTours />
      <CitySections />
      <WhyChoose />
      <Reviews />
      <SafetyComfort />
      <FAQSection />
      <CtaBand />
    </>
  );
}

/* ----------------- Sections ----------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroCar}
          alt="Premium sedan on a scenic Indian highway at golden hour"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/80 to-navy/40" />
      </div>

      <div className="container-x grid gap-10 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-28">
        <div className="text-cream">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-3 py-1 text-xs font-medium text-gold">
            <Sparkles size={14} /> Trusted travel partner since day one
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
            Premium <span className="text-gold">Cab Rentals</span>,
            Tempo Travellers & Tour Packages
          </h1>
          <p className="mt-5 max-w-xl text-base md:text-lg text-cream/85 leading-relaxed">
            Chauffeur-driven journeys across India, coordinated from our Mumbai and Ahmedabad offices. Clean vehicles,
            experienced drivers, transparent pricing — every single ride.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={SITE.phoneHref} className="btn-gold">
              <Phone size={16} /> Call {SITE.phone}
            </a>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener" className="btn-outline-gold">
              WhatsApp Us
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[
              { icon: ShieldCheck, label: "Verified drivers" },
              { icon: Clock, label: "24 × 7 support" },
              { icon: IndianRupee, label: "Transparent pricing" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-cream/85">
                <Icon size={18} className="text-gold" /> {label}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <InquiryForm compact />
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  const services = [
    {
      icon: Car,
      title: "Cab Rentals",
      desc: "Hatchbacks, sedans and SUVs on hourly, daily and outstation packages with a driver.",
      to: "/cab-rentals",
    },
    {
      icon: Bus,
      title: "Tempo Traveller Rentals",
      desc: "12- and 17-seater Tempo Travellers for weddings, group tours and corporate travel.",
      to: "/tempo-traveller-rentals",
    },
    {
      icon: Map,
      title: "Tour Packages",
      desc: "Curated single-day and multi-day packages across India, with strong Mumbai and Ahmedabad coverage.",
      to: "/tour-packages",
    },
  ];
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our Services"
          title="Travel your way — city, outstation or full tour"
          description="Three focused services, one dependable team. Every trip includes a trained driver, fuel-clean vehicle and door-to-door pickup."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, to }) => (
            <Link key={title} href={to} className="card-elegant block group">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
                <Icon size={22} />
              </span>
              <h3 className="mt-4 font-display text-xl text-navy-deep">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-deep">
                Get Quote <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FleetShowcase() {
  const fleet = [
    { name: "Hatchback", pax: "4", img: hatchImg, alt: "White hatchback rental car" },
    { name: "Premium Sedan", pax: "4", img: sedanImg, alt: "White premium sedan for airport transfer" },
    { name: "SUV / Innova", pax: "6-7", img: innovaImg, alt: "Silver Toyota Innova SUV for family trips" },
    { name: "Tempo Traveller", pax: "12-17", img: tempoImg, alt: "White Tempo Traveller for group tours" },
  ];
  return (
    <section className="bg-muted/50 py-16 md:py-20">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader eyebrow="Our Fleet" title="Clean, comfortable, well-maintained" />
          <Link href="/fleet" className="btn-outline-gold text-sm">View full fleet</Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((f) => (
            <article key={f.name} className="card-elegant p-0 overflow-hidden">
              <Image
                src={f.img}
                alt={f.alt}
                loading="lazy"
                width={1024}
                height={704}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-display text-lg text-navy-deep">{f.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Users size={14} /> Up to {f.pax} passengers
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularTours() {
  const tours = [
    { title: "Mumbai to Lonavala & Khandala", duration: "1-2 Days", img: lonavalaImg, alt: "Green Lonavala valley with winding road", to: "/tour-packages" },
    { title: "Mumbai to Shirdi Sai Baba", duration: "1-2 Days", img: shirdiImg, alt: "Shirdi Sai Baba temple at sunset", to: "/tour-packages" },
    { title: "Ahmedabad to Statue of Unity", duration: "1 Day", img: statueImg, alt: "Statue of Unity aerial view at golden hour", to: "/tour-packages" },
  ];
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader eyebrow="Popular Tour Packages" title="Handpicked getaways across India" />
          <Link href="/tour-packages" className="btn-outline-gold text-sm">All packages</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tours.map((t) => (
            <article key={t.title} className="card-elegant p-0 overflow-hidden">
              <Image
                src={t.img}
                alt={t.alt}
                loading="lazy"
                width={1024}
                height={704}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-deep">{t.duration}</p>
                <h3 className="mt-2 font-display text-xl text-navy-deep">{t.title}</h3>
                <Link href={t.to} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-deep hover:text-gold-deep">
                  View package <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CitySections() {
  const cities = [
    {
      name: "Mumbai",
      img: mumbaiImg,
      alt: "Mumbai Marine Drive skyline at night",
      to: "/mumbai-travel-services",
      text: "Our Mumbai office coordinates airport transfers, outstation cabs, Tempo Travellers and pan-India tour movements.",
    },
    {
      name: "Ahmedabad",
      img: ahmedabadImg,
      alt: "Ahmedabad Sabarmati riverfront illuminated at dusk",
      to: "/ahmedabad-travel-services",
      text: "Our Ahmedabad office supports Gujarat routes, corporate travel, group tours and long-distance cab rentals across India.",
    },
  ];
  return (
    <section className="section-navy py-16 md:py-20">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Our Offices</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl text-cream gold-underline">
            Pan-India service from Mumbai & Ahmedabad offices
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cities.map((c) => (
            <Link key={c.name} href={c.to} className="group relative overflow-hidden rounded-2xl">
              <Image
                src={c.img}
                alt={c.alt}
                loading="lazy"
                width={1280}
                height={720}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-widest">
                  <MapPin size={14} /> {c.name}
                </div>
                <h3 className="mt-1 font-display text-2xl text-cream">{c.name} Office</h3>
                <p className="mt-2 text-sm text-cream/80 max-w-md">{c.text}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                  Explore {c.name} services <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    { icon: ShieldCheck, title: "Verified, uniformed drivers", desc: "Background-checked, well-trained, courteous chauffeurs on every ride." },
    { icon: Sparkles, title: "Sanitised, well-kept vehicles", desc: "Every car and Tempo Traveller is cleaned, serviced and inspected before dispatch." },
    { icon: IndianRupee, title: "Transparent, upfront pricing", desc: "Itemised quotes with no hidden charges — pay only for what you booked." },
    { icon: Clock, title: "On-time, 24 × 7 availability", desc: "Round-the-clock booking desk and airport pickups on the dot." },
  ];
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Safe, reliable and genuinely premium travel"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-elegant">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy text-gold">
                <Icon size={22} />
              </span>
              <h3 className="mt-4 font-display text-lg text-navy-deep">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-muted/50 py-16 md:py-20">
      <div className="container-x">
        <SectionHeader eyebrow="Traveller Reviews" title="Loved by families, tourists & corporates" align="center" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="card-elegant">
              <div className="flex gap-0.5 text-gold-deep">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <blockquote className="mt-3 text-sm text-navy-deep leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-4 text-xs font-semibold text-muted-foreground">
                — {r.name}, {r.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function SafetyComfort() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x grid gap-10 lg:grid-cols-2 items-center">
        <div className="relative">
          <Image
            src={interiorImg}
            alt="Premium clean interior of an SUV with leather seats and open road view"
            loading="lazy"
            width={1280}
            height={800}
            className="rounded-2xl object-cover shadow-elegant"
          />
          <Image
            src={familyImg}
            alt="Family loading luggage for a road trip"
            loading="lazy"
            width={1280}
            height={800}
            className="absolute -bottom-8 -right-4 hidden md:block h-40 w-56 rounded-2xl object-cover shadow-elegant border-4 border-background"
          />
        </div>
        <div>
          <SectionHeader
            eyebrow="Safety & Comfort"
            title="Every ride, engineered for peace of mind"
            description="From live trip tracking to sanitised interiors and rested drivers, we design our operations around your safety. Ideal for families, senior citizens, women travellers and corporate teams."
          />
          <ul className="mt-6 space-y-3 text-sm text-navy-deep">
            {[
              "GPS-tracked vehicles with 24 × 7 backend monitoring",
              "First-aid kit, seat belts and child-friendly seating on request",
              "Trained, well-rested drivers with local & outstation experience",
              "Regular vehicle service, deep-cleaning and safety inspections",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <ShieldCheck size={18} className="text-gold-deep mt-0.5" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <a href={SITE.phoneHref} className="btn-navy">Call to book</a>
            <Link href="/why-choose-us" className="btn-outline-gold">Why Choose Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="bg-muted/50 py-16 md:py-20">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeader
          eyebrow="FAQs"
          title="Answers before you book"
          description="Quick answers to the questions travellers ask us most. Still unsure? Just call or WhatsApp our team."
        />
        <FAQList items={HOMEPAGE_FAQS} />
      </div>
    </section>
  );
}
