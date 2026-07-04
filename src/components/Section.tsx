import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function SectionHeader({
  eyebrow, title, description, align = "left",
}: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">{eyebrow}</p>
      )}
      <h2 className={`mt-2 font-display text-3xl md:text-4xl text-navy-deep ${align === "left" ? "gold-underline" : ""}`}>
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export function CtaBand({
  title = "Ready to plan your next journey?",
  subtitle = "Get a transparent quote in minutes — no obligation, no hidden charges.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="section-navy py-16">
      <div className="container-x flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl md:text-3xl text-cream">{title}</h2>
          <p className="mt-2 text-cream/75 max-w-xl">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-gold">
            Get a Quote <ArrowRight size={16} />
          </Link>
          <a href="tel:+919876543210" className="btn-outline-gold">Call Now</a>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap gap-1.5">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden>/</span>}
            {i < items.length - 1 ? (
              <Link to={it.path} className="hover:text-navy-deep">{it.name}</Link>
            ) : (
              <span className="text-navy-deep">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
