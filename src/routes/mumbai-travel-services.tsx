import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Plane, Building2, Landmark } from "lucide-react";
import { Breadcrumbs, CtaBand, SectionHeader } from "@/components/Section";
import { InquiryForm } from "@/components/InquiryForm";
import { FAQList } from "@/components/FAQ";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import mumbaiImg from "@/assets/mumbai.jpg";

const faqs = [
  { q: "Which areas in Mumbai do you cover?",
    a: "We cover the entire Mumbai Metropolitan Region — South Mumbai, Bandra, Andheri, Powai, Malad, Borivali, Thane, Navi Mumbai, and airport pickups from Terminal 1 and Terminal 2." },
  { q: "Do you offer Mumbai airport cab service?",
    a: "Yes, we offer 24×7 airport transfers with meet-and-greet on request. Book in advance for guaranteed on-time pickup." },
  { q: "What outstation trips are popular from Mumbai?",
    a: "Pune, Lonavala, Khandala, Nashik, Shirdi, Mahabaleshwar, Alibaug and Goa are our most requested outstation trips from Mumbai." },
  { q: "Can I book a car rental near me in Mumbai for immediate travel?",
    a: "Yes, subject to availability. Call or WhatsApp us with your pickup location and time — most requests are confirmed within minutes." },
];

export const Route = createFileRoute("/mumbai-travel-services")({
  component: Mumbai,
  head: () => ({
    meta: pageMeta({
      title: "Car Rental & Travel Services in Mumbai — Airport, Outstation, Tours",
      description:
        "Swaruhi Travels offers car rental, Tempo Traveller rental, airport transfers and outstation cabs across Mumbai. Serving Andheri, Bandra, South Mumbai, Thane and Navi Mumbai. 24×7 booking.",
      path: "/mumbai-travel-services",
    }),
    links: [{ rel: "canonical", href: "/mumbai-travel-services" }],
    scripts: [
      jsonLdScript(breadcrumbJsonLd([
        { name: "Home", path: "/" }, { name: "Mumbai Travel Services", path: "/mumbai-travel-services" },
      ])),
      jsonLdScript(serviceJsonLd({
        name: "Travel Services in Mumbai",
        description: "Car rental, Tempo Traveller rental and outstation cab service in Mumbai and MMR.",
        areaServed: ["Mumbai"],
      })),
      jsonLdScript(faqJsonLd(faqs)),
    ],
  }),
});

function Mumbai() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={mumbaiImg} alt="Mumbai Marine Drive skyline at night"
            width={1280} height={720} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 to-navy/60" />
        </div>
        <div className="container-x py-16 md:py-20 text-cream">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Mumbai Travel Services", path: "/mumbai-travel-services" }]} />
          <h1 className="mt-3 font-display text-4xl md:text-5xl">Mumbai Travel Services</h1>
          <p className="mt-4 max-w-2xl text-cream/85">
            Reliable car rentals, Tempo Traveller rentals, airport transfers and outstation
            cabs across Mumbai — from South Mumbai and Bandra to Andheri, Thane and Navi Mumbai.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
          <div>
            <SectionHeader eyebrow="Mumbai" title="Your local travel partner in Mumbai" />
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Mumbai runs on time — and so do we. Whether it's an early-morning
              <Link to="/car-rentals" className="text-gold-deep hover:underline mx-1">car rental in Mumbai</Link>
              for a client meeting, a family weekend to Lonavala, or a
              <Link to="/tempo-traveller-rentals" className="text-gold-deep hover:underline mx-1">Tempo Traveller</Link>
              for a wedding baraat, our fleet and drivers are ready across the city.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Plane, t: "Mumbai Airport Transfers", d: "T1 & T2 pickups and drops, 24×7." },
                { icon: Landmark, t: "Local City Rentals", d: "4hr / 8hr / 12hr packages across MMR." },
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

            <h2 className="mt-10 font-display text-2xl text-navy-deep">Areas we serve in Mumbai</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Colaba · Fort · Worli · Lower Parel · Bandra · Khar · Santacruz · Andheri (East/West) ·
              Juhu · Powai · Malad · Borivali · Ghatkopar · Chembur · Thane · Navi Mumbai · Vashi · Panvel
            </p>
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
