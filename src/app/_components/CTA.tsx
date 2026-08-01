"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Wind, HeartPulse, Brain, Leaf, BarChart3 } from "lucide-react";

const methods = [
  { icon: ClipboardCheck, title: "Clinical Assessment", description: "Health history, lifestyle patterns, stress levels, and therapeutic needs evaluation." },
  { icon: Wind, title: "Breath Mapping", description: "Scientific breath observation and pranayama for nervous system regulation." },
  { icon: HeartPulse, title: "Therapeutic Movement", description: "Condition-specific yoga for mobility, strength, and functional recovery." },
  { icon: Brain, title: "Mind Regulation", description: "Meditation and mindfulness for emotional balance and mental clarity." },
  { icon: Leaf, title: "Lifestyle Correction", description: "Personalized guidance for sleep, nutrition, and sustainable routines." },
  { icon: BarChart3, title: "Progress Tracking", description: "Continuous review and adaptation based on measurable improvements." },
];

export default function TherapyMethod() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1F3528]">Our Methodology</p>
          <h2 className="max-w-[720px] text-[48px] font-bold leading-[1.05] tracking-[-0.02em] text-[#1A1A1A] lg:text-[64px]">A complete therapeutic system for body, breath, and mind.</h2>
          <p className="mt-4 max-w-[600px] text-[16px] leading-[1.7] text-[#555555]">Beyond ordinary yoga classes. A structured clinical approach combining assessment, therapy, pranayama, meditation, and lifestyle transformation.</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }} viewport={{ once: true }} className="group rounded-lg border border-[#E0DCD6] bg-white p-7 transition-all duration-300 hover:border-[#1F3528] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] lg:p-8">
                <span className="text-[12px] font-semibold text-[#8A8480]">0{i + 1}</span>
                <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#F2EFEA] transition-colors duration-300 group-hover:bg-[#1F3528]">
                  <Icon className="h-5 w-5 text-[#1F3528] transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="mt-5 text-[18px] font-semibold leading-tight text-[#1A1A1A] lg:text-[20px]">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[#555555]">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="mt-12 border-t border-[#E0DCD6] pt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-[22px] font-semibold text-[#1A1A1A]">Every journey follows a structured pathway.</h3>
            <p className="mt-1 text-[15px] text-[#555555]">Assess → Regulate → Restore → Transform</p>
          </div>
          <Link href="/booking" className="inline-flex h-[48px] items-center gap-2 rounded-full bg-[#1A1A1A] px-7 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#333333]">
            Start Your Assessment <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}