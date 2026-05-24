import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — Divya Chetna Foundation" },
      { name: "description", content: "Moments from the field — students, volunteers, and the families we serve." },
      { property: "og:title", content: "Gallery — Divya Chetna Foundation" },
      { property: "og:description", content: "A visual diary of our work." },
    ],
  }),
});

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

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="In pictures"
        title="Moments from the field."
        description="A visual diary of our students, volunteers, and the communities we serve across Nashik."
      />
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {tiles.map((t, i) => (
            <div
              key={i}
              className={`break-inside-avoid rounded-2xl bg-gradient-to-br ${t.c} ${t.h === "tall" ? "aspect-[3/4]" : "aspect-square"} border border-border`}
            />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">More photos coming soon. Want yours featured? <a href="mailto:info@divyachetna.org.in" className="text-primary hover:underline">Send them in.</a></p>
      </section>
    </>
  );
}