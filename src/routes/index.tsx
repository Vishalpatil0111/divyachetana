import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-children.jpg";
import aboutImg from "@/assets/about-student.jpg";
import volunteerImg from "@/assets/volunteer.jpg";
import { ArrowRight, Heart, BookOpen, Users, Sparkles, Phone, Mail } from "lucide-react";

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
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-primary grid place-items-center text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-semibold tracking-tight">Divya Chetna</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#work" className="hover:text-foreground transition">Our Work</a>
            <a href="#impact" className="hover:text-foreground transition">Impact</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <a
            href="#donate"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Donate <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-warm)" }}
        />
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-secondary-foreground bg-background/70 px-3 py-1.5 rounded-full border border-border">
              <Heart className="h-3 w-3 text-primary" /> Since 2021
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
              A brighter <span className="text-primary italic">tomorrow</span>,
              one child at a time.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Divya Chetna Foundation cares for children who lost their parents
              to COVID-19 — giving them the education, dignity, and love every
              child deserves.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#donate"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition"
                style={{ boxShadow: "var(--shadow-warm)" }}
              >
                Start Donating <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-medium hover:bg-muted transition"
              >
                Become a Volunteer
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-primary/30 blur-2xl" />
            <img
              src={heroImg}
              alt="Children learning together"
              width={1600}
              height={1200}
              className="relative rounded-3xl object-cover aspect-[4/3] w-full"
              style={{ boxShadow: "var(--shadow-warm)" }}
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <img
          src={aboutImg}
          alt="A student writing in his notebook"
          width={1200}
          height={1400}
          loading="lazy"
          className="rounded-3xl object-cover aspect-[5/6] w-full"
        />
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Our Story</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
            Every child deserves a chance to succeed.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We work with children who carry an immense emotional and financial
            burden after losing their parents. Our mission is simple — make
            sure they receive the love, care, and education they need to
            thrive and reach their full potential.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <div className="text-4xl font-semibold text-primary">500+</div>
              <div className="mt-1 text-sm text-muted-foreground">Children supported</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-primary">12</div>
              <div className="mt-1 text-sm text-muted-foreground">Cities reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">What we do</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              Three ways we show up.
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Education", body: "School fees, books, uniforms, and tutoring so learning never stops." },
              { icon: Heart, title: "Care", body: "Emotional support and mentorship that helps a child feel seen." },
              { icon: Users, title: "Community", body: "A network of volunteers walking alongside every family." },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-background p-8 hover:-translate-y-1 transition-transform"
              >
                <span className="inline-grid place-items-center h-11 w-11 rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact / Volunteer */}
      <section id="impact" className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Get Involved</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
            Volunteer your time, change a story.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Whether you have an hour a week or a skill to share, there's a
            place for you here. Help us mentor, teach, fundraise, or simply
            spread the word.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-medium hover:opacity-90 transition"
          >
            Join as Volunteer <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <img
          src={volunteerImg}
          alt="Volunteer with students"
          width={1200}
          height={900}
          loading="lazy"
          className="rounded-3xl object-cover aspect-[4/3] w-full"
        />
      </section>

      {/* Donate CTA */}
      <section id="donate" className="px-6 pb-24">
        <div
          className="max-w-6xl mx-auto rounded-[2rem] p-12 md:p-20 text-center"
          style={{ background: "var(--gradient-warm)", boxShadow: "var(--shadow-warm)" }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight max-w-3xl mx-auto">
            Your kindness becomes someone's <span className="text-primary italic">future</span>.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Every contribution — large or small — helps a child stay in school
            and dream a little bigger.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 font-medium hover:opacity-90 transition"
          >
            Donate Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-full bg-primary grid place-items-center text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="font-semibold">Divya Chetna Foundation</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Building a better tomorrow for underprivileged students since 2021.
            </p>
          </div>
          <div className="text-sm">
            <div className="font-medium">Reach us</div>
            <a href="tel:3072129320" className="mt-3 flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <Phone className="h-4 w-4" /> (307) 212-9320
            </a>
            <a href="mailto:info@divyachetna.org.in" className="mt-2 flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <Mail className="h-4 w-4" /> info@divyachetna.org.in
            </a>
          </div>
          <div className="text-sm text-muted-foreground md:text-right">
            © {new Date().getFullYear()} Divya Chetna Foundation.
            <br /> All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
