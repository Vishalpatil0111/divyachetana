import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/events")({
  component: EventsPage,
  head: () => ({
    meta: [
      { title: "Events & Articles — Divya Chetna Foundation" },
      { name: "description", content: "Book distributions, festivals, and the moments that bring our community together." },
      { property: "og:title", content: "Events & Articles — Divya Chetna Foundation" },
      { property: "og:description", content: "Highlights from our work across Nashik since 2021." },
    ],
  }),
});

const events = [
  { title: "Ravindra Vidyalay Book Distribution", day: "15", mon: "Aug", year: "2022", body: "Distributed school books and stationery kits to over 80 students starting their new academic year." },
  { title: "Diwali Celebration — Roongta Highschool", day: "21", mon: "Nov", year: "2021", body: "Sweets, lights, and laughter — a small Diwali gathering for the children we support." },
  { title: "Divya Chetna Foundation — Inception", day: "15", mon: "Aug", year: "2021", body: "On Independence Day, we publicly launched the foundation and our first cohort of supported students." },
];

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="From the ground"
        title="Events & articles."
        description="A running log of the work — book drives, festivals, and the small ceremonies that mean everything."
      />
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((e) => (
          <article key={e.title} className="group rounded-3xl border border-border bg-card overflow-hidden hover:-translate-y-1 transition-transform">
            <div className="relative aspect-[4/3]" style={{ background: "var(--gradient-warm)" }}>
              <div className="absolute top-4 left-4 bg-background rounded-2xl px-3 py-2 text-center shadow-sm">
                <div className="text-2xl font-semibold leading-none">{e.day}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{e.mon} {e.year}</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg leading-snug group-hover:text-primary transition">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.body}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}