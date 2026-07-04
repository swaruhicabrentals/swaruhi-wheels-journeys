import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Plane, Building2, Landmark } from "lucide-react";
import { Breadcrumbs, CtaBand, SectionHeader } from "@/components/Section";
import { InquiryForm } from "@/components/InquiryForm";
import { FAQList } from "@/components/FAQ";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import ahmedabadImg from "@/assets/ahmedabad.jpg";

const faqs = [
  { q: "Which areas in Ahmedabad do you cover?",
    a: "We cover all of Ahmedabad including SG Highway, Bopal, Bodakdev, Prahlad Nagar, Vastrapur, Maninagar, Naranpura, and Sardar Vallabhbhai Patel International Airport pickups." },
  { q: "What tours are popular from Ahmedabad?",
    a: "Statue of Unity, Saputara, Dwarka, Somnath, Mount Abu, Udaipur and Kutch are the most-booked tours from Ahmedabad." },
  { q: "Do you offer Ahmedabad airport cab service?",
    a: "Yes — 24×7 pickup and drop from SVPI Airport with real-time flight tracking on request." },
  { q: "Is Tempo Traveller available for large family tours from Ahmedabad?",
    a: "Absolutely. Our 12 and 17-seater Tempo Travellers are popular for Somnath-Dwarka circuits, Statue of Unity family trips and wedding transport." },
];

export const Route = createFileRoute("/ahmedabad-travel-services")({
  component: Ahmedabad,
  head: () => ({
    meta: pageMeta({
      title: "Car Rental & Travel Services in Ahmedabad — Airport, Outstation, Tours",
      description:
        "Swaruhi Travels offers car rental, Tempo Traveller rental, airport transfers and outstation cabs across Ahmedabad. Statue of Unity, Somnath, Dwarka & Saputara tours. 24×7 booking.",
      path: "/ahmedabad-travel-services",
    }),
    links: [{ rel: "canonical", href: "/ahmedabad-travel-services" }],
    scripts: [
      jsonLdScript(breadcrumbJsonLd([
        { name: "Home", path: "/" }, { name: "Ahmedabad Travel Services", path: "/ahmedabad-travel-services" },
      ])),
      jsonLdScript(serviceJsonLd({
        name: "Travel Services in Ahmedabad",
        description: "Car rental, Tempo Traveller rental and outstation cab service in Ahmedabad.",
        areaServed: ["Ahmedabad"],
      })),
      jsonLdScript(faqJsonLd(faqs)),
    ],
  }),
});

function Ahmedabad() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={ahmedabadImg} alt="Ahmedabad Sabarmati riverfront at dusk"
            width={1280} height={720} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 to-navy/60" />
        </div>
        <div className="container-x py-16 md:py-20 text-cream">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Ahmedabad Travel Services", path: "/ahmedabad-travel-services" }]} />
          <h1 className="mt-3 font-display text-4xl md:text-5xl">Ahmedabad Travel Services</h1>
          <p className="mt-4 max-w-2xl text-cream/85">
            Chauffeur-driven car rentals, Tempo Travellers and curated tour packages
            across Ahmedabad — SG Highway to Sabarmati, plus outstation trips to
            Statue of Unity, Somnath and Dwarka.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
          <div>
            <SectionHeader eyebrow="Ahmedabad" title="Trusted travel partner across Ahmedabad" />
            <p className="mt-5 text-muted-foreground leading-relaxed">
              For business travel across SG Highway and Prahlad Nagar, family day-trips
              to the Statue of Unity, or multi-day
              <Link to="/tour-packages" className="text-gold-deep hover:underline mx-1">Gujarat tour packages</Link>,
              Swaruhi Travels offers a fleet and drivers you can rely on. Book a
              <Link to="/car-rentals" className="text-gold-deep hover:underline mx-1">car rental in Ahmedabad</Link>
              or a group
              <Link to="/tempo-traveller-rentals" className="text-gold-deep hover:underline mx-1">Tempo Traveller</Link>
              in a few taps.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Plane, t: "SVPI Airport Transfers", d: "24×7 pickup with flight tracking." },
                { icon: Landmark, t: "City Day Rentals", d: "Hourly & full-day chauffeur cabs." },
                { icon: MapPin, t: "Outstation Cabs", d: "Statue of Unity, Somnath, Dwarka, Mount Abu." },
                { icon: Building2, t: "Corporate Travel", d: "Employee transport & executive rides." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="card-elegant">
                  <Icon className="text-gold-deep" />
                  <h3 className="mt-3 font-display text-lg text-navy-deep">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 font-display text-2xl text-navy-deep">Areas we serve in Ahmedabad</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              SG Highway · Bopal · Bodakdev · Thaltej · Prahlad Nagar · Vastrapur · Satellite ·
              Navrangpura · Naranpura · CG Road · Ashram Road · Maninagar · Chandkheda · Gandhinagar
            </p>
          </div>

          <InquiryForm compact />
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container-x">
          <SectionHeader eyebrow="Ahmedabad FAQs" title="What Ahmedabad travellers ask us" />
          <div className="mt-8"><FAQList items={faqs} /></div>
        </div>
      </section>

      <CtaBand title="Book an Ahmedabad cab now" />
    </>
  );
}
