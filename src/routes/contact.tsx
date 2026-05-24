import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Divya Chetna Foundation" },
      { name: "description", content: "Reach the foundation — Malad West office, phone, email, and a quick message form." },
      { property: "og:title", content: "Contact — Divya Chetna Foundation" },
      { property: "og:description", content: "Say hello. We read every message." },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Say hello"
        title="Get in touch."
        description="Questions about a donation, volunteering, or our work? Drop us a line and we'll reply within a couple of days."
      />
      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <InfoCard icon={MapPin} title="Address" lines={["A wing 1402 Galaxy Height 57,", "Jankalyan Nagar, Malad West 400095"]} />
          <InfoCard icon={Phone} title="Phone" lines={["(307) 212-9320", "(0) 7977-750-145"]} />
          <InfoCard icon={Mail} title="Email" lines={["info@divyachetna.org.in"]} />
        </div>
        <form
          className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 md:p-10"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <h2 className="text-2xl font-semibold">Send a message</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Your name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <div className="mt-4">
            <Field label="Subject" name="subject" />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium">Message</label>
            <textarea required rows={5} className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="How can we help?" />
          </div>
          <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition">
            Send message <Send className="h-4 w-4" />
          </button>
          {sent && <p className="mt-4 text-sm text-primary">Thanks — we'll be in touch shortly.</p>}
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <span className="inline-grid place-items-center h-11 w-11 rounded-xl bg-primary-soft text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-semibold">{title}</h3>
      {lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
    </div>
  );
}