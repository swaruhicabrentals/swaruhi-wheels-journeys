import { ChevronDown } from "lucide-react";

export function FAQList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((it, i) => (
        <details key={it.q} className="group" open={i === 0}>
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5 [&::-webkit-details-marker]:hidden">
            <span className="font-medium text-navy-deep">{it.q}</span>
            <ChevronDown
              size={20}
              aria-hidden="true"
              className="shrink-0 text-gold-deep transition-transform group-open:rotate-180"
            />
          </summary>
          <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground md:px-6 md:pb-6">
            {it.a}
          </div>
        </details>
      ))}
    </div>
  );
}
