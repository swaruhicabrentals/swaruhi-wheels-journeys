import { SITE } from "./site";

type MetaEntry =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string }
  | { charSet: string };

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

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
    { property: "og:url", content: absoluteUrl(path) },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
  ];
  if (image) {
    meta.push({ property: "og:image", content: absoluteUrl(image) });
    meta.push({ name: "twitter:image", content: absoluteUrl(image) });
  }
  return meta;
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoRental", "TravelAgency", "LocalBusiness"],
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    description: SITE.description,
    telephone: SITE.phone,
    email: SITE.email,
    url: SITE.url,
    areaServed: [
      { "@type": "Country", name: "India" },
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
    priceRange: "INR",
    sameAs: [SITE.googleBusinessHref],
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
      item: absoluteUrl(it.path),
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
    provider: {
      "@type": ["AutoRental", "TravelAgency"],
      "@id": `${SITE.url}/#business`,
      name: SITE.name,
      telephone: SITE.phone,
    },
    areaServed: (opts.areaServed ?? ["India", "Mumbai", "Ahmedabad"]).map((c) => ({
      "@type": c === "India" ? "Country" : "City",
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
