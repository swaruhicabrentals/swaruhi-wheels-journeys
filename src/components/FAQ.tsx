"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 md:px-6 md:py-5"
            >
              <span className="font-medium text-navy-deep">{it.q}</span>
              <ChevronDown
                size={20}
                className={`text-gold-deep transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm text-muted-foreground leading-relaxed">
                {it.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
