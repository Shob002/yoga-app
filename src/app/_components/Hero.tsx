"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
  Video,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  "Personalized yoga therapy guidance",
  "One-to-one online consultation",
  "Therapy plans based on your individual needs",
  "Follow-up support throughout your journey",
];

const therapyAreas = [
  "Stress & anxiety",
  "Back & neck discomfort",
  "Sleep & relaxation",
  "Lifestyle & wellness",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050706] text-[#f7efe0]">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(214,179,106,0.08),transparent_32%),radial-gradient(circle_at_85%_70%,rgba(123,174,138,0.08),transparent_35%),linear-gradient(180deg,#080c09_0%,#050706_55%,#050706_100%)]" />

      {/* Decorative glow */}
      <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#d6b36a]/5 blur-[140px]" />
      <div className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#7bae8a]/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-12 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            {/* Brand badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d6b36a]/20 bg-[#d6b36a]/5 px-4 py-2"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#d6b36a]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#d6b36a]">
                Hayagriva Yoga Therapy
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.6 }}
              className="text-[clamp(3rem,6vw,5.7rem)] font-black leading-[0.95] tracking-[-0.045em]"
            >
              Yoga for Your
              <span className="block text-[#d6b36a]">
                Health. Mind. Life.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.6 }}
              className="mt-7 max-w-xl text-base leading-7 text-[#b8c4ba] sm:text-lg"
            >
              Personalized yoga therapy that brings traditional yogic
              practices into a structured, practical approach to wellbeing.
              Begin with an individual consultation and receive guidance based
              on your goals and needs.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.6 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/booking"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d6b36a] px-7 py-4 text-sm font-black text-[#050706] shadow-[0_15px_45px_rgba(214,179,106,0.12)] transition duration-300 hover:-translate-y-1 hover:bg-[#e2c27e] hover:shadow-[0_20px_55px_rgba(214,179,106,0.18)]"
              >
                Book a Consultation

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-bold text-[#d9e0da] transition duration-300 hover:border-[#d6b36a]/30 hover:bg-[#d6b36a]/5 hover:text-[#d6b36a]"
              >
                Explore Programs
              </Link>
            </motion.div>

            {/* Trust statement */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.6 }}
              className="mt-8 flex items-start gap-3"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7bae8a]/10">
                <ShieldCheck className="h-4 w-4 text-[#7bae8a]" />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#e8e1d5]">
                  Personalized guidance, not a one-size-fits-all class
                </p>

                <p className="mt-1 text-xs leading-5 text-[#66746b]">
                  Your sessions are planned around your individual goals,
                  lifestyle and practice needs.
                </p>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.6 }}
              className="mt-10 grid gap-3 sm:grid-cols-2"
            >
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7bae8a]" />

                  <span className="text-sm leading-5 text-[#aebbb2]">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xl lg:ml-auto"
          >
            {/* Main visual card */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d6b36a]/20 bg-[#0b100d] shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
              {/* Logo area */}
              <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden px-8 py-12 sm:min-h-[600px]">
                {/* Background circles */}
                <div className="absolute left-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full border border-[#d6b36a]/10" />
                <div className="absolute right-[-120px] bottom-[-120px] h-[350px] w-[350px] rounded-full border border-[#7bae8a]/10" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,179,106,0.07),transparent_48%)]" />

                {/* Logo */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-[#d6b36a]/20 bg-[#050706]/70 p-8 shadow-[0_0_80px_rgba(214,179,106,0.08)] sm:h-52 sm:w-52">
                    <Image
                      src="/images/hayagriva-yoga-logo.png"
                      alt="Hayagriva Yoga"
                      fill
                      priority
                      sizes="208px"
                      className="object-contain p-7"
                    />
                  </div>

                  <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.35em] text-[#d6b36a]">
                    Traditional Wisdom
                  </p>

                  <h2 className="mt-3 text-3xl font-black tracking-tight text-[#f7efe0] sm:text-4xl">
                    Personalized
                    <span className="block text-[#d6b36a]">
                      Yoga Therapy
                    </span>
                  </h2>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-[#87958b]">
                    A thoughtful approach combining yoga practices,
                    breathwork, relaxation and mindful living for your
                    individual wellness journey.
                  </p>
                </div>

                {/* Top floating label */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0b100d]/80 px-4 py-3 backdrop-blur-xl">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7bae8a]/10">
                    <Video className="h-3.5 w-3.5 text-[#7bae8a]" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-[#f7efe0]">
                      Online Sessions
                    </p>

                    <p className="text-[9px] text-[#66746b]">
                      From anywhere
                    </p>
                  </div>
                </div>

                {/* Top right label */}
                <div className="absolute right-5 top-5 rounded-2xl border border-[#d6b36a]/15 bg-[#d6b36a]/5 px-4 py-3 backdrop-blur-xl">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#d6b36a]">
                    1-on-1
                  </p>

                  <p className="mt-0.5 text-[10px] text-[#87958b]">
                    Personal attention
                  </p>
                </div>

                {/* Bottom information */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#050706]/80 p-4 backdrop-blur-xl">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d6b36a]/10">
                        <CalendarCheck className="h-4 w-4 text-[#d6b36a]" />
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold text-[#f7efe0]">
                          Flexible Booking
                        </p>

                        <p className="mt-0.5 text-[9px] text-[#66746b]">
                          Schedule your session
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7bae8a]/10">
                        <ShieldCheck className="h-4 w-4 text-[#7bae8a]" />
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold text-[#f7efe0]">
                          Individual Care
                        </p>

                        <p className="mt-0.5 text-[9px] text-[#66746b]">
                          Guidance for your needs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating therapy areas card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute -bottom-7 -left-4 hidden w-64 rounded-2xl border border-white/10 bg-[#0d1511]/95 p-4 shadow-2xl backdrop-blur-xl sm:block lg:-left-10"
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d6b36a]">
                Areas of Support
              </p>

              <div className="mt-3 grid grid-cols-2 gap-2">
                {therapyAreas.map((area) => (
                  <div
                    key={area}
                    className="rounded-lg border border-white/5 bg-white/[0.025] px-2 py-2 text-[9px] leading-4 text-[#aebbb2]"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 border-t border-white/5 pt-8"
        >
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d6b36a]/10">
                <CalendarCheck className="h-4 w-4 text-[#d6b36a]" />
              </div>

              <div>
                <p className="text-xs font-bold text-[#e8e1d5]">
                  Start with a consultation
                </p>

                <p className="mt-1 text-[10px] text-[#66746b]">
                  Understand your needs first
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7bae8a]/10">
                <Video className="h-4 w-4 text-[#7bae8a]" />
              </div>

              <div>
                <p className="text-xs font-bold text-[#e8e1d5]">
                  Online yoga therapy
                </p>

                <p className="mt-1 text-[10px] text-[#66746b]">
                  Connect from wherever you are
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d6b36a]/10">
                <ShieldCheck className="h-4 w-4 text-[#d6b36a]" />
              </div>

              <div>
                <p className="text-xs font-bold text-[#e8e1d5]">
                  Personalized approach
                </p>

                <p className="mt-1 text-[10px] text-[#66746b]">
                  Practice designed around you
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}