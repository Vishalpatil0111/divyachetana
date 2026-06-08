import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-children.jpg";
import aboutImg from "@/assets/about-student.jpg";
import volunteerImg from "@/assets/volunteer.jpg";
import {
  ArrowRight,
  BookOpen,
  Users,
  GraduationCap,
  HeartHandshake,
  Briefcase,
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
            <Reveal className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-primary-soft text-primary rounded-full text-[10px] font-bold tracking-[0.18em] uppercase">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Divyachetana Foundation · Est. 2021
            </Reveal>
            <Reveal as="h1" delay={80} className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-semibold text-foreground">
              Dedicated to <span className="italic text-primary">supporting the education</span> of students who have lost their parents.
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
              <p className="font-serif italic text-foreground leading-snug" style={{ fontFamily: "Fraunces, Georgia, serif" }}>
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
          <Reveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">About the foundation</span>
          </Reveal>
          <Reveal as="h2" delay={80} className="text-4xl md:text-5xl font-semibold leading-tight">
            Walking beside the children the pandemic left behind.
          </Reveal>
          <Reveal as="p" delay={160} className="text-muted-foreground leading-relaxed text-lg">
            Divyachetna Social Foundation provides care and support to young
            students who lost their parents to COVID-19. We pay school and
            college fees, distribute stationery and uniforms, sit with
            families through counselling, and offer skill development to the
            surviving parent so the household can become self-reliant again.
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
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">What we do</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">Our core initiatives</h2>
              <p className="mt-4 text-muted-foreground">
                Practical, long-term intervention — for the child, the
                surviving mother, and the family.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/causes" className="text-primary font-semibold border-b-2 border-primary/20 hover:border-primary pb-1 transition inline-flex items-center gap-2">
                View all programs <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: GraduationCap, title: "Educational Support for Children", body: "School & college fees, books, uniforms and stationery — so learning never pauses for a child who has lost a parent." },
              { icon: BookOpen, title: "Skill Development Program", body: "Tailoring, beauty, computer literacy and craft training for surviving mothers — practical skills that unlock real income." },
              { icon: Briefcase, title: "Mothers' Job & Business", body: "We help these mothers find dignified jobs or start small home businesses to keep the household self-reliant." },
              { icon: HeartHandshake, title: "Family Counselling", body: "A safe space for children and surviving parents to share, grieve and grow with our trained counsellors." },
              { icon: Users, title: "Mentorship & Career Guidance", body: "Helping children prepare CVs, forms and applications to step confidently into their first job." },
              { icon: ShieldCheck, title: "Govt. Aid Access", body: "Helping families navigate schemes and paperwork to unlock public benefits they're entitled to." },
            ].map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 100} className="group p-8 rounded-3xl bg-background border border-border hover:border-primary/40 hover:bg-primary-soft/30 transition-all hover-lift">
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

      {/* === Volunteer split === */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <Reveal y={40}>
          <img src={volunteerImg} alt="A volunteer working with students" className="w-full aspect-[4/3] object-cover rounded-3xl" />
        </Reveal>
        <div className="space-y-6">
          <Reveal>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Get involved</span>
          </Reveal>
          <Reveal as="h2" delay={80} className="text-4xl md:text-5xl font-semibold leading-tight">
            Lend your time. Change a life.
          </Reveal>
          <Reveal as="p" delay={160} className="text-muted-foreground leading-relaxed">
            We are always looking for determined, kind, detail-oriented
            volunteers — for tutoring, events, outreach, fundraising and
            family support. Come once a month, or come every week.
          </Reveal>
          <Reveal delay={240} className="flex flex-wrap gap-4 pt-2">
            <Link to="/volunteer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold hover:opacity-90 transition">
              Join as volunteer <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold hover:border-primary hover:text-primary transition">
              Meet the team
            </Link>
          </Reveal>
        </div>
      </section>

      {/* === Transparency === */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <Reveal className="max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Open books</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">Built on transparency.</h2>
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
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">In their own words</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">Videos from the field</h2>
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
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">From the foundation</span>
              <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">Stories & events</h2>
            </Reveal>
            <Reveal delay={100}>
              <Link to="/events" className="text-primary font-semibold border-b-2 border-primary/20 hover:border-primary pb-1 transition inline-flex items-center gap-2">
                All stories <ArrowRight className="h-4 w-4" />
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
              <span key={s} className="text-xl italic text-muted-foreground" style={{ fontFamily: "Fraunces, Georgia, serif" }}>{s}</span>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
