import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, ShieldCheck, GraduationCap, HandHeart, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About -Divya Chetna Foundation" },
      {
        name: "description",
        content:
          "Founded in June 2021 to ensure that children who lost a parent to COVID-19 can continue their education.",
      },
      { property: "og:title", content: "About -Divya Chetna Foundation" },
      {
        property: "og:description",
        content:
          "Section 8 non-profit supporting 200+ students across Nashik with fees, books, uniforms, counselling and career guidance.",
      },
    ],
  }),
});

const values = [
  {
    icon: GraduationCap,
    title: "Education first",
    body: "School and college fees, books, uniforms -so learning never pauses.",
  },
  {
    icon: HandHeart,
    title: "Care that lasts",
    body: "Counselling and career guidance until they're standing on their own.",
  },
  {
    icon: ShieldCheck,
    title: "Accountable",
    body: "Section 8 company, governed by bylaws, fully 80G certified.",
  },
  {
    icon: Award,
    title: "Local impact",
    body: "Rooted in Nashik, with families who know the children we serve.",
  },
];

const directors = [
  {
    name: "Mr. Madhukar Brahmankar",
    role: "President",
    img: "/images/directors/Mr.Madhukar Brahmankar.jpeg",
  },
  {
    name: "Mrs. Kanta Rathi",
    role: "Vice President",
    img: "/images/directors/Mrs Kanta Rathi.jpeg",
  },
  {
    name: "Mr. Prashant Patil",
    role: "Hon. Secretary",
    img: "/images/directors/Prashant Patil.jpeg",
  },
  { name: "Mr. Hemant Rathi", role: "Mentor", img: "/images/directors/Hemant Rathi .JPG.jpeg" },
];

const members = [
  { name: "Mr. Arvind Mahapatra", img: "/images/directors/Arvind Mahapatra.jpg" },
  { name: "Mr. Vijay Baviskar", img: "/images/directors/Vija_y Baviskar.png" },
  { name: "Dr. Atul Vadgaonkar", img: "/images/directors/Dr Atul Vadgaonkar.jpeg" },
  { name: "Mr. Gaurav Thakkar", img: "/images/directors/Gaurav thakkar.jpeg" },
  { name: "Mr. Kailas Patil", img: "/images/directors/Kailas patil.jpeg" },
  { name: "Mr. Joy Aloor", img: "/images/directors/Joy Aloor.jpeg" },
  { name: "Mr. Avinash Gunjal", img: "/images/directors/Avinash Gunjal.jpg" },
  { name: "CA. Ulhas Patil", img: "/images/directors/CA Ulhas Patil.jpeg" },
  { name: "Mrs. Jaya Patel", img: "/images/directors/Jaya Patel.jpeg" },
  { name: "Dr. Archana Yeola", img: "/images/directors/Dr Archana Yeola.jpeg" },
  { name: "Dr. Nilima Chafekar", img: "/images/directors/Dr Nilima Chafekar.jpeg" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A small foundation with a singular promise."
        description="Divya Chetna Social Foundation was founded in June 2021 with one objective -to make sure no child's education stops because of a loss they didn't choose."
      />
      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <img
          src="/images/gallery/WhatsApp Image 2026-02-28 at 3.07.57 PM.jpeg"
          alt="A student studying"
          className="rounded-3xl object-cover aspect-[4/5] w-full animate-zoom-in hover-lift"
          loading="lazy"
        />
        <div>
          <p className="text-muted-foreground leading-relaxed">
            The first and second waves of COVID-19 left lasting scars on Nashik and beyond. The
            death of a parent doesn't just bring grief -it derails a child's schooling, books, and
            dreams. We exist to make sure it doesn't.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We pay school and college fees, hand out stationery and uniforms, sit with families
            through counselling, and help surviving parents learn a trade so they can stand on their
            own again. We identify the student, we take responsibility, we walk with them to a
            career.
          </p>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <div className="text-5xl font-semibold text-primary">200+</div>
            <p className="mt-2 text-sm text-muted-foreground">
              students from Nashik supported with school/college fees, books, stationery, and
              uniforms through their education.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Our approach
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
            How we work.
          </h2>
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
        <div className="text-center mb-14">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Leadership
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
            Directors.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {directors.map((p) => (
            <div key={p.name} className="text-center">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top hover:scale-105 transition duration-300"
                />
              </div>
              <p className="mt-3 text-base font-bold uppercase tracking-wider text-primary">
                {p.role}
              </p>
              <h3 className="mt-1 font-semibold text-lg">{p.name}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 mb-14">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Team</span>
          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
            Our members.
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {members.map((p) => (
            <div key={p.name} className="text-center w-[calc(25%-18px)]">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="mt-3 font-semibold text-base">{p.name}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-medium hover:bg-muted transition"
          >
            Apply for scholarship <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight max-w-2xl mx-auto">
          Walk with us.
        </h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
          Donate, volunteer, or simply share the work. Every small act adds up.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition"
          >
            Donate now <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-medium hover:bg-muted transition"
          >
            Apply for scholarship
          </Link>
        </div>
      </section>
    </>
  );
}
