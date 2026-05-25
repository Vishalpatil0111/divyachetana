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

const articles = [
  { title: "Why education can't wait", body: "Every month a child stays out of school the gap widens. Here's how a small, consistent contribution closes it." },
  { title: "From loss to learning", body: "Stories of the families we walk alongside — counselling, tuition, and a quiet hand on the shoulder." },
  { title: "Skilling the surviving parent", body: "We help mothers and fathers learn a trade so the household can stand on its own two feet again." },
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
        {events.map((e, i) => (
          <article
            key={e.title}
            className={`group rounded-3xl border border-border bg-card overflow-hidden hover-lift hover:shadow-md animate-fade-up delay-${(i % 3) * 100 + 100}`}
          >
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
      <section className="bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Articles</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">From our notebook.</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <div
                key={a.title}
                className={`rounded-2xl border border-border bg-background p-7 hover-lift animate-fade-up delay-${(i % 3) * 100 + 100}`}
              >
                <h3 className="font-semibold text-lg">{a.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}