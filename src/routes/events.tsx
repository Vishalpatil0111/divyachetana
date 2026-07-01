import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/events")({
  component: EventsPage,
  head: () => ({
    meta: [
      { title: "Stories & Gallery -Divyachetana Foundation" },
      {
        name: "description",
        content: "Events, films, articles and moments from our work across Nashik since 2021.",
      },
      { property: "og:title", content: "Stories & Gallery -Divyachetana Foundation" },
      { property: "og:description", content: "A visual and written diary from the field." },
    ],
  }),
});

const galleryImages = [
  "/images/gallery/WhatsApp Image 2022-02-02 at 4.12.14 PM.jpeg",
  "/images/gallery/WhatsApp Image 2022-02-02 at 4.12.14 PM.png",
  "/images/gallery/WhatsApp Image 2022-03-28 at 8.25.22 AM (1).png",
  "/images/gallery/WhatsApp Image 2022-10-17 at 6.05.51 AM (1) (1).jpeg",
  "/images/gallery/WhatsApp Image 2023-01-04 at 8.48.32 AM.jpeg",
  "/images/gallery/WhatsApp Image 2024-06-08 at 06.39.42.jpeg",
  "/images/gallery/WhatsApp Image 2024-12-10 at 8.07.39 AM (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-02-02 at 1.38.41 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-02-11 at 4.54.34 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-02-13 at 8.43.54 AM (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-02-13 at 8.43.54 AM (1).png",
  "/images/gallery/WhatsApp Image 2026-02-13 at 8.43.55 AM (2).png",
  "/images/gallery/WhatsApp Image 2026-02-13 at 8.43.55 AM.jpeg",
  "/images/gallery/WhatsApp Image 2026-02-14 at 12.37.27 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-02-14 at 12.38.39 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-02-14 at 12.40.53 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-02-14 at 12.42.32 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-02-14 at 12.43.18 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-02-14 at 12.44.40 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-02-14 at 12.45.47 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-02-14 at 12.52.39 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-02-14 at 12.54.30 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-02-28 at 3.07.55 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-02-28 at 3.07.56 PM (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-02-28 at 3.07.56 PM.jpeg",
  "/images/gallery/WhatsApp Image 2026-02-28 at 3.07.57 PM (1).jpeg",
  "/images/gallery/WhatsApp Image 2026-02-28 at 3.07.57 PM.jpeg",
];

const newsImages = [
  "/images/gallery/newsart1.jpeg",
  "/images/gallery/newsart2.jpeg",
  "/images/gallery/newsart3.jpeg",
  "/images/gallery/newsart4.jpeg",
  "/images/gallery/newsart5.jpeg",
  "/images/gallery/newsart6.jpeg",
  "/images/gallery/newsart7.jpeg",
  "/images/gallery/newsart8.jpeg",
  "/images/gallery/newsart9.png",
  "/images/gallery/newsart10.jpeg",
];

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="From the ground"
        title="News & Gallery."
        description="Media coverage and moments from the field -a visual diary of our work since 2021."
      />
      {/* === News Articles === */}
      <section className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            In the press
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
            News coverage.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Media coverage and news articles featuring the foundation's work.
          </p>
          <div className="mt-10 columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {newsImages.map((src, i) => (
              <div
                key={i}
                className="break-inside-avoid overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
              >
                <img
                  src={src}
                  alt={`News article ${i + 1}`}
                  className="w-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Gallery === */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <span className="text-xs font-medium uppercase tracking-widest text-primary">
          In pictures
        </span>
        <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
          Gallery.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl">
          Moments from the field -our students, volunteers, and the communities we serve.
        </p>
        <div className="mt-10 columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="break-inside-avoid overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
            >
              <img
                src={src}
                alt={`Gallery photo ${i + 1}`}
                className="w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
