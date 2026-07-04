"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Swaruhi Travels home">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy text-gold font-display text-lg">
            S
          </span>
          <span className="font-display text-lg font-semibold text-navy-deep">
            Swaruhi <span className="text-gold-deep">Travels</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.to}
              href={n.to}
              className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-navy-deep hover:bg-muted transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href={SITE.phoneHref} className="btn-gold text-sm">
            <Phone size={16} /> Call Now
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-deep"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-x flex flex-col py-3" aria-label="Mobile">
            {NAV.map((n) => (
              <Link
                key={n.to}
                href={n.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base text-navy-deep border-b border-border/60 last:border-0"
              >
                {n.label}
              </Link>
            ))}
            <a href={SITE.phoneHref} className="btn-gold mt-3 self-start text-sm">
              <Phone size={16} /> {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
