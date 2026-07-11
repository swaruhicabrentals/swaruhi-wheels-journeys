import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Car, Bus, Map, ShieldCheck, Clock, IndianRupee,
  Sparkles, Users, Star, Phone, MapPin, ExternalLink,
} from "lucide-react";

const heroCar = "/assets/hero-car.jpg";
const tempoImg = "/assets/swaruhi-travels-vehicle-fleet-tempo-traveller.webp";
const familyImg = "/assets/family-travel.jpg";
const interiorImg = "/assets/interior.jpg";
const mumbaiImg = "/assets/swaruhi-travels-mumbai-office-bandra-worli-sea-link.webp";
const ahmedabadImg = "/assets/swaruhi-travels-ahmedabad-office-riverfront.webp";
const innovaImg = "/assets/swaruhi-travels-vehicle-fleet-innova-crysta.webp";
const dzireImg = "/assets/swaruhi-travels-vehicle-fleet-dzire.webp";
const ertigaImg = "/assets/swaruhi-travels-vehicle-fleet-ertiga.webp";
const urbaniaImg = "/assets/swaruhi-travels-vehicle-fleet-urbania.webp";
const lonavalaImg = "/assets/swaruhi-travels-tour-package-lonavala.webp";
const statueImg = "/assets/swaruhi-travels-tour-package-statue-of-unity.webp";
const dwarkaImg = "/assets/swaruhi-travels-tour-package-dwarka.webp";
const somnathImg = "/assets/swaruhi-travels-tour-package-somnath.webp";
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
title: `${SITE.name}: Cab Rentals, Tempo Traveller and Tour Packages Across India`,
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
      <GoogleBusinessTrust />
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
            Chauffeur driven journeys across India, coordinated from our Mumbai and Ahmedabad offices. Clean vehicles,
            experienced drivers, transparent pricing for every single ride.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={SITE.phoneHref} className="btn-gold">
              <Phone size={16} /> Call {SITE.phone}
            </a>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener" className="btn-outline-gold">
              WhatsApp Us
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-2 md:grid-cols-2 gap-4 text-sm">
            {[
              { icon: ShieldCheck, label: "Verified drivers" },
              { icon: Clock, label: "24 x 7 support" },
              { icon: IndianRupee, label: "Transparent pricing" },
              { icon: Sparkles, label: "Well Maintained Cars" },
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
      desc: "Dzire, Ertiga and Innova Crysta for hourly, daily and outstation packages with a driver.",
      to: "/services/cab-rentals",
    },
    {
      icon: Bus,
      title: "Tempo Traveller / Urbania Rentals",
      desc: "Tempo Travellers and Urbania for weddings, group tours and corporate travel.",
      to: "/services/tempo-traveller-rentals",
    },
    {
      icon: Map,
      title: "Tour Packages",
      desc: "Curated one day and multi day packages across India, with strong Mumbai and Ahmedabad coverage.",
      to: "/services/tour-packages",
    },
  ];
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our Services"
          title="Travel your way across city, outstation or full tour routes"
          description="Three focused services, one dependable team. Every trip includes a trained driver, clean vehicle and pickup from your doorstep."
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
    { name: "Dzire", pax: "4", img: dzireImg, alt: "White Maruti Suzuki Dzire cab for city and outstation travel" },
    { name: "Ertiga", pax: "6", img: ertigaImg, alt: "White Maruti Suzuki Ertiga cab for family trips" },
    { name: "Innova Crysta", pax: "6 to 7", img: innovaImg, alt: "White Toyota Innova Crysta cab for family trips" },
    { name: "Tempo Traveller", pax: "13-26", img: tempoImg, alt: "White Tempo Traveller for group tours" },
    { name: "Urbania", pax: "9-17", img: urbaniaImg, alt: "Force Urbania premium traveller for group tours" },
  ];
  return (
    <section className="bg-muted/50 py-16 md:py-20">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader eyebrow="Vehicle Category" title="Clean, comfortable and well maintained" />
          <Link href="/fleet" className="btn-outline-gold text-sm">View vehicle category</Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
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
                  <Users size={14} /> Upto {f.pax} passengers
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
    { title: "Mumbai to Lonavala", img: lonavalaImg, alt: "Green Lonavala valley with winding road", to: "/services/tour-packages" },
    { title: "Ahmedabad to Somnath", img: somnathImg, alt: "Somnath temple tour from Ahmedabad", to: "/services/tour-packages" },
    { title: "Ahmedabad to Dwarka", img: dwarkaImg, alt: "Dwarka tour from Ahmedabad", to: "/services/tour-packages" },
  ];
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader eyebrow="Popular Tour Packages" title="Handpicked getaways across India" />
          <Link href="/services/tour-packages" className="btn-outline-gold text-sm">All packages</Link>
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
                <h3 className="font-display text-xl text-navy-deep">{t.title}</h3>
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
      alt: "Mumbai Bandra Worli Sea Link and skyline",
      to: "/mumbai-cab-rentals",
      text: "Our Mumbai office coordinates airport transfers, outstation cabs, Tempo Travellers and tour movements across India.",
    },
    {
      name: "Ahmedabad",
      img: ahmedabadImg,
      alt: "Ahmedabad Sabarmati riverfront at night",
      to: "/ahmedabad-cab-rentals",
      text: "Our Ahmedabad office supports Gujarat routes, corporate travel, group tours and long distance cab rentals across India.",
    },
  ];
  return (
    <section className="section-navy py-16 md:py-20">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Our Offices</p>
          <h2 className="mt-2 font-display text-3xl md:text-4xl text-cream gold-underline">
            Service across India from Mumbai & Ahmedabad offices
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
    { icon: ShieldCheck, title: "Verified Drivers", desc: "Background checked, trained and courteous chauffeurs on every ride." },
    { icon: Sparkles, title: "Well Maintained Vehicles", desc: "Every car and Tempo Traveller is cleaned, serviced and inspected before dispatch." },
    { icon: IndianRupee, title: "Transparent, upfront pricing", desc: "Itemised quotes with no hidden charges, so you pay only for what you booked." },
    { icon: Clock, title: "Punctual, 24 × 7 availability", desc: "A booking desk available all day and airport pickups on the dot." },
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
                {r.name}, {r.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function GoogleBusinessTrust() {
  const gallery = [
    { src: innovaImg, alt: "Innova cab for family and outstation travel", label: "SUV / Innova" },
    { src: tempoImg, alt: "Tempo Traveller for group tours and events", label: "Tempo Traveller" },
    { src: interiorImg, alt: "Clean vehicle interior for comfortable travel", label: "Clean interiors" },
    { src: familyImg, alt: "Family preparing for a trip with a chauffeur", label: "Family trips" },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.35fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Google Reviews"
              title="Read customer reviews on Google"
              description="Our Google Business Profile has the live rating, latest reviews, customer photos and directions. Open it to verify current review count before booking."
            />
            <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-elegant">
              <div className="flex items-center gap-1 text-gold-deep" aria-label="Google review rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <h3 className="mt-3 font-display text-2xl text-navy-deep">Live Google rating</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                See the current rating and real customer reviews directly on our Google Business Profile.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={SITE.googleBusinessHref} target="_blank" rel="noopener" className="btn-navy">
                  Read Google reviews <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="card-elegant">
                <div className="flex items-center gap-2 text-gold-deep">
                  <MapPin size={16} />
                  <span className="text-xs font-semibold uppercase tracking-widest">Mumbai Office</span>
                </div>
                <p className="mt-2 text-sm text-navy-deep">{SITE.addressMumbai}</p>
                <a href={SITE.phoneHref} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep">
                  <Phone size={14} /> {SITE.phone}
                </a>
              </div>
              <div className="card-elegant">
                <div className="flex items-center gap-2 text-gold-deep">
                  <MapPin size={16} />
                  <span className="text-xs font-semibold uppercase tracking-widest">Ahmedabad Office</span>
                </div>
                <p className="mt-2 text-sm text-navy-deep">{SITE.addressAhmedabad}</p>
                <p className="mt-3 text-sm font-semibold text-gold-deep">{SITE.hours}</p>
              </div>
            </div>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {gallery.map((item) => (
                <figure key={item.label} className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={900}
                    height={640}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <figcaption className="px-4 py-3 text-sm font-semibold text-navy-deep">
                    {item.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
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
        </div>
        <div>
          <SectionHeader
            eyebrow="Safety & Comfort"
            title="Every ride, engineered for peace of mind"
            description="From live trip tracking to sanitised interiors and rested drivers, we design our operations around your safety. Ideal for families, senior citizens, women travellers and corporate teams."
          />
          <ul className="mt-6 space-y-3 text-sm text-navy-deep">
            {[
              "First aid kit, seat belts and child friendly seating on request",
              "Trained and rested drivers with local & outstation experience",
              "Regular vehicle service, deep cleaning and safety inspections",
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
