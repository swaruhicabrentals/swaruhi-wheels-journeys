import { SITE } from "./site";

type MetaEntry =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string }
  | { charSet: string };

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): MetaEntry[] {
  const { title, description, path, image, type = "website" } = opts;
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  const meta: MetaEntry[] = [
    { title: fullTitle },
    { name: "description", content: description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: path },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
  ];
  if (image) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }
  return meta;
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    name: SITE.name,
    description: SITE.description,
    telephone: SITE.phone,
    email: SITE.email,
    url: "/",
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Ahmedabad" },
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: SITE.addressMumbai,
        addressLocality: "Mumbai",
        addressRegion: "MH",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: SITE.addressAhmedabad,
        addressLocality: "Ahmedabad",
        addressRegion: "GJ",
        addressCountry: "IN",
      },
    ],
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "₹₹",
    sameAs: [],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.path,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    provider: { "@type": "TravelAgency", name: SITE.name, telephone: SITE.phone },
    areaServed: (opts.areaServed ?? ["Mumbai", "Ahmedabad"]).map((c) => ({
      "@type": "City",
      name: c,
    })),
    description: opts.description,
  };
}

export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(data),
  };
}
