"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Monitor, ClipboardCheck, UserCheck, FileText, PlayCircle, Home, MessageCircle, BarChart3 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Monitor,
    title: "Register Online",
    description: "Fill out a quick form with your details, health history, and wellness goals. Takes less than 5 minutes.",
  },
  {
    step: "02",
    icon: UserCheck,
    title: "Video Consultation",
    description: "Meet your therapist face-to-face via secure video call. Discuss your concerns, lifestyle, and what you want to achieve.",
  },
  {
    step: "03",
    icon: ClipboardCheck,
    title: "Clinical Assessment",
    description: "A thorough evaluation of your physical, mental, and lifestyle factors. We identify root causes, not just symptoms.",
  },
  {
    step: "04",
    icon: FileText,
    title: "Personalized Therapy Plan",
    description: "Your therapist designs a structured plan with specific yoga practices, breathwork, and daily routines tailored to you.",
  },
  {
    step: "05",
    icon: PlayCircle,
    title: "Live One-to-One Sessions",
    description: "Begin your therapy through interactive online sessions. Real-time guidance, posture correction, and personalized attention.",
  },
  {
    step: "06",
    icon: Home,
    title: "Guided Home Practice",
    description: "Access your customized practice library. Follow along with recorded sessions designed specifically for your needs.",
  },
  {
    step: "07",
    icon: MessageCircle,
    title: "Weekly Follow-ups",
    description: "Regular check-ins via call or chat. Track your progress, address challenges, and refine your practice.",
  },
  {
    step: "08",
    icon: BarChart3,
    title: "Progress Evaluation",
    description: "Review measurable improvements in your health markers. Reassess goals and plan your next phase of wellness.",
  },
];

export default function TherapyMethod() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1F3528]">
            How It Works
          </p>
          <h2 className="max-w-[640px] text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1A1A1A] lg:text-[56px]">
            Your therapy journey, entirely online.
          </h2>
          <p className="mt-4 max-w-[560px] text-[16px] leading-[1.7] text-[#555555]">
            From your first consultation to lasting results — everything happens from the comfort of your home. No travel. No waiting rooms.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="group relative rounded-lg border border-[#E6E6E6] bg-white p-7 transition-shadow duration-200 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              >
                {/* Step number */}
                <span className="text-[12px] font-semibold text-[#8A8480]">
                  {item.step}
                </span>

                {/* Icon */}
                <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#F2EFEA]">
                  <Icon className="h-5 w-5 text-[#1F3528]" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-[16px] font-semibold leading-tight text-[#1A1A1A]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[13px] leading-[1.7] text-[#555555]">
                  {item.description}
                </p>

                {/* Connector line (between grid items, not last row) */}
                {index < 4 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-[#E6E6E6] lg:block" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-[#E6E6E6] pt-12"
        >
          <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:justify-between">
            <div>
              <h3 className="text-[24px] font-semibold text-[#1A1A1A]">
                Ready to start your journey?
              </h3>
              <p className="mt-1 text-[15px] text-[#555555]">
                Book your first consultation online — it takes less than 5 minutes.
              </p>
            </div>
            <Link
              href="/booking"
              className="mt-5 inline-flex h-[48px] items-center gap-2 rounded-full bg-[#1A1A1A] px-7 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#333333] sm:mt-0"
            >
              Start Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}