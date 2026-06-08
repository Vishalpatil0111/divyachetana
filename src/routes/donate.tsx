import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, ShieldCheck, Heart, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/donate")({
  component: DonatePage,
  head: () => ({
    meta: [
      { title: "Donate — Divyachetana Foundation" },
      { name: "description", content: "Donate securely online via Razorpay. 80G tax exempt." },
      { property: "og:title", content: "Donate — Divyachetana Foundation" },
      { property: "og:description", content: "Your gift puts a child back in school." },
    ],
  }),
});

const AMOUNTS = [500, 1000, 2500, 5000, 10000];

function DonatePage() {
  const [amount, setAmount] = useState<number>(1000);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
    address: "",
    feedback: "",
    anonymous: false,
    receipt80G: true,
  });
  const [paying, setPaying] = useState(false);
  const [paid, setPaid] = useState(false);

  const finalAmount = custom ? Number(custom) : amount;

  // Frontend-only Razorpay stub. Replace key & order creation when backend is added.
  function handleRazorpay(e: React.FormEvent) {
    e.preventDefault();
    if (!finalAmount || finalAmount < 10) return;
    setPaying(true);
    // Mock — simulate opening Razorpay checkout
    setTimeout(() => {
      setPaying(false);
      setPaid(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1200);
  }

  if (paid) {
    return (
      <>
        <PageHero eyebrow="Thank you" title="Your donation matters." description="A receipt has been emailed to you. Welcome to the Divyachetana family." />
        <section className="max-w-3xl mx-auto px-6 py-20 text-center">
          <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-semibold">₹{finalAmount.toLocaleString("en-IN")} received</h2>
          <p className="mt-3 text-muted-foreground">Your {frequency} donation will go directly toward fees, books and uniforms for a child in need.</p>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Make a donation"
        title="Fund a child's school year."
        description="Pay securely via Razorpay — UPI, cards, netbanking. 80G tax exempt."
      />
      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-5 gap-10">
        <aside className="lg:col-span-2 space-y-5">
          <div className="rounded-3xl border border-border bg-card p-7">
            <Heart className="h-5 w-5 text-primary mb-3" />
            <h3 className="font-semibold text-lg">Where your money goes</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex justify-between gap-3"><span>₹500</span><span>One month of stationery</span></li>
              <li className="flex justify-between gap-3"><span>₹1,000</span><span>Books for one term</span></li>
              <li className="flex justify-between gap-3"><span>₹2,500</span><span>School uniform set</span></li>
              <li className="flex justify-between gap-3"><span>₹10,000</span><span>One year of school fees</span></li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-primary-soft/40 p-7 text-sm">
            <ShieldCheck className="h-5 w-5 text-primary mb-3" />
            <p className="font-medium text-foreground">Secure payment via Razorpay</p>
            <p className="mt-2 text-muted-foreground">Section 8 registered · 80G tax exempt · Receipt sent to email</p>
          </div>
        </aside>

        <form onSubmit={handleRazorpay} className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 md:p-10 space-y-7">
          <div>
            <label className="text-sm font-semibold">Donation type</label>
            <div className="mt-2 grid grid-cols-2 gap-2 p-1 bg-muted rounded-full">
              {(["one-time", "monthly"] as const).map((f) => (
                <button
                  type="button"
                  key={f}
                  onClick={() => setFrequency(f)}
                  className={`py-2.5 rounded-full text-sm font-medium capitalize transition ${frequency === f ? "bg-background shadow text-foreground" : "text-muted-foreground"}`}
                >
                  {f.replace("-", " ")}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold">Choose amount (₹)</label>
            <div className="mt-2 grid grid-cols-5 gap-2">
              {AMOUNTS.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => { setAmount(a); setCustom(""); }}
                  className={`py-3 rounded-xl border text-sm font-semibold transition ${!custom && amount === a ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border hover:border-primary"}`}
                >
                  {a.toLocaleString("en-IN")}
                </button>
              ))}
            </div>
            <input
              type="number"
              min={10}
              placeholder="Or enter custom amount"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
            <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
            <Field label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
            <Field label="PAN (for 80G receipt)" value={form.pan} onChange={(v) => setForm({ ...form, pan: v.toUpperCase() })} placeholder="ABCDE1234F" />
          </div>
          <Field label="Address" value={form.address} onChange={(v) => setForm({ ...form, address: v })} />

          <div>
            <label className="text-sm font-semibold">Feedback / Suggestions</label>
            <textarea
              rows={3}
              value={form.feedback}
              onChange={(e) => setForm({ ...form, feedback: e.target.value })}
              placeholder="Anything you'd like us to know? A message, a memory, a suggestion…"
              className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2.5">
              <input type="checkbox" checked={form.receipt80G} onChange={(e) => setForm({ ...form, receipt80G: e.target.checked })} className="h-4 w-4 accent-primary" />
              <span>Send me an 80G tax exemption receipt</span>
            </label>
            <label className="flex items-center gap-2.5">
              <input type="checkbox" checked={form.anonymous} onChange={(e) => setForm({ ...form, anonymous: e.target.checked })} className="h-4 w-4 accent-primary" />
              <span>Keep my donation anonymous publicly</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={paying || !finalAmount || finalAmount < 10}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {paying ? "Opening Razorpay…" : (<>Pay ₹{(finalAmount || 0).toLocaleString("en-IN")} via Razorpay <ArrowRight className="h-4 w-4" /></>)}
          </button>
          <p className="text-xs text-muted-foreground text-center">By donating you agree to our terms. Test mode — backend integration pending.</p>
        </form>
      </section>
    </>
  );
}

function Field({ label, value, onChange, type = "text", required, placeholder }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}