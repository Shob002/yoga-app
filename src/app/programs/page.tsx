import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Building2,
  Check,
  HeartPulse,
  Sparkles,
  UserRound,
} from "lucide-react";

import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

const programs = [
  {
    icon: Brain,
    number: "01",
    title: "14 Day Stress Reset",
    subtitle: "RESET • REGULATE • RESTORE",
    description:
      "A focused program combining gentle yoga, pranayama, relaxation, and mindfulness practices to help establish a calmer and more consistent daily routine.",
    duration: "14 Days",
    format: "Online Guided Program",
    features: [
      "Initial wellness assessment",
      "Personalized daily practice",
      "Pranayama guidance",
      "Guided relaxation",
      "Mindfulness practices",
      "Progress review",
    ],
  },
  {
    icon: Sparkles,
    number: "02",
    title: "30 Day Transformation",
    subtitle: "PRACTICE • PROGRESS • TRANSFORM",
    description:
      "A structured month-long wellness journey combining personalized yoga therapy, breathing practices, meditation, relaxation, and lifestyle guidance.",
    duration: "30 Days",
    format: "Personalized Online Therapy",
    features: [
      "Detailed initial assessment",
      "Personalized yoga therapy plan",
      "Progressive movement practices",
      "Pranayama guidance",
      "Meditation and relaxation",
      "Lifestyle recommendations",
      "Regular progress review",
    ],
  },
  {
    icon: UserRound,
    number: "03",
    title: "Personal Therapy",
    subtitle: "YOUR NEEDS • YOUR PRACTICE",
    description:
      "One-to-one yoga therapy designed around your individual needs, lifestyle, goals, experience, and current wellbeing.",
    duration: "Flexible",
    format: "One-to-One Online",
    features: [
      "Individual assessment",
      "Personalized therapy plan",
      "One-to-one guidance",
      "Practice modifications",
      "Breath training",
      "Relaxation practices",
      "Ongoing adaptation",
    ],
  },
  {
    icon: Building2,
    number: "04",
    title: "Corporate Wellness",
    subtitle: "HEALTHY PEOPLE • HEALTHY WORKPLACE",
    description:
      "Yoga and wellness sessions designed for organizations looking to support employee wellbeing, stress management, movement, and workplace balance.",
    duration: "Custom",
    format: "Organizations & Teams",
    features: [
      "Workplace wellness assessment",
      "Group yoga sessions",
      "Stress management",
      "Breathing sessions",
      "Mindfulness and relaxation",
      "Custom scheduling",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050706] text-[#f7efe0]">
      {/* EXISTING SITE NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative px-6 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d6b36a]/25 bg-[#d6b36a]/5 px-5 py-2.5">
              <HeartPulse className="h-4 w-4 text-[#d6b36a]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#d6b36a]">
                Yoga Therapy Programs
              </span>
            </div>

            <h1 className="text-[clamp(3.2rem,8vw,7rem)] font-black leading-[0.88] tracking-[-0.065em]">
              Programs Built
              <span className="block text-[#d6b36a]">
                Around You.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#aeb9b1] md:text-xl">
              Personalized yoga therapy programs designed around your needs,
              goals, lifestyle, and wellness journey.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="group inline-flex items-center gap-3 rounded-full bg-[#d6b36a] px-7 py-4 text-sm font-black uppercase tracking-wider text-[#050706] transition hover:-translate-y-1 hover:shadow-[0_0_50px_#d6b36a44]"
              >
                Start Assessment

                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/therapists"
                className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-bold text-white/80 transition hover:border-[#d6b36a]/40 hover:bg-white/[0.06]"
              >
                Meet Our Therapists
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#7bae8a]">
              Choose Your Path
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Wellness programs{" "}
              <span className="text-[#d6b36a]">with purpose.</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <article
                  key={program.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#d6b36a]/30 hover:bg-white/[0.045] md:p-9"
                >
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#d6b36a]/5 blur-3xl transition group-hover:bg-[#d6b36a]/10" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d6b36a]/20 bg-[#d6b36a]/5">
                        <Icon className="h-5 w-5 text-[#d6b36a]" />
                      </div>

                      <span className="text-xs font-black tracking-[0.2em] text-white/20">
                        {program.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-2xl font-black text-white">
                      {program.title}
                    </h3>

                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7bae8a]">
                      {program.subtitle}
                    </p>

                    <p className="mt-5 text-sm leading-7 text-[#9da9a1]">
                      {program.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/50">
                        {program.duration}
                      </span>

                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white/50">
                        {program.format}
                      </span>
                    </div>

                    <div className="my-7 h-px bg-white/10" />

                    <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-white/50">
                      Includes
                    </p>

                    <ul className="grid gap-3 sm:grid-cols-2">
                      {program.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-white/65"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d6b36a]" />

                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/booking"
                      className="group/link mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-[#d6b36a]"
                    >
                      Begin Program

                      <ArrowRight className="h-4 w-4 transition group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-white/10 bg-[#0a100d] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d6b36a]">
              How It Works
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-6xl">
              From assessment{" "}
              <span className="text-[#7bae8a]">
                to practice.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#9eaaa2]">
              We begin by understanding you before recommending a practice.
              Your sessions can then be adapted as your experience and needs
              change.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Assess",
                text: "Understand your current needs, lifestyle, movement, breathing, and goals.",
              },
              {
                number: "02",
                title: "Plan",
                text: "Develop a personalized yoga therapy approach based on your assessment.",
              },
              {
                number: "03",
                title: "Practice",
                text: "Learn techniques with guidance and gradually build consistency.",
              },
              {
                number: "04",
                title: "Review",
                text: "Track progress and adapt your practice when required.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-6"
              >
                <span className="text-xs font-black tracking-[0.2em] text-[#d6b36a]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-black text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#89968e]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.025] p-7 text-center md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d6b36a]">
            Important
          </p>

          <p className="mt-4 text-sm leading-7 text-[#8f9b93]">
            Yoga therapy is complementary wellness support and should not
            replace emergency medical care, diagnosis, medication, or treatment
            prescribed by a qualified healthcare professional.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] border border-[#d6b36a]/20 bg-gradient-to-br from-[#172019] to-[#0a0e0b] p-10 text-center md:p-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#d6b36a]/10 blur-[100px]" />

          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d6b36a]">
              Begin Your Journey
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-6xl">
              Your practice.
              <span className="block text-[#7bae8a]">
                Your pace. Your journey.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#9ba79f]">
              Start with an assessment and find the right Hayagriva Yoga
              program for your goals.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/booking"
                className="group inline-flex items-center gap-3 rounded-full bg-[#d6b36a] px-8 py-4 text-sm font-black uppercase tracking-wider text-[#050706] transition hover:-translate-y-1 hover:shadow-[0_0_50px_#d6b36a44]"
              >
                Start Assessment

                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/15 px-8 py-4 text-sm font-bold text-white/80 transition hover:bg-white/5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXISTING SITE FOOTER */}
      <Footer />
    </main>
  );
}