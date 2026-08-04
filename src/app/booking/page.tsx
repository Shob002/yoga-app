"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send, Clock, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { api } from "~/trpc/react";

const timeSlots = [
  { label: "Morning", slots: ["07:00", "08:00", "09:00", "10:00", "11:00"] },
  { label: "Afternoon", slots: ["12:00", "13:00", "14:00", "15:00", "16:00"] },
  { label: "Evening", slots: ["17:00", "18:00", "19:00", "20:00"] },
];

const today = new Date().toISOString().split("T")[0];
const maxDate = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

const initialForm = { name: "", phone: "", email: "", service: "", date: "", time: "", message: "" };

function validate(f: typeof initialForm): Record<string, string> {
  const e: Record<string, string> = {};
  if (!f.name.trim() || f.name.trim().length < 2) e.name = "Full name is required.";
  if (!f.phone.trim() || f.phone.replace(/[\s\-()]/g, "").length < 10) e.phone = "Valid phone number required.";
  if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Invalid email.";
  if (!f.service) e.service = "Select a service.";
  if (!f.date) e.date = "Select a date.";
  if (!f.time) e.time = "Select a time.";
  return e;
}

export default function BookingPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const mutation = api.booking.create.useMutation({
    onSuccess: () => { setSubmitted(true); setForm(initialForm); setErrors({}); setTouched({}); },
  });

  const update = (name: string, value: string) => {
    const f = { ...form, [name]: value };
    setForm(f);
    if (touched[name]) setErrors((p) => ({ ...p, [name]: validate(f)[name] || "" }));
  };

  const blur = (name: string) => {
    setTouched((p) => ({ ...p, [name]: true }));
    const err = validate(form);
    setErrors((p) => ({ ...p, [name]: err[name] || "" }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const t: Record<string, boolean> = {}; Object.keys(form).forEach((k) => (t[k] = true));
    setTouched(t);
    const err = validate(form);
    setErrors(err);
    if (Object.keys(err).length === 0) mutation.mutate(form);
  };

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-[440px] text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }} className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F2EFEA]"><CheckCircle2 className="h-7 w-7 text-[#1F3528]" /></motion.div>
          <h1 className="mt-6 text-[28px] font-bold text-[#1A1A1A]">Request submitted.</h1>
          <p className="mt-3 text-[15px] leading-[1.6] text-[#555555]">We will review your request and send a Zoom link within 24 hours.</p>
          <button onClick={() => setSubmitted(false)} className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-[#1A1A1A] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#333333]">Book Another Session <ArrowRight className="h-4 w-4" /></button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-12">
      <div className="w-full max-w-[600px]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8">
          <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1F3528]">Book a Session</p>
          <h1 className="text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1A1A1A]">Begin your wellness journey.</h1>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} onSubmit={submit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Full Name" value={form.name} onChange={(v) => update("name", v)} onBlur={() => blur("name")} placeholder="Your full name" error={touched.name ? errors.name : undefined} />
            <Input label="Phone Number" type="tel" value={form.phone} onChange={(v) => update("phone", v)} onBlur={() => blur("phone")} placeholder="9353708126" error={touched.phone ? errors.phone : undefined} />
            <Input label="Email Address" type="email" value={form.email} onChange={(v) => update("email", v)} onBlur={() => blur("email")} placeholder="you@example.com" error={touched.email ? errors.email : undefined} />
            <div>
              <label className="mb-1.5 block text-[13px] font-semibold text-[#1A1A1A]">Service <span className="text-red-500">*</span></label>
              <select value={form.service} onChange={(e) => update("service", e.target.value)} onBlur={() => blur("service")} className={`h-11 w-full rounded-lg border bg-white px-3 text-[14px] text-[#1A1A1A] outline-none transition ${touched.service && errors.service ? "border-red-400" : "border-[#E0DCD6] focus:border-[#1F3528]"}`}>
                <option value="">Select service</option>
                <option>Yoga Therapy</option><option>Stress Management</option><option>Back Pain Relief</option><option>Sleep Wellness</option><option>PCOS & Women's Wellness</option><option>Diabetes Management</option><option>Other</option>
              </select>
              {touched.service && errors.service && <p className="mt-1 text-[11px] text-red-500"><AlertCircle className="inline h-3 w-3" /> {errors.service}</p>}
            </div>
            <div>
              <label className="mb-1.5 block text-[13px] font-semibold text-[#1A1A1A]">Date <span className="text-red-500">*</span></label>
              <input type="date" min={today} max={maxDate} value={form.date} onChange={(e) => update("date", e.target.value)} onBlur={() => blur("date")} className={`h-11 w-full rounded-lg border bg-white px-3 text-[14px] text-[#1A1A1A] outline-none transition ${touched.date && errors.date ? "border-red-400" : "border-[#E0DCD6] focus:border-[#1F3528]"}`} />
              {touched.date && errors.date ? <p className="mt-1 text-[11px] text-red-500"><AlertCircle className="inline h-3 w-3" /> {errors.date}</p> : <p className="mt-1 text-[10px] text-[#8A8480]">Next 90 days</p>}
            </div>
            <div>
              <label className="mb-1.5 block text-[13px] font-semibold text-[#1A1A1A]">Time (IST) <span className="text-red-500">*</span></label>
              <select value={form.time} onChange={(e) => update("time", e.target.value)} onBlur={() => blur("time")} className={`h-11 w-full rounded-lg border bg-white px-3 text-[14px] text-[#1A1A1A] outline-none transition ${touched.time && errors.time ? "border-red-400" : "border-[#E0DCD6] focus:border-[#1F3528]"}`}>
                <option value="">Select time</option>
                {timeSlots.map((g) => (
                  <optgroup key={g.label} label={g.label}>
                    {g.slots.map((s) => <option key={s} value={s}>{s}</option>)}
                  </optgroup>
                ))}
              </select>
              {touched.time && errors.time && <p className="mt-1 text-[11px] text-red-500"><AlertCircle className="inline h-3 w-3" /> {errors.time}</p>}
            </div>
          </div>

          <div className="mt-4">
            <label className="mb-1.5 block text-[13px] font-semibold text-[#1A1A1A]">Health Concern / Goal</label>
            <textarea value={form.message} onChange={(e) => update("message", e.target.value)} rows={2} placeholder="Briefly describe your concern..." className="w-full resize-none rounded-lg border border-[#E0DCD6] bg-white px-3 py-2 text-[14px] leading-[1.6] text-[#1A1A1A] outline-none transition placeholder:text-[#8A8480] focus:border-[#1F3528]" />
          </div>

          <div className="mt-4 flex items-start gap-2 rounded-lg border border-[#E6E6E6] bg-[#FAF8F5] p-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#1F3528]" />
            <p className="text-[12px] leading-[1.5] text-[#8A8480]">Reviewed within 24 hours. Zoom link sent by email. Attend from anywhere.</p>
          </div>

          {mutation.isError && (
            <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2">
              <p className="text-[12px] text-red-600">{mutation.error.message || "Something went wrong."}</p>
            </div>
          )}

          <button type="submit" disabled={mutation.isPending} className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#1A1A1A] text-[14px] font-semibold text-white transition-colors hover:bg-[#333333] disabled:opacity-50">
            {mutation.isPending ? <><Loader2 className="h-4 w-4 animate-spin" /> Processing...</> : <><Send className="h-4 w-4" /> Submit Booking Request</>}
          </button>
        </motion.form>
      </div>
    </main>
  );
}

function Input({ label, value, onChange, onBlur, placeholder, type = "text", error }: {
  label: string; value: string; onChange: (v: string) => void; onBlur: () => void; placeholder?: string; type?: string; error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[13px] font-semibold text-[#1A1A1A]">{label} <span className="text-red-500">*</span></label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} onBlur={onBlur} placeholder={placeholder} className={`h-11 w-full rounded-lg border bg-white px-3 text-[14px] text-[#1A1A1A] outline-none transition placeholder:text-[#8A8480] ${error ? "border-red-400" : "border-[#E0DCD6] focus:border-[#1F3528]"}`} />
      {error && <p className="mt-1 text-[11px] text-red-500"><AlertCircle className="inline h-3 w-3" /> {error}</p>}
    </div>
  );
}