import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, Heart } from "lucide-react";

export const Route = createFileRoute("/causes")({
  component: CausesPage,
  head: () => ({
    meta: [
      { title: "Causes — Divya Chetna Foundation" },
      { name: "description", content: "Support active campaigns: Child Education and Hope for Tomorrow." },
      { property: "og:title", content: "Causes — Divya Chetna Foundation" },
      { property: "og:description", content: "Fund a child's school year, books, and a path forward." },
    ],
  }),
});

const causes = [
  {
    title: "Child Education",
    blurb: "Every child deserves a chance to succeed, regardless of their circumstances. Help cover school fees, books, and uniforms.",
    raised: 4000,
    goal: 1000000,
    accent: "from-orange-200/60 to-amber-100/40",
  },
  {
    title: "Hope for Tomorrow",
    blurb: "Comprehensive support — counselling, skills, and stability — for families rebuilding after loss.",
    raised: 0,
    goal: 100000,
    accent: "from-rose-100/70 to-orange-100/40",
  },
];

const inr = (n: number) => "₹ " + n.toLocaleString("en-IN");

function CausesPage() {
  return (
    <>
      <PageHero
        eyebrow="Help the people"
        title="Our popular causes."
        description="Pick a campaign. Give what you can. Watch a child's school year change."
      />
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8">
        {causes.map((c) => {
          const pct = c.goal ? Math.min(100, (c.raised / c.goal) * 100) : 0;
          return (
            <article key={c.title} className="rounded-3xl border border-border overflow-hidden bg-card flex flex-col">
              <div className={`aspect-[16/9] bg-gradient-to-br ${c.accent} grid place-items-center`}>
                <Heart className="h-14 w-14 text-primary/70" />
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="text-2xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{c.blurb}</p>
                <div className="mt-6">
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-foreground font-medium">{inr(c.raised)} raised</span>
                    <span className="text-muted-foreground">Goal {inr(c.goal)}</span>
                  </div>
                </div>
                <Link to="/contact" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 font-medium hover:opacity-90 transition">
                  Donate <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          );
        })}
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-semibold">Donate directly to our account</h2>
          <p className="mt-3 text-sm text-muted-foreground">Every contribution is 80G tax-exempt. Drop us a note after transfer so we can send your receipt.</p>
          <dl className="mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-4 text-sm">
            {[
              ["Account Name", "Divyachetna Social Foundation"],
              ["Bank", "The Saraswat Co-operative Bank Ltd."],
              ["Branch", "Sharanpur Road Branch, Nashik"],
              ["A/C No.", "610000000002042"],
              ["IFSC", "SRCB0000084"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-border pb-3">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="font-medium text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}