import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Play } from "lucide-react";

export const Route = createFileRoute("/media")({
  component: MediaPage,
  head: () => ({
    meta: [
      { title: "Media — Divya Chetna Foundation" },
      { name: "description", content: "Watch stories from our work — Republic Day, awards ceremonies, and the children whose lives we share." },
      { property: "og:title", content: "Media — Divya Chetna Foundation" },
      { property: "og:description", content: "Films and stories from the field." },
    ],
  }),
});

const videos = [
  { title: "Republic Day — 2021", url: "https://www.youtube.com/watch?v=KsYNMTXTZo4", caption: "Republic Day with the children we support." },
  { title: "Every Child Has a Story", url: "https://www.youtube.com/watch?v=x2LFad5jEnY", caption: "Motivating every child — Lost & Found Foundation." },
  { title: "Children Awarded for Achievements", url: "https://www.youtube.com/", caption: "Celebrating wins, big and small." },
  { title: "Independence Day — Inception", url: "https://www.youtube.com/", caption: "The day Divya Chetna Foundation began — 15 Aug 2021." },
  { title: "Diwali at Roongta Highschool", url: "https://www.youtube.com/", caption: "Sweets, smiles, and a community Diwali." },
  { title: "Book Distribution Drive", url: "https://www.youtube.com/", caption: "Books, stationery, and uniforms for a new school year." },
];

function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Watch & read"
        title="Stories from the field."
        description="Short films, ceremonies, and conversations that capture what we do — and why."
      />
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v, i) => (
          <a
            key={v.title}
            href={v.url}
            target="_blank"
            rel="noreferrer"
            className={`group rounded-3xl border border-border bg-card overflow-hidden hover-lift hover:shadow-md animate-fade-up delay-${(i % 3) * 100 + 100}`}
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
      </section>
      <section className="bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold max-w-xl mx-auto">Have a story to share?</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">If you've covered our work or want to feature a student's journey, we'd love to hear from you.</p>
          <a href="mailto:info@divyachetna.org.in" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition">Reach out</a>
        </div>
      </section>
    </>
  );
}