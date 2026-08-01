"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, MessageCircle, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { api } from "~/trpc/react";

const contactInfo = [
  { icon: Phone, label: "Call / WhatsApp", value: "9353708126", href: "tel:9353708126" },
  { icon: Mail, label: "Email", value: "info@hayagrivayoga.com", href: "mailto:info@hayagrivayoga.com" },
  { icon: MapPin, label: "Location", value: "Tumakuru, Karnataka, India", href: "#" },
];

const reasons = [
  "Personal Yoga Therapy",
  "Stress & Anxiety Management",
  "Back Pain Management",
  "Lifestyle Disorder Support",
  "Corporate Wellness",
  "General Enquiry",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  subject: reasons[0] ?? "General Enquiry",
  message: "",
};

function validateForm(form: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim()) {
    errors.name = "Full name is required.";
  } else if (form.name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters.";
  }

  const phoneClean = form.phone.replace(/[\s\-()]/g, "");
  if (form.phone.trim() && !/^\+?\d{7,15}$/.test(phoneClean)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!form.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 5) {
    errors.message = "Message must be at least 5 characters.";
  }

  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const contactMutation = api.contact.send.useMutation({
    onSuccess: () => {
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const allTouched: Record<string, boolean> = {};
    Object.keys(form).forEach((key) => (allTouched[key] = true));
    setTouched(allTouched);
    const newErrors = validateForm(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    contactMutation.mutate({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || undefined,
      subject: form.subject.trim(),
      message: form.message.trim(),
    });
  }

  return (
    <main className="bg-white px-6 py-12 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1F3528]">Contact Us</p>
            <h1 className="text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1A1A1A] lg:text-[56px]">Let's talk about your wellness.</h1>
            <p className="mt-4 max-w-[480px] text-[16px] leading-[1.7] text-[#555555]">Connect with our yoga therapy team for personalized guidance on your health journey.</p>

            <div className="mt-12 space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href} className="flex items-center gap-4 rounded-lg border border-[#E0DCD6] bg-[#FAF8F5] p-5 transition-all duration-150 hover:border-[#1F3528] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2EFEA]">
                      <Icon className="h-5 w-5 text-[#1F3528]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#8A8480]">{item.label}</p>
                      <p className="text-[15px] font-semibold text-[#1A1A1A]">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <a
              href="https://wa.me/919353708126"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-[48px] items-center gap-2 rounded-full bg-[#25D366] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#20BA5A]"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} onSubmit={handleSubmit} noValidate className="rounded-lg border border-[#E0DCD6] bg-[#FAF8F5] p-7 lg:p-10">
            {contactMutation.isSuccess && (
              <div className="mb-6 rounded-lg border border-[#1F3528]/20 bg-[#1F3528]/5 px-4 py-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#1F3528]" />
                  <div>
                    <p className="text-[14px] font-semibold text-[#1F3528]">Message sent successfully.</p>
                    <p className="text-[12px] text-[#555555]">We will get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" value={form.name} onChange={handleChange} onBlur={handleBlur} placeholder="Your full name" required error={touched.name ? errors.name : undefined} />
                <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} onBlur={handleBlur} placeholder="9353708126" error={touched.phone ? errors.phone : undefined} />
              </div>
              <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="you@example.com" required error={touched.email ? errors.email : undefined} />
              <div>
                <label htmlFor="subject" className="mb-2 block text-[13px] font-semibold text-[#1A1A1A]">How Can We Help?</label>
                <select id="subject" name="subject" value={form.subject} onChange={handleChange} className="h-[48px] w-full rounded-lg border border-[#E0DCD6] bg-white px-4 text-[14px] text-[#1A1A1A] outline-none transition focus:border-[#1F3528] focus:ring-2 focus:ring-[#1F3528]/10">
                  {reasons.map((reason) => (<option key={reason} value={reason}>{reason}</option>))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-[13px] font-semibold text-[#1A1A1A]">Message <span className="text-red-500">*</span></label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} onBlur={handleBlur} rows={5} placeholder="Tell us about your health goal or concern..." required className={`w-full resize-none rounded-lg border bg-white px-4 py-3 text-[14px] leading-[1.7] text-[#1A1A1A] outline-none transition placeholder:text-[#8A8480] focus:ring-2 focus:ring-[#1F3528]/10 ${touched.message && errors.message ? "border-red-400 focus:border-red-400" : "border-[#E0DCD6] focus:border-[#1F3528]"}`} />
                {touched.message && errors.message && <p className="mt-1 flex items-center gap-1 text-[12px] text-red-500"><AlertCircle className="h-3 w-3" />{errors.message}</p>}
              </div>

              {contactMutation.isError && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                  <p className="text-[13px] text-red-600">{contactMutation.error.message || "Something went wrong. Please try again."}</p>
                </div>
              )}

              <button type="submit" disabled={contactMutation.isPending} className="flex h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#1A1A1A] text-[15px] font-semibold text-white transition-colors hover:bg-[#333333] disabled:opacity-50">
                {contactMutation.isPending ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <><Send className="h-4 w-4" /> Send Message</>}
              </button>

              <p className="text-center text-[12px] text-[#8A8480]">We typically respond within 24 hours.</p>
            </div>
          </motion.form>
        </div>
      </div>
    </main>
  );
}

function Field({ label, name, value, onChange, onBlur, placeholder, type = "text", required = false, error }: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[13px] font-semibold text-[#1A1A1A]">{label}{required && <span className="text-red-500"> *</span>}</label>
      <input id={name} name={name} type={type} value={value} onChange={onChange} onBlur={onBlur} placeholder={placeholder} required={required} className={`h-[48px] w-full rounded-lg border bg-white px-4 text-[14px] text-[#1A1A1A] outline-none transition placeholder:text-[#8A8480] focus:ring-2 focus:ring-[#1F3528]/10 ${error ? "border-red-400 focus:border-red-400" : "border-[#E0DCD6] focus:border-[#1F3528]"}`} />
      {error && <p className="mt-1 flex items-center gap-1 text-[12px] text-red-500"><AlertCircle className="h-3 w-3" />{error}</p>}
    </div>
  );
}