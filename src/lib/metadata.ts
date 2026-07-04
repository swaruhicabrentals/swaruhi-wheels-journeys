import type { Metadata } from "next";

import { SITE } from "./site";

export function makeMetadata(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const title = opts.title.includes(SITE.name) ? opts.title : `${opts.title} | ${SITE.name}`;

  return {
    title,
    description: opts.description,
    alternates: {
      canonical: opts.path,
    },
    openGraph: {
      title,
      description: opts.description,
      url: opts.path,
      type: opts.type ?? "website",
      images: opts.image ? [opts.image] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: opts.description,
      images: opts.image ? [opts.image] : undefined,
    },
  };
}
