"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  FileText,
  Heart,
  Video,
} from "lucide-react";

const journeySteps = [
  {
    icon: Calendar,
    number: "01",
    title: "Book a Consultation",
    description:
      "Choose a convenient date and time for your initial consultation with a yoga therapy professional.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Health Assessment",
    description:
      "Discuss your health concerns, lifestyle, symptoms and goals so your therapist can understand your individual needs.",
  },
  {
    icon: Video,
    number: "03",
    title: "Personalised Therapy",
    description:
      "Receive a structured yoga therapy approach including appropriate practices, breathing techniques and lifestyle guidance.",
  },
  {
    icon: Heart,
    number: "04",
    title: "Guided Progress",
    description:
      "Continue with regular sessions and personalised guidance while your practices are adjusted according to your progress.",
  },
];

const highlights = [
  {
    value: "1-on-1",
    label: "Personalised Guidance",
  },
  {
    value: "Online",
    label: "Therapy Sessions",
  },
  {
    value: "Evidence",
    label: "Informed Approach",
  },
];

export default function TherapyJourney() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-white py-24 text-[#1a1a1a] md:py-32"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#d6b36a]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#7bae8a]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[#d6b36a]/30 bg-[#d6b36a]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8d7135]">
            How Yoga Therapy Works
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#151815] md:text-5xl lg:text-6xl">
            Your Journey
            <span className="block text-[#8d7135]">
              Towards Better Wellbeing
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#666] md:text-lg">
            A structured and personalised journey that begins with
            understanding your needs and continues with guided yoga therapy
            practices designed around your individual goals.
          </p>
        </motion.div>

        {/* Journey Steps */}
        <div className="relative mt-20">
          {/* Desktop connector */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[54px] hidden h-px bg-[#e8e4d9] lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true, amount: 0.15 }}
                  className="group relative"
                >
                  {/* Number */}
                  <div className="relative z-10 mx-auto flex h-[108px] w-[108px] items-center justify-center rounded-full border border-[#d6b36a]/30 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition duration-300 group-hover:border-[#d6b36a] group-hover:shadow-[0_15px_45px_rgba(214,179,106,0.18)]">
                    <div className="flex h-[76px] w-[76px] flex-col items-center justify-center rounded-full bg-[#faf8f2]">
                      <Icon className="h-6 w-6 text-[#a5833c]" />

                      <span className="mt-1 text-[10px] font-black tracking-widest text-[#999]">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="mt-8 rounded-2xl border border-[#e9e9e9] bg-white p-7 text-center transition duration-300 group-hover:-translate-y-1 group-hover:border-[#d6b36a]/40 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)]">
                    <h3 className="text-xl font-bold text-[#1a1a1a]">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#707070]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 overflow-hidden rounded-3xl border border-[#e8e5dc] bg-[#faf9f5]"
        >
          <div className="grid md:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className={`px-8 py-9 text-center ${
                  index !== highlights.length - 1
                    ? "border-b border-[#e5e2d9] md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="text-3xl font-black tracking-tight text-[#8d7135] md:text-4xl">
                  {item.value}
                </div>

                <div className="mt-2 text-sm font-medium text-[#666]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p className="text-sm leading-7 text-[#777] md:text-base">
            Yoga therapy is personalised to the individual. Your therapist
            will guide you through practices appropriate to your assessment,
            needs and current level of experience.
          </p>

          <Link
            href="/booking"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#1a1a1a] px-8 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#2b2b2b] hover:shadow-[0_15px_35px_rgba(0,0,0,0.15)]"
          >
            Book Your Consultation

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}