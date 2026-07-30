"use client";

import Link from "next/link";
import {
  ArrowRight,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";

import { api } from "~/trpc/react";

const contactCards = [
  {
    icon: Phone,
    title: "Call / WhatsApp",
    value: "+91 9740174787",
    text: "For bookings, therapy sessions and wellness enquiries.",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@hayagrivayoga.com",
    text: "For official communication and programs.",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Tumakuru, Karnataka",
    text: "Online yoga therapy worldwide & offline consultation.",
  },
];

const reasons = [
  "Personal Yoga Therapy",
  "Stress & Anxiety Management",
  "Back Pain Management",
  "Lifestyle Disorder Support",
  "Corporate Wellness",
  "General Enquiry",
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(reasons[0] ?? "General Enquiry");
  const [message, setMessage] = useState("");

  const contactMutation = api.contact.send.useMutation({
    onSuccess: () => {
      setName("");
      setPhone("");
      setEmail("");
      setSubject(reasons[0] ?? "General Enquiry");
      setMessage("");
    },
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    contactMutation.mutate({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      subject: subject.trim(),
      message: message.trim(),
    });
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050706] px-6 py-10 text-[#f7efe0]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,#d6b36a25,transparent_35%),radial-gradient(circle_at_80%_60%,#2d6b4b40,transparent_35%),linear-gradient(180deg,#050706,#0b120e,#050706)]" />

      <div className="mx-auto max-w-7xl">
        {/* BACK */}
        <Link
          href="/"
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#d6b36a] transition hover:border-[#d6b36a]/40 hover:bg-[#d6b36a]/10"
        >
          ← Home
        </Link>

        <section className="grid gap-14 py-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d6b36a]">
              Contact Hayagriva Yoga
            </p>

            <h1 className="mt-6 text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.9] tracking-tight">
              Begin Your
              <br />
              <span className="text-[#d6b36a]">Healing</span>
              <br />
              Journey
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#b8c4ba]">
              Connect with our yoga therapy experts for personalised guidance
              in stress management, pain relief, lifestyle correction and
              holistic wellness.
            </p>

            {/* CONTACT CARDS */}
            <div className="mt-10 space-y-5">
              {contactCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-[#d6b36a]/50"
                  >
                    <div className="flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d6b36a]/10">
                        <Icon className="h-5 w-5 text-[#d6b36a]" />
                      </div>

                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-[#d6b36a]">
                          {item.title}
                        </p>

                        <h2 className="mt-2 text-xl font-black text-white">
                          {item.value}
                        </h2>

                        <p className="mt-2 text-sm text-[#b8c4ba]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919740174787"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#d6b36a] px-7 py-4 text-sm font-black text-[#050706] transition hover:bg-[#e2c47e]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>

              <Link
                href="/booking"
                className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-black transition hover:border-[#d6b36a]/50 hover:text-[#d6b36a]"
              >
                Book Session
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[3rem] border border-[#d6b36a]/20 bg-[#0d1511]/90 p-7 shadow-2xl md:p-10">
            <p className="text-xs font-black uppercase tracking-widest text-[#d6b36a]">
              Send Enquiry
            </p>

            <h2 className="mt-5 text-4xl font-black text-white">
              How can we help you?
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#66746b]">
              Send your enquiry and our team will get back to you.
            </p>

            {/* SUCCESS */}
            {contactMutation.isSuccess && (
              <div className="mt-6 rounded-2xl border border-[#7bae8a]/30 bg-[#7bae8a]/10 p-4">
                <p className="text-sm font-bold text-[#9ed0aa]">
                  Message sent successfully.
                </p>

                <p className="mt-1 text-xs text-[#7bae8a]">
                  Thank you for contacting Hayagriva Yoga. We will get back to
                  you soon.
                </p>
              </div>
            )}

            {/* ERROR */}
            {contactMutation.isError && (
              <div className="mt-6 rounded-2xl border border-red-400/30 bg-red-400/10 p-4">
                <p className="text-sm font-bold text-red-300">
                  Unable to send your message.
                </p>

                <p className="mt-1 text-xs text-red-300/70">
                  {contactMutation.error.message}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* NAME */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#66746b]"
                >
                  Full Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                  minLength={2}
                  disabled={contactMutation.isPending}
                  className="w-full rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 text-sm text-white outline-none transition placeholder:text-[#526057] focus:border-[#d6b36a] disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#66746b]"
                >
                  Mobile Number
                </label>

                <input
                  id="contact-phone"
                  name="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  type="tel"
                  autoComplete="tel"
                  disabled={contactMutation.isPending}
                  className="w-full rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 text-sm text-white outline-none transition placeholder:text-[#526057] focus:border-[#d6b36a] disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#66746b]"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={contactMutation.isPending}
                  className="w-full rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 text-sm text-white outline-none transition placeholder:text-[#526057] focus:border-[#d6b36a] disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#66746b]"
                >
                  How Can We Help?
                </label>

                <select
                  id="contact-subject"
                  name="subject"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  disabled={contactMutation.isPending}
                  className="w-full rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 text-sm text-white outline-none transition focus:border-[#d6b36a] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {reasons.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#66746b]"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={5}
                  placeholder="Tell us about your health goal..."
                  required
                  minLength={5}
                  disabled={contactMutation.isPending}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#050706] px-5 py-4 text-sm text-white outline-none transition placeholder:text-[#526057] focus:border-[#d6b36a] disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={contactMutation.isPending}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#d6b36a] py-5 font-black uppercase tracking-widest text-[#050706] transition hover:bg-[#e2c47e] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {contactMutation.isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}