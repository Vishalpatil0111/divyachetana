import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, CheckCircle2, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/apply")({
  component: ApplyPage,
  head: () => ({
    meta: [
      { title: "Apply for Scholarship — Divyachetana Foundation" },
      { name: "description", content: "Application form for children seeking educational support from Divyachetana." },
      { property: "og:title", content: "Apply for Scholarship — Divyachetana Foundation" },
      { property: "og:description", content: "Tell us about the child — we'll review your application within 7 days." },
    ],
  }),
});

function ApplyPage() {
  const [sent, setSent] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    childName: "",
    childAge: "",
    gender: "",
    school: "",
    grade: "",
    guardian: "",
    relation: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    parentLost: "",
    yearOfLoss: "",
    cause: "",
    income: "",
    siblings: "",
    requirement: "",
    consent: false,
  });

  function update<K extends keyof typeof form>(k: K, v: typeof form[K]) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (sent) {
    return (
      <>
        <PageHero eyebrow="Application received" title="Thank you for reaching out." description="Our team will review the application and contact you within 7 working days." />
        <section className="max-w-3xl mx-auto px-6 py-20 text-center">
          <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-2xl font-semibold">Application ID: DC-{Math.floor(Math.random() * 99999).toString().padStart(5, "0")}</h2>
          <p className="mt-3 text-muted-foreground">Save this ID for follow-up. We'll email you at <span className="text-foreground font-medium">{form.email || "your address"}</span>.</p>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Children's scholarship"
        title="Apply for educational support."
        description="A short application for children who have lost a parent or earning family member. Reviewed within 7 days."
      />
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-8">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex-1">
              <div className={`h-1.5 rounded-full ${step >= n ? "bg-primary" : "bg-muted"}`} />
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {n}. {n === 1 ? "Child" : n === 2 ? "Family" : "Need"}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-8 md:p-10 space-y-7">
          {step === 1 && (
            <>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">About the child</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Child's full name" value={form.childName} onChange={(v) => update("childName", v)} required />
                <Field label="Age" type="number" value={form.childAge} onChange={(v) => update("childAge", v)} required />
                <Select label="Gender" value={form.gender} onChange={(v) => update("gender", v)} options={["Male", "Female", "Other"]} required />
                <Field label="Current grade / class" value={form.grade} onChange={(v) => update("grade", v)} required />
                <Field label="School / college name" value={form.school} onChange={(v) => update("school", v)} />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl font-semibold">Guardian & family</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Guardian / parent name" value={form.guardian} onChange={(v) => update("guardian", v)} required />
                <Field label="Relation to child" value={form.relation} onChange={(v) => update("relation", v)} required />
                <Field label="Phone" type="tel" value={form.phone} onChange={(v) => update("phone", v)} required />
                <Field label="Email" type="email" value={form.email} onChange={(v) => update("email", v)} />
                <Field label="City" value={form.city} onChange={(v) => update("city", v)} required />
                <Field label="PIN code" value={form.pincode} onChange={(v) => update("pincode", v)} />
              </div>
              <Field label="Full address" value={form.address} onChange={(v) => update("address", v)} required />
              <div className="grid sm:grid-cols-2 gap-4">
                <Select label="Parent lost" value={form.parentLost} onChange={(v) => update("parentLost", v)} options={["Father", "Mother", "Both", "Earning family member"]} required />
                <Field label="Year of loss" type="number" value={form.yearOfLoss} onChange={(v) => update("yearOfLoss", v)} required />
                <Select label="Cause" value={form.cause} onChange={(v) => update("cause", v)} options={["COVID-19", "Severe illness", "Accident", "Heart attack", "Suicide", "Other"]} required />
                <Field label="Number of siblings" type="number" value={form.siblings} onChange={(v) => update("siblings", v)} />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-xl font-semibold">Financial need</h2>
              <Select label="Monthly family income" value={form.income} onChange={(v) => update("income", v)} options={["Below ₹5,000", "₹5,000 – ₹10,000", "₹10,000 – ₹20,000", "Above ₹20,000"]} required />
              <div>
                <label className="text-sm font-semibold">What kind of support is needed?</label>
                <textarea
                  rows={5}
                  required
                  value={form.requirement}
                  onChange={(e) => update("requirement", e.target.value)}
                  placeholder="e.g. School fees for two terms, uniform, books, tuition…"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <label className="flex items-start gap-2.5 text-sm">
                <input type="checkbox" required checked={form.consent} onChange={(e) => update("consent", e.target.checked)} className="mt-0.5 h-4 w-4 accent-primary" />
                <span className="text-muted-foreground">I confirm the information above is accurate and consent to Divyachetana contacting me for verification.</span>
              </label>
            </>
          )}

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
              className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold disabled:opacity-40"
            >
              Back
            </button>
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:opacity-90"
              >
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:opacity-90"
              >
                Submit application <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
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

function Select({ label, value, onChange, options, required }: { label: string; value: string; onChange: (v: string) => void; options: string[]; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}