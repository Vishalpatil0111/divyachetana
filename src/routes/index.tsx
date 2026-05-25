import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-children.jpg";
import aboutImg from "@/assets/about-student.jpg";
import volunteerImg from "@/assets/volunteer.jpg";
import { ArrowRight, Heart, BookOpen, Users } from "lucide-react";

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
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-warm)" }}
        />
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="animate-fade-up inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-secondary-foreground bg-background/70 px-3 py-1.5 rounded-full border border-border">
              <Heart className="h-3 w-3 text-primary" /> Since 2021
            </span>
            <h1 className="animate-fade-up delay-100 mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
              A brighter <span className="text-primary italic">tomorrow</span>,
              one child at a time.
            </h1>
            <p className="animate-fade-up delay-200 mt-6 text-lg text-muted-foreground max-w-xl">
              Divya Chetna Foundation cares for children who lost their parents
              to COVID-19 — giving them the education, dignity, and love every
              child deserves.
            </p>
            <div className="animate-fade-up delay-300 mt-8 flex flex-wrap gap-3">
              <Link
                to="/causes"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition"
                style={{ boxShadow: "var(--shadow-warm)" }}
              >
                Start Donating <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/volunteer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-medium hover:bg-muted transition"
              >
                Become a Volunteer
              </Link>
            </div>
          </div>
          <div className="relative animate-zoom-in delay-200">
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-primary/30 blur-2xl animate-float-soft" />
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
          className="rounded-3xl object-cover aspect-[5/6] w-full hover-lift"
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
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
            Read our story <ArrowRight className="h-4 w-4" />
          </Link>
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
                className="rounded-2xl border border-border bg-background p-8 hover-lift hover:shadow-md"
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
          <Link
            to="/volunteer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-medium hover:opacity-90 transition"
          >
            Join as Volunteer <ArrowRight className="h-4 w-4" />
          </Link>
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
          <Link
            to="/causes"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 font-medium hover:opacity-90 transition"
          >
            Donate Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
