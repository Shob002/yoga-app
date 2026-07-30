"use client";

import Image from "next/image";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  Phone,
  Send,
  UserRound,
} from "lucide-react";
import { useState } from "react";

import { api } from "~/trpc/react";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const createBooking = api.booking.create.useMutation({
    onSuccess: () => {
      setSubmitted(true);

      setForm({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
    },
  });

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    createBooking.mutate({
      name: form.name,
      phone: form.phone,
      email: form.email,
      service: form.service,
      date: form.date,
      time: form.time,
      message: form.message,
    });
  }

  return (
    <main className="min-h-screen bg-[#050706] px-4 py-8 text-[#f7efe0] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <header className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/hayagriva-yoga-logo.png"
              alt="Hayagriva Yoga"
              width={190}
              height={70}
              priority
              className="h-auto w-[150px] object-contain sm:w-[180px]"
            />

            <div className="hidden h-10 w-px bg-white/10 sm:block" />

            <div className="hidden sm:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#7bae8a]">
                Yoga Therapy
              </p>

              <p className="mt-1 text-xs text-[#66746b]">
                Book your consultation
              </p>
            </div>
          </div>
        </header>

        {/* SUCCESS */}
        {submitted ? (
          <section className="mx-auto max-w-2xl rounded-3xl border border-[#7bae8a]/20 bg-[#0b100d] p-8 text-center shadow-2xl sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#7bae8a]/10">
              <CheckCircle2 className="h-8 w-8 text-[#7bae8a]" />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#7bae8a]">
              Request Received
            </p>

            <h1 className="mt-3 text-3xl font-black text-[#f7efe0]">
              Booking request submitted
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#8f9c94]">
              Thank you for choosing Hayagriva Yoga. Your booking
              request has been received successfully. We will review
              your request and confirm your session shortly.
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-8 rounded-xl bg-[#d6b36a] px-6 py-3 text-xs font-bold text-[#050706] transition hover:bg-[#e2c47e]"
            >
              Book Another Session
            </button>
          </section>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* LEFT INFORMATION */}
            <section className="rounded-3xl border border-white/10 bg-[#0b100d] p-6 shadow-2xl sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#7bae8a]">
                Hayagriva Yoga
              </p>

              <h1 className="mt-3 text-3xl font-black leading-tight text-[#f7efe0] sm:text-4xl">
                Begin your
                <br />
                wellness journey.
              </h1>

              <p className="mt-5 text-sm leading-7 text-[#8f9c94]">
                Schedule a yoga therapy session designed around your
                individual health goals, lifestyle and needs.
              </p>

              <div className="mt-8 space-y-4">
                <InfoCard
                  icon={<CalendarDays className="h-5 w-5" />}
                  title="Personalised Therapy"
                  description="Sessions are planned according to your individual needs."
                />

                <InfoCard
                  icon={<Clock3 className="h-5 w-5" />}
                  title="Online Consultation"
                  description="Attend your session conveniently from wherever you are."
                />

                <InfoCard
                  icon={<CheckCircle2 className="h-5 w-5" />}
                  title="Professional Guidance"
                  description="Receive structured guidance throughout your therapy journey."
                />
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#526057]">
                  What happens next?
                </p>

                <div className="mt-4 space-y-3">
                  <Step number="01" text="Submit your booking request" />
                  <Step number="02" text="Your request is reviewed" />
                  <Step number="03" text="Session is confirmed" />
                  <Step number="04" text="Receive your online session details" />
                </div>
              </div>
            </section>

            {/* BOOKING FORM */}
            <section className="rounded-3xl border border-white/10 bg-[#0b100d] shadow-2xl">
              <div className="border-b border-white/10 p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d6b36a]">
                  Appointment Request
                </p>

                <h2 className="mt-2 text-2xl font-black text-[#f7efe0]">
                  Book a session
                </h2>

                <p className="mt-2 text-sm text-[#66746b]">
                  Fill in your details and preferred session time.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 p-6 sm:p-8"
              >
                {/* PERSONAL DETAILS */}
                <div>
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#526057]">
                    Personal Details
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      label="Full Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      icon={<UserRound className="h-4 w-4" />}
                      required
                    />

                    <FormField
                      label="Phone Number"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      icon={<Phone className="h-4 w-4" />}
                      required
                    />

                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      icon={<Mail className="h-4 w-4" />}
                    />

                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-xs font-semibold text-[#b8c4ba]"
                      >
                        Therapy Service
                      </label>

                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="h-12 w-full rounded-xl border border-white/10 bg-[#050706] px-4 text-sm text-[#f7efe0] outline-none transition focus:border-[#d6b36a]/40 focus:ring-2 focus:ring-[#d6b36a]/10"
                      >
                        <option value="" className="bg-[#0b100d]">
                          Select a service
                        </option>

                        <option
                          value="Yoga Therapy"
                          className="bg-[#0b100d]"
                        >
                          Yoga Therapy
                        </option>

                        <option
                          value="Stress Management"
                          className="bg-[#0b100d]"
                        >
                          Stress Management
                        </option>

                        <option
                          value="Back Pain Relief"
                          className="bg-[#0b100d]"
                        >
                          Back Pain Relief
                        </option>

                        <option
                          value="Sleep Wellness"
                          className="bg-[#0b100d]"
                        >
                          Sleep Wellness
                        </option>

                        <option
                          value="Weight Management"
                          className="bg-[#0b100d]"
                        >
                          Weight Management
                        </option>

                        <option
                          value="Women's Wellness"
                          className="bg-[#0b100d]"
                        >
                          Women's Wellness
                        </option>

                        <option
                          value="Stress & Anxiety"
                          className="bg-[#0b100d]"
                        >
                          Stress & Anxiety
                        </option>

                        <option
                          value="Other"
                          className="bg-[#0b100d]"
                        >
                          Other
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* APPOINTMENT */}
                <div className="border-t border-white/10 pt-6">
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#526057]">
                    Preferred Appointment
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      label="Preferred Date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                    />

                    <FormField
                      label="Preferred Time"
                      name="time"
                      type="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="border-t border-white/10 pt-6">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold text-[#b8c4ba]"
                  >
                    Health Concern / Goal
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Briefly tell us about your concern, symptoms or wellness goal..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#050706] px-4 py-3 text-sm leading-6 text-[#f7efe0] outline-none transition placeholder:text-[#526057] focus:border-[#d6b36a]/40 focus:ring-2 focus:ring-[#d6b36a]/10"
                  />
                </div>

                {/* ERROR */}
                {createBooking.isError && (
                  <div className="rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3">
                    <p className="text-xs leading-5 text-red-300">
                      {createBooking.error.message ||
                        "Unable to submit your booking. Please try again."}
                    </p>
                  </div>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={createBooking.isPending}
                  className="flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#d6b36a] px-5 py-4 text-sm font-black text-[#050706] transition hover:bg-[#e2c47e] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {createBooking.isPending ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#050706]/30 border-t-[#050706]" />
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Booking Request
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] leading-5 text-[#526057]">
                  Your request will initially be marked as pending.
                  <br />
                  You will receive confirmation after your appointment
                  is reviewed.
                </p>
              </form>
            </section>
          </div>
        )}

        {/* FOOTER */}
        <footer className="py-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#526057]">
            © {new Date().getFullYear()} Hayagriva Yoga
          </p>
        </footer>
      </div>
    </main>
  );
}

function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold text-[#b8c4ba]"
      >
        {label}
      </label>

      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#526057]">
            {icon}
          </div>
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`h-12 w-full rounded-xl border border-white/10 bg-[#050706] pr-4 text-sm text-[#f7efe0] outline-none transition placeholder:text-[#526057] focus:border-[#d6b36a]/40 focus:ring-2 focus:ring-[#d6b36a]/10 ${
            icon ? "pl-11" : "pl-4"
          }`}
        />
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7bae8a]/10 text-[#7bae8a]">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-bold text-[#e8e1d5]">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-[#66746b]">
          {description}
        </p>
      </div>
    </div>
  );
}

function Step({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[10px] font-bold text-[#d6b36a]">
        {number}
      </span>

      <span className="text-xs text-[#8f9c94]">
        {text}
      </span>
    </div>
  );
}