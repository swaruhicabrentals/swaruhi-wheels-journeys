import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs, CtaBand, SectionHeader } from "@/components/Section";
import { TOUR_PACKAGES } from "@/lib/content";
import { pageMeta, jsonLdScript, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";
import lonavalaImg from "@/assets/tour-lonavala.jpg";
import shirdiImg from "@/assets/tour-shirdi.jpg";
import statueImg from "@/assets/tour-statue-unity.jpg";
import { InquiryForm } from "@/components/InquiryForm";

const IMG: Record<string, string> = {
  lonavala: lonavalaImg, shirdi: shirdiImg, "statue-unity": statueImg,
};

export const Route = createFileRoute("/tour-packages")({
  component: Tours,
  head: () => ({
    meta: pageMeta({
      title: "Tour Packages from Mumbai & Ahmedabad — Family, Weekend & Pilgrimage Tours",
      description:
        "Curated tour packages from Mumbai and Ahmedabad by Swaruhi Travels. Lonavala, Shirdi, Mahabaleshwar, Statue of Unity, Saputara, Dwarka & more — with vehicle, driver and itinerary planning.",
      path: "/tour-packages",
    }),
    links: [{ rel: "canonical", href: "/tour-packages" }],
    scripts: [
      jsonLdScript(breadcrumbJsonLd([
        { name: "Home", path: "/" }, { name: "Tour Packages", path: "/tour-packages" },
      ])),
      jsonLdScript(serviceJsonLd({
        name: "Tour Packages",
        description: "Custom and pre-designed tour packages from Mumbai and Ahmedabad including car and driver.",
      })),
    ],
  }),
});

function Tours() {
  const mumbai = TOUR_PACKAGES.filter((t) => t.from === "Mumbai");
  const ahmedabad = TOUR_PACKAGES.filter((t) => t.from === "Ahmedabad");

  return (
    <>
      <section className="section-navy py-14">
        <div className="container-x">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Tour Packages", path: "/tour-packages" }]} />
          <h1 className="mt-3 font-display text-4xl md:text-5xl text-cream">
            Tour Packages from Mumbai & Ahmedabad
          </h1>
          <p className="mt-4 max-w-2xl text-cream/80">
            Weekend getaways, pilgrimage tours and family holidays — designed and driven
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
              Tell us the destination, dates and group size — we'll craft a custom itinerary
              with the right vehicle, comfortable stops and transparent pricing. Popular
              custom requests include Konkan beaches, Rajasthan road trips, Kerala circuits
              and multi-city Gujarat tours.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/contact" className="btn-navy">Plan my tour</Link>
              <Link to="/tempo-traveller-rentals" className="btn-outline-gold">Group vehicles</Link>
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
              <img
                src={IMG[t.image] ?? lonavalaImg}
                alt={t.title}
                loading="lazy" width={1024} height={704}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-deep">{t.duration}</p>
                <h3 className="mt-1 font-display text-lg text-navy-deep">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Highlights: {t.highlights}</p>
                <Link to="/contact" className="mt-4 inline-flex btn-outline-gold text-sm">Get Quote</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
