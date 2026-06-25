import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

import {
  ArrowRight,
  BookOpen,
  Users,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Quote,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Divyachetana Foundation -Education for every child" },
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
      {/* === Hero -Warm editorial split === */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-7">
            <Reveal className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-primary-soft text-primary rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Divyachetana Foundation · Est. 2021
            </Reveal>
            <Reveal as="h1" delay={80} className="text-3xl md:text-4xl lg:text-5xl leading-[1.15] font-semibold text-foreground">
              Because no child should lose education along with their parent.
            </Reveal>
            <Reveal as="p" delay={160} className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Supporting children affected by COVID, severe illness, accidents,
              heart attacks, financial crises, and loss of earning members
              through education and long-term care.
            </Reveal>
            <Reveal delay={240} className="flex flex-wrap items-center gap-3 pt-4">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold hover:opacity-90 transition shadow-lg shadow-primary/10"
              >
                Sponsor a Child
              </Link>
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 font-semibold hover:opacity-90 transition shadow-lg shadow-foreground/10"
              >
                Donate for Education
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold text-foreground hover:border-primary hover:text-primary transition"
              >
                See Our Impact
              </Link>
            </Reveal>
            <Reveal delay={320} className="flex items-center gap-6 pt-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Section 8 registered</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> 80G tax exempt</div>
            </Reveal>
          </div>

          <Reveal y={40} delay={120} className="relative">
            <div className="h-96 md:h-[34rem] lg:h-[40rem] rounded-3xl overflow-hidden" style={{ boxShadow: "var(--shadow-warm)" }}>
              <img src="/images/New folder/WhatsApp Image 2024-12-10 at 8.07.39 AM (1).jpeg" alt="Children supported by Divyachetana" className="w-full h-full object-cover" />
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
      {/* <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { k: "200+", v: "Students Supported" },
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
      </section> */}

      {/* === About === */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-28 grid md:grid-cols-12 gap-12 items-center">
        <Reveal y={40} className="md:col-span-5">
          <img src="/images/New folder/WhatsApp Image 2026-02-14 at 12.42.32 PM.jpeg" alt="A supported student at study" className="w-full aspect-[4/5] object-cover rounded-3xl" />
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
                Practical, long-term support -so no child's education ever
                stops because of a loss they didn't choose.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, title: "School & College Fees", body: "We cover school and college fees so learning never pauses for a child who has lost a parent." },
              { icon: BookOpen, title: "Books, Uniforms & Kits", body: "Books, notebooks, stationery and uniforms -everything a child needs to walk into a classroom with dignity." },
              { icon: HeartHandshake, title: "Counselling & Care", body: "A safe space for children to share, grieve and grow with our trained counsellors." },
              { icon: Users, title: "Mentorship & Career Guidance", body: "Mentors who help children prepare CVs and applications -and step confidently into their first job." },
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

      {/* === Certificates === */}
      <section className="bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">Certificates</span>
              <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">Verified, audited, and available.</h2>
              <p className="mt-4 text-muted-foreground">Our registration certificates are available in full so everyone can verify our compliance.</p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { src: "/images/certificates/CSRCERTIFICATE.jpeg", alt: "CSR certificate" },
              { src: "/images/certificates/DivyachetnaCOI.jpeg", alt: "Certificate of incorporation" },
            ].map((image) => (
              <div key={image.src} className="overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
                <img src={image.src} alt={image.alt} className="h-[36rem] w-full object-cover transition duration-300 ease-in-out hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos section removed per request */}

      {/* === Stories === */}
      <section className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-widest text-primary">From the foundation</span>
              <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                Stories & <span className="text-primary">events</span>
              </h2>
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
        <div className="max-w-7xl mx-auto px-6 py-16">
          <span className="text-xs font-medium uppercase tracking-widest text-primary mb-10 block text-center">Supported by</span>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "T D K INDIA PVT LTD",
              "WINJIT TECHNOLOGIES PVT LTD",
              "Fox Welfare founetion",
              "M/S NEW INDIA CUPROTEC",
              "TDK INDIA PVT LTD",
              "JAVAHARLAL PORT AUTOORTY",
              "M.D.Industries",
              "ADAM FABRIWORK PVT LTD",
              "TAPARIA TOOLS LTD",
              "NEW INDIA EXTRUSIONS PVT LTD",
              "ELECTRO CRIMP COTACTS INDIA P L",
              "EMPIRE SPICISES AND FOOD LTD",
              "LUCY ELECTRIC INDIA PVT LTD",
              "ACRON PLAST PVT LTD",
              "Ms Saini Enngg Waork",
              "L C G ALUMINIUM INDUSTIES PVT LTD",
            ].map((s) => (
              <span key={s} className="inline-flex items-center px-5 py-2.5 rounded-full border border-border bg-background text-xs font-semibold text-muted-foreground transition hover:border-primary hover:text-foreground">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
