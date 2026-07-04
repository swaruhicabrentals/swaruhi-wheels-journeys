"use client";

import { useState } from "react";
import { z } from "zod";
import { SITE } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[+0-9 ()-]{7,20}$/, "Enter a valid phone number"),
  pickup: z.string().trim().min(2, "Enter pickup city").max(60),
  date: z.string().trim().min(1, "Select a date"),
  service: z.string().min(1, "Select a service"),
  passengers: z.string().min(1, "Passengers"),
  message: z.string().trim().max(500).optional(),
});

const services = [
  "Car Rental",
  "Tempo Traveller Rental",
  "Outstation Cab",
  "Airport Transfer",
  "Corporate Travel",
  "Tour Package",
];

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    // Route the inquiry to WhatsApp as a well-formed message.
    const d = parsed.data;
    const text = `New Inquiry — Swaruhi Travels%0A
Name: ${d.name}%0A
Phone: ${d.phone}%0A
Pickup: ${d.pickup}%0A
Date: ${d.date}%0A
Service: ${d.service}%0A
Passengers: ${d.passengers}%0A
Notes: ${d.message ?? "-"}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${text}`, "_blank");
    setSent(true);
    e.currentTarget.reset();
  }

  const grid = compact ? "sm:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-card p-6 md:p-8 shadow-elegant border border-border"
      aria-label="Booking inquiry"
    >
      <div className="flex items-baseline justify-between gap-4 mb-5">
        <h3 className="font-display text-2xl text-navy-deep">Get a quick quote</h3>
        <span className="text-xs text-muted-foreground">Reply in minutes · No obligation</span>
      </div>

      <div className={`grid gap-4 ${grid}`}>
        <Field label="Your name" name="name" placeholder="Full name" error={errors.name} />
        <Field label="Phone" name="phone" placeholder="+91 …" type="tel" error={errors.phone} />
        <Field label="Pickup city" name="pickup" placeholder="Mumbai / Ahmedabad" error={errors.pickup} />
        <Field label="Travel date" name="date" type="date" error={errors.date} />
        <div>
          <Label>Service</Label>
          <select name="service" defaultValue="" className={selectCls}>
            <option value="" disabled>Select a service</option>
            {services.map((s) => <option key={s}>{s}</option>)}
          </select>
          {errors.service && <Err>{errors.service}</Err>}
        </div>
        <div>
          <Label>Passengers</Label>
          <select name="passengers" defaultValue="" className={selectCls}>
            <option value="" disabled>Number of passengers</option>
            {["1-3", "4-6", "7-12", "13-17", "18+"].map((s) => <option key={s}>{s}</option>)}
          </select>
          {errors.passengers && <Err>{errors.passengers}</Err>}
        </div>
        <div className={compact ? "sm:col-span-2" : "md:col-span-2 lg:col-span-3"}>
          <Label>Message (optional)</Label>
          <textarea
            name="message"
            rows={3}
            placeholder="Destinations, itinerary, special requests…"
            className={`${inputCls} resize-none`}
            maxLength={500}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button type="submit" className="btn-gold">Send Inquiry via WhatsApp</button>
        <a href={SITE.phoneHref} className="btn-navy">Or Call {SITE.phone}</a>
        {sent && <span className="text-sm text-green-700">Opening WhatsApp…</span>}
      </div>
    </form>
  );
}

const inputCls =
  "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-navy-deep placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold";
const selectCls = inputCls;

function Label({ children }: { children: React.ReactNode }) {
  return <label className="mb-1.5 block text-xs font-medium text-navy-deep">{children}</label>;
}
function Err({ children }: { children: React.ReactNode }) {
  return <p className="mt-1 text-xs text-destructive">{children}</p>;
}
function Field({
  label, name, placeholder, type = "text", error,
}: { label: string; name: string; placeholder?: string; type?: string; error?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input name={name} type={type} placeholder={placeholder} className={inputCls} />
      {error && <Err>{error}</Err>}
    </div>
  );
}
