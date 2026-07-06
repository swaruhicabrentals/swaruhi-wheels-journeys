import { SITE } from "@/lib/site";

const BASE_URL = SITE.url;

const ENTRIES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.6" },
  { path: "/services", changefreq: "monthly", priority: "0.8" },
  { path: "/services/cab-rentals", changefreq: "monthly", priority: "0.9" },
  { path: "/services/tempo-traveller-rentals", changefreq: "monthly", priority: "0.9" },
  { path: "/services/tour-packages", changefreq: "weekly", priority: "0.9" },
  { path: "/mumbai-cab-rentals", changefreq: "monthly", priority: "0.95" },
  { path: "/ahmedabad-cab-rentals", changefreq: "monthly", priority: "0.95" },
  { path: "/fleet", changefreq: "monthly", priority: "0.7" },
  { path: "/why-choose-us", changefreq: "monthly", priority: "0.6" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/faq", changefreq: "monthly", priority: "0.6" },
] as const;

export function GET() {
  const urls = ENTRIES.map((entry) =>
    [
      "  <url>",
      `    <loc>${BASE_URL}${entry.path}</loc>`,
      `    <changefreq>${entry.changefreq}</changefreq>`,
      `    <priority>${entry.priority}</priority>`,
      "  </url>",
    ].join("\n"),
  );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
