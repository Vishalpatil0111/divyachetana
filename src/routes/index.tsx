import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-children.jpg";
import aboutImg from "@/assets/about-student.jpg";
import {
  ArrowRight,
  BookOpen,
  Users,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Quote,
  FileText,
  Award,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Divyachetana Foundation — Education for every child" },
      {
        name: "description",
        content:
          "Dedicated to supporting the education of students who have lost their parents.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      {/* === Hero — Warm editorial split === */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-7">
            <Reveal className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-primary-soft text-primary rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Divyachetana Foundation · Est. 2021
            </Reveal>
            <Reveal as="h1" delay={80} className="text-3xl md:text-4xl lg:text-5xl leading-[1.15] font-semibold text-foreground">
              Dedicated to <span className="text-primary">supporting the education</span> of students who have lost their parents.
            </Reveal>
            <Reveal as="p" delay={160} className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Children who have lost a parent or earning family member due to
              COVID-19, severe illnesses, accidents, heart attacks, or suicide
              are supported through educational assistance including school
              fees, books, uniforms, and guidance toward a stable future.
            </Reveal>
            <Reveal delay={240} className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 font-semibold hover:opacity-90 transition shadow-lg shadow-foreground/10"
              >
                Donate now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold text-foreground hover:border-primary hover:text-primary transition"
              >
                Apply for scholarship
              </Link>
            </Reveal>
            <Reveal delay={320} className="flex items-center gap-6 pt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Section 8 registered</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> 80G tax exempt</div>
            </Reveal>
          </div>

          <Reveal y={40} delay={120} className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden" style={{ boxShadow: "var(--shadow-warm)" }}>
              <img src={heroImg} alt="Children supported by Divyachetana" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-background p-6 rounded-2xl shadow-xl max-w-xs border border-border">
              <Quote className="h-5 w-5 text-primary mb-3" />
              <p className="text-foreground leading-snug font-medium">
                "Every child deserves a chance to succeed, regardless of the
                hardships they face."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-soft flex items-center justify-center text-primary text-[11px] font-bold">DC</div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Our Vision</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* === Impact Band === */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { k: "125+", v: "Students Supported" },
            { k: "12", v: "Partner Schools" },
            { k: "85%", v: "School Retention" },
            { k: "₹2.4M", v: "Aid Distributed" },
          ].map((s, i) => (
            <Reveal key={s.v} delay={i * 90} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl text-primary mb-1 font-semibold tracking-tight">{s.k}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{s.v}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* === About === */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-28 grid md:grid-cols-12 gap-12 items-center">
        <Reveal y={40} className="md:col-span-5">
          <img src={aboutImg} alt="A supported student at study" className="w-full aspect-[4/5] object-cover rounded-3xl" />
        </Reveal>
        <div className="md:col-span-7 space-y-6">
          <Reveal as="h2" className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
            About the <span className="text-primary">foundation</span>
          </Reveal>
          <Reveal delay={80}>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Walking beside the children the pandemic left behind</span>
          </Reveal>
          <Reveal as="p" delay={160} className="text-muted-foreground leading-relaxed text-lg">
            Divyachetana Social Foundation provides care and support to
            children who have lost their parents. We pay school and college
            fees, distribute books, stationery and uniforms, and walk with
            each child through counselling, mentorship and career guidance —
            until they're standing on their own.
          </Reveal>
          <Reveal delay={240}>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold border-b-2 border-primary/20 hover:border-primary pb-1 transition">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* === Programs === */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <Reveal className="max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                What we <span className="text-primary">do</span>
              </h2>
              <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Our core initiatives for every child we support</p>
              <p className="mt-4 text-muted-foreground">
                Practical, long-term support — so no child's education ever
                stops because of a loss they didn't choose.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, title: "School & College Fees", body: "We cover school and college fees so learning never pauses for a child who has lost a parent." },
              { icon: BookOpen, title: "Books, Uniforms & Kits", body: "Books, notebooks, stationery and uniforms — everything a child needs to walk into a classroom with dignity." },
              { icon: HeartHandshake, title: "Counselling & Care", body: "A safe space for children to share, grieve and grow with our trained counsellors." },
              { icon: Users, title: "Mentorship & Career Guidance", body: "Mentors who help children prepare CVs and applications — and step confidently into their first job." },
            ].map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) * 90} className="group p-8 rounded-3xl bg-background border border-border hover:border-primary/40 hover:bg-primary-soft/30 transition-all hover-lift">
                <div className="w-12 h-12 bg-primary-soft text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* === Transparency === */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal className="max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
              Built on <span className="text-primary">transparency</span>
            </h2>
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Open books, open programmes</p>
            <p className="mt-4 text-muted-foreground">
              You deserve to know where every rupee goes. Our certificates,
              annual reports and programme list are open for everyone.
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Award, title: "Certificates", body: "Section 8 registration, 80G & 12A certifications available for download.", cta: "View certificates" },
            { icon: FileText, title: "Annual Report", body: "Audited annual report detailing income, expenditure, and impact metrics.", cta: "Read latest report" },
            { icon: Sparkles, title: "Programme List", body: "A live list of every active programme, beneficiary count and current status.", cta: "See programmes" },
          ].map((t, i) => (
            <Reveal key={t.title} delay={i * 100} className="p-8 rounded-3xl border border-border bg-card hover-lift">
              <div className="w-12 h-12 bg-primary-soft text-primary rounded-2xl flex items-center justify-center mb-6">
                <t.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{t.body}</p>
              <span className="text-sm text-primary font-semibold inline-flex items-center gap-1.5">{t.cta} <ArrowRight className="h-3.5 w-3.5" /></span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* === Videos from the field === */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                Videos from the <span className="text-primary">field</span>
              </h2>
              <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">In their own words</p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "A mother learns to stitch", s: "Skill program · Nashik" },
              { t: "Back to school: Class V", s: "Field visit · Aug 2024" },
              { t: "First salary, first smile", s: "Job placement · 2024" },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 100} className="group rounded-3xl overflow-hidden border border-border bg-background hover-lift">
                <div className="relative aspect-video" style={{ background: "var(--gradient-warm)" }}>
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="h-16 w-16 rounded-full bg-background/90 grid place-items-center text-primary group-hover:scale-110 transition-transform">
                      <PlayCircle className="h-9 w-9" />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold leading-snug">{v.t}</h3>
                  <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{v.s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* === Stories === */}
      <section className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                Stories & <span className="text-primary">events</span>
              </h2>
              <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">From the foundation</p>
            </Reveal>
            <Reveal delay={100}>
              <Link to="/events" className="text-primary font-semibold border-b-2 border-primary/20 hover:border-primary pb-1 transition inline-flex items-center gap-2">
                All stories & gallery <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { d: "15", m: "Aug 2022", t: "Ravindra Vidyalay Book Distribution" },
              { d: "21", m: "Nov 2021", t: "Diwali Celebration at Roongta Highschool" },
              { d: "15", m: "Aug 2021", t: "Divya Chetna Foundation Launch" },
            ].map((e, i) => (
              <Reveal key={e.t} delay={i * 100} className="group rounded-3xl border border-border p-7 bg-background hover-lift">
                <div className="flex items-baseline gap-2 text-primary">
                  <span className="text-5xl font-semibold tabular-nums">{e.d}</span>
                  <span className="uppercase tracking-widest text-xs">{e.m}</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-snug">{e.t}</h3>
                <Link to="/events" className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground group-hover:text-primary transition">
                  Read story <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* === Partners === */}
      <section className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-10">Supported by</p>
          <Reveal className="flex flex-wrap justify-center gap-x-14 gap-y-6 opacity-60">
            {["Contiloe Pictures", "GSEAMS", "RK Academy", "WooCommerce", "Ved World", "Eduauraa"].map((s) => (
              <span key={s} className="text-lg font-semibold text-muted-foreground tracking-tight">{s}</span>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
