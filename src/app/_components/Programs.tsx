"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  HeartPulse,
  Moon,
} from "lucide-react";
import Link from "next/link";

const programs = [
  {
    icon: HeartPulse,
    title: "Therapeutic Yoga",
    description:
      "Personalised yoga therapy designed around your health condition, lifestyle and individual needs.",
    features: [
      "Condition-specific practices",
      "Individual assessment",
      "Progress monitoring",
    ],
  },
  {
    icon: Brain,
    title: "Mind & Stress Wellness",
    description:
      "Evidence-informed practices to support stress management, emotional balance and mental wellbeing.",
    features: [
      "Breathing practices",
      "Mindfulness techniques",
      "Relaxation training",
    ],
    recommended: true,
  },
  {
    icon: Moon,
    title: "Sleep & Recovery",
    description:
      "A structured approach using yoga, breathwork and relaxation techniques to support healthy sleep and recovery.",
    features: [
      "Sleep-supportive practices",
      "Yoga Nidra",
      "Evening relaxation",
    ],
  },
];

export default function Programs() {
  return (
    <section className="relative overflow-hidden bg-[#050706] px-6 py-24 text-[#f7efe0]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2d6b4b18,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#d6b36a]">
            Our Programs
          </p>

          <h2 className="mt-5 max-w-5xl text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.05em]">
            A personalised path to{" "}
            <span className="text-[#7bae8a]">better wellbeing.</span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#b8c4ba]">
            Choose a structured program designed to help you build healthier
            habits through personalised yoga, breathwork, mindfulness and
            relaxation practices.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur transition hover:border-[#d6b36a]/40"
              >
                {program.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#d6b36a] px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#050706]">
                    Recommended
                  </div>
                )}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d6b36a]/10 text-[#d6b36a]">
                  <Icon className="h-8 w-8" />
                </div>

                <p className="mt-8 text-xs font-black uppercase tracking-[0.25em] text-[#7bae8a]">
                  Personalised Care
                </p>

                <h3 className="mt-3 text-2xl font-black text-white">
                  {program.title}
                </h3>

                <p className="mt-4 leading-7 text-[#b8c4ba]">
                  {program.description}
                </p>

                <ul className="mt-7 space-y-3">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-[#c7d0c9]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#d6b36a]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/booking"
                  className="mt-8 flex items-center justify-center gap-2 rounded-full border border-[#d6b36a]/30 px-6 py-3 text-sm font-black uppercase tracking-[0.15em] text-[#d6b36a] transition hover:bg-[#d6b36a] hover:text-[#050706]"
                >
                  Explore Program
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[3rem] border border-[#d6b36a]/20 bg-[#0c120e] p-10 text-center"
        >
          <h3 className="text-3xl font-black text-white">
            Not sure which program is right for you?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-[#b8c4ba]">
            Start with a personalised assessment and receive guidance based on
            your goals, lifestyle and current wellbeing needs.
          </p>

          <Link
            href="/booking"
            className="mt-7 inline-flex rounded-full bg-[#d6b36a] px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-[#050706] transition hover:bg-[#e4c982]"
          >
            Book Assessment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}