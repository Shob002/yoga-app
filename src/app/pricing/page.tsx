"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Initial Consultation",
    price: "₹1,500",
    duration: "60 minutes",
    description: "A comprehensive first session to understand your health history, goals, and create a personalized therapy plan.",
    features: [
      "Detailed health assessment",
      "Lifestyle & goal discussion",
      "Personalized therapy plan",
      "Breathwork introduction",
      "Follow-up recommendations",
    ],
    cta: "Book Consultation",
    href: "/booking",
    featured: false,
  },
  {
    name: "Personal Therapy",
    price: "₹1,200",
    duration: "per session",
    description: "Ongoing one-to-one yoga therapy sessions tailored to your condition and progress.",
    features: [
      "Individualized session plan",
      "Progress tracking",
      "Practice refinement",
      "Lifestyle guidance",
      "Flexible scheduling",
    ],
    cta: "Get Started",
    href: "/booking",
    featured: true,
  },
  {
    name: "4-Session Package",
    price: "₹4,200",
    duration: "4 sessions",
    description: "A structured program with consistent support for deeper transformation and lasting results.",
    features: [
      "Four 60-minute sessions",
      "Personalized practice plan",
      "Progress assessments",
      "Priority scheduling",
      "Email support between sessions",
    ],
    cta: "Choose Package",
    href: "/booking",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#FAF8F5] px-6 pb-16 pt-[120px] lg:px-8 lg:pb-20 lg:pt-[140px]">
        <div className="mx-auto max-w-[1240px] text-center">
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#1F3528]">
            Pricing
          </p>
          <h1 className="text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-[#1A1A1A] lg:text-[56px]">
            Simple, transparent pricing.
          </h1>
          <p className="mx-auto mt-4 max-w-[600px] text-[16px] leading-[1.7] text-[#555555]">
            Choose the option that fits your wellness journey. All sessions are one-to-one with certified yoga therapists.
          </p>
        </div>
      </section>

      <section className="px-6 pb-[120px] pt-16 lg:px-8 lg:pb-[140px] lg:pt-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col rounded-lg border p-8 ${
                  plan.featured
                    ? "border-[#1F3528] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                    : "border-[#E6E6E6] bg-white"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1F3528] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-[20px] font-semibold text-[#1A1A1A]">{plan.name}</h3>
                  <p className="mt-1 text-[14px] text-[#8A8480]">{plan.duration}</p>
                </div>

                <div className="mb-6">
                  <span className="text-[40px] font-bold leading-none tracking-[-0.02em] text-[#1A1A1A]">
                    {plan.price}
                  </span>
                </div>

                <p className="mb-8 text-[14px] leading-[1.7] text-[#555555]">
                  {plan.description}
                </p>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1F3528]" />
                      <span className="text-[14px] text-[#555555]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`flex h-[48px] w-full items-center justify-center gap-2 rounded-full text-[14px] font-semibold transition-colors duration-150 ${
                    plan.featured
                      ? "bg-[#1F3528] text-white hover:bg-[#15251C]"
                      : "border border-[#D9D9D9] text-[#1A1A1A] hover:border-[#C8A96E]"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center text-[14px] text-[#8A8480]">
            All prices are in Indian Rupees. Need a custom corporate program?{" "}
            <Link href="/contact" className="font-medium text-[#1F3528] underline underline-offset-4 hover:text-[#15251C]">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}