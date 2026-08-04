"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send, Video, Clock, UserCheck, ShieldCheck, MessageCircle, AlertCircle, Loader2, Phone, Mail, Calendar } from "lucide-react";
import { api } from "~/trpc/react";

const timeSlots = [
  { label: "Morning", slots: ["07:00", "08:00", "09:00", "10:00", "11:00"] },
  { label: "Afternoon", slots: ["12:00", "13:00", "14:00", "15:00", "16:00"] },
  { label: "Evening", slots: ["17:00", "18:00", "19:00", "20:00"] },
];

const today = new Date().toISOString().split("T")[0];
const maxDate = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  date?: string;
  time?: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

function validateForm(form: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Full name is required.";
  else if (form.name.trim().length < 2) errors.name = "Name must be at least 2 characters.";

  const phoneClean = form.phone.replace(/[\s\-()]/g, "");
  if (!form.phone.trim()) errors.phone = "Phone number is required.";
  else if (phoneClean.length < 10) errors.phone = "Phone must be at least 10 digits.";

  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = "Enter a valid email address.";

  if (!form.service) errors.service = "Please select a consultation type.";
  if (!form.date) errors.date = "Please select a preferred date.";
  if (!form.time) errors.time = "Please select a preferred time.";

  return errors;
}

export default function BookingPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [bookingResult, setBookingResult] = useState<{ bookingId?: string; date?: string; time?: string; service?: string }>({});

  const createBooking = api.booking.create.useMutation({
    onSuccess: (data) => {
      setBookingResult({
        bookingId: data.bookingId,
        date: data.date,
        time: data.time,
        service: data.service,
      });
      setSubmitted(true);
      setForm(initialForm);
      setErrors({});
      setTouched({});
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (touched[name]) {
      const newErrors = validateForm(updated);
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validateForm(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
  }

  function selectTime(time: string) {
    const updated = { ...form, time };
    setForm(updated);
    setTouched((prev) => ({ ...prev, time: true }));
    const newErrors = validateForm(updated);
    setErrors((prev) => ({ ...prev, time: newErrors.time }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const allTouched: Record<string, boolean> = {};
    Object.keys(form).forEach((key) => (allTouched[key] = true));
    setTouched(allTouched);
    const newErrors = validateForm(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    createBooking.mutate(form);
  }

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-[480px] text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F2EFEA]">
            <CheckCircle2 className="h-7 w-7 text-[#1F3528]" />
          </div>
          <h1 className="mt-6 text-[28px] font-black text-[#000000]">Booking request submitted.</h1>
          <p className="mt-3 text-[15px] leading-[1.7] text-[#555555]">
            Thank you, {form.name || "your booking"} has been received. We will review your request and send a confirmation with your Zoom link shortly.
          </p>
          {bookingResult.date && (
            <div className="mt-6 rounded-lg border border-[#E0DCD6] bg-[#FAF8F5] p-5 text-left">
              <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#8A8480]">Request Summary</p>
              <p className="mt-2 text-[14px] font-semibold text-[#000000]">{bookingResult.service}</p>
              <p className="text-[13px] text-[#555555]">{bookingResult.date} at {bookingResult.time} IST</p>
            </div>
          )}
          <button onClick={() => setSubmitted(false)} className="mt-8 inline-flex h-[48px] items-center rounded-full bg-[#000000] px-8 text-[14px] font-black uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#1F3528]">
            Book Another Session
          </button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto grid max-w-[1240px] lg:grid-cols-[420px_1fr] lg:border-x lg:border-[#E6E6E6]">
        {/* LEFT — Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center border-b border-[#E6E6E6] bg-[#FAF8F5] px-8 py-16 lg:border-b-0 lg:border-r lg:border-[#E6E6E6] lg:py-0"
        >
          <div>
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-[#1F3528]">Book Consultation</p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F3528]">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-[15px] font-black text-[#000000]">Certified Therapists</p>
                  <p className="mt-1 text-[13px] font-medium leading-[1.5] text-[#8A8480]">MSc Yoga Therapy from MAHE, Manipal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F3528]">
                  <Video className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-[15px] font-black text-[#000000]">Online Sessions</p>
                  <p className="mt-1 text-[13px] font-medium leading-[1.5] text-[#8A8480]">Connect via Zoom from anywhere</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F3528]">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-[15px] font-black text-[#000000]">60 Minutes</p>
                  <p className="mt-1 text-[13px] font-medium leading-[1.5] text-[#8A8480]">Focused one-to-one session</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F3528]">
                  <UserCheck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-[15px] font-black text-[#000000]">Personalized Plan</p>
                  <p className="mt-1 text-[13px] font-medium leading-[1.5] text-[#8A8480]">Therapy designed around your needs</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F3528]">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-[15px] font-black text-[#000000]">Zoom Meeting</p>
                  <p className="mt-1 text-[13px] font-medium leading-[1.5] text-[#8A8480]">Secure link sent after confirmation</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919353708126"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-[14px] font-black uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#20BA5A]"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* RIGHT — Form Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center px-8 py-16 lg:py-0"
        >
          <form onSubmit={handleSubmit} noValidate className="w-full max-w-[560px]">
            <h2 className="mb-8 text-[28px] font-black tracking-[-0.02em] text-[#000000]">Your Details</h2>

            <div className="space-y-5">
              <Field label="Full Name" name="name" icon={<UserCheck className="h-4 w-4" />} value={form.name} onChange={handleChange} onBlur={handleBlur} placeholder="Your full name" required error={touched.name ? errors.name : undefined} />
              <Field label="Phone Number" name="phone" type="tel" icon={<Phone className="h-4 w-4" />} value={form.phone} onChange={handleChange} onBlur={handleBlur} placeholder="9353708126" required error={touched.phone ? errors.phone : undefined} />
              <Field label="Email Address" name="email" type="email" icon={<Mail className="h-4 w-4" />} value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="you@example.com" error={touched.email ? errors.email : undefined} />

              <div>
                <label htmlFor="service" className="mb-2 block text-[13px] font-black uppercase tracking-[0.1em] text-[#000000]">Consultation Type <span className="text-red-500">*</span></label>
                <select id="service" name="service" value={form.service} onChange={handleChange} onBlur={handleBlur} required className={`h-[52px] w-full rounded-lg border bg-white px-4 text-[15px] font-medium text-[#000000] outline-none transition focus:ring-2 focus:ring-[#1F3528]/10 ${touched.service && errors.service ? "border-red-400 focus:border-red-400" : "border-[#1A1A1A] focus:border-[#1F3528]"}`}>
                  <option value="">Select consultation type</option>
                  <option>Yoga Therapy</option>
                  <option>Stress Management</option>
                  <option>Back Pain Relief</option>
                  <option>Sleep Wellness</option>
                  <option>PCOS & Women's Wellness</option>
                  <option>Diabetes Management</option>
                  <option>Other</option>
                </select>
                {touched.service && errors.service && <p className="mt-1 flex items-center gap-1 text-[12px] font-medium text-red-500"><AlertCircle className="h-3 w-3" />{errors.service}</p>}
              </div>

              <div>
                <label htmlFor="date" className="mb-2 block text-[13px] font-black uppercase tracking-[0.1em] text-[#000000]">Preferred Date <span className="text-red-500">*</span></label>
                <input id="date" name="date" type="date" min={today} max={maxDate} value={form.date} onChange={handleChange} onBlur={handleBlur} required className={`h-[52px] w-full rounded-lg border bg-white px-4 text-[15px] font-medium text-[#000000] outline-none transition focus:ring-2 focus:ring-[#1F3528]/10 ${touched.date && errors.date ? "border-red-400 focus:border-red-400" : "border-[#1A1A1A] focus:border-[#1F3528]"}`} />
                {touched.date && errors.date ? <p className="mt-1 flex items-center gap-1 text-[12px] font-medium text-red-500"><AlertCircle className="h-3 w-3" />{errors.date}</p> : <p className="mt-1 text-[11px] text-[#8A8480]">Available up to 90 days ahead</p>}
              </div>

              <div>
                <label className="mb-3 block text-[13px] font-black uppercase tracking-[0.1em] text-[#000000]">Preferred Time (IST) <span className="text-red-500">*</span></label>
                <div className="space-y-4">
                  {timeSlots.map((group) => (
                    <div key={group.label}>
                      <p className="mb-2 text-[11px] font-black uppercase tracking-[0.15em] text-[#8A8480]">{group.label}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.slots.map((slot) => {
                          const isSelected = form.time === slot;
                          return (
                            <button key={slot} type="button" onClick={() => selectTime(slot)} className={`rounded-lg border-2 px-4 py-2.5 text-[13px] font-bold transition-all duration-150 ${isSelected ? "border-[#000000] bg-[#000000] text-white" : "border-[#D9D9D9] bg-white text-[#555555] hover:border-[#1F3528] hover:text-[#000000]"}`}>
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                {form.time && <p className="mt-3 text-[12px] font-bold text-[#1F3528]">Selected: <span className="font-black">{form.time}</span> IST</p>}
                {touched.time && errors.time && <p className="mt-1 flex items-center gap-1 text-[12px] font-medium text-red-500"><AlertCircle className="h-3 w-3" />{errors.time}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-[13px] font-black uppercase tracking-[0.1em] text-[#000000]">Health Concern / Goal</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Briefly describe your concern, symptoms, or wellness goal..." className="w-full resize-none rounded-lg border-2 border-[#1A1A1A] bg-white px-4 py-3 text-[15px] font-medium leading-[1.7] text-[#000000] outline-none transition placeholder:text-[#8A8480] focus:border-[#1F3528] focus:ring-2 focus:ring-[#1F3528]/10" />
              </div>

              {createBooking.isError && (
                <div className="rounded-lg border-2 border-red-400 bg-red-50 px-4 py-3">
                  <p className="text-[13px] font-medium text-red-600">{createBooking.error.message || "Something went wrong. Please try again."}</p>
                </div>
              )}

              <button type="submit" disabled={createBooking.isPending} className="flex h-[58px] w-full items-center justify-center gap-2 rounded-full bg-[#000000] text-[15px] font-black uppercase tracking-[0.1em] text-white transition-all duration-200 hover:bg-[#1F3528] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] disabled:opacity-50">
                {createBooking.isPending ? <><Loader2 className="h-5 w-5 animate-spin" /> Submitting...</> : <><Send className="h-5 w-5" /> Book Consultation</>}
              </button>

              <p className="text-center text-[12px] font-medium text-[#8A8480]">We will review your request and send a confirmation with your Zoom link.</p>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
}

function Field({ label, name, value, onChange, onBlur, placeholder, type = "text", icon, required = false, error }: {
  label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; onBlur: (e: React.FocusEvent<HTMLInputElement>) => void; placeholder?: string; type?: string; icon?: React.ReactNode; required?: boolean; error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[13px] font-black uppercase tracking-[0.1em] text-[#000000]">{label}{required && <span className="text-red-500"> *</span>}</label>
      <div className="relative">
        {icon && <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8480]">{icon}</div>}
        <input id={name} name={name} type={type} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} required={required} className={`h-[52px] w-full rounded-lg border bg-white text-[15px] font-medium text-[#000000] outline-none transition placeholder:text-[#8A8480] focus:ring-2 focus:ring-[#1F3528]/10 ${icon ? "pl-12 pr-4" : "px-4"} ${error ? "border-red-400 focus:border-red-400" : "border-[#1A1A1A] focus:border-[#1F3528]"}`} />
      </div>
      {error && <p className="mt-1 flex items-center gap-1 text-[12px] font-medium text-red-500"><AlertCircle className="h-3 w-3" />{error}</p>}
    </div>
  );
}