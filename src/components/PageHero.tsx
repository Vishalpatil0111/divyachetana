import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({ title, eyebrow, description }: { title: string; eyebrow?: string; description?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-warm)" }} />
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        {eyebrow && (
          <span className="text-xs font-medium uppercase tracking-widest text-primary">{eyebrow}</span>
        )}
        <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-[1.05] max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">{description}</p>
        )}
        <nav className="mt-6 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{title}</span>
        </nav>
      </div>
    </section>
  );
}