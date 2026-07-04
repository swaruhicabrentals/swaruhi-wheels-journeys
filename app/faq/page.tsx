import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, SectionHeader } from "@/components/Section";
import { FAQList } from "@/components/FAQ";
import { HOMEPAGE_FAQS } from "@/lib/content";
import { pageMeta, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

const extra = [
  { q: "Do you charge extra for night driving?",
    a: "Outstation trips include a small night-driving allowance for trips extending past 10 PM, always shared upfront in the quote." },
  { q: "What is your cancellation policy?",
    a: "Cancellations made 24+ hours before pickup are free. Late cancellations may incur a small fee depending on vehicle type." },
  { q: "Do you accept online payments?",
    a: "Yes — UPI, bank transfer, cards and cash are accepted. For corporate clients we offer monthly invoicing." },
  { q: "Can I request a specific driver?",
    a: "Regular clients often have preferred drivers. Mention your preference at booking and we'll assign them if available." },
  { q: "Are your drivers familiar with outstation routes?",
    a: "Yes. Our drivers regularly cover Mumbai-Pune, Mumbai-Shirdi, Ahmedabad-Statue of Unity, Ahmedabad-Dwarka and other popular routes." },
];

const ALL = [...HOMEPAGE_FAQS, ...extra];

import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata({
title: "FAQs — Car Rental, Tempo Traveller & Tour Package Questions",
      description:
        "Answers to common questions about Swaruhi Travels — pricing, drivers, cancellation, outstation routes, corporate cabs and more for Mumbai and Ahmedabad travellers.",
      path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <section className="section-navy py-14">
        <div className="container-x">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]} />
          <h1 className="mt-3 font-display text-4xl md:text-5xl text-cream">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-2xl text-cream/80">
            Everything you need to know before booking a cab, Tempo Traveller or tour with Swaruhi Travels.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          <SectionHeader eyebrow="FAQs" title="All your questions, answered" />
          <div className="mt-8"><FAQList items={ALL} /></div>
        </div>
      </section>

      <CtaBand title="Still have a question?" subtitle="Our team is on WhatsApp and phone, 24 × 7." />
    </>
  );
}
