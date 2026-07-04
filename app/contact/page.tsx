import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Breadcrumbs, SectionHeader } from "@/components/Section";
import { InquiryForm } from "@/components/InquiryForm";
import { SITE } from "@/lib/site";
import { pageMeta, breadcrumbJsonLd } from "@/lib/seo";

import { makeMetadata } from "@/lib/metadata";

export const metadata: Metadata = makeMetadata({
title: "Contact Swaruhi Travels — Call, WhatsApp or Book Online",
      description:
        "Reach Swaruhi Travels for car rental, Tempo Traveller and tour package bookings in Mumbai and Ahmedabad. Call, WhatsApp or fill our quick inquiry form for a fast quote.",
      path: "/contact",
});

export default function Contact() {
  return (
    <>
      <section className="section-navy py-14">
        <div className="container-x">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
          <h1 className="mt-3 font-display text-4xl md:text-5xl text-cream">Contact Swaruhi Travels</h1>
          <p className="mt-4 max-w-2xl text-cream/80">
            We reply on WhatsApp within minutes. Prefer talking? Call our 24 × 7 booking desk.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <aside>
            <SectionHeader eyebrow="Get in touch" title="We're always a call away" />
            <ul className="mt-6 space-y-4">
              <ContactRow icon={Phone} label="Call">
                <a href={SITE.phoneHref} className="text-navy-deep font-semibold">{SITE.phone}</a>
              </ContactRow>
              <ContactRow icon={MessageCircle} label="WhatsApp">
                <a href={SITE.whatsappHref} target="_blank" rel="noopener" className="text-navy-deep font-semibold">
                  Chat with us
                </a>
              </ContactRow>
              <ContactRow icon={Mail} label="Email">
                <a href={SITE.emailHref} className="text-navy-deep font-semibold">{SITE.email}</a>
              </ContactRow>
              <ContactRow icon={Clock} label="Hours">
                <span>{SITE.hours}</span>
              </ContactRow>
            </ul>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="card-elegant">
                <div className="flex items-center gap-2 text-gold-deep">
                  <MapPin size={16} /> <span className="text-xs font-semibold uppercase tracking-widest">Mumbai</span>
                </div>
                <p className="mt-2 text-sm text-navy-deep">{SITE.addressMumbai}</p>
                <p className="mt-1 text-xs text-muted-foreground">Serving MMR & outstation</p>
              </div>
              <div className="card-elegant">
                <div className="flex items-center gap-2 text-gold-deep">
                  <MapPin size={16} /> <span className="text-xs font-semibold uppercase tracking-widest">Ahmedabad</span>
                </div>
                <p className="mt-2 text-sm text-navy-deep">{SITE.addressAhmedabad}</p>
                <p className="mt-1 text-xs text-muted-foreground">Serving city & outstation Gujarat</p>
              </div>
            </div>
          </aside>

          <InquiryForm />
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon, label, children,
}: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
        <Icon size={18} />
      </span>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-base">{children}</div>
      </div>
    </li>
  );
}
