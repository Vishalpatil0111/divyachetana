import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Play } from "lucide-react";

export const Route = createFileRoute("/events")({
  component: EventsPage,
  head: () => ({
    meta: [
      { title: "Stories & Gallery — Divyachetana Foundation" },
      { name: "description", content: "Events, films, articles and moments from our work across Nashik since 2021." },
      { property: "og:title", content: "Stories & Gallery — Divyachetana Foundation" },
      { property: "og:description", content: "A visual and written diary from the field." },
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

const videos = [
  { title: "Republic Day — 2021", url: "https://www.youtube.com/watch?v=KsYNMTXTZo4", caption: "Republic Day with the children we support." },
  { title: "Every Child Has a Story", url: "https://www.youtube.com/watch?v=x2LFad5jEnY", caption: "Motivating every child — Lost & Found Foundation." },
  { title: "Children Awarded for Achievements", url: "https://www.youtube.com/", caption: "Celebrating wins, big and small." },
];

const tiles = [
  { c: "from-orange-200 to-amber-100", h: "tall" },
  { c: "from-rose-200 to-orange-100", h: "short" },
  { c: "from-amber-200 to-yellow-100", h: "short" },
  { c: "from-orange-100 to-rose-200", h: "tall" },
  { c: "from-yellow-200 to-orange-200", h: "short" },
  { c: "from-rose-100 to-amber-200", h: "tall" },
  { c: "from-amber-100 to-orange-300", h: "short" },
  { c: "from-orange-200 to-rose-100", h: "tall" },
  { c: "from-rose-200 to-amber-200", h: "short" },
] as const;

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="From the ground"
        title="Stories & gallery."
        description="Events, films, articles and moments from the field — a running diary of the work and the people behind it."
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
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Watch</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Films from the field.</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <a
                key={v.title}
                href={v.url}
                target="_blank"
                rel="noreferrer"
                className={`group rounded-3xl border border-border bg-background overflow-hidden hover-lift hover:shadow-md animate-fade-up delay-${(i % 3) * 100 + 100}`}
              >
                <div className="relative aspect-video grid place-items-center" style={{ background: "var(--gradient-warm)" }}>
                  <span className="h-14 w-14 rounded-full bg-background grid place-items-center shadow-md group-hover:scale-110 transition">
                    <Play className="h-5 w-5 text-primary fill-primary ml-0.5" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold leading-snug group-hover:text-primary transition">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.caption}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
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