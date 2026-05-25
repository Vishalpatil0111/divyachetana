import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import aboutImg from "@/assets/about-student.jpg";
import { ArrowRight, ShieldCheck, GraduationCap, HandHeart, Award } from "lucide-react";
import amritaImg from "@/assets/team-amrita.jpg";
import minakshiImg from "@/assets/team-minakshi.jpg";
import vaibhavImg from "@/assets/team-vaibhav.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Divya Chetna Foundation" },
      { name: "description", content: "Founded in June 2021 to ensure that children who lost a parent to COVID-19 can continue their education." },
      { property: "og:title", content: "About — Divya Chetna Foundation" },
      { property: "og:description", content: "Section 8 non-profit supporting 125+ students across Nashik with fees, books, uniforms, counselling and career guidance." },
    ],
  }),
});

const values = [
  { icon: GraduationCap, title: "Education first", body: "School and college fees, books, uniforms — so learning never pauses." },
  { icon: HandHeart, title: "Care that lasts", body: "Counselling and career guidance until they're standing on their own." },
  { icon: ShieldCheck, title: "Accountable", body: "Section 8 company, governed by bylaws, fully 80G certified." },
  { icon: Award, title: "Local impact", body: "Rooted in Nashik, with families who know the children we serve." },
];

const team = [
  { name: "Amrita Mishra", role: "Mentor", img: amritaImg },
  { name: "Smt. Minakshi Agrawal", role: "Trustee", img: minakshiImg },
  { name: "Vaibhav Jadhav", role: "Programs lead", img: vaibhavImg },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A small foundation with a singular promise."
        description="Divya Chetna Social Foundation was founded in June 2021 with one objective — to make sure no child's education stops because of a loss they didn't choose."
      />
      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <img src={aboutImg} alt="A student studying" className="rounded-3xl object-cover aspect-[4/5] w-full animate-zoom-in hover-lift" loading="lazy" />
        <div>
          <p className="text-muted-foreground leading-relaxed">
            The first and second waves of COVID-19 left lasting scars on Nashik and beyond. The death of a parent doesn't just bring grief — it derails a child's schooling, books, and dreams. We exist to make sure it doesn't.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We pay school and college fees, hand out stationery and uniforms, sit with families through counselling, and help surviving parents learn a trade so they can stand on their own again. We identify the student, we take responsibility, we walk with them to a career.
          </p>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <div className="text-5xl font-semibold text-primary">125+</div>
            <p className="mt-2 text-sm text-muted-foreground">students from Nashik supported with school/college fees, books, stationery, and uniforms through their education.</p>
          </div>
        </div>
      </section>
      <section className="bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold max-w-xl">How we work.</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-background p-6">
                <span className="inline-grid place-items-center h-11 w-11 rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Our team</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">People behind the mission.</h2>
          <p className="mt-4 text-muted-foreground">A small circle of trustees, mentors, and volunteers who show up — week after week — for the children of Nashik.</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((p, i) => (
            <div key={p.name} className={`text-center animate-fade-up delay-${(i % 3) * 100 + 100}`}>
              <div className="mx-auto h-40 w-40 rounded-full overflow-hidden ring-4 ring-primary-soft hover-lift">
                <img src={p.img} alt={p.name} loading="lazy" width={512} height={512} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-5 font-semibold">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/volunteer" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-medium hover:bg-muted transition">
            Join the team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold max-w-2xl mx-auto">Walk with us.</h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">Donate, volunteer, or simply share the work. Every small act adds up.</p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link to="/causes" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition">
            Support a cause <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/volunteer" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-medium hover:bg-muted transition">
            Join the team
          </Link>
        </div>
      </section>
    </>
  );
}