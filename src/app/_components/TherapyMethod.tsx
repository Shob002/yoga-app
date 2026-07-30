"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Video,
  ClipboardCheck,
  HeartPulse,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const methods = [
  {
    icon: Video,
    title: "Personalised 1-on-1 Therapy",
    description:
      "Work directly with a qualified yoga therapist through live online sessions tailored to your health concerns, lifestyle and goals.",
    badge: "PERSONALISED CARE",
    features: [
      "Individual assessment",
      "Live therapist guidance",
      "Personalised practices",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Assessment-Based Programs",
    description:
      "Your therapy plan begins with understanding your needs and is structured around appropriate yoga, breathing, relaxation and lifestyle practices.",
    badge: "THERAPY PLAN",
    features: [
      "Health-focused assessment",
      "Structured practice plan",
      "Progress-based adjustments",
    ],
  },
  {
    icon: HeartPulse,
    title: "Ongoing Wellness Support",
    description:
      "Receive continued guidance as you build sustainable habits and integrate therapeutic yoga into your everyday life.",
    badge: "LONG-TERM SUPPORT",
    features: [
      "Regular follow-up",
      "Practice progression",
      "Lifestyle guidance",
    ],
  },
];

export default function TherapyMethod() {
  return (
    <section
      id="therapy"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#d6b36a]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#7bae8a]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[#d6b36a]/20 bg-[#d6b36a]/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9b7a32]">
            Our Approach
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#171a18] md:text-5xl">
            Yoga Therapy Designed
            <span className="block text-[#9b7a32]">
              Around You
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#666666] md:text-lg">
            We combine traditional yoga practices with structured assessment
            and personalised therapeutic guidance to support your health
            journey.
          </p>
        </motion.div>

        {/* Therapy Methods */}
        <div className="grid gap-6 lg:grid-cols-3">
          {methods.map((method, index) => {
            const Icon = method.icon;

            return (
              <motion.article
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="group relative flex h-full flex-col rounded-3xl border border-[#e7e7e7] bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#d6b36a]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:p-8"
              >
                {/* Badge */}
                <div className="mb-7">
                  <span className="inline-flex rounded-full border border-[#d6b36a]/20 bg-[#faf8f2] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9b7a32]">
                    {method.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d6b36a]/10 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-7 w-7 text-[#b28b3c]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-[#171a18] md:text-2xl">
                  {method.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-[#666666]">
                  {method.description}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-[#eeeeee]" />

                {/* Features */}
                <ul className="space-y-3">
                  {method.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[#555555]"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#7bae8a]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/booking"
                  className="mt-auto pt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#9b7a32] transition-all group-hover:gap-3"
                >
                  Explore Therapy
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 overflow-hidden rounded-[2rem] border border-[#d6b36a]/20 bg-[#faf9f5] px-6 py-12 text-center md:px-12 md:py-14"
        >
          <div className="mx-auto max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#7bae8a]">
              Begin Your Therapy Journey
            </p>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#171a18] md:text-4xl">
              Take the first step towards
              <span className="text-[#9b7a32]"> better wellbeing.</span>
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#666666] md:text-base">
              Book a consultation and discuss your health goals with our yoga
              therapy team before beginning a personalised program.
            </p>

            <Link
              href="/booking"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#171a18] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2a302c] hover:shadow-lg"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}