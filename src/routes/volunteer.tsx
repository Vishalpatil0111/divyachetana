import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import volunteerImg from "@/assets/volunteer.jpg";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/volunteer")({
  component: VolunteerPage,
  head: () => ({
    meta: [
      { title: "Volunteer — Divya Chetna Foundation" },
      { name: "description", content: "Mentor, teach, fundraise, or simply spread the word. Join the team making sure every child stays in school." },
      { property: "og:title", content: "Volunteer — Divya Chetna Foundation" },
      { property: "og:description", content: "Determined, supportive, and ready to show up? The foundation needs you." },
    ],
  }),
});

const team = [
  { name: "Amrita Mishra", role: "Mentor" },
  { name: "Smt. Minakshi Agrawal", role: "Trustee" },
  { name: "Vaibhav Jadhav", role: "Programs lead" },
];

const ways = [
  "Tutor a student for an hour a week",
  "Run a fundraiser in your community",
  "Help with events and outreach",
  "Share a skill — design, code, photography",
];

function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Come join hands in a noble cause."
        description="Alpha, determined, supportive, with an eye for detail — Divya Chetna needs you. Come one, come all, and let this tribe increase."
      />
      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Ways you can help.</h2>
          <ul className="mt-8 space-y-4">
            {ways.map((w) => (
              <li key={w} className="flex items-start gap-3">
                <span className="mt-0.5 inline-grid place-items-center h-6 w-6 rounded-full bg-primary-soft text-primary"><Check className="h-3.5 w-3.5" /></span>
                <span className="text-muted-foreground">{w}</span>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition">
            Apply to volunteer <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <img src={volunteerImg} alt="Volunteer with students" className="rounded-3xl object-cover aspect-[4/5] w-full animate-zoom-in hover-lift" loading="lazy" />
      </section>
      <section className="bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Our team</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">People behind the mission.</h2>
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((p, i) => (
              <div key={p.name} className={`rounded-2xl border border-border bg-background p-6 hover-lift animate-fade-up delay-${(i % 3) * 100 + 100}`}>
                <div className="h-16 w-16 rounded-full bg-primary-soft text-primary grid place-items-center text-xl font-semibold">
                  {p.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <h3 className="mt-4 font-semibold">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: "01", t: "Apply", b: "Tell us a little about yourself and how much time you can give." },
            { n: "02", t: "Onboard", b: "A short call so we can match you to a student or a project." },
            { n: "03", t: "Show up", b: "Tutor, mentor, run a drive — and stay in touch with the team." },
          ].map((s, i) => (
            <div key={s.n} className={`rounded-2xl border border-border bg-card p-7 hover-lift animate-fade-up delay-${(i % 3) * 100 + 100}`}>
              <div className="text-sm font-semibold text-primary">{s.n}</div>
              <h3 className="mt-2 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}