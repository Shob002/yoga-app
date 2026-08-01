"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Qualified Therapists",
    description: "All our yoga therapists hold MSc in Yoga Therapy from MAHE, Manipal — India's premier institution for yoga education.",
  },
  {
    title: "Evidence-Based Approach",
    description: "Practices grounded in clinical reasoning and research, not trends. Every protocol is backed by therapeutic principles.",
  },
  {
    title: "One-to-One Sessions",
    description: "No group classes. Every session is private, personalized, and focused entirely on your condition and goals.",
  },
  {
    title: "Online Convenience",
    description: "Connect from anywhere. Live video sessions with real-time guidance, posture correction, and personal attention.",
  },
  {
    title: "Structured Programs",
    description: "Clear therapy pathways with assessment, planning, practice, and progress tracking — not random classes.",
  },
  {
    title: "Holistic Integration",
    description: "Movement, breathwork, meditation, and lifestyle guidance combined into one cohesive therapy plan.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#FAF8F5] px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1F3528]">
            Why Hayagriva
          </p>
          <h2 className="max-w-[640px] text-[48px] font-bold leading-[1.05] tracking-[-0.02em] text-[#1A1A1A] lg:text-[64px]">
            What sets our therapy apart.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="rounded-lg border border-[#E0DCD6] bg-white p-7 transition-all duration-300 hover:border-[#1F3528] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] lg:p-8"
            >
              <CheckCircle2 className="h-6 w-6 text-[#1F3528]" />
              <h3 className="mt-4 text-[18px] font-semibold leading-tight text-[#1A1A1A]">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-[#555555]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}