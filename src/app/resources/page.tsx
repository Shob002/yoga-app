"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, FlaskConical, Wind, FileText } from "lucide-react";

const resources = [
  {
    href: "/resources/articles",
    icon: BookOpen,
    title: "Articles",
    description: "Practical articles covering yoga therapy, lifestyle, breathing, stress management, and everyday wellbeing.",
  },
  {
    href: "/resources/research",
    icon: FlaskConical,
    title: "Research & Evidence",
    description: "Research-informed perspectives on yoga, mindfulness, pranayama, and therapeutic wellness practices.",
  },
  {
    href: "/resources/pranayama",
    icon: Wind,
    title: "Pranayama Library",
    description: "Traditional breathing practices, their methods, precautions, and potential therapeutic applications.",
  },
  {
    href: "/resources/guides",
    icon: FileText,
    title: "Wellness Guides",
    description: "Simple guides to build sustainable habits around movement, breathing, relaxation, and mindfulness.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[#FAF8F5] px-6 pb-16 pt-[120px] lg:px-8 lg:pb-20 lg:pt-[140px]">
        <div className="mx-auto max-w-[1240px]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1F3528]">Knowledge Center</p>
            <h1 className="max-w-[720px] text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1A1A1A] lg:text-[64px]">Learn. Understand. Practice.</h1>
            <p className="mt-4 max-w-[600px] text-[16px] leading-[1.7] text-[#555555]">Explore educational resources about yoga therapy, pranayama, meditation, lifestyle, and evidence-informed wellness.</p>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-4 sm:grid-cols-2">
            {resources.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                  <Link href={item.href} className="group flex h-full flex-col rounded-lg border border-[#E0DCD6] bg-white p-7 transition-all duration-300 hover:border-[#1F3528] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] lg:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F2EFEA] transition-colors duration-300 group-hover:bg-[#1F3528]">
                      <Icon className="h-6 w-6 text-[#1F3528] transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <h3 className="mt-6 text-[22px] font-semibold text-[#1A1A1A]">{item.title}</h3>
                    <p className="mt-3 flex-1 text-[14px] leading-[1.7] text-[#555555]">{item.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#1F3528] opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Explore <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="border-t border-[#E0DCD6] pt-10">
            <p className="text-[13px] leading-[1.7] text-[#8A8480]">
              Educational resources are intended for general wellness education and should not be treated as a substitute for diagnosis, emergency care, or individualized medical treatment. For personalized guidance, consult a qualified yoga therapist.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}