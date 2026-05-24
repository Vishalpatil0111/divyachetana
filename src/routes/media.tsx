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
        {videos.map((v) => (
          <a
            key={v.title}
            href={v.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-border bg-card overflow-hidden hover:-translate-y-1 transition-transform"
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
    </>
  );
}