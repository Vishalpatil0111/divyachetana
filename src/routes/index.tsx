import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-children.jpg";
import aboutImg from "@/assets/about-student.jpg";
import volunteerImg from "@/assets/volunteer.jpg";
import {
  ArrowRight,
  Heart,
  BookOpen,
  Users,
  Sparkles,
  Megaphone,
  Briefcase,
  Landmark,
  PartyPopper,
  HandCoins,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Divya Chetna Foundation — Education for every child" },
      {
        name: "description",
        content:
          "We support underprivileged students who lost parents to COVID-19 with education, care, and a path to a brighter future.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      {/* === Editorial Hero === */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-warm)" }} />
        <div className="absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl animate-float-soft -z-10" />

        <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 md:pt-24">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary font-medium animate-fade-up">
            <span className="h-px w-10 bg-primary/60" />
            Divya Chetna Foundation · est. 2021
          </div>

          <h1 className="animate-fade-up delay-100 mt-6 font-semibold leading-[0.95] tracking-tight text-[15vw] md:text-[10rem] lg:text-[12rem]">
            Building a
            <br />
            <span className="italic text-primary">brighter</span> tomorrow.
          </h1>

          <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
            <p className="animate-fade-up delay-200 md:col-span-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
              For the children of Nashik who lost a parent to COVID-19 — we
              shoulder the school fees, the books, the uniforms, and the long
              walk back to a steady future.
            </p>
            <div className="animate-fade-up delay-300 md:col-span-4 md:col-start-9 flex flex-wrap gap-3">
              <Link
                to="/causes"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-medium hover:opacity-90 transition"
              >
                Start donating <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/volunteer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 px-6 py-3 font-medium hover:bg-background transition"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </div>

        {/* Asymmetric image collage */}
        <div className="max-w-7xl mx-auto px-6 pb-20 mt-10 grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-8" y={40}>
            <img
              src={heroImg}
              alt="Children learning together"
              className="w-full aspect-[16/10] object-cover rounded-3xl"
              style={{ boxShadow: "var(--shadow-warm)" }}
            />
          </Reveal>
          <div className="col-span-12 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
            <Reveal delay={150} className="rounded-3xl bg-background border border-border p-6 flex flex-col justify-between">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Students supported</span>
              <div className="mt-6">
                <div className="text-5xl md:text-6xl font-semibold text-primary leading-none">125+</div>
                <p className="mt-2 text-xs text-muted-foreground">across Nashik, in school and college.</p>
              </div>
            </Reveal>
            <Reveal delay={300} y={40}>
              <img
                src={aboutImg}
                alt="Student at study"
                className="w-full h-full aspect-square md:aspect-auto md:h-full object-cover rounded-3xl"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* === Marquee statement === */}
      <section className="border-y border-border bg-foreground text-background overflow-hidden">
        <div className="flex gap-12 py-6 whitespace-nowrap animate-[marquee_30s_linear_infinite] text-2xl md:text-4xl font-semibold tracking-tight">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>Every child deserves a chance</span>
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="italic text-primary">to succeed.</span>
              <Sparkles className="h-6 w-6 text-primary" />
            </span>
          ))}
        </div>
      </section>

      {/* === About — Editorial two-col === */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">01 / About our charity</span>
          </Reveal>
          <div className="md:col-span-8 space-y-8">
            <Reveal as="h2" className="text-4xl md:text-6xl font-semibold leading-[1.05]">
              Since 2021, we have walked beside the children the pandemic
              left behind.
            </Reveal>
            <Reveal as="p" delay={100} className="text-lg text-muted-foreground leading-relaxed">
              Divyachetna Social Foundation provides care and support to young
              students who lost their parents to COVID-19. We understand the
              immense emotional and financial burden these children carry — and
              we are committed to making sure they receive the love, care, and
              education they need to thrive.
            </Reveal>
            <Reveal as="p" delay={200} className="text-muted-foreground leading-relaxed">
              We pay school and college fees, distribute stationery and
              uniforms, sit with families through counselling, and offer skill
              development to the surviving parent so the household can become
              self-reliant again. We identify the student, take responsibility,
              and walk with them all the way to a career.
            </Reveal>
            <Reveal delay={300} className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {[
                { k: "Section 8", v: "Registered non-profit" },
                { k: "80G", v: "Tax-exempt donations" },
                { k: "Nashik", v: "Rooted in the community" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="text-xl md:text-2xl font-semibold">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* === What we do — numbered list === */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <Reveal className="md:col-span-4">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">02 / What we do</span>
            </Reveal>
            <Reveal as="h2" delay={100} className="md:col-span-8 text-4xl md:text-5xl font-semibold leading-tight">
              Six concrete commitments to every family we take on.
            </Reveal>
          </div>

          <ol className="divide-y divide-border border-y border-border">
            {[
              { icon: Heart, title: "Emotional counselling", body: "Trained counsellors create a safe space for children to share, grieve, and grow." },
              { icon: HandCoins, title: "Financial assistance", body: "Tuition, books, stationery, uniforms — the day-to-day cost of learning, covered." },
              { icon: BookOpen, title: "Access to education", body: "Partnerships with local schools and scholarships for the most deserving students." },
              { icon: Megaphone, title: "Awareness campaigns", body: "Raising the voice for orphaned children with communities, agencies, and partners." },
              { icon: Landmark, title: "Government aid access", body: "Guiding families through schemes and paperwork to unlock public benefits." },
              { icon: Briefcase, title: "Employment & skill training", body: "Helping surviving parents — especially women — into work, capital, and dignity." },
            ].map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80} className="group grid md:grid-cols-12 gap-6 py-8 items-start">
                <div className="md:col-span-1 text-2xl md:text-3xl font-serif text-primary tabular-nums">{String(i + 1).padStart(2, "0")}</div>
                <div className="md:col-span-1">
                  <span className="inline-grid place-items-center h-11 w-11 rounded-xl bg-primary-soft text-primary group-hover:scale-110 transition-transform">
                    <item.icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="md:col-span-4 text-xl md:text-2xl font-semibold">{item.title}</h3>
                <p className="md:col-span-6 text-muted-foreground leading-relaxed">{item.body}</p>
              </Reveal>
            ))}
            <Reveal as="li" className="py-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <PartyPopper className="h-5 w-5 text-primary" />
                <span>Plus regular motivational and cultural events for our families.</span>
              </div>
              <Link to="/about" className="text-sm font-medium text-primary inline-flex items-center gap-1.5">
                Full story <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </ol>
        </div>
      </section>

      {/* === Causes preview === */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">03 / Popular causes</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight max-w-2xl">
              A small donation, a long ripple.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Link to="/causes" className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
              See all causes <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Child Education",
              body: "Every child deserves a chance to succeed, regardless of their circumstances.",
              raised: 4000,
              goal: 1000000,
              img: aboutImg,
            },
            {
              title: "Hope for Tomorrow",
              body: "Comprehensive support for the families hit hardest by the pandemic.",
              raised: 0,
              goal: 100000,
              img: volunteerImg,
            },
          ].map((c, i) => {
            const pct = Math.max(0.4, (c.raised / c.goal) * 100);
            return (
              <Reveal key={c.title} delay={i * 120} className="group relative overflow-hidden rounded-3xl border border-border bg-card">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                  <div className="mt-6">
                    <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${Math.min(pct, 100)}%` }} />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground tabular-nums">
                      <span>₹{c.raised.toLocaleString("en-IN")} raised</span>
                      <span>Goal ₹{c.goal.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                  <Link to="/causes" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
                    Donate <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* === Volunteer split === */}
      <section className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          <Reveal y={40}>
            <img src={volunteerImg} alt="Volunteer with students" className="w-full aspect-[4/3] object-cover rounded-3xl" />
          </Reveal>
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">04 / Volunteer</span>
            </Reveal>
            <Reveal as="h2" delay={100} className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              What's more virtuous than returning a lost child to their future?
            </Reveal>
            <Reveal as="p" delay={200} className="mt-6 text-muted-foreground leading-relaxed">
              A shout-out to all like-minded people — alpha, determined,
              supportive, with an eye for detail. Divya Chetna needs you. Come
              one, come all, and let this tribe grow.
            </Reveal>
            <Reveal delay={300} className="mt-8 flex flex-wrap gap-3">
              <Link to="/volunteer" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-medium hover:opacity-90 transition">
                Join as volunteer <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-medium hover:bg-muted transition">
                Meet the team <Users className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* === Bank / Donate Strip === */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <Reveal className="rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden" style={{ background: "var(--gradient-warm)" }}>
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">05 / Donate</span>
              <h2 className="mt-3 text-4xl md:text-6xl font-semibold leading-[1.05]">
                Your kindness becomes someone's <span className="italic text-primary">future.</span>
              </h2>
              <p className="mt-6 text-muted-foreground max-w-xl">
                Every contribution — large or small — keeps a child in school
                and a parent on their feet.
              </p>
              <Link to="/causes" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 font-medium hover:opacity-90 transition">
                Donate now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="md:col-span-5 rounded-2xl bg-background/80 backdrop-blur border border-border p-6 text-sm">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Bank transfer</div>
              <dl className="mt-4 space-y-2.5">
                <Row k="A/C name" v="Divyachetna Social Foundation" />
                <Row k="Bank" v="The Saraswat Co-operative Bank Ltd." />
                <Row k="Branch" v="Sharanpur Road, Nashik" />
                <Row k="A/C No." v="610000000002042" mono />
                <Row k="IFSC" v="SRCB0000084" mono />
              </dl>
            </div>
          </div>
        </Reveal>
      </section>

      {/* === Events strip === */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">06 / Events & articles</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">From the field.</h2>
          </Reveal>
          <Reveal delay={150}>
            <Link to="/events" className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
              All stories <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { d: "15", m: "Aug", y: "2022", t: "Ravindra Vidyalay Book Distribution" },
            { d: "21", m: "Nov", y: "2021", t: "Diwali Celebration at Roongta Highschool" },
            { d: "15", m: "Aug", y: "2021", t: "Divya Chetna Foundation Launch" },
          ].map((e, i) => (
            <Reveal key={e.t} delay={i * 100} className="group rounded-3xl border border-border p-7 bg-background hover-lift">
              <div className="flex items-baseline gap-2 text-primary">
                <span className="text-5xl font-semibold tabular-nums">{e.d}</span>
                <span className="uppercase tracking-widest text-xs">{e.m} {e.y}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-snug">{e.t}</h3>
              <Link to="/events" className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground group-hover:text-primary transition">
                Read story <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* === Sponsors marquee === */}
      <section className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground text-center">Supported by</div>
          <div className="mt-6 overflow-hidden">
            <div className="flex gap-12 whitespace-nowrap animate-[marquee_40s_linear_infinite] text-2xl font-serif text-muted-foreground/70">
              {Array.from({ length: 3 }).flatMap((_, k) =>
                ["Contiloe Pictures", "GSEAMS", "RK Academy", "WooCommerce", "Ved World", "Eduauraa"].map((s) => (
                  <span key={`${k}-${s}`} className="italic">{s}</span>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ k, v, mono }: { k: string; v: string; mono?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="text-muted-foreground shrink-0">{k}</dt>
      <dd className={`text-right font-medium ${mono ? "font-mono tracking-tight" : ""}`}>{v}</dd>
    </div>
  );
}
